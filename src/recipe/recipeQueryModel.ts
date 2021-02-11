import { RecipeImage } from './recipeModel';

export interface RecipeQueryModel {
    content: Content[];
    filters: Filter[];
    links: Link[];
    page: Page;
    totalCount: number;
}

interface Page {
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;
}

interface Link {
    href: string;
    rel: string;
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

interface Content {
    cookTime: number;
    id: number;
    recipeImage: RecipeImage[];
    title: string;
}
