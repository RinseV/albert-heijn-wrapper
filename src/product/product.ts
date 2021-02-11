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
        filter?: ProductFilter,
        sort?: ProductSortOptions,
        headers?: Headers,
        query?: Query
    ): Promise<ProductQueryModel> {
        // We make a new query since we can only have the 'sortOn' and 'filters' fields if those options are provided
        const totalQuery: Query = {
            query: productName,
        };
        if (sort) {
            totalQuery['sortOn'] = sort.toString();
        }
        if (filter) {
            totalQuery['filters'] = this.translateProductFilterToQuery(filter);
        }
        return await this.ah.get(`mobile-services/product/search/v2`, headers, {
            ...totalQuery,
            ...query,
        });
    }

    async getFirstProductFromName(
        productName: string,
        filter?: ProductFilter,
        sort?: ProductSortOptions,
        headers?: Headers,
        query?: Query
    ): Promise<ProductModel> {
        const products = await this.getProductsFromName(
            productName,
            filter,
            sort,
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
    Conscious = 'sp_bewust',
    Ecological = 'np_ecologisch',
    Etos = 'np_etos',
    Fairtrade = 'np_fairtrade',
    PureHonest = 'np_puureerlij',
    Kids = 'np_kids',
    EggFree = 'sp_include_intolerance_geen_eieren',
    GlutenFree = 'sp_include_intolerance_geen_gluten',
    LactoseFree = 'sp_include_intolerance_geen_lactose',
    LupineFree = 'sp_include_intolerance_geen_lupine',
    MilkFree = 'sp_include_intolerance_geen_melk',
    MustardFree = 'sp_include_intolerance_geen_mosterd',
    NutFree = 'sp_include_intolerance_geen_noten',
    PeanutFree = 'sp_include_intolerance_geen_pindas',
    ShellfishFree = 'sp_include_intolerance_geen_schelpdieren',
    CeleryFree = 'sp_include_intolerance_geen_selderij',
    SesameFree = 'sp_include_intolerance_geen_sesam',
    SoyFree = 'sp_include_intolerance_geen_soja',
    SulfiteFree = 'sp_include_intolerance_geen_sulfiet',
    FishFree = 'sp_include_intolerance_geen_vis',
    LowSugarDiet = 'sp_include_dieet_laag_suiker',
    LowFatDiet = 'sp_include_dieet_laag_vet',
    LowSaltDiet = 'sp_include_dieet_laag_zout',
    Vegan = 'sp_include_dieet_veganistisch',
    Vegeterian = 'sp_include_dieet_vegetarisch',
}
