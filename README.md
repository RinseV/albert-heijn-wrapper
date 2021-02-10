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
AH.product().getProductFromId(productId);
AH.product().getProductsFromName(productName, sort, filter);
AH.product().getFirstProductFromName(productName, sort, filter);
```

#### Stores
```javascript
AH.store().getStoresFromLocation(latitude, longitude, maxResults);
AH.store().getClosestStoreFromLocation(latitude, longitude);
```

### Advanced usage
Every request can also be provided with additional headers and queries.

## Auth
Unfortunately, it is not possible to log in with your personal AH account (as of yet), which means you won't be able to access your orders.