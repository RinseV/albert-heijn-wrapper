export const RECIPE_SEARCH_QUERY = `
  query RecipeSearch(
    $searchText: String
    $start: Int
    $size: PageSize
    $sortBy: RecipeSearchSortOption
    $filters:[RecipeSearchQueryFilter!]
    $priorityRecipeIds:[Int!]
    $favoriteRecipeIds:[Int!]
    $recipeIds:[Int!]
    $ingredients:[String!]
    $includeAggregations:Boolean
  ) {
    recipeSearchV2(
      searchText: $searchText
      start: $start
      size: $size
      sortBy: $sortBy
      filters:$filters
      priorityRecipeIds:$priorityRecipeIds
      favoriteRecipeIds:$favoriteRecipeIds
      recipeIds:$recipeIds
      ingredients:$ingredients
      includeAggregations:$includeAggregations
    ) {
      result {
        id
        title
        slug
        diet
        courses
        publishedAt
        modifiedAt
        time {
          cook
          oven
          wait
        }
        rating {
          count
          average
        }
        serving {
          number
          type
        }
        nutrition {
          energy {
            name
            value
            unit
          }
          carbohydrates {
            name
            value
            unit
          }
          sugar {
            name
            value
            unit
          }
          sodium {
            name
            value
            unit
          }
          protein {
            name
            value
            unit
          }
          saturatedFat {
            name
            value
            unit
          }
          fibers {
            name
            value
            unit
          }
        }
        nutriScore
        author {
          origin {
            type
            hostName
            url
          }
          brand {
            name
            supplier {
              name
            }
          }
        }
        flags
        tags {
          key
          value
        }
      }
    }
  }
`;

export const RECIPE_QUERY = `
  query Recipe($id: Int!, $servings: Int) {
    recipe(id: $id, servings: $servings) {
      alternateTitle
      author {
        origin {
          type
          hostName
          url
        }
        brand {
          name
          supplier {
            name
          }
        }
      }
      classifications
      cookTime
      courses
      cuisines
      description
      flags
      group
      href
      id
      ingredients {
        id
        name {
          singular
          plural
        }
        quantity
        quantityUnit {
          singular
          plural
        }
        text
        servingsScale
      }
      kitchenAppliances {
        name
        quantity
        scalable
        text
      }
      magazines {
        title
        date
        number
        issueSlug
        type
      }
      meta {
        description
        title
      }
      nutriScore
      nutritions {
        energy {
          name
          value
          unit
        }
        carbohydrates {
          name
          value
          unit
        }
        sugar {
          name
          value
          unit
        }
        sodium {
          name
          value
          unit
        }
        protein {
          name
          value
          unit
        }
        saturatedFat {
          name
          value
          unit
        }
        fibers {
          name
          value
          unit
        }
      }
      ovenTime
      preparation {
        steps
        summary
      }
      publishedAt
      rating {
        count
        average
      }
      seoCanonical
      servings {
        number
        type
        min
        max
      }
      slugifiedTitle
      spiciness
      tags {
        key
        value
      }
      tips {
        type
        value
      }
      title
      waitTime
    }
  }
`;
