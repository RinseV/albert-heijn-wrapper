import type { StoresFilterInput, StoresResultType } from "../schema";

export type StoresSearchParams = {
  filter?: StoresFilterInput;
  limit?: number;
  start?: number;
};

export type StoresSearchResponse = {
  storesSearch: StoresResultType;
};
