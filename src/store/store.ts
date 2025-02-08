import { AHObject } from "../base";
import { STORES_SEARCH_QUERY } from "./query";
import type { StoresSearchParams, StoresSearchResponse } from "./types";

export class AHStore extends AHObject {
  async search(params?: StoresSearchParams) {
    const { storesSearch } = await this.ah.graphql<StoresSearchResponse>(
      STORES_SEARCH_QUERY,
      params,
    );
    return storesSearch;
  }
}
