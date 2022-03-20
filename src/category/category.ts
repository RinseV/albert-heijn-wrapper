import { AdditionalRequestOptions } from '../ah';
import { AHObject } from '../base/AHObject';
import { CategoryModel, SubCategoryModel } from './categoryModel';

export class Category extends AHObject {
    /**
     * Returns all product categories
     */
    async getProductCategories(additionalRequestOptions?: AdditionalRequestOptions): Promise<CategoryModel[]> {
        return await this.ah.get('mobile-services/v1/product-shelves/categories', additionalRequestOptions);
    }

    /**
     * Returns all product subcategories belonging to a category
     * @param categoryId Category ID
     */
    async getProductSubCategories(
        categoryId: number,
        additionalRequestOptions?: AdditionalRequestOptions
    ): Promise<SubCategoryModel[]> {
        return await this.ah.get(
            `mobile-services/v1/product-shelves/categories/${categoryId}/sub-categories`,
            additionalRequestOptions
        );
    }
}
