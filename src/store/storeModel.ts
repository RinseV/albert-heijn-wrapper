export interface StoreQueryModel {
    data: StoreData;
}

export interface StoreData {
    stores: Stores;
}

export interface Stores {
    result: StoreModel[];
}

export interface StoreModel {
    address: Address;
    geoLocation: GeoLocation;
    id: number;
    openingDays: OpeningDay[];
    phone: string;
    storeType: 'XL' | 'REGULAR' | 'TOGO';
}

export interface Address {
    city: string;
    countryCode: string;
    houseNumber: string;
    houseNumberExtra: string;
    postalCode: string;
    street: string;
}

export interface GeoLocation {
    latitude: number;
    longitude: number;
}

export interface NextWeekOpeningHour {
    openFrom: string;
    openUntil: string;
}

export interface OpeningHour {
    openFrom: string;
    openUntil: string;
}

export interface OpeningDay {
    date: string;
    nextWeekDate: string;
    nextWeekOpeningHour: NextWeekOpeningHour;
    openingHour: OpeningHour;
}
