export interface StoreQueryModel {
    favouriteStores: any[];
    filters: Filter[];
    stores: StoreModel[];
}

export interface StoreModel {
    address: Address;
    fax?: string;
    floorSpace: number;
    formatCode: string;
    geoLocation: GeoLocation;
    id: number;
    name: string;
    openingHours: OpeningHour[];
    operatingCompanyCode: string;
    salesFormulaDescription: string;
    salesFormulaNumber: number;
    services: Service[];
    sizeCode: string;
    storeType: string;
    telephoneNumber: string;
}

interface Service {
    code: string;
    description: string;
    shortDescription: string;
}

export interface OpeningHour {
    date: string;
    openFrom: string;
    openUntil: string;
}

export interface OpeningHourDate {
    date: Date;
    openFrom: Date;
    openUntil: Date;
}

interface GeoLocation {
    geocoderPrecision: number;
    latitude: number;
    longitude: number;
}

interface Address {
    city: string;
    countryCode: string;
    houseNumber: string;
    postalCode: string;
    street: string;
}

interface Filter {
    booleanFilter: boolean;
    label: string;
    options: Option[];
    type: string;
}

interface Option {
    count: number;
    display: boolean;
    id: string;
    label: string;
}
