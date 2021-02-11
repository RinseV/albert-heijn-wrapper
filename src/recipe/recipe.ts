import { Headers, Query } from '../ah';
import { AHObject } from '../base/AHObject';
import { RecipeModel } from './recipeModel';
import { RecipeQueryModel } from './recipeQueryModel';

export class Recipe extends AHObject {
    async getRecipeFromId(
        recipeId: number,
        headers?: Headers,
        query?: Query
    ): Promise<RecipeModel> {
        return await this.ah.get(
            `mobile-services/recipes/v1/recipe/${recipeId}`,
            headers,
            query
        );
    }

    async getRecipeFromName(
        recipeName: string,
        filter?: RecipeFilter,
        sort?: RecipeSortOptions,
        headers?: Headers,
        query?: Query
    ): Promise<RecipeQueryModel> {
        return await this.ah.get(`mobile-services/recipes/v2/search`, headers, {
            query: recipeName,
            filters: filter ? this.translateRecipeFilterToQuery(filter) : '',
            sortBy: (sort ? sort : '').toString(),
            ...query,
        });
    }

    async getFirstRecipeFromName(
        recipeName: string,
        filter?: RecipeFilter,
        sort?: RecipeSortOptions,
        headers?: Headers,
        query?: Query
    ): Promise<RecipeModel> {
        const recipes = await this.getRecipeFromName(
            recipeName,
            filter,
            sort,
            headers,
            query
        );
        if (!recipes.content[0]) {
            throw new Error('No recipes found');
        }
        return await this.getRecipeFromId(
            recipes.content[0].id,
            headers,
            query
        );
    }

    /**
     * Translates the recipe filters to a usable filter query
     */
    private translateRecipeFilterToQuery(filter: RecipeFilter): string {
        let out: string[] = [];
        if (filter.oftenUsedFilter) {
            out.push(`veel-gebruikt:${filter.oftenUsedFilter}`);
        }
        if (filter.courseFilter) {
            out.push(`menugang:${filter.courseFilter}`);
        }
        if (filter.dishTypeFilter) {
            out.push(`soort-gerecht:${filter.dishTypeFilter}`);
        }
        if (filter.contentFilter) {
            out.push(`recepten-met:${filter.contentFilter}`);
        }
        if (filter.wishesFilter) {
            out.push(`speciale-wensen:${filter.wishesFilter}`);
        }
        if (filter.occasionFilter) {
            out.push(`momenten:${filter.occasionFilter}`);
        }
        if (filter.seasonFilter) {
            out.push(`seizoen:${filter.seasonFilter}`);
        }
        if (filter.techniqueFilter) {
            out.push(`kooktechniek:${filter.techniqueFilter}`);
        }
        if (filter.originFilter) {
            out.push(`keuken:${filter.originFilter}`);
        }
        return out.join('|');
    }
}

export enum RecipeSortOptions {
    Newest = 'NEWEST',
    Relevant = 'MOST_RELEVANT',
    Rating = 'RATINGS',
    PrepTime = 'TOTAl_TIME',
}

export interface RecipeFilter {
    // Can only have 1 active at a time
    oftenUsedFilter?: OftenUsedRecipeFilterOptions;
    courseFilter?: CourseRecipeFilterOptions;
    dishTypeFilter?: DishTypeRecipeFilterOptions;
    contentFilter?: ContentRecipeFilterOptions;
    wishesFilter?: WishesRecipeFilterOptions;
    occasionFilter?: SpecialOccasionRecipeFilterOptions;
    seasonFilter?: SeasonRecipeFilterOptions;
    techniqueFilter?: TechniqueRecipeFilterOptions;
    originFilter?: KitchenOriginRecipeFilterOptions;
}

export enum KitchenOriginRecipeFilterOptions {
    Italian = 'italiaans',
    Dutch = 'hollands',
    Asian = 'aziatisch',
    Mediterranean = 'mediterraan',
    French = 'frans',
    Mexican = 'mexicaans',
    Spanish = 'spaans',
    American = 'amerikaans',
    Indian = 'indiaas',
    Thai = 'thais',
    English = 'engels',
    MiddleEastern = 'midden-oosters',
    Chinese = 'chinees',
    Indonesian = 'indonesisch',
    Japanese = 'japans',
    SouthAmerican = 'zuid-amerikaans',
    Moroccan = 'marokkaans',
    Turkish = 'turks',
    Greek = 'grieks',
    Scandinavian = 'scandinavisch',
    Suriname = 'surinaams',
    Vietnamese = 'vietnamees',
    Argentine = 'argentijns',
    SouthAfrican = 'zuid-afrikaans',
}

export enum TechniqueRecipeFilterOptions {
    Oven = 'oven',
    Baking = 'bakken',
    Cooking = 'koken',
    Grill = 'grillen',
    Wok = 'roerbakken-wokken',
    Stew = 'stoven',
    Frying = 'frituren',
    Steam = 'stomen',
    Poaching = 'pocheren',
    Blanching = 'blancheren',
}

export enum SeasonRecipeFilterOptions {
    Winter = 'winter',
    Summer = 'zomer',
    Autumn = 'herfst',
    Spring = 'lente',
}

export enum SpecialOccasionRecipeFilterOptions {
    WhatAreWeEatingToday = 'wat-eten-we-vandaag',
    Christmas = 'kerst',
    Drinks = 'borrel',
    Easter = 'pasen',
    Barbeque = 'barbecue',
    Picknick = 'picknick',
    Birthday = 'verjaardag',
    NewYears = 'oud-en-nieuw',
    MothersDay = 'moederdag',
    Treat = 'traktatie',
}

export enum WishesRecipeFilterOptions {
    Vegetarian = 'vegetarisch',
    LactoseFree = 'lactosevrij',
    GlutenFree = 'glutenvrij',
    NoMeatOrFish = 'zonder-vlees-vis',
    Vegan = 'veganistisch',
    NoMeat = 'zonder-vlees',
    Healthy = 'gezond',
}

export enum ContentRecipeFilterOptions {
    Poultry = 'gevogelte',
    Meat = 'vlees',
    Fish = 'vis',
    Shellfish = 'schaal-schelpdieren',
    MeatSubstitute = 'vleesvervanger',
}

export enum DishTypeRecipeFilterOptions {
    Pasta = 'pasta',
    Salad = 'salade',
    Rice = 'rijst',
    Pastry = 'gebak',
    Sandwich = 'brood-sandwiches',
    Soup = 'soep',
    Quiche = 'quiche',
    Stew = 'stamppot',
    SauceDressing = 'saus-dressing',
    Couscous = 'couscous',
}

export enum CourseRecipeFilterOptions {
    Main = 'hoofdgerecht',
    Side = 'bijgerecht',
    Dessert = 'nagerecht',
    Appetizer = 'voorgerecht',
    Snacks = 'borrelhapje',
    Lunch = 'lunch',
    Pastry = 'gebak',
    Breakfast = 'ontbijt',
    Brunch = 'brunch',
    DrinkNoAlcohol = 'drankje-zonder-alcohol',
}

export enum OftenUsedRecipeFilterOptions {
    Easy = 'makkelijk',
    Fast = 'snel',
    Budget = 'budget',
    Slim = 'slank',
    NowInMagazine = 'nu-in-het-magazine',
}
