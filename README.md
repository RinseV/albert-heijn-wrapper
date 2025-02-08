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

Unofficial Node.js API wrapper for [Albert Heijn](https://www.ah.nl/).

## Installation

```sh
npm install albert-heijn-wrapper
```

or

```sh
pnpm i albert-heijn-wrapper
```

then

```typescript
import { AH } from 'albert-heijn-wrapper';
```

## Basic usage

```typescript
// Creates AH object
const ah = new AH();
// Gets product as reponse from ID
const product = await ah.product.get(200486);
```

More information about the functions and parameters can be found on
the [wiki](https://github.com/RinseV/jumbo-wrapper/wiki).

## Example usage

For all of these examples, please keep in mind that your function in which you request something should be `async` since
the requests return a `Promise`.

### Products

Let's say I want to find the names of the products called "Brood" but the products have to be gluten free, vegan and I
want to sort on ascending price:

```typescript
import { AH, SearchProductsSortType } from 'albert-heijn-wrapper';

const getGlutenFreeVeganBread = async () => {
  const ah = new AH();

  const { products } = await ah.product.search("Brood", {
    searchInput: {
      // These facets are undocumented
      facets: [
        {
          label: "product.properties.allergie",
          values: {
            values: ["zonder-gluten"]
          }
        },
        {
          label: "product.properties.dieet",
          values: {
            values: ["veganistisch"]
          }
        }
      ],
      page: {
        size: 3
      }
    },
    sortType: SearchProductsSortType.PriceHighLow
  });
  // Map to just the product names
  const names = products.map((product) => product.title);
  console.log(names);
};

getGlutenFreeVeganBread();
```

```sh
[
  'BFree Pita broodjes glutenvrij',
  'Smaakt Lijnzaadcrackers maanzaad less carb',
  'BFree Naan bread gluten free'
]
```

### Stores

Let's say I want to find the address of the nearest store to a given location:

```typescript
import { AH } from 'albert-heijn-wrapper';

const findNearestStore = async (latitude: number, longitude: number) => {
  const ah = new AH();
  // Find nearest store
  const { result } = await ah.store.search({
    filter: {
      location: {
        latitude,
        longitude
      }
    }
  });
  const store = result?.[0];
  console.log(`${store?.address?.street} ${store?.address?.houseNumber}, ${store?.address?.postalCode} ${store?.address?.city}`);
};

findNearestStore(50, 4);
```

```sh
Westkade 48, 4551BV Sas Van Gent
```

## Authentication

Unfortunately, it is not possible to log in with your personal AH account, which means you won't be able to access your
orders. All requests are made as a guest user.

## Custom request

If you want to make your own GraphQL request, you can also do that:

```typescript
import { AH, Stores } from "albert-heijn-wrapper";

const STORES_INFO_QUERY = `
  query StoresInformation($id:Int!) {
    storesInformation(id:$id) {
      id
      name
      address {
        street
        houseNumber
        houseNumberExtra
        postalCode
        city
        countryCode
      }
    }
  }
`;

type StoresInfoResponse = {
  // Type is exported from the wrapper
  storesInformation: Stores;
};

const getStoreInformation = async (id: number) => {
  const ah = new AH();
  const { storesInformation } = await ah.graphql<StoresInfoResponse>(STORES_INFO_QUERY, { id });
  // Response is typed (somewhat) correctly
  console.log(storesInformation.name);
};

// ID from store found from before
getStoreInformation(1809);
```

```sh
AH1809 SAS VAN GENT
```

The wrapper will automatically provide the access token necessary to make the request.