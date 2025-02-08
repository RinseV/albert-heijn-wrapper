export const PRODUCT_SEARCH_QUERY = `
  query Search($input: SearchProductsInput!) {
    searchProductsExperimental(input: $input) {
      products {
        ageCheck
        availability {
          availabilityLabel
          online {
            status
          }
        }
        brand
        category
        hasListPrice
        id
        isSample
        isSponsored
        priceV2 {
          discount {
            availability {
              description
              endDate
              startDate
            }
            description
            multipleItemPromotion
            productCount
            promotionType
            segmentId
            segmentType
            tieredOffer
          }
          now
          was
        }
        salesUnitSize
        shopType
        title
        webPath
      }
      totalFound
      searchId
    }
  }
`;

export const PRODUCT_QUERY = `
  query Product($id: Int!) {
    product(id: $id) {
      ageCheck
      availability {
        availabilityLabel
        online {
          status
        }
      }
      brand
      category
      hasListPrice
      id
      isSponsored
      priceV2 {
        discount {
          availability {
            description
            endDate
            startDate
          }
          description
          multipleItemPromotion
          productCount
          promotionType
          segmentId
          segmentType
          tieredOffer
        }
        now {
          amount
          formattedV2
        }
        was {
          amount
          formattedV2
        }
      }
      salesUnitSize
      shopType
      title
      webPath
    }
  }
`;
