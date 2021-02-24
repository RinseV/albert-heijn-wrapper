<div align="center">
  <h1>
    Albert Heijn API Wrapper
  </h1>
  </br>
  <p>
    <!-- Badges here -->
  </p>
</div>

Node.js API wrapper for [Albert Heijn](https://www.ah.nl/).

This package is still a work in progress.

## Installation
```sh
npm install albert-heijn-wrapper
```
or
```sh
yarn add albert-heijn-wrapper
```
then
```javascript
import { AH } from 'albert-heijn-wrapper';
```

## Usage
```javascript
// Creates AH object, set verbose=true if you want to see all requests
const ah = new AH(verbose);
// Gets product as reponse from ID
const product = await ah.product().getProductFromId(200486);
```

### Functions
#### Products
```javascript
// Gets product from product ID
AH.product().getProductFromId(productId);
// Gets products that match the name with optional filter and sort options
AH.product().getProductsFromName(productName, filter, sort);
// Gets the first product that matches the name with optional filter and sort options
AH.product().getFirstProductFromName(productName, filter, sort);
```

#### Stores
```javascript
// Gets the closest stores from the given location (sorted by distance ascending)
AH.store().getStoresFromLocation(latitude, longitude, maxResults);
// Gets the closest store from given location
AH.store().getClosestStoreFromLocation(latitude, longitude);
```

#### Recipes
```javascript
// Gets recipe from recipe ID
AH.recipe().getRecipeFromId(recipeId);
// Gets the recipes that match the name with optional filter and sort options
AH.recipe().getRecipeFromName(recipeName, filter, sort);
// Gets the first recipe that matches the name with optional filter and sort options
AH.recipe().getFirstRecipeFromName(recipeName, filter, sort);
```

### Filtering and sorting
#### Products
It is possible to use certain product filters and sort options, these are provided via the ``ProductFilter`` and ``ProductSortOptions`` interface and enum respectively. The following sort options are available for products: relevant, price descending, price ascending. Products can also be filtered by brand (name), type (number), properties (described in ``ProductPropertyFilter``) and whether they are currently in the bonus or not.

#### Recipes
It is possible to use certain recipe filters and sort options, these are provided via the RecipeFilter and RecipeSortOptions interface and enum respectively. The following sort options are available for products: newest, relevant, rating, preperation time. Recipes can also be filtered via enums, namely ``OftenUsedRecipeFilterOptions``, ``CourseRecipeFilterOptions``, ``DishTypeRecipeFilterOptions``, ``ContentRecipeFilterOptions``, ``WishesRecipeFilterOptions``, ``SpecialOccasionRecipeFilterOptions``, ``SeasonRecipeFilterOptions``, ``TechniqueRecipeFilterOptions`` and ``KitchenOriginRecipeFilterOptions``.

### Example usage
#### Products
Let's say I want to find the names of the products called "Brood" but the products have to be gluten free, vegan and of the brand "AH Vrij van" and I want to sort on ascending price:
```javascript
import { 
  AH,
  ProductFilter,
  ProductPropertyFilter,
  ProductSortOptions, 
} from 'albert-heijn-wrapper';

async function getGlutenFreeVeganBread() {
  // First create an AH object
  const ah = new AH(true);
  // Initialise the filter with the brand and properties (gluten free and vegan)
  const filter: ProductFilter = {
      brand: 'AH Vrij van',
      property: [
          ProductPropertyFilter.GlutenFree,
          ProductPropertyFilter.Vegan,
      ],
  };
  // Search for all products on ascending price with the filter
  const products = await ah
      .product()
      .getProductsFromName('Brood', filter, ProductSortOptions.PriceAsc);
  // Return only the names of the products
  const res = products.products.map((product) => {
      return product.title;
  });
  console.log(res);
}

getGlutenFreeVeganBread();
```
```sh
[ 'AH Vrij van Gluten voor broodmix' ]
```

#### Stores
Let's say I want to find the nearest store's opening times for tomorrow from a user-given location:
```javascript
import { AH } from 'albert-heijn-wrapper';
import { convertOpeningHoursToDates } from 'albert-heijn-wrapper/dist/store/store';
import { isTomorrow } from 'date-fns';

async function findTomorrowStoreOpeningTimesFromLocation(latitude: number, longitude: number) {
    // Create AH object
    const ah = new AH(true);
    // Find nearest store
    const store = await ah.store().getClosestStoreFromLocation(latitude, longitude);
    // The convertOpeningHoursToDates is a helper function that changes the openingHours to Date objects
    const openingTimes = convertOpeningHoursToDates(store.openingHours);
    // Find the openingTimes of tomorrow and log them
    const tomorrow = openingTimes.filter((date) => isTomorrow(date.date));
    console.log(tomorrow);
}

findTomorrowStoreOpeningTimesFromLocation(50, 4);
```
```sh
[
  {
    date: 2021-02-24T23:00:00.000Z,
    openFrom: 2021-02-25T07:00:00.000Z,
    openUntil: 2021-02-25T19:00:00.000Z
  }
]
```

### Advanced usage
Every request can also be provided with additional headers and queries.

## Auth
Unfortunately, it is not possible to log in with your personal AH account (as of yet), which means you won't be able to access your orders.