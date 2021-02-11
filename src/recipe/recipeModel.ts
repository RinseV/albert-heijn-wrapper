export interface RecipeModel {
    courseTypes: any[];
    courses: string[];
    description: string;
    favourite: boolean;
    id: number;
    ingredients: Ingredient[];
    kitchenAppliances: any[];
    maxServingsNumber: number;
    minServingsNumber: number;
    nutricionalValues: NutricionalValue[];
    popularityInformation: PopularityInformation;
    preparationSteps: PreparationStep[];
    preparationSummary: string[];
    recipeImage: RecipeImage[];
    recipeTime: RecipeTime;
    scaleServingsNumber: number;
    servingType: string;
    servingsNumber: number;
    shoppable: boolean;
    stepByStepQuality: string;
    tagCloud: string[];
    tastyWith: any[];
    tips: any[];
    title: string;
}

interface RecipeTime {
    completeCookTime: string;
    completeOvenTime: string;
    completeTotalTime: string;
    completeWaitTime: string;
    cookTime: number;
    ovenTime: number;
    totalTime: number;
    waitTime: number;
}

export interface RecipeImage {
    height: number;
    url: string;
    width: number;
}

interface PreparationStep {
    ingredients: Ingredient[];
    text: string;
    tips: any[];
}

interface PopularityInformation {
    numberOfFavorites: number;
    numberOfTimesInShoppingListLastWeek: number;
    rating: Rating;
}

interface Rating {
    averageRate: number;
    averageRateRounded: number;
    numberOfRates: number;
}

interface NutricionalValue {
    name: string;
    unit: string;
    value: number;
}

interface Ingredient {
    completeText: string;
    description: Description;
    id: number;
    quantity: number;
    quantityUnit?: QuantityUnit;
}

interface QuantityUnit {
    plural: string;
    singular: string;
}

interface Description {
    singular?: string;
}
