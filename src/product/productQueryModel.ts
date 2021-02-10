import { ProductModel } from './productModel';

export interface ProductQueryModel {
    configuration: Configuration;
    filters: Filter[];
    links: Links;
    page: Page;
    products: ProductModel[];
    sortOn: string[];
}

interface Page {
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;
}

interface Links {
    current: Current;
    first: Current;
    last: Current;
    next: Current;
}

interface Current {
    href: string;
}

interface Filter {
    booleanFilter: boolean;
    id: string;
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

interface Configuration {
    googleBanners: GoogleBanners;
}

interface GoogleBanners {
    adUnitPath: string;
    customTemplateId: string;
    divGptAd: string;
}
