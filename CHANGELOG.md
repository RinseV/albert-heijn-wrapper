# albert-heijn-wrapper

## 3.0.0

### Major Changes

- Switched over to GraphQL API for all requests
- Removed the functions for the subclasses, they can now be accessed directly (`ah.product` vs `ah.product()`)
- Removed the `bonus` & `category` subclasses since the GraphQL API does not have 1-to-1 equivalents
- Reworked the product functions:
    - `getProductsFromName` is now `search` and uses a different set of arguments
    - `getProductFromId` is now `get`
- Reworked the recipe functions:
    - `getRecipeFromName` is now `search` and uses a different set of arguments
    - `getRecipeFromId` is now `get`
- Reworked the store functions:
    - `getStoresFromLocation` is now `search` and uses a different set of arguments
- Rewrote tests using MSW and Vitest
- Switched from `yarn` to `pnpm`
- Removed `axios` and `date-fns` dependencies, this package now has no external dependencies
- Updated to Node 22

## 2.0.1

### Patch Changes

- Fixed error 400 due to missing header

## 2.0.0

### Major changes

- Updated to major version due to breaking changes
- Restructured all functions to use objects instead of multiple parameters
- Added category & bonus objects
- Added tests
- Updated readme

## 1.1.0

### Minor changes

- Restructured all functions to use objects instead of multiple parameters

## 1.0.0

### Major changes

- Initial release
