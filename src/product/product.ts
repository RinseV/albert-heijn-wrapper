import { Query, Headers } from '../ah';
import { ahObject } from '../base/AHObject';
import { ProductModel } from './productModel';

export class Product extends ahObject {
    /**
     * Get product from given ID
     * @param productId Product ID
     */
    async getProductFromId(
        productId: number,
        headers?: Headers,
        query?: Query
    ): Promise<ProductModel> {
        return await this.ah.get(`zoeken/api/products/product`, headers, {
            webshopId: `${productId}`,
            ...query,
        });
    }
}
