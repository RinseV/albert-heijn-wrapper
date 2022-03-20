import axios from 'axios';
import { AH, Category } from '../src';

jest.mock('axios');

axios.create = jest.fn().mockReturnThis();
const requestMock = axios.request as jest.Mock;
requestMock.mockImplementation(() => Promise.resolve({ statusText: 'OK' }));

describe('AH Category', () => {
    it('should return a Category object', () => {
        const client = new AH();
        expect(client.category()).toBeDefined();
        expect(client.category()).toBeInstanceOf(Category);
    });

    describe('getProductCategories', () => {
        it('should have been called with correct parameters', async () => {
            const client = new AH();
            const getMock = jest.spyOn(client, 'get');
            getMock.mockImplementation(() => Promise.resolve({}));
            await client.category().getProductCategories();
            expect(getMock).toHaveBeenCalledWith('mobile-services/v1/product-shelves/categories', undefined);
        });
    });

    describe('getProductSubCategories', () => {
        it('should have been called with correct parameters', async () => {
            const client = new AH();
            const getMock = jest.spyOn(client, 'get');
            getMock.mockImplementation(() => Promise.resolve({}));
            await client.category().getProductSubCategories(1);
            expect(getMock).toHaveBeenCalledWith(
                `mobile-services/v1/product-shelves/categories/1/sub-categories`,
                undefined
            );
        });
    });
});
