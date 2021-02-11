import { AH } from './ah';
import {
    KitchenOriginRecipeFilterOptions,
    RecipeFilter,
} from './recipe/recipe';

async function main() {
    const ah = new AH(true);
    const recipeFilter: RecipeFilter = {
        originFilter: KitchenOriginRecipeFilterOptions.American,
    };
    const product = await ah
        .recipe()
        .getFirstRecipeFromName('burger', recipeFilter);
    console.log(product);
}

main();
