import { AHObject } from "../base";
import { PRODUCT_QUERY, PRODUCT_SEARCH_QUERY } from "./query";
import type {
  ProductResponse,
  ProductSearchParams,
  ProductSearchResponse,
} from "./types";

export class AHProduct extends AHObject {
  async search(query: string, params?: ProductSearchParams) {
    const { searchProductsExperimental } =
      await this.ah.graphql<ProductSearchResponse>(PRODUCT_SEARCH_QUERY, {
        input: {
          query,
          ...params,
        },
      });
    return searchProductsExperimental;
  }

  async get(id: number) {
    const { product } = await this.ah.graphql<ProductResponse>(PRODUCT_QUERY, {
      id,
    });
    return product;
  }
}
