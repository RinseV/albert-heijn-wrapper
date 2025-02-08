export const STORES_SEARCH_QUERY = `
  query StoresSearch($filter:StoresFilterInput, $limit:Int, $start:Int) {
    storesSearch(filter:$filter,limit:$limit,start:$start) {
      result {
        id
        name
        phone
        address {
          street
          houseNumber
          houseNumberExtra
          postalCode
          city
          countryCode
        }
        storeType
        geoLocation {
          latitude
          longitude
        }
        openingDays {
          dayName
          date
          openingHour {
            openFrom
            openUntil
          }
          type
        }
        services {
          code
          description
          shortDescription
        }
        distance
      }
    }
  }
`;
