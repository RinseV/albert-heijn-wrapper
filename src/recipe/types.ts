import type {
  Recipe,
  RecipeSearchQueryFilter,
  RecipeSearchResult,
  RecipeSearchSortOption,
} from "../schema";

export type RecipeSearchParams = {
  start?: number;
  size?: number;
  sort?: RecipeSearchSortOption;
  filters?: RecipeSearchQueryFilter[];
  priorityRecipeIds?: number[];
  favoriteRecipeIds?: number[];
  recipeIds?: number[];
  ingredients?: string[];
  includeAggregations?: boolean;
};

export type RecipeSearchResponse = {
  recipeSearchV2: RecipeSearchResult;
};

export type RecipeParams = {
  servings?: number;
};

export type RecipeResponse = {
  recipe: Recipe;
};
