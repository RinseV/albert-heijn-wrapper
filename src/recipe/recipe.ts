import { AHObject } from "../base";
import { RECIPE_QUERY, RECIPE_SEARCH_QUERY } from "./query";
import type {
  RecipeParams,
  RecipeResponse,
  RecipeSearchParams,
  RecipeSearchResponse,
} from "./types";

export class AHRecipe extends AHObject {
  async search(query: string, params?: RecipeSearchParams) {
    const { recipeSearchV2 } = await this.ah.graphql<RecipeSearchResponse>(
      RECIPE_SEARCH_QUERY,
      {
        searchText: query,
        ...params,
      },
    );
    return recipeSearchV2;
  }

  async get(id: number, params?: RecipeParams) {
    const { recipe } = await this.ah.graphql<RecipeResponse>(RECIPE_QUERY, {
      id,
      ...params,
    });
    return recipe;
  }
}
