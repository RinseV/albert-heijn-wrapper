import { Image } from '../product/productModel';

export interface CategoryModel {
    id: number;
    images: Image[];
    name: string;
    nix18: boolean;
    slugifiedName: string;
}

export interface SubCategoryModel {
    children: CategoryModel[];
    parent: CategoryModel;
}
