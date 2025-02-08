import { http, HttpResponse, graphql } from "msw";
import { BASE_URL } from "../../src/ah";

export const handlers = [
  http.post(`${BASE_URL}/mobile-auth/v1/auth/token/anonymous`, () => {
    return HttpResponse.json({
      access_token: "access_token",
      refresh_token: "refresh_token",
      expires_in: 7200,
    });
  }),
  http.post(`${BASE_URL}/mobile-auth/v1/auth/token/refresh`, () => {
    return HttpResponse.json({
      access_token: "refreshed_access_token",
      refresh_token: "refreshed_refresh_token",
      expires_in: 7200,
    });
  }),
  graphql.query("Search", () => {
    return HttpResponse.json({
      data: {
        searchProductsExperimental: {
          products: [
            {
              ageCheck: false,
              availability: {
                availabilityLabel: null,
                online: {
                  status: "AVAILABLE",
                },
              },
              brand: null,
              category: "Zuivel, eieren, boter/Halfvolle melk",
              hasListPrice: false,
              id: 582866,
              isSample: false,
              isSponsored: true,
              priceV2: {
                discount: {
                  availability: {
                    description: "",
                    endDate: "2999-12-31",
                    startDate: "2025-02-08",
                  },
                  description: "15% volume voordeel",
                  multipleItemPromotion: false,
                  productCount: null,
                  promotionType: "AHONLINE",
                  segmentId: null,
                  segmentType: "AH_ONLINE_ONLY",
                  tieredOffer: [],
                },
                now: 3.04,
                was: 3.58,
              },
              salesUnitSize: "2 stuks",
              shopType: "AH",
              title: "Arla Biologisch halfvolle melk 2-pack",
              webPath: "/producten/product/wi582866",
            },
          ],
          totalFound: 1,
          searchId: "01JKKE1W04V53PXDFMJK889YZ1",
        },
      },
    });
  }),
  graphql.query("Product", () => {
    return HttpResponse.json({
      data: {
        product: {
          ageCheck: false,
          availability: {
            availabilityLabel: null,
            online: {
              status: "AVAILABLE",
            },
          },
          brand: "Campina",
          category: "Zuivel, eieren, boter/Halfvolle melk",
          hasListPrice: false,
          id: 208278,
          isSample: false,
          isSponsored: null,
          images: [
            {
              url: "https://static.ah.nl/dam/product/AHI_4354523130313435363931?revLabel=1&rendition=800x800_JPG_Q90&fileType=binary",
              width: 800,
              height: 800,
            },
            {
              url: "https://static.ah.nl/dam/product/AHI_4354523130313435363931?revLabel=1&rendition=400x400_JPG_Q85&fileType=binary",
              width: 400,
              height: 400,
            },
            {
              url: "https://static.ah.nl/dam/product/AHI_4354523130313435363931?revLabel=1&rendition=200x200_JPG_Q85&fileType=binary",
              width: 200,
              height: 200,
            },
            {
              url: "https://static.ah.nl/dam/product/AHI_4354523130313435363931?revLabel=1&rendition=48x48_GIF&fileType=binary",
              width: 48,
              height: 48,
            },
            {
              url: "https://static.ah.nl/dam/product/AHI_4354523130313435363931?revLabel=1&rendition=80x80_JPG&fileType=binary",
              width: 80,
              height: 80,
            },
          ],
          priceV2: {
            discount: null,
            now: {
              amount: 2.99,
              formattedV2: "€2.99",
            },
            was: {
              amount: 2.99,
              formattedV2: "€2.99",
            },
          },
          salesUnitSize: "2,4 l",
          shopType: "AH",
          title: "Campina Halfvolle melk voordeelpak",
          webPath: "/producten/product/wi208278/halfvolle-melk-voordeelpak",
        },
      },
    });
  }),
  graphql.query("RecipeSearch", () => {
    return HttpResponse.json({
      data: {
        recipeSearchV2: {
          result: [
            {
              id: 1200910,
              title: "Spaghetti 'bolognese' met linzen (advertorial)",
              slug: "spaghetti-bolognese-met-linzen-advertorial",
              diet: ["zonder vlees/vis"],
              courses: ["hoofdgerecht"],
              publishedAt: "",
              modifiedAt: "",
              time: {
                cook: 40,
                oven: null,
                wait: null,
              },
              rating: {
                count: 0,
                average: null,
              },
              serving: {
                number: 4,
                type: "personen",
              },
              nutrition: {
                energy: {
                  name: "energie",
                  value: 575,
                  unit: "kcal",
                },
                carbohydrates: {
                  name: "koolhydraten",
                  value: 83,
                  unit: "g",
                },
                sugar: {
                  name: "waarvan suikers",
                  value: 15,
                  unit: "g",
                },
                sodium: {
                  name: "natrium",
                  value: 520,
                  unit: "mg",
                },
                protein: {
                  name: "eiwit",
                  value: 27,
                  unit: "g",
                },
                saturatedFat: {
                  name: "waarvan verzadigd",
                  value: 6,
                  unit: "g",
                },
                fibers: {
                  name: "vezels",
                  value: 14,
                  unit: "g",
                },
              },
              nutriScore: "A",
              author: {
                origin: {
                  type: "ALLERHANDE",
                  hostName: "Allerhande",
                  url: null,
                },
                brand: null,
              },
              flags: ["PROTEIN_RICH"],
              tags: [
                {
                  key: "speciale-wensen",
                  value: "zonder vlees/vis",
                },
                {
                  key: "soort-gerecht",
                  value: "pasta",
                },
                {
                  key: "menugang",
                  value: "hoofdgerecht",
                },
                {
                  key: "kooktechniek",
                  value: "koken",
                },
                {
                  key: "tags",
                  value: "advertorial",
                },
              ],
            },
          ],
        },
      },
    });
  }),
  graphql.query("Recipe", () => {
    return HttpResponse.json({
      data: {
        recipe: {
          alternateTitle: "",
          author: {
            origin: {
              type: "ALLERHANDE",
              hostName: "Allerhande",
              url: null,
            },
            brand: null,
          },
          classifications: ["zonder vlees/vis"],
          cookTime: 40,
          courses: ["hoofdgerecht"],
          cuisines: null,
          description:
            "Deze pasta met peulvruchten is geïnspireerd op de geliefde spaghetti bolognese. Lekker met linzen als voedzame vleesvervanger. Wil je 'm helemaal vega maken? Vervang dan de Parmezaanse kaas door geraspte kaas voor pasta.",
          flags: ["PROTEIN_RICH"],
          group: null,
          href: "/allerhande/recept/R-R1200910/spaghetti-bolognese-met-linzen-advertorial",
          id: 1200910,
          ingredients: [
            {
              id: 1209354,
              name: {
                singular: "winterpeen",
                plural: "winterpenen",
              },
              quantity: 300,
              quantityUnit: {
                singular: "g",
                plural: "g",
              },
              text: "300 g winterpenen",
              servingsScale: 75,
            },
            {
              id: 1553,
              name: {
                singular: "bleekselderij",
                plural: null,
              },
              quantity: 2,
              quantityUnit: {
                singular: "stengel",
                plural: "stengels",
              },
              text: "2 stengels bleekselderij",
              servingsScale: 0.5,
            },
            {
              id: 3640,
              name: {
                singular: "prei",
                plural: "preien",
              },
              quantity: 1,
              quantityUnit: {
                singular: "",
                plural: null,
              },
              text: "1 prei",
              servingsScale: 0.25,
            },
            {
              id: 1251911,
              name: {
                singular: "middelgrote ui",
                plural: "middelgrote uien",
              },
              quantity: 2,
              quantityUnit: {
                singular: "",
                plural: null,
              },
              text: "2 middelgrote uien",
              servingsScale: 0.5,
            },
            {
              id: 3200,
              name: {
                singular: "milde olijfolie",
                plural: null,
              },
              quantity: 1,
              quantityUnit: {
                singular: "el",
                plural: "el",
              },
              text: "1 el milde olijfolie",
              servingsScale: 0.25,
            },
            {
              id: 777545,
              name: {
                singular: "verse Italiaanse kruidenmix",
                plural: null,
              },
              quantity: 10,
              quantityUnit: {
                singular: "g",
                plural: "g",
              },
              text: "10 g verse Italiaanse kruidenmix",
              servingsScale: 2.5,
            },
            {
              id: 405,
              name: {
                singular: "tomatenpuree",
                plural: "tomatenpuree",
              },
              quantity: 1,
              quantityUnit: {
                singular: "el",
                plural: "el",
              },
              text: "1 el tomatenpuree",
              servingsScale: 0.25,
            },
            {
              id: 1601041,
              name: {
                singular: "polpa in blik",
                plural: null,
              },
              quantity: 800,
              quantityUnit: {
                singular: "g",
                plural: "g",
              },
              text: "800 g polpa in blik",
              servingsScale: 200,
            },
            {
              id: 4546,
              name: {
                singular: "volle melk",
                plural: null,
              },
              quantity: 100,
              quantityUnit: {
                singular: "ml",
                plural: "ml",
              },
              text: "100 ml volle melk",
              servingsScale: 25,
            },
            {
              id: 4129,
              name: {
                singular: "spaghetti",
                plural: null,
              },
              quantity: 300,
              quantityUnit: {
                singular: "g",
                plural: "g",
              },
              text: "300 g spaghetti",
              servingsScale: 75,
            },
            {
              id: 1638522,
              name: {
                singular: "Bonduelle linzen in blik",
                plural: null,
              },
              quantity: 310,
              quantityUnit: {
                singular: "g",
                plural: "g",
              },
              text: "310 g Bonduelle linzen in blik",
              servingsScale: 77.5,
            },
            {
              id: 3490,
              name: {
                singular: "Parmigiano Reggiano",
                plural: null,
              },
              quantity: 75,
              quantityUnit: {
                singular: "g",
                plural: "g",
              },
              text: "75 g Parmigiano Reggiano",
              servingsScale: 18.75,
            },
          ],
          kitchenAppliances: [],
          magazines: [
            {
              title: "Peulen Special 2025",
              date: "",
              number: "Peulen Special 2025",
              issueSlug: "peulen-special-2025",
              type: "Overig",
            },
          ],
          meta: {
            description:
              "Op zoek naar linzenrecepten? Deze spaghetti 'bolognese' met linzen is voedzaam en vullend. Ontdek dit pasta recept hier.",
            title: "Spaghetti 'bolognese' met linzen",
          },
          nutriScore: "A",
          nutritions: {
            energy: {
              name: "energie",
              value: 575,
              unit: "kcal",
            },
            carbohydrates: {
              name: "koolhydraten",
              value: 83,
              unit: "g",
            },
            sugar: {
              name: "waarvan suikers",
              value: 15,
              unit: "g",
            },
            sodium: {
              name: "natrium",
              value: 520,
              unit: "mg",
            },
            protein: {
              name: "eiwit",
              value: 27,
              unit: "g",
            },
            saturatedFat: {
              name: "waarvan verzadigd",
              value: 6,
              unit: "g",
            },
            fibers: {
              name: "vezels",
              value: 14,
              unit: "g",
            },
          },
          ovenTime: null,
          preparation: {
            steps: [
              "Schil en snijd de peen in stukjes van een ½ cm. Snijd de bleekselderij in boogjes van een ½ cm.",
              "Snijd de prei in dunne halve ringen en spoel af onder koud water. Snipper de uien. ",
              "Verhit de olie in een hapjespan en bak de groenten, peper en eventueel zout 15 min. op middelhoog vuur. Roer regelmatig.",
              "Ris ondertussen de blaadjes van de takjes kruiden en snijd fijn.",
              "Voeg de tomatenpuree, polpa, melk en kruiden toe en stoof met de deksel op de pan 10-12 min. op laag vuur.",
              "Kook ondertussen de spaghetti volgens de aanwijzingen op de verpakking beetgaar. Voeg de linzen de laatste 3 min. toe aan de saus.",
              "Meng de spaghetti met de saus en breng op smaak met peper en eventueel zout. Verdeel over de borden en rasp de kaas erboven.",
            ],
            summary: [
              " Schil en snijd de peen in stukjes van een ½ cm. Snijd de bleekselderij in boogjes van een ½ cm. Snijd de prei in dunne halve ringen en spoel af onder koud water. Snipper de uien. ",
              "Verhit de olie in een hapjespan en bak de groenten, peper en eventueel zout 15 min. op middelhoog vuur. Roer regelmatig.",
              " Ris ondertussen de blaadjes van de takjes kruiden en snijd fijn. Voeg de tomatenpuree, polpa, melk en kruiden toe en stoof met de deksel op de pan 10-12 min. op laag vuur.",
              "Kook ondertussen de spaghetti volgens de aanwijzingen op de verpakking beetgaar. Voeg de linzen de laatste 3 min. toe aan de saus.",
              "Meng de spaghetti met de saus en breng op smaak met peper en eventueel zout. Verdeel over de borden en rasp de kaas erboven.",
            ],
          },
          publishedAt: "2025-02-07T00:00Z",
          rating: {
            count: 0,
            average: null,
          },
          seoCanonical: null,
          servings: {
            number: 4,
            type: "personen",
            min: 1,
            max: 40,
          },
          slugifiedTitle: "spaghetti-bolognese-met-linzen-advertorial",
          spiciness: 0,
          tags: [
            {
              key: "speciale-wensen",
              value: "zonder vlees/vis",
            },
            {
              key: "soort-gerecht",
              value: "pasta",
            },
            {
              key: "menugang",
              value: "hoofdgerecht",
            },
            {
              key: "kooktechniek",
              value: "koken",
            },
            {
              key: "tags",
              value: "advertorial",
            },
          ],
          tips: [
            {
              type: "vegatip",
              value:
                "Vervang de Parmezaanse kaas door geraspte kaas voor pasta.",
            },
            {
              type: "algemeen",
              value:
                "Meer weten over <a href=https://www.ah.nl/allerhande/artikelen/kooktechnieken>kooktechnieken</a>?",
            },
          ],
          title: "Spaghetti 'bolognese' met linzen (advertorial)",
          waitTime: null,
        },
      },
    });
  }),
  graphql.query("StoresSearch", () => {
    return HttpResponse.json({
      data: {
        storesSearch: {
          result: [
            {
              id: 1455,
              name: "AH1455 AALSMEER",
              phone: "0297360177",
              address: {
                street: "Poldermeesterplein",
                houseNumber: "1",
                houseNumberExtra: null,
                postalCode: "1432JZ",
                city: "Aalsmeer",
                countryCode: "NLD",
              },
              storeType: "REGULAR",
              geoLocation: {
                latitude: 52.274145,
                longitude: 4.795009,
              },
              openingDays: [
                [
                  {
                    dayName: "maandag",
                    date: "2025-02-03",
                    openingHour: {
                      openFrom: "08:00",
                      openUntil: "22:00",
                    },
                    type: "PAST",
                  },
                  {
                    dayName: "dinsdag",
                    date: "2025-02-04",
                    openingHour: {
                      openFrom: "08:00",
                      openUntil: "22:00",
                    },
                    type: "PAST",
                  },
                  {
                    dayName: "woensdag",
                    date: "2025-02-05",
                    openingHour: {
                      openFrom: "08:00",
                      openUntil: "22:00",
                    },
                    type: "PAST",
                  },
                  {
                    dayName: "donderdag",
                    date: "2025-02-06",
                    openingHour: {
                      openFrom: "08:00",
                      openUntil: "22:00",
                    },
                    type: "PAST",
                  },
                  {
                    dayName: "vrijdag",
                    date: "2025-02-07",
                    openingHour: {
                      openFrom: "08:00",
                      openUntil: "22:00",
                    },
                    type: "PAST",
                  },
                  {
                    dayName: "zaterdag",
                    date: "2025-02-08",
                    openingHour: {
                      openFrom: "08:00",
                      openUntil: "22:00",
                    },
                    type: "CURRENT",
                  },
                  {
                    dayName: "zondag",
                    date: "2025-02-09",
                    openingHour: {
                      openFrom: "10:00",
                      openUntil: "22:00",
                    },
                    type: "FUTURE",
                  },
                ],
                [
                  {
                    dayName: "maandag",
                    date: "2025-02-10",
                    openingHour: {
                      openFrom: "08:00",
                      openUntil: "22:00",
                    },
                    type: "FUTURE",
                  },
                  {
                    dayName: "dinsdag",
                    date: "2025-02-11",
                    openingHour: {
                      openFrom: "08:00",
                      openUntil: "22:00",
                    },
                    type: "FUTURE",
                  },
                  {
                    dayName: "woensdag",
                    date: "2025-02-12",
                    openingHour: {
                      openFrom: "08:00",
                      openUntil: "22:00",
                    },
                    type: "FUTURE",
                  },
                  {
                    dayName: "donderdag",
                    date: "2025-02-13",
                    openingHour: {
                      openFrom: "08:00",
                      openUntil: "22:00",
                    },
                    type: "FUTURE",
                  },
                  {
                    dayName: "vrijdag",
                    date: "2025-02-14",
                    openingHour: {
                      openFrom: "08:00",
                      openUntil: "22:00",
                    },
                    type: "FUTURE",
                  },
                  {
                    dayName: "zaterdag",
                    date: "2025-02-15",
                    openingHour: {
                      openFrom: "08:00",
                      openUntil: "22:00",
                    },
                    type: "FUTURE",
                  },
                  {
                    dayName: "zondag",
                    date: "2025-02-16",
                    openingHour: {
                      openFrom: "10:00",
                      openUntil: "22:00",
                    },
                    type: "FUTURE",
                  },
                ],
              ],
              services: [
                {
                  code: "AOS",
                  description:
                    "Is er een product niet geleverd of beschadigd bij je online bestelling? Of wil je je blauwe klapkratten inleveren? Kom langs bij het ah.nl servicepunt",
                  shortDescription: "Ah.nl servicepunt",
                },
                {
                  code: "BLA",
                  description:
                    "Tijdens het boodschappen doen je pakketje afhalen en terugsturen.",
                  shortDescription: "Pakket afhalen en terugsturen",
                },
                {
                  code: "BLP",
                  description:
                    "Ook voor mooie bloemen en planten kun je bij ons terecht. Voor jezelf of om cadeau te geven.",
                  shortDescription: "Bloemen en planten",
                },
                {
                  code: "FTS",
                  description:
                    "Foto's bestellen voor een scherpe prijs. En de beste inspiratie voor je mooiste foto's.",
                  shortDescription: "Fotoservice",
                },
                {
                  code: "GDA",
                  description:
                    "Voor contant geld kun je bij AH-winkels met een geldautomaat pinnen.",
                  shortDescription: "Geldautomaat",
                },
                {
                  code: "GGG",
                  description:
                    "Gall & Gall Gemak biedt je een compleet assortiment whisky, cognac, likeuren, mixables en binnenlands gedistilleerd.",
                  shortDescription: "Gall en Gall gemak",
                },
                {
                  code: "LTR",
                  description:
                    "Loten van je favoriete loterij koop je bij AH-winkels met een servicebalie (assortiment kan verschillen per winkel).",
                  shortDescription: "Loterijen",
                },
                {
                  code: "PGR",
                  description: "Het parkeerbeleid verschilt per AH-winkel. ",
                  shortDescription: "Parkeren (gratis)",
                },
                {
                  code: "WFS",
                  description:
                    "Om gebruik te maken van internet in de winkels bieden we gratis draadloos internet aan.",
                  shortDescription: "WiFi-service",
                },
              ],
              distance: null,
            },
          ],
        },
      },
    });
  }),
];
