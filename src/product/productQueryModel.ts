import { Product } from './productModel';

export interface ProductQueryModel {
    filters: Filter[];
    links: Links;
    page: Page;
    products: Product[];
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
