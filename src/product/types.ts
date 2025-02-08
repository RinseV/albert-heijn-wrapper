import type {
  Product,
  SearchInput,
  SearchProductCardPayload,
  SearchProductsSortType,
} from "../schema";

export type ProductSearchParams = {
  sortType?: SearchProductsSortType;
  searchInput?: SearchInput;
};

export type ProductSearchResponse = {
  searchProductsExperimental: SearchProductCardPayload;
};

export type ProductResponse = {
  product: Product;
};
