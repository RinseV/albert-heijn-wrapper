import { AHObject } from '../base/AHObject';
import { Headers, Query } from '../ah';
import {
    OpeningHour,
    OpeningHourDate,
    StoreModel,
    StoreQueryModel,
} from './storeModel';
import { parse } from 'date-fns';

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
        headers?: Headers,
        query?: Query
    ): Promise<StoreQueryModel> {
        return await this.ah.get(`mobile-services/v1/stores`, headers, {
            latitude: latitude.toString(),
            longitude: longitude.toString(),
            maxResults: (maxResults ? maxResults : 12).toString(),
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
    ): Promise<StoreModel> {
        const stores = await this.getStoresFromLocation(
            latitude,
            longitude,
            1,
            headers,
            query
        );
        return stores.stores[0];
    }
}

/**
 * Helper function that converts the given OpeningHour[] to an array with Date objects
 */
export function convertOpeningHoursToDates(
    openingHours: OpeningHour[]
): OpeningHourDate[] {
    return openingHours.map((openingTime) => {
        const date = parse(openingTime.date, 'yyyy-MM-dd', new Date());
        return {
            date: date,
            openFrom: parse(openingTime.openFrom, 'HHmm', date),
            openUntil: parse(openingTime.openUntil, 'HHmm', date),
        };
    });
}
