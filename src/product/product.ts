import { AHObject } from '../base/AHObject';
import { Headers, Query } from '../ah';
import { ProductModel } from './productModel';
import { ProductQueryModel } from './productQueryModel';

export class Product extends AHObject {
    async getProductFromId(
        productId: number,
        headers?: Headers,
        query?: Query
    ): Promise<ProductModel> {
        return await this.ah.get(
            `mobile-services/product/detail/v4/fir/${productId}`,
            headers,
            query
        );
    }

    async getProductsFromName(
        productName: string,
        sort?: ProductSortOptions,
        filter?: ProductFilter,
        headers?: Headers,
        query?: Query
    ): Promise<ProductQueryModel> {
        // TODO: query fields should not be there if no query
        return await this.ah.get(`mobile-services/product/search/v2`, headers, {
            query: productName,
            sortOn: (sort ? sort : '').toString(),
            filters: filter ? this.translateProductFilterToQuery(filter) : '',
            ...query,
        });
    }

    async getFirstProductFromName(
        productName: string,
        sort?: ProductSortOptions,
        filter?: ProductFilter,
        headers?: Headers,
        query?: Query
    ): Promise<ProductModel> {
        const products = await this.getProductsFromName(
            productName,
            sort,
            filter,
            headers,
            query
        );
        return products.products[0];
    }

    /**
     * Translates the product filters to a usable filter query
     */
    private translateProductFilterToQuery(filter: ProductFilter): string {
        let out: string[] = [];
        if (filter.brand) {
            out.push(`brand=${filter.brand}`);
        }
        if (filter.type) {
            out.push(`taxonomy=${filter.type}`);
        }
        if (filter.property) {
            out.push(`property=${filter.property.join(',')}`);
        }
        if (filter.bonus) {
            out.push(`bonus=Bonus`);
        }
        return out.join('|');
    }
}

export enum ProductSortOptions {
    Relevant = 'RELEVANCE',
    PriceDesc = 'PRICEHIGHLOW',
    PriceAsc = 'PRICELOWHIGH',
}

export interface ProductFilter {
    brand?: string;
    type?: number;
    property?: ProductPropertyFilter[];
    bonus?: boolean;
}

export enum ProductPropertyFilter {
    Organic = 'np_biologisch',
    PriceFavorite = 'np_goedkoopje',
    New = 'np_nieuw',
    BulkSize = 'np_voordeel',
    Freezer = 'diepvries',
}
