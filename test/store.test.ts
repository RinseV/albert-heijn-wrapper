import axios from 'axios';
import { AH, Store } from '../src';

jest.mock('axios');

axios.create = jest.fn().mockReturnThis();
const requestMock = axios.request as jest.Mock;
requestMock.mockImplementation(() => Promise.resolve({ statusText: 'OK' }));

describe('AH Store', () => {
    it('should return a Store object', () => {
        const client = new AH();
        expect(client.store()).toBeDefined();
        expect(client.store()).toBeInstanceOf(Store);
    });

    describe('getStoresFromLocation', () => {
        it('should have been called with correct parameters', async () => {
            const client = new AH();
            const postMock = jest.spyOn(client, 'post');
            postMock.mockImplementation(() => Promise.resolve({}));
            await client.store().getStoresFromLocation(50, 4);
            expect(postMock).toHaveBeenCalledWith(
                'graphql',
                {
                    operationName: 'SearchStoresQuery',
                    query: 'query SearchStoresQuery($latitude: Float!, $longitude: Float!, $openingHours: [StoreOpeningHoursInput!], $maxResults: PageSize!) { stores(filter: {location: {latitude: $latitude, longitude: $longitude}, openingHours: $openingHours}, size: $maxResults) { __typename result { __typename ...Store } } } fragment Store on Store { __typename id address { __typename street houseNumber houseNumberExtra postalCode city countryCode } openingDays { __typename date openingHour { __typename openFrom openUntil } nextWeekDate nextWeekOpeningHour { __typename openFrom openUntil } } geoLocation { __typename latitude longitude } phone storeType }',
                    variables: {
                        latitude: 50,
                        longitude: 4,
                        maxResults: 12,
                        openingHours: []
                    }
                },
                undefined
            );
        });
    });

    describe('getClosestStoreFromLocation', () => {
        it('should have been called with correct parameters', async () => {
            const client = new AH();
            const postMock = jest.spyOn(client, 'post');
            postMock.mockImplementation(() =>
                Promise.resolve({
                    data: {
                        stores: {
                            result: [
                                {
                                    id: 1
                                }
                            ]
                        }
                    }
                })
            );
            await client.store().getClosestStoreFromLocation(50, 4);
            expect(postMock).toHaveBeenCalledWith(
                'graphql',
                {
                    operationName: 'SearchStoresQuery',
                    query: 'query SearchStoresQuery($latitude: Float!, $longitude: Float!, $openingHours: [StoreOpeningHoursInput!], $maxResults: PageSize!) { stores(filter: {location: {latitude: $latitude, longitude: $longitude}, openingHours: $openingHours}, size: $maxResults) { __typename result { __typename ...Store } } } fragment Store on Store { __typename id address { __typename street houseNumber houseNumberExtra postalCode city countryCode } openingDays { __typename date openingHour { __typename openFrom openUntil } nextWeekDate nextWeekOpeningHour { __typename openFrom openUntil } } geoLocation { __typename latitude longitude } phone storeType }',
                    variables: {
                        latitude: 50,
                        longitude: 4,
                        maxResults: 1,
                        openingHours: []
                    }
                },
                undefined
            );
        });
    });
});
