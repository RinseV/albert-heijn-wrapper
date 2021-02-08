import { Query, Headers } from '../ah';
import { AHObject } from '../base/AHObject';
import { ProductModel } from './productModel';

export class Product extends AHObject {
    async getProductFromId(
        productId: string,
        headers?: Headers,
        query?: Query
    ): Promise<ProductModel> {
        return await this.ah.get(
            `product/detail/v4/fir/${productId}`,
            headers,
            query
        );
    }
}
