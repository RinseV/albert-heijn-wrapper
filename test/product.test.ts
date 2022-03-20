import axios from 'axios';
import { AH, Product, ProductPropertyFilter, ProductSortOptions } from '../src';

jest.mock('axios');

axios.create = jest.fn().mockReturnThis();
const requestMock = axios.request as jest.Mock;
requestMock.mockImplementation(() => Promise.resolve({ statusText: 'OK' }));

describe('AH Product', () => {
    it('should return a Product object', () => {
        const client = new AH();
        expect(client.product()).toBeDefined();
        expect(client.product()).toBeInstanceOf(Product);
    });

    describe('getProductFromId', () => {
        it('should have been called with correct parameters', async () => {
            const client = new AH();
            const getMock = jest.spyOn(client, 'get');
            getMock.mockImplementation(() => Promise.resolve({}));
            await client.product().getProductFromId(1);
            expect(getMock).toHaveBeenCalledWith('mobile-services/product/detail/v4/fir/1', undefined);
        });
    });

    describe('getProductsFromName', () => {
        it('should have been called with default parameters', async () => {
            const client = new AH();
            const getMock = jest.spyOn(client, 'get');
            getMock.mockImplementation(() => Promise.resolve({}));
            await client.product().getProductsFromName('test');
            expect(getMock).toHaveBeenCalledWith('mobile-services/product/search/v2', {
                query: {
                    query: 'test',
                    sortOn: '',
                    taxonomyId: '',
                    page: '0',
                    size: '10'
                }
            });
        });

        it('should have been called with provided options', async () => {
            const client = new AH();
            const getMock = jest.spyOn(client, 'get');
            getMock.mockImplementation(() => Promise.resolve({}));
            await client.product().getProductsFromName('test', {
                page: 1,
                size: 20,
                sort: ProductSortOptions.PriceAsc,
                categoryId: 1,
                filter: {
                    brand: 'AH',
                    type: 3,
                    property: [ProductPropertyFilter.Organic],
                    bonus: true
                }
            });
            expect(getMock).toHaveBeenCalledWith('mobile-services/product/search/v2', {
                query: {
                    query: 'test',
                    sortOn: ProductSortOptions.PriceAsc,
                    taxonomyId: '1',
                    page: '1',
                    size: '20',
                    filters: `brand=AH|taxonomy=3|property=${ProductPropertyFilter.Organic}|bonus=Bonus`
                }
            });
        });
    });
});
