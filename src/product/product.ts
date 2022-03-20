import { AdditionalRequestOptions, Query } from '../ah';
import { AHObject, PaginationOptions } from '../base/AHObject';
import { SingleProductModel } from './productModel';
import { ProductQueryModel } from './productQueryModel';

export interface ProductOptions extends PaginationOptions {
    filter?: ProductFilter;
    sort?: ProductSortOptions;
    categoryId?: number;
}

export class Product extends AHObject {
    /**
     * Get product from ID
     * @param productId Product ID
     */
    async getProductFromId(
        productId: number,
        additionalRequestOptions?: AdditionalRequestOptions
    ): Promise<SingleProductModel> {
        return await this.ah.get(`mobile-services/product/detail/v4/fir/${productId}`, additionalRequestOptions);
    }

    /**
     * Get products from given product name
     * @param productName Product name to search for
     * @param options Options for the query
     * @param options.page Page number (default 0)
     * @param options.size Number of products per page (default 10)
     * @param options.filter Producter filter (from ProductFilter)
     * @param options.sort Sort options (from ProductSortOptions)
     * @param options.categoryId Category ID to filter products by
     */
    async getProductsFromName(
        productName: string,
        options?: ProductOptions,
        additionalRequestOptions?: AdditionalRequestOptions
    ): Promise<ProductQueryModel> {
        // We make a new query since we can only have the 'sortOn' and 'filters' fields if those options are provided
        const totalQuery: Query = {
            query: productName,
            sortOn: (options?.sort ?? '').toString(),
            taxonomyId: (options?.categoryId ?? '').toString(),
            page: (options?.page ?? 0).toString(),
            size: (options?.size ?? 10).toString()
        };
        if (options?.filter) {
            totalQuery['filters'] = this.translateProductFilterToQuery(options.filter);
        }
        return await this.ah.get(`mobile-services/product/search/v2`, {
            query: {
                ...totalQuery
            },
            ...additionalRequestOptions
        });
    }

    /**
     * Translates the product filters to a usable filter query
     */
    private translateProductFilterToQuery(filter: ProductFilter): string {
        const out: string[] = [];
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

/**
 * 3 currently available sort options for products
 */
export enum ProductSortOptions {
    Relevant = 'RELEVANCE',
    PriceDesc = 'PRICEHIGHLOW',
    PriceAsc = 'PRICELOWHIGH',
    NutriScore = 'NUTRISCORE'
}

/**
 * Currently available filters
 * brand: simply a string of the brand (including spaces and capital letters)
 * type: as defined by AH
 * property: can be filtered from ProductPropertyFilter
 * bonus: whether the product is currently in the bonus or not
 */
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
    Vegeterian = 'sp_include_dieet_vegetarisch'
}
