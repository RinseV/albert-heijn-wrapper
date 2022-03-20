import { AdditionalRequestOptions } from '../ah';
import { AHObject } from '../base/AHObject';
import { StoreModel, StoreQueryModel } from './storeModel';

export class Store extends AHObject {
    /**
     * Returns stores closest to the given location (sorted by distance ascending)
     * @param latitude Latitude (degree)
     * @param longitude Longitude (degree)
     * @param maxResults Amount of stores to return
     */
    async getStoresFromLocation(
        latitude: number,
        longitude: number,
        maxResults?: number,
        additionalRequestOptions?: AdditionalRequestOptions
    ): Promise<StoreQueryModel> {
        return await this.ah.post(
            'graphql',
            {
                operationName: 'SearchStoresQuery',
                query: 'query SearchStoresQuery($latitude: Float!, $longitude: Float!, $openingHours: [StoreOpeningHoursInput!], $maxResults: PageSize!) { stores(filter: {location: {latitude: $latitude, longitude: $longitude}, openingHours: $openingHours}, size: $maxResults) { __typename result { __typename ...Store } } } fragment Store on Store { __typename id address { __typename street houseNumber houseNumberExtra postalCode city countryCode } openingDays { __typename date openingHour { __typename openFrom openUntil } nextWeekDate nextWeekOpeningHour { __typename openFrom openUntil } } geoLocation { __typename latitude longitude } phone storeType }',
                variables: {
                    latitude: latitude,
                    longitude: longitude,
                    maxResults: maxResults ? maxResults : 12,
                    openingHours: []
                }
            },
            additionalRequestOptions
        );
    }

    /**
     * Returns only the closest store to the given location
     * @param latitude Latitude (degree)
     * @param longitude Longitude (degree)
     */
    async getClosestStoreFromLocation(
        latitude: number,
        longitude: number,
        additionalRequestOptions?: AdditionalRequestOptions
    ): Promise<StoreModel> {
        const stores = await this.getStoresFromLocation(latitude, longitude, 1, additionalRequestOptions);
        return stores.data.stores.result[0];
    }
}
