import { AHObject } from '../base/AHObject';
import { Headers, Query } from '../ah';
import { StoreQueryModel } from './storeModel';

export class Store extends AHObject {
    /**
     * Returns stores closest to the given location (sorted by distance descending)
     * @param latitude Latitude (degree)
     * @param longitude Longitude (degree)
     * @param maxResults Amount of stores to return
     */
    async getStoresFromLocation(
        latitude: number,
        longitude: number,
        maxResults: number,
        headers?: Headers,
        query?: Query
    ): Promise<StoreQueryModel> {
        return await this.ah.get(`mobile-services/v1/stores`, headers, {
            latitude: latitude.toString(),
            longitude: longitude.toString(),
            maxResults: maxResults.toString(),
            ...query,
        });
    }

    /**
     * Returns only the closest store to the given location
     * @param latitude Latitude (degree)
     * @param longitude Longitude (degree)
     */
    async getClosestStoreFromLocation(
        latitude: number,
        longitude: number,
        headers?: Headers,
        query?: Query
    ): Promise<StoreQueryModel> {
        return await this.getStoresFromLocation(
            latitude,
            longitude,
            1,
            headers,
            query
        );
    }
}
