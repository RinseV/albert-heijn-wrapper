<div align="center">
  <h1>
    Albert Heijn API Wrapper
  </h1>
  </br>
  <p>
    <a href="https://www.npmjs.com/package/albert-heijn-wrapper"><img src="https://img.shields.io/npm/v/albert-heijn-wrapper" alt="NPM version" /></a>
    <a href="https://github.com/RinseV/albert-heijn-wrapper"><img src="https://img.shields.io/npm/l/albert-heijn-wrapper" alt="NPM license" /></a>
    <a href="https://www.npmjs.com/package/albert-heijn-wrapper"><img src="https://img.shields.io/librariesio/release/npm/albert-heijn-wrapper" alt="NPM dependencies"/></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/albert-heijn-wrapper/"><img src="https://nodei.co/npm/albert-heijn-wrapper.svg" alt="npm installnfo" /></a>
  </p>
</div>

Node.js API wrapper for [Albert Heijn](https://www.ah.nl/).

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

## Basic usage
```javascript
// Creates AH object, set verbose=true if you want to see all requests
const ah = new AH(verbose);
// Gets product as reponse from ID
const product = await ah.product().getProductFromId(200486);
```
More information about the functions and parameters can be found on the [wiki](https://github.com/RinseV/jumbo-wrapper/wiki).

## Example usage
For all of these examples, please keep in mind that your function in which you request something should be `async` since the requests return a `Promise`.
#### Products
Let's say I want to find the names of the products called "Brood" but the products have to be gluten free, vegan and of the brand "AH Glutenvrij" and I want to sort on ascending price:
```javascript
import { 
  AH,
  ProductFilter,
  ProductPropertyFilter,
  ProductSortOptions, 
} from 'albert-heijn-wrapper';

async function getGlutenFreeVeganBread() {
  // First create an AH object
  const ah = new AH();
  // Initialise the filter with the brand and properties (gluten free and vegan)
  const filter: ProductFilter = {
      brand: 'AH Glutenvrij',
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
[
  'AH Glutenvrij Pistolets meerzaden',
  'AH Glutenvrij Mueslibroodjes',
  'AH Glutenvrij Vezelrijke broodmix'
]
```

#### Stores
Let's say I want to find the address of the nearest store to a given location:
```javascript
import { AH } from 'albert-heijn-wrapper';

async function findNearestStore(latitude: number, longitude: number) {
    // Create AH object
    const ah = new AH(true);
    // Find nearest store
    const store = await ah.store().getClosestStoreFromLocation(latitude, longitude);
    console.log(`${store.address.street} ${store.address.houseNumber}, ${store.address.postalCode}`);
}

findNearestStore(50, 4);
```
```sh
Wilhelminalaan 9, 4551EP
```

## Authentication
Unfortunately, it is not possible to log in with your personal AH account, which means you won't be able to access your orders.