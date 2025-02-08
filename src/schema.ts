export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
  /** A date (yyyy-MM-dd) */
  Date: any;
  /** A datetime in ISO8601 format */
  DateTime: any;
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: any;
  /** Number (Int) of items from results. Value can be 1 till 100 */
  PageSize: any;
  /** A phone number */
  PhoneNumber: any;
  /** A field whose value conforms to the standard postal code formats for United States, United Kingdom, Germany, Canada, France, Italy, Australia, Netherlands, Spain, Denmark, Sweden, Belgium, India, Austria, Portugal, Switzerland or Luxembourg. */
  PostalCode: any;
  /** A UUIDv4 */
  UUID: any;
  /** keyvaluevalue scalar */
  KeyValueValue: any;
  /** Arbitrary resource icon meta data */
  ProductTradeItemResourceIconMeta: any;
  /** Scalar for any primitive type */
  PrimitiveTypeScalar: any;
};

export type Query = {
  __typename?: "Query";
  /** Get order */
  order?: Maybe<Order>;
  /** Retrieve all recipe information */
  recipe?: Maybe<Recipe>;
  /**
   * Search for Allerhande recipes - uses the recipe-service
   * @deprecated @sunset_date(2024-03-01) Deprecated because of migration to recipe-search-service. Use recipeSearchV2 instead
   * . .
   */
  recipeSearch: RecipeSearchResult;
  /** search for recipes and member recipes. Uses the recipe-search-service. */
  recipeSearchV2: RecipeSearchResult;
  /** Search stores based on filter */
  storesSearch: StoresResultType;
  /** Autocomplete suggestions for location searches */
  storesGeoLocationSuggestions?: Maybe<Array<StoresGeoLocationSuggestion>>;
  /** Get a specific product */
  product: Product;
  /** Search for products, please reach out to the product search team if you want to use this query. */
  productSearch: ProductSearchResult;
  /** Get product brands */
  productBrands?: Maybe<Array<ProductBrand>>;
  /** Perform search for products in the AH product catalog. */
  experimentalSearchProducts: ExperimentalSearchPayload;
  /** Get product, recipe and customer care suggestions based on a search query. */
  search: Array<SearchSuggestion>;
  /** Perform search for products in the AH product catalog. */
  searchProducts: SearchPayload;
  /** Don't use this outside the search-result-page. */
  searchProductsExperimental: SearchProductCardPayload;
  /** Perform search for products in a specific category. */
  searchCategory: SearchPayload;
  /** Perform search for products of a specific brand. */
  searchBrand: SearchPayload;
};

export type QueryOrderArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type QueryRecipeArgs = {
  id: Scalars["Int"];
  servings?: Maybe<Scalars["Int"]>;
};

export type QueryRecipeSearchArgs = {
  query: RecipeSearchParams;
};

export type QueryRecipeSearchV2Args = {
  searchText?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
  size?: Maybe<Scalars["PageSize"]>;
  sortBy?: Maybe<RecipeSearchSortOption>;
  filters?: Maybe<Array<RecipeSearchQueryFilter>>;
  priorityRecipeIds?: Maybe<Array<Scalars["Int"]>>;
  favoriteRecipeIds?: Maybe<Array<Scalars["Int"]>>;
  recipeIds?: Maybe<Array<Scalars["Int"]>>;
  ingredients?: Maybe<Array<Scalars["String"]>>;
  includeAggregations?: Maybe<Scalars["Boolean"]>;
};

export type QueryStoresSearchArgs = {
  filter?: Maybe<StoresFilterInput>;
  limit?: Maybe<Scalars["Int"]>;
  start?: Maybe<Scalars["Int"]>;
};

export type QueryStoresGeoLocationSuggestionsArgs = {
  search: Scalars["String"];
  sessionToken?: Maybe<Scalars["String"]>;
};

export type QueryProductArgs = {
  id: Scalars["Int"];
  date?: Maybe<Scalars["String"]>;
};

export type QueryProductSearchArgs = {
  input: ProductSearchInput;
};

export type QueryExperimentalSearchProductsArgs = {
  input: ExperimentalSearchProductsInput;
};

export type QuerySearchArgs = {
  query: Scalars["String"];
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySearchProductsArgs = {
  input: SearchProductsInput;
};

export type QuerySearchProductsExperimentalArgs = {
  input: SearchProductsInput;
};

export type QuerySearchCategoryArgs = {
  input: SearchCategoryInput;
};

export type QuerySearchBrandArgs = {
  input: SearchBrandInput;
};

/** AddressComplete */
export type AddressComplete = {
  __typename?: "AddressComplete";
  /** Street name */
  street: Scalars["String"];
  /** House number */
  houseNumber: Scalars["Int"];
  /** The adjacent part of the house number. For example, the 'a' of 10a */
  houseNumberExtra?: Maybe<Scalars["String"]>;
  /** Postal code, examples NL: "1072CD" BE: "1024" */
  postalCode: Scalars["PostalCode"];
  /** City */
  city: Scalars["String"];
  /** CountryCode for example: 'NLD' (Iso3 format) */
  countryCode: Scalars["String"];
};

/** Address input type, all fields mandatory just as the Address type */
export type AddressCompleteInput = {
  /** Zipcode */
  postalCode: Scalars["String"];
  /** Street name of the member */
  street: Scalars["String"];
  /** House number without adjacent part */
  houseNumber: Scalars["Int"];
  /** The adjacent part of the house number. For example, the 'a' of 10a */
  houseNumberExtra?: Maybe<Scalars["String"]>;
  /** City */
  city: Scalars["String"];
  /** CountryCode for example: 'NLD' */
  countryCode: Scalars["String"];
};

/** Complete address */
export type AddressOptions = {
  __typename?: "AddressOptions";
  /** Options for city selection based on partial input address */
  city?: Maybe<Array<Scalars["String"]>>;
  /** Options for street selection based on partial input address */
  street?: Maybe<Array<Scalars["String"]>>;
};

/** AddressPartial */
export type AddressPartial = {
  __typename?: "AddressPartial";
  /** Street name */
  street?: Maybe<Scalars["String"]>;
  /** House number */
  houseNumber?: Maybe<Scalars["Int"]>;
  /** The adjacent part of the house number. For example, the 'a' of 10a */
  houseNumberExtra?: Maybe<Scalars["String"]>;
  /** Postal code, examples NL: "1072CD" BE: "1024" */
  postalCode?: Maybe<Scalars["PostalCode"]>;
  /** City */
  city?: Maybe<Scalars["String"]>;
  /** CountryCode for example: 'NLD' (Iso3 format) */
  countryCode: Scalars["String"];
};

/** Partial Address input type, all fields optional */
export type AddressPartialInput = {
  /** Zipcode */
  postalCode: Scalars["String"];
  /** Street name of the member */
  street?: Maybe<Scalars["String"]>;
  /** House number without adjacent part */
  houseNumber?: Maybe<Scalars["Int"]>;
  /** The adjacent part of the house number. For example, the 'a' of 10a */
  houseNumberExtra?: Maybe<Scalars["String"]>;
  /** City */
  city?: Maybe<Scalars["String"]>;
  /** CountryCode for example: 'NLD' */
  countryCode: Scalars["String"];
};

/** Address search result */
export type AddressSearch = {
  __typename?: "AddressSearch";
  /**
   * Normalized / formatted complete and valid address, null if
   * there is a partial address
   */
  address?: Maybe<AddressComplete>;
  /**
   * Normalized / formatted partial and valid address, null if
   * there is a complete address, also null if it's a invalid
   * address
   */
  partialAddress?: Maybe<AddressPartial>;
  /**
   * For partial addresses it is possible for certain address
   * properties to provide options to choose from to make it a
   * complete address.
   * This is currently used for the Belgium address search.
   */
  options?: Maybe<AddressOptions>;
  /** 'true' if the returned address is a complete address */
  isComplete: Scalars["Boolean"];
  /**
   * 'true' if the returned complete or partial address is
   * a known address for AH
   */
  isValid: Scalars["Boolean"];
  /**
   * 'true' if AH delivers orders to the complete or partial
   * address
   */
  isDeliveryAvailable: Scalars["Boolean"];
};

/** An advertisement containing several attributes needed to render it. */
export type Advertisement = {
  __typename?: "Advertisement";
  /** The name of the slot that this advertisement should be placed in. */
  slotName: Scalars["String"];
  /** The advertisement's id. */
  id: Scalars["String"];
  /** The advertiser's id. */
  advertiserId: Scalars["String"];
  /** The order's id. */
  orderId: Scalars["String"];
  /** The creative's id. */
  creativeId: Scalars["String"];
  /** The lineItem's id. */
  lineItemId: Scalars["String"];
  /** The advertisement's type. This type also implicitly defines the dimensions of the advertisement. */
  type: Scalars["String"];
  /** The advertisement's colors. */
  colors: AdvertisementColors;
  /** The advertisement's title text. */
  title: Scalars["String"];
  /**
   * The advertisement's images. Using the optional types parameter, you can filter for only the type of images that you
   * are interested in.
   */
  images: Array<AdvertisementImage>;
  /** The advertisement's CTA. The CTA contains information on what to do when a user clicks on the advertisement. */
  cta: AdvertisementCta;
  /**
   * The advertisement's tracked impression counter URL. A tracked impression is when there is place for an
   * advertisement to be rendered.
   */
  trackedImpressionCounter: Scalars["String"];
  /**
   * The advertisement's viewable impression counter URL. A viewable impression is when the advertisement has been at
   * least 50% in view for at least 1 second.
   */
  viewableImpressionCounter: Scalars["String"];
  /**
   * The advertisement's click tag URL. A click tag URL should be hit when an ad has been clicked on by a user. This is
   * not necessary when using the href URL from the CTA, which already routes through a dedicated URL that registers the
   * click and redirects to the destination automatically.
   */
  clickTag: Scalars["String"];
  /** The advertisement's width. */
  width: Scalars["Int"];
  /** The advertisement's height. */
  height: Scalars["Int"];
};

/** An advertisement containing several attributes needed to render it. */
export type AdvertisementImagesArgs = {
  types?: Maybe<Array<Scalars["String"]>>;
};

/** An Advertisement's colors. */
export type AdvertisementColors = {
  __typename?: "AdvertisementColors";
  /**
   * The advertisement's background color. This color is used to render the advertisement's background.
   * It is a hexadecimal format of a color, e.g. "#000000" or "#fce2e2".
   */
  background: Scalars["String"];
  /**
   * The advertisement's text color. This color is used to render the advertisement's text.
   * It is a hexadecimal format of a color, e.g. "#000000" or "#fce2e2".
   */
  text: Scalars["String"];
};

/** An advertisement's CTA. */
export type AdvertisementCta = {
  __typename?: "AdvertisementCta";
  /** The title text of the navigation item, e.g. "Try it now". */
  text: Scalars["String"];
  /** The CTA links to open when interacting (e.g. clicking) on the advertisement. */
  links: AdvertisementCtaLinks;
};

/** An advertisement's CTA links. */
export type AdvertisementCtaLinks = {
  __typename?: "AdvertisementCtaLinks";
  /** A URL to open upon interacting with the advertisement. */
  href: Scalars["String"];
  /**
   * A deeplink to open upon interacting with the advertisement in an app.
   * @deprecated @sunset_date(2024-07-18) (last version 8.66) - Might contain web links as well, switch to the clearer 'appLink' property instead.
   * . .
   */
  deeplink: Scalars["String"];
  /**
   * An untracked URL to open upon interacting with the advertisement. Can link to either a deeplink (appie://) or a
   * web link (https://).
   */
  appLink: Scalars["String"];
};

/** An advertisement's device type. This refers to the type of device that is used to render the advertisement on. */
export enum AdvertisementDeviceType {
  /** A phone. */
  Phone = "PHONE",
  /** A tablet. */
  Tablet = "TABLET",
  /** A desktop. */
  Desktop = "DESKTOP",
}

/** An advertisement's image. */
export type AdvertisementImage = {
  __typename?: "AdvertisementImage";
  /**
   * The image type. There are two main types: banner and content. Banner contains the full-width banner, including a
   * background. Content contains only the content on the banner, e.g. an image of a product.
   */
  type: Scalars["String"];
  /** The image title. */
  title: Scalars["String"];
  /** The image URL. */
  link: Scalars["String"];
  /** The image width. */
  width: Scalars["Int"];
  /** The image height. */
  height: Scalars["Int"];
};

/** Advertisement Metadata */
export type AdvertisementMetadata = {
  __typename?: "AdvertisementMetadata";
  /** The name of the slot that this advertisement should be placed in. */
  slotName: Scalars["String"];
  /** The advertisement's id. */
  id: Scalars["String"];
  /** The advertiser's id. */
  advertiserId: Scalars["String"];
  /** The order's id. */
  orderId: Scalars["String"];
  /**
   * The adspace's id.
   * @deprecated @sunset_date(2025-01-31) Use 'lineItemId' instead.
   * . .
   */
  adspaceId: Scalars["String"];
  /** The line item's id. */
  lineItemId: Scalars["String"];
  /** The creative's id. */
  creativeId: Scalars["String"];
  /**
   * The advertisement's tracked impression counter URL. A tracked impression is when there is place for an
   * advertisement to be rendered.
   */
  trackedImpressionCounterURL: Scalars["String"];
  /**
   * The advertisement's viewable impression counter URL. A viewable impression is when the advertisement has been at
   * least 50% in view for at least 1 second.
   */
  viewableImpressionCounterURL: Scalars["String"];
  /**
   * The advertisement's click tag URL. A click tag URL should be hit when an ad has been clicked on by a user. This is
   * not necessary when using the href URL from the CTA, which already routes through a dedicated URL that registers the
   * click and redirects to the destination automatically.
   */
  clickTagURL: Scalars["String"];
  /** The advertisement's width. */
  width: Scalars["Int"];
  /** The advertisement's height. */
  height: Scalars["Int"];
};

/** Spotlight Item Advertisement */
export type SpotlightCardAdvertisement = {
  __typename?: "SpotlightCardAdvertisement";
  /** The metadata of the advertisement. */
  metadata: AdvertisementMetadata;
  /** The spotlight card for the advertisement. */
  card: ContentSpotlightCard;
};

/** Loyalty cards available for the user */
export type AvailableLoyaltyCards = {
  __typename?: "AvailableLoyaltyCards";
  /** Loyalty card type can be something like: BONUS, ETOS, GALL, AIRMILES */
  type: LoyaltyCard;
  /** Name to be displayed on card */
  displayName: Scalars["String"];
  /** Description of the available loyalty card */
  description?: Maybe<Scalars["String"]>;
  /** A card image to be shown */
  imageUrl?: Maybe<Scalars["String"]>;
  /** Colors for card to be shown if url can't be loaded */
  placeHolderGradientColors: Array<Scalars["String"]>;
};

/** Returned member company business activities */
export type BusinessActivity = {
  __typename?: "BusinessActivity";
  /** See description of Business activities in MemberCompanyRegistration for more details */
  sbiCode: Scalars["String"];
  /** Company main area of expertise */
  isMainSbi: Scalars["Boolean"];
};

/** Details of a consent provided in the MemberConsents */
export type CardError = {
  __typename?: "CardError";
  /** Key about error */
  key: Scalars["String"];
  /** Message about what went wrong */
  message: Scalars["String"];
  /** Path where error occured */
  path: Scalars["String"];
};

/** Result of member cards can also be requested */
export type CardMutationResult = {
  __typename?: "CardMutationResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  validationErrors?: Maybe<Array<CardError>>;
  /** To fetch the new state after mutation for the current member */
  result?: Maybe<MemberLoyaltyCards>;
};

/** Default information needed to add a consent */
export type ConsentInput = {
  /** Code of a consent e.g. ANALYSE, LMN or GEBDATUM */
  code: Scalars["String"];
  /** Version which was accepted or declined */
  version: Scalars["Int"];
  /** When true consent is accepted when false consent is rejected */
  granted: Scalars["Boolean"];
};

/** Details of a consent provided in the MemberConsents */
export type Consents = {
  __typename?: "Consents";
  /** Code of a consent e.g. ANALYSE, LMN or GEBDATUM */
  code: Scalars["String"];
  /** Version which was accepted or declined */
  version: Scalars["Int"];
  /** When true consent is accepted when false consent is rejected */
  granted: Scalars["Boolean"];
  /** Timestamp of when the user accepted or rejected consent */
  timestamp: Scalars["String"];
};

/** Loyalty cards which are added to member */
export type LoyaltyCards = {
  __typename?: "LoyaltyCards";
  /** Loyalty card type can be something like: BONUS, ETOS, GALL, AIRMILES */
  type: LoyaltyCard;
  /** Number of loyalty card */
  cardNumber: Scalars["String"];
  /** Card number transformed in an EAN-13 code */
  barcodeNumber: Scalars["String"];
};

/** Basic member information */
export type Member = {
  __typename?: "Member";
  /** Is member business to business user or not */
  isB2B: Scalars["Boolean"];
  /** Company info */
  company?: Maybe<MemberCompany>;
  /** Permissions of the member example: GEBDATUM */
  permissions?: Maybe<Array<Scalars["String"]>>;
  /** Contact subscriptions for example: AH_NEWSLETTER */
  contactSubscriptions?: Maybe<Array<Scalars["String"]>>;
  /** Member data for analytics purposes */
  analytics: MemberAnalytics;
  /** Member consents */
  consents: MemberConsents;
  /** Member consents to show, information if a consent should be asked to the user */
  consentsToShow: Array<Scalars["String"]>;
  /** Member loyalty cards, show the cards the user has but also the cards which are available */
  loyaltyCards: MemberLoyaltyCards;
  /** Whether the phone number has been verified through an MFA code */
  isPhoneNumberVerified: Scalars["Boolean"];
  /** Whether the phone number `Member.phoneNumber` is a mobile number. */
  isPhoneNumberMobile?: Maybe<Scalars["Boolean"]>;
  /** The current MFA setting for the member */
  mfaSetting: Scalars["String"];
  /** All possible mfa settings for the member */
  availableMfaSettings: Array<CiamAvailableMfaSetting>;
  /**
   * Member identification
   * **not to be used in any client requests we make!!!**
   * TODO: maybe ID should become hashed ID?
   */
  id: Scalars["Int"];
  /** Name */
  name?: Maybe<MemberName>;
  /** Gender */
  gender?: Maybe<Gender>;
  /** Date of birth */
  dateOfBirth?: Maybe<Scalars["String"]>;
  /** Address */
  address?: Maybe<MemberAddress>;
  /** Phone number */
  phoneNumber?: Maybe<Scalars["PhoneNumber"]>;
  /** Email address */
  emailAddress?: Maybe<Scalars["EmailAddress"]>;
  /** All active memberships */
  memberships?: Maybe<Array<Scalars["String"]>>;
  /** All member cards */
  cards?: Maybe<MemberCards>;
  /** The audiences for the current user */
  customerProfileAudiences?: Maybe<Array<Scalars["String"]>>;
  /** The properties for the current user */
  customerProfileProperties?: Maybe<Array<KeyValue>>;
};

/** Member analytics data */
export type MemberAnalytics = {
  __typename?: "MemberAnalytics";
  /** Google analytics ID */
  idga: Scalars["String"];
  /** Monetization ID */
  idmon?: Maybe<Scalars["String"]>;
  /** Digimon ID */
  digimon?: Maybe<Scalars["String"]>;
  /** SAS ID */
  idsas?: Maybe<Scalars["String"]>;
  /** BATCHCOM ID */
  batch?: Maybe<Scalars["String"]>;
  /** FIREBASE ID */
  firebase?: Maybe<Scalars["String"]>;
  /** SITESPECT ID */
  sitespect?: Maybe<Scalars["String"]>;
  /** Member optins */
  optins: Array<Scalars["String"]>;
};

/** Member business activities */
export type MemberBusinessActivity = {
  __typename?: "MemberBusinessActivity";
  /**
   * Business activity identifier
   * Overview of business activities: https://www.kvk.nl/overzicht-standaard-bedrijfsindeling/
   * Example: 01.13.1 - 'Teelt van groenten in de volle grond'
   */
  businessActivityId: Scalars["String"];
  /** Company main area of expertise */
  isMainBusinessActivity: Scalars["Boolean"];
};

/** Member business activities input */
export type MemberBusinessActivityInput = {
  /**
   * Business activity identifier
   * See describtion of Business activities in MemberCompanyRegistration for more details
   */
  businessActivityId: Scalars["String"];
  /** Company main area of expertise */
  isMainBusinessActivity: Scalars["Boolean"];
};

/** Member company details */
export type MemberCompany = {
  __typename?: "MemberCompany";
  /** Company id */
  id?: Maybe<Scalars["String"]>;
  /** Company branch id */
  branchId?: Maybe<Scalars["String"]>;
  /** Company name */
  name?: Maybe<Scalars["String"]>;
  /** Used as a legal setting to differentiate between Consumer and Business law, for businesses with less then 5 employees Consumer laws apply and AH is allowed to send an offers newsletter. True if a business has less then 5 employees. */
  customOffersAllowed?: Maybe<Scalars["Boolean"]>;
  /** Address that is printed on the invoices */
  addressInvoice?: Maybe<MemberAddress>;
  /** List of activities associated to the company */
  businessActivities?: Maybe<Array<MemberBusinessActivity>>;
  /** The company VAT identification */
  vatId?: Maybe<Scalars["String"]>;
  /**
   * Industry sector code
   * @deprecated @sunset_date(2022-08-01) checked 2023-05-08 - used in appie-android@latest(8.40.1) - Is a legacy property, shouldn't be used anywhere
   * . .
   */
  sector?: Maybe<Scalars["String"]>;
};

/** Member company details input */
export type MemberCompanyDetailsInput = {
  /** Company id */
  id?: Maybe<Scalars["String"]>;
  /** Company branch id */
  branchId?: Maybe<Scalars["String"]>;
  /** Company name */
  name?: Maybe<Scalars["String"]>;
  /** Used as a legal setting to differentiate between Consumer and Business law, for businesses with less then 5 employees Consumer laws apply and AH is allowed to send an offers newsletter. True if a business has less then 5 employees. */
  customOffersAllowed?: Maybe<Scalars["Boolean"]>;
  /** Address that is printed on the invoices */
  addressInvoice?: Maybe<MemberAddressInput>;
  /** List of activities associated to the company */
  businessActivities?: Maybe<Array<MemberBusinessActivityInput>>;
  /** The company VAT identification */
  vatId?: Maybe<Scalars["String"]>;
};

/** Search for a specific company within the dutch Chamber of Commerce */
export type MemberCompanyRegistration = {
  __typename?: "MemberCompanyRegistration";
  /** Company identifier */
  id: Scalars["String"];
  /** Company name */
  name: Scalars["String"];
  /** Company name */
  branchId?: Maybe<Scalars["String"]>;
  /** Company country */
  countryCode: Scalars["String"];
  /**
   * Company area of expertise bound by a number (SBI codes)
   * SBI code is a dutch list with area of expertises from the kvk (Kamer van Koophandel)
   * The company chooses his expertise (for example supermarket, education or government) and we map it to the SBI number
   * Overview of business activities: https://www.kvk.nl/overzicht-standaard-bedrijfsindeling/
   * Example: 01.13.1 - 'Teelt van groenten in de volle grond'
   */
  businessActivities: Array<Maybe<BusinessActivity>>;
  /** Company address */
  addressSearch?: Maybe<AddressSearch>;
};

/** The returned object with the company registration and error state */
export type MemberCompanyRegistrationResult = {
  __typename?: "MemberCompanyRegistrationResult";
  /** The returned company */
  company?: Maybe<MemberCompanyRegistration>;
  /** State whether or not the kvk service is down */
  isKvkServiceDown: Scalars["Boolean"];
};

/** Contains the rules and result against user password */
export type MemberCompanyRegistrationSearch = {
  __typename?: "MemberCompanyRegistrationSearch";
  /** Company identifier */
  id: Scalars["String"];
  /** Company name */
  name: Scalars["String"];
  /** Company name */
  branchId: Scalars["String"];
  /** Company country */
  countryCode: Scalars["String"];
  /** Company address */
  addressText: Scalars["String"];
};

/** The result of the company search */
export type MemberCompanyRegistrationSearchResult = {
  __typename?: "MemberCompanyRegistrationSearchResult";
  /** The returned array with companies of the company search */
  companyRegistrations: Array<MemberCompanyRegistrationSearch>;
  /** Current page */
  pageNumber: Scalars["Int"];
  /** Number of pages */
  totalPages: Scalars["Int"];
  /** State whether or not the kvk service is down */
  isKvkServiceDown: Scalars["Boolean"];
};

/** Show all consents a member has given or declined */
export type MemberConsents = {
  __typename?: "MemberConsents";
  /** A list with all consents */
  items?: Maybe<Array<Consents>>;
};

/** Provide the consents which should be added or removed when doing the memberConsents mutation */
export type MemberConsentsInput = {
  /** Provide the code, version and granted to add it for one or multiple consents */
  add?: Maybe<Array<ConsentInput>>;
  /** Provide the code of a consent to delete it */
  remove?: Maybe<Array<Scalars["String"]>>;
};

/** Member Loyalty Cards object */
export type MemberLoyaltyCards = {
  __typename?: "MemberLoyaltyCards";
  /** Attached loyalty cards of the member will be in here */
  loyaltyCards: Array<Maybe<LoyaltyCards>>;
  /** loyalty cards the member can attach to his account will be inside here */
  availableLoyaltyCards: Array<Maybe<AvailableLoyaltyCards>>;
};

/** Member patch entities input */
export type MemberPatchEntitiesInput = {
  /** Memberships for example: WEBSHOP */
  memberships?: Maybe<MemberPatchEntityInput>;
  /** Contact subscriptions for example: AH_NEWSLETTER */
  contactSubscriptions?: Maybe<MemberPatchEntityInput>;
  /** Permissions for example: GEBDATUM */
  permissions?: Maybe<MemberPatchEntityInput>;
  /** Cards for example: BO 1234567890123 */
  cards?: Maybe<MemberPatchIdEntitiyInput>;
};

/** Member patch entity input */
export type MemberPatchEntityInput = {
  /** Add memberships, contact-subscriptions for example: WEBSHOP or AH_NEWSLETTER */
  add?: Maybe<Array<Scalars["String"]>>;
  /** Add memberships, contact-subscriptions for example: WEBSHOP or AH_NEWSLETTER */
  remove?: Maybe<Array<Scalars["String"]>>;
};

/** Member patch id entity input */
export type MemberPatchIdEntitiyInput = {
  /** Add cards for example: BonusCard (bonus) with card-number */
  add?: Maybe<Array<MemberPatchIdEntityAddInput>>;
  /** Add memberships, contact-subscriptions for example: WEBSHOP or AH_NEWSLETTER */
  remove?: Maybe<Array<Scalars["String"]>>;
};

/** Member patch id entity add input */
export type MemberPatchIdEntityAddInput = {
  /** Type of card for example: bonus, airmiles, gall */
  type: Scalars["String"];
  /** Number of card for example: 1234567890123 */
  number: Scalars["String"];
};

/** Details of a consent provided in the MemberConsents */
export type MembershipError = {
  __typename?: "MembershipError";
  /** Path where error occured */
  path: Scalars["String"];
  /** Key about error */
  key: Scalars["String"];
  /** Message about what went wrong */
  message: Scalars["String"];
};

/** Result of trying to add membership to user */
export type MembershipResult = {
  __typename?: "MembershipResult";
  /** Status of the mutation */
  status: MutationResultStatus;
  /** A list with all errors */
  errors?: Maybe<Array<MembershipError>>;
};

/** Result of trying to add memberships to user */
export type MembershipsResult = {
  __typename?: "MembershipsResult";
  /** Status of the mutation */
  status: MutationResultStatus;
  /** Result of the mutation */
  result?: Maybe<Array<Scalars["String"]>>;
  /** A list with all errors */
  errors?: Maybe<Array<MembershipError>>;
};

/** Type for basket */
export type Basket = {
  __typename?: "Basket";
  /** Id of the basket */
  id?: Maybe<Scalars["String"]>;
  /** Total price, quantity, shopping type and other basket info */
  summary: BasketSummary;
  /** Products that are in an order */
  itemsInOrder?: Maybe<Array<BasketOrderItem>>;
  /** If user can change delivery moment */
  canChangeDelivery: Scalars["Boolean"];
  /** Products on your list */
  products: Array<BasketItemProduct>;
  /** Vague terms/notes on your list */
  notes: Array<BasketNote>;
};

/** To delete an item from basket */
export type BasketDelete = {
  /**
   * Id of product to add to basket
   * Either `id` or `description` needs to be set
   */
  id?: Maybe<Scalars["Int"]>;
  /**
   * Vague term to add to basket
   * Either `id` or `description` needs to be set
   */
  description?: Maybe<Scalars["String"]>;
};

/** basket item product */
export type BasketItemProduct = {
  __typename?: "BasketItemProduct";
  /** Product ID */
  id: Scalars["Int"];
  /** Product */
  product: Product;
  /** Amount of items */
  quantity: Scalars["Int"];
  /** The page code where the item is added from */
  originCode?: Maybe<Scalars["String"]>;
};

/** We can mutate both products and "vage termen" to the Basket but also to List */
export type BasketMutation = {
  /**
   * Id of product to add to basket
   * Either `id` or `description` needs to be set
   */
  id?: Maybe<Scalars["Int"]>;
  /**
   * Vague term to add to basket
   * Either `id` or `description` needs to be set
   */
  description?: Maybe<Scalars["String"]>;
  /** Amount of the item to add to the basket */
  quantity: Scalars["Int"];
};

/** Result of performing mutation */
export type BasketMutationResult = MutationResult & {
  __typename?: "BasketMutationResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Basket after performing the mutation */
  result?: Maybe<Basket>;
};

/** type for vague basket item */
export type BasketNote = {
  __typename?: "BasketNote";
  /** Title of the vague term item */
  description: Scalars["String"];
  /** Amount of vague term items */
  quantity: Scalars["Int"];
  /** Name from a recipe for example "1 tb spoon of salt" searchTerm will be “salt” */
  searchTerm?: Maybe<Scalars["String"]>;
  /** The page code where the item is added from */
  originCode?: Maybe<Scalars["String"]>;
};

/** basket order item */
export type BasketOrderItem = {
  __typename?: "BasketOrderItem";
  /** Product ID */
  id: Scalars["Int"];
  /** Amount of items */
  quantity: Scalars["Int"];
  /** If order is closed */
  isClosed: Scalars["Boolean"];
  /** Amount of items that are already allocated for a user */
  allocatedQuantity?: Maybe<Scalars["Int"]>;
  /** The page code where the item is added from */
  originCode?: Maybe<Scalars["String"]>;
  /** Product */
  product: Product;
};

/** Enum for the basket shopping type eg: "DELIVERY", "DELIVERY_POINT" */
export enum BasketShoppingType {
  /** Home delivery */
  Delivery = "DELIVERY",
  /** Special pickup point for AH employees */
  DeliveryPoint = "DELIVERY_POINT",
  /** Like a normal pickup but assortment is limited to what is available in the store */
  InStorePick = "IN_STORE_PICK",
  /** When user is not in order mode and the basket is sorted by walking route */
  PhysicalStore = "PHYSICAL_STORE",
  /** Deliver products to a pickup location */
  Pickup = "PICKUP",
  /** Special business type of delivery */
  PickupDelivery = "PICKUP_DELIVERY",
  /** When user wants to pickup the (special) products in a store. */
  SpecialsOnly = "SPECIALS_ONLY",
  /** When user did not select shopping type yet */
  Unknown = "UNKNOWN",
}

/** Basket summary type */
export type BasketSummary = {
  __typename?: "BasketSummary";
  /** Price */
  price?: Maybe<BasketTotalPrice>;
  /** Total amount of items in the basket */
  quantity: Scalars["Int"];
  /** Active order ID */
  orderId?: Maybe<Scalars["Int"]>;
  /** Delivery date */
  deliveryDate?: Maybe<Scalars["String"]>;
  /** Delivery type for example home delivery or pickup in the store */
  shoppingType?: Maybe<BasketShoppingType>;
  /** If an order is cancellable */
  isCancellable?: Maybe<Scalars["Boolean"]>;
};

/** Basket total price type */
export type BasketTotalPrice = {
  __typename?: "BasketTotalPrice";
  /** Price before discounts */
  priceBeforeDiscount: Money;
  /** Price after discounts, also acts as subtotal */
  priceAfterDiscount: Money;
  /** Total price */
  totalPrice: Money;
  /** Price of bonuses and discounts */
  discount: Money;
};

/** ActivatePersonalPromotionStatus */
export enum ActivatePersonalPromotionMessage {
  /** Member id required */
  MemberIdRequired = "MEMBER_ID_REQUIRED",
  /** Offer activated */
  OfferActivated = "OFFER_ACTIVATED",
  /** Activation not allowed */
  ActivationNotAllowed = "ACTIVATION_NOT_ALLOWED",
  /** Activation failed */
  ActivationFailed = "ACTIVATION_FAILED",
}

/** The response of the activate personal promotion mutation */
export type ActivatePersonalPromotionResponse = {
  __typename?: "ActivatePersonalPromotionResponse";
  /** The activation message of the personal bonus box offer */
  message: ActivatePersonalPromotionMessage;
  /** The activation status of the personal bonus box offer */
  status: Scalars["String"];
};

/** Bonus category */
export type BonusCategory = {
  __typename?: "BonusCategory";
  /** Category slug */
  id: Scalars["String"];
  /** Category title */
  title: Scalars["String"];
  /** Segment type of the category */
  type: BonusCategoryType;
  /** Category images */
  images: Array<BonusCategoryImage>;
  /** Segments in the category */
  segments: Array<BonusSegment>;
};

/** Bonus category image */
export type BonusCategoryImage = {
  __typename?: "BonusCategoryImage";
  /** Url */
  url: Scalars["String"];
  /** Height */
  height: Scalars["Int"];
  /** Width */
  width: Scalars["Int"];
};

/** Bonus category type */
export enum BonusCategoryType {
  /** National */
  National = "NATIONAL",
  /** AH Online only */
  Ahonline = "AHONLINE",
  /** Gall */
  Gall = "GALL",
  /** Gall Premium */
  Gallcard = "GALLCARD",
  /** Etos */
  Etos = "ETOS",
}

/** Bonus period defines date range of promotions by week */
export type BonusPeriod = {
  __typename?: "BonusPeriod";
  /** Start date on bonus period */
  startDate: Scalars["String"];
  /** End date on bonus period */
  endDate: Scalars["String"];
  /** Week number of bonus period */
  weekNumber: Scalars["Int"];
  /** Bonus period of current week */
  actualWeek: Scalars["Boolean"];
  /** Bonus folder for the period */
  folder?: Maybe<Folder>;
  /** Date from which the next bonus period will be available */
  nextPeriodVisibleFrom: Scalars["String"];
};

/** Promotion type */
export enum BonusPromotionType {
  /** Ah Online */
  Ahonline = "AHONLINE",
  /** ETOS */
  Etos = "ETOS",
  /** GALL */
  Gall = "GALL",
  /** GALLCARD */
  Gallcard = "GALLCARD",
  /** Usually free delivery */
  Incentive = "INCENTIVE",
  /** National */
  National = "NATIONAL",
  /** Personal */
  Personal = "PERSONAL",
  /** Spotlight */
  Spotlight = "SPOTLIGHT",
  /** Previously bought */
  PreviouslyBought = "PREVIOUSLY_BOUGHT",
}

/** Bonus segment defines bonus */
export type BonusSegment = {
  __typename?: "BonusSegment";
  /** Id */
  id: Scalars["String"];
  /** hqId */
  hqId?: Maybe<Scalars["Int"]>;
  /** Segment name */
  title: Scalars["String"];
  /** Segment type */
  type: BonusSegmentType;
  /** Description */
  description?: Maybe<Scalars["String"]>;
  /** Images */
  images: Array<BonusSegmentImage>;
  /** The total number of different products in this bonus segment. */
  productCount?: Maybe<Scalars["Int"]>;
  /** All the productIds in the segment */
  productIds?: Maybe<Array<Scalars["Int"]>>;
  /**
   * Promotion type of segment to infer
   * type of promotion. Usually used in
   * computation of lanes on bonus. E.g.
   * ETOS represents an Etos segment promotion
   */
  promotionType: BonusPromotionType;
  /** Price */
  price?: Maybe<BonusSegmentPrice>;
  /** Category */
  category?: Maybe<Scalars["String"]>;
  /**
   * Activation status of segment for
   * personal bonus
   * e.g. ACTIVATED, ACTIVATABLE, ASSIGNED
   */
  activationStatus: BonusSegmentActivationStatus;
  /** Discount */
  discount: BonusSegmentDiscount;
  /** DiscountUnit */
  discountUnit?: Maybe<BonusSegmentDiscountUnit>;
  /**
   * 'DiscountLabels' are the discount labels coming from the promotion-label-renderer service as an object of properties and represents all our discount types.
   * @See https://github.com/RoyalAholdDelhaize/lib-promotion-label-renderer/blob/master/docs/discount_labels_doc.md
   */
  discountLabels?: Maybe<Array<BonusSegmentDiscountLabel>>;
  /**
   * 'DiscountShields' are the formatted text version of DiscountLabelCodes
   * Example: ['2e, gratis'], ['15%, korting]', ['per 100 gram', '3.14'].
   */
  discountShields: Array<BonusSegmentDiscountShield>;
  /** Spotlight */
  spotlight: Scalars["Boolean"];
  /**
   * Sales unit size description.
   * E.g. "per stuk"
   */
  salesUnitSize: Scalars["String"];
  /** Availability date range */
  availability: BonusSegmentAvailability;
  /** Subtitle of segment */
  subtitle?: Maybe<Scalars["String"]>;
  /**
   * Smart label to display either:
   *     - validity period
   *     - delivery bundle bonus
   *     - personal bonus
   */
  smartLabel?: Maybe<Scalars["String"]>;
  /** storeOnly */
  storeOnly?: Maybe<Scalars["Boolean"]>;
  /** products */
  products?: Maybe<Array<Product>>;
  /**
   * Product that only is returned when the segment has only one product
   * If a segment has more than one product, this field will be null
   * Use this field to render a bonusSegment as a product card when there is only has one product
   */
  product?: Maybe<Product>;
  /** webPath is a link that can be used to link to the bonus web app */
  webPath?: Maybe<Scalars["String"]>;
  /** Exception rule of the promotion, for example if it doesn't apply to certain products */
  exceptionRule?: Maybe<Scalars["String"]>;
  /** Whether the promotion is a tiered promotion */
  isTieredPromotion?: Maybe<Scalars["Boolean"]>;
  /**
   * In case of a digital scratching promotion, number of remaining free products in that promotion that the user can redeem.
   * A product is considered redeemed after the order has been processed and delivered.
   */
  redemptionCount?: Maybe<Scalars["Int"]>;
};

/** Activation statuses for segment */
export enum BonusSegmentActivationStatus {
  /** ACTIVATABLE */
  Activatable = "ACTIVATABLE",
  /** ACTIVATED */
  Activated = "ACTIVATED",
  /** ASSIGNED */
  Assigned = "ASSIGNED",
  /** NONE */
  None = "NONE",
  /** REDEEMABLE */
  Redeemable = "REDEEMABLE",
  /** REDEEMED */
  Redeemed = "REDEEMED",
}

/** Bonus Segment availability */
export type BonusSegmentAvailability = {
  __typename?: "BonusSegmentAvailability";
  /** Availability start date */
  startDate: Scalars["String"];
  /** Availability end date */
  endDate: Scalars["String"];
  /** Availability description */
  description?: Maybe<Scalars["String"]>;
};

/** BonusSegmentDiscount */
export type BonusSegmentDiscount = {
  __typename?: "BonusSegmentDiscount";
  /** Discount description */
  description?: Maybe<Scalars["String"]>;
  /**
   * Discount theme used to infer
   * shield branding color and styling.
   * E.g. PREMIUM
   */
  theme?: Maybe<BonusTheme>;
  /** Title */
  title?: Maybe<Scalars["String"]>;
  /**
   * Extra descriptions to
   * compute bonus shield
   */
  extraDescriptions: Array<Scalars["String"]>;
};

/** BonusSegmentDiscountLabel */
export type BonusSegmentDiscountLabel = {
  __typename?: "BonusSegmentDiscountLabel";
  /** Code */
  code: BonusSegmentDiscountLabelCodes;
  /** DefaultDescription */
  defaultDescription: Scalars["String"];
  /** Price */
  price?: Maybe<Scalars["Float"]>;
  /** percentage */
  percentage?: Maybe<Scalars["Float"]>;
  /** amount */
  amount?: Maybe<Scalars["Float"]>;
  /** count */
  count?: Maybe<Scalars["Int"]>;
  /** freeCount */
  freeCount?: Maybe<Scalars["Int"]>;
  /** actualCount */
  actualCount?: Maybe<Scalars["Int"]>;
  /** deliveryType */
  deliveryType?: Maybe<Scalars["String"]>;
  /** unit */
  unit?: Maybe<Scalars["String"]>;
};

/** BonusSegmentDiscountLabelCodes */
export enum BonusSegmentDiscountLabelCodes {
  /** ACTION */
  Action = "ACTION",
  /** AIRMILES */
  Airmiles = "AIRMILES",
  /** AMOUNT */
  Amount = "AMOUNT",
  /** WEIGHT */
  Weight = "WEIGHT",
  /** UNIT FIXED PRICE */
  UnitFixedPrice = "UNIT_FIXED_PRICE",
  /** X WITH REDUCTION */
  XWithReduction = "X_WITH_REDUCTION",
  /** ARTICLE PERCENTAGE */
  ArticlePercentage = "ARTICLE_PERCENTAGE",
  /** BONUS */
  Bonus = "BONUS",
  /** BUNDLE */
  Bundle = "BUNDLE",
  /** BUNDLE_MIXED */
  BundleMixed = "BUNDLE_MIXED",
  /** BUNDLE_BULK */
  BundleBulk = "BUNDLE_BULK",
  /** FALLBACK */
  Fallback = "FALLBACK",
  /** FIXED PRICE */
  FixedPrice = "FIXED_PRICE",
  /** FREE DELIVERY */
  FreeDelivery = "FREE_DELIVERY",
  /** FREE DELIVERY AMOUNT */
  FreeDeliveryAmount = "FREE_DELIVERY_AMOUNT",
  /** DELIVERY INCENTIVE */
  DeliveryIncentive = "DELIVERY_INCENTIVE",
  /** N PAID */
  NPaid = "N_PAID",
  /** ONE FREE */
  OneFree = "ONE_FREE",
  /** ONE HALF PRICE */
  OneHalfPrice = "ONE_HALF_PRICE",
  /** PERCENTANGE */
  Percentage = "PERCENTAGE",
  /** PERCENTAGE PER AMOUNT */
  PercentagePerAmount = "PERCENTAGE_PER_AMOUNT",
  /** ROUTE99 */
  Route99 = "ROUTE99",
  /** TIERED PERCENT */
  TieredPercent = "TIERED_PERCENT",
  /** TIERED PRICE */
  TieredPrice = "TIERED_PRICE",
  /** X FOR Y */
  XForY = "X_FOR_Y",
  /** X PLUS Y FREE */
  XPlusYFree = "X_PLUS_Y_FREE",
  /** VIRTUAL BUNDLE */
  VirtualBundle = "VIRTUAL_BUNDLE",
  /** SCRATCH_CARD */
  ScratchCard = "SCRATCH_CARD",
  /** FESTIVE_FAVOURITE */
  FestiveFavourite = "FESTIVE_FAVOURITE",
  /** WEIGHT_FIXED_DISCOUNT */
  WeightFixedDiscount = "WEIGHT_FIXED_DISCOUNT",
}

/** BonusSegmentDiscountLabel */
export type BonusSegmentDiscountShield = {
  __typename?: "BonusSegmentDiscountShield";
  /** text */
  text: Array<Maybe<Scalars["String"]>>;
  /** emphasis */
  emphasis: BonusSegmentDiscountShieldEmphasis;
  /** theme */
  theme?: Maybe<BonusSegmentDiscountShieldTheme>;
  /** default description to use in shield */
  defaultDescription?: Maybe<Scalars["String"]>;
  /**
   * title related to the label type (ex: bonus box) which would show
   * on the top or on the left side of the shield
   */
  title?: Maybe<Scalars["String"]>;
  /** topText */
  topText?: Maybe<Scalars["String"]>;
  /** centerText */
  centerText?: Maybe<Scalars["String"]>;
  /** bottomText */
  bottomText?: Maybe<Scalars["String"]>;
};

/** BonusSegmentDiscountShieldEmphasis */
export enum BonusSegmentDiscountShieldEmphasis {
  /** default */
  Default = "DEFAULT",
  /** top */
  Top = "TOP",
  /** bottom */
  Bottom = "BOTTOM",
  /** middle */
  Middle = "MIDDLE",
}

/** BonusSegmentDiscountShieldTheme */
export enum BonusSegmentDiscountShieldTheme {
  /** Tiered offers */
  TieredOffers = "TIERED_OFFERS",
  /** Airmiles */
  Airmiles = "AIRMILES",
  /** Bonus */
  Bonus = "BONUS",
  /** Premium */
  Premium = "PREMIUM",
  /** Gall */
  Gall = "GALL",
  /** Etos */
  Etos = "ETOS",
  /** Infinite */
  Infinite = "INFINITE",
  /** Bundle */
  Bundle = "BUNDLE",
  /** Bonus Box */
  BonusBox = "BONUS_BOX",
  /** Spotlight */
  Spotlight = "SPOTLIGHT",
  /** Festive Favourite */
  FestiveFavourite = "FESTIVE_FAVOURITE",
}

/** BonusSegmentDiscountUnit */
export type BonusSegmentDiscountUnit = {
  __typename?: "BonusSegmentDiscountUnit";
  /** Type */
  type: Scalars["String"];
  /** count */
  count: Scalars["Float"];
  /** rate */
  rate?: Maybe<Scalars["Float"]>;
  /** totalDiscount */
  totalDiscount?: Maybe<Scalars["Float"]>;
  /** totalPrice */
  totalPrice?: Maybe<Scalars["Float"]>;
  /** unitsForFree */
  unitsForFree?: Maybe<Scalars["Float"]>;
};

/** BonusSegmentImage */
export type BonusSegmentImage = {
  __typename?: "BonusSegmentImage";
  /** Url */
  url: Scalars["String"];
  /** Title */
  title: Scalars["String"];
  /** Height */
  height: Scalars["Int"];
  /** Width */
  width: Scalars["Int"];
};

/** BonusSegmentPrice */
export type BonusSegmentPrice = {
  __typename?: "BonusSegmentPrice";
  /** Now */
  now?: Maybe<Money>;
  /** Was */
  was?: Maybe<Money>;
  /** Label */
  label?: Maybe<Scalars["String"]>;
};

/** BonusSegmentState contains the states possible for a bonus segment */
export enum BonusSegmentState {
  /** Bonus box promotions that can be activated by the user */
  Activatable = "ACTIVATABLE",
  /** Exclude bonus box promotions that can be activated by the user */
  NegateActivatable = "NEGATE_ACTIVATABLE",
  /** Bonus box promotions that have been activated */
  Activated = "ACTIVATED",
  /** Exclude bonus box promotions that have been activated */
  NegateActivated = "NEGATE_ACTIVATED",
  /** Personal promotions assigned to the user */
  Assigned = "ASSIGNED",
  /** Exclude personal promotions assigned to the user */
  NegateAssigned = "NEGATE_ASSIGNED",
  /** NONE */
  None = "NONE",
  /** NEGATE_NONE */
  NegateNone = "NEGATE_NONE",
  /** Digital scratch card promotions that can be redeemed at checkout */
  Redeemable = "REDEEMABLE",
  /** Exclude digital scratch card promotions that can be redeemed at checkout */
  NegateRedeemable = "NEGATE_REDEEMABLE",
  /** Digital scratch card promotions that have been redeemed (i.e. the user has already bought and received the product) */
  Redeemed = "REDEEMED",
  /** Exclude digital scratch card promotions that have been redeemed (i.e. the user has already bought and received the product) */
  NegateRedeemed = "NEGATE_REDEEMED",
}

/** BonusSegmentType */
export enum BonusSegmentType {
  /** AH stores */
  Ah = "AH",
  /** AH online only */
  AhOnlineOnly = "AH_ONLINE_ONLY",
  /** AH online only subtype */
  AhOnlineOnlySubtype = "AH_ONLINE_ONLY_SUBTYPE",
  /** Delivery bundle */
  DeliveryBundle = "DELIVERY_BUNDLE",
  /** Bonus box */
  BonusBox = "BONUS_BOX",
  /** Etos */
  Etos = "ETOS",
  /** Free delivery */
  FreeDelivery = "FREE_DELIVERY",
  /** Gall customer card and online */
  GallCustomerCard = "GALL_CUSTOMER_CARD",
  /** Gall online only */
  GallOnlineOnly = "GALL_ONLINE_ONLY",
  /** Personal */
  PersonalBonus = "PERSONAL_BONUS",
  /** Premium */
  Premium = "PREMIUM",
  /** AH XL */
  AhXl = "AH_XL",
  /** NEGATE_PREMIUM */
  NegatePremium = "NEGATE_PREMIUM",
  /** DIGITAL_SCRATCH_CARD */
  DigitalScratchCard = "DIGITAL_SCRATCH_CARD",
  /** NEGATE_DIGITAL_SCRATCH_CARD */
  NegateDigitalScratchCard = "NEGATE_DIGITAL_SCRATCH_CARD",
  /** BUNDEL */
  Bundel = "BUNDEL",
  /** FESTIVE_FAVOURITE */
  FestiveFavourite = "FESTIVE_FAVOURITE",
}

/** Bonus Themes */
export enum BonusTheme {
  /** Regular bonus */
  Bonus = "BONUS",
  /** Personal bonus */
  BonusBox = "BONUS_BOX",
  /** Etos */
  Etos = "ETOS",
  /** Gall'n'Gall */
  Gall = "GALL",
  /** Infinite */
  Infinite = "INFINITE",
  /** Premium */
  Premium = "PREMIUM",
  /** Tiered offer */
  TieredOffer = "TIERED_OFFER",
  /** Festive favourite */
  FestiveFavourite = "FESTIVE_FAVOURITE",
}

/** Predefined filter sets */
export enum CategoriesFilterSet {
  /** Predefined parameters for the web categories query */
  WebCategories = "WEB_CATEGORIES",
  /** Predefined parameters for the app categories query */
  AppCategories = "APP_CATEGORIES",
}

/** FreeDelivery BonusSegments with the subscription */
export type FreeDeliveryBonusSegments = {
  __typename?: "FreeDeliveryBonusSegments";
  /** BonusSegments */
  bonusSegments?: Maybe<Array<BonusSegment>>;
};

/** Personal promotion bundles */
export type PersonalPromotionBundles = {
  __typename?: "PersonalPromotionBundles";
  /** The amount of activations that can be done by the user */
  maximumActivations: Scalars["Int"];
  /** The validity period of the personal promotion bundle */
  validityPeriod?: Maybe<PersonalPromotionBundlesValidityPeriod>;
  /** Error message */
  error?: Maybe<PersonalPromotionErrorMessage>;
};

/** Personal promotion bundle validity period */
export type PersonalPromotionBundlesValidityPeriod = {
  __typename?: "PersonalPromotionBundlesValidityPeriod";
  /** Availability start date */
  start: Scalars["String"];
  /** Availability end date */
  end: Scalars["String"];
};

/** PersonalPromotionErrorMessage */
export enum PersonalPromotionErrorMessage {
  /** Bonus box has not yet been filled (can be the case when a new account is created and the offers are not yet available) */
  BonusBoxNotFilled = "BONUS_BOX_NOT_FILLED",
  /** Too early error message (for example if the user has selected order date in the far future where offers are to be determined) */
  TooEarly = "TOO_EARLY",
  /** Generic error (for all other errors returned by the service) */
  Generic = "GENERIC",
}

/** A product is a thing that can be ordered. */
export type Product = {
  __typename?: "Product";
  /**
   * product price
   *
   * Do not use this date argument but use the date from the product type level
   * @deprecated @sunset_date(2024-08-25) Use priceV2 instead
   * . priceV2.
   */
  price?: Maybe<ProductPrice>;
  /** Product price with discount information */
  priceV2?: Maybe<ProductPriceV2>;
  /** Product identifier */
  id: Scalars["Int"];
  /**
   * Product date.
   * The date has an effect on fields like 'availability'.
   */
  date?: Maybe<Scalars["String"]>;
  /** additional information about the product */
  additionalInformation?: Maybe<Scalars["String"]>;
  /** True if the product is age restricted (e.g. alcohol is 18+) */
  ageCheck?: Maybe<Scalars["Boolean"]>;
  /** product availability */
  availability?: Maybe<ProductAvailability>;
  /**
   * Label if the product is unavailable
   *
   * eg: Vandaag besteld, vanaf zondag in huis
   * @deprecated @sunset_date(2024-10-01) the availability label is now returned as text by the BE directly
   * . Use `availability.availabilityLabel` instead.
   */
  availabilityLabel?: Maybe<Scalars["String"]>;
  /** brand of product */
  brand?: Maybe<Scalars["String"]>;
  /**
   * Product category, which consists of the first taxonomy node and the last taxanomy node.
   * for example: 'Aardappel, groente, fruit/IJsberg sla'
   */
  category?: Maybe<Scalars["String"]>;
  /**
   * Whether the product has a list price.
   * In Web FE: if `true`, display label "Adviesprijs" on the PDP or product card.
   */
  hasListPrice: Scalars["Boolean"];
  /** highlight (Feestfavoriet etc. / shop-in-shop / nutriscore) */
  highlight?: Maybe<Scalars["String"]>;
  /** Bullet points on product page */
  highlights?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** external hq id */
  hqId?: Maybe<Scalars["Int"]>;
  /** all the icons for current product */
  icons?: Maybe<Array<ProductIcon>>;
  /**
   * Product image(s), specified by rendition(s) and angle(s).
   * A product can have multiple images.
   * Each of the images can be represented in different renditions (small, medium, large)
   * `imagePack` is a replacement for `imagesMulti`, `imageSet` and `images`.
   */
  imagePack?: Maybe<Array<ProductImage>>;
  /**
   * product images
   * @deprecated @sunset_date(2024-08-01) Images should be fetched via Product Service v3 (the only source of truth for images)
   * . field imagePack.
   */
  images: Array<ImageSet>;
  /**
   * Product images.
   * Each product can have multiple images.
   * Each of those images can be represented in different renditions (small, medium, large)
   * `imagesMulti` is expected to completely superseded `imageSet` and `images`. Stay tuned!
   * @deprecated @sunset_date(2024-08-01) Images should be fetched via Product Service v3 (the only source of truth for images)
   * . field imagePack.
   */
  imagesMulti?: Maybe<Array<ProductImageMulti>>;
  /** Interaction label shows 'Kies alternatief' / 'Kies product' if unavailable */
  interactionLabel?: Maybe<Scalars["String"]>;
  /** Whether product is deactivated */
  isDeactivated?: Maybe<Scalars["Boolean"]>;
  /** Whether the product is a sample or not. */
  isSample: Scalars["Boolean"];
  /**
   * DO NOT USE - Max quantity of a product order, hardcoded at 99 since
   * there is no service available yet. For testing purposes you can use
   * the x-feature-flag header with enable-maxQuantity value.
   * @deprecated @sunset_date(2024-12-01) For over two years no service is implemented so the maxUnits field, most probably, is what you need
   * . availability.maxUnits.
   */
  maxQuantity?: Maybe<Scalars["Int"]>;
  /**
   * Max number of addable units of the product
   * @deprecated @sunset_date(2024-12-01) Max units is now part of the availability facade instead of stripped products to achieve better performance
   * . availability.maxUnits.
   */
  maxUnits?: Maybe<Scalars["Int"]>;
  /**
   * How many days the product remains fresh
   * This maps to 'THT', which is 'Tenminste Houdbaar Tot'
   */
  minBestBeforeDays?: Maybe<Scalars["Int"]>;
  /**
   * Products of the same brand and in the same taxonomy as the queried product.
   * Currently unavailable products are filtered out and not included.
   * Currently invisible products are also filtered out.
   * All the other filtering (like excluding products without images) should be performed by the caller.
   */
  otherSorts: Array<Maybe<Product>>;
  /** Whether the product is a private label product */
  privateLabel?: Maybe<Scalars["Boolean"]>;
  /** product properties */
  properties?: Maybe<Array<ProductProperty>>;
  /** Sales unit size e.g. '2 stuks' */
  salesUnitSize?: Maybe<Scalars["String"]>;
  /** Product shop type */
  shopType: ProductShopType;
  /** Summary, e.g. 'Tortellini kaas' */
  summary?: Maybe<Scalars["String"]>;
  /** product taxonomies */
  taxonomies?: Maybe<Array<ProductTaxonomy>>;
  /** product title */
  title?: Maybe<Scalars["String"]>;
  /** product meta */
  tradeItem?: Maybe<ProductTradeItem>;
  /**
   * Variant info of this product.
   *
   * Null if product doesn't have any variants.
   */
  variant?: Maybe<ProductVariant>;
  /** Variants (e.g. wine by the case vs wine per bottle) */
  variants: Array<ProductVariant>;
  /** Virtual bundle items (a virtual bundle is a bundle with multiple products) */
  virtualBundleProducts?: Maybe<Array<Maybe<ProductVirtualBundleItem>>>;
  /**
   * An array of virtual bundles in which the current product is included in
   * Usage Eg: PDP virtual bundles lane
   *
   * ATTENTION:
   * Do not request this field if your query returns multiple products.
   * The service doesn't accept multiple product IDs, yet.
   */
  virtualBundles?: Maybe<Array<Maybe<Product>>>;
  /** Path to the web link */
  webPath?: Maybe<Scalars["String"]>;
  /** Whether the product is sponsored or not */
  isSponsored?: Maybe<Scalars["Boolean"]>;
};

/** A product is a thing that can be ordered. */
export type ProductPriceArgs = {
  date?: Maybe<Scalars["String"]>;
  includeScratchCards?: Maybe<Scalars["Boolean"]>;
};

/** A product is a thing that can be ordered. */
export type ProductPriceV2Args = {
  periodStart?: Maybe<Scalars["String"]>;
  periodEnd?: Maybe<Scalars["String"]>;
  forcePromotionVisibility?: Maybe<Scalars["Boolean"]>;
  states?: Maybe<Array<BonusSegmentState>>;
  filterUnavailableProducts?: Maybe<Scalars["Boolean"]>;
};

/** A product is a thing that can be ordered. */
export type ProductImagePackArgs = {
  angles?: Maybe<Array<Maybe<ProductImageAngle>>>;
};

/** A product is a thing that can be ordered. */
export type ProductImagesArgs = {
  renditions?: Maybe<Array<ProductImageRenditions>>;
};

/** A product is a thing that can be ordered. */
export type ProductPropertiesArgs = {
  codes?: Maybe<Array<Scalars["String"]>>;
};

/** A product price */
export type ProductPrice = {
  __typename?: "ProductPrice";
  /** the current price */
  now: Money;
  /** the normal price in case the now price is discounted */
  was?: Maybe<Money>;
  /** info per unit */
  unitInfo?: Maybe<ProductUnitInfo>;
  /** discount information */
  discount?: Maybe<ProductPriceDiscount>;
};

/** Price discount information */
export type ProductPriceDiscount = {
  __typename?: "ProductPriceDiscount";
  /** Discount bonus segment id */
  segmentId?: Maybe<Scalars["Int"]>;
  /** Discount text */
  description?: Maybe<Scalars["String"]>;
  /** Discount type */
  type?: Maybe<Scalars["String"]>;
};

/** Price discount information */
export type ProductPriceDiscountV2 = {
  __typename?: "ProductPriceDiscountV2";
  /** Discount bonus segment id */
  segmentId?: Maybe<Scalars["Int"]>;
  /** Discount text */
  description?: Maybe<Scalars["String"]>;
  /** Discount type */
  type?: Maybe<Scalars["String"]>;
  /** Promotion type of  the discount */
  promotionType?: Maybe<BonusPromotionType>;
  /** Segment type of the discount */
  segmentType?: Maybe<BonusSegmentType>;
  /** Discount subtitle */
  subtitle?: Maybe<Scalars["String"]>;
  /** Discount theme */
  theme?: Maybe<BonusTheme>;
  /** Collection of tiered offers */
  tieredOffer?: Maybe<Array<Scalars["String"]>>;
  /** Information about the validity period of the discount */
  availability?: Maybe<BonusSegmentAvailability>;
  /** Whether was price should be displayed */
  wasPriceVisible?: Maybe<Scalars["Boolean"]>;
  /** Quantity of products within promotion */
  productCount?: Maybe<Scalars["Int"]>;
  /** Whether a promotion is a multiple item promotion */
  multipleItemPromotion?: Maybe<Scalars["Boolean"]>;
  /**
   * Smart label to display either:
   *     - validity period
   *     - delivery bundle bonus
   *     - personal bonus
   */
  smartLabel?: Maybe<Scalars["String"]>;
  /**
   * Activation status of segment for
   * personal bonus
   * e.g. ACTIVATED, ACTIVATABLE, ASSIGNED
   */
  activationStatus?: Maybe<BonusSegmentActivationStatus>;
};

/** Product price with discount */
export type ProductPriceV2 = {
  __typename?: "ProductPriceV2";
  /** the current price */
  now?: Maybe<Money>;
  /** the normal price in case the now price is discounted */
  was?: Maybe<Money>;
  /** info per unit */
  unitInfo?: Maybe<ProductUnitInfo>;
  /** discount data */
  discount?: Maybe<ProductPriceDiscountV2>;
  /** Promotion label, which might contain information about the discount or other labels (ex: Nieuw, virtual bundle without a discount) */
  promotionLabel?: Maybe<PromotionLabel>;
  /** Promotion label, which might contain information about the discount or other labels (ex: Nieuw, virtual bundle without a discount) */
  promotionShields?: Maybe<Array<Maybe<BonusSegmentDiscountShield>>>;
};

/** Info per unit */
export type ProductUnitInfo = {
  __typename?: "ProductUnitInfo";
  /** price per unit */
  price: Money;
  /** the actual unit, i.e. KG */
  description?: Maybe<Scalars["String"]>;
};

/** Promotion label, which might contain information about the discount or other labels (ex: virtual bundle without a discount) */
export type PromotionLabel = {
  __typename?: "PromotionLabel";
  /** The label type */
  type?: Maybe<PromotionLabelType>;
  /** The label tiers, will have multiple tiers in case of tiered offers */
  tiers?: Maybe<Array<Maybe<PromotionLabelTier>>>;
};

/** A promotion label tier */
export type PromotionLabelTier = {
  __typename?: "PromotionLabelTier";
  /** The label mechanism (ex: DELIVERY_INCENTIVE or X_FOR_Y) */
  mechanism?: Maybe<BonusSegmentDiscountLabelCodes>;
  /** The description of the label */
  description?: Maybe<Scalars["String"]>;
  /** The alternate description of the label */
  alternateDescription?: Maybe<Scalars["String"]>;
  /** The original description of the label */
  originalDescription?: Maybe<Scalars["String"]>;
  /** amount */
  amount?: Maybe<Scalars["Float"]>;
  /** incentiveType */
  incentiveType?: Maybe<Scalars["String"]>;
  /** count */
  count?: Maybe<Scalars["Int"]>;
  /** freeCount */
  freeCount?: Maybe<Scalars["Int"]>;
  /** actualCount */
  actualCount?: Maybe<Scalars["Int"]>;
  /** price */
  price?: Maybe<Scalars["Float"]>;
  /** percentage */
  percentage?: Maybe<Scalars["Float"]>;
  /** unit */
  unit?: Maybe<Scalars["String"]>;
};

/** Promotion Label Type */
export enum PromotionLabelType {
  /** B2B_PREMIUM */
  B2BPremium = "B2B_PREMIUM",
  /** BONUS_BOX */
  BonusBox = "BONUS_BOX",
  /** NO_DISCOUNT_BUNDLE */
  NoDiscountBundle = "NO_DISCOUNT_BUNDLE",
  /** PRODUCT_DISCOUNT_BUNDLE */
  ProductDiscountBundle = "PRODUCT_DISCOUNT_BUNDLE",
  /** DELIVERY_BUNDLE */
  DeliveryBundle = "DELIVERY_BUNDLE",
  /** GALL_PREMIUM */
  GallPremium = "GALL_PREMIUM",
  /** ONLINE */
  Online = "ONLINE",
  /** PERSONAL_OFFER */
  PersonalOffer = "PERSONAL_OFFER",
  /** PREMIUM */
  Premium = "PREMIUM",
  /** SPOTLIGHT */
  Spotlight = "SPOTLIGHT",
  /** ETOS */
  Etos = "ETOS",
  /** AIRMILES */
  Airmiles = "AIRMILES",
  /** FREE_DELIVERY */
  FreeDelivery = "FREE_DELIVERY",
  /** SCRATCH_SUMMER */
  ScratchSummer = "SCRATCH_SUMMER",
}

/** Promotion Search Input */
export type PromotionSearchInput = {
  /** Search by promotion id */
  id?: Maybe<Scalars["String"]>;
  /**
   * Filter segments based on promotion type.
   * E.g. INCENTIVE returns all free delivery
   * promotion segments.
   */
  promotionType?: Maybe<Array<Maybe<BonusPromotionType>>>;
  /**
   * Filter promotions based on several segment types.
   * If segment types are passed, only promotions of that type are returned.
   * If negative segment types (i.e. NEGATE_PREMIUM and NEGATE_DIGITAL_SCRATCH_CARD) are passed, then all segments will be returned, except for the negative ones.
   * If both negative and normal ones are passed, the normal ones will be ignored in favor of the negative ones.
   */
  segmentType?: Maybe<Array<Maybe<BonusSegmentType>>>;
  /**
   * List of states to match.
   * If no value is provided, it will use the default states [ACTIVATED, ASSIGNED, NONE], which is what is needed in most scenarios.
   * If you need an additional state, please include the default ones as well (ex: [ACTIVATED, ASSIGNED, NONE, REEDEMABLE]).
   *
   * The possible states are:
   * - ACTIVATABLE: bonus box promotions that can be activated by the user
   * - ACTIVATED: bonus box promotions that have been activated
   * - ASSIGNED: personal promotions assigned to the user
   * - NONE
   * - REDEEMABLE: digital scratch card promotions that can be redeemed at checkout
   * - REDEEMED: digital scratch card promotions that have been redeemed (i.e. the user has already bought and received the product)
   *
   * If the state starts with NEGATE it means exclusion, e.g. NEGATE_ACTIVATABLE means the ACTIVATABLE ones will be filtered out.
   * A correct request should only specify either states to match or states to be excluded.
   * In case both negative and normal are submitted, negative has priority; the service will ignore the states to be matched
   */
  states?: Maybe<Array<BonusSegmentState>>;
  /** Hide promotion variants. Defaults to false */
  hideVariants?: Maybe<Scalars["Boolean"]>;
  /** Start of promotion period. Filter on overlapping promotion validity period (format: yyyy-mm-dd) */
  periodStart?: Maybe<Scalars["String"]>;
  /** End of promotion period (inclusive). Filter on overlapping promotion validity period (format: yyyy-mm-dd) */
  periodEnd?: Maybe<Scalars["String"]>;
  /** weekNumber */
  weekNumber?: Maybe<Scalars["Int"]>;
  /** Order id, if user has an active orders */
  orderId?: Maybe<Scalars["Int"]>;
  /** Suppliers pay an extra fee to highlight specific free deliveries */
  supplierBoosted?: Maybe<Scalars["Boolean"]>;
  /** View date, only used for timetraveling in preview mode */
  viewDate?: Maybe<Scalars["String"]>;
  /** View date, only used for timetraveling in preview mode */
  spotlight?: Maybe<Scalars["Boolean"]>;
  /**
   * If set to 'true' promotions that require a Gall or bonus card will still be returned even if the member does not have those loyalty cards.
   * If set to 'false' promotions that require such cards will only be returned if the member has those cards.
   * Defaults to 'false' if not provided
   */
  forcePromotionVisibility?: Maybe<Scalars["Boolean"]>;
  /** If set to 'true' when shoppingIntent is Online it will filter out store only products */
  filterUnavailableProducts?: Maybe<Scalars["Boolean"]>;
  /** Retrieve promotions excluded from the bonus page (default false) */
  showAllPromotionSegments?: Maybe<Scalars["Boolean"]>;
};

/** The input values to submit the new payment method for a B2B user, either by invoice or payment slip */
export type PaymentMethodUpdateInput = {
  /** Department to which the invoice should be redirected */
  department: Scalars["String"];
  /** E-mailadres to where invoices should be send */
  emailInvoice: Scalars["String"];
  /** E-mailadres to where a reminder should be send to in case of late payment */
  emailReminder: Scalars["String"];
  /** Website of company requesting payment by invoice */
  website: Scalars["String"];
  /** KvkId of company's head of office */
  holding: Scalars["String"];
};

/** Items that are deducted or applied on the totalPrice of OrderCalculationReceipt */
export type AdditionalReceiptItem = {
  __typename?: "AdditionalReceiptItem";
  /** Additional item that can be a cost or a discount */
  title: Scalars["String"];
  /** Type of the receipt item */
  type: AdditionalReceiptItemType;
  /** price of the item */
  price: Money;
  /** amount of times applied */
  amount: Scalars["Int"];
  /** Nested additional items. Max Depth is usually 3 */
  items: Array<AdditionalReceiptItem>;
};

/** Type of the AdditionalReceiptItem */
export enum AdditionalReceiptItemType {
  /** Regular item */
  Item = "ITEM",
  /** Purchase stamps item */
  PurchaseStamps = "PURCHASE_STAMPS",
  /** Weight item */
  Weight = "WEIGHT",
  /** Deposit item */
  Deposit = "DEPOSIT",
  /** Deposit groceries item */
  DepositGroceries = "DEPOSIT_GROCERIES",
  /** Deposit creates item */
  DepositCrates = "DEPOSIT_CRATES",
  /** Deposit bags item */
  DepositBags = "DEPOSIT_BAGS",
  /** Service memo item */
  ServiceMemo = "SERVICE_MEMO",
  /** Nationale postcode loterij item */
  NplVega = "NPL_VEGA",
}

/** Bancontact Payment Details */
export type BancontactMobilePrepayments = {
  __typename?: "BancontactMobilePrepayments";
  /** Transaction date */
  date: Scalars["String"];
  /** Transaction short date */
  shortDate: Scalars["String"];
  /** Transaction amount */
  amount: Money;
};

/** Calculated Purchase Stamp with the new total Price */
export type CalculatedPurchaseStamp = {
  __typename?: "CalculatedPurchaseStamp";
  /** Quantity of booklets if applied to order */
  bookletQuantity: Scalars["Int"];
  /** New totalPrice for Order */
  totalPrice: Money;
  /** Given discount of the purchase stamps */
  discount: Money;
};

/** Calculated discount for purchase stamps */
export type CalculatedPurchaseStampPaymentAmount = {
  __typename?: "CalculatedPurchaseStampPaymentAmount";
  /** Quantity of booklets if applied to order */
  bookletQuantity: Scalars["Int"];
  /** Given discount of the purchase stamps */
  discount: Money;
  /** Payment amount for the purchase stamps */
  paymentAmount: Money;
};

/** Limits you can hit on the checkout */
export enum CheckoutAtpLimitType {
  /** Maximum stock available */
  StockLimit = "STOCK_LIMIT",
  /** Limit on ordering products. for example: Beer and Nutrilon */
  OrderLimit = "ORDER_LIMIT",
}

/** DCT Payment Options Information */
export type CheckoutConfirmDctInput = {
  /** CardId Of the DCT Registration */
  cardId: Scalars["String"];
  /** Browser Information (Required when CHANNEL = WEB) Default = "{}" */
  payload: Scalars["String"];
  /** The version of the adyen sdk, (Mobile Only) */
  adyenThreeDsSdkVersion?: Maybe<Scalars["String"]>;
  /**
   * The Origin of the page of the user (Web only)
   * This is important as the user challenge callback only works if the origin that is used to create the payment matches the user origin!
   */
  origin?: Maybe<Scalars["String"]>;
};

/** NPL Giftcard */
export type CheckoutConfirmGiftCardInfo = {
  /** NPL cardId */
  cardId: Scalars["String"];
};

/** input for creating new iDEAL Payment */
export type CheckoutConfirmIdealInput = {
  /** The issuer of the bank */
  issuerId: Scalars["String"];
  /** redirect URI that the coustomer will be redirected to */
  redirectUri: Scalars["String"];
};

/** Required body payload for submitting the order unified with WEB, iOS and Android */
export type CheckoutConfirmOrderPayload = {
  /** Submission channel */
  channel: PaymentChannel;
  /** Time order was last modified */
  orderLastModified: Scalars["String"];
  /** DCT (Debit Card Tokenization) */
  dct?: Maybe<CheckoutConfirmDctInput>;
  /** NPL GiftCard */
  giftCard?: Maybe<CheckoutConfirmGiftCardInfo>;
  /** iDeal issuerId */
  idealIssuerId?: Maybe<Scalars["String"]>;
  /** Amount of Purchase stamps booklets applied */
  purchaseStampsBookletsApplied?: Maybe<Scalars["Int"]>;
  /** Send Bancontact Payment Method (or other) */
  paymentMethod?: Maybe<PaymentMethod>;
};

/** Checkout Error Data */
export type CheckoutErrorData = {
  __typename?: "CheckoutErrorData";
  /** type of the error */
  errorType?: Maybe<CheckoutErrors>;
  /** CategoryName */
  categoryName?: Maybe<Scalars["String"]>;
  /** Orderlines */
  orderLines?: Maybe<Array<CheckoutOrderLine>>;
  /** total Amount */
  totalAmount?: Maybe<Money>;
  /** Minimal amount */
  minimalAmount?: Maybe<Money>;
  /** Minimum Order Value */
  mov?: Maybe<Money>;
};

/** Checkout error Response */
export type CheckoutErrorResponse = {
  __typename?: "CheckoutErrorResponse";
  /** Error code */
  code: CheckoutErrors;
  /** Message */
  message: Scalars["String"];
  /** Error details */
  data?: Maybe<Array<CheckoutErrorData>>;
};

/** CheckoutErrors Enum, DCT errors and Possible validation errors combined. */
export enum CheckoutErrors {
  /** OrderNotFound */
  OrderNotFound = "ORDER_NOT_FOUND",
  /** Delivery not found */
  DeliveryNotFound = "DELIVERY_NOT_FOUND",
  /** Illegal Order Type */
  IllegalOrderType = "ILLEGAL_ORDER_TYPE",
  /** Order minimum amount value, The order price is below the minimum amount value */
  OrderMinimumAmountType = "ORDER_MINIMUM_AMOUNT_TYPE",
  /** Order Maximum amount type */
  OrderMaximumAmountType = "ORDER_MAXIMUM_AMOUNT_TYPE",
  /** Member not allowed to read order. */
  MemberNotAuthorized = "MEMBER_NOT_AUTHORIZED",
  /** Member account Blocked */
  MemberBlocked = "MEMBER_BLOCKED",
  /** Member Error Type */
  MemberError = "MEMBER_ERROR",
  /** Missing Membership */
  MissingMembership = "MISSING_MEMBERSHIP",
  /** Order externally modified */
  OrderExternallyModified = "ORDER_EXTERNALLY_MODIFIED",
  /** Customer not found */
  CustomerNotFound = "CUSTOMER_NOT_FOUND",
  /** Order ATP Check Failed */
  OrderAtpFailed = "ORDER_ATP_FAILED",
  /** Restricted Item Check Failed */
  RestrictedItemCheckFailed = "RESTRICTED_ITEM_CHECK_FAILED",
  /** Restricted item check amount failed */
  RestrictedItemCheckAmountFailed = "RESTRICTED_ITEM_CHECK_AMOUNT_FAILED",
  /** Illegal order state */
  IllegalOrderState = "ILLEGAL_ORDER_STATE",
  /** Unknown error */
  Unknown = "UNKNOWN",
  /** DCT Card is on low funds */
  LowFunds = "LOW_FUNDS",
  /** DCT Card Limit is reached */
  CardLimitReached = "CARD_LIMIT_REACHED",
  /** DCT Card is not active */
  CardNotActive = "CARD_NOT_ACTIVE",
  /** DCT Card Reservation Adjustment failed */
  ReservationAdjustmentFailed = "RESERVATION_ADJUSTMENT_FAILED",
  /** Member Not Authenticated */
  MemberNotAuthenticated = "MEMBER_NOT_AUTHENTICATED",
  /** Card is Restricted */
  RestrictedCard = "RESTRICTED_CARD",
}

/** Order */
export type CheckoutFallbackResponse = MutationResult & {
  __typename?: "CheckoutFallbackResponse";
  /** Related Order */
  order?: Maybe<Order>;
  /** Related error message */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Mutation Result status */
  status: MutationResultStatus;
};

/** Checkout Validation Order Line */
export type CheckoutOrderLine = {
  __typename?: "CheckoutOrderLine";
  /** Product */
  product: Product;
  /** Amount of products on order */
  count: Scalars["Int"];
  /** Maximum available */
  available: Scalars["Int"];
  /** Fix type for this one */
  limitType?: Maybe<CheckoutAtpLimitType>;
};

/** Order submission response data */
export type CheckoutOrderSubmissionResponse = {
  __typename?: "CheckoutOrderSubmissionResponse";
  /** The order */
  order?: Maybe<Order>;
  /** Payments Information */
  payments: Array<CheckoutOrderSubmissionPayment>;
};

/** Result type for submitting order */
export type CheckoutOrderSubmitResult = MutationResult & {
  __typename?: "CheckoutOrderSubmitResult";
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Mutation Status */
  status: MutationResultStatus;
  /** Order submission response data */
  data?: Maybe<CheckoutOrderSubmissionResponse>;
  /** Errors during submission (Validation Errors) */
  errors?: Maybe<Array<CheckoutErrorResponse>>;
};

/** Checkout Order Validation Response */
export type CheckoutOrderValidation = {
  __typename?: "CheckoutOrderValidation";
  /**
   * Order is Valid
   * @deprecated @sunset_date(2025-05-31) Moving to a singular field: errors > 0 = true
   * . none.
   */
  valid: Scalars["Boolean"];
  /** Validation errors */
  errors: Array<Maybe<CheckoutErrorResponse>>;
};

/** Prepayments with the leftover amount of OrderCalculationReceipt */
export type CheckoutPrepayments = {
  __typename?: "CheckoutPrepayments";
  /**
   * Leftover amount
   * @deprecated @sunset_date(2024-09-24) Use paymentAmount instead
   * . paymentAmount.
   */
  leftoverAmount: Money;
  /** Payment details for an ideal payment */
  idealPayments: Array<IdealPayment>;
  /** Payment details for Bancontact mobile */
  bancontactMobilePayments: Array<BancontactMobilePrepayments>;
};

/** Checkout Wallet Items that are applied */
export type CheckoutWallet = {
  __typename?: "CheckoutWallet";
  /** Settlements */
  settlements?: Maybe<CheckoutWalletSettlement>;
};

/** Calculated Wallet Options */
export type CheckoutWalletOptions = {
  __typename?: "CheckoutWalletOptions";
  /**
   * Purchase stamp options (max booklets, and the new total when applied)
   * @deprecated @sunset_date(2025-01-01) Use purchaseStampsPaymentAmount instead
   * . purchaseStampsPaymentAmount.
   */
  purchaseStamps: Array<CalculatedPurchaseStamp>;
  /** Purchase stamp options (max booklets, and the new total when applied) */
  purchaseStampsPaymentAmount: Array<CalculatedPurchaseStampPaymentAmount>;
};

/** Previous Settlements that are applied to the order */
export type CheckoutWalletSettlement = {
  __typename?: "CheckoutWalletSettlement";
  /** Amount charged */
  amount: Money;
};

/** CostOverview Of an Order */
export type CostOverview = {
  __typename?: "CostOverview";
  /** InvoiceId */
  invoiceId?: Maybe<Scalars["String"]>;
  /**
   * Methods used to pay the order with
   * @deprecated @sunset_date(2024-07-25) Use PaymentMethod instead
   * . .
   */
  paymentMethods?: Maybe<Array<PaymentMethod>>;
  /** Primary Payment Method used for delivery */
  primaryPaymentMethod: PaymentMethod;
  /**
   * The price of the Groceries only. For after delivery the net Price could be different compared to
   * the net price before/during delivery because of weight items and discounts
   */
  groceryNetPrice: Money;
  /**
   * Before delivery: Total price of the receipt
   * After delivery: subtotalGroceries + subtotal of the additional items
   */
  aggregatedTotalPriceBeforeDelivery: Money;
  /** The amount that was deducted after the payment capture */
  aggregatedTotalPriceAfterDelivery?: Maybe<Money>;
  /** SubtotalPrice based on the delivery state */
  aggregatedSubtotalPrice: Money;
  /** The calculated total price of all settlements */
  aggregatedTotalPriceSettlement?: Maybe<Money>;
  /** Amount of groceries within the order */
  groceriesQuantity: Scalars["Int"];
  /** Aggregated total bonus discount, contains negative values */
  aggregatedTotalBonusDiscount?: Maybe<Money>;
  /** Aggregated total amount of additional items */
  aggregatedTotalAdditionalItems: Money;
  /** additionalItems (Max recursive depth: 1) */
  additionalItems: Array<AdditionalReceiptItem>;
  /**
   * settlement Items after delivery
   * @deprecated @sunset_date(2023-09-21) not in prod yet, ios,android, ah-cost-overview
   * . .
   */
  settlementItems: Array<SettlementAfterDelivery>;
  /** settlement items after delivery */
  settlements?: Maybe<SettlementItems>;
  /** Payments from the order */
  payments?: Maybe<CostOverviewPayments>;
  /** Refund amount */
  refundAmount?: Maybe<Money>;
};

/** Payment Item */
export type CostOverviewPaymentItem = {
  __typename?: "CostOverviewPaymentItem";
  /** Title of the payment method */
  title: Scalars["String"];
  /** Payment Method used */
  method: PaymentMethod;
  /** Transaction amount */
  amount: Money;
};

/** CostOverview Payments */
export type CostOverviewPayments = {
  __typename?: "CostOverviewPayments";
  /** Payments that are still open */
  alreadyPaid: Array<CostOverviewPaymentItem>;
  /** Remaining amount that needs to be paid (at the door) */
  toBePaid?: Maybe<CostOverviewPaymentItem>;
  /** Total amount that has been paid */
  aggregatedAlreadyPaidTotal: Money;
  /**
   * Refund amount
   * @deprecated @sunset_date(2024-03-21) Use refundAmount in CostOverview instead
   * . CostOverview.refundAmount.
   */
  refundAmount?: Maybe<Money>;
};

/** Delivery belonging to order */
export type Delivery = {
  __typename?: "Delivery";
  /** The weekday of the delivery. */
  weekday: Scalars["String"];
  /** Address of delivery */
  address?: Maybe<DeliveryAddress>;
  /** Address formatted as single line */
  addressSingleLine?: Maybe<Scalars["String"]>;
  /** Date delivered */
  date: Scalars["String"];
  /** Date delivered formatted for display */
  dateDisplay: Scalars["String"];
  /** Short delivery display date */
  dateDisplayShort?: Maybe<Scalars["String"]>;
  /** Additional information for the deliverer */
  delivererMessage?: Maybe<Scalars["String"]>;
  /** Id of the delivery location */
  deliveryLocationId: Scalars["Int"];
  /** End time of delivery */
  endTime: Scalars["String"];
  /** Id of delivery (this is equal to the orderId) */
  id: Scalars["Int"];
  /** The method of the delivery */
  method: DeliveryMethod;
  /** Offset of delivery */
  offset?: Maybe<Scalars["String"]>;
  /** Pickup information */
  pickup?: Maybe<DeliveryPickup>;
  /** Id of the pickup location */
  pickupLocationId?: Maybe<Scalars["Int"]>;
  /** Shift code */
  shiftCode: Scalars["String"];
  /** Slot for delivery */
  slot?: Maybe<Scalars["String"]>;
  /** State time of delivery */
  startTime: Scalars["String"];
  /** Status of delivery */
  status: DeliveryStatus;
  /** Track and trace information for a delivery */
  trackTrace?: Maybe<DeliveryTrackTraceInformation>;
};

/** A fulfillment is an order with additional information. */
export type Fulfillment = {
  __typename?: "Fulfillment";
  /** CostOverview of the complete order */
  costOverview?: Maybe<CostOverview>;
  /** Order id */
  orderId: Scalars["Int"];
  /** Total price */
  totalPrice?: Maybe<FulfillmentPrice>;
  /** Transaction completed boolean */
  transactionCompleted?: Maybe<Scalars["Boolean"]>;
  /** Delivery */
  delivery?: Maybe<FulfillmentDelivery>;
  /** Cancaellable boolean */
  cancellable: Scalars["Boolean"];
  /** Cancallable by the customer service boolean */
  cancellableByCustomerService: Scalars["Boolean"];
  /** Order reaponable */
  reopenable: Scalars["Boolean"];
  /** Order modifable */
  modifiable: Scalars["Boolean"];
  /** OrderMethod of fullfilment */
  orderMethod: Scalars["Int"];
  /** Whether the order is an OCI order */
  isOciOrder: Scalars["Boolean"];
  /** Whether the order is a subscription/VBM order */
  isSubscriptionOrder?: Maybe<Scalars["Boolean"]>;
  /** Reason why an order was cancelled. */
  cancellationReason?: Maybe<FulfillmentCancellationReason>;
  /** Indicates if an OCI order is approved or not */
  approved?: Maybe<Scalars["Boolean"]>;
  /** Indicates if the order is after the cut off time */
  isAfterCutOff?: Maybe<Scalars["Boolean"]>;
};

/** iDeal payment details */
export type IdealPayment = {
  __typename?: "IdealPayment";
  /** Transaction date */
  date: Scalars["String"];
  /** Transaction short date */
  shortDate: Scalars["String"];
  /** Transaction amount */
  amount: Money;
};

/** Order */
export type Order = {
  __typename?: "Order";
  /** Get the calculated receipt of a potential order */
  checkoutCalculation?: Maybe<OrderCalculationReceipt>;
  /** Validate the order to check for errors */
  submitValidation: CheckoutOrderValidation;
  /** Delivery for order */
  delivery?: Maybe<Delivery>;
  /** Id of order */
  id: Scalars["Int"];
  /** State of order */
  state: OrderState;
  /** Pricing of order */
  price?: Maybe<OrderPrice>;
  /** Whether transaction is completed */
  isTransactionComplete?: Maybe<Scalars["Boolean"]>;
  /** Whether the order is expired */
  isExpired: Scalars["Boolean"];
  /** Display time of when order ends */
  entryEndDisplayTime: Scalars["String"];
  /** Number of times order is reopened */
  reopened: Scalars["Int"];
  /** Method of order */
  orderMethod: Scalars["Int"];
  /** The Receipt for the order */
  receipt?: Maybe<OrderReceipt>;
  /** The orderLines (products & amount) */
  orderLines: Array<OrderLineV2>;
  /** Get minimum order value */
  minimumValue: Money;
  /** DateTime that the order closes and can no longer be modified */
  closingDateTime: Scalars["String"];
  /** DateTime that the order closes and can no longer be modified */
  closingDateTimeStamp: Scalars["DateTime"];
  /** Timestamp when the user has changed the order */
  lastUserChangeTime?: Maybe<Scalars["String"]>;
  /** shopping type of the order */
  shoppingType: OrderShoppingType;
  /** order is submitted */
  submitted: Scalars["Boolean"];
  /** Earliest closing time of changing products */
  productsClosingTime?: Maybe<Scalars["String"]>;
  /** Message for recipient */
  messageForRecipient?: Maybe<Scalars["String"]>;
  /** order transactions */
  transactions?: Maybe<PaymentsOrderTransactions>;
  /** order transactions V2 */
  transactionsV2?: Maybe<OrderTransactions>;
};

/** Order */
export type OrderCheckoutCalculationArgs = {
  nplCardId?: Maybe<Scalars["String"]>;
  maxPurchaseStampsBookletQuantity?: Maybe<Scalars["Int"]>;
  appliedPurchaseStampsBookletQuantity?: Maybe<Scalars["Int"]>;
  paymentMethod?: Maybe<PaymentMethod>;
};

/** Calculation Receipt of an Order */
export type OrderCalculationReceipt = {
  __typename?: "OrderCalculationReceipt";
  /** Total Price after settlements, service kosts, klapkratten, purchase stamps etc etc. */
  totalPrice: Money;
  /** The total amount to be paid after all discounts and additional items have been applied */
  paymentAmount: Money;
  /** Amount of groceries */
  groceriesQuantity: Scalars["Int"];
  /** Additional items to the receipt */
  additionalItems: Array<AdditionalReceiptItem>;
  /** The total amount of additional items */
  totalAdditionalItems?: Maybe<Money>;
  /** Additional information about positive service memo */
  additionalInfo?: Maybe<Array<Scalars["String"]>>;
  /** Wallet Options to apply to the order */
  walletOptions?: Maybe<CheckoutWalletOptions>;
  /** List of prepayments with the leftover amount */
  prepayments?: Maybe<CheckoutPrepayments>;
  /** Wallet Subject */
  wallet?: Maybe<CheckoutWallet>;
};

/** CostOverview Settlement item */
export type SettlementAfterDelivery = {
  __typename?: "SettlementAfterDelivery";
  /** title */
  title: Scalars["String"];
  /**
   * Type of the settlement
   * @deprecated @sunset_date(2023-09-21) Not in prod yet, ios,android, ah-cost-overview
   * . .
   */
  type?: Maybe<SettlementAfterDeliveryType>;
  /** price of settlement after delivery */
  price: Money;
  /** Amount of times applied */
  amount: Scalars["Int"];
};

/** CostOverviewSettlement Item type */
export enum SettlementAfterDeliveryType {
  /** Deposits */
  Deposit = "DEPOSIT",
  /** Restitution (Money back) */
  Restitution = "RESTITUTION",
  /** Service memo */
  ServiceMemo = "SERVICE_MEMO",
  /** Item (DEFAULT) */
  Item = "ITEM",
}

/** Divided settlement items by type */
export type SettlementItems = {
  __typename?: "SettlementItems";
  /** Restitutions for the customer */
  restitutions: Array<SettlementAfterDelivery>;
  /** Deposits (Statiegeld) */
  deposits: Array<SettlementAfterDelivery>;
  /** Service Memo's (Frozen products) */
  serviceMemos: Array<SettlementAfterDelivery>;
  /** Else */
  otherSettlements: Array<SettlementAfterDelivery>;
};

/** To retrieve the captcha configuration */
export type CaptchaConfiguration = {
  __typename?: "CaptchaConfiguration";
  /** Check if user needs to make a captcha */
  showCaptcha: Scalars["Boolean"];
  /** if user needs to make a captcha provide a captchaKey */
  captchaKey?: Maybe<Scalars["String"]>;
};

/** The code and description for available MFA Settings */
export type CiamAvailableMfaSetting = {
  __typename?: "CiamAvailableMfaSetting";
  /** The code (corresponds to Member.mfaSetting) */
  code: Scalars["String"];
  /** Description for this MFA setting */
  description: Scalars["String"];
};

/** Result of performing mutation */
export type CiamDeleteAccountMutationResult = MutationResult & {
  __typename?: "CiamDeleteAccountMutationResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Error code if mutation failed */
  errorCode?: Maybe<CiamDeleteAccountMutationResultErrorCode>;
};

/** Error codes for mutation.ciamDeleteAccount */
export enum CiamDeleteAccountMutationResultErrorCode {
  /** The provided current password is incorrect. */
  OldPasswordIncorrect = "OLD_PASSWORD_INCORRECT",
}

/**
 * Passkey details.
 * A passkey can be used by a member to log in.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API
 */
export type CiamPasskey = {
  __typename?: "CiamPasskey";
  /** Passkey ID */
  id: Scalars["String"];
  /** Passkey name */
  name: Scalars["String"];
  /** When this passkey was created */
  createdAt: Scalars["DateTime"];
  /** When this passkey was last used to log in. */
  lastUsedAt?: Maybe<Scalars["DateTime"]>;
};

/** Mutation result for passkey register finish */
export type CiamPasskeyRegisterFinishMutationhResult = MutationResult & {
  __typename?: "CiamPasskeyRegisterFinishMutationhResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant for passkey registration response */
  result?: Maybe<Scalars["String"]>;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Updated passkey settings. */
  passkeySettings: CiamPasskeySettings;
};

/**
 * Get a registration ID and `publicKeyCredentialCreationOptions`,
 * which are needed to create a new passkey client-side.
 */
export type CiamPasskeyRegisterStartMutationResult = MutationResult & {
  __typename?: "CiamPasskeyRegisterStartMutationResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Registration ID. Needed when finishing key registration */
  registrationId: Scalars["String"];
  /**
   * Creation options needed for creating a new passkey through the WebAuthn browser API.
   * Is a stringified JSON structure.
   * @link https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/create#publickey_object_structure
   */
  publicKeyCredentialCreationOptions: Scalars["String"];
};

/** Passkey settings */
export type CiamPasskeySettings = {
  __typename?: "CiamPasskeySettings";
  /** If true, member is opted-in for passkey feature and is allowed to create new passkeys. */
  passkeyAllowed: Scalars["Boolean"];
  /** Currently registered passkeys. */
  passKeys: Array<CiamPasskey>;
};

/** Result type for mutations that modify passkey settings (register, update, delete). */
export type CiamPasskeyUpdateMutationResult = MutationResult & {
  __typename?: "CiamPasskeyUpdateMutationResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Updated passkey settings. */
  passkeySettings: CiamPasskeySettings;
};

/** Result of performing mutation */
export type CiamPasswordChangeMutationResult = MutationResult & {
  __typename?: "CiamPasswordChangeMutationResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Error code if mutation failed */
  errorCode?: Maybe<CiamPasswordChangeMutationResultErrorCode>;
};

/** Error codes for mutation.ciamPasswordChange */
export enum CiamPasswordChangeMutationResultErrorCode {
  /** Password not allowed (too short, leaked, etc.). */
  NewPasswordNotAllowed = "NEW_PASSWORD_NOT_ALLOWED",
  /** The provided current password is incorrect. */
  OldPasswordIncorrect = "OLD_PASSWORD_INCORRECT",
}

/** Returned result after ciam-phone-number-send-code mutation */
export type CiamPhoneNumberSendCodeMutationResult = MutationResult & {
  __typename?: "CiamPhoneNumberSendCodeMutationResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Session id data */
  sessionId?: Maybe<Scalars["String"]>;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Possible error codes for `Mutation.ciamPhoneNumberVerifyCode` */
export enum CiamPhoneNumberVerifyCodeErrorCode {
  /** Wrong code was used */
  WrongCode = "WRONG_CODE",
  /** Not your own data */
  WrongMember = "WRONG_MEMBER",
  /** Member ID does not exist */
  MemberNotFound = "MEMBER_NOT_FOUND",
  /** Session ID not found */
  VerificationNotFound = "VERIFICATION_NOT_FOUND",
  /** Wrong code, session deleted, need to start over */
  WrongCodeLastAttempt = "WRONG_CODE_LAST_ATTEMPT",
}

/** Returned result after ciam-phone-number-verify-code mutation */
export type CiamPhoneNumberVerifyCodeMutationResult = MutationResult & {
  __typename?: "CiamPhoneNumberVerifyCodeMutationResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Updated phone-number */
  phoneNumber?: Maybe<Scalars["String"]>;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Error code if request failed from a known condition */
  errorCode?: Maybe<CiamPhoneNumberVerifyCodeErrorCode>;
};

/** The mutation result from updating the MFA setting for the current member */
export type CiamUpdateMfaSettingMutationResult = MutationResult & {
  __typename?: "CiamUpdateMfaSettingMutationResult";
  /** Result status */
  status: MutationResultStatus;
  /** Possible error message if status Failed */
  errorMessage?: Maybe<Scalars["String"]>;
  /** The (updated) member */
  member: Member;
};

/** Result of performing mutation */
export type CiamUserNameChangeMutationResult = MutationResult & {
  __typename?: "CiamUserNameChangeMutationResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Error code if mutation failed */
  errorCode?: Maybe<CiamUserNameChangeMutationResultErrorCode>;
};

/** Error codes for mutation.ciamUsernameChange */
export enum CiamUserNameChangeMutationResultErrorCode {
  /** Username not allowed (not an email address, already in use?). */
  NewUsernameNotAllowed = "NEW_USERNAME_NOT_ALLOWED",
  /** The provided current password is incorrect. */
  OldPasswordIncorrect = "OLD_PASSWORD_INCORRECT",
}

/** The status of the code */
export enum CodeStatus {
  /** Password reset code is valid */
  Valid = "VALID",
  /** Password reset code is invalid */
  Invalid = "INVALID",
}

/** Contains the rules and result against user password */
export type PasswordRulesValidated = {
  __typename?: "PasswordRulesValidated";
  /** Show if provided password is valid */
  isValid: Scalars["Boolean"];
  /** Rules on which the password was tested */
  rules: Array<RuleValidated>;
};

/** Contains the rule and result against user password */
export type RuleValidated = {
  __typename?: "RuleValidated";
  /** Code of the rule which was tested */
  code: Scalars["String"];
  /** Result of the tested rule */
  isValid: Scalars["Boolean"];
};

/** The returned value after GetMemberCodeResponse is normalized */
export type ValidationResponse = {
  __typename?: "ValidationResponse";
  /** The returned status if the checked code is valid */
  status?: Maybe<CodeStatus>;
};

/** The given input to check if this member-card is not already connected to another member */
export type AddCardCheckInput = {
  /** The type of the member-card that needs to be checked */
  cardType: Scalars["String"];
  /** The number of the member-card that needs to be checked */
  code: Scalars["String"];
};

/** The returned value if the checked member-card is valid */
export type AddMemberCard = {
  __typename?: "AddMemberCard";
  /** The value if the member-card is possible to add to the user's account */
  addingPossible: Scalars["Boolean"];
  /** The code returned why the card is not possible to add */
  errorCode?: Maybe<Scalars["String"]>;
};

/** All available domains where the users email will be checked on */
export enum DomainsEnum {
  Ah = "AH",
  Etos = "ETOS",
  Gall = "GALL",
}

/** Contains newsletter subscription status */
export type GetNewsletterStatus = {
  __typename?: "GetNewsletterStatus";
  /** The newsletter subscription status */
  contactSubscription: Scalars["String"];
  /** Give an error object when user errors occur (using a link twice, not providing a code) */
  error?: Maybe<Scalars["String"]>;
};

/** Returns the type of the loyalty card */
export enum LoyaltyCard {
  Airmiles = "AIRMILES",
  Bonus = "BONUS",
  Etos = "ETOS",
  Gall = "GALL",
}

/** Member address */
export type MemberAddress = {
  __typename?: "MemberAddress";
  /** Street name of the member */
  street?: Maybe<Scalars["String"]>;
  /** House number */
  houseNumber?: Maybe<Scalars["Int"]>;
  /** The adjectend part of the house nummber. For example, the 'a' of 10a */
  houseNumberExtra?: Maybe<Scalars["String"]>;
  /** Zipcode */
  postalCode?: Maybe<Scalars["PostalCode"]>;
  /** City */
  city?: Maybe<Scalars["String"]>;
  /** CountryCode for example: 'NLD' (Iso3 format) */
  countryCode?: Maybe<Scalars["String"]>;
};

/** All membercards with the card code for example bonus: '1234' */
export type MemberCards = {
  __typename?: "MemberCards";
  /** Bonus card */
  bonus?: Maybe<Scalars["String"]>;
  /** Gall & Gall card */
  gall?: Maybe<Scalars["String"]>;
  /** Airmiles */
  airmiles?: Maybe<Scalars["String"]>;
  /** XL card */
  xl?: Maybe<Scalars["String"]>;
  /** Wijndomein card */
  wijndomein?: Maybe<Scalars["String"]>;
  /** Etos card */
  etos?: Maybe<Scalars["String"]>;
};

/** Returned error for invalid property */
export type MemberError = {
  __typename?: "MemberError";
  /** Invalid property described as a path, for example: 'cards.bonus', 'emailaddresss' */
  path: Scalars["String"];
  /** Error code, for example: 'forbidden' */
  error: Scalars["String"];
  /** Error key path */
  key: Scalars["String"];
};

/** Check if an email-address is found on multiple domains */
export type MemberHasAccount = {
  __typename?: "MemberHasAccount";
  /** Email-address used to check */
  email: Scalars["String"];
  /** Email-address has account on following domains */
  domains: Array<DomainsEnum>;
};

/** Status of member */
export enum MemberLoginState {
  /** Logged in customer */
  Loggedon = "LOGGEDON",
  /** Returning recognised customer, not logged in */
  Returning = "RETURNING",
  /** anonymous user */
  Unknown = "UNKNOWN",
}

/** Name of member containing first and lastname with prefix */
export type MemberName = {
  __typename?: "MemberName";
  /** First name */
  first?: Maybe<Scalars["String"]>;
  /** Last name */
  last?: Maybe<Scalars["String"]>;
};

/** Member personal details input */
export type MemberPersonalDetailsInput = {
  /** Gender of the member */
  gender?: Maybe<Gender>;
  /** Name of the member, firstname and surname included */
  name?: Maybe<NameInput>;
  /** Address of the member with countrycode */
  address?: Maybe<MemberAddressInput>;
  /** Date of birth of the member. Format: YYYY-DD-MM */
  dateOfBirth?: Maybe<Scalars["String"]>;
  /** Member phonenumber */
  phoneNumber?: Maybe<Scalars["String"]>;
};

/** Return type for memberPhoneNumberIsValid query */
export type MemberPhoneNumberIsValid = {
  __typename?: "MemberPhoneNumberIsValid";
  /** Boolean indicating if the phone number is valid */
  isValid?: Maybe<Scalars["Boolean"]>;
  /** Boolean indicating if the phone number is a mobile number */
  isMobile?: Maybe<Scalars["Boolean"]>;
};

/** Returned result after member update */
export type MemberUpdateMutationResult = MutationResult & {
  __typename?: "MemberUpdateMutationResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Member after performing the mutation */
  result?: Maybe<Member>;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Validation errors, when status is FAILED */
  validationErrors?: Maybe<Array<MemberError>>;
};

/** A block unsubscribe reason */
export enum UnsubscribeBlockerReason {
  /** There is still a active delivery bundle */
  ActiveDeliveryBundle = "ACTIVE_DELIVERY_BUNDLE",
  /** There is still a active B2B delivery bundle */
  ActiveB2BDeliveryBundle = "ACTIVE_B2B_DELIVERY_BUNDLE",
  /** There is still a positive balance of purchase stamps */
  PositivePurchaseStampBalance = "POSITIVE_PURCHASE_STAMP_BALANCE",
  /** There is still a active premium subscription */
  ActivePremiumSubscription = "ACTIVE_PREMIUM_SUBSCRIPTION",
  /** There is still a active or cancelled premium subscription */
  ActiveOrCancelledPremiumSubscription = "ACTIVE_OR_CANCELLED_PREMIUM_SUBSCRIPTION",
  /** There is still an open settlement for the customer */
  OpenSettlement = "OPEN_SETTLEMENT",
}

/** Given input to fetch blocker reasons */
export type UnsubscribeBlockerReasonInput = {
  /** Given membership name. The relevant membership name for this query is: LOYALTY. */
  membership?: Maybe<Scalars["String"]>;
  /** Given card type. The relevant card types for this query are: bonus, airmiles and gall. */
  card?: Maybe<Scalars["String"]>;
};

/** Address input type for searching addresses */
export type AddressSearchInput = {
  /** Zipcode */
  postalCode: Scalars["String"];
  /** Street name of the member */
  street?: Maybe<Scalars["String"]>;
  /** House number without adjacent part */
  houseNumber?: Maybe<Scalars["Int"]>;
  /** The adjactent part of the house nummber. For example, the 'a' of 10a */
  houseNumberExtra?: Maybe<Scalars["String"]>;
  /** City */
  city?: Maybe<Scalars["String"]>;
  /** CountryCode for example: 'NLD' */
  countryCode: Scalars["String"];
};

/** Result of performing mutation */
export type BasicMutationResult = MutationResult & {
  __typename?: "BasicMutationResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** cache control */
export enum CacheControlScope {
  /** Personal data, based on jwt token and locale (see server.ts) */
  Private = "PRIVATE",
  /** Public data, non personal */
  Public = "PUBLIC",
}

/**
 * Input parameters usde to verify the query/mutation is not made
 * by a robot
 */
export type CaptchaVerifyInput = {
  /** Code returned by captcha provider */
  verificationCode: Scalars["String"];
  /** Amount of seconds passed since the captcha puzzle was shown */
  challengeSeconds: Scalars["Int"];
};

/** Gender options available within Ahold */
export enum Gender {
  /** Female */
  Female = "FEMALE",
  /** Male */
  Male = "MALE",
  /** IRRELEVANT */
  Irrelevant = "IRRELEVANT",
}

/** Geolocation */
export type GeoLocation = {
  __typename?: "GeoLocation";
  /** latitude */
  latitude: Scalars["Float"];
  /** longitude */
  longitude: Scalars["Float"];
};

/** Geolocation as input */
export type GeoLocationInput = {
  /** latitude */
  latitude: Scalars["Float"];
  /** longitude */
  longitude: Scalars["Float"];
};

/** Image Set */
export type ImageSet = {
  __typename?: "ImageSet";
  /** Url of the image */
  url: Scalars["String"];
  /** Width of the image in pixels */
  width?: Maybe<Scalars["Int"]>;
  /** Height of the image in pixels */
  height?: Maybe<Scalars["Int"]>;
};

/** Member address input */
export type MemberAddressInput = {
  /** Zipcode */
  postalCode: Scalars["String"];
  /** Street name of the member */
  street: Scalars["String"];
  /** House number without adjacent part */
  houseNumber: Scalars["Int"];
  /** The adjactent part of the house nummber. For example, the 'a' of 10a */
  houseNumberExtra?: Maybe<Scalars["String"]>;
  /** City */
  city: Scalars["String"];
  /** CountryCode for example: 'NLD' */
  countryCode: Scalars["String"];
};

/** Represents a monetary value with currency. */
export type Money = {
  __typename?: "Money";
  /** The raw amount in cents/pence */
  amount: Scalars["Float"];
  /**
   * The formatted amount with the users currency.
   * @deprecated @sunset_date(2025-01-01) Use formattedV2 instead
   * . formattedV2.
   */
  formatted: Scalars["String"];
  /** The formatted amount in euros with 2 decimals separated with a ".": "€2.50 or €2.00" */
  formattedV2: Scalars["String"];
};

/** Result of performing mutation */
export type MutationResult = {
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

export enum MutationResultStatus {
  /** Mutation failed completely */
  Failed = "FAILED",
  /** Mutation succeeded partially */
  Partial = "PARTIAL",
  /** Mutation succeeded */
  Success = "SUCCESS",
}

/** Member name input */
export type NameInput = {
  /** Member's first name */
  first: Scalars["String"];
  /** Member's last name */
  last: Scalars["String"];
};

/**
 * Offset / Limit pagination input type
 *
 * @example Using a default value, so that pagination input is not required.
 * extend type Query {
 *    queryWithPagination(
 *      pagination: OffsetLimitPagination! = { offset: 0, limit: 50 }
 *    ): [SomeResultType!]!
 * }
 */
export type OffsetLimitPagination = {
  offset: Scalars["Int"];
  limit: Scalars["Int"];
};

/** We will show the total amount of items available, the offset its started in and the amount of items given back. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** total results for whole unpaginated collection */
  total: Scalars["Int"];
  /** do we have a next page? relay-page-info-spec */
  hasNextPage: Scalars["Boolean"];
};

/**
 * Page / Size pagination input type
 *
 * @example Using a default value, so that pagination input is not required.
 * extend type Query {
 *    queryWithPagination(
 *      pagination: PageSizePagination! = { page: 0, size: 50 }
 *    ): [SomeResultType!]!
 * }
 */
export type PageSizePagination = {
  page: Scalars["Int"];
  size: Scalars["Int"];
};

/**
 * Input for 'products' query.
 * Optionally has a date.
 */
export type ProductsInput = {
  /** Product identifier */
  id: Scalars["Int"];
  /**
   * Product date.
   * The date has an effect on fields like 'availability'.
   */
  date?: Maybe<Scalars["String"]>;
};

/** Input for an easy onboarding miles account */
export type MilesAccountFields = {
  /** Gender of Member */
  gender?: Maybe<Gender>;
  /** Member name */
  name: NameInput;
  /** Member date of birth */
  dateOfBirth: Scalars["String"];
  /** Member address */
  address: AddressSearchInput;
  /** Member phone number */
  phoneNumber?: Maybe<Scalars["String"]>;
  /** Does the member want to receive newsletters from Miles? */
  consents: Array<Scalars["String"]>;
};

/** Response after the request to create a miles account */
export type MilesAccountResponse = {
  __typename?: "MilesAccountResponse";
  /** Status */
  status: MilesStatus;
  /** More information about what happened */
  message?: Maybe<Scalars["String"]>;
};

/** The Air Miles balance of the member. Might also contain an error if the member needs to re-auth at airmiles.nl */
export type MilesBalance = {
  __typename?: "MilesBalance";
  /** The current Air Miles balance of the member. */
  balance?: Maybe<Scalars["Int"]>;
  /** Optionally returned error message for the member. */
  errorState?: Maybe<MilesErrorState>;
};

/**
 * A type representing a mutation on an Miles balance. All values inside the mutation
 * represent a number of Miles.
 */
export type MilesBalanceMutation = {
  __typename?: "MilesBalanceMutation";
  /** The Miles balance before the mutation. */
  old: Scalars["Int"];
  /** The Miles balance after the mutation. */
  new: Scalars["Int"];
  /** The actual number of miles of the mutation. */
  mutation: Scalars["Int"];
};

/** A type containing a charity to where Miles can be donated to. */
export type MilesCharity = {
  __typename?: "MilesCharity";
  /** The ID of the charity. */
  id: Scalars["String"];
  /**
   * Displayable content of the charity, containing the name of the charity, the logo,
   * a summary, etc.
   */
  content: MilesCharityContent;
  /** The period in which this charity is valid. */
  validityPeriod: MilesCharityPeriod;
};

/**
 * A type containing the displayable content of a charity where Miles can be donated
 * to. Contains information such as the charity's name, logo, summary, etc.
 */
export type MilesCharityContent = {
  __typename?: "MilesCharityContent";
  /** The name of the charity. */
  name: Scalars["String"];
  /**
   * An image representing the charity, often just the charity's logo.
   * @deprecated @sunset_date(2023-12-01) Use `imageUrl` instead
   * . .
   */
  image: Array<ImageSet>;
  /** A url pointing to an image representing the charity, often just the charity's logo. */
  imageUrl: Scalars["String"];
  /** A short summary of the charity. */
  summary: Scalars["String"];
  /** A longer description of the charity. */
  description: Scalars["String"];
  /**
   * A message of gratitude of the charity. Can be displayed e.g. when a member has
   * donated some Miles to this charity.
   */
  gratitude: Scalars["String"];
  /**
   * The donation options that can be selected for the charity. These are the possible
   * number of miles that can be donated, any other number of miles will result in an
   * error and a rejection of the donation.
   */
  options: Array<Scalars["Int"]>;
  /** A link to donate to the charity directly. */
  link: Scalars["String"];
};

/** A type containing a period in which the charity is valid (can be donated to). */
export type MilesCharityPeriod = {
  __typename?: "MilesCharityPeriod";
  /** The start date. */
  start: Scalars["DateTime"];
  /** The end date. */
  end: Scalars["DateTime"];
};

/** A type containing a summary of a successful Miles donation to a charity. */
export type MilesDonation = {
  __typename?: "MilesDonation";
  /** The request ID that was passed along by the frontend to ensure idempotency. */
  requestId: Scalars["UUID"];
  /** The ID of the charity that was donated to. */
  charityId: Scalars["String"];
  /** The timestamp at which the donation was processed. */
  timestamp: Scalars["DateTime"];
  /**
   * The mutation on the member's Miles balance after the donation was processed
   * successfully.
   */
  balanceMutation: MilesBalanceMutation;
};

/** A type containing the result of making a donation using Miles. */
export type MilesDonationMutationResult = MutationResult & {
  __typename?: "MilesDonationMutationResult";
  /** The status of the mutation. Indicates if the donation was successful or not. */
  status: MutationResultStatus;
  /**
   * A message stating why the donation was not successful. Will be null when the donation
   * was successful.
   */
  errorMessage?: Maybe<Scalars["String"]>;
  /**
   * A summary of the donation that was made. Will be null when the donation was not
   * successful.
   */
  donation?: Maybe<MilesDonation>;
};

/** The different kinds of error state that a customer can be in with regards to the AH Miles program. */
export enum MilesErrorState {
  /** The customer is not opted in for the AH Miles program. */
  NotOptedIn = "NOT_OPTED_IN",
  /**
   * The customer does not have a (valid) authentication token to fetch their balance at Air Miles.
   * They need to complete the LMN auth flow. They are, however, opted in for Air Miles.
   */
  AuthenticationRequired = "AUTHENTICATION_REQUIRED",
}

/** Enum with values of status for miles */
export enum MilesStatus {
  /** Account has been created */
  Created = "CREATED",
  /** Something went wrong when trying to create account */
  Error = "ERROR",
  /** Account is already existing (Email needs to be unique) */
  Existing = "EXISTING",
}

/** Transaction made with Air Miles */
export type MilesTransaction = {
  __typename?: "MilesTransaction";
  /** The number of Air Miles that were exchanged */
  value?: Maybe<Scalars["Int"]>;
  /** The date of the transaction */
  date?: Maybe<Scalars["String"]>;
  /** The platform of the transaction */
  domain?: Maybe<Scalars["String"]>;
  /** Description of the transaction */
  description?: Maybe<Scalars["String"]>;
};

/** The URLs related to the Loyalty Management Netherlands b.v. (LMN) authentication flow. */
export type RedirectToLmn = {
  __typename?: "RedirectToLmn";
  /** The URL for the customer to login at LMN to link their Air Miles account to their AH account. */
  loginUrl: Scalars["String"];
  /**
   * The URL for the frontend client to exit on. This URL will be routed to by LMN after (un)successful
   * login took place on the airmiles.nl website.
   */
  exitUrl: Scalars["String"];
  /**
   * The URL for the frontend client to direct customers to when they want to create an account at
   * airmiles.nl
   */
  registerUrl: Scalars["String"];
};

/** This property will be filled when a dropdown is a question that has a correct answer and */
export type AnswerCheck = {
  __typename?: "AnswerCheck";
  /** The correct answer that should match one of the dropdown options */
  answer: Scalars["String"];
  /** The message to be shown when the correct answer is chosen */
  correctMessage: Scalars["String"];
  /** The message to be shown when the incorrect answer is chosen */
  incorrectMessage: Scalars["String"];
};

/** Bonus Lane items that can be products or segments */
export type BonusLaneItems = {
  __typename?: "BonusLaneItems";
  /** Products to be displayed in the bonus lane (previously bought) */
  products?: Maybe<Array<Maybe<Product>>>;
  /** Segments to be displayed in the bonus lane (free delivery, bonus box or spotlight) */
  segments?: Maybe<Array<Maybe<BonusSegment>>>;
};

/** Bonus Lane type that can be free delivery or personal bonus */
export enum BonusLaneType {
  FreeDelivery = "FREE_DELIVERY",
  Personal = "PERSONAL",
}

/** CMS mode enum */
export enum CmsMode {
  /** the cms content for our customers on ah.* */
  Default = "DEFAULT",
  /** the cms content for preview in CMS Experience Manager */
  Preview = "PREVIEW",
  /** the cms content for external preview e.g. preview.ah.* */
  ExternalPreview = "EXTERNAL_PREVIEW",
}

/** Accordion component */
export type ContentAccordion = ContentBaseCmsComponent & {
  __typename?: "ContentAccordion";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Accordion data including items and hasMoreItems for accordion search type */
  data?: Maybe<ContentAccordionData>;
};

/** Accordion block types */
export type ContentAccordionBlockBase = {
  /** Accordion block types */
  type: ContentAccordionBlockType;
};

/** Accordion block types */
export enum ContentAccordionBlockType {
  Buttons = "BUTTONS",
  Paragraph = "PARAGRAPH",
  Quote = "QUOTE",
  Table = "TABLE",
  Media = "MEDIA",
}

/** Content Link */
export type ContentAccordionButton = {
  __typename?: "ContentAccordionButton";
  /** Content link color */
  color: Scalars["String"];
  /** Content link theme */
  theme: Scalars["String"];
  /** Content link url */
  href?: Maybe<Scalars["String"]>;
  /** Content link target _blank or _self */
  target: Scalars["String"];
  /** Content link title */
  title: Scalars["String"];
  /** Content link url used in mobile */
  mobileLink?: Maybe<Scalars["String"]>;
  /** Content link isExternalLink */
  isExternalLink: Scalars["Boolean"];
  /** Content link isExternalMobileLink */
  isExternalMobileLink: Scalars["Boolean"];
};

/** Article component buttons */
export type ContentAccordionButtons = ContentAccordionBlockBase & {
  __typename?: "ContentAccordionButtons";
  /** Type of the content block */
  type: ContentAccordionBlockType;
  /** The primary button */
  primaryButton?: Maybe<ContentAccordionButton>;
  /** The secondary button */
  secondaryButton?: Maybe<ContentAccordionButton>;
};

/** Accordion can be two types (Manual and Search) */
export type ContentAccordionData =
  | ContentManualAccordion
  | ContentSearchAccordion;

/** Accordion item */
export type ContentAccordionItem = {
  __typename?: "ContentAccordionItem";
  /** Accordion item title */
  title?: Maybe<Scalars["String"]>;
  /** Accordion item anchor */
  anchor?: Maybe<Scalars["String"]>;
  /** Accordion item body */
  body?: Maybe<Scalars["String"]>;
  /** Accordion content blocks (An array of different content block e.g. paragraph, image, video, etc) */
  blocks: Array<ContentAccordionBlockBase>;
};

/**
 * Accordion component media
 * Contains images or videos (Youtube or BlueBillyWig)
 */
export type ContentAccordionMedia = ContentAccordionBlockBase & {
  __typename?: "ContentAccordionMedia";
  /** Type of the content block */
  type: ContentAccordionBlockType;
  /** List of media blocks */
  media: Array<ContentMediaBlockBase>;
};

/** Accordion component paragraph */
export type ContentAccordionParagraph = ContentAccordionBlockBase & {
  __typename?: "ContentAccordionParagraph";
  /** Type of the content block */
  type: ContentAccordionBlockType;
  /** Title of the paragraph */
  title?: Maybe<Scalars["String"]>;
  /** Subtitle of the paragraph */
  subtitle?: Maybe<Scalars["String"]>;
  /** Text of the paragraph */
  text?: Maybe<Scalars["String"]>;
  /** This field is used by mobile which filters links in the html text */
  mobileText?: Maybe<Scalars["String"]>;
  /** Content theme */
  contentTheme?: Maybe<Scalars["String"]>;
  /** Title of the paragraph. Used for analytics */
  titleAnalytics?: Maybe<Scalars["String"]>;
  /** Text of the paragraph. Used for analytics */
  textAnalytics?: Maybe<Scalars["String"]>;
  /** This field is used by mobile which filters links in the html text. Used for analytics. */
  mobileTextAnalytics?: Maybe<Scalars["String"]>;
};

/** Accordion component quote */
export type ContentAccordionQuote = ContentAccordionBlockBase & {
  __typename?: "ContentAccordionQuote";
  /** Type of the content block */
  type: ContentAccordionBlockType;
  /** The quote */
  quote: Scalars["String"];
  /** The author */
  author?: Maybe<Scalars["String"]>;
  /** The image alignment */
  imageAlignment: QuoteImageAlignmentType;
  /** List of image variants and description */
  imageSet?: Maybe<ContentImage>;
};

/** Accordion component table */
export type ContentAccordionTable = ContentAccordionBlockBase & {
  __typename?: "ContentAccordionTable";
  /** Type of the content block */
  type: ContentAccordionBlockType;
  /** Is a numbered list */
  isNumbered: Scalars["Boolean"];
  /** The web items */
  items: Array<Scalars["String"]>;
  /** The mobile items */
  mobileItems: Array<Scalars["String"]>;
};

/** Type of Accordion (Manual/Search) */
export enum ContentAccordionType {
  Manual = "MANUAL",
  Search = "SEARCH",
}

/** Advertorial component */
export type ContentAdvertorial = ContentBaseCmsComponent & {
  __typename?: "ContentAdvertorial";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Advertorial Component Data */
  data?: Maybe<ContentAdvertorialData>;
};

/** Advertorial Component Data */
export type ContentAdvertorialData = {
  __typename?: "ContentAdvertorialData";
  /** Advertorial items */
  advertorials: Array<ContentAdvertorialItem>;
};

/** Advertorial Component item */
export type ContentAdvertorialItem = {
  __typename?: "ContentAdvertorialItem";
  /** Advertorial item title */
  title?: Maybe<Scalars["String"]>;
  /** Advertorial item link */
  link?: Maybe<ContentLink>;
  /** Advertorial item text color */
  textColor?: Maybe<Scalars["String"]>;
  /** Advertorial item background color */
  backgroundColor?: Maybe<Scalars["String"]>;
  /** Advertorial item background images */
  images: Array<ContentImageSet>;
};

/** AHRMS SpotlightList Component */
export type ContentAhrmsSpotlightList = ContentBaseCmsComponent & {
  __typename?: "ContentAhrmsSpotlightList";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** SpotlightList Component Data */
  data?: Maybe<ContentAhrmsSpotlightListData>;
  /** Page slots. Only filled in for web. */
  pageSlots?: Maybe<Array<Scalars["String"]>>;
  /** Location. Only filled in for web. */
  location?: Maybe<Scalars["String"]>;
};

/** AHRMS SpotlightList Component Data */
export type ContentAhrmsSpotlightListData = {
  __typename?: "ContentAhrmsSpotlightListData";
  /** Slots */
  slots: Array<Scalars["String"]>;
  /**
   * Page slots. Only filled in for web.
   * @deprecated @sunset_date(2025-04-01) Use pageSlots in ContentAhrmsSpotlightList
   * . .
   */
  pageSlots: Array<Scalars["String"]>;
  /**
   * Location. Only filled in for web.
   * @deprecated @sunset_date(2025-04-01) Use location in ContentAhrmsSpotlightList
   * . .
   */
  location: Scalars["String"];
};

/** Content FAQ Lane */
export type ContentAllerhandeContentListLane = ContentBaseCmsComponent & {
  __typename?: "ContentAllerhandeContentListLane";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Content Data */
  data?: Maybe<ContentAllerhandeContentListLaneData>;
};

/** Content Content List Lane Data */
export type ContentAllerhandeContentListLaneData = {
  __typename?: "ContentAllerhandeContentListLaneData";
  /** Title */
  title?: Maybe<Scalars["String"]>;
  /** Groups Array */
  groups: Array<ContentAllerhandeContentListLaneLinkGroup>;
  /** Image */
  image?: Maybe<ContentImage>;
  /** Position */
  position: Scalars["String"];
  /** Image Position */
  imagePosition?: Maybe<Scalars["String"]>;
  /** Anchor Label */
  anchorLabel?: Maybe<Scalars["String"]>;
};

/** Content Content List Lane Link Group */
export type ContentAllerhandeContentListLaneLinkGroup = {
  __typename?: "ContentAllerhandeContentListLaneLinkGroup";
  /** Title */
  title?: Maybe<Scalars["String"]>;
  /** Links */
  links: Array<ContentAllerhandeLink>;
};

/** Content FAQ Lane */
export type ContentAllerhandeFaqLane = ContentBaseCmsComponent & {
  __typename?: "ContentAllerhandeFAQLane";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Content Data */
  data?: Maybe<ContentAllerhandeFaqLaneData>;
};

/** Content FAQ Lane Data */
export type ContentAllerhandeFaqLaneData = {
  __typename?: "ContentAllerhandeFAQLaneData";
  /** Title */
  title: Scalars["String"];
  /** Questions Array */
  questions: Array<ContentAllerhandeFaqLaneQuestion>;
  /** Anchor Label */
  anchorLabel?: Maybe<Scalars["String"]>;
};

/** Content FAQ Lane Question */
export type ContentAllerhandeFaqLaneQuestion = {
  __typename?: "ContentAllerhandeFAQLaneQuestion";
  /** Question */
  question: Scalars["String"];
  /** Answer in HTML */
  answer: Scalars["String"];
};

/** Content Highlighted Themes Lane */
export type ContentAllerhandeHighlightedThemesLane = ContentBaseCmsComponent & {
  __typename?: "ContentAllerhandeHighlightedThemesLane";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Content Data */
  data?: Maybe<ContentAllerhandeHighlightedThemesLaneData>;
};

/** Content Highlighted Themes Lane Data */
export type ContentAllerhandeHighlightedThemesLaneData = {
  __typename?: "ContentAllerhandeHighlightedThemesLaneData";
  /** Title */
  title?: Maybe<Scalars["String"]>;
  /** Subtitle */
  subtitle?: Maybe<Scalars["String"]>;
  /** Links */
  links: Array<ContentAllerhandeHighlightedThemesLaneLinks>;
  /** Click To Action */
  cta?: Maybe<ContentAllerhandeLink>;
};

/** Content Highlighted Themes Lane Links Data */
export type ContentAllerhandeHighlightedThemesLaneLinks = {
  __typename?: "ContentAllerhandeHighlightedThemesLaneLinks";
  /** Title */
  title?: Maybe<Scalars["String"]>;
  /** Query for internal usage */
  query?: Maybe<RecipeThemeSearchParams>;
  /** Query for internal usage */
  recipes?: Maybe<Array<ContentAllerhandeHighlightedThemesLaneLinksRecipe>>;
  /** Query for internal usage */
  count?: Maybe<Scalars["Int"]>;
  /** Link */
  link?: Maybe<ContentAllerhandeLink>;
};

/** Content Highlighted Themes Lane Links Recipe Data */
export type ContentAllerhandeHighlightedThemesLaneLinksRecipe = {
  __typename?: "ContentAllerhandeHighlightedThemesLaneLinksRecipe";
  /** Recipe ID */
  id: Scalars["Int"];
  /** Recipe title */
  title: Scalars["String"];
  /** Recipe images by rendition name */
  images: Array<RecipeImage>;
};

/** Content Image Collection Lane */
export type ContentAllerhandeImageCollectionLane = ContentBaseCmsComponent & {
  __typename?: "ContentAllerhandeImageCollectionLane";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Content Data */
  data?: Maybe<ContentAllerhandeImageCollectionLaneData>;
};

/** Content Image Collection Lane Data */
export type ContentAllerhandeImageCollectionLaneData = {
  __typename?: "ContentAllerhandeImageCollectionLaneData";
  /** Banner Image */
  bannerImage?: Maybe<ContentAllerhandeImageCollectionLaneItem>;
  /** Images */
  images: Array<ContentAllerhandeImageCollectionLaneItem>;
};

/** Content Image Collection Lane Image */
export type ContentAllerhandeImageCollectionLaneImage = {
  __typename?: "ContentAllerhandeImageCollectionLaneImage";
  /** Image */
  image: ContentImage;
  /** Caption */
  caption?: Maybe<ContentAllerhandeImageCollectionLaneImageCaption>;
};

/** Content Image Collection Lane Image Caption */
export type ContentAllerhandeImageCollectionLaneImageCaption = {
  __typename?: "ContentAllerhandeImageCollectionLaneImageCaption";
  /** Label */
  label: Scalars["String"];
  /** Link */
  link?: Maybe<ContentAllerhandeImageCollectionLaneImageCaptionLink>;
};

/** Content Image Collection Lane Image Caption Link */
export type ContentAllerhandeImageCollectionLaneImageCaptionLink = {
  __typename?: "ContentAllerhandeImageCollectionLaneImageCaptionLink";
  /** Label */
  label?: Maybe<Scalars["String"]>;
  /** URL */
  url: Scalars["String"];
  /** Target */
  target: Scalars["String"];
};

/** Content Image Collection Lane Item */
export type ContentAllerhandeImageCollectionLaneItem =
  | ContentAllerhandeImageCollectionLaneRecipeImage
  | ContentAllerhandeImageCollectionLaneImage;

/** Content Image Collection Lane Recipe Image */
export type ContentAllerhandeImageCollectionLaneRecipeImage = {
  __typename?: "ContentAllerhandeImageCollectionLaneRecipeImage";
  /** Recipe ID for internal usage */
  recipeId?: Maybe<Scalars["Int"]>;
  /** Recipe Data */
  recipe?: Maybe<Recipe>;
};

/** Content Link */
export type ContentAllerhandeLink = {
  __typename?: "ContentAllerhandeLink";
  /** URL */
  url: Scalars["String"];
  /** Label */
  label: Scalars["String"];
  /** Target */
  target: Scalars["String"];
};

/** Content Recipe Detail Lane */
export type ContentAllerhandeRecipeDetailLane = ContentBaseCmsComponent & {
  __typename?: "ContentAllerhandeRecipeDetailLane";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Content Data */
  data?: Maybe<ContentAllerhandeRecipeDetailLaneData>;
};

/** Content Recipe Detail Lane Data */
export type ContentAllerhandeRecipeDetailLaneData = {
  __typename?: "ContentAllerhandeRecipeDetailLaneData";
  /** Title */
  title?: Maybe<Scalars["String"]>;
  /** Recipe ID for internal usage */
  recipeId?: Maybe<Scalars["Int"]>;
  /** Recipe Data */
  recipe?: Maybe<Recipe>;
};

/** Content Recipe Grid Lane */
export type ContentAllerhandeRecipeGridLane = ContentBaseCmsComponent & {
  __typename?: "ContentAllerhandeRecipeGridLane";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Content Data */
  data?: Maybe<ContentAllerhandeRecipeGridLaneData>;
};

/** Content Recipe Grid Lane Data */
export type ContentAllerhandeRecipeGridLaneData = {
  __typename?: "ContentAllerhandeRecipeGridLaneData";
  /** Title */
  title?: Maybe<Scalars["String"]>;
  /** Subtitle */
  subtitle?: Maybe<Scalars["String"]>;
  /** Anchor Label */
  anchorLabel?: Maybe<Scalars["String"]>;
  /** Recipe lane query (This field is used to send a request to recipe search service) */
  recipeQuery?: Maybe<RecipeThemeSearchParams>;
};

/** Content Recipe Group Header Lane */
export type ContentAllerhandeRecipeGroupHeaderLane = ContentBaseCmsComponent & {
  __typename?: "ContentAllerhandeRecipeGroupHeaderLane";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Content Data */
  data?: Maybe<ContentAllerhandeRecipeGroupHeaderLaneData>;
};

/** Content Recipe Group Header Lane Anchor */
export type ContentAllerhandeRecipeGroupHeaderLaneAnchor = {
  __typename?: "ContentAllerhandeRecipeGroupHeaderLaneAnchor";
  /** ID */
  id?: Maybe<Scalars["String"]>;
  /** Label */
  label?: Maybe<Scalars["String"]>;
};

/** Content Recipe Group Header Lane Data */
export type ContentAllerhandeRecipeGroupHeaderLaneData = {
  __typename?: "ContentAllerhandeRecipeGroupHeaderLaneData";
  /** Title */
  title?: Maybe<Scalars["String"]>;
  /** Description (HTML) */
  description?: Maybe<Scalars["String"]>;
  /** Anchors */
  anchors: Array<ContentAllerhandeRecipeGroupHeaderLaneAnchor>;
  /** Recipe ID for internal usage */
  recipeId?: Maybe<Scalars["Int"]>;
  /** Recipe Data */
  recipe?: Maybe<Recipe>;
  /** Image */
  image?: Maybe<ContentImage>;
};

/** Content Recipe Search Banner */
export type ContentAllerhandeRecipeSearchBanner = ContentBaseCmsComponent & {
  __typename?: "ContentAllerhandeRecipeSearchBanner";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Content Data */
  data?: Maybe<ContentAllerhandeRecipeSearchBannerData>;
};

/** Content Recipe Search Banner Data */
export type ContentAllerhandeRecipeSearchBannerData = {
  __typename?: "ContentAllerhandeRecipeSearchBannerData";
  /** Search Hint */
  searchHint: Scalars["String"];
  /** Search Hint (Short) */
  searchHintShort: Scalars["String"];
  /** Quick Search Entries */
  quickSearchEntries: Array<ContentAllerhandeLink>;
  /** Recipe ID for internal usage */
  recipeId?: Maybe<Scalars["Int"]>;
  /** Recipe Data */
  recipe?: Maybe<Recipe>;
};

/** Content Spotlight */
export type ContentAllerhandeSpotlight = ContentBaseCmsComponent & {
  __typename?: "ContentAllerhandeSpotlight";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Content Data */
  data?: Maybe<ContentAllerhandeSpotlightData>;
};

/** Content Spotlight Data */
export type ContentAllerhandeSpotlightData = {
  __typename?: "ContentAllerhandeSpotlightData";
  /** Title */
  title?: Maybe<Scalars["String"]>;
  /** Subtitle */
  subtitle?: Maybe<Scalars["String"]>;
  /** Lane Items */
  spotlightItems: Array<ContentAllerhandeSpotlightItem>;
  /** Click To Action */
  cta?: Maybe<ContentAllerhandeLink>;
  /** Anchor Label */
  anchorLabel?: Maybe<Scalars["String"]>;
};

/** Content Spotlight Item */
export type ContentAllerhandeSpotlightItem =
  | ContentAllerhandeSpotlightItemRecipe
  | ContentAllerhandeSpotlightItemVideoBlueBillywig;

/** Content Spotlight Data Item Base */
export type ContentAllerhandeSpotlightItemBase = {
  /** Item Type */
  type: ContentAllerhandeSpotlightType;
};

/** Content Spotlight Item Recipe */
export type ContentAllerhandeSpotlightItemRecipe =
  ContentAllerhandeSpotlightItemBase & {
    __typename?: "ContentAllerhandeSpotlightItemRecipe";
    /** Item Type */
    type: ContentAllerhandeSpotlightType;
    /** Recipe ID for internal usage */
    recipeId?: Maybe<Scalars["Int"]>;
    /** Recipe Data */
    item?: Maybe<Recipe>;
  };

/** Content Spotlight Item Video Blue Billywig */
export type ContentAllerhandeSpotlightItemVideoBlueBillywig =
  ContentAllerhandeSpotlightItemBase & {
    __typename?: "ContentAllerhandeSpotlightItemVideoBlueBillywig";
    /** Item Type */
    type: ContentAllerhandeSpotlightType;
    /** Blue Billywig ID for internal use */
    blueBillywigId?: Maybe<Scalars["Int"]>;
    /** Video Data */
    item?: Maybe<RecipeVideo>;
  };

/** Content Spotlight Item Type */
export enum ContentAllerhandeSpotlightType {
  Recipe = "RECIPE",
  VideoBlueBillywig = "VIDEO_BLUE_BILLYWIG",
}

/** Content Text Image Items Content Lane */
export type ContentAllerhandeTextImageItemsContentLane =
  ContentBaseCmsComponent & {
    __typename?: "ContentAllerhandeTextImageItemsContentLane";
    /** Anchor ID */
    anchorId?: Maybe<Scalars["String"]>;
    /** ID */
    id: Scalars["String"];
    /** Tag Level */
    tagLevel?: Maybe<Scalars["Int"]>;
    /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
    componentStatus: ContentCmsComponentStatus;
    /** Component Type */
    type: ContentCmsComponentType;
    /**
     * This field contains data that is needed for CMS Experience Manager
     * to display components in preview mode.
     */
    previewData?: Maybe<ContentPreviewData>;
    /** Content Data */
    data?: Maybe<ContentAllerhandeTextImageItemsContentLaneData>;
  };

/** Content Text Image Items Content Lane Data */
export type ContentAllerhandeTextImageItemsContentLaneData = {
  __typename?: "ContentAllerhandeTextImageItemsContentLaneData";
  /** Search Hint */
  contentLaneItems: Array<ContentAllerhandeTextImageItemsContentLaneItem>;
  /** Anchor Label */
  anchorLabel?: Maybe<Scalars["String"]>;
};

/** Content Text Image Items Content Lane Item Data */
export type ContentAllerhandeTextImageItemsContentLaneItem = {
  __typename?: "ContentAllerhandeTextImageItemsContentLaneItem";
  /** Title */
  title: Scalars["String"];
  /** Description */
  description: Scalars["String"];
  /** Recipe ID for internal usage */
  recipeId?: Maybe<Scalars["Int"]>;
  /** Recipe Data */
  recipe?: Maybe<Recipe>;
  /** Image */
  image?: Maybe<ContentImage>;
};

/** Content Theme List Card Collection */
export type ContentAllerhandeThemeListCardCollectionLane =
  ContentBaseCmsComponent & {
    __typename?: "ContentAllerhandeThemeListCardCollectionLane";
    /** Anchor ID */
    anchorId?: Maybe<Scalars["String"]>;
    /** ID */
    id: Scalars["String"];
    /** Tag Level */
    tagLevel?: Maybe<Scalars["Int"]>;
    /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
    componentStatus: ContentCmsComponentStatus;
    /** Component Type */
    type: ContentCmsComponentType;
    /**
     * This field contains data that is needed for CMS Experience Manager
     * to display components in preview mode.
     */
    previewData?: Maybe<ContentPreviewData>;
    /** Content Data */
    data?: Maybe<ContentAllerhandeThemeListCardCollectionLaneData>;
  };

/** Content Theme List Card Collection Card */
export type ContentAllerhandeThemeListCardCollectionLaneCard = {
  __typename?: "ContentAllerhandeThemeListCardCollectionLaneCard";
  /** Title */
  title: Scalars["String"];
  /** Image */
  image: ContentImage;
  /** Links */
  links: Array<ContentAllerhandeLink>;
  /** Anchor */
  anchor: ContentAllerhandeLink;
};

/** Content Theme List Card Collection Data */
export type ContentAllerhandeThemeListCardCollectionLaneData = {
  __typename?: "ContentAllerhandeThemeListCardCollectionLaneData";
  /** Cards */
  cards: Array<ContentAllerhandeThemeListCardCollectionLaneCard>;
};

/** Content Video Lane */
export type ContentAllerhandeVideoLane = ContentBaseCmsComponent & {
  __typename?: "ContentAllerhandeVideoLane";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Content Data */
  data?: Maybe<ContentAllerhandeVideoLaneData>;
};

/** Content Video Lane Data */
export type ContentAllerhandeVideoLaneData = {
  __typename?: "ContentAllerhandeVideoLaneData";
  /** Videos Array */
  videos: Array<ContentAllerhandeVideoLaneVideo>;
};

/** Content Video Lane Video */
export type ContentAllerhandeVideoLaneVideo = {
  __typename?: "ContentAllerhandeVideoLaneVideo";
  /** Blue Billywig ID for internal use */
  blueBillywigId?: Maybe<Scalars["Int"]>;
  /** Anchor Label */
  anchorLabel?: Maybe<Scalars["String"]>;
  /** Recipe Video */
  video?: Maybe<RecipeVideo>;
};

/** Article component */
export type ContentArticle = ContentBaseCmsComponent & {
  __typename?: "ContentArticle";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Article Component Data */
  data?: Maybe<ContentArticleData>;
};

/** Article content blocks schemas */
export type ContentArticleBlockBase = {
  /** Type of the article block */
  type: ContentArticleBlockType;
};

/** Article content blocks types */
export enum ContentArticleBlockType {
  Paragraph = "PARAGRAPH",
  Buttons = "BUTTONS",
  Media = "MEDIA",
  Quote = "QUOTE",
  Table = "TABLE",
}

/** Content Link */
export type ContentArticleButton = {
  __typename?: "ContentArticleButton";
  /** Content link color */
  color: Scalars["String"];
  /** Content link theme */
  theme: Scalars["String"];
  /** Content link url */
  href?: Maybe<Scalars["String"]>;
  /** Content link target _blank or _self */
  target: Scalars["String"];
  /** Content link title */
  title: Scalars["String"];
  /** Content link url used in mobile */
  mobileLink?: Maybe<Scalars["String"]>;
  /** Content link isExternalLink */
  isExternalLink: Scalars["Boolean"];
  /** Content link isExternalMobileLink */
  isExternalMobileLink: Scalars["Boolean"];
};

/** Article component buttons */
export type ContentArticleButtons = ContentArticleBlockBase & {
  __typename?: "ContentArticleButtons";
  /** Type of the content block */
  type: ContentArticleBlockType;
  /** The primary button */
  primaryButton?: Maybe<ContentArticleButton>;
  /** The secondary button */
  secondaryButton?: Maybe<ContentArticleButton>;
};

/** Article Component Data */
export type ContentArticleData = {
  __typename?: "ContentArticleData";
  /** Article content document uuid */
  documentUUID: Scalars["String"];
  /** Article content blocks (An array of different content block e.g. paragraph, image, video, etc) */
  blocks: Array<ContentArticleBlockBase>;
};

/**
 * Article component media
 * Contains images or videos (Youtube or BlueBillyWig)
 */
export type ContentArticleMedia = ContentArticleBlockBase & {
  __typename?: "ContentArticleMedia";
  /** Type of the content block */
  type: ContentArticleBlockType;
  /** List of media blocks */
  media: Array<ContentMediaBlockBase>;
};

/** Article component paragraph */
export type ContentArticleParagraph = ContentArticleBlockBase & {
  __typename?: "ContentArticleParagraph";
  /** Type of the content block */
  type: ContentArticleBlockType;
  /** Title of the paragraph */
  title?: Maybe<Scalars["String"]>;
  /** Title of the paragraph. Used for analytics if the field contains placeholders */
  titleAnalytics?: Maybe<Scalars["String"]>;
  /** Subtitle of the paragraph */
  subtitle?: Maybe<Scalars["String"]>;
  /** Subtitle of the paragraph. Used for analytics if the field contains placeholders */
  subtitleAnalytics?: Maybe<Scalars["String"]>;
  /** Text of the paragraph */
  text?: Maybe<Scalars["String"]>;
  /** Text of the paragraph. Used for analytics if the field contains placeholders */
  textAnalytics?: Maybe<Scalars["String"]>;
  /** This field is used by mobile which filters links in the html text */
  mobileText?: Maybe<Scalars["String"]>;
  /** This field is used by mobile which filters links in the html text. Used for analytics if the field contains placeholders */
  mobileTextAnalytics?: Maybe<Scalars["String"]>;
  /** Content theme */
  contentTheme?: Maybe<Scalars["String"]>;
};

/** Article component quote */
export type ContentArticleQuote = ContentArticleBlockBase & {
  __typename?: "ContentArticleQuote";
  /** Type of the content block */
  type: ContentArticleBlockType;
  /** The quote */
  quote: Scalars["String"];
  /** The author */
  author?: Maybe<Scalars["String"]>;
  /** The image alignment */
  imageAlignment: QuoteImageAlignmentType;
  /** List of image variants and description */
  imageSet?: Maybe<ContentImage>;
};

/** Article component table */
export type ContentArticleTable = ContentArticleBlockBase & {
  __typename?: "ContentArticleTable";
  /** Type of the content block */
  type: ContentArticleBlockType;
  /** Is a numbered list */
  isNumbered: Scalars["Boolean"];
  /** The web items */
  items: Array<Scalars["String"]>;
  /** The web items. Used for analytics if the field contains placeholders */
  itemsAnalytics?: Maybe<Array<Scalars["String"]>>;
  /** The mobile items */
  mobileItems: Array<Scalars["String"]>;
  /** The mobile items. Used for analytics if the field contains placeholders */
  mobileItemsAnalytics?: Maybe<Array<Scalars["String"]>>;
};

/** Common CMS component properties */
export type ContentBaseCmsComponent = {
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
};

/** Common CMS mobile component properties */
export type ContentBaseMobileCmsComponent = {
  /** ID */
  id: Scalars["String"];
  /** Component Type */
  type: ContentBaseMobileCmsComponentType;
  /** Meta object for the component */
  meta?: Maybe<ContentMobileComponentMetaObject>;
};

/** CMS mobile types */
export enum ContentBaseMobileCmsComponentType {
  Pageentries = "PAGEENTRIES",
  Propositionheader = "PROPOSITIONHEADER",
  PageEntries = "PAGE_ENTRIES",
  PropositionHeader = "PROPOSITION_HEADER",
  ArticleDocument = "ARTICLE_DOCUMENT",
  OverblijversBoxesDocument = "OVERBLIJVERS_BOXES_DOCUMENT",
}

/** Common targeted content CMS document properties */
export type ContentBaseTargetedContentCmsDocument = {
  /** ID */
  id: Scalars["String"];
  /** Document Type */
  type: ContentBaseTargetedContentCmsDocumentType;
  /** Meta object for the document */
  meta?: Maybe<ContentMobileComponentMetaObject>;
};

/** CMS targeted content document types */
export enum ContentBaseTargetedContentCmsDocumentType {
  MobilePageTemplate = "MOBILE_PAGE_TEMPLATE",
  PageEntries = "PAGE_ENTRIES",
  PropositionHeader = "PROPOSITION_HEADER",
  SpotlightList = "SPOTLIGHT_LIST",
  CuratedLists = "CURATED_LISTS",
  UspGroup = "USP_GROUP",
  SmartPromotions = "SMART_PROMOTIONS",
}

/** Bonus Lane component */
export type ContentBonusLane = ContentBaseCmsComponent & {
  __typename?: "ContentBonusLane";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Bonus Lane Component Data */
  data?: Maybe<ContentBonusLaneData>;
};

/** Bonus Lane Component Data */
export type ContentBonusLaneData = {
  __typename?: "ContentBonusLaneData";
  /** Bonus Lane Component title */
  title?: Maybe<Scalars["String"]>;
  /** Bonus Lane Component subtitle */
  subtitle?: Maybe<Scalars["String"]>;
  /** Bonus Lane items that can be products or segments */
  bonusLaneItems?: Maybe<BonusLaneItems>;
  /** Bonus Lane type that can be free delivery or personal bonus */
  bonusLaneType: BonusLaneType;
  /** Bonus Lane see more link */
  link?: Maybe<ContentLink>;
  /** Applies filter supplier cooperation */
  supplierBoosted?: Maybe<Scalars["Boolean"]>;
  /** In case an error happens in the bonus service, this field will be true */
  serviceError: Scalars["Boolean"];
};

/** BrandHeader component */
export type ContentBrandHeader = ContentBaseCmsComponent & {
  __typename?: "ContentBrandHeader";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** ButtonLane component data */
  data?: Maybe<ContentBrandHeaderData>;
};

/** BrandHeader component data */
export type ContentBrandHeaderData = {
  __typename?: "ContentBrandHeaderData";
  /** Containing brand header image description and variants */
  imageSet: ContentImage;
};

/** Button component */
export type ContentButton = {
  __typename?: "ContentButton";
  /** Button icon (e.g. icon-mijnbestellingen) */
  icon?: Maybe<Scalars["String"]>;
  /** Button title */
  title: Scalars["String"];
  /** Button subtitle */
  subtitle?: Maybe<Scalars["String"]>;
  /** Button link */
  link?: Maybe<ContentButtonLink>;
};

/** Button component link */
export type ContentButtonLink = {
  __typename?: "ContentButtonLink";
  /** Link href */
  href: Scalars["String"];
  /** Link target */
  target?: Maybe<Scalars["String"]>;
};

/** ButtonLane component */
export type ContentButtonlane = ContentBaseCmsComponent & {
  __typename?: "ContentButtonlane";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** ButtonLane component data */
  data?: Maybe<ContentButtonlaneData>;
};

/** ButtonLane component data */
export type ContentButtonlaneData = {
  __typename?: "ContentButtonlaneData";
  /** Buttonlane document UUID */
  documentUUID: Scalars["String"];
  /** List of buttons */
  buttons: Array<ContentButton>;
  /** Buttonlane theme (e.g. color-ah) */
  theme?: Maybe<Scalars["String"]>;
};

/** CMS Component Render Status */
export enum ContentCmsComponentStatus {
  Complete = "COMPLETE",
  Incomplete = "INCOMPLETE",
}

/** CMS Component Types */
export enum ContentCmsComponentType {
  Accordion = "ACCORDION",
  Advertorial = "ADVERTORIAL",
  Article = "ARTICLE",
  Brandheader = "BRANDHEADER",
  BrandHeader = "BRAND_HEADER",
  Buttonlane = "BUTTONLANE",
  ButtonLane = "BUTTON_LANE",
  CuratedListLane = "CURATED_LIST_LANE",
  Shopheader = "SHOPHEADER",
  ShopHeader = "SHOP_HEADER",
  Marketingheader = "MARKETINGHEADER",
  MarketingHeader = "MARKETING_HEADER",
  Form = "FORM",
  Herobanner = "HEROBANNER",
  HeroBanner = "HERO_BANNER",
  Linkgroup = "LINKGROUP",
  LinkGroup = "LINK_GROUP",
  CustomerCareLinkBoxLane = "CUSTOMER_CARE_LINK_BOX_LANE",
  Marketingcarousel = "MARKETINGCAROUSEL",
  MarketingCarousel = "MARKETING_CAROUSEL",
  Productlane = "PRODUCTLANE",
  ProductLane = "PRODUCT_LANE",
  Richcontent = "RICHCONTENT",
  RichContent = "RICH_CONTENT",
  Shopinshop = "SHOPINSHOP",
  ShopInShop = "SHOP_IN_SHOP",
  Queryablerecipelane = "QUERYABLERECIPELANE",
  QueryableRecipeLane = "QUERYABLE_RECIPE_LANE",
  Supershops = "SUPERSHOPS",
  SuperShops = "SUPER_SHOPS",
  Title = "TITLE",
  Halfwidthmediamonetizationlane = "HALFWIDTHMEDIAMONETIZATIONLANE",
  HalfWidthMediaMonetizationLane = "HALF_WIDTH_MEDIA_MONETIZATION_LANE",
  GridLane = "GRID_LANE",
  AllerhandeSpotlight = "ALLERHANDE_SPOTLIGHT",
  AllerhandeHighlightedThemesLane = "ALLERHANDE_HIGHLIGHTED_THEMES_LANE",
  AllerhandeThemeListCardCollectionLane = "ALLERHANDE_THEME_LIST_CARD_COLLECTION_LANE",
  AllerhandeRecipeGridLane = "ALLERHANDE_RECIPE_GRID_LANE",
  AllerhandeTextImageItemsContentLane = "ALLERHANDE_TEXT_IMAGE_ITEMS_CONTENT_LANE",
  AllerhandeImageCollectionLane = "ALLERHANDE_IMAGE_COLLECTION_LANE",
  AllerhandeRecipeGroupHeaderLane = "ALLERHANDE_RECIPE_GROUP_HEADER_LANE",
  AllerhandeWeekmenu = "ALLERHANDE_WEEKMENU",
  AllerhandeRecipeSearchBanner = "ALLERHANDE_RECIPE_SEARCH_BANNER",
  AllerhandeRecipeDetailLane = "ALLERHANDE_RECIPE_DETAIL_LANE",
  AllerhandeContentListLane = "ALLERHANDE_CONTENT_LIST_LANE",
  AllerhandeVideoLane = "ALLERHANDE_VIDEO_LANE",
  AllerhandeFaqLane = "ALLERHANDE_FAQ_LANE",
  PropositionHeader = "PROPOSITION_HEADER",
  BonusLane = "BONUS_LANE",
  CustomerCareHeader = "CUSTOMER_CARE_HEADER",
  CustomerCareBreadcrumbs = "CUSTOMER_CARE_BREADCRUMBS",
  CustomerCareArticle = "CUSTOMER_CARE_ARTICLE",
  CustomerCareLinkLane = "CUSTOMER_CARE_LINK_LANE",
  AhrmsSpotlightList = "AHRMS_SPOTLIGHT_LIST",
  SpotlightList = "SPOTLIGHT_LIST",
}

/** Root Component Types */
export enum ContentComponentType {
  Submenu = "SUBMENU",
  Component = "COMPONENT",
}

/** Half with media monetization lane component data */
export type ContentContentHalfWidthMediaMonetizationLaneData = {
  __typename?: "ContentContentHalfWidthMediaMonetizationLaneData";
  /** Media monetization promotions */
  promotions: Array<Maybe<ContentPromotion>>;
};

/** Curated List Component Data */
export type ContentCuratedList = {
  __typename?: "ContentCuratedList";
  /** Curated list document uuid */
  documentUUID: Scalars["String"];
  /** The title of the curated list */
  title: Scalars["String"];
  /** The subtitle of the curated list */
  subtitle?: Maybe<Scalars["String"]>;
  /** The description of the curated list */
  description?: Maybe<Scalars["String"]>;
  /** The amount of persons the list is meant for */
  personQuantity: Scalars["Int"];
  /** An image for the curated list */
  image: ContentImage;
  /** A sticker image for the curated list */
  stickerImage?: Maybe<ContentImage>;
  /** A list of curated items for the curated list */
  items?: Maybe<Array<ContentCuratedListItem>>;
};

/** Curated List Item Component Data */
export type ContentCuratedListItem = {
  __typename?: "ContentCuratedListItem";
  /** Vague term of the item */
  vagueTerm: Scalars["String"];
  /** Quantity of the item */
  quantity: Scalars["Int"];
  /** Unit of the item */
  unit: Scalars["String"];
  /** Product ID of the item */
  productId?: Maybe<Scalars["String"]>;
  /** Quantity of the Product ID of the item */
  productIdQuantity?: Maybe<Scalars["Int"]>;
};

/** Arguments to get product suggestions */
export type ContentCuratedListItemInput = {
  /** Vague term of the item */
  vagueTerm: Scalars["String"];
  /** Quantity of the item */
  quantity: Scalars["Int"];
  /** Unit of the item */
  unit: Scalars["String"];
  /** Product ID of the item */
  productId?: Maybe<Scalars["String"]>;
  /** Quantity of the Product ID of the item */
  productIdQuantity?: Maybe<Scalars["Int"]>;
};

/** Curated List Lane Component */
export type ContentCuratedListLane = ContentBaseCmsComponent & {
  __typename?: "ContentCuratedListLane";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Curated List Lane Component Data */
  data?: Maybe<ContentCuratedListLaneData>;
};

/** Curated List Lane Component Data */
export type ContentCuratedListLaneData = {
  __typename?: "ContentCuratedListLaneData";
  /** Curated list lane document uuid */
  documentUUID: Scalars["String"];
  /** Title of the curated list lane */
  title?: Maybe<Scalars["String"]>;
  /** Items of the curated list lane */
  curatedLists: Array<ContentCuratedList>;
};

/**
 * Customer attributes will be used to target customers
 * based on certain tags
 */
export type ContentCustomerAttributes = {
  __typename?: "ContentCustomerAttributes";
  /** List of all customer attribute tags */
  tags?: Maybe<Array<ContentCustomerTag>>;
};

/** Customer Care Link Box */
export type ContentCustomerCareLinkBox = {
  __typename?: "ContentCustomerCareLinkBox";
  /** Link Box Title */
  title?: Maybe<Scalars["String"]>;
  /** Link Box Links */
  links?: Maybe<Array<Maybe<ContentLink>>>;
  /** Link Box See More Link */
  seeMoreLink?: Maybe<ContentLink>;
};

/** Customer Care ListItem Component */
export type ContentCustomerCareLinkBoxLane = ContentBaseCmsComponent & {
  __typename?: "ContentCustomerCareLinkBoxLane";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Customer Care Link Box Lane Data */
  data?: Maybe<ContentCustomerCareLinkBoxLaneData>;
};

/** Customer Care Link Box Lane Data */
export type ContentCustomerCareLinkBoxLaneData = {
  __typename?: "ContentCustomerCareLinkBoxLaneData";
  /** Array of Customer Care Link Boxes */
  linkBoxes: Array<Maybe<ContentCustomerCareLinkBox>>;
};

/** Customer tag */
export type ContentCustomerTag = {
  __typename?: "ContentCustomerTag";
  /** Customer tag key (e.g. profileProperties.ah_memberships_trait.ONEFIT) */
  key: Scalars["String"];
  /** Customer tag description (e.g. Klant heeft met premium abonnement een Onefit abonnement afgesloten) */
  description: Scalars["String"];
  /** Customer tag type (e.g. Loyalty) */
  type: Scalars["String"];
  /** Customer tag attribute (e.g. Abonnementen) */
  attribute: Scalars["String"];
  /** Customer tag attributeValue (e.g. Premium + Onefit) */
  attributeValue: Scalars["String"];
  /** Customer tag domain (e.g. All | NL | BE) */
  domain: Scalars["String"];
};

/** Delivery Address (Default is member's address) */
export type ContentDeliveryAddress = {
  __typename?: "ContentDeliveryAddress";
  /** Delivery Address Title (e.g. I want this order delivered to a different address) */
  title?: Maybe<Scalars["String"]>;
  /** Delivery Address Text (e.g. Enter the address where you want to have it delivered) */
  text?: Maybe<Scalars["String"]>;
};

/**
 * CMS Delivery Grid: User can select a delivery slot or pickup slot
 * It's used in ah.nl/kies-een-moment page.
 */
export type ContentDeliveryGrid = {
  __typename?: "ContentDeliveryGrid";
  /** Weekly Offers */
  weeklyOffers: Array<ContentDeliveryGridWeeklyOffer>;
  /** Daily Offers */
  dailyOffers: Array<ContentDeliveryGridDailyOffer>;
  /** Communications */
  communications: ContentDeliveryGridCommunications;
  /** Configuration */
  configuration: ContentDeliveryGridConfiguration;
  /** Type */
  type: Scalars["String"];
};

/** Delivery Grid Communications */
export type ContentDeliveryGridCommunications = {
  __typename?: "ContentDeliveryGridCommunications";
  /** Communications Urgent */
  isUrgent?: Maybe<Scalars["Boolean"]>;
  /** Communications Show Pointer */
  showPointer?: Maybe<Scalars["Boolean"]>;
  /** Communications Delivery */
  delivery?: Maybe<Scalars["String"]>;
  /** Communications Pickup */
  pickup?: Maybe<Scalars["String"]>;
  /** Communications Pickup Store */
  pickupStore?: Maybe<Scalars["String"]>;
  /** Communications Delivery */
  deliveryPickup?: Maybe<Scalars["String"]>;
  /** Communications Pickup corparate */
  pickupCorporate?: Maybe<Scalars["String"]>;
  /** Communications Delivery Address */
  deliveryAddress?: Maybe<ContentDeliveryAddress>;
};

/** Delivery Grid Configuration */
export type ContentDeliveryGridConfiguration = {
  __typename?: "ContentDeliveryGridConfiguration";
  /** Delivery Grid Obtainment Methods */
  obtainmentMethods: Array<ContentDeliveryGridObtainmentMethods>;
};

/** Delivery Grid Daily Offer */
export type ContentDeliveryGridDailyOffer = {
  __typename?: "ContentDeliveryGridDailyOffer";
  /** Date (e.g. 2020-01-09) */
  day: Scalars["String"];
  /** Offer Title */
  offer: Scalars["String"];
};

/**
 * Delivery Grid Obtainment Obtainment Methods.
 * These methods are selectable by a user (if more than one are enabled for the user)
 */
export type ContentDeliveryGridObtainmentMethods = {
  __typename?: "ContentDeliveryGridObtainmentMethods";
  /**
   * Obtainment Method Text
   * (e.g. Take your groceries along the way)
   */
  text: Scalars["String"];
  /**
   * Obtainment Method Title
   * (e.g. Deliver to your work)
   */
  title: Scalars["String"];
  /** Obtainment Method Icon */
  icon: Scalars["String"];
  /** Obtainment Method Visibility */
  isVisible: Scalars["Boolean"];
  /** Obtainment Method Type */
  type: Scalars["String"];
  /** Sustainable Slots Title */
  sustainableSlotsTitle?: Maybe<Scalars["String"]>;
  /** Sustainable Slots Description */
  sustainableSlotsDescription?: Maybe<Scalars["String"]>;
};

/** CMS Delivery Grid Arguments */
export type ContentDeliveryGridOptions = {
  /** Channel */
  channel?: Maybe<Scalars["String"]>;
  /** Targeting */
  targeting?: Maybe<Scalars["String"]>;
};

/** Delivery Grid Weekly Offer */
export type ContentDeliveryGridWeeklyOffer = {
  __typename?: "ContentDeliveryGridWeeklyOffer";
  /** Offer Title */
  offer: Scalars["String"];
  /** Offer Start Date (e.g. 2022-11-28) */
  startDate: Scalars["String"];
  /** Offer End Date (e.g. 2022-12-04) */
  endDate: Scalars["String"];
};

/** Error Status for content module to be able to handle errors */
export type ContentError = {
  __typename?: "ContentError";
  /** status code */
  code: Scalars["Int"];
  /** status message */
  message: Scalars["String"];
  /** error type */
  type: ContentErrorTypes;
};

/** Error types for content module */
export enum ContentErrorTypes {
  /** Not found error, 404 */
  NotFound = "NOT_FOUND",
  /** Unauthorized error, 401 */
  Unauthorized = "UNAUTHORIZED",
  /** Internal Server Error, 500 */
  ServerError = "SERVER_ERROR",
  /** not specified error type */
  Unknown = "UNKNOWN",
}

/** Accordion for flex page */
export type ContentFpAccordion = ContentFlexPageComponentBase & {
  __typename?: "ContentFPAccordion";
  /** Flex page component type (e.g. ACCORDION) */
  type: ContentFlexPageComponentType;
  /** Accordion data */
  data?: Maybe<ContentAccordionData>;
};

/** AHRMS SpotlightList Component for Flex Page */
export type ContentFpAhrmsSpotlightList = ContentFlexPageComponentBase & {
  __typename?: "ContentFPAhrmsSpotlightList";
  /** Component Type */
  type: ContentFlexPageComponentType;
  /** SpotlightList Component Data */
  data?: Maybe<ContentAhrmsSpotlightListData>;
};

/** Article component for flex page */
export type ContentFpArticle = ContentFlexPageComponentBase & {
  __typename?: "ContentFPArticle";
  /** Flex page component type (e.g. QUERYABLERECIPELANE) */
  type: ContentFlexPageComponentType;
  /** Article data */
  data?: Maybe<ContentArticleData>;
};

/** Brand header document for flex page */
export type ContentFpBrandHeader = ContentFlexPageHeaderBase & {
  __typename?: "ContentFPBrandHeader";
  /** Type (e.g. brandHeader) */
  type: ContentFlexPageHeaderType;
  /** Header data */
  data?: Maybe<ContentBrandHeaderData>;
};

/** Curated Lists for flex page */
export type ContentFpCuratedLists = ContentFlexPageComponentBase & {
  __typename?: "ContentFPCuratedLists";
  /** Flex page component type (e.g. ACCORDION) */
  type: ContentFlexPageComponentType;
  /** Curated Lists Data */
  data?: Maybe<ContentCuratedListLaneData>;
};

/** Form component for flex page */
export type ContentFpForm = ContentFlexPageComponentBase & {
  __typename?: "ContentFPForm";
  /** Flex page component type (e.g. QUERYABLERECIPELANE) */
  type: ContentFlexPageComponentType;
  /** Form id */
  id?: Maybe<Scalars["String"]>;
  /** Form data */
  data?: Maybe<ContentFormData>;
};

/** Hardcoded component */
export type ContentFpHardcodedComponent = ContentFlexPageComponentBase & {
  __typename?: "ContentFPHardcodedComponent";
  /** Flex page component type (e.g. QUERYABLERECIPELANE) */
  type: ContentFlexPageComponentType;
  /** Hardcoded component id */
  hardcodedComponentId: Scalars["String"];
  /** Hardcoded component type */
  hardcodedComponentType: Scalars["String"];
};

/** Marketing header document for flex page */
export type ContentFpMarketingHeader = ContentFlexPageHeaderBase & {
  __typename?: "ContentFPMarketingHeader";
  /** Type (e.g. marketingHeader) */
  type: ContentFlexPageHeaderType;
  /** Header data */
  data?: Maybe<ContentMarketingHeaderData>;
};

/** Product lane for flex page */
export type ContentFpProductLane = ContentFlexPageComponentBase & {
  __typename?: "ContentFPProductLane";
  /** Flex page component type (e.g. PRODUCTLANE) */
  type: ContentFlexPageComponentType;
  /** Queryable recipe lane data */
  data?: Maybe<ContentProductLaneData>;
};

/** Queryable recipe lane for flex page */
export type ContentFpQueryableRecipeLane = ContentFlexPageComponentBase & {
  __typename?: "ContentFPQueryableRecipeLane";
  /** Queryable recipe lane ID */
  id?: Maybe<Scalars["String"]>;
  /** Flex page component type (e.g. QUERYABLERECIPELANE) */
  type: ContentFlexPageComponentType;
  /** Queryable recipe lane data */
  data?: Maybe<ContentQueryableRecipeLaneData>;
};

/** RichContent component for flex page */
export type ContentFpRichContent = ContentFlexPageComponentBase & {
  __typename?: "ContentFPRichContent";
  /** Flex page component type (e.g. QUERYABLERECIPELANE) */
  type: ContentFlexPageComponentType;
  /** Rich content id */
  id?: Maybe<Scalars["String"]>;
  /** Rich content data */
  data?: Maybe<ContentRichContentData>;
};

/** Shop header document for flex page */
export type ContentFpShopHeader = ContentFlexPageHeaderBase & {
  __typename?: "ContentFPShopHeader";
  /** Type (e.g. shopHeader) */
  type: ContentFlexPageHeaderType;
  /** Header data */
  data?: Maybe<ContentShopHeaderData>;
};

/** SpotlightList Component for Flex Page */
export type ContentFpSpotlightList = ContentFlexPageComponentBase & {
  __typename?: "ContentFPSpotlightList";
  /** Flex page component type (e.g. SPOTLIGHT_LIST) */
  type: ContentFlexPageComponentType;
  /** SpotlightList id */
  id?: Maybe<Scalars["String"]>;
  /** SpotlightList data */
  data?: Maybe<ContentFpSpotlightListData>;
};

export type ContentFpSpotlightListData = {
  __typename?: "ContentFPSpotlightListData";
  /** Document UUID of the spotlight card */
  documentUUID: Scalars["String"];
  /** Title of the spotlight list */
  title?: Maybe<Scalars["String"]>;
  /** Title analytics */
  titleAnalytics?: Maybe<Scalars["String"]>;
  /** Items of the spotlight list */
  spotlightCards?: Maybe<Array<ContentSpotlightCard>>;
};

/** Super shops (part of page entries) component for flex page */
export type ContentFpSuperShops = ContentFlexPageComponentBase & {
  __typename?: "ContentFPSuperShops";
  /** Flex page component type (e.g. QUERYABLERECIPELANE) */
  type: ContentFlexPageComponentType;
  /** Page entries id */
  id?: Maybe<Scalars["String"]>;
  /** Page entries data */
  data?: Maybe<ContentPageEntriesData>;
};

/**
 * Content Flex Page
 * (The page is used ofr both and mobile to display certain documents)
 */
export type ContentFlexPage = {
  __typename?: "ContentFlexPage";
  /** Flex Page ID */
  id: Scalars["String"];
  /** Header document (This is separated from other components as it will always be displayed at the top of the page) */
  header?: Maybe<ContentFlexPageHeaderBase>;
  /** A list of flex page components including some documents */
  components?: Maybe<Array<ContentFlexPageComponentBase>>;
  /** Meta object for the component */
  meta?: Maybe<ContentMobileComponentMetaObject>;
  /**
   * This is a rich text that can be used in flex pages for SEO purposes
   * (Normally displayed at the end of the pages)
   */
  seoText?: Maybe<Scalars["String"]>;
};

/** Flex page component */
export type ContentFlexPageComponentBase = {
  /** Flex page component type */
  type: ContentFlexPageComponentType;
};

/** Flex page component types */
export enum ContentFlexPageComponentType {
  Queryablerecipelane = "QUERYABLERECIPELANE",
  Article = "ARTICLE",
  Richcontent = "RICHCONTENT",
  Productlane = "PRODUCTLANE",
  Form = "FORM",
  QueryableRecipeLane = "QUERYABLE_RECIPE_LANE",
  RichContent = "RICH_CONTENT",
  ProductLane = "PRODUCT_LANE",
  SuperShops = "SUPER_SHOPS",
  HardcodedComponent = "HARDCODED_COMPONENT",
  Accordion = "ACCORDION",
  SpotlightList = "SPOTLIGHT_LIST",
  AhrmsSpotlightList = "AHRMS_SPOTLIGHT_LIST",
  CuratedLists = "CURATED_LISTS",
}

/** Flex page header */
export type ContentFlexPageHeaderBase = {
  /** Flex page header type */
  type: ContentFlexPageHeaderType;
};

/** Flex page header types */
export enum ContentFlexPageHeaderType {
  Brandheader = "BRANDHEADER",
  Marketingheader = "MARKETINGHEADER",
  Shopheader = "SHOPHEADER",
  BrandHeader = "BRAND_HEADER",
  MarketingHeader = "MARKETING_HEADER",
  ShopHeader = "SHOP_HEADER",
}

/** Content CMS flex page options */
export type ContentFlexPageOptions = {
  /** The full path of the document */
  path?: Maybe<Scalars["String"]>;
  /** The hippo channel you want to retrieve the page for */
  channel?: Maybe<Scalars["String"]>;
  /**
   * View date, defaults to today's date. If an active order is present, the requested view date is overruled and set to the delivery date of the order.
   * (format YYYY-MM-DD)
   */
  viewDate?: Maybe<Scalars["String"]>;
  /** The locale for which channel you want to retrieve a page for */
  locale?: Maybe<Scalars["String"]>;
  /** Root Components */
  application?: Maybe<Scalars["String"]>;
  /** Targeting ab headers */
  targetingHeaders?: Maybe<Scalars["String"]>;
  /** Headers used in preview mode */
  contentPreviewingHeaders?: Maybe<Scalars["String"]>;
  /** If user is in order mode or not */
  isOrderMode?: Maybe<Scalars["Boolean"]>;
  /** If user is in order mode then send the orderId otherwise empty */
  orderId?: Maybe<Scalars["Int"]>;
};

/** Content CMS flex page options */
export type ContentFlexPageWebUrlOptions = {
  /** The hippo channel you want to retrieve the page for */
  channel?: Maybe<Scalars["String"]>;
  /**
   * View date, defaults to today's date. If an active order is present, the requested view date is overruled and set to the delivery date of the order.
   * (format YYYY-MM-DD)
   */
  viewDate?: Maybe<Scalars["String"]>;
  /** The locale for which channel you want to retrieve a page for */
  locale?: Maybe<Scalars["String"]>;
  /** Root Components */
  application?: Maybe<Scalars["String"]>;
  /** If user is in order mode or not */
  isOrderMode?: Maybe<Scalars["Boolean"]>;
  /** If user is in order mode then send the orderId otherwise empty */
  orderId?: Maybe<Scalars["Int"]>;
};

/** CMS Footer Links: navigation in the footer */
export type ContentFooterLinks = {
  __typename?: "ContentFooterLinks";
  /** Link groups / columns */
  linkGroups: Array<ContentFooterLinksGroup>;
  /** Id */
  id: Scalars["String"];
  /** Type */
  type: Scalars["String"];
};

/** Group of link items with a subject */
export type ContentFooterLinksGroup = {
  __typename?: "ContentFooterLinksGroup";
  /** Link groups / columns */
  links: Array<ContentFooterLinksItem>;
  /** Subject */
  subject: Scalars["String"];
};

/** Link item with title and anchor target */
export type ContentFooterLinksItem = {
  __typename?: "ContentFooterLinksItem";
  /** Link */
  link: Scalars["String"];
  /** Title */
  title: Scalars["String"];
  /** Target */
  target: Scalars["String"];
};

/** CMS Footer Links Arguments */
export type ContentFooterLinksOptions = {
  /** Channel */
  channel?: Maybe<Scalars["String"]>;
  /** Locale */
  locale?: Maybe<Scalars["String"]>;
};

/** Form component */
export type ContentForm = ContentBaseCmsComponent & {
  __typename?: "ContentForm";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Form component data */
  data?: Maybe<ContentFormData>;
};

/** Checkbox field */
export type ContentFormCheckbox = ContentFormField & {
  __typename?: "ContentFormCheckbox";
  /** field type */
  type: ContentFormFieldType;
  /** field name */
  name: Scalars["String"];
  /** field label */
  label?: Maybe<Scalars["String"]>;
  /** field placeholder */
  placeholder?: Maybe<Scalars["String"]>;
  /** field description */
  description?: Maybe<Scalars["String"]>;
  /** determines if the field is required */
  required: Scalars["Boolean"];
  /** media block */
  media?: Maybe<ContentMediaBlockBase>;
};

/** Form component data */
export type ContentFormData = {
  __typename?: "ContentFormData";
  /** A unique id used for a form */
  formId: Scalars["String"];
  /** Form title */
  title?: Maybe<Scalars["String"]>;
  /** Form description */
  description?: Maybe<Scalars["String"]>;
  /** Mobile form description */
  mobileDescription?: Maybe<Scalars["String"]>;
  /** Form action (the url used to submit the form e.g. /v1/forms/2414e2a0-99b1-4230-993e-46956efc75d6) */
  action?: Maybe<Scalars["String"]>;
  /** The submit button label */
  submitLabel?: Maybe<Scalars["String"]>;
  /** Message displayed when the form submitted successfully */
  successConfirmation?: Maybe<Scalars["String"]>;
  /** Message to thank the user for submitting the form */
  successThankYou?: Maybe<Scalars["String"]>;
  /** Mobile message to thank the user for submitting the form */
  mobileSuccessThankYou?: Maybe<Scalars["String"]>;
  /** This property will be filled when the form end date is in the past */
  expiredNotification?: Maybe<ExpiredNotification>;
  /** Form fields */
  fields?: Maybe<Array<ContentFormField>>;
};

/** Dropdown field */
export type ContentFormDropdown = ContentFormField & {
  __typename?: "ContentFormDropdown";
  /** field type */
  type: ContentFormFieldType;
  /** field name */
  name: Scalars["String"];
  /** field label */
  label?: Maybe<Scalars["String"]>;
  /** field placeholder */
  placeholder?: Maybe<Scalars["String"]>;
  /** field description */
  description?: Maybe<Scalars["String"]>;
  /** determines if the field is required */
  required: Scalars["Boolean"];
  /** determines how to render the field (dropdown/radiobuttons) */
  renderType: ContentFormDropdownRenderType;
  /** options of the dropdown */
  options: Array<Scalars["String"]>;
  /** media block */
  media?: Maybe<ContentMediaBlockBase>;
  /** answer check */
  answerCheck?: Maybe<AnswerCheck>;
};

/** Form Dropdown Render type */
export enum ContentFormDropdownRenderType {
  Dropdown = "DROPDOWN",
  Radiobuttons = "RADIOBUTTONS",
}

/** Email field */
export type ContentFormEmail = ContentFormField & {
  __typename?: "ContentFormEmail";
  /** field type */
  type: ContentFormFieldType;
  /** field name */
  name: Scalars["String"];
  /** field label */
  label?: Maybe<Scalars["String"]>;
  /** field placeholder */
  placeholder?: Maybe<Scalars["String"]>;
  /** field description */
  description?: Maybe<Scalars["String"]>;
  /** determines if the field is required */
  required: Scalars["Boolean"];
  /** media block */
  media?: Maybe<ContentMediaBlockBase>;
  /** a specific pattern can be added as a validation rule */
  pattern: Scalars["String"];
};

/** Common form field properties */
export type ContentFormField = {
  /** field type */
  type: ContentFormFieldType;
  /** media block */
  media?: Maybe<ContentMediaBlockBase>;
};

/** Types of the form fields */
export enum ContentFormFieldType {
  Checkbox = "CHECKBOX",
  Email = "EMAIL",
  Dropdown = "DROPDOWN",
  Informationblock = "INFORMATIONBLOCK",
  Telephone = "TELEPHONE",
  Termsblock = "TERMSBLOCK",
  Text = "TEXT",
  Textarea = "TEXTAREA",
  Upload = "UPLOAD",
}

/** Information field */
export type ContentFormInformationBlock = ContentFormField & {
  __typename?: "ContentFormInformationBlock";
  /** field type */
  type: ContentFormFieldType;
  /** field title */
  title: Scalars["String"];
  /** field description */
  description?: Maybe<Scalars["String"]>;
  /** media block */
  media?: Maybe<ContentMediaBlockBase>;
};

/** Telephone field */
export type ContentFormTelephone = ContentFormField & {
  __typename?: "ContentFormTelephone";
  /** field type */
  type: ContentFormFieldType;
  /** field name */
  name: Scalars["String"];
  /** field label */
  label?: Maybe<Scalars["String"]>;
  /** field placeholder */
  placeholder?: Maybe<Scalars["String"]>;
  /** field description */
  description?: Maybe<Scalars["String"]>;
  /** determines if the field is required */
  required: Scalars["Boolean"];
  /** media block */
  media?: Maybe<ContentMediaBlockBase>;
  /** a specific pattern can be added as a validation rule */
  pattern: Scalars["String"];
};

/** Terms block field */
export type ContentFormTermsBlock = ContentFormField & {
  __typename?: "ContentFormTermsBlock";
  /** field type */
  type: ContentFormFieldType;
  /** field name */
  name: Scalars["String"];
  /** field label */
  label?: Maybe<Scalars["String"]>;
  /** determines if the field is required */
  required: Scalars["Boolean"];
  /** url to visit the terms information */
  termsLink?: Maybe<ContentLink>;
  /** media block */
  media?: Maybe<ContentMediaBlockBase>;
};

/** Textarea field */
export type ContentFormTextArea = ContentFormField & {
  __typename?: "ContentFormTextArea";
  /** field type */
  type: ContentFormFieldType;
  /** field name */
  name: Scalars["String"];
  /** field label */
  label?: Maybe<Scalars["String"]>;
  /** field placeholder */
  placeholder?: Maybe<Scalars["String"]>;
  /** field description */
  description?: Maybe<Scalars["String"]>;
  /** determines if the field is required */
  required: Scalars["Boolean"];
  /** maximum characters can be written in the field */
  maxLength: Scalars["Int"];
  /** media block */
  media?: Maybe<ContentMediaBlockBase>;
};

/** Text field */
export type ContentFormTextField = ContentFormField & {
  __typename?: "ContentFormTextField";
  /** field type */
  type: ContentFormFieldType;
  /** field name */
  name: Scalars["String"];
  /** field label */
  label?: Maybe<Scalars["String"]>;
  /** field placeholder */
  placeholder?: Maybe<Scalars["String"]>;
  /** field description */
  description?: Maybe<Scalars["String"]>;
  /** determines if the field is required */
  required: Scalars["Boolean"];
  /** maximum characters can be written in the field */
  maxLength: Scalars["Int"];
  /** a specific pattern can be added as a validation rule */
  pattern?: Maybe<Scalars["String"]>;
  /** media block */
  media?: Maybe<ContentMediaBlockBase>;
};

/** Upload field */
export type ContentFormUpload = ContentFormField & {
  __typename?: "ContentFormUpload";
  /** field type */
  type: ContentFormFieldType;
  /** field name */
  name: Scalars["String"];
  /** field label */
  label?: Maybe<Scalars["String"]>;
  /** field description */
  description?: Maybe<Scalars["String"]>;
  /** determines if the field is required */
  required: Scalars["Boolean"];
  /** maximum items can be added to the upload field */
  maxItems: Scalars["Int"];
  /** media block */
  media?: Maybe<ContentMediaBlockBase>;
};

/** ContentGridLane component */
export type ContentGridLane = ContentBaseCmsComponent & {
  __typename?: "ContentGridLane";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** HeroBanner Component Data */
  data?: Maybe<ContentGridLaneData>;
};

/** Content grid lane Component Data */
export type ContentGridLaneData = {
  __typename?: "ContentGridLaneData";
  /** Content grid lane document UUID */
  documentUUID: Scalars["String"];
  /** Content grid lane Title */
  title?: Maybe<Scalars["String"]>;
  /** Content grid lane items */
  items: Array<ContentGridLaneItem>;
};

/** ContentGridLane Component item */
export type ContentGridLaneItem = {
  __typename?: "ContentGridLaneItem";
  /** Content grid lane item Title */
  title?: Maybe<Scalars["String"]>;
  /** Content grid item body text */
  body?: Maybe<Scalars["String"]>;
  /** Content grid item cta */
  link?: Maybe<ContentLink>;
  /** Content grid item Content Image, containing image description and variants */
  images: ContentImage;
};

/** Half with media monetization lane component */
export type ContentHalfWidthMediaMonetizationLane = ContentBaseCmsComponent & {
  __typename?: "ContentHalfWidthMediaMonetizationLane";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Half with media monetization lane component data */
  data?: Maybe<ContentContentHalfWidthMediaMonetizationLaneData>;
};

/** HeroBanner component */
export type ContentHeroBanner = ContentBaseCmsComponent & {
  __typename?: "ContentHeroBanner";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** HeroBanner Component Data */
  data?: Maybe<ContentHeroBannerData>;
};

/** HeroBanner Component Data */
export type ContentHeroBannerData = {
  __typename?: "ContentHeroBannerData";
  /** HeroBanner Title */
  title?: Maybe<Scalars["String"]>;
  /** HeroBanner Subtitle */
  subtitle?: Maybe<Scalars["String"]>;
  /** HeroBanner Text Color */
  textColor: Scalars["String"];
  /** HeroBanner Image */
  images: Array<ContentImageSet>;
};

/** Content image list of variants and image description */
export type ContentImage = {
  __typename?: "ContentImage";
  /** Image variants */
  variants: Array<ContentImageSet>;
  /** Image description (Used for web as an alter text) */
  description?: Maybe<Scalars["String"]>;
};

/** ImageSet type for Content module */
export type ContentImageSet = {
  __typename?: "ContentImageSet";
  /** Url of the image */
  url: Scalars["String"];
  /** Width of the image in pixels */
  width?: Maybe<Scalars["Int"]>;
  /** Height of the image in pixels */
  height?: Maybe<Scalars["Int"]>;
  /** Image description, alt text */
  description?: Maybe<Scalars["String"]>;
  /** Image size variant */
  variant?: Maybe<ContentImageVariantType>;
};

/** Content image variant */
export enum ContentImageVariantType {
  Smallretina = "SMALLRETINA",
  Small = "SMALL",
  Medium = "MEDIUM",
  Mediumretina = "MEDIUMRETINA",
  Large = "LARGE",
  Largeretina = "LARGERETINA",
  Xlretina = "XLRETINA",
  Xl = "XL",
  Full = "FULL",
  Original = "ORIGINAL",
  Cntphablet = "CNTPHABLET",
  Cntphabletretina = "CNTPHABLETRETINA",
  Cnttablet = "CNTTABLET",
  Cnttabletretina = "CNTTABLETRETINA",
  Cntdesktop = "CNTDESKTOP",
  Cntdesktopretina = "CNTDESKTOPRETINA",
  Scldesktop = "SCLDESKTOP",
  Scldesktopretina = "SCLDESKTOPRETINA",
  Cntdesktophd = "CNTDESKTOPHD",
  Cntdesktophdretina = "CNTDESKTOPHDRETINA",
  Scldesktophd = "SCLDESKTOPHD",
  Scldesktophdretina = "SCLDESKTOPHDRETINA",
  Thumbnail = "THUMBNAIL",
}

/** Content Link */
export type ContentLink = {
  __typename?: "ContentLink";
  /**
   * Content link color
   * @deprecated @sunset_date(2025-07-01) Use theme instead
   * . .
   */
  color?: Maybe<Scalars["String"]>;
  /** Content link theme */
  theme: Scalars["String"];
  /** Content link url */
  href?: Maybe<Scalars["String"]>;
  /** Content link target _blank or _self */
  target?: Maybe<Scalars["String"]>;
  /** Content link title */
  title?: Maybe<Scalars["String"]>;
  /** Content link url used in mobile */
  mobileLink?: Maybe<Scalars["String"]>;
  /** Content link is external mobile link */
  isExternalMobileLink: Scalars["Boolean"];
  /** Content link isExternalLink */
  isExternalLink?: Maybe<Scalars["Boolean"]>;
};

/** Link group component */
export type ContentLinkGroup = ContentBaseCmsComponent & {
  __typename?: "ContentLinkGroup";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Link group data */
  data?: Maybe<ContentLinkGroupData>;
};

/** Link group data */
export type ContentLinkGroupData = {
  __typename?: "ContentLinkGroupData";
  /** Link group document UUID */
  documentUUID: Scalars["String"];
  /** Link group item */
  linkgroups: Array<ContentLinkGroupItem>;
};

/** Link group item */
export type ContentLinkGroupItem = {
  __typename?: "ContentLinkGroupItem";
  /** Navigation title */
  title?: Maybe<Scalars["String"]>;
  /** Navigation links */
  links: Array<ContentLink>;
};

export type ContentLoyaltyCampaign = {
  __typename?: "ContentLoyaltyCampaign";
  /** Loyalty campaign document id */
  documentId: Scalars["String"];
  /** FAQ items */
  faq: ContentLoyaltyCampaignFaq;
  /** Onboarding image set */
  onboardingImageSet?: Maybe<ContentImage>;
  /** Entry point image set */
  entrypointImageSet?: Maybe<ContentImage>;
  /** Entry point title */
  entrypointTitle?: Maybe<Scalars["String"]>;
};

/** Content Loyalty Campaign document */
export type ContentLoyaltyCampaignDocument = {
  __typename?: "ContentLoyaltyCampaignDocument";
  /** Loyalty campaign */
  loyaltyCampaign?: Maybe<ContentLoyaltyCampaign>;
};

export type ContentLoyaltyCampaignFaq = {
  __typename?: "ContentLoyaltyCampaignFAQ";
  /** FAQ - limited to show only 5 */
  questions: Array<ContentLoyaltyCampaignFaqItems>;
  /** See more link that navigates to linked customer service article document */
  seeMoreLink?: Maybe<Scalars["String"]>;
  /** Field to indicate if there are more than 5 FAQs returned from Content Facade */
  hasMoreQuestions?: Maybe<Scalars["Boolean"]>;
};

export type ContentLoyaltyCampaignFaqItems = {
  __typename?: "ContentLoyaltyCampaignFAQItems";
  /** Title of the FAQ Item */
  title: Scalars["String"];
  /** Rich text body of the FAQ Item for web */
  text: Scalars["String"];
};

/** Manual accordion returns items */
export type ContentManualAccordion = {
  __typename?: "ContentManualAccordion";
  /** Accordion title */
  title?: Maybe<Scalars["String"]>;
  /** Accordion items */
  items: Array<ContentAccordionItem>;
  /** Accordion type */
  type: ContentAccordionType;
  /** Content manual document UUID */
  documentUUID: Scalars["String"];
};

/** Marketing Carousel component (A part of CMS PageEntries) */
export type ContentMarketingCarousel = ContentBaseCmsComponent & {
  __typename?: "ContentMarketingCarousel";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Marketing Carousel Component Data */
  data?: Maybe<ContentPageEntriesData>;
};

/** MarketingHeader component */
export type ContentMarketingHeader = ContentBaseCmsComponent & {
  __typename?: "ContentMarketingHeader";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Marketing header data */
  data?: Maybe<ContentMarketingHeaderData>;
};

/** Marketing header data */
export type ContentMarketingHeaderData = {
  __typename?: "ContentMarketingHeaderData";
  /** Content */
  content?: Maybe<Scalars["String"]>;
  /** Content analytics */
  contentAnalytics?: Maybe<Scalars["String"]>;
  /** Content theme */
  contentTheme: Scalars["String"];
  /** Title */
  title: Scalars["String"];
  /** Title analytics */
  titleAnalytics?: Maybe<Scalars["String"]>;
  /** Theme */
  theme?: Maybe<Scalars["String"]>;
  /** Containing image description and variants */
  imageSet: ContentImage;
  /** Containing sticker image description and variants */
  stickerImageSet?: Maybe<ContentImage>;
  /** The primary button */
  primaryButton?: Maybe<ContentArticleButton>;
  /** The secondary button */
  secondaryButton?: Maybe<ContentArticleButton>;
  /** Is sticky button */
  stickyButton: Scalars["Boolean"];
};

/** Media base interface */
export type ContentMediaBlockBase = {
  /** Media type (IMAGE, YOUTUBE, BLUEBILLYWIG) */
  type: ContentMediaBlockType;
};

/** Content media types (IMAGE, YOUTUBE, BLUEBILLYWIG) */
export enum ContentMediaBlockType {
  Image = "IMAGE",
  Youtube = "YOUTUBE",
  Bluebillywig = "BLUEBILLYWIG",
}

/** Media image */
export type ContentMediaImage = ContentMediaBlockBase & {
  __typename?: "ContentMediaImage";
  /** Media type (IMAGE) */
  type: ContentMediaBlockType;
  /** List of image variants and description */
  imageSet: ContentImage;
};

/** Content media monetization slot */
export type ContentMediaMonetizationSlot = {
  __typename?: "ContentMediaMonetizationSlot";
  /** Slot id string */
  id: Scalars["String"];
};

/** Content media monetization targeting */
export type ContentMediaMonetizationTargeting = {
  __typename?: "ContentMediaMonetizationTargeting";
  /** Order mode (1 for true and 0 for false) */
  orderMode?: Maybe<Scalars["String"]>;
  /** Member state code (known = 1 | logged in = 2 | unknown = 3) */
  memberStateCode?: Maybe<Scalars["String"]>;
  /** Member type code */
  memberType?: Maybe<Scalars["String"]>;
  /** GooglePublishingTags (1 for enabled and 0 for disabled) */
  googlePublishTags: Scalars["String"];
  /** Position */
  position: Scalars["String"];
  /** Category, for instance a product category */
  category: Scalars["String"];
};

/** Content media bbw video */
export type ContentMediaVideoBlueBillyWig = ContentMediaBlockBase & {
  __typename?: "ContentMediaVideoBlueBillyWig";
  /** Content media type (BLUEBILLYWIG) */
  type: ContentMediaBlockType;
  /** List of image variants and description */
  imageSet: ContentImage;
  /** BBW player id */
  videoId: Scalars["String"];
  /** This field will be filled by the data from video-service */
  videoData?: Maybe<VideoBbw>;
};

/** Media youtube video */
export type ContentMediaVideoYoutube = ContentMediaBlockBase & {
  __typename?: "ContentMediaVideoYoutube";
  /** Media type (YOUTUBE) */
  type: ContentMediaBlockType;
  /** List of image variants and description */
  imageSet: ContentImage;
  /** Youtube id for player */
  videoId: Scalars["String"];
};

/** CMS MegaMenu Links: Header MegaMenu links groups */
export type ContentMegaMenuLinks = {
  __typename?: "ContentMegaMenuLinks";
  /** Link groups / columns */
  linkGroups: Array<ContentMegaMenuLinksGroup>;
  /** Id */
  id: Scalars["String"];
  /** Type */
  type: Scalars["String"];
};

/** Group of link items with a subject */
export type ContentMegaMenuLinksGroup = {
  __typename?: "ContentMegaMenuLinksGroup";
  /** Link groups / columns */
  links?: Maybe<Array<ContentMegaMenuLinksItem>>;
  /** Subject */
  subject?: Maybe<Scalars["String"]>;
};

/** Link item with title and anchor target */
export type ContentMegaMenuLinksItem = {
  __typename?: "ContentMegaMenuLinksItem";
  /** Link */
  link: Scalars["String"];
  /** Title */
  title: Scalars["String"];
  /** Target */
  target: Scalars["String"];
};

/** CMS MegaMenu Links Arguments */
export type ContentMegaMenuLinksOptions = {
  /** Channel */
  channel?: Maybe<Scalars["String"]>;
  /** Locale */
  locale?: Maybe<Scalars["String"]>;
};

/** ContentArticleDocument */
export type ContentMobileArticleDocument = ContentBaseMobileCmsComponent & {
  __typename?: "ContentMobileArticleDocument";
  /** Meta object for the component */
  meta?: Maybe<ContentMobileComponentMetaObject>;
  /** ID */
  id: Scalars["String"];
  /** Component Type */
  type: ContentBaseMobileCmsComponentType;
  /** Title */
  title: Scalars["String"];
  /** Body */
  body?: Maybe<Scalars["String"]>;
};

/** Meta object for mobile component */
export type ContentMobileComponentMetaObject = {
  __typename?: "ContentMobileComponentMetaObject";
  /** Targeting headers */
  targetedHeaders?: Maybe<Scalars["String"]>;
};

/** Content mobile CMS options */
export type ContentMobileComponentOptions = {
  /** Root Components */
  application?: Maybe<Scalars["String"]>;
  /** Targeting ab headers */
  targetingHeaders?: Maybe<Scalars["String"]>;
  /** Headers used in preview mode */
  contentPreviewingHeaders?: Maybe<Scalars["String"]>;
  /** If user is in order mode or not */
  isOrderMode?: Maybe<Scalars["Boolean"]>;
  /** If user is in order mode then send the orderId otherwise empty */
  orderId?: Maybe<Scalars["Int"]>;
};

/** ContentMobileCuratedLists Component */
export type ContentMobileCuratedLists =
  ContentBaseTargetedContentCmsDocument & {
    __typename?: "ContentMobileCuratedLists";
    /** Meta object for the component */
    meta?: Maybe<ContentMobileComponentMetaObject>;
    /** Curated Lists id */
    id: Scalars["String"];
    /** Component Type */
    type: ContentBaseTargetedContentCmsDocumentType;
    /** Curated Lists data */
    data?: Maybe<ContentCuratedListLaneData>;
  };

/** ImageSet type for Content mobile module TODO: change this into the main content image set */
export type ContentMobileImageSet = {
  __typename?: "ContentMobileImageSet";
  /** Url of the image */
  link: Scalars["String"];
  /** Width of the image in pixels */
  width: Scalars["Int"];
  /** Height of the image in pixels */
  height: Scalars["Int"];
  /** Image mime type */
  mimeType: Scalars["String"];
  /** Image size variant */
  variant?: Maybe<ContentImageVariantType>;
};

/** Next Best Action */
export type ContentMobileNextBestAction = {
  __typename?: "ContentMobileNextBestAction";
  /** Next Best Action link */
  link: Scalars["String"];
  /** Next Best Action is external link */
  isExternalLink: Scalars["Boolean"];
  /** Next Best Action title */
  title: Scalars["String"];
  /** Next Best Action title. Used for analytics. */
  titleAnalytics?: Maybe<Scalars["String"]>;
  /** Next Best Action theme */
  theme?: Maybe<Scalars["String"]>;
  /** Next Best Action images */
  images?: Maybe<ContentImage>;
  /** Next Best Action sticker images */
  stickerImages?: Maybe<ContentImage>;
  /** Next Best Action document UUID */
  documentUUID: Scalars["String"];
  /** Next Best Action campaign tag, configured if linked to a comkal campaign */
  campaignTag?: Maybe<Scalars["String"]>;
  /** Next Best Action proposition tag */
  propositionTag?: Maybe<Scalars["String"]>;
};

/** ContentMobileNextBestActionCard component */
export type ContentMobileNextBestActionCard = {
  __typename?: "ContentMobileNextBestActionCard";
  /** Meta object for the component */
  meta?: Maybe<ContentMobileComponentMetaObject>;
  /** Next Best Action Card */
  nextBestAction: ContentMobileNextBestAction;
};

/** Content Overblijvers Boxes Document */
export type ContentMobileOverblijversBoxesDocument =
  ContentBaseMobileCmsComponent & {
    __typename?: "ContentMobileOverblijversBoxesDocument";
    /** Meta object for the component */
    meta?: Maybe<ContentMobileComponentMetaObject>;
    /** ID */
    id: Scalars["String"];
    /** Component Type */
    type: ContentBaseMobileCmsComponentType;
    /** Title */
    overblijversBoxes: Array<Maybe<ContentOverblijversBox>>;
  };

/** ContentMobilePageEntries component */
export type ContentMobilePageEntries = ContentBaseMobileCmsComponent & {
  __typename?: "ContentMobilePageEntries";
  /** Meta object for the component */
  meta?: Maybe<ContentMobileComponentMetaObject>;
  /** ID */
  id: Scalars["String"];
  /** Component Type */
  type: ContentBaseMobileCmsComponentType;
  /** Render Type */
  renderType: RenderType;
  /** View (only used for normalizing renderType) */
  view: Scalars["String"];
  /** Title */
  title: Scalars["String"];
  /** Page entries */
  pageEntries: Array<ContentMobilePageEntry>;
};

/** Page entry */
export type ContentMobilePageEntry = {
  __typename?: "ContentMobilePageEntry";
  /** Page entry link */
  link: Scalars["String"];
  /** Page entry link type */
  linkType: LinkType;
  /** Page entry is external link */
  isExternalLink: Scalars["Boolean"];
  /** Page entry title */
  title: Scalars["String"];
  /** Title of the page entry. Used for analytics */
  titleAnalytics?: Maybe<Scalars["String"]>;
  /** Page entry subtitle */
  subtitle?: Maybe<Scalars["String"]>;
  /** Subtitle of the page entry. Used for analytics */
  subtitleAnalytics?: Maybe<Scalars["String"]>;
  /** Page entry theme */
  theme?: Maybe<Scalars["String"]>;
  /** Page entry images */
  images: Array<ContentMobileImageSet>;
  /** Page entry sticker image */
  stickerImages: Array<ContentMobileImageSet>;
  /** Page entry document UUID */
  documentUUID: Scalars["String"];
  /** Page entry campaign tag, configured if linked to a comkal campaign */
  campaignTag?: Maybe<Scalars["String"]>;
};

/** ContentMobilePageTemplate component */
export type ContentMobilePageTemplate =
  ContentBaseTargetedContentCmsDocument & {
    __typename?: "ContentMobilePageTemplate";
    /** Meta object for the component */
    meta?: Maybe<ContentMobileComponentMetaObject>;
    /** ID */
    id: Scalars["String"];
    /** Component Type */
    type: ContentBaseTargetedContentCmsDocumentType;
    /** Document UUID */
    documentUUID: Scalars["String"];
    /** Lanes */
    lanes: Array<ContentMobilePageTemplateLane>;
  };

/** Composable home lane */
export type ContentMobilePageTemplateLane = {
  __typename?: "ContentMobilePageTemplateLane";
  /** Lane Type */
  laneType: Scalars["String"];
  /** Lane ID */
  laneId?: Maybe<Scalars["String"]>;
};

/** ContentMobilePropositionHeader component */
export type ContentMobilePropositionHeader = ContentBaseMobileCmsComponent & {
  __typename?: "ContentMobilePropositionHeader";
  /** Meta object for the component */
  meta?: Maybe<ContentMobileComponentMetaObject>;
  /** ID */
  id: Scalars["String"];
  /** Component Type */
  type: ContentBaseMobileCmsComponentType;
  /** Title */
  title: Scalars["String"];
  /** Subtitle */
  subtitle?: Maybe<Scalars["String"]>;
  /** Landscape images */
  landscapeImage: Array<ContentMobileImageSet>;
  /** Portrait image */
  portraitImage: Array<ContentMobileImageSet>;
  /** Sticker image */
  sticker?: Maybe<Array<ContentMobileImageSet>>;
};

/** ContentSmartLane component */
export type ContentMobileSmartPromotions =
  ContentBaseTargetedContentCmsDocument & {
    __typename?: "ContentMobileSmartPromotions";
    /** Meta object for the component */
    meta?: Maybe<ContentMobileComponentMetaObject>;
    /** ID */
    id: Scalars["String"];
    /** Component Type */
    type: ContentBaseTargetedContentCmsDocumentType;
    /** Bonus Lane Component Data */
    data?: Maybe<ContentBonusLaneData>;
  };

/** ContentMobileSpotlightList Component */
export type ContentMobileSpotlightList =
  ContentBaseTargetedContentCmsDocument & {
    __typename?: "ContentMobileSpotlightList";
    /** Meta object for the component */
    meta?: Maybe<ContentMobileComponentMetaObject>;
    /** SpotlightList id */
    id: Scalars["String"];
    /** Component Type */
    type: ContentBaseTargetedContentCmsDocumentType;
    /** SpotlightList data */
    data?: Maybe<ContentSpotlightListData>;
    /**
     * Document UUID of the spotlight card (deprecated)
     * @deprecated @sunset_date(2024-10-21) Use 'documentUUID' field in 'data' object instead
     * . .
     */
    documentUUID: Scalars["String"];
    /**
     * Title of the spotlight list (deprecated)
     * @deprecated @sunset_date(2024-10-21) Use 'title' field in 'data' object instead
     * . .
     */
    title?: Maybe<Scalars["String"]>;
    /**
     * Title analytics (deprecated)
     * @deprecated @sunset_date(2024-10-21) Use 'titleAnalytics' field in 'data' object instead
     * . .
     */
    titleAnalytics?: Maybe<Scalars["String"]>;
    /**
     * Items of the spotlight list (deprecated)
     * @deprecated @sunset_date(2024-10-21) Use 'spotlightCards' field in 'data' object instead
     * . .
     */
    spotlightCards?: Maybe<Array<ContentSpotlightCard>>;
  };

/** CMS Opt In */
export type ContentOptIn = {
  __typename?: "ContentOptIn";
  /** Title */
  title: Scalars["String"];
  /** Introduction (web) */
  introduction: Scalars["String"];
  /** Mobile introduction */
  mobileIntroduction: Scalars["String"];
  /** Closing text (web) */
  closingText: Scalars["String"];
  /** Mobile closing text */
  mobileClosingText: Scalars["String"];
  /** Opt in compounds */
  optIns: Array<ContentOptInCompound>;
  /** Type */
  type: Scalars["String"];
};

/** Content Opt In Compound */
export type ContentOptInCompound = {
  __typename?: "ContentOptInCompound";
  /** ID */
  id: Scalars["String"];
  /** Text (web) */
  text: Scalars["String"];
  /** Mobile text */
  mobileText: Scalars["String"];
};

/** CMS Opt In Arguments */
export type ContentOptInOptions = {
  /** Channel */
  channel?: Maybe<Scalars["String"]>;
};

/** Content Overblijvers Boxes */
export type ContentOverblijversBox = {
  __typename?: "ContentOverblijversBox";
  /** Image */
  image: ContentMobileImageSet;
  /** Avatar */
  avatar: ContentMobileImageSet;
  /** Box Type */
  boxType: Scalars["String"];
  /** Title */
  title: Scalars["String"];
  /** Description */
  description: Scalars["String"];
  /** Allergies */
  allergies: Scalars["String"];
  /** Background color */
  backgroundColor: Scalars["String"];
};

/** CMS Page */
export type ContentPage = {
  __typename?: "ContentPage";
  /** Page Submenu */
  submenu?: Maybe<ContentSubmenu>;
  /** Root Components */
  components: Array<ContentRootComponent>;
  /** This field contains a list of parents used for Allerhande breadcrumbs */
  parents: Array<ContentParent>;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** This field contains meta data that is needed for SEO purposes (title, description, etc) */
  pageMeta: ContentPageMeta;
  /** error with status code and status message */
  error?: Maybe<ContentError>;
};

/** PageEntries Component Data */
export type ContentPageEntriesData = {
  __typename?: "ContentPageEntriesData";
  /** Page entries title */
  title?: Maybe<Scalars["String"]>;
  /** Page entry see more link */
  seeMoreLink?: Maybe<ContentLink>;
  /**
   * Page entry items
   * @deprecated @sunset_date(2023-12-31) this key can cause gql validation issues in combination with other components using the same key, use `entries` instead
   * . entries.
   */
  items: Array<ContentPageEntry>;
  /** Page entry items */
  entries: Array<ContentPageEntry>;
  /** Type, used for smart marketing carousel */
  type?: Maybe<Scalars["String"]>;
};

/** ContentPageEntriesDocument component */
export type ContentPageEntriesDocument =
  ContentBaseTargetedContentCmsDocument & {
    __typename?: "ContentPageEntriesDocument";
    /** Meta object for the component */
    meta?: Maybe<ContentMobileComponentMetaObject>;
    /** ID */
    id: Scalars["String"];
    /** Component Type */
    type: ContentBaseTargetedContentCmsDocumentType;
    /** Render Type */
    renderType: RenderType;
    /** View (only used for normalizing renderType) */
    view: Scalars["String"];
    /** Title */
    title: Scalars["String"];
    /** Page entries */
    pageEntries: Array<ContentPageEntryDocument>;
  };

/** Page entry item */
export type ContentPageEntry = {
  __typename?: "ContentPageEntry";
  /** Page entry href */
  href?: Maybe<Scalars["String"]>;
  /** Page entry mobileLink */
  mobileLink?: Maybe<Scalars["String"]>;
  /** Page entry isExternalLink */
  isExternalLink: Scalars["Boolean"];
  /** Page entry title */
  title: Scalars["String"];
  /** Title of the page entry. Used for analytics */
  titleAnalytics?: Maybe<Scalars["String"]>;
  /** Page entry subtitle */
  subtitle?: Maybe<Scalars["String"]>;
  /** Subtitle of the page entry. Used for analytics */
  subtitleAnalytics?: Maybe<Scalars["String"]>;
  /** Page entry theme */
  theme?: Maybe<Scalars["String"]>;
  /** Page entry images */
  images: ContentImage;
  /** Page entry sticker image */
  stickerImages?: Maybe<ContentImage>;
  /** Page entry document UUID */
  documentUUID: Scalars["String"];
  /** Page entry campaign tag */
  campaignTag?: Maybe<Scalars["String"]>;
  /** type of the link (Used for mobile) */
  linkType: LinkType;
};

/** Page entry */
export type ContentPageEntryDocument = {
  __typename?: "ContentPageEntryDocument";
  /** Page entry link */
  link: Scalars["String"];
  /** Page entry link type */
  linkType: LinkType;
  /** Page entry is external link */
  isExternalLink: Scalars["Boolean"];
  /** Page entry title */
  title: Scalars["String"];
  /** Title of the page entry. Used for analytics */
  titleAnalytics?: Maybe<Scalars["String"]>;
  /** Page entry subtitle */
  subtitle?: Maybe<Scalars["String"]>;
  /** Subtitle of the page entry. Used for analytics */
  subtitleAnalytics?: Maybe<Scalars["String"]>;
  /** Page entry theme */
  theme?: Maybe<Scalars["String"]>;
  /** Page entry images */
  images: Array<ContentMobileImageSet>;
  /** Page entry sticker image */
  stickerImages: Array<ContentMobileImageSet>;
  /** Page entry document UUID */
  documentUUID: Scalars["String"];
  /** Page entry campaign tag, configured if linked to a comkal campaign */
  campaignTag?: Maybe<Scalars["String"]>;
};

/** Page meta data (Used in frontend for SEO Purposes) */
export type ContentPageMeta = {
  __typename?: "ContentPageMeta";
  /** Page title */
  title: Scalars["String"];
  /** Page description */
  description: Scalars["String"];
  /** Page index */
  index: Scalars["Boolean"];
  /** Page follow */
  follow: Scalars["Boolean"];
  /** Page jsonLD */
  jsonLD?: Maybe<Scalars["String"]>;
  /** Page canonical */
  canonical?: Maybe<Scalars["String"]>;
  /** Page theme (Used in html tag) */
  theme?: Maybe<Scalars["String"]>;
};

/** CMS Page Arguments */
export type ContentPageOptions = {
  /** Channel */
  channel?: Maybe<Scalars["String"]>;
  /** View Date (YYYY-MM-DD) */
  viewDate?: Maybe<Scalars["String"]>;
  /** Maximum components to be fully returned */
  maxComponentsToFullyReturn?: Maybe<Scalars["Int"]>;
  /** If user is in order mode or not */
  isOrderMode?: Maybe<Scalars["Boolean"]>;
  /** If user is in order mode then send the orderId otherwise empty */
  orderId?: Maybe<Scalars["Int"]>;
  /** Set the max amount of previously bought products returned in the bonus lane component */
  size?: Maybe<Scalars["Int"]>;
};

/** Page parent (used for breadcrumbs) */
export type ContentParent = {
  __typename?: "ContentParent";
  /** Page parent name */
  name: Scalars["String"];
  /** Page parent link */
  link: Scalars["String"];
};

/** Content placeholder */
export type ContentPlaceholder = ContentBaseCmsComponent & {
  __typename?: "ContentPlaceholder";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Content Data */
  data?: Maybe<ContentPlaceholderData>;
};

/** Placeholder data */
export type ContentPlaceholderData = {
  __typename?: "ContentPlaceholderData";
  /** Title */
  title?: Maybe<Scalars["String"]>;
};

/** Preview data is needed for CMS experience manager */
export type ContentPreviewData = {
  __typename?: "ContentPreviewData";
  /**
   * Contains the CMS meta-data for enabling drag-and-drop in Preview Mode, only used internally by the library
   * This should be added right before the DOM element representing the component or container
   */
  begin?: Maybe<Scalars["String"]>;
  /**
   * Contains the CMS meta-data for enabling drag-and-drop in Preview Mode, only used internally by the library
   * This should be added right after the DOM element representing the component or container
   */
  end?: Maybe<Scalars["String"]>;
  /** Contains the CMS meta-data for adding a link for each component that gives document details */
  contentLink?: Maybe<Scalars["String"]>;
  /** This field is used to make a component visible or invisible in the CMS experience manager */
  visible: Scalars["Boolean"];
};

/** ProductLane Component */
export type ContentProductLane = ContentBaseCmsComponent & {
  __typename?: "ContentProductLane";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Productlane Component Data */
  data?: Maybe<ContentProductLaneData>;
};

/** Productlane Component Data */
export type ContentProductLaneData = {
  __typename?: "ContentProductLaneData";
  /** Products */
  products: Array<Product>;
  /** Number of rows */
  rows?: Maybe<Scalars["Int"]>;
  /** Is Scrollable */
  scrollable: Scalars["Boolean"];
  /** Subtitle */
  subtitle?: Maybe<Scalars["String"]>;
  /** Title */
  title?: Maybe<Scalars["String"]>;
  /** Anchor label, for clickable link on allerhande pages */
  anchorLabel?: Maybe<Scalars["String"]>;
  /** Search term for page with products behind "see more" button */
  searchTerm?: Maybe<Scalars["String"]>;
  /** Link that is used for "see more" functionality */
  link?: Maybe<ContentLink>;
  /** In case an error happens in the product search service, this field will be true */
  serviceError: Scalars["Boolean"];
};

/** ProductSegmentLane Component Data */
export type ContentProductSegmentLaneData = {
  __typename?: "ContentProductSegmentLaneData";
  /** Segment ID */
  segmentId: Scalars["String"];
  /** Show in stock products */
  showInStockProducts: Scalars["Boolean"];
  /** Products */
  products: Array<Product>;
  /** Is Scrollable */
  scrollable: Scalars["Boolean"];
  /** Subtitle */
  subtitle?: Maybe<Scalars["String"]>;
  /** Title */
  title?: Maybe<Scalars["String"]>;
  /** Link that is used for "see more" functionality */
  link?: Maybe<ContentLink>;
  /** In case an error happens in the product search service, this field will be true */
  serviceError: Scalars["Boolean"];
};

/** Product suggestions for curated list components */
export type ContentProductSuggestion = {
  __typename?: "ContentProductSuggestion";
  /** Name of the suggestion */
  name: Scalars["String"];
  /** Description of the suggestion (e.g. 2 mg <product-name>) */
  description: Scalars["String"];
  /** Label of the suggestion (e.g. Voor 2 mg <product-name>) */
  label: Scalars["String"];
  /** The product and its quantity */
  selectedProduct?: Maybe<ContentQuantifiedProduct>;
  /** Alternative products for selectedProduct */
  alternativeProducts?: Maybe<
    Array<Maybe<ContentProductSuggestionAlternative>>
  >;
};

/** The alternative product suggestions with ContentQuantifiedProduct */
export type ContentProductSuggestionAlternative = {
  __typename?: "ContentProductSuggestionAlternative";
  /** Title of the alternative list */
  title: Scalars["String"];
  /** Description of the alternative list */
  description?: Maybe<Scalars["String"]>;
  /** The product and its quantity */
  products?: Maybe<Array<Maybe<ContentQuantifiedProduct>>>;
};

/** Content promotion object */
export type ContentPromotion = {
  __typename?: "ContentPromotion";
  /** Content media monetization slot */
  slot: ContentMediaMonetizationSlot;
  /** Content media monetization targeting */
  targeting: ContentMediaMonetizationTargeting;
  /** Media monetization type */
  type: Scalars["String"];
};

/** ContentPropositionHeader component */
export type ContentPropositionHeader = ContentBaseCmsComponent & {
  __typename?: "ContentPropositionHeader";
  /** ID */
  id: Scalars["String"];
  /** Component Type */
  type: ContentCmsComponentType;
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Content Proposition Header Data */
  data?: Maybe<ContentPropositionHeaderData>;
};

/** ContentPropositionHeader component data */
export type ContentPropositionHeaderData = {
  __typename?: "ContentPropositionHeaderData";
  /** Main title of the banner */
  title: Scalars["String"];
  /** Subtitle of the banner */
  subtitle?: Maybe<Scalars["String"]>;
  /** Landscape image of the banner */
  landscapeImage?: Maybe<ContentImage>;
  /** Portrait image of the banner */
  portraitImage?: Maybe<ContentImage>;
  /** Sticker image of the banner */
  sticker?: Maybe<ContentImage>;
};

/** ContentPropositionHeaderDocument component */
export type ContentPropositionHeaderDocument =
  ContentBaseTargetedContentCmsDocument & {
    __typename?: "ContentPropositionHeaderDocument";
    /** Meta object for the component */
    meta?: Maybe<ContentMobileComponentMetaObject>;
    /** ID */
    id: Scalars["String"];
    /** Component Type */
    type: ContentBaseTargetedContentCmsDocumentType;
    /** Title */
    title: Scalars["String"];
    /** Subtitle */
    subtitle?: Maybe<Scalars["String"]>;
    /** Landscape images */
    landscapeImage: Array<ContentMobileImageSet>;
    /** Portrait image */
    portraitImage: Array<ContentMobileImageSet>;
    /** Sticker image */
    sticker?: Maybe<Array<ContentMobileImageSet>>;
  };

/**
 * The product and its quantity
 * If the product exist then it should always have a quantity
 */
export type ContentQuantifiedProduct = {
  __typename?: "ContentQuantifiedProduct";
  /** Quantity (number of products) */
  quantity: Scalars["Int"];
  /** Product object assigned to the vague term */
  product: Product;
};

/** Queryable recipe lane component */
export type ContentQueryableRecipeLane = ContentBaseCmsComponent & {
  __typename?: "ContentQueryableRecipeLane";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Smart lane Component Data */
  data?: Maybe<ContentQueryableRecipeLaneData>;
};

/** Smartlane Queryable Recipe lane data */
export type ContentQueryableRecipeLaneData = {
  __typename?: "ContentQueryableRecipeLaneData";
  /** Recipe lane title */
  title?: Maybe<Scalars["String"]>;
  /** Recipe lane link */
  link?: Maybe<ContentLink>;
  /** Recipe lane query (This field is used to send a request to recipe search service) */
  recipeQuery?: Maybe<RecipeThemeSearchParams>;
  /** Recipe lane items */
  items: Array<RecipeSummary>;
  /** In case an error happens in the recipe service, this field will be true */
  serviceError: Scalars["Boolean"];
};

/** CMS Resource bundle which contains a list of key/values as labels for translations */
export type ContentResourceBundle = {
  __typename?: "ContentResourceBundle";
  /** Resource bundle document id */
  id: Scalars["String"];
  /** List of labels (translations) */
  labels: Array<ContentResourceBundleLabel>;
  /** Locale (nl_NL/nl_BE) */
  locale: Scalars["String"];
};

/** Resource bundle label */
export type ContentResourceBundleLabel = {
  __typename?: "ContentResourceBundleLabel";
  /** Resource bundle key */
  key: Scalars["String"];
  /** Resource bundle value (translation) */
  value: Scalars["String"];
};

/** Resource bundle input options */
export type ContentResourceBundleOptions = {
  /**
   * Resource bundle input locale
   * Default is set to nl_NL
   */
  locale?: Maybe<Scalars["String"]>;
};

/** Rich content component */
export type ContentRichContent = ContentBaseCmsComponent & {
  __typename?: "ContentRichContent";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Rich content data */
  data?: Maybe<ContentRichContentData>;
};

/** Rich content data */
export type ContentRichContentData = {
  __typename?: "ContentRichContentData";
  /** Rich content document uuid */
  documentUUID: Scalars["String"];
  /** Rich content title */
  title?: Maybe<Scalars["String"]>;
  /** List of products inside rich content */
  products: Array<Product>;
  /** Title of products section */
  itemsTitle?: Maybe<Scalars["String"]>;
  /** Rich content text */
  body: Scalars["String"];
  /** Mobile will use this property to display a page with products behind the More button. */
  searchTerm?: Maybe<Scalars["String"]>;
  /** Rich content link */
  link?: Maybe<ContentLink>;
  /** Rich content images */
  images?: Maybe<ContentImage>;
  /** This image field is used in mobile for the rich content first screen */
  cardImage?: Maybe<ContentImage>;
  /** Media image or video */
  media?: Maybe<ContentMediaBlockBase>;
};

/** Root Component (e.g. Submenu, Component) */
export type ContentRootComponent = {
  __typename?: "ContentRootComponent";
  /** ID Component Types */
  id: Scalars["String"];
  /** Root Component Types */
  type: ContentComponentType;
  /** Name of the container component (can be used for frontend to display components in different containers) */
  name: Scalars["String"];
  /** CMS Component Types */
  items: Array<ContentBaseCmsComponent>;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
};

/** Search accordion returns items and hasMoreItems */
export type ContentSearchAccordion = {
  __typename?: "ContentSearchAccordion";
  /** Accordion title */
  title?: Maybe<Scalars["String"]>;
  /** Accordion search term */
  searchTerm: Scalars["String"];
  /** Accordion items */
  items: Array<ContentAccordionItem>;
  /** Accordion if there are more items based on searchterm */
  hasMoreItems?: Maybe<Scalars["Boolean"]>;
  /** Accordion type */
  type: ContentAccordionType;
  /** Content manual document UUID */
  documentUUID: Scalars["String"];
};

/** ShopHeader component */
export type ContentShopHeader = ContentBaseCmsComponent & {
  __typename?: "ContentShopHeader";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Shop header data */
  data?: Maybe<ContentShopHeaderData>;
};

/** Shop header data */
export type ContentShopHeaderData = {
  __typename?: "ContentShopHeaderData";
  /** Title */
  title: Scalars["String"];
  /** Title analytics */
  titleAnalytics?: Maybe<Scalars["String"]>;
  /** Subtitle */
  subtitle?: Maybe<Scalars["String"]>;
  /** Subtitle analytics */
  subtitleAnalytics?: Maybe<Scalars["String"]>;
  /** Theme */
  theme?: Maybe<Scalars["String"]>;
  /** Containing image description and variants */
  imageSet: ContentImage;
  /** Containing sticker image description and variants */
  stickerImageSet?: Maybe<ContentImage>;
  /** The primary button */
  primaryButton?: Maybe<ContentArticleButton>;
};

/** Shop in Shop component */
export type ContentShopInShop = ContentBaseCmsComponent & {
  __typename?: "ContentShopInShop";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Type */
  type: ContentCmsComponentType;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Shop in Shop Component Data */
  data?: Maybe<ContentShopInShopData>;
};

/** Shop in Shop Component Data */
export type ContentShopInShopData = {
  __typename?: "ContentShopInShopData";
  /** Shop in Shop document UUID */
  documentUUID: Scalars["String"];
  /** Shop in shop Title */
  title?: Maybe<Scalars["String"]>;
  /** Shop in Shop items */
  items?: Maybe<Array<Maybe<ContentShopInShopItem>>>;
};

/** Shop in Shop item */
export type ContentShopInShopItem = {
  __typename?: "ContentShopInShopItem";
  /** Title */
  title?: Maybe<Scalars["String"]>;
  /** Link */
  link?: Maybe<ContentLink>;
  /** Background color */
  bgColor?: Maybe<Scalars["String"]>;
  /** Image set */
  images?: Maybe<ContentImage>;
  /** Sticker */
  sticker?: Maybe<Scalars["String"]>;
};

/** Spotlight Item */
export type ContentSpotlightCard = {
  __typename?: "ContentSpotlightCard";
  /** Document UUID of the spotlight card */
  documentUUID: Scalars["String"];
  /** Title of the spotlight item */
  title: Scalars["String"];
  /** Title analytics */
  titleAnalytics?: Maybe<Scalars["String"]>;
  /** Subtitle of the spotlight item */
  subtitle: Scalars["String"];
  /** Subtitle analytics */
  subtitleAnalytics?: Maybe<Scalars["String"]>;
  /** Link of the spotlight item */
  link: ContentLink;
  /**
   * External link
   * @deprecated @sunset_date(2024-12-21) (last version 8.82) - duplicate
   * . Use link.isExternalLink instead.
   */
  isExternalLink: Scalars["Boolean"];
  /**
   * Is External mobile link
   * @deprecated @sunset_date(2024-12-21) (last version 8.82) - duplicate
   * . Use link.isExternalMobileLink instead.
   */
  isExternalMobileLink: Scalars["Boolean"];
  /** Render type of the visual */
  renderType: ContentSpotlightVisualRenderType;
  /**
   * Visual of the spotlight item
   * @deprecated @sunset_date(2024-12-21) (last version 8.82) - new structure in visualV2
   * . Use 'visual2' instead.
   */
  visual: ContentSpotlightVisual;
  /** Visual of the spotlight item */
  visualV2: ContentSpotlightVisualV2;
  /** Sticker image of the spotlight item */
  sticker?: Maybe<ContentImage>;
};

/** Spotlight Cover Visual */
export type ContentSpotlightCoverVisual = ContentSpotlightVisualV2 & {
  __typename?: "ContentSpotlightCoverVisual";
  /** Long image set of the visual */
  image: ContentImage;
  /** Short image set of the visual */
  shortImage: ContentImage;
};

/** SpotlightList Component */
export type ContentSpotlightList = ContentBaseCmsComponent & {
  __typename?: "ContentSpotlightList";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** SpotlightList Component Data */
  data?: Maybe<ContentSpotlightListData>;
};

/** SpotlightList Component Data */
export type ContentSpotlightListData = {
  __typename?: "ContentSpotlightListData";
  /** Content spotlight list document UUID */
  documentUUID: Scalars["String"];
  /** Title of the spotlight list */
  title?: Maybe<Scalars["String"]>;
  /** Title analytics */
  titleAnalytics?: Maybe<Scalars["String"]>;
  /** Items of the spotlight list */
  spotlightCards?: Maybe<Array<ContentSpotlightCard>>;
};

/** Spotlight Packshot Visual */
export type ContentSpotlightPackshotVisual = ContentSpotlightVisualV2 & {
  __typename?: "ContentSpotlightPackshotVisual";
  /** Image set of the visual */
  image: ContentImage;
  /** Theme of the visual */
  theme: Scalars["String"];
};

/** Spotlight Visual */
export type ContentSpotlightVisual = {
  __typename?: "ContentSpotlightVisual";
  /**
   * Render type of the visual
   * @deprecated @sunset_date(2024-12-21) (last version 8.82) - moved
   * . Use 'ContentSpotlightCard.renderType' instead.
   */
  renderType: ContentSpotlightVisualRenderType;
  /**
   * Image set of the visual
   * @deprecated @sunset_date(2024-12-21) (last version 8.82) - moved
   * . Use 'ContentSpotlightCoverVisual.image' or 'ContentSpotlightPackshotVisual.image' instead.
   */
  image?: Maybe<ContentImage>;
  /**
   * Short image set of the visual
   * @deprecated @sunset_date(2024-12-21) (last version 8.82) - moved
   * . Use 'ContentSpotlightCoverVisual.shortImage' instead.
   */
  shortImage?: Maybe<ContentImage>;
  /**
   * Long image set of the visual
   * @deprecated @sunset_date(2024-12-21) (last version 8.82) - moved
   * . Use 'ContentSpotlightCoverVisual.image' instead.
   */
  longImage?: Maybe<ContentImage>;
  /**
   * Theme of the visual
   * @deprecated @sunset_date(2024-12-21) (last version 8.82) - moved
   * .  Use 'ContentSpotlightPackshotVisual.theme' instead.
   */
  theme?: Maybe<Scalars["String"]>;
};

/** Content image render type */
export enum ContentSpotlightVisualRenderType {
  /** Image is rendered as a cover or packshot */
  Cover = "COVER",
  Packshot = "PACKSHOT",
}

/** Spotlight Visual */
export type ContentSpotlightVisualV2 = {
  /** Image set of the visual */
  image?: Maybe<ContentImage>;
};

/** Submenu component */
export type ContentSubmenu = {
  __typename?: "ContentSubmenu";
  /** Submenu name */
  name?: Maybe<Scalars["String"]>;
  /** Submenu name */
  id?: Maybe<Scalars["String"]>;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Submenu data */
  data?: Maybe<ContentSubmenuData>;
};

/** Submenu Component Data */
export type ContentSubmenuData = {
  __typename?: "ContentSubmenuData";
  /** Submenu navigation items */
  items: Array<ContentSubmenuItem>;
  /** Submenu header */
  header?: Maybe<ContentSubmenuHeader>;
};

/** Submenu header focus point */
export enum ContentSubmenuFocusPoint {
  Right = "RIGHT",
  Center = "CENTER",
  Left = "LEFT",
}

/** Submenu header */
export type ContentSubmenuHeader = {
  __typename?: "ContentSubmenuHeader";
  /** Submenu title */
  title: Scalars["String"];
  /** Submenu header image focus point (On FE styles will be changed based on this value) */
  focusPoint: ContentSubmenuFocusPoint;
  /** Submenu header image */
  image: ContentImage;
};

/** Submenu navigation item */
export type ContentSubmenuItem = {
  __typename?: "ContentSubmenuItem";
  /** Navigation title */
  label: Scalars["String"];
  /** Navigation expanded */
  expanded: Scalars["Boolean"];
  /** Navigation selected */
  selected: Scalars["Boolean"];
  /** Navigation url */
  href?: Maybe<Scalars["String"]>;
  /** A navigation can have nested menus */
  items?: Maybe<Array<ContentSubmenuItem>>;
};

/** Supershops component (A part of CMS PageEntries) */
export type ContentSuperShops = ContentBaseCmsComponent & {
  __typename?: "ContentSuperShops";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Supershops Component Data */
  data?: Maybe<ContentPageEntriesData>;
};

/** Content CMS targeted document options */
export type ContentTargetedDocumentOptions = {
  /** The full path of the document */
  path?: Maybe<Scalars["String"]>;
  /** The hippo channel you want to retrieve the page for */
  channel?: Maybe<Scalars["String"]>;
  /**
   * View date, defaults to today's date. If an active order is present, the requested view date is overruled and set to the delivery date of the order.
   * (format YYYY-MM-DD)
   */
  viewDate?: Maybe<Scalars["String"]>;
  /** The locale for which channel you want to retrieve a page for */
  locale?: Maybe<Scalars["String"]>;
  /** Root Components */
  application?: Maybe<Scalars["String"]>;
  /** If user is in order mode or not */
  isOrderMode?: Maybe<Scalars["Boolean"]>;
  /** If user is in order mode then send the orderId otherwise empty */
  orderId?: Maybe<Scalars["Int"]>;
  /** Set the max amount of previously bought products returned in the smart promotions lane component */
  size?: Maybe<Scalars["Int"]>;
};

/** Themes configuration */
export type ContentThemeConfiguration = {
  __typename?: "ContentThemeConfiguration";
  /** Theme name */
  theme: Scalars["String"];
  /** Primary color hex */
  primaryColor?: Maybe<Scalars["String"]>;
  /** Secondary color hex */
  secondaryColor?: Maybe<Scalars["String"]>;
  /** Text color */
  textColor?: Maybe<Scalars["String"]>;
  /** Background image set */
  backgroundImage?: Maybe<Array<ContentMobileImageSet>>;
};

/** Themes configurations */
export type ContentThemesConfiguration = {
  __typename?: "ContentThemesConfiguration";
  /** Themes configurations list */
  themesConfiguration: Array<ContentThemeConfiguration>;
};

/** Content Title */
export type ContentTitle = ContentBaseCmsComponent & {
  __typename?: "ContentTitle";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Content Title Data */
  data?: Maybe<ContentTitleData>;
};

/** Content Title Data */
export type ContentTitleData = {
  __typename?: "ContentTitleData";
  /** Title */
  title?: Maybe<Scalars["String"]>;
  /** has extra spacing on the left and right side */
  hasOffset?: Maybe<Scalars["Boolean"]>;
};

/** Content usp */
export type ContentUsp = {
  __typename?: "ContentUsp";
  /** Usp title */
  name: Scalars["String"];
  /** Usp Link */
  link: Scalars["String"];
};

/** Content usp group */
export type ContentUspGroup = ContentBaseTargetedContentCmsDocument & {
  __typename?: "ContentUspGroup";
  /** Meta object for the document */
  meta?: Maybe<ContentMobileComponentMetaObject>;
  /** Component Type */
  type: ContentBaseTargetedContentCmsDocumentType;
  /** Usp group id */
  id: Scalars["String"];
  /** Usp group title */
  title?: Maybe<Scalars["String"]>;
  /** Usp theme color */
  themeColor?: Maybe<Scalars["String"]>;
  /** Usp group link */
  link?: Maybe<Scalars["String"]>;
  /** List of usps */
  uspList: Array<ContentUsp>;
};

/** This property will be filled when the form end date is in the past */
export type ExpiredNotification = {
  __typename?: "ExpiredNotification";
  /** Expired title */
  title: Scalars["String"];
  /** Expired description */
  description: Scalars["String"];
};

/** Link type */
export enum LinkType {
  Deeplink = "DEEPLINK",
  ProductShelf = "PRODUCT_SHELF",
  Recipe = "RECIPE",
  ThemePage = "THEME_PAGE",
  Unknown = "UNKNOWN",
  Url = "URL",
  Webflow = "WEBFLOW",
}

/** The quote image alignment (left/right) */
export enum QuoteImageAlignmentType {
  Left = "LEFT",
  Right = "RIGHT",
}

/** Render type */
export enum RenderType {
  MarketingCarousel = "MARKETING_CAROUSEL",
  Supershops = "SUPERSHOPS",
  Unknown = "UNKNOWN",
}

/** A conversation */
export type Conversation = {
  __typename?: "Conversation";
  /** The Id of the conversation */
  id: Scalars["String"];
  /** If available, some context of the member */
  memberContext: ConversationMemberContext;
  /** The status of the conversation */
  status: ConversationStatus;
  /** All conversation events */
  events: Array<ConversationEvent>;
};

/** List of events that can be in a conversation */
export type ConversationEvent =
  | ConversationHandlerMessageSentEvent
  | ConversationHandlerTableSentEvent
  | ConversationHandlerLinkListSentEvent
  | ConversationHandlerFileSentEvent
  | ConversationMemberMessageSentEvent
  | ConversationMemberFileSentEvent;

/** Available event types in a conversation */
export enum ConversationEventType {
  HandlerMessageSentEvent = "HANDLER_MESSAGE_SENT_EVENT",
  HanlderTableSentEvent = "HANLDER_TABLE_SENT_EVENT",
  HandlerLinkListSentEvent = "HANDLER_LINK_LIST_SENT_EVENT",
  HandlerFileSentEvent = "HANDLER_FILE_SENT_EVENT",
  MemberMessageSentEvent = "MEMBER_MESSAGE_SENT_EVENT",
  MemberFileSentEvent = "MEMBER_FILE_SENT_EVENT",
}

/** Short living url for files */
export type ConversationFileUrl = {
  __typename?: "ConversationFileUrl";
  /** File id */
  id: Scalars["String"];
  /** File url. Url is valid for 5 seconds */
  url: Scalars["String"];
};

/** File with urls */
export type ConversationFiles = {
  __typename?: "ConversationFiles";
  /** files with urls */
  files: Array<ConversationFileUrl>;
};

/** File event from handler */
export type ConversationHandlerFileSentEvent = {
  __typename?: "ConversationHandlerFileSentEvent";
  /** id */
  id: Scalars["String"];
  /** timestamp */
  createdAt: Scalars["String"];
  /** Id of the file */
  fileId: Scalars["String"];
  /** type */
  type: ConversationEventType;
  /** handler name */
  handlerName: Scalars["String"];
  /** the content type of the file */
  contentType: Scalars["String"];
};

/** A link list send by the handler of the conversation */
export type ConversationHandlerLinkListSentEvent = {
  __typename?: "ConversationHandlerLinkListSentEvent";
  /** id */
  id: Scalars["String"];
  /** event type */
  type: ConversationEventType;
  /** timestamp */
  createdAt: Scalars["String"];
  /** Name of the handler */
  handlerName: Scalars["String"];
  /** A list of hyper links */
  links: Array<ConversationLinkListHyperLink>;
};

/** Handler message message */
export type ConversationHandlerMessage = {
  __typename?: "ConversationHandlerMessage";
  /** text */
  text: Scalars["String"];
};

/** Conversation event corresponding to a message sent by the message handler */
export type ConversationHandlerMessageSentEvent = {
  __typename?: "ConversationHandlerMessageSentEvent";
  /** id */
  id: Scalars["String"];
  /** timestamp */
  createdAt: Scalars["String"];
  /** handler name */
  handlerName: Scalars["String"];
  /** conversation message */
  message: ConversationHandlerMessage;
  /** event type */
  type: ConversationEventType;
};

/** A table message send by the handler of the conversation */
export type ConversationHandlerTableSentEvent = {
  __typename?: "ConversationHandlerTableSentEvent";
  /** id */
  id: Scalars["String"];
  /** event type */
  type: ConversationEventType;
  /** timestamp */
  createdAt: Scalars["String"];
  /** Name of the handler */
  handlerName: Scalars["String"];
  /** Table headers */
  header: Array<Maybe<Scalars["String"]>>;
  /** Table rows */
  rows: Array<Array<Maybe<Scalars["String"]>>>;
  /** Table footer */
  footer: Array<Maybe<Scalars["String"]>>;
};

/** the type of link */
export enum ConversationHyperLinkType {
  /** standard */
  Standard = "STANDARD",
  /** highlighted */
  Highlight = "HIGHLIGHT",
}

/** Hyper link send by the Digital Assistant */
export type ConversationLinkListHyperLink = {
  __typename?: "ConversationLinkListHyperLink";
  /** Hypertext Reference */
  href: Scalars["String"];
  /** The text to display */
  text: Scalars["String"];
  /** the type of link */
  type: ConversationHyperLinkType;
};

/** Member context */
export type ConversationMemberContext = {
  __typename?: "ConversationMemberContext";
  /** The member Id */
  memberId?: Maybe<Scalars["Int"]>;
  /** First name of the member */
  name?: Maybe<Scalars["String"]>;
  /** is the member anonymous */
  anonymous: Scalars["Boolean"];
};

/** File event from member */
export type ConversationMemberFileSentEvent = {
  __typename?: "ConversationMemberFileSentEvent";
  /** id */
  id: Scalars["String"];
  /** timestamp */
  createdAt: Scalars["String"];
  /** Id of the file */
  fileId: Scalars["String"];
  /** type */
  type: ConversationEventType;
  /** the content type of the file */
  contentType: Scalars["String"];
};

/** Conversation event corresponding to a message sent by a member */
export type ConversationMemberMessageSentEvent = {
  __typename?: "ConversationMemberMessageSentEvent";
  /** id */
  id: Scalars["String"];
  /** timestamp */
  createdAt: Scalars["String"];
  /** type */
  type: ConversationEventType;
  /** text */
  text: Scalars["String"];
};

/** Conversation status */
export enum ConversationStatus {
  Open = "OPEN",
  Closed = "CLOSED",
}

/** Short summary of a complete cook book from an user */
export type CookBook = {
  __typename?: "CookBook";
  /** id of summary */
  id: Scalars["Int"];
  /** Short introduction */
  intro: Scalars["String"];
  /** We moderate some books */
  moderated: CookBookModerated;
  /** People can keep their stuff private */
  isShared: Scalars["Boolean"];
  /** Date information when it was created or changed */
  date: CookBookDate;
  /** Some details of the user */
  user?: Maybe<CookBookUser>;
  /** Statistics how many times shared or visited etc */
  stats?: Maybe<CookBookStats>;
};

/** Cookbook recipe report offensive result */
export type CookBookAddRecipeResult = MutationResult & {
  __typename?: "CookBookAddRecipeResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Cookbook add recipe result */
  result?: Maybe<CookBookMemberRecipe>;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Collected information */
export type CookBookCollectedRecipe = {
  __typename?: "CookBookCollectedRecipe";
  /** recipe id */
  id: Scalars["Int"];
  /** Is it a favourite recipe for the person who stored it? */
  isFavourite: Scalars["Boolean"];
  /** Every user can have a personal free text notification about the recipe */
  note?: Maybe<Scalars["String"]>;
};

/** Cookbook recipe report offensive result */
export type CookBookCollectedRecipeRemoveResult = MutationResult & {
  __typename?: "CookBookCollectedRecipeRemoveResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Collected cookbook recipe removed result */
  result?: Maybe<Scalars["Boolean"]>;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Cookbook recipe report offensive result */
export type CookBookCollectedRecipeResult = MutationResult & {
  __typename?: "CookBookCollectedRecipeResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Collected recipe result */
  result?: Maybe<CookBookCollectedRecipe>;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Date information on the cookbook */
export type CookBookDate = {
  __typename?: "CookBookDate";
  /** When it was last modified */
  changed: Scalars["String"];
  /** When first version was released */
  inserted: Scalars["String"];
};

/** Cookbook delete recipe result */
export type CookBookDeleteRecipeResult = MutationResult & {
  __typename?: "CookBookDeleteRecipeResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Result after deleting a recipe */
  result?: Maybe<Scalars["Boolean"]>;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Cookbook mutation results */
export type CookBookEditRecipeResult = MutationResult & {
  __typename?: "CookBookEditRecipeResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Edited recipe result */
  result?: Maybe<CookBookMemberRecipe>;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Same as cookBookRecipeIngredient */
export type CookBookInputRecipeIngredient = {
  /** Quantity */
  quantity: Scalars["String"];
  /** Unit size kg/eetlepel/gram/etc */
  unit: Scalars["String"];
  /** Description */
  name: Scalars["String"];
};

/** Same as CookBookRecipeMeta but we need input */
export type CookBookInputRecipeMeta = {
  /** For how many persons 1/2/4/6/8/12 */
  servings: Scalars["Int"];
  /** Course, FIXME: SHOULD BE ENUM */
  course: Scalars["String"];
  /** Cuisine, FIXME: SHOULD BE ENUM */
  cuisine: Scalars["String"];
  /** Protein source, FIXME: SHOULD BE ENUM */
  protein: Scalars["String"];
  /** Dish type, FIXME: SHOULD BE ENUM */
  dish: Scalars["String"];
};

/** Same as CookBookRecipeTimes */
export type CookBookInputRecipeTimes = {
  /** Preparation time */
  preparation?: Maybe<Scalars["Int"]>;
  /** Waiting time */
  waiting?: Maybe<Scalars["Int"]>;
  /** Cooking time */
  cooking?: Maybe<Scalars["Int"]>;
};

/** input when adding new cookbook profile */
export type CookBookMemberAddProfileInput = {
  /** intro */
  intro: Scalars["String"];
  /** avatar code 0-61 */
  avatar: Scalars["Int"];
  /** if profile is shared to public */
  isShared: Scalars["Boolean"];
  /** wants to retrieve/send messages from others */
  hasMessaging: Scalars["Boolean"];
  /** wants to be notified when new message arrives */
  hasNotifications: Scalars["Boolean"];
};

/** Message from another cookbook member to a cookbook member */
export type CookBookMemberMessage = {
  __typename?: "CookBookMemberMessage";
  /** Id of the message */
  id: Scalars["Int"];
  /** Sender information */
  sender: CookBookMemberMessageSender;
  /** Date the message is sent */
  sent: Scalars["String"];
  /** Subject of message */
  subject: Scalars["String"];
  /** Message itself */
  message: Scalars["String"];
  /** When message is read or not */
  isRead: Scalars["Boolean"];
};

/** Overview of a message */
export type CookBookMemberMessageOverview = {
  __typename?: "CookBookMemberMessageOverview";
  /** Id of the message */
  id: Scalars["Int"];
  /** Sender information */
  sender: CookBookMemberMessageSender;
  /** Date the message is sent */
  sent: Scalars["String"];
  /** Subject of message */
  subject: Scalars["String"];
  /** When message is read or not */
  isRead: Scalars["Boolean"];
};

/** Details of the user who sent the message, people can block and unblock users so make sure to cache/update correctly */
export type CookBookMemberMessageSender = {
  __typename?: "CookBookMemberMessageSender";
  /** id of the cookbook user */
  id: Scalars["Int"];
  /** Display name of the cook book user */
  name: Scalars["String"];
  /** Every user can block another user and prevent incomming messages in future */
  isBlocked: Scalars["Boolean"];
};

/** Result for paginated messages */
export type CookBookMemberMessagesResult = {
  __typename?: "CookBookMemberMessagesResult";
  /** results */
  result?: Maybe<Array<CookBookMemberMessageOverview>>;
  /** page */
  page?: Maybe<PageInfo>;
};

/** Cookbook profile information */
export type CookBookMemberProfile = {
  __typename?: "CookBookMemberProfile";
  /** intro */
  intro: Scalars["String"];
  /** avatar code 0-61 */
  avatar: Scalars["Int"];
  /** if profile is shared to public */
  isShared: Scalars["Boolean"];
  /** wants to retrieve/send messages from others */
  hasMessaging: Scalars["Boolean"];
  /** wants to be notified when new message arrives */
  hasNotifications: Scalars["Boolean"];
};

/** CookBook Member Recipe */
export type CookBookMemberRecipe = {
  __typename?: "CookBookMemberRecipe";
  /** record id of recipe */
  id: Scalars["Int"];
  /** Public data, later we will resolve this differently the fragment 'CookBookRecipe' is now re-usable */
  public?: Maybe<CookBookRecipe>;
  /** Private data only for the member itself */
  private?: Maybe<CookBookRecipePrivate>;
};

/** input when updating a profile, when null not updated */
export type CookBookMemberUpdateProfileInput = {
  /** intro */
  intro?: Maybe<Scalars["String"]>;
  /** avatar code 0-61 */
  avatar?: Maybe<Scalars["Int"]>;
  /** if profile is shared to public */
  isShared?: Maybe<Scalars["Boolean"]>;
  /** wants to retrieve/send messages from others */
  hasMessaging?: Maybe<Scalars["Boolean"]>;
  /** wants to be notified when new message arrives */
  hasNotifications?: Maybe<Scalars["Boolean"]>;
};

/** Blocked person for contacting a specific cookbook user */
export type CookBookMessagingBlockedMember = {
  __typename?: "CookBookMessagingBlockedMember";
  /** Cookbook id of user */
  userId: Scalars["Int"];
  /** Display name of cookbookuser */
  name: Scalars["String"];
};

/** Moderation state for a cookbook */
export enum CookBookModerated {
  /** Approved content */
  Approved = "APPROVED",
  /** Removed content */
  Deleted = "DELETED",
  /** Rejected content */
  Rejected = "REJECTED",
  /** abuse reported */
  ToBeModeratedAbuseReported = "TO_BE_MODERATED_ABUSE_REPORTED",
  /** normal content reportec */
  ToBeModeratedNormalContent = "TO_BE_MODERATED_NORMAL_CONTENT",
  /** suspicious content reported */
  ToBeModeratedSuspiciousContent = "TO_BE_MODERATED_SUSPICIOUS_CONTENT",
  /** unknown */
  Unknown = "UNKNOWN",
}

/** One specific public recipe */
export type CookBookRecipe = {
  __typename?: "CookBookRecipe";
  /** record id of recipe */
  id: Scalars["Int"];
  /** title of recipe */
  title: Scalars["String"];
  /** meta information about the recipe */
  meta?: Maybe<CookBookRecipeMeta>;
  /** Ingredients */
  ingredients?: Maybe<Array<CookBookRecipeIngredient>>;
  /** Preparation, cooking and waiting times for recipe */
  times: CookBookRecipeTimes;
  /** Diet recipe */
  isSlim: Scalars["Boolean"];
  /** Favorite recipe */
  isFavourite: Scalars["Boolean"];
  /** Tools needed for the job */
  tools: Scalars["String"];
  /** Preparation times */
  preparation: Scalars["String"];
  /** Tell us when its added and last changed */
  date: CookBookDate;
  /** Number of times collected */
  collected: Scalars["Int"];
  /** Source of recipe */
  source: Scalars["String"];
  /** user id, this is used for the extension on user details */
  userId: Scalars["Int"];
  /** extended user info */
  user?: Maybe<CookBookUser>;
};

/** Cookbook recipe count result, each recipe has its own counter for visits by members and is used for creating the popularity of the cookbook author */
export type CookBookRecipeCountResult = MutationResult & {
  __typename?: "CookBookRecipeCountResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Cookbook recipe count result, each recipe has its own counter for visits by members and is used for creating the popularity of the cookbook author */
  result: Scalars["Boolean"];
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Recipe ingredient */
export type CookBookRecipeIngredient = {
  __typename?: "CookBookRecipeIngredient";
  /** Quantity */
  quantity: Scalars["String"];
  /** Unit size kg/eetlepel/gram/etc */
  unit: Scalars["String"];
  /** Description */
  name: Scalars["String"];
};

/** Small details about top list recipe (cached for 1 hour) */
export type CookBookRecipeListItem = {
  __typename?: "CookBookRecipeListItem";
  /** Recipe id */
  id: Scalars["Int"];
  /** Recipe title */
  title: Scalars["String"];
  /** Recipe owner id */
  userId: Scalars["Int"];
  /** Recipe owner details */
  user: CookBookRecipeListItemUser;
};

/** Recipe owner details for top list (cached for 10 minutes) */
export type CookBookRecipeListItemUser = {
  __typename?: "CookBookRecipeListItemUser";
  /** city name of user */
  city?: Maybe<Scalars["String"]>;
  /** Name of the user */
  name: Scalars["String"];
};

/** Meta information about a recipe */
export type CookBookRecipeMeta = {
  __typename?: "CookBookRecipeMeta";
  /** For how many persons 1/2/4/6/8/12 */
  servings: Scalars["Int"];
  /** Course, FIXME: SHOULD BE ENUM */
  course: Scalars["String"];
  /** Cuisine, FIXME: SHOULD BE ENUM */
  cuisine: Scalars["String"];
  /** Protein source, FIXME: SHOULD BE ENUM */
  protein: Scalars["String"];
  /** Dish type, FIXME: SHOULD BE ENUM */
  dish: Scalars["String"];
};

/** Private data a user can retrieve about its recipe */
export type CookBookRecipePrivate = {
  __typename?: "CookBookRecipePrivate";
  /** Personal added note for recipe owners only to see */
  note?: Maybe<Scalars["String"]>;
  /** Is the recipe shared */
  isShared: Scalars["Boolean"];
  /** Personal Moderation state recipe */
  state: CookBookModerated;
};

/** Cookbook recipe report offensive result */
export type CookBookRecipeReportOffensiveResult = MutationResult & {
  __typename?: "CookBookRecipeReportOffensiveResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Cook book recipe report offensive result */
  result: Scalars["Boolean"];
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Times */
export type CookBookRecipeTimes = {
  __typename?: "CookBookRecipeTimes";
  /** Preparation time */
  preparation?: Maybe<Scalars["Int"]>;
  /** Waiting time */
  waiting?: Maybe<Scalars["Int"]>;
  /** Cooking time */
  cooking?: Maybe<Scalars["Int"]>;
};

/** All own recipes for a cookbook user (cached for ten minutes) */
export type CookBookRecipes = {
  __typename?: "CookBookRecipes";
  /** User id of recipes */
  id?: Maybe<Scalars["Int"]>;
  /** Found recipes */
  result?: Maybe<Array<CookBookRecipesItem>>;
  /** Page details */
  page?: Maybe<PageInfo>;
  /** Some details of the user */
  user?: Maybe<CookBookUser>;
};

/** Collected recipes for a cookbook user */
export type CookBookRecipesCollected = {
  __typename?: "CookBookRecipesCollected";
  /** user id of recipes */
  id?: Maybe<Scalars["Int"]>;
  /** results found */
  result?: Maybe<Array<CookBookRecipesCollectedItem>>;
  /** page information */
  page?: Maybe<PageInfo>;
  /** Basic details of the user */
  user?: Maybe<CookBookUser>;
};

/** Collected recipe */
export type CookBookRecipesCollectedItem = {
  __typename?: "CookBookRecipesCollectedItem";
  /** id of recipe */
  id: Scalars["Int"];
  /** user collecting the recipe */
  userId: Scalars["Int"];
  /** title recipe */
  title: Scalars["String"];
  /** meta */
  meta: CookBookRecipeMeta;
  /** Is favourte recipe */
  isFavourite: Scalars["Boolean"];
  /** owner of the recipe */
  owner: CookBookRecipesCollectedOwner;
};

/** Collected recipes for the cookbook member */
export type CookBookRecipesCollectedMember = {
  __typename?: "CookBookRecipesCollectedMember";
  /** member id */
  id?: Maybe<Scalars["Int"]>;
  /** results found */
  result?: Maybe<Array<CookBookRecipesCollectedItem>>;
  /** page information */
  page?: Maybe<PageInfo>;
  /** Basic details of the user */
  user?: Maybe<CookBookUser>;
};

/** Owner information */
export type CookBookRecipesCollectedOwner = {
  __typename?: "CookBookRecipesCollectedOwner";
  /** name */
  name: Scalars["String"];
  /** city */
  city?: Maybe<Scalars["String"]>;
};

/** Recipe summary */
export type CookBookRecipesItem = {
  __typename?: "CookBookRecipesItem";
  /** Recipe id */
  id: Scalars["Int"];
  /** User id */
  userId: Scalars["Int"];
  /** Title recipe */
  title: Scalars["String"];
  /** Meta information about recipe */
  meta: CookBookRecipeMeta;
  /** Is recipe a favourite from its owner */
  isFavourite: Scalars["Boolean"];
  /** Is recipe shared by its owner */
  isShared: Scalars["Boolean"];
  /** Moderation state for recipe */
  state?: Maybe<CookBookModerated>;
};

/** All own recipes for current cookbook member */
export type CookBookRecipesMember = {
  __typename?: "CookBookRecipesMember";
  /** Member id of recipes */
  id?: Maybe<Scalars["Int"]>;
  /** Found recipes */
  result?: Maybe<Array<CookBookRecipesItem>>;
  /** Page details */
  page?: Maybe<PageInfo>;
  /** Some details of the user */
  user?: Maybe<CookBookUser>;
};

/** Recipe overview for search results */
export type CookBookSearchRecipeItem = {
  __typename?: "CookBookSearchRecipeItem";
  /** id of the recipe */
  id: Scalars["Int"];
  /** title of the recipe */
  title: Scalars["String"];
  /** Meta information about the recipe */
  meta: CookBookRecipeMeta;
  /** Basic user information */
  user: CookBookSearchRecipeUser;
};

/** Found recipes based upon your search */
export type CookBookSearchRecipeResult = {
  __typename?: "CookBookSearchRecipeResult";
  /** results */
  result?: Maybe<Array<CookBookSearchRecipeItem>>;
  /** page */
  page?: Maybe<PageInfo>;
};

/** User info */
export type CookBookSearchRecipeUser = {
  __typename?: "CookBookSearchRecipeUser";
  /** User id */
  id: Scalars["Int"];
  /** User name */
  name: Scalars["String"];
  /** User city name */
  city?: Maybe<Scalars["String"]>;
};

/** Found books based upon your search */
export type CookBookSearchResult = {
  __typename?: "CookBookSearchResult";
  /** results */
  result?: Maybe<Array<CookBook>>;
  /** page */
  page?: Maybe<PageInfo>;
};

/** Statistics about the cookbook */
export type CookBookStats = {
  __typename?: "CookBookStats";
  /** How many recipes are stored */
  recipes: Scalars["Int"];
  /** How many other recipes are favourites */
  collected: Scalars["Int"];
  /** How many times was this cookbook visited */
  visited: Scalars["Int"];
};

/** Minimal user details */
export type CookBookUser = {
  __typename?: "CookBookUser";
  /** User id */
  id: Scalars["Int"];
  /** All avatars are numbered and choosable by our customer */
  avatar: Scalars["Int"];
  /** Name of city, users can be searched on their cities */
  city?: Maybe<Scalars["String"]>;
  /** Name and surname */
  name: Scalars["String"];
  /** Cookbook owners can activate messaging, so they can receive and sent personal messages */
  hasMessaging: Scalars["Boolean"];
};

/** Customer care channel availability time range */
export type ChannelAvailabilityDateTimeRange = {
  __typename?: "ChannelAvailabilityDateTimeRange";
  /** Channel availability start time */
  startDateTime: Scalars["String"];
  /** Channel availability end time */
  endDateTime: Scalars["String"];
};

/** Customer care channel availability */
export type ChannelAvailabilityForDay = {
  __typename?: "ChannelAvailabilityForDay";
  /** Channel availability status */
  status: ChannelAvailabilityStatus;
  /** Channel availability start time */
  startDateTime: Scalars["String"];
  /** Channel availability end time */
  endDateTime: Scalars["String"];
  /** Next channel availability */
  nextOpeningHours: ChannelAvailabilityDateTimeRange;
};

/** Customer care channel availability status */
export enum ChannelAvailabilityStatus {
  /** Channel status available */
  Available = "AVAILABLE",
  /** Channel status unavailable */
  Unavailable = "UNAVAILABLE",
}

/** Customer care channels supported platforms */
export enum ChannelPlatform {
  /** Platform web */
  Web = "WEB",
  /** Platform appie app */
  AhApp = "AH_APP",
  /** Platform Food First Network */
  FfnApp = "FFN_APP",
}

/** Customer care channel type */
export enum ChannelType {
  /** Channel chat */
  Chat = "CHAT",
  /** Channel phone */
  Phone = "PHONE",
}

/** Customer care chat channel */
export type ChatChannel = {
  __typename?: "ChatChannel";
  /** Queue waiting time in minutes */
  waitingTimeMinutes?: Maybe<Scalars["Int"]>;
  /** Live agent employee availability */
  employeeAvailability: ChannelAvailabilityForDay;
  /** id */
  id: Scalars["String"];
  /** Channel type */
  type: ChannelType;
  /** Is visibible on platform / apps */
  visibleOnPlatforms: Array<ChannelPlatform>;
  /** Availablity and next availability */
  availability: ChannelAvailabilityForDay;
  /** Text to show for customers, openinghours / waiting time */
  label?: Maybe<Scalars["String"]>;
  /** Text to show availability waiting time for a chat employee */
  waitTimeText?: Maybe<Scalars["String"]>;
};

/** Customer care Article component response */
export type CustomerCareArticle = ContentBaseCmsComponent & {
  __typename?: "CustomerCareArticle";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Customer Care Link Box Lane Data */
  data?: Maybe<CustomerCareArticleData>;
};

/** Customer care Article component data */
export type CustomerCareArticleData = {
  __typename?: "CustomerCareArticleData";
  /** Article title */
  title?: Maybe<Scalars["String"]>;
  /** Article body */
  body?: Maybe<Scalars["String"]>;
};

/** Grid for artciles */
export type CustomerCareArticleGrid = ContentBaseCmsComponent & {
  __typename?: "CustomerCareArticleGrid";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Customer Care Article Grid Data */
  data?: Maybe<CustomerCareArticleGridData>;
};

/** Article Grid Card */
export type CustomerCareArticleGridCard = {
  __typename?: "CustomerCareArticleGridCard";
  /** cardType */
  cardType: Scalars["String"];
  /** title */
  title: Scalars["String"];
  /** body */
  body: Scalars["String"];
  /** call to action */
  cta?: Maybe<CustomerCareArticleGridCardCta>;
};

/** Article Grid Card call to action */
export type CustomerCareArticleGridCardCta = {
  __typename?: "CustomerCareArticleGridCardCTA";
  /** title */
  title: Scalars["String"];
  /** href */
  href: Scalars["String"];
  /** target */
  target: Scalars["String"];
  /** is external */
  externalLink: Scalars["Boolean"];
};

/** Customer Care Article Grid Data */
export type CustomerCareArticleGridComponent = {
  __typename?: "CustomerCareArticleGridComponent";
  /** title */
  title: Scalars["String"];
  /** cards */
  cards: Array<Maybe<CustomerCareArticleGridCard>>;
};

/** Customer Care Article Grid Data */
export type CustomerCareArticleGridData = {
  __typename?: "CustomerCareArticleGridData";
  /** Customer Care Article Grid */
  grid?: Maybe<CustomerCareArticleGridComponent>;
};

/** Breadcrumb component */
export type CustomerCareBreadCrumb = {
  __typename?: "CustomerCareBreadCrumb";
  /** Breadcrumb title */
  title: Scalars["String"];
  /** Breadcrumb link */
  href: Scalars["String"];
  /** should open in a new tab */
  externalLink: Scalars["Boolean"];
};

/** Breadcrumb data object */
export type CustomerCareBreadCrumbData = {
  __typename?: "CustomerCareBreadCrumbData";
  /** Crumbs for BreadCrumb */
  links: Array<CustomerCareBreadCrumb>;
};

/** Breadcrumb cms component response */
export type CustomerCareBreadCrumbs = ContentBaseCmsComponent & {
  __typename?: "CustomerCareBreadCrumbs";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Customer Care Link Box Lane Data */
  data?: Maybe<CustomerCareBreadCrumbData>;
};

/** List of all customer care channels */
export type CustomerCareChannel = ChatChannel | PhoneChannel;

/** Components for customer care */
export type CustomerCareComponents =
  | CustomerCareHeader
  | CustomerCareBreadCrumbs
  | ContentButtonlane
  | CustomerCareArticle
  | ContentAccordion
  | CustomerCareLinkLane;

/** CustomerCareConfiguredAccordionResults config component */
export type CustomerCareConfiguredAccordionResults = {
  __typename?: "CustomerCareConfiguredAccordionResults";
  /** Type of component */
  type: CustomerCareConfiguredContentComponentType;
  /** Query used to search for accordion items */
  query: Scalars["String"];
  /** Title of the accordion */
  title: Scalars["String"];
};

/** CustomerCareConfiguredArticle configured component response */
export type CustomerCareConfiguredArticle = {
  __typename?: "CustomerCareConfiguredArticle";
  /** Type of component */
  type: CustomerCareConfiguredContentComponentType;
  /** Article title */
  title: Scalars["String"];
  /** Article body */
  content: Scalars["String"];
};

/** BreadCrumb link */
export type CustomerCareConfiguredBreadCrumbLink = {
  __typename?: "CustomerCareConfiguredBreadCrumbLink";
  /** Title of the link */
  title: Scalars["String"];
  /** URL of the link */
  href: Scalars["String"];
};

/** CustomerCareConfiguredBreadCrumbs configured component response */
export type CustomerCareConfiguredBreadCrumbs = {
  __typename?: "CustomerCareConfiguredBreadCrumbs";
  /** Type of component */
  type: CustomerCareConfiguredContentComponentType;
  /** links */
  links: Array<CustomerCareConfiguredBreadCrumbLink>;
};

/** CustomerCareConfiguredButtonLane configured component response */
export type CustomerCareConfiguredButtonLane = {
  __typename?: "CustomerCareConfiguredButtonLane";
  /** Type of component */
  type: CustomerCareConfiguredContentComponentType;
  /** Title of the button lane */
  title: Scalars["String"];
  /** Button lane buttons */
  buttons: Array<CustomerCareConfiguredButtonLaneButton>;
};

/** Button lane button */
export type CustomerCareConfiguredButtonLaneButton = {
  __typename?: "CustomerCareConfiguredButtonLaneButton";
  /** Button title */
  title: Scalars["String"];
  /** Button subtitle */
  subtitle?: Maybe<Scalars["String"]>;
  /** Button URL */
  href: Scalars["String"];
  /** Button Icon */
  icon: CustomerCareConfiguredButtonLaneButtonIcon;
};

/** Button lane button icon */
export type CustomerCareConfiguredButtonLaneButtonIcon = {
  __typename?: "CustomerCareConfiguredButtonLaneButtonIcon";
  /** Icon type */
  type: Scalars["String"];
  /** Icon color */
  color: Scalars["String"];
};

/** Customer care category */
export type CustomerCareConfiguredCategory = {
  __typename?: "CustomerCareConfiguredCategory";
  /** Root Components */
  components: Array<CustomerCareConfiguredComponents>;
  /** error field */
  error?: Maybe<CustomerCareConfiguredError>;
};

/** Configured components for customer care */
export type CustomerCareConfiguredComponents =
  | CustomerCareConfiguredArticle
  | CustomerCareConfiguredBreadCrumbs
  | CustomerCareConfiguredButtonLane
  | CustomerCareConfiguredLinkLane
  | CustomerCareConfiguredAccordionResults
  | CustomerCareConfiguredPageMeta
  | CustomerCareConfiguredTitle;

/** Type of configurable components */
export enum CustomerCareConfiguredContentComponentType {
  Title = "TITLE",
  Pagemeta = "PAGEMETA",
  Article = "ARTICLE",
  Breadcrumbs = "BREADCRUMBS",
  Buttonlane = "BUTTONLANE",
  Linklane = "LINKLANE",
  Accordion = "ACCORDION",
}

/** Customer care detail */
export type CustomerCareConfiguredDetail = {
  __typename?: "CustomerCareConfiguredDetail";
  /** Root Components */
  components: Array<CustomerCareConfiguredComponents>;
  /** error field */
  error?: Maybe<CustomerCareConfiguredError>;
};

/** Error Status for customer care module to be able to handle errors */
export type CustomerCareConfiguredError = {
  __typename?: "CustomerCareConfiguredError";
  /** status code */
  code: Scalars["Int"];
  /** status message */
  message: Scalars["String"];
  /** error type */
  type: CustomerCareErrorTypes;
};

/** Customer care home overview */
export type CustomerCareConfiguredHome = {
  __typename?: "CustomerCareConfiguredHome";
  /** Root Components */
  components: Array<CustomerCareConfiguredComponents>;
};

/** CustomerCareConfiguredLinkLane config component */
export type CustomerCareConfiguredLinkLane = {
  __typename?: "CustomerCareConfiguredLinkLane";
  /** Type of component */
  type: CustomerCareConfiguredContentComponentType;
  /** Title of the link lane */
  title: Scalars["String"];
  /** subtitle of the link lane */
  subtitle?: Maybe<Scalars["String"]>;
  /** Links of the link lane */
  links: Array<CustomerCareConfiguredLinkLaneLink>;
};

/** CustomerCareConfiguredLinkLaneLink */
export type CustomerCareConfiguredLinkLaneLink = {
  __typename?: "CustomerCareConfiguredLinkLaneLink";
  /** Title of the link */
  title: Scalars["String"];
  /** URL of the link */
  href: Scalars["String"];
  /** Target of the link */
  target: Scalars["String"];
};

/** CustomerCareConfiguredPageMeta configured component response */
export type CustomerCareConfiguredPageMeta = {
  __typename?: "CustomerCareConfiguredPageMeta";
  /** Type of component */
  type: CustomerCareConfiguredContentComponentType;
  /** Data */
  data?: Maybe<CustomerCareConfiguredPageMetaData>;
};

/** PageMeta data */
export type CustomerCareConfiguredPageMetaData = {
  __typename?: "CustomerCareConfiguredPageMetaData";
  /** PageMeta title */
  title?: Maybe<Scalars["String"]>;
  /** PageMeta description */
  description?: Maybe<Scalars["String"]>;
  /** PageMeta canonical */
  canonical?: Maybe<Scalars["String"]>;
  /** PageMeta follow */
  follow?: Maybe<Scalars["Boolean"]>;
  /** PageMeta index */
  index?: Maybe<Scalars["Boolean"]>;
};

/** CustomerCareConfiguredTitle configured component response */
export type CustomerCareConfiguredTitle = {
  __typename?: "CustomerCareConfiguredTitle";
  /** Type of component */
  type: CustomerCareConfiguredContentComponentType;
  /** Title title */
  title: Scalars["String"];
};

/** Error types for content module */
export enum CustomerCareErrorTypes {
  /** Not found error, 404 */
  NotFound = "NOT_FOUND",
  /** Internal Server Error, 500 */
  ServerError = "SERVER_ERROR",
}

/** Customer care Article component response */
export type CustomerCareHeader = ContentBaseCmsComponent & {
  __typename?: "CustomerCareHeader";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Customer Care Header data */
  data?: Maybe<CustomerCareHeaderData>;
};

/** Customer care Header component */
export type CustomerCareHeaderComponent = {
  __typename?: "CustomerCareHeaderComponent";
  /** title */
  title?: Maybe<Scalars["String"]>;
  /** offset */
  hasOffset?: Maybe<Scalars["Boolean"]>;
  /** taglevel */
  tagLevel?: Maybe<Scalars["Int"]>;
};

/** Customer care Header data */
export type CustomerCareHeaderData = {
  __typename?: "CustomerCareHeaderData";
  /** Customer care Header */
  header?: Maybe<CustomerCareHeaderComponent>;
};

/** LinkLane cms component response */
export type CustomerCareLinkLane = ContentBaseCmsComponent & {
  __typename?: "CustomerCareLinkLane";
  /** Anchor ID */
  anchorId?: Maybe<Scalars["String"]>;
  /** ID */
  id: Scalars["String"];
  /** Tag Level */
  tagLevel?: Maybe<Scalars["Int"]>;
  /** Component Render Status (Whether the component is fully returned or not. This is used for lazy loading components.) */
  componentStatus: ContentCmsComponentStatus;
  /** Component Type */
  type: ContentCmsComponentType;
  /**
   * This field contains data that is needed for CMS Experience Manager
   * to display components in preview mode.
   */
  previewData?: Maybe<ContentPreviewData>;
  /** Customer Care Link Box Lane Data */
  data?: Maybe<CustomerCareLinkLaneData>;
};

/** LinkLane data object */
export type CustomerCareLinkLaneData = {
  __typename?: "CustomerCareLinkLaneData";
  /** LinkLane title */
  title?: Maybe<Scalars["String"]>;
  /** Crumbs for LinkLane */
  links: Array<CustomerCareLinkLaneLink>;
};

/** LinkLane component */
export type CustomerCareLinkLaneLink = {
  __typename?: "CustomerCareLinkLaneLink";
  /** LinkLane title */
  color: Scalars["String"];
  /** LinkLane link */
  href: Scalars["String"];
  /** should open in a new tab */
  target: Scalars["String"];
  /** LinkLaneLink title */
  title: Scalars["String"];
};

/** Order details for the quick links lane */
export type CustomerCareQuickLinkLaneOrderDetail = {
  __typename?: "CustomerCareQuickLinkLaneOrderDetail";
  /** Id of the order */
  orderId: Scalars["Int"];
  /** Title for the quick links order module */
  title: Scalars["String"];
  /** Subtitle for the quick links order module */
  subTitle: Scalars["String"];
  /** Message about the order or delivery track trace */
  message?: Maybe<Scalars["String"]>;
  /** Track and trace status */
  status: DeliveryTrackTraceInformationState;
  /** If order is editable */
  reopenable: Scalars["Boolean"];
  /** Settlement details for the order */
  settlement?: Maybe<CustomerCareQuickLinkLaneSettlementDetails>;
};

/** Settlment information for order */
export type CustomerCareQuickLinkLaneSettlementDetails = {
  __typename?: "CustomerCareQuickLinkLaneSettlementDetails";
  /** The label to display */
  label: Scalars["String"];
  /** The amount of the settlement */
  amount: Money;
};

/** Store visit details for the quick links lane */
export type CustomerCareQuickLinkLaneStorePurchaseDetail = {
  __typename?: "CustomerCareQuickLinkLaneStorePurchaseDetail";
  /** Id of the purchase */
  purchaseId?: Maybe<Scalars["String"]>;
  /** Title for the quick links store module */
  title: Scalars["String"];
  /** subTitle for the quick links store module */
  subTitle: Scalars["String"];
  /** A custom message about the store purchase */
  message?: Maybe<Scalars["String"]>;
};

/** Settlment for the 'mijn verrekeningen' page */
export type CustomerCareSettlement = {
  __typename?: "CustomerCareSettlement";
  /** The id of the settlement */
  id: Scalars["String"];
  /** the order if any */
  order?: Maybe<Order>;
  /** the product if any */
  product?: Maybe<Product>;
  /** title */
  title: Scalars["String"];
  /** subtitle */
  subtitle: Scalars["String"];
  /** money */
  amount: Money;
  /** is the settlement cancelable */
  cancelable: Scalars["Boolean"];
  /** formatted datelabel of the creation date of the settlement */
  dateLabel: Scalars["String"];
  /** formatted feedback label */
  feedbackLabel?: Maybe<Scalars["String"]>;
  /** customer comment */
  comment?: Maybe<Scalars["String"]>;
  /** ids of uploaded images */
  imageIds: Array<Scalars["String"]>;
};

/** Settlement bucket conclusion */
export type CustomerCareSettlementConclusion = {
  __typename?: "CustomerCareSettlementConclusion";
  /** the conclusion message */
  message?: Maybe<Scalars["String"]>;
  /** the conclusion amount */
  amount: Money;
};

/** union of all baskets for the mijn verrekeningen page */
export type CustomerCareSettlements =
  | CustomerCareSettlementsDeliverer
  | CustomerCareSettlementsBank
  | CustomerCareSettlementsInvoice;

/** Settlements with refund method bank */
export type CustomerCareSettlementsBank = {
  __typename?: "CustomerCareSettlementsBank";
  /** title for the bucket */
  title: Scalars["String"];
  /** the refund method */
  refundMethod: SettlementRefundMethod;
  /** all open settlements with refund method bank */
  settlements: Array<CustomerCareSettlement>;
  /** conclusion of all the settlements combined */
  conclusion: CustomerCareSettlementConclusion;
};

/** Settlements with refund method deliverer */
export type CustomerCareSettlementsDeliverer = {
  __typename?: "CustomerCareSettlementsDeliverer";
  /** title for the bucket */
  title: Scalars["String"];
  /** the refund method */
  refundMethod: SettlementRefundMethod;
  /** all open settlements with refund method deliverer */
  settlements: Array<CustomerCareSettlement>;
  /** conclusion of all the settlements combined */
  conclusion: CustomerCareSettlementConclusion;
};

/** Settlements with refund method invoice */
export type CustomerCareSettlementsInvoice = {
  __typename?: "CustomerCareSettlementsInvoice";
  /** title for the bucket */
  title: Scalars["String"];
  /** the refund method */
  refundMethod: SettlementRefundMethod;
  /** all open settlements with refund method invoice */
  settlements: Array<CustomerCareSettlement>;
  /** conclusion of all the settlements combined */
  conclusion: CustomerCareSettlementConclusion;
};

/** The customer care mijn verrekeningen page */
export type CustomerCareSettlementsPage = {
  __typename?: "CustomerCareSettlementsPage";
  /** Open settlemnts for settlement method deliverer, bank and invoice */
  settlements: Array<CustomerCareSettlements>;
};

/** Special day for customer care operations */
export type CustomerCareSpecialDay = {
  __typename?: "CustomerCareSpecialDay";
  /** Name of the special day */
  name: Scalars["String"];
  /** List of dates associated with the special day */
  dates: Array<Scalars["String"]>;
};

/** Store */
export type CustomerCareStore = {
  __typename?: "CustomerCareStore";
  /** The id of the store */
  id: Scalars["Int"];
  /** The address of the store */
  address: CustomerCareStoreAddress;
};

/** Store address */
export type CustomerCareStoreAddress = {
  __typename?: "CustomerCareStoreAddress";
  /** The street where the store is located */
  street: Scalars["String"];
  /** The housnumber where the store is located */
  houseNumber: Scalars["String"];
  /** The postcal code */
  postalCode: Scalars["String"];
  /** The city */
  city: Scalars["String"];
};

/** Customer care phone channel */
export type PhoneChannel = {
  __typename?: "PhoneChannel";
  /** Queue waiting time in minutes */
  waitingTimeMinutes?: Maybe<Scalars["Int"]>;
  /** Live agent employee availability */
  employeeAvailability: ChannelAvailabilityForDay;
  /** id */
  id: Scalars["String"];
  /** Channel type */
  type: ChannelType;
  /** Is visibible on platform / apps */
  visibleOnPlatforms: Array<ChannelPlatform>;
  /** Availablity and next availability */
  availability: ChannelAvailabilityForDay;
  /** Phone number */
  phoneNumber: Scalars["String"];
  /** Neatly formatted phone number */
  phoneNumberDisplay: Scalars["String"];
  /** Charge per minute */
  chargePerMinute: Scalars["Int"];
  /** Text to show for customers, openinghours / waiting time */
  label?: Maybe<Scalars["String"]>;
};

/** Search response document type */
export enum CustomerServiceDocumentType {
  /** Page type for a single "search hit" */
  CustomerServicePage = "CUSTOMER_SERVICE_PAGE",
  /** Article type for a single "search hit" */
  CustomerServiceArticle = "CUSTOMER_SERVICE_ARTICLE",
}

/** Search with accordion response */
export type CustomerServiceSearchAccordionResponse = {
  __typename?: "CustomerServiceSearchAccordionResponse";
  /** Boolean to check if there are more results/pages */
  hasNextPage: Scalars["Boolean"];
  /** Amount of total articles found for the Query */
  totalHits: Scalars["Int"];
  /** The blocks that are returned with the search */
  accordion?: Maybe<ContentSearchAccordion>;
  /** pages */
  pages?: Maybe<Array<CustomerServiceSearchHit>>;
};

/** Customer service search hit */
export type CustomerServiceSearchHit = {
  __typename?: "CustomerServiceSearchHit";
  /** The returned document type */
  documentType: Scalars["String"];
  /** The title of the search result */
  title: Scalars["String"];
  /** The URL of the search result */
  url: Scalars["String"];
  /** The description can contain html */
  description?: Maybe<Scalars["String"]>;
  /** The text in the article, available if documentType is of CUSTOMER_SERVICE_ARTICLE */
  text?: Maybe<Scalars["String"]>;
};

/** Search response */
export type CustomerServiceSearchResponse = {
  __typename?: "CustomerServiceSearchResponse";
  /** All the returned searchHits */
  searchHits: Array<CustomerServiceSearchHit>;
  /** Boolean to check if there are more results/pages */
  hasNextPage: Scalars["Boolean"];
  /** Amount of total articles found for the Query */
  totalHits: Scalars["Int"];
};

/** Search suggestion */
export type CustomerServiceSuggestion = {
  __typename?: "CustomerServiceSuggestion";
  /** The title of the suggestion */
  title: Scalars["String"];
  /** The url of the suggestion */
  url: Scalars["String"];
};

/** Search suggestion response */
export type CustomerServiceSuggestionResponse = {
  __typename?: "CustomerServiceSuggestionResponse";
  /** Suggestions returned based on search term */
  suggestions: Array<CustomerServiceSuggestion>;
};

/** Blue Billywig video */
export type VideoBbw = {
  __typename?: "VideoBbw";
  /** Video ID */
  id: Scalars["String"];
  /** Video title */
  title?: Maybe<Scalars["String"]>;
  /** Video description */
  description?: Maybe<Scalars["String"]>;
  /** Video author */
  author?: Maybe<Scalars["String"]>;
  /** The original filename of the attached audiovisual file */
  originalFilename: Scalars["String"];
  /** path to the video file */
  src?: Maybe<Scalars["String"]>;
  /** A list of images related to the video */
  thumbnails?: Maybe<Array<Maybe<VideoBbwThumbnail>>>;
  /** A list of stream files/versions/renditions */
  assets?: Maybe<Array<VideoBbwAsset>>;
  /** Video width */
  width?: Maybe<Scalars["String"]>;
  /** Video height */
  height?: Maybe<Scalars["String"]>;
  /** The last updated date and time for a video */
  updatedDate: Scalars["String"];
  /** The time and date the video was created */
  createdDate: Scalars["String"];
};

/** Stream file/version/rendition */
export type VideoBbwAsset = {
  __typename?: "VideoBbwAsset";
  /** Location path */
  src: Scalars["String"];
  /** Length (in seconds) */
  length?: Maybe<Scalars["String"]>;
  /** Asset width */
  width?: Maybe<Scalars["String"]>;
  /** Asset height */
  height?: Maybe<Scalars["String"]>;
  /** Bandwidth (kbps) */
  bandwidth?: Maybe<Scalars["String"]>;
  /** “active” or “inactive” */
  status?: Maybe<Scalars["String"]>;
};

/** Image related to the video */
export type VideoBbwThumbnail = {
  __typename?: "VideoBbwThumbnail";
  /** A file uri reference */
  src: Scalars["String"];
  /** Image width */
  width?: Maybe<Scalars["String"]>;
  /** Image height */
  height?: Maybe<Scalars["String"]>;
  /** True for the selected thumbnail and false for others */
  main?: Maybe<Scalars["String"]>;
};

/** The customer */
export type Customer = {
  __typename?: "Customer";
  /** Customer id */
  id: Scalars["Int"];
  /** Customer default pickup location id */
  defaultPickupLocationId?: Maybe<Scalars["Int"]>;
  /** Customer instructions for delivery */
  deliveryInstructions?: Maybe<Scalars["String"]>;
  /** Debit type of the customer */
  debitType: DebitType;
};

/** Result of performing mutation with customer data */
export type CustomerMutationResult = MutationResult & {
  __typename?: "CustomerMutationResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Customer after performing mutation */
  result?: Maybe<Customer>;
};

/** Debit Type */
export enum DebitType {
  /** Invoice Debit value */
  Invoice = "INVOICE",
  /** Direct Debit value */
  DirectDebit = "DIRECT_DEBIT",
  /** None value */
  None = "NONE",
}

/** Result type for Add SMSReminder */
export type AddSmsReminderResult = MutationResult & {
  __typename?: "AddSMSReminderResult";
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Result enum */
  reminderStatus: AddSmsReminderStatus;
};

/** Additional status information that is returned from the service */
export enum AddSmsReminderStatus {
  /** Order not found */
  OrderNotFound = "ORDER_NOT_FOUND",
  /** Phone Number Invalid */
  PhoneNumberInvalid = "PHONE_NUMBER_INVALID",
  /** Added */
  PhoneNumberAdded = "PHONE_NUMBER_ADDED",
}

/** Address delivered to */
export type DeliveryAddress = {
  __typename?: "DeliveryAddress";
  /** Street */
  street: Scalars["String"];
  /** House number */
  houseNumber: Scalars["Int"];
  /** House number extra */
  houseNumberExtra?: Maybe<Scalars["String"]>;
  /** Zip Code */
  zipCode: Scalars["String"];
  /** City */
  city: Scalars["String"];
  /** Country Code Alpha 3 */
  countryCode: Scalars["String"];
};

/** Description for a Delivery Bundle subscription including terms and pricing */
export type DeliveryBundle = {
  __typename?: "DeliveryBundle";
  /** Delivery bundle identifier */
  id: Scalars["ID"];
  /** Delivery Bundle type code */
  code: Scalars["String"];
  /** Human readable description */
  description: Scalars["String"];
  /** Contract length of the delivery bundle subscription */
  duration: DeliveryBundleDuration;
  /** Pricing per month and per duration */
  price: DeliveryBundlePrice;
  /** Pricing per month and per duration without discount */
  priceBeforeDiscount: DeliveryBundlePrice;
  /** Chosen personal delivery days */
  deliveryDays: DeliveryBundleDeliveryDays;
};

/** Delivery Bundle subscription cancellation specification */
export type DeliveryBundleCancellation = {
  __typename?: "DeliveryBundleCancellation";
  /** First possible cancellation date option, null if the option isn't possible */
  earliestDate?: Maybe<Scalars["Date"]>;
  /** Last possible cancellation date option, null if the option isn't possible */
  latestDate?: Maybe<Scalars["Date"]>;
  /** Shows the date the subscription will be cancelled on after a user choose to cancel it, null if not cancelled */
  date?: Maybe<Scalars["Date"]>;
};

/** Chosen days to receive deliveries */
export enum DeliveryBundleDeliveryDays {
  /** Delivery on peak days */
  MondaySaturday = "MONDAY_SATURDAY",
  /** Delivery on off-peak days */
  TuesdayThursday = "TUESDAY_THURSDAY",
}

/** Contract length of Delivery Bundle subscription */
export enum DeliveryBundleDuration {
  /** 6 month subscription */
  HalfYear = "HALF_YEAR",
  /** 1 month subscription */
  OneMonth = "ONE_MONTH",
  /**
   * 3 month subscription
   * # TODO
   * # not available to new customers
   * # should throw error if someone tries to set this as period
   */
  ThreeMonths = "THREE_MONTHS",
  /** 1 year subscription */
  Year = "YEAR",
}

/** Description of next delivery bundle subscription */
export type DeliveryBundleNextSubscription = {
  __typename?: "DeliveryBundleNextSubscription";
  /** Subscription identifier */
  id: Scalars["ID"];
  /** Delivery Bundle type code */
  code: Scalars["String"];
  /** Human readable description */
  description: Scalars["String"];
  /** When the subscription will start */
  startDate: Scalars["String"];
  /** Amount customer will pay for the next subscription */
  price: Money;
};

/** Available iDeal issuers */
export type DeliveryBundlePaymentIDealIssuer = {
  __typename?: "DeliveryBundlePaymentIDealIssuer";
  /** Reference ID of iDeal issuer */
  id: Scalars["Int"];
  /** Name of iDeal issuer */
  name: Scalars["String"];
  /** Logo brand image of iDeal issuer */
  brandUrl: Scalars["String"];
};

/** Payment status of a delivery bundle */
export enum DeliveryBundlePaymentStatus {
  /** Payment has been cancelled */
  Cancelled = "CANCELLED",
  /** Payment has been completed */
  Completed = "COMPLETED",
  /** Payment has expired */
  Expired = "EXPIRED",
  /** Payment has failed */
  Failure = "FAILURE",
  /** Payment is newly created */
  New = "NEW",
  /** Payment is open */
  Open = "OPEN",
}

/** Delivery Bundle pricing specification */
export type DeliveryBundlePrice = {
  __typename?: "DeliveryBundlePrice";
  /** Price for entire duration */
  duration: Money;
  /** Monthly price */
  monthly: Money;
};

/** Pricing calculation to upgrade or downgrade Delivery Bundle */
export type DeliveryBundlePriceToChange = {
  __typename?: "DeliveryBundlePriceToChange";
  /** Human readable description of change in bundle */
  description: Scalars["String"];
  /** Human readable description of applied discount */
  discountDescription: Scalars["String"];
  /** Price going forward after making changing delivery bundle */
  price: Money;
  /** Price before discount going forward after changing delivery bundle */
  priceBeforeDiscount: Money;
};

/** Delivery Bundle next renewal pricing specification */
export type DeliveryBundleRenewal = {
  __typename?: "DeliveryBundleRenewal";
  /** Date renewal will occur */
  date: Scalars["String"];
  /** Amount deducted on renewal date */
  price: Money;
};

/** When an order for a member with a delivery bundle subscription will be delivered */
export type DeliveryBundleSlot = IDeliverySlot & {
  __typename?: "DeliveryBundleSlot";
  /** Date of delivery slot */
  date: Scalars["String"];
  /** Begin time of range where delivery may be expected */
  from: Scalars["String"];
  /** End time of range where delivery may be expected */
  until: Scalars["String"];
  /** Whether the delivery slot is preferred or not */
  isPreferred: Scalars["Boolean"];
  /** Whether the moment is favourite or not */
  isFavourite: Scalars["Boolean"];
};

/** A Delivery Bundle customer subscription */
export type DeliveryBundleSubscription = {
  __typename?: "DeliveryBundleSubscription";
  /** Delivery bundle identifier */
  id: Scalars["ID"];
  /** Delivery Bundle type code */
  code: Scalars["String"];
  /** Delivery days of the subscription */
  deliveryDays: DeliveryBundleDeliveryDays;
  /** The monthly price of the subscription */
  price: Money;
  /** Next renewal, null if already canceled */
  renewal?: Maybe<DeliveryBundleRenewal>;
  /** Last day of the subscription, null if not active */
  endDate?: Maybe<Scalars["String"]>;
  /** Subscription cancellation options and a the cancellation date */
  cancellation: DeliveryBundleCancellation;
  /** Whether the subscription is activated and can be used */
  isActive: Scalars["Boolean"];
  /** Whether the subscription can be changed */
  isChangeable: Scalars["Boolean"];
  /** What the next subscription type will be */
  nextSubscription?: Maybe<DeliveryBundleNextSubscription>;
};

/** Method of Delivery */
export enum DeliveryMethod {
  /** Delivery at a member's location */
  HomeDelivery = "HOME_DELIVERY",
  /** Delivery at a pickup location */
  Pickup = "PICKUP",
  /** Delivery at a member specific pickup location */
  PickupHomeDelivery = "PICKUP_HOME_DELIVERY",
  /** Unknown method */
  Unknown = "UNKNOWN",
}

/** Order pickup information */
export type DeliveryPickup = {
  __typename?: "DeliveryPickup";
  /** Id of pickup delivery */
  id: Scalars["String"];
};

/** When an order will be delivered */
export type DeliverySlot = IDeliverySlot & {
  __typename?: "DeliverySlot";
  /** Date of delivery slot */
  date: Scalars["String"];
  /** Begin time of range where delivery may be expected */
  from: Scalars["String"];
  /** End time of range where delivery may be expected */
  until: Scalars["String"];
  /** Whether the delivery slot is preferred or not */
  isPreferred?: Maybe<Scalars["Boolean"]>;
};

/** Status of delivery */
export enum DeliveryStatus {
  /** The delivery has been cancelled */
  Cancelled = "CANCELLED",
  /** The delivery has been delivered */
  Delivered = "DELIVERED",
  /** The order has been created, but a block has not yet been chosen. */
  Entered = "ENTERED",
  /** The delivery has been created with a timeslot that is valid for 1.5 hours */
  EnteredWithDeliveryBlock = "ENTERED_WITH_DELIVERY_BLOCK",
  /** The delivery is being packaged */
  Packaging = "PACKAGING",
  /** The order belonging to the delivery has been reopened */
  Reopened = "REOPENED",
  /** The delivery has been submitted and a timeslot has been reserved */
  Submitted = "SUBMITTED",
  /** The order cannot be altered and is being processed (picked/packed) */
  SubmittedWithShortrecEta = "SUBMITTED_WITH_SHORTREC_ETA",
  /** The order cannot be altered and is being transported to destination */
  SubmittedWithSimacanEta = "SUBMITTED_WITH_SIMACAN_ETA",
  /** Unknown status */
  Unknown = "UNKNOWN",
}

/** Delivery Information contains information about the delivery of an order */
export type DeliveryTrackTraceInformation = {
  __typename?: "DeliveryTrackTraceInformation";
  /** orderId */
  orderId: Scalars["Int"];
  /** The type of the order */
  orderType: DeliveryTrackTraceInformationOrderType;
  /** The order state */
  state: DeliveryTrackTraceInformationState;
  /** The state of pickup */
  pickupState: DeliveryTrackTraceInformationState;
  /** The state of delivery */
  deliveryState: DeliveryTrackTraceInformationState;
  /** A message that can be displayed */
  deliveryMessage: Scalars["String"];
  /** A list of messages sent to the users device */
  messages: Array<DeliveryTrackTraceInformationMessage>;
  /** Boolean that can determines if the message contained an ETA */
  messageContainsDeliveryEta: Scalars["Boolean"];
  /** The estimated start time */
  startEstimatedTimeArrival?: Maybe<Scalars["DateTime"]>;
  /** The estimated end time */
  endEstimatedTimeArrival?: Maybe<Scalars["DateTime"]>;
  /** The actual/realised delivery time */
  realisedDeliveryTime?: Maybe<Scalars["DateTime"]>;
  /** The amount of stops the 'bezorger' has to make before delivering the order to your address */
  stopsLeftBeforeThisOrder?: Maybe<Scalars["Int"]>;
};

/** A message about the delivery that can be displayed */
export type DeliveryTrackTraceInformationMessage = {
  __typename?: "DeliveryTrackTraceInformationMessage";
  /** The type of the message */
  type: DeliveryTrackTraceInformationMessageType;
  /** The text of the message */
  text: Scalars["String"];
};

/** The type of the message */
export enum DeliveryTrackTraceInformationMessageType {
  /** Default type used for notifications etc. */
  Display = "DISPLAY",
  /** Used for google assistant */
  Speech = "SPEECH",
}

/** The type of order */
export enum DeliveryTrackTraceInformationOrderType {
  /** UNKNOWN */
  Unknown = "UNKNOWN",
  /** PHYSICAL_STORE */
  PhysicalStore = "PHYSICAL_STORE",
  /** DELIVERY */
  Delivery = "DELIVERY",
  /** PICKUP_DELIVERY */
  PickupDelivery = "PICKUP_DELIVERY",
  /** DELIVERY_POINT */
  DeliveryPoint = "DELIVERY_POINT",
  /** PICKUP */
  Pickup = "PICKUP",
  /** IN_STORE_PICK */
  InStorePick = "IN_STORE_PICK",
  /** SPECIALS_ONLY */
  SpecialsOnly = "SPECIALS_ONLY",
}

/** List of possible states the order or delivery can have */
export enum DeliveryTrackTraceInformationState {
  /** REOPENED */
  Reopened = "REOPENED",
  /** ORDERED */
  Ordered = "ORDERED",
  /** IN PREPERATION */
  InPreparation = "IN_PREPARATION",
  /** OUT FOR DELIVERY */
  OutForDelivery = "OUT_FOR_DELIVERY",
  /** DELIVERED */
  Delivered = "DELIVERED",
  /** CANCELLED */
  Cancelled = "CANCELLED",
  /** INCIDENT */
  Incident = "INCIDENT",
  /** UNKNOWN */
  Unknown = "UNKNOWN",
  /** TO BE PICKED UP */
  ToBePickedUp = "TO_BE_PICKED_UP",
  /** PICKED UP */
  PickedUp = "PICKED_UP",
}

/** Common Delivery slot interface */
export type IDeliverySlot = {
  /** Date of delivery slot */
  date: Scalars["String"];
  /** Begin time of range where delivery may be expected */
  from: Scalars["String"];
  /** End time of range where delivery may be expected */
  until: Scalars["String"];
  /** Whether the delivery slot is preferred or not */
  isPreferred?: Maybe<Scalars["Boolean"]>;
};

/** Create feedback result */
export type CreateFeedbackResult = MutationResult & {
  __typename?: "CreateFeedbackResult";
  /** Mutation status */
  status: MutationResultStatus;
  /**
   * `
   * custom error message
   */
  errorMessage?: Maybe<Scalars["String"]>;
  /** created feedback Id */
  feedbackId?: Maybe<Scalars["String"]>;
};

/** Result of performing mutation */
export type CreateGeneralFeedbackResult = MutationResult & {
  __typename?: "CreateGeneralFeedbackResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Feedback id */
  feedbackId?: Maybe<Scalars["String"]>;
};

/** A feedback object */
export type Feedback = {
  __typename?: "Feedback";
  /** the id */
  id: Scalars["String"];
  /** the type of feedback */
  type: FeedbackType;
  /** if applicable the label that  matches the type of feedback */
  label?: Maybe<Scalars["String"]>;
  /** the rating 1-5 */
  rating?: Maybe<Scalars["Int"]>;
  /** shoppingtype for feedback */
  shoppingType?: Maybe<FeedbackShoppingType>;
  /** loyaltyProgram */
  loyaltyProgram?: Maybe<FeedbackLoyaltyProgram>;
  /** the product */
  product?: Maybe<Product>;
  /** fallback product description */
  productDescription: Scalars["String"];
  /** label for deposit type */
  depositLabel?: Maybe<Scalars["String"]>;
  /** How many items */
  quantity?: Maybe<Scalars["Int"]>;
  /** The amount of the settlement (0% 25% 50% 75% 100%) */
  settlementFraction?: Maybe<Scalars["Float"]>;
  /**
   * the settlement
   * @deprecated @sunset_date(2024-05-01) use settlementV2 instead
   * . .
   */
  settlements: Array<FeedbackSettlement>;
  /** the settlements */
  settlementsV2: Array<FeedbackSettlementV2>;
};

/** Feedback channel */
export enum FeedbackChannel {
  AhNl = "AH_NL",
  AhBe = "AH_BE",
  AhAppNl = "AH_APP_NL",
  AhAppBe = "AH_APP_BE",
  DealsAhNl = "DEALS_AH_NL",
  MyLifestyleCoachApp = "MY_LIFESTYLE_COACH_APP",
}

/** Feedback form type for ces feedback */
export enum FeedbackFormType {
  /** Product complaint form online */
  ProductComplaintFormOnline = "PRODUCT_COMPLAINT_FORM_ONLINE",
  /** Product complaint form store */
  ProductComplaintFormStore = "PRODUCT_COMPLAINT_FORM_STORE",
  /** Deposit complaint form */
  DepositForm = "DEPOSIT_FORM",
  /** Product Return form */
  ReturnForm = "RETURN_FORM",
}

/** The feedback image with url */
export type FeedbackImageWithUrl = {
  __typename?: "FeedbackImageWithUrl";
  /** The id */
  imageId: Scalars["String"];
  /** The image url that is only valid for 5 seconds */
  url: Scalars["String"];
};

/** The type of loyalty program */
export enum FeedbackLoyaltyProgram {
  AhPremium = "AH_PREMIUM",
  PurchaseStamps = "PURCHASE_STAMPS",
  SavingCampaigns = "SAVING_CAMPAIGNS",
  DeliveryBundle = "DELIVERY_BUNDLE",
  AhMiles = "AH_MILES",
}

/** FeedbackOption is a type that represents an option for feedback */
export type FeedbackOption = {
  __typename?: "FeedbackOption";
  /** The label of the option */
  label: Scalars["String"];
  /** The feedbackType */
  type: FeedbackType;
  /** ShoppingType of the option */
  shoppingType?: Maybe<FeedbackShoppingType>;
  /** The channel */
  channel?: Maybe<FeedbackChannel>;
  /** The loyalty program */
  loyaltyProgram?: Maybe<FeedbackLoyaltyProgram>;
};

/** FeedbackOption is a type that represents an option for feedback */
export type FeedbackOptionList = {
  __typename?: "FeedbackOptionList";
  /** The label of the option */
  label: Scalars["String"];
  /** The filter of the option */
  filter: Scalars["String"];
  /** Feedback options that are part of the list */
  children: Array<FeedbackOption>;
};

/** Order available for feedback */
export type FeedbackOrder = {
  __typename?: "FeedbackOrder";
  /** Order id */
  id: Scalars["String"];
  /** Order id */
  shoppingType: FeedbackOrderShoppingType;
  /** Transaction date */
  transactionDateTime: Scalars["String"];
  /** Start time of the delivery slot */
  deliveryStartTime?: Maybe<Scalars["String"]>;
  /** End time of the delivery slot */
  deliveryEndTime?: Maybe<Scalars["String"]>;
  /** The address of either a store where it's bought, or a home address if ordered online */
  transactionAddress: FeedbackOrderAddress;
};

/** The order address can be a store location or a home address of a customer */
export type FeedbackOrderAddress = {
  __typename?: "FeedbackOrderAddress";
  /** Name of the city */
  city?: Maybe<Scalars["String"]>;
  /** Country code of the order */
  countryCode?: Maybe<Scalars["String"]>;
  /** House number combined with houseNumberExtra */
  houseNumber?: Maybe<Scalars["String"]>;
  /** The postal code */
  postalCode?: Maybe<Scalars["String"]>;
  /** Name of the street */
  street?: Maybe<Scalars["String"]>;
};

/** ShoppingType of the order eligible for feedback */
export enum FeedbackOrderShoppingType {
  Unknown = "UNKNOWN",
  PhysicalStore = "PHYSICAL_STORE",
  Delivery = "DELIVERY",
  PickupDelivery = "PICKUP_DELIVERY",
  DeliveryPoint = "DELIVERY_POINT",
  Pickup = "PICKUP",
  InStorePick = "IN_STORE_PICK",
  SpecialsOnly = "SPECIALS_ONLY",
}

/** The settlement linked to feedback */
export type FeedbackSettlement = {
  __typename?: "FeedbackSettlement";
  /** The id */
  id: Scalars["Int"];
  /** The settlement type */
  type: SettlementType;
  /** How many items */
  quantity?: Maybe<Scalars["Int"]>;
  /** human readable label */
  label: Scalars["String"];
  /** the refund amount */
  amount: Money;
};

/** The settlement linked to feedback */
export type FeedbackSettlementV2 = {
  __typename?: "FeedbackSettlementV2";
  /** The id */
  id: Scalars["String"];
  /** The settlement type */
  type: SettlementType;
  /** How many items */
  quantity?: Maybe<Scalars["Int"]>;
  /** human readable label */
  label: Scalars["String"];
  /** the refund amount */
  amount: Money;
};

/** The type of Shopping */
export enum FeedbackShoppingType {
  Online = "ONLINE",
  Store = "STORE",
}

/** The source of feedback */
export enum FeedbackSource {
  ProductComplaintForm = "PRODUCT_COMPLAINT_FORM",
  ProductReturnForm = "PRODUCT_RETURN_FORM",
  DepositForm = "DEPOSIT_FORM",
  FeedbackForm = "FEEDBACK_FORM",
  CesForm = "CES_FORM",
  Salesforce = "SALESFORCE",
  Faq = "FAQ",
  DeliveryApp = "DELIVERY_APP",
  PaymentProcessor = "PAYMENT_PROCESSOR",
  Email = "EMAIL",
  DigitalAssistant = "DIGITAL_ASSISTANT",
  CustomerContentScoreForm = "CUSTOMER_CONTENT_SCORE_FORM",
  CustomerEffortScoreForm = "CUSTOMER_EFFORT_SCORE_FORM",
  CustomerInteractionScoreForm = "CUSTOMER_INTERACTION_SCORE_FORM",
  SubscriptionEventProcessor = "SUBSCRIPTION_EVENT_PROCESSOR",
}

/** The type of feedback. */
export enum FeedbackType {
  Completeness = "COMPLETENESS",
  MissingLoadCarrier = "MISSING_LOAD_CARRIER",
  Assortment = "ASSORTMENT",
  Availability = "AVAILABILITY",
  Frozen = "FROZEN",
  Defrosted = "DEFROSTED",
  Damaged = "DAMAGED",
  Spoiled = "SPOILED",
  Quality = "QUALITY",
  PastExpiryMargin = "PAST_EXPIRY_MARGIN",
  ActionCode = "ACTION_CODE",
  WrongDelivery = "WRONG_DELIVERY",
  PackagingDeposit = "PACKAGING_DEPOSIT",
  Return = "RETURN",
  Bonus = "BONUS",
  BonusPersonal = "BONUS_PERSONAL",
  Pricing = "PRICING",
  CalculationError = "CALCULATION_ERROR",
  DeliveryTimeliness = "DELIVERY_TIMELINESS",
  DeliverySlots = "DELIVERY_SLOTS",
  Hygiene = "HYGIENE",
  Payment = "PAYMENT",
  Staff = "STAFF",
  FunctioningWebsite = "FUNCTIONING_WEBSITE",
  FunctioningApp = "FUNCTIONING_APP",
  Loyalty = "LOYALTY",
  Sustainability = "SUSTAINABILITY",
  General = "GENERAL",
  CorrectionPartnershop = "CORRECTION_PARTNERSHOP",
  NotAtHome = "NOT_AT_HOME",
  DepositsExceedOrderValue = "DEPOSITS_EXCEED_ORDER_VALUE",
  DoublePayment = "DOUBLE_PAYMENT",
  CancelledByCustomerSupport = "CANCELLED_BY_CUSTOMER_SUPPORT",
  CancelledByCustomer = "CANCELLED_BY_CUSTOMER",
  NotPickedUp = "NOT_PICKED_UP",
  PickupOrderCosts = "PICKUP_ORDER_COSTS",
  GeneralCompensation = "GENERAL_COMPENSATION",
  GeneralCorrection = "GENERAL_CORRECTION",
  Content = "CONTENT",
  Accessibility = "ACCESSIBILITY",
  Outage = "OUTAGE",
  Search = "SEARCH",
  ServiceHours = "SERVICE_HOURS",
  Speed = "SPEED",
  Form = "FORM",
}

/** Update feedback result */
export type UpdateFeedbackResult = MutationResult & {
  __typename?: "UpdateFeedbackResult";
  /** Mutation status */
  status: MutationResultStatus;
  /**
   * `
   * custom error message
   */
  errorMessage?: Maybe<Scalars["String"]>;
  /** created feedback Id */
  feedbackId?: Maybe<Scalars["String"]>;
};

/** List containing a member's favorite products. */
export type FavoriteList = {
  __typename?: "FavoriteList";
  /** List id */
  id: Scalars["Int"];
  /** List id (will replace the "id" field later) */
  referenceId: Scalars["String"];
  /** List description */
  description: Scalars["String"];
  /** Total size of items in the list */
  totalSize: Scalars["Int"];
  /** List items, contains quantity information needed for products. */
  items: Array<FavoriteListItem>;
  /** Products matching the favorite list items. */
  products: Array<Product>;
  /**
   * Favorite list image. At least one product should be in the list for the image to show.
   * @deprecated @sunset_date(2024-08-01) This field now uses the new imagePack provider through a workaround please use the field imageUrl instead this only returns the url of the first image
   * . field imageUrl.
   */
  imageSet?: Maybe<ProductImageSet>;
  /** Indicates if a fovorite list is a shared list. */
  sharedBy: FavoriteListSharedBy;
  /** url of the image of the first product in the favoritelist */
  imageUrl?: Maybe<Scalars["String"]>;
  /** The date the favorite list has been changed */
  updatedAt: Scalars["String"];
};

/** Items on a favorite list. */
export type FavoriteListItem = {
  __typename?: "FavoriteListItem";
  /** List item id */
  id: Scalars["Int"];
  /** List item product ID */
  productId: Scalars["Int"];
  /** List item quantity */
  quantity: Scalars["Int"];
};

/** Items on a favorite list. */
export type FavoriteListItemV2 = {
  __typename?: "FavoriteListItemV2";
  /** List item id */
  id: Scalars["String"];
  /** List item product ID */
  productId: Scalars["Int"];
  /** List item quantity */
  quantity: Scalars["Int"];
};

/** Result of a mutation done to a favorite list. */
export type FavoriteListMutationResult = MutationResult & {
  __typename?: "FavoriteListMutationResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** List after performing the mutation */
  result?: Maybe<FavoriteList>;
};

/** Result of a mutation done to a favorite list. */
export type FavoriteListMutationResultV2 = MutationResult & {
  __typename?: "FavoriteListMutationResultV2";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** List after performing the mutation */
  result?: Maybe<FavoriteListV2>;
};

/** Add a product to a favorite list or update the quantity of an existing one. */
export type FavoriteListProductMutation = {
  /** Product id of the favorite list item */
  productId: Scalars["Int"];
  /** Quantity of the product. Defaults to 1. */
  quantity?: Maybe<Scalars["Int"]>;
};

/** Shared by enum */
export enum FavoriteListSharedBy {
  /** You shared this list with others */
  Me = "ME",
  /** Not a shared list */
  NotShared = "NOT_SHARED",
  /** Someone else shared this list with you */
  Other = "OTHER",
}

/** List containing a member's favorite products. */
export type FavoriteListV2 = {
  __typename?: "FavoriteListV2";
  /** List id */
  id: Scalars["String"];
  /** List description */
  description: Scalars["String"];
  /** Total size of items in the list */
  totalSize: Scalars["Int"];
  /** List items, contains quantity information needed for products. */
  items: Array<FavoriteListItemV2>;
  /** Products matching the favorite list items. */
  products: Array<Product>;
  /** Indicates if a fovorite list is a shared list. */
  sharedBy: FavoriteListSharedBy;
  /** url of the image of the first product in the favoritelist */
  imageUrl?: Maybe<Scalars["String"]>;
  /** The date the favorite list has been changed */
  updatedAt: Scalars["String"];
};

/** For each product we have some images */
export type ProductImageSet = {
  __typename?: "ProductImageSet";
  /** The product ID */
  productId: Scalars["Int"];
  /** image dimensions: 24x24 */
  d24x24?: Maybe<Scalars["String"]>;
  /** image dimensions: 80x80 */
  d80x80?: Maybe<Scalars["String"]>;
  /** image dimensions: 200x200 */
  d200x200?: Maybe<Scalars["String"]>;
  /** image dimensions: 708x708 */
  d708x708?: Maybe<Scalars["String"]>;
};

/** Result of a mutation done to a favorite list's shared entity member's permissions */
export type SharedEntityMutationResult = MutationResult & {
  __typename?: "SharedEntityMutationResult";
  /** Whether mutation failed or succeeded */
  status: MutationResultStatus;
  /** Error message (if applicable) */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Reference ID(s) of favorite list(s) which member permissions have altered */
  result?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** Invoice specification */
export type Invoice = {
  __typename?: "Invoice";
  /** Cost of invoice */
  price?: Maybe<Money>;
  /** Invoice date */
  date: Scalars["String"];
  /** Invoice unique id */
  id: Scalars["String"];
  /** url of where user can download invoice */
  url?: Maybe<Scalars["String"]>;
  /** The unique number of the order of the invoice */
  orderId: Scalars["String"];
  /** Already covered cost of invoice */
  openAmount?: Maybe<Money>;
};

/** Input given to fetch invoices */
export type InvoiceInput = {
  /** Starting point of invoice to collect */
  offset?: Maybe<Scalars["Int"]>;
  /** Amount of invoices to collect */
  limit?: Maybe<Scalars["Int"]>;
  /** OrderId to which the invoices should be connected */
  orderId?: Maybe<Scalars["Int"]>;
};

/** Result of found invoices */
export type Invoices = {
  __typename?: "Invoices";
  /** Invoices found for the user */
  results: Array<Maybe<Invoice>>;
  /** Pagination for all invoices */
  pagination: Pagination;
};

/** Keep track of the pages of given items */
export type Pagination = {
  __typename?: "Pagination";
  /** Total size of all items */
  totalSize: Scalars["Int"];
  /** Number of given items */
  offset: Scalars["Int"];
  /** Size of all items for this page */
  pageSize: Scalars["Int"];
};

/**
 * A type containing a loyalty challenge that a member can participate in. Contains information
 * on the challenge configuration and content. Does not contain any member-specific data, thus
 * is cacheable.
 */
export type LoyaltyChallenge = {
  __typename?: "LoyaltyChallenge";
  /** The ID of the challenge. */
  id: Scalars["Int"];
  /**
   * The status of the challenge. Can be used to see if a challenge is active, completed, or
   * has been failed. Also can be used to see if a challenge is activatable for a member.
   */
  status: LoyaltyChallengeStatus;
  /**
   * The type of the challenge. Can be used to determine how to communicate towards a member
   * about this challenge.
   * @deprecated @sunset_date(2025-03-01) Part of loyalty challenges v1
   * . .
   */
  type: LoyaltyChallengeType;
  /**
   * The duration between which the challenge is active.
   * @deprecated @sunset_date(2025-03-01) Part of loyalty challenges v1
   * . .
   */
  duration: LoyaltyChallengeDuration;
  /** The name of the challenge. Can also be referred to as the title of the challenge. */
  name: Scalars["String"];
  /**
   * The status message of the challenge. Can be used to show a message to the member about
   * the current status towards completing the challenge. Examples could be strings like
   * "3 weeks left", "1 week left", "you have completed the challenge". Is rendered on the
   * server-side based on the current status of the challenge for the given member.
   */
  statusMessage: Scalars["String"];
  /** The theme of the challenge. */
  theme: ContentThemeConfiguration;
  /** The image of the challenge. Used for example the header of a challenge. */
  image: Array<ImageSet>;
  /**
   * The information about the challenge. Contains various bits of content to display to a
   * member.
   */
  info: LoyaltyChallengeInfo;
  /**
   * The reward that a member earns upon completing the challenge. Contains various bits of
   * content to display to a member.
   */
  reward: LoyaltyChallengeReward;
  /** The steps that make up the challenge. */
  steps: Array<LoyaltyChallengeStep>;
  /**
   * A link (can be rendered as a button) that will forward the user to an overview of the
   * the challenge. Nullable, not all challenges might have a need for linking to more
   * information about the challenge.
   */
  overviewInfoLink?: Maybe<LoyaltyChallengeInfoLink>;
};

/** A type containing information for a banner to show in the challenge. */
export type LoyaltyChallengeBanner = {
  __typename?: "LoyaltyChallengeBanner";
  /** The title of the banner. */
  title: Scalars["String"];
  /** The body text of the banner. */
  body: Scalars["String"];
  /** The image to show in the banner. */
  image: Array<ImageSet>;
};

/**
 * A type containing a duration of a loyalty challenge. Could represent the start and end date
 * of a step, or of the entire challenge, depending on where it is used.
 */
export type LoyaltyChallengeDuration = {
  __typename?: "LoyaltyChallengeDuration";
  /** The start date of the duration. Always present, as a duration always has a start date. */
  start: Scalars["Date"];
  /** The end date of the duration. Optional, some durations might not expire. */
  end?: Maybe<Scalars["Date"]>;
};

/**
 * A type containing the information of a loyalty challenge. Contains various bits of content to
 * display to a member.
 */
export type LoyaltyChallengeInfo = {
  __typename?: "LoyaltyChallengeInfo";
  /** The title of the challenge. */
  title: Scalars["String"];
  /** The description of the challenge. */
  description: Scalars["String"];
  /**
   * URL to the Terms & Conditions (legal text) for the challenge. Usually is a PDF file
   * hosted in static assets somewhere, and opened in a web view.
   */
  termsAndConditionsUrl: Scalars["String"];
  /**
   * The list containing the various terms of the challenge. These dictate the rules and
   * restrictions of partaking in the challenge.
   */
  terms: Array<LoyaltyChallengeTerm>;
  /**
   * A link (can be rendered as a button) that will forward the user to more information about
   * the challenge. Nullable, not all challenges might have a need for linking to more
   * information about the challenge.
   */
  moreInfoLink?: Maybe<LoyaltyChallengeInfoLink>;
};

/**
 * A type containing a link to more information about the challenge. Contains text, an image,
 * and a target to route to.
 */
export type LoyaltyChallengeInfoLink = {
  __typename?: "LoyaltyChallengeInfoLink";
  /** The title of the link. */
  title: Scalars["String"];
  /** The image to render alongside the text that is shown on the link. */
  image: Array<ImageSet>;
  /** The body text to show on the link. */
  description?: Maybe<Scalars["String"]>;
  /** The target to route the member to upon interaction with the link. */
  target: LoyaltyChallengeInfoLinkTarget;
};

/** A type containing the target of a link to more information about the challenge. */
export type LoyaltyChallengeInfoLinkTarget = {
  __typename?: "LoyaltyChallengeInfoLinkTarget";
  /** The type of target. This dictates how the link should be interpreted. */
  type: LoyaltyChallengeInfoLinkTargetType;
  /** The target to route the member to upon interaction with the link. */
  link: Scalars["String"];
};

/**
 * An enumeration that contains the various types that a link to more information about the
 * challenge can be.
 */
export enum LoyaltyChallengeInfoLinkTargetType {
  /** A web link. */
  Weblink = "WEBLINK",
  /** A deep link. */
  Deeplink = "DEEPLINK",
}

/** Result after opting a member in to the challenge. */
export type LoyaltyChallengeOptInMutationResult = MutationResult & {
  __typename?: "LoyaltyChallengeOptInMutationResult";
  /** Whether mutation succeeded, failed completely or partially. */
  status: MutationResultStatus;
  /** The loyalty challenge that was opted in to. */
  challenge?: Maybe<LoyaltyChallenge>;
  /** Relevant error message if applicable. */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Result after opting a member out of the challenge. */
export type LoyaltyChallengeOptOutMutationResult = MutationResult & {
  __typename?: "LoyaltyChallengeOptOutMutationResult";
  /** Whether mutation succeeded, failed completely or partially. */
  status: MutationResultStatus;
  /** Relevant error message if applicable. */
  errorMessage?: Maybe<Scalars["String"]>;
};

/**
 * A type containing the reward of a challenge. Contains various bits of content to display to a
 * member.
 */
export type LoyaltyChallengeReward = {
  __typename?: "LoyaltyChallengeReward";
  /**
   * The banner to show information about the reward.
   * @deprecated @sunset_date(2025-03-01) Part of loyalty challenges v1
   * . .
   */
  banner: LoyaltyChallengeBanner;
  /** The image to show as part of finishing the challenge. */
  image: Array<ImageSet>;
  /** The expiration duration of the reward. */
  duration: LoyaltyChallengeDuration;
};

/** A type containing the status of a challenge. */
export enum LoyaltyChallengeStatus {
  /** The challenge can be activated by the member. */
  Activatable = "ACTIVATABLE",
  /** The member opted into the challenge, but the current date is before the challenge start date. */
  NotStarted = "NOT_STARTED",
  /** The challenge is currently in progress. */
  InProgress = "IN_PROGRESS",
  /** The challenge has been completed successfully. */
  Completed = "COMPLETED",
  /** The challenge reward has been collected. */
  Consumed = "CONSUMED",
  /** The member failed to complete the challenge (in time). */
  Failed = "FAILED",
}

/** A type containing a step of a challenge. */
export type LoyaltyChallengeStep = {
  __typename?: "LoyaltyChallengeStep";
  /** The ID of the step. These are unique across all challenges. */
  id: Scalars["Int"];
  /**
   * The status of the step. Can be used to see if a step is active, completed, or
   * has been failed.
   */
  status: LoyaltyChallengeStepStatus;
  /** The duration of the step. */
  duration: LoyaltyChallengeDuration;
  /** The label to display. */
  label: Scalars["String"];
  /** The subtitle to display. */
  subtitle: Scalars["String"];
  /** The body text to display. */
  body: Scalars["String"];
  /**
   * The target to achieve in order to complete the step.
   * @deprecated @sunset_date(2025-03-01) Part of loyalty challenges v1
   * . .
   */
  target: LoyaltyChallengeStepTarget;
  /**
   * The progress towards the target. Will be 0 when the member has not
   * opted in for the challenge (yet).
   */
  progress: Scalars["Int"];
  /**
   * The maximum progress that can be achieved for this step. When the progress >= maxProgress,
   * the step is completed.
   */
  maxProgress: Scalars["Int"];
};

/** A type containing the status of a step. */
export enum LoyaltyChallengeStepStatus {
  /** The step will be active in the future. */
  Future = "FUTURE",
  /** The step is currently active and in progress. */
  InProgress = "IN_PROGRESS",
  /** The step has been completed. */
  Completed = "COMPLETED",
  /** The step has been failed. */
  Failed = "FAILED",
}

/** A type containing the target of a step of a challenge. */
export type LoyaltyChallengeStepTarget = {
  __typename?: "LoyaltyChallengeStepTarget";
  /** The target type. This dictates how the target should be interpreted. */
  type: LoyaltyChallengeStepTargetType;
  /** The target value. This is the value that the member should reach in order to complete */
  amount: Scalars["Int"];
};

/** An enumeration that contains the various types of step targets. */
export enum LoyaltyChallengeStepTargetType {
  /** Money. */
  Euros = "EUROS",
  /** Generic points. */
  Points = "POINTS",
}

/** A type containing information on a term of a challenge. */
export type LoyaltyChallengeTerm = {
  __typename?: "LoyaltyChallengeTerm";
  /**
   * The term type. Used to for example show an icon next to the term.
   * @deprecated @sunset_date(2025-03-01) Part of loyalty challenges v1
   * . .
   */
  type: LoyaltyChallengeTermType;
  /** The title of the term. */
  title: Scalars["String"];
  /** The description of the term. */
  description: Scalars["String"];
  /** The image to show alongside the term. */
  image: Array<ImageSet>;
};

/**
 * An enumeration that contains the various types that a term might related to. Used for
 * displaying the term correctly towards the member.
 */
export enum LoyaltyChallengeTermType {
  /** The term relates to something with regards to store activity. */
  Store = "STORE",
  /** The term relates to something with regards to online activity. */
  Online = "ONLINE",
  /** The term excludes one or multiple types of products or taxonomies. */
  ProductExclusion = "PRODUCT_EXCLUSION",
  /** The term is of a generic type. */
  Generic = "GENERIC",
}

/**
 * An enumeration that contains the various types that a challenge or step can be. Used for
 * communication towards the member about the progress of the challenge or step.
 */
export enum LoyaltyChallengeType {
  /** A daily challenge. */
  Daily = "DAILY",
  /** A weekly challenge. */
  Weekly = "WEEKLY",
  /** A basic challenge, not bound by time. */
  Basic = "BASIC",
}

/** A single loyalty points balance. This balance can be of a campaign of any type. */
export type LoyaltyPointsBalance = {
  __typename?: "LoyaltyPointsBalance";
  /** The ID of the campaign the balance belongs to. */
  programId: Scalars["Int"];
  /** The balance for the given campaign. */
  balance: Scalars["Int"];
};

/**
 * A single loyalty points transaction. These transactions indicate additions or removals
 * of loyalty points from a member's loyalty points balance.
 */
export type LoyaltyPointsTransaction = {
  __typename?: "LoyaltyPointsTransaction";
  /** The date and time at which the transaction took place. */
  dateTime: Scalars["DateTime"];
  /**
   * @deprecated - Use LoyaltyPointsTransactionType
   * The reason of the transaction.
   */
  reason: LoyaltyPointsTransactionReason;
  /** The type of the transaction. */
  type: LoyaltyPointsTransactionType;
  /** The amount of points involved in the transaction. Can be both positive and negative. */
  amount: Scalars["Int"];
};

/**
 * A page containing transactions. This type also has a pagination object attached to it
 * with information on the pagination object that was passed along.
 */
export type LoyaltyPointsTransactionPage = {
  __typename?: "LoyaltyPointsTransactionPage";
  /** The pagination object with more information on this page's pagination object. */
  pagination: LoyaltyPointsTransactionPagination;
  /**
   * The list of transactions on this page. Can be empty if there are no more transactions
   * given the input pagination parameters.
   */
  transactions: Array<LoyaltyPointsTransaction>;
};

/**
 * A pagination object containing information on the page of transactions that was
 * returned.
 */
export type LoyaltyPointsTransactionPagination = {
  __typename?: "LoyaltyPointsTransactionPagination";
  /** The offset of the page. */
  offset: Scalars["Int"];
  /** The limit of items on the page. */
  limit: Scalars["Int"];
  /**
   * The pagination session key. To be attached on subsequent calls to ensure that
   * transactions do not randomly jump in case of new transactions.
   */
  key: Scalars["String"];
};

/**
 * @deprecated - Use LoyaltyPointsTransactionType
 * An enum to indicate the reason for a transaction.
 */
export enum LoyaltyPointsTransactionReason {
  /**
   * The reason for the transaction is unknown. This should not happen often and might
   * indicate a data problem.
   */
  Unknown = "UNKNOWN",
  /**
   * Transaction as part of (regular) activity in the store. For example, a customer has
   * bought products and received loyalty points as part of it. Or a customer has redeemed
   * loyalty points for a discount on a loyalty product.
   */
  Store = "STORE",
  /**
   * Boosted transaction (Premium) as part of (regular) activity in the store. For example,
   * a customer has bought products and received double loyalty points due to Premium as part
   * of it.
   */
  StoreBoosted = "STORE_BOOSTED",
  /**
   * Transaction as part of (regular) activity online. For example, a customer has placed
   * an order and has received loyalty points as a result of that.
   */
  Online = "ONLINE",
  /**
   * Boosted transaction (Premium) as part of (regular) activity online. For example, a customer
   * has placed an order and has received double loyalty points due to Premium as a result of that.
   */
  OnlineBoosted = "ONLINE_BOOSTED",
  /**
   * Transaction as part of stamp sharing flows. For example, a customer has received or sent
   * loyalty points to another customer.
   */
  Gift = "GIFT",
  /**
   * A correction by a store employee or the customer service department. For example, a
   * customer complained that they did not receive any loyalty points after a store transaction.
   */
  Correction = "CORRECTION",
}

/** An enum to indicate the type of a transaction. */
export enum LoyaltyPointsTransactionType {
  /**
   * A correction by a store employee or the customer service department. For example, a
   * customer complained that they did not receive any loyalty points after a store transaction.
   */
  Correction = "CORRECTION",
  /**
   * Transaction as part of stamp sharing flows. For example, a customer has received
   * loyalty points from another customer.
   */
  GiftReceived = "GIFT_RECEIVED",
  /**
   * Transaction as part of stamp sharing flows. For example, a customer has sent
   * loyalty points to another customer.
   */
  GiftSent = "GIFT_SENT",
  /**
   * Transaction as part of (regular) activity online. For example, a customer has placed
   * an order and has received loyalty points as a result of that.
   */
  Online = "ONLINE",
  /**
   * Boosted transaction (Premium) as part of (regular) activity online. For example, a customer
   * has placed an order and has received double loyalty points due to Premium as a result of that.
   */
  OnlineBoosted = "ONLINE_BOOSTED",
  /** Customer redeems Purchase Stamps. */
  Payout = "PAYOUT",
  /** Customer redeems a digital saving program stamps, e.g. during Scratching. */
  Redeemed = "REDEEMED",
  /**
   * Transaction as part of (regular) activity in the store. For example, a customer has
   * bought products and received loyalty points as part of it. Or a customer has redeemed
   * loyalty points for a discount on a loyalty product.
   */
  Store = "STORE",
  /**
   * Boosted transaction (Premium) as part of (regular) activity in the store. For example,
   * a customer has bought products and received double loyalty points due to Premium as part
   * of it.
   */
  StoreBoosted = "STORE_BOOSTED",
  /**
   * The reason for the transaction is unknown. This should not happen often and might
   * indicate a data problem.
   */
  Unknown = "UNKNOWN",
}

/** Represents a loyalty program, including basic program information and content. */
export type LoyaltyProgram = {
  __typename?: "LoyaltyProgram";
  /** The program's ID. */
  id: Scalars["Int"];
  /** The name of the program. Might not always be suitable for display to users. */
  name: Scalars["String"];
  /** The type of the program. */
  type: LoyaltyProgramType;
  /**
   * The period in which users can save points for this program. Nullable, as
   * not all programs are tied to a period (e.g. AH to go or Koopzegels).
   */
  savingPeriod?: Maybe<LoyaltyProgramPeriod>;
  /**
   * The period in which users can redeem points for this program. Nullable, as
   * not all programs are tied to a period (e.g. AH to go or Koopzegels)
   */
  redeemPeriod?: Maybe<LoyaltyProgramPeriod>;
  /** The current state of the program, derived by the backend from the periods. */
  status: LoyaltyProgramState;
  /**
   * The program's displayable content to users. Might be null if no content was set up for
   * this program.
   */
  content?: Maybe<LoyaltyProgramContent>;
  /**
   * The program's redeemable products. Might be an empty array if this program does not
   * have any redeemable products. Might be null when the products could not be resolved.
   */
  products?: Maybe<Array<LoyaltyProgramProduct>>;
};

/** Basic information about the program that can be displayed. */
export type LoyaltyProgramAboutContent = {
  __typename?: "LoyaltyProgramAboutContent";
  /** The title of the content about the program. */
  title?: Maybe<Scalars["String"]>;
  /**
   * A body containing content about the program. Can contain rich text, which is enriched with
   * HTML tags for text formatting. Be aware of this, and always process the data in this field
   * with a text enricher before displaying it to the user.
   */
  body?: Maybe<Scalars["String"]>;
  /**
   * An image to be displayed alongside the about content. Might be empty if no images are
   * configured.
   */
  image: Array<ImageSet>;
};

/** Information on the reusable banner of a program. */
export type LoyaltyProgramBannerContent = {
  __typename?: "LoyaltyProgramBannerContent";
  /** The banner's body. */
  body?: Maybe<Scalars["String"]>;
  /** The banner's title. */
  title?: Maybe<Scalars["String"]>;
  /**
   * The banner's theme.
   * @deprecated @sunset_date(2023-09-01) Use themeConfiguration.theme instead.
   * . .
   */
  theme?: Maybe<Scalars["String"]>;
  /**
   * The configuration of the banner's theme, containing the colors and/or images to be
   * displayed.
   */
  themeConfiguration?: Maybe<ContentThemeConfiguration>;
  /** The banner's image set. Might be empty if no images are configured. */
  image: Array<ImageSet>;
  /** The banner's call to action. */
  cta?: Maybe<LoyaltyProgramCtaContent>;
};

/** The main type containing all displayable program content. */
export type LoyaltyProgramContent = {
  __typename?: "LoyaltyProgramContent";
  /** The title of the program. */
  title?: Maybe<Scalars["String"]>;
  /** The subtitle of the program. */
  subtitle?: Maybe<Scalars["String"]>;
  /**
   * The theme of the program.
   * @deprecated @sunset_date(2023-09-01) use themeConfiguration.theme instead.
   * . .
   */
  theme?: Maybe<Scalars["String"]>;
  /** The configuration of a theme, containing the colors and/or images to be displayed. */
  themeConfiguration?: Maybe<ContentThemeConfiguration>;
  /** Information on a program in the form of formatted / rich text. */
  about?: Maybe<LoyaltyProgramAboutContent>;
  /**
   * Information on the stamps of the program, such as the image of a stamp, the image of
   * an empty spot where a stamp could be and the number of stamps that make up a full card.
   */
  stamps?: Maybe<LoyaltyProgramStampContent>;
  /**
   * Information on a generic banner that can be used as a CTA for the program. Think about
   * things like "View products" or "Share stamps".
   */
  banner?: Maybe<LoyaltyProgramBannerContent>;
  /**
   * Information on a generic banner that can be used as a header or hero for the program.
   * Think about things like a header on the list of redeemable products or above a section
   * with details on the program.
   */
  heroBanner?: Maybe<LoyaltyProgramHeroBannerContent>;
  /**
   * Information on links related to the program, such as the Terms & Conditions or the web
   * pages with more details on the program.
   */
  links?: Maybe<LoyaltyProgramLinks>;
  /** Information on the main Call To Action (CTA) of the program. */
  cta?: Maybe<LoyaltyProgramCtaContent>;
  /**
   * Frequently Asked Questions that are attached to this program. Might be null if no FAQ
   * document is attached in the CMS.
   */
  faq?: Maybe<LoyaltyProgramQuestionsContent>;
  /** An URL for Easter Egg content. */
  easterEgg?: Maybe<Scalars["String"]>;
};

/** Information on a CTA of a program. */
export type LoyaltyProgramCtaContent = {
  __typename?: "LoyaltyProgramCtaContent";
  /** The text to display in the CTA (button). */
  text?: Maybe<Scalars["String"]>;
  /** The place to link to when interacting with the CTA. Can be a deeplink or a web link. */
  link?: Maybe<Scalars["String"]>;
  /** The type of the CTA link. */
  linkType?: Maybe<LoyaltyProgramCtaLinkType>;
};

/** Type of the CTA link. */
export enum LoyaltyProgramCtaLinkType {
  /** The link is a deep link. */
  Deeplink = "DEEPLINK",
  /** The link is a web link. */
  Weblink = "WEBLINK",
}

/**
 * Information on the reusable hero banner of a program. Differs from a regular banner as
 * a hero banner does not contain any CTA.
 */
export type LoyaltyProgramHeroBannerContent = {
  __typename?: "LoyaltyProgramHeroBannerContent";
  /** The banner's title. */
  title?: Maybe<Scalars["String"]>;
  /**
   * The banner's theme.
   * @deprecated @sunset_date(2023-09-01) Use themeConfiguration.theme instead.
   * . .
   */
  theme?: Maybe<Scalars["String"]>;
  /**
   * The configuration of the banner's theme, containing the colors and/or images to be
   * displayed.
   */
  themeConfiguration?: Maybe<ContentThemeConfiguration>;
  /** The banner's image set. Might be empty if no images are configured. */
  image: Array<ImageSet>;
  /** The banner's body text. */
  body?: Maybe<Scalars["String"]>;
};

/** The program's external links. */
export type LoyaltyProgramLinks = {
  __typename?: "LoyaltyProgramLinks";
  /** A link to a place that contains the terms & conditions of the program. */
  termsAndConditions?: Maybe<Scalars["String"]>;
  /**
   * A link to a place that contains more details on the program. Examples could be a theme
   * page in the app (deeplink) or a link to a web page.
   */
  details?: Maybe<Scalars["String"]>;
};

/** A type containing a period between two dates. */
export type LoyaltyProgramPeriod = {
  __typename?: "LoyaltyProgramPeriod";
  /** Start date of the period. */
  start: Scalars["Date"];
  /** End date of the period. */
  end: Scalars["Date"];
};

/**
 * A redeemable product as part of a program. Contains the resolved product from the
 * product-resolver, as well as the overrides defined for the product. These overrides
 * should be applied on the resolved products' data. For example, if the overrides
 * contains a different product title, then it should override the NASA product's title.
 */
export type LoyaltyProgramProduct = {
  __typename?: "LoyaltyProgramProduct";
  /** The number of points needed to redeem this product. */
  points: Scalars["Int"];
  /**
   * The product overrides. These values should override the values from the resolved
   * NASA product.
   */
  overrides?: Maybe<LoyaltyProgramProductOverrides>;
  /** The product as resolved through the product-resolver. */
  product: Product;
};

/** Defines the content overrides for a LoyaltyProgramProduct. */
export type LoyaltyProgramProductOverrides = {
  __typename?: "LoyaltyProgramProductOverrides";
  /** The base price of the product, or the "guidance" price. */
  basePrice: Money;
  /**
   * The discounted price of the product, which is the price you can buy the
   * product for if you have a full card.
   */
  discountedPrice: Money;
};

/** A Frequently Asked Question (FAQ) with an answer attached to it. */
export type LoyaltyProgramQuestionContent = {
  __typename?: "LoyaltyProgramQuestionContent";
  /**
   * The title of the FAQ, which most likely is also the question that a customer could
   * ask for.
   */
  title?: Maybe<Scalars["String"]>;
  /** Link to a webpage containing the question. */
  link?: Maybe<Scalars["String"]>;
  /**
   * The rich text of the FAQ's answer. Note that this is rich text, containing HTML
   * tags. These should be parsed correctly to prevent them from being shown to the
   * customer. Might be null.
   */
  text?: Maybe<Scalars["String"]>;
};

/**
 * Content related to the Frequently Asked Questions (FAQs) of a program. These are derived
 * from the global search on the website, e.g. when searching for "oven", you'll find some
 * customer service pages with FAQ questions on them.
 */
export type LoyaltyProgramQuestionsContent = {
  __typename?: "LoyaltyProgramQuestionsContent";
  /**
   * The search term executed in the global search. Should also be used when viewing all
   * questions.
   */
  searchTerm: Scalars["String"];
  /**
   * List of FAQs with answers. Might be empty if there are no FAQs defined. Only contains
   * the first 5 questions, see the "hasMoreQuestions" boolean if there are more than 5
   * configured.
   */
  questions: Array<LoyaltyProgramQuestionContent>;
  /**
   * Whether there are more questions available that weren't returned in the "questions"
   * list. The content-facade only returns the first 5 questions.
   */
  hasMoreQuestions: Scalars["Boolean"];
  /** This link contains the remainder of the FAQs that got cut off (non top-5). */
  seeMoreLink?: Maybe<Scalars["String"]>;
};

/** Information on the stamps involved in the program. */
export type LoyaltyProgramStampContent = {
  __typename?: "LoyaltyProgramStampContent";
  /**
   * The number of stamps that you need to fill a card. Also useful to calculate how many
   * full cards a user has.
   */
  stampsPerCard?: Maybe<Scalars["Int"]>;
  /**
   * The image set containing the image of a single stamp.  Might be empty if no images are
   * configured.
   */
  stampImage: Array<ImageSet>;
  /**
   * The image set containing the background / empty spot image of a single stamp. This is used
   * to display a "place" where a stamp can be "pasted" onto the card. Might be empty if no
   * images are configured.
   */
  emptyImage: Array<ImageSet>;
};

/** Enum that indicates the program state. */
export enum LoyaltyProgramState {
  /** The program has not yet started. Its saving period is in the future. */
  Future = "FUTURE",
  /** The program is active. Its saving period is now, but its redemption period is not. */
  Active = "ACTIVE",
  /** The program is active and points can currently be redeemed. */
  ActiveAndRedeemable = "ACTIVE_AND_REDEEMABLE",
  /** The program has finished, saving is no longer possible. However, redeeming still is. */
  FinishedAndRedeemable = "FINISHED_AND_REDEEMABLE",
  /**
   * The program has finished, saving is no longer possible. Redeeming is also not yet
   * possible, as this can be done in the future.
   */
  FinishedAndFutureRedeemable = "FINISHED_AND_FUTURE_REDEEMABLE",
  /** The program has finished, saving and redeeming are no longer possible. */
  Finished = "FINISHED",
  /** The program is in an unknown state. */
  Unknown = "UNKNOWN",
}

/** Enum that indicates the program type. */
export enum LoyaltyProgramType {
  /** Digital Savings program. These are programs such as Bestek, Handdoeken or Efteling. */
  DigitalSavings = "DIGITAL_SAVINGS",
  /** Digital Scratching program. These are programs such as Zomerkrassen. */
  DigitalScratching = "DIGITAL_SCRATCHING",
  /** Koopzegels program. There is only one such program. */
  Koopzegels = "KOOPZEGELS",
  /** To go program. These are programs such as Sapje, Broodje or Koffie. */
  ToGo = "TO_GO",
}

/** ButtonType */
export enum ButtonType {
  Primary = "PRIMARY",
  Secondary = "SECONDARY",
  Login = "LOGIN",
}

/** Messenger button */
export type MessengerButton = {
  __typename?: "MessengerButton";
  /** label */
  label: Scalars["String"];
  /** url */
  url: Scalars["String"];
  /** target */
  target: Scalars["String"];
  /** type */
  type: ButtonType;
  /** disabled */
  disabled: Scalars["Boolean"];
};

/** Chat channel entrypoint */
export enum MessengerChannelTypeEntrypoint {
  Chat = "CHAT",
  Phone = "PHONE",
  Checkin = "CHECKIN",
}

/** Messenger event corresponding to a closed event sent by the message handler */
export type MessengerClosedEvent = {
  __typename?: "MessengerClosedEvent";
  /** id */
  id: Scalars["String"];
  /** timestamp */
  createdAt: Scalars["String"];
  /** type */
  type: MessengerConversationEventType;
};

/** Messenger Component Interaction Component Interaction Type */
export enum MessengerComponentInteractionComponentInteractionType {
  Click = "CLICK",
}

/** Messenger Component Interaction Component Type */
export enum MessengerComponentInteractionComponentType {
  Button = "BUTTON",
  LinkList = "LINK_LIST",
  Link = "LINK",
  SuggestionChip = "SUGGESTION_CHIP",
  OptionList = "OPTION_LIST",
}

/** Messenger event corresponding to a message sent by a member */
export type MessengerComponentInteractionEvent = {
  __typename?: "MessengerComponentInteractionEvent";
  /** id */
  id: Scalars["String"];
  /** timestamp */
  createdAt: Scalars["String"];
  /** type */
  type: MessengerConversationEventType;
};

/** A messenger conversation with a subset of messenger events */
export type MessengerConversation = {
  __typename?: "MessengerConversation";
  /** a list of all messenger events */
  events: Array<MessengerConversationEvent>;
  /** id */
  id: Scalars["String"];
  /** open/closed status */
  status: MessengerStatus;
  /** Language of the conversation */
  locale: Scalars["String"];
  /** Enable chat input */
  inputFieldEnabled: Scalars["Boolean"];
  /** if the conversation can be resumed after it has been closed */
  reopenable: Scalars["Boolean"];
};

/** A subset of all possible messenger events */
export type MessengerConversationEvent =
  | MessengerHandlerMessageSentEvent
  | MessengerMemberMessageSentEvent
  | MessengerClosedEvent
  | MessengerReopenedEvent
  | MessengerHandlerTableSentEvent
  | MessengerHandlerLinkListSentEvent
  | MessengerHandlerFileSentEvent
  | MessengerMemberFileSentEvent
  | MessengerComponentInteractionEvent;

/** All available event types in a conversation */
export enum MessengerConversationEventType {
  MessengerHandlerMessageSentEvent = "MESSENGER_HANDLER_MESSAGE_SENT_EVENT",
  MessengerMemberMessageSentEvent = "MESSENGER_MEMBER_MESSAGE_SENT_EVENT",
  MessengerClosedEvent = "MESSENGER_CLOSED_EVENT",
  MessengerReopenedEvent = "MESSENGER_REOPENED_EVENT",
  MessengerHandlerTableSentEvent = "MESSENGER_HANDLER_TABLE_SENT_EVENT",
  MessengerHandlerLinkListSentEvent = "MESSENGER_HANDLER_LINK_LIST_SENT_EVENT",
  MessengerHandlerFileSentEvent = "MESSENGER_HANDLER_FILE_SENT_EVENT",
  MessengerMemberFileSentEvent = "MESSENGER_MEMBER_FILE_SENT_EVENT",
  MessengerComponentInteractionEvent = "MESSENGER_COMPONENT_INTERACTION_EVENT",
}

/** Status of the conversation in the messenger */
export type MessengerConversationStatus = {
  __typename?: "MessengerConversationStatus";
  /** Registered channelType when starting the conversation */
  channelType?: Maybe<MessengerChannelTypeEntrypoint>;
  /** Conversation status */
  status?: Maybe<MessengerStatus>;
};

/** Context from the member */
export type MessengerCreateConversationContext = {
  /** AB Tests ids (sitespect) */
  abTests?: Maybe<Scalars["String"]>;
  /** Operating system information. e.g. IOS 16.2.1 */
  os?: Maybe<Scalars["String"]>;
  /** App version */
  appVersion?: Maybe<Scalars["String"]>;
};

/** Messenger event grouped by the day of the event */
export type MessengerEventGroupsGroupedByDay = {
  __typename?: "MessengerEventGroupsGroupedByDay";
  /** The message */
  groups: Array<MessengerEventsGroupedByRules>;
  /** The day of the events */
  date: Scalars["String"];
  /** The display label of the day */
  label: Scalars["String"];
};

/** Messenger event grouped by the grouping rules like pause period */
export type MessengerEventsGroupedByRules = {
  __typename?: "MessengerEventsGroupedByRules";
  /** The message */
  events: Array<MessengerConversationEvent>;
  /** The date of the last message in the group */
  date: Scalars["String"];
  /** The display label of message group */
  label: Scalars["String"];
};

/** Short living url for files */
export type MessengerFileUrl = {
  __typename?: "MessengerFileUrl";
  /** File id */
  id: Scalars["String"];
  /** File url. Url is valid for 5 seconds */
  url: Scalars["String"];
};

/** File with urls */
export type MessengerFiles = {
  __typename?: "MessengerFiles";
  /** files with urls */
  files: Array<MessengerFileUrl>;
};

/** A messenger conversation with a subset of messenger events */
export type MessengerGroupedConversation = {
  __typename?: "MessengerGroupedConversation";
  /** a list of all messenger events */
  events: Array<MessengerConversationEvent>;
  /** a list of all events formatted in a way that can be displayed in the UI */
  groupedEvents: Array<MessengerEventGroupsGroupedByDay>;
  /** id */
  id: Scalars["String"];
  /** open/closed status */
  status: MessengerStatus;
  /** Language of the conversation */
  locale: Scalars["String"];
  /** Enable chat input */
  inputFieldEnabled: Scalars["Boolean"];
  /** if the conversation can be resumed after it has been closed */
  reopenable: Scalars["Boolean"];
};

/** Messenger file event from handler */
export type MessengerHandlerFileSentEvent = {
  __typename?: "MessengerHandlerFileSentEvent";
  /** id */
  id: Scalars["String"];
  /** timestamp */
  createdAt: Scalars["String"];
  /** Id of the file */
  fileId: Scalars["String"];
  /** type */
  type: MessengerConversationEventType;
  /** handler name */
  handlerName: Scalars["String"];
  /** avatar */
  avatar?: Maybe<Scalars["String"]>;
  /** the content type of the file */
  contentType: Scalars["String"];
};

/** A link list send by the handler of the conversation */
export type MessengerHandlerLinkListSentEvent = {
  __typename?: "MessengerHandlerLinkListSentEvent";
  /** id */
  id: Scalars["String"];
  /** event type */
  type: MessengerConversationEventType;
  /** timestamp */
  createdAt: Scalars["String"];
  /** Name of the handler */
  handlerName: Scalars["String"];
  /** A list of hyper links */
  links: Array<MessengerLinkListHyperLink>;
};

/** Messenger event corresponding to a message sent by the message handler */
export type MessengerHandlerMessageSentEvent = {
  __typename?: "MessengerHandlerMessageSentEvent";
  /** id */
  id: Scalars["String"];
  /** timestamp */
  createdAt: Scalars["String"];
  /** handler name */
  handlerName: Scalars["String"];
  /** conversation message */
  message: MessengerMessage;
  /** event type */
  type: MessengerConversationEventType;
  /** A message is considered 'new' when it is not older than 7 seconds */
  isNewMessage: Scalars["Boolean"];
  /** avatar */
  avatar?: Maybe<Scalars["String"]>;
};

/** A table message send by the handler of the conversation */
export type MessengerHandlerTableSentEvent = {
  __typename?: "MessengerHandlerTableSentEvent";
  /** id */
  id: Scalars["String"];
  /** event type */
  type: MessengerConversationEventType;
  /** timestamp */
  createdAt: Scalars["String"];
  /** Name of the handler */
  handlerName: Scalars["String"];
  /** Table headers */
  header: Array<Maybe<Scalars["String"]>>;
  /** Table rows */
  rows: Array<Array<Maybe<Scalars["String"]>>>;
  /** Table footer */
  footer: Array<Maybe<Scalars["String"]>>;
};

/** the type of link */
export enum MessengerHyperLinkType {
  /** standard */
  Standard = "STANDARD",
  /** highlighted */
  Highlight = "HIGHLIGHT",
}

/** Short living url for images */
export type MessengerImageUrl = {
  __typename?: "MessengerImageUrl";
  /** Image id */
  id: Scalars["String"];
  /** Image url. Url is valid for 5 seconds */
  url: Scalars["String"];
};

/** Images with urls */
export type MessengerImages = {
  __typename?: "MessengerImages";
  /** Images with urls */
  images: Array<Maybe<MessengerImageUrl>>;
};

/** Hyper link send by the Digital Assistant */
export type MessengerLinkListHyperLink = {
  __typename?: "MessengerLinkListHyperLink";
  /** Hypertext Reference */
  href: Scalars["String"];
  /** The text to display */
  text: Scalars["String"];
  /** the type of link */
  type: MessengerHyperLinkType;
};

/** A list of messenger buttons */
export type MessengerList = {
  __typename?: "MessengerList";
  /** type */
  type?: Maybe<Scalars["String"]>;
  /** text */
  text: Scalars["String"];
};

/** Messenger file event from member */
export type MessengerMemberFileSentEvent = {
  __typename?: "MessengerMemberFileSentEvent";
  /** id */
  id: Scalars["String"];
  /** timestamp */
  createdAt: Scalars["String"];
  /** Id of the file */
  fileId: Scalars["String"];
  /** type */
  type: MessengerConversationEventType;
  /** the content type of the file */
  contentType: Scalars["String"];
};

/** Messenger event corresponding to a message sent by a member */
export type MessengerMemberMessageSentEvent = {
  __typename?: "MessengerMemberMessageSentEvent";
  /** id */
  id: Scalars["String"];
  /** timestamp */
  createdAt: Scalars["String"];
  /** type */
  type: MessengerConversationEventType;
  /** text */
  text: Scalars["String"];
};

/** MessengerHandlerMessageSentEvent message */
export type MessengerMessage = {
  __typename?: "MessengerMessage";
  /** text */
  text?: Maybe<Scalars["String"]>;
  /** button */
  button?: Maybe<MessengerButton>;
  /** suggestions */
  suggestions: Array<Scalars["String"]>;
  /** a list of messenger buttons */
  list: Array<MessengerList>;
};

/** Messenger event corresponding to a reopened event sent by the message handler */
export type MessengerReopenedEvent = {
  __typename?: "MessengerReopenedEvent";
  /** id */
  id: Scalars["String"];
  /** timestamp */
  createdAt: Scalars["String"];
  /** type */
  type: MessengerConversationEventType;
};

/** Status */
export enum MessengerStatus {
  Open = "OPEN",
  Closed = "CLOSED",
}

/** Delivery Notification */
export type DeliveryNotification = Notification & {
  __typename?: "DeliveryNotification";
  /** Notification ID */
  id: Scalars["String"];
  /** Type of notification */
  type: NotificationType;
  /** Link object with title and href */
  link: NotificationLink;
  /** Delivery date info */
  dateInfo: Scalars["String"];
  /** Icon name that is shown on the notification */
  icon: NotificationIcon;
};

/** Notification Base */
export type Notification = {
  /** Notification id */
  id: Scalars["String"];
  /** Type of the notification */
  type: NotificationType;
  /** Link object with title and href */
  link: NotificationLink;
};

/** CMS Notification */
export type NotificationCms = Notification & {
  __typename?: "NotificationCMS";
  /** Notification id */
  id: Scalars["String"];
  /** Type of the notification */
  type: NotificationType;
  /** Link object with title and href */
  link: NotificationLink;
  /** Custom classification of the notification, e.g. 'Belangrijke Veligheidswaarschuwing' */
  classification: Scalars["String"];
  /** Is the notification visible on the whole website */
  isGlobalNotification: Scalars["Boolean"];
  /** Priority of notification, e.g. 'HIGH' or 'MEDIUM' */
  priority?: Maybe<NotificationPriorityType>;
  /** Priority label of notification, e.g. 'Veligheidswaarschuwing' */
  priorityLabel?: Maybe<Scalars["String"]>;
};

/** Enum for notification icons */
export enum NotificationIcon {
  /** delivery icon */
  Delivery = "DELIVERY",
  /** home delivery icon */
  HomeDelivery = "HOME_DELIVERY",
  /** pickup icon */
  Pickup = "PICKUP",
  /** pickup home delivery icon */
  PickupHomeDelivery = "PICKUP_HOME_DELIVERY",
}

/** Notification link with href and title */
export type NotificationLink = {
  __typename?: "NotificationLink";
  /** href */
  href: Scalars["String"];
  /** title */
  title: Scalars["String"];
};

/** Enum Priority type of notification */
export enum NotificationPriorityType {
  /** e.g. safety warnings and product recalls */
  High = "HIGH",
  /** e.g. customer care messages, outages */
  Medium = "MEDIUM",
}

/** NotificationType */
export enum NotificationType {
  /** type for safety warnings, product recalls and failures which impacts users e.g. priority notifications. Will return all CMS notifications. */
  Cms = "CMS",
  /** type for safety warnings, product recalls and failures which impacts users e.g. priority notifications. Will only return CMS notifications which have isGlobalNotification set to true. */
  CmsGlobal = "CMS_GLOBAL",
  /** type for safety warnings, product recalls and failures which impacts users e.g. priority notifications. Will only return CMS notifications which have isGlobalNotification set to false. */
  CmsNotGlobal = "CMS_NOT_GLOBAL",
  /** type for safety warnings, product recalls and failures which impacts users e.g. priority notifications. Will only return CMS notifications which have isGlobalNotification set to true and will return 'HIGH' priority notifications as one combined notification. */
  CmsGlobalCombined = "CMS_GLOBAL_COMBINED",
  /** type for delivery notification */
  Order = "ORDER",
}

export enum BudgetType {
  /** Monthly budget. */
  Monthly = "MONTHLY",
  /** Yearly budget. */
  Yearly = "YEARLY",
}

/** The customer's current V2 budget. */
export type CurrentBudget = {
  __typename?: "CurrentBudget";
  /** The budget's unique identifier. */
  id: Scalars["String"];
  /** Member ID. */
  memberId: Scalars["Int"];
  /** Proposition (e.g., AH_NL, AH_BE). */
  proposition: Scalars["String"];
  /** Type (e.g., MONTHLY, YEARLY). */
  type: BudgetType;
  /** Amount. */
  amount: Money;
  /**
   * The total amount of budget that was not used in previous periods within the same year and is carried over to subsequent periods within that year.
   * For example, if a customer has a monthly budget of 200 EUR and only spends 100 EUR in a month, the remaining 100 EUR is carried over to the next month, increasing the available budget for that month.
   * Note that yearly budgets do not carry over unused amount from the previous year.
   */
  carriedOver: Money;
  /** The total value of all orders that have been delivered within the budget's period. */
  realizedCosts: Money;
  /** The total value of all orders that have been placed but have not yet been delivered within the budget's period. */
  unRealizedCosts: Money;
  /** The remaining budget available for the customer to use. */
  availableToSpend: Money;
  /** The date when the budget was set up. */
  createdAt: Scalars["String"];
  /**
   * The date when the budget starts.
   * For example, the B2B team might set up a customer’s budget on August 20th, but configure it to start on September 1st.
   */
  startAt: Scalars["String"];
  /**
   * The start date of the first budget in the current year.
   * For example, the B2B team sets up a budget starting on February 8th.
   * It is now October 1st, so the budget service’s monthly cron job has created several budgets with start dates on the first of each month: March 1st, April 1st, and so on.
   * The startAt date of the current budget is October 1st, but the startAtOfFirstBudgetInCurrentYear is February 8th.
   */
  startAtOfFirstBudgetInCurrentYear: Scalars["String"];
};

/** Service charge discount levels */
export enum DiscountLevel {
  /** Normal charge */
  None = "NONE",
  /** Partial charge */
  Partial = "PARTIAL",
  /** Maximum charge */
  Maximum = "MAXIMUM",
}

/** Evalue Transaction */
export type EvalueTransaction = {
  __typename?: "EvalueTransaction";
  /** Order associated with the transaction */
  order?: Maybe<Order>;
  /** Settlement details */
  settlement?: Maybe<SettlementV2>;
  /** the transaction id */
  id: Scalars["String"];
  /** The created Date of transaction */
  createdDate: Scalars["DateTime"];
  /** The transaction Amount */
  amount: TransactionAmountCurrency;
  /** The transaction type */
  type: EvalueTransactionType;
  /** The transaction status */
  status: EvalueTransactionStatus;
  /** The transaction category */
  category: Scalars["String"];
  /** The transaction description */
  description?: Maybe<Scalars["String"]>;
  /** The transaction reference */
  externalReference?: Maybe<Scalars["String"]>;
  /** The completion date of transaction */
  completionDate?: Maybe<Scalars["DateTime"]>;
};

/** Reason why an order was cancelled. Only available for the fulfillment detail query. */
export type FulfillmentCancellationReason = {
  __typename?: "FulfillmentCancellationReason";
  /** Order is cancelled by the customer. */
  type: FulfillmentCancellationReasonType;
  /** An additional message explaining the cancellation for NL orders. */
  messageNL?: Maybe<Scalars["String"]>;
  /** An additional message explaining the cancellation for BE orders. */
  messageBE?: Maybe<Scalars["String"]>;
};

/** Type of cancellation for a fulfillment. */
export enum FulfillmentCancellationReasonType {
  /** Order is cancelled by the customer. */
  ByCustomer = "BY_CUSTOMER",
  /** Order is cancelled because of an address change. */
  AddressChange = "ADDRESS_CHANGE",
  /** Order is cancelled by AH. */
  ByAh = "BY_AH",
  /** Order is cancelled because the minimum order value of a fixed delivery moment order wasn't reached before cut-off time. */
  VbmValueNotReached = "VBM_VALUE_NOT_REACHED",
  /** Order is cancelled because not approved by the procurement system. */
  B2BNotApproved = "B2B_NOT_APPROVED",
}

/** Delivery information of a fulfillment. */
export type FulfillmentDelivery = {
  __typename?: "FulfillmentDelivery";
  /** Delivery message */
  deliveryMessage?: Maybe<Scalars["String"]>;
  /** Delivery methond */
  method?: Maybe<FulfillmentDeliveryMethod>;
  /** Delivery slot */
  slot?: Maybe<FulfillmentDeliveryTime>;
  /** Delivery addresss */
  address?: Maybe<FulfillmentDeliveryAddress>;
  /** Delivery address single line */
  addressSingleLine?: Maybe<Scalars["String"]>;
  /** Delivery status */
  status: OrderDeliveryStatus;
  /** Delivery shift code */
  shiftCode?: Maybe<Scalars["String"]>;
  /** Delivery Home Shop Center id */
  homeShopCenterId?: Maybe<Scalars["Int"]>;
};

/** Address the orders should be delivered on. */
export type FulfillmentDeliveryAddress = {
  __typename?: "FulfillmentDeliveryAddress";
  /** Delivery street */
  street?: Maybe<Scalars["String"]>;
  /** Delivery house number */
  houseNumber?: Maybe<Scalars["Int"]>;
  /** Delivery house number extra */
  houseNumberExtra?: Maybe<Scalars["String"]>;
  /** Delivery city */
  city?: Maybe<Scalars["String"]>;
  /** Delivery country code */
  countryCode?: Maybe<Scalars["String"]>;
  /** Delivery postal code */
  postalCode?: Maybe<Scalars["String"]>;
};

/** The method of delivery for a fulfillment. */
export enum FulfillmentDeliveryMethod {
  /** Home delivery */
  HomeDelivery = "HOME_DELIVERY",
  /** Pick up delivery */
  Pickup = "PICKUP",
  /** Pick up home delivery */
  PickupHomeDelivery = "PICKUP_HOME_DELIVERY",
}

/** Delivery date and time estimation of a fulfillment. */
export type FulfillmentDeliveryTime = {
  __typename?: "FulfillmentDeliveryTime";
  /** Delivery full date */
  date: Scalars["String"];
  /** Delivery date display */
  dateDisplay: Scalars["String"];
  /** Delivery short date display */
  dateDisplayShort: Scalars["String"];
  /** Delivery time */
  timeDisplay: Scalars["String"];
  /** Delivery day */
  dayDisplay: Scalars["String"];
};

/** Price of a fulfillment. */
export type FulfillmentPrice = {
  __typename?: "FulfillmentPrice";
  /** Price before discount */
  beforeDiscount?: Maybe<Money>;
  /** Price after discount */
  afterDiscount?: Maybe<Money>;
  /** Discount */
  discount?: Maybe<Money>;
  /**
   * Total price
   * @deprecated @sunset_date(2023-09-01) checked 2023-09-01 - used in ah-grid, ah-orders, ah-shoppinglist appie-android@? - Use the money type instead of float
   * . .
   */
  total?: Maybe<Scalars["Float"]>;
  /** TotalPrice */
  totalPrice?: Maybe<Money>;
};

/** Whether the fulfillment is still open or already closed (or both). */
export enum FulfillmentStatus {
  /** Delivery status - all orders */
  All = "ALL",
  /** Delivery status - closed orders */
  Closed = "CLOSED",
  /** Delivery status - open orders */
  Open = "OPEN",
}

/** Result of the fulfillment query. */
export type FulfillmentsResult = {
  __typename?: "FulfillmentsResult";
  /** Results */
  result?: Maybe<Array<Fulfillment>>;
  /** Page info */
  page?: Maybe<PageInfo>;
};

/** Date range start and end date */
export type FullfillmentDateRange = {
  /** Start date from fulfillment e.g. 2023-03-26 */
  startDate: Scalars["String"];
  /** End date from fulfillment e.g. 2023-03-26 */
  endDate: Scalars["String"];
};

/** Nudge types, which indicated the category of slots. SUSTAINABLE or EXCLUDE_INEFFICIENT. More to come soon */
export enum NudgeType {
  /** When a slot is eco friendly it gets the sustainable nudge type */
  Sustainable = "SUSTAINABLE",
  /** When a slots is excluded based on the delta values */
  ExcludeInefficient = "EXCLUDE_INEFFICIENT",
  /** Special milkman routes which contains 2 hour-max slots. */
  Milkman = "MILKMAN",
  /** Unknown nudge type. */
  Unknown = "UNKNOWN",
  /** Service fee discount. */
  ServiceFeeDiscount = "SERVICE_FEE_DISCOUNT",
}

/** The method of an OCI shop session */
export enum OciShopSession {
  /** Default order */
  Default = "DEFAULT",
  /** Reopenable order */
  Reopenable = "REOPENABLE",
}

/** Result of performing a mutation. */
export type OrderBudgetV2MutationResult = MutationResult & {
  __typename?: "OrderBudgetV2MutationResult";
  /** Whether mutation succeeded, failed completely or partially. */
  status: MutationResultStatus;
  /** Relevant error message if applicable. */
  errorMessage?: Maybe<Scalars["String"]>;
  /** The customer's current V2 budget after performing the mutation. */
  result?: Maybe<CurrentBudget>;
};

/** Result of performing a query. */
export type OrderBudgetV2QueryResult = {
  __typename?: "OrderBudgetV2QueryResult";
  /** The customer's current V2 budget. */
  result?: Maybe<CurrentBudget>;
  /** Error will be set when an error occurred while fetching the budget. */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Order checkin mutation result. */
export type OrderCheckinMutationResult = MutationResult & {
  __typename?: "OrderCheckinMutationResult";
  /** Order id */
  orderId?: Maybe<Scalars["Int"]>;
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Address where the order should be delivered. */
export type OrderDeliveryAddress = {
  /** Delivery city */
  city?: Maybe<Scalars["String"]>;
  /** Delivery country code */
  countryCodeAlpha3?: Maybe<Scalars["String"]>;
  /** Delivery house number */
  houseNumber?: Maybe<Scalars["Int"]>;
  /** Delivery house number extra */
  houseNumberExtra?: Maybe<Scalars["String"]>;
  /** Delivery postal code */
  postalCode?: Maybe<Scalars["String"]>;
  /** Delivery street */
  street?: Maybe<Scalars["String"]>;
};

/** The status of an order's delivery. */
export enum OrderDeliveryStatus {
  /** The delivery has been cancelled */
  Cancelled = "CANCELLED",
  /** The delivery has been delivered */
  Delivered = "DELIVERED",
  /** The delivery has been entered */
  Entered = "ENTERED",
  /** The delivery has been created with a timeslot that is valid for 1.5 hours */
  EnteredWithDeliveryBlock = "ENTERED_WITH_DELIVERY_BLOCK",
  /** The delivery is being packaged */
  Packaging = "PACKAGING",
  /** The order belonging to the delivery has been reopened */
  Reopened = "REOPENED",
  /** The delivery has been submitted and a timeslot has been reserved */
  Submitted = "SUBMITTED",
  /** The delivery has been submitted with a short eta */
  SubmittedWithShortrecEta = "SUBMITTED_WITH_SHORTREC_ETA",
  /** The delivery has been submitted */
  SubmittedWithSimacanEta = "SUBMITTED_WITH_SIMACAN_ETA",
  /** The delivery status is unknown */
  Unknown = "UNKNOWN",
}

/** Order lines */
export type OrderLineV2 = {
  __typename?: "OrderLineV2";
  /** Product id */
  product: Product;
  /** Amount of product in order */
  quantity: Scalars["Int"];
  /** The page code where the item is added from */
  originCode?: Maybe<Scalars["String"]>;
  /** Amount of items that are already allocated for a user */
  allocatedQuantity?: Maybe<Scalars["Int"]>;
  /** time of when the product can not be removed anymore */
  closingTime?: Maybe<Scalars["String"]>;
};

/** Price of Order */
export type OrderPrice = {
  __typename?: "OrderPrice";
  /** Price before discount */
  priceBeforeDiscount?: Maybe<Money>;
  /** Price after discount */
  priceAfterDiscount?: Maybe<Money>;
  /** Amount discount */
  priceDiscount?: Maybe<Money>;
  /** Price total to be paid */
  priceTotalPayable?: Maybe<Money>;
};

/** Receipt of the order */
export type OrderReceipt = {
  __typename?: "OrderReceipt";
  /** Amount before discounts and service costs */
  netPrice: Money;
  /** Discounts given by bonus */
  totalBonusDiscount: Money;
  /** Amount required as deposit */
  deposit: Money;
  /** Additional service costs */
  serviceCosts: Array<OrderReceiptModifier>;
  /** Discounts applied */
  discounts: Array<OrderReceiptModifier>;
  /** Amount before discounts and service costs */
  subTotal: Money;
  /** Amount after discounts and service costs */
  total: Money;
  /** Personal discount applied */
  personalDiscount: Money;
};

/** Service cost or discount modifier */
export type OrderReceiptModifier = {
  __typename?: "OrderReceiptModifier";
  /** Amount modified */
  price: Money;
  /** Human readable description of modifier */
  title: Scalars["String"];
};

/** Sample products that belong to an order. */
export type OrderSample = {
  __typename?: "OrderSample";
  /** Id of the sample. */
  id?: Maybe<Scalars["Int"]>;
  /** Description of the sample. */
  description?: Maybe<Scalars["String"]>;
  /**
   * Sales unit size description.
   * E.g. "per stuk"
   */
  salesUnitSize?: Maybe<Scalars["String"]>;
  /** Whether the customer is allowed to reject the sample. */
  rejectAllowed: Scalars["Boolean"];
  /** Returns true if the sample is rejected. */
  rejectSample: Scalars["Boolean"];
  /** Returns true if the sample is premium which means it should be emphasized. */
  premium: Scalars["Boolean"];
  /** Product information of the sample */
  product?: Maybe<Product>;
};

/** Shopping type of the order */
export enum OrderShoppingType {
  /** shopping type unknown */
  Unknown = "UNKNOWN",
  /** order is made in physical store */
  PhysicalStore = "PHYSICAL_STORE",
  /** order gets delivered to the user */
  Delivery = "DELIVERY",
  /** Order will be delivered to pickup point */
  PickupDelivery = "PICKUP_DELIVERY",
  /** Order can be collected on pickup point */
  DeliveryPoint = "DELIVERY_POINT",
  /** Order is pickup */
  Pickup = "PICKUP",
  /** Order is picked up from the store */
  InStorePick = "IN_STORE_PICK",
  /** Specials only */
  SpecialsOnly = "SPECIALS_ONLY",
}

/** Slot of the order. */
export type OrderSlot = {
  /** Date of the delivery */
  date: Scalars["String"];
  /** Code of the delivery shift */
  shiftCode: Scalars["String"];
  /** Location id of the delivery */
  deliveryLocationId: Scalars["Int"];
};

/** States order can be in */
export enum OrderState {
  /** The order has been cancelled */
  Cancelled = "CANCELLED",
  /** The order has been delivered */
  Delivered = "DELIVERED",
  /** The order is being packaged */
  Entered = "ENTERED",
  /** The order has been created with a timeslot that is valid for 1.5 hours */
  EnteredWithDeliveryBlock = "ENTERED_WITH_DELIVERY_BLOCK",
  /** The order has been reopened */
  Reopened = "REOPENED",
  /** The order has been submitted and a timeslot has been reserved */
  Submitted = "SUBMITTED",
  /** The order cannot be altered and is being processed (picked/packed) */
  SubmittedWithShortrecEta = "SUBMITTED_WITH_SHORTREC_ETA",
  /** The order cannot be altered and is being transported to destination */
  SubmittedWithSimacanEta = "SUBMITTED_WITH_SIMACAN_ETA",
}

/** The price of a slot */
export type ServiceCharge = {
  __typename?: "ServiceCharge";
  /** Actual price of the service charge with discounts applied */
  price: Money;
  /** Regular price of the service charge without discounts */
  defaultPrice: Money;
  /** Level of discounts for the slot */
  discountLevel: DiscountLevel;
};

/** Slot for delivery or pickup order */
export type Slot = {
  __typename?: "Slot";
  /** Date of the delivery */
  date: Scalars["DateTime"];
  /** Formatted date of the delivery */
  dateFormatted: Scalars["String"];
  /** Start time of the delivery */
  startTime: Scalars["DateTime"];
  /** Formatted start time of the delivery */
  startTimeFormatted: Scalars["String"];
  /** End time of the delivery */
  endTime: Scalars["DateTime"];
  /** Formatted end time of the delivery */
  endTimeFormatted: Scalars["String"];
  /** Number of the day starting with 0 */
  day: Scalars["Int"];
  /** ID of the delivery location */
  deliveryLocationId: Scalars["Int"];
  /** Whether a slot is full or not */
  isFullyBooked: Scalars["Boolean"];
  /** Nudge types for the slot, for example "SUSTAINABLE" which means this is a sustainable slot. */
  nudgeType: Array<Maybe<NudgeType>>;
  /** ID of the pickup location, only used for pickup slots */
  pickupLocationId?: Maybe<Scalars["Int"]>;
  /** Service charges for the slot */
  serviceCharge: ServiceCharge;
  /** Shift code is used to plan a slot */
  shiftCode: Scalars["String"];
};

/** Day containing slots */
export type SlotDay = {
  __typename?: "SlotDay";
  /** The date of the day in which slots are grouped */
  date: Scalars["DateTime"];
  /** The formatted date of the day in which slots are grouped */
  dateFormatted: Scalars["String"];
  /** The slots for delivery or pickup */
  slots: Array<Slot>;
  /** Whether a day is already fully booked */
  isFullyBooked: Scalars["Boolean"];
};

/** Request for Bancontact Mobile Transaction */
export type BancontactMobileTransactionRequest = {
  /** amount for Bancontact Mobile Transaction */
  amount: PaymentAmountRequest;
};

/** Base Card for Multi Module Cards */
export type Card = {
  /** Card Id is the id unique in the system */
  cardId: Scalars["String"];
};

/** User needs to undertake a challenge to verify the payment */
export type CheckoutChallengeAction = {
  /** SDK Information used for the challenge */
  sdk?: Maybe<PaymentSdk>;
};

/** Order Submission Payment Information */
export type CheckoutOrderSubmissionPayment = {
  __typename?: "CheckoutOrderSubmissionPayment";
  /** Payment Id */
  paymentId: Scalars["String"];
  /** Id of the proposition that created the payment */
  propositionId: Scalars["String"];
  /** External Reference of the payment, For example orderId */
  externalReference: Scalars["String"];
  /** Action to be taken, if null no action needs to be taken */
  action?: Maybe<CheckoutPaymentAction>;
  /** List of transactions executed with the payment */
  transactions: Array<CheckoutPaymentTransaction>;
  /** The Mutation that will be executed */
  mutation: PaymentMutation;
  /** payment status */
  paymentStatus: PaymentStatus;
  /** Requested amount for Payment */
  requestedAmount?: Maybe<PaymentAmount>;
  /** Amount reserved for Payment */
  reservedAmount?: Maybe<PaymentAmount>;
};

/** Payment Action that needs to be taken. */
export type CheckoutPaymentAction =
  | DeviceChallengeAction
  | UserChallengeAction
  | CheckoutPollAction
  | CheckoutRedirectAction
  | PaymentsQrAction;

/** An transaction that has ocurred during a payment */
export type CheckoutPaymentTransaction = {
  __typename?: "CheckoutPaymentTransaction";
  /** Id of the Transaction */
  id: Scalars["String"];
  /** status */
  status: PaymentTransactionStatus;
  /** PaymentMethod */
  paymentMethod: PaymentMethod;
  /** Amount requested for transaction */
  requestedAmount?: Maybe<PaymentAmount>;
  /** Reserved amount for the transaction */
  reservedAmount?: Maybe<PaymentAmount>;
  /** Amount captured during transaction */
  capturedAmount?: Maybe<PaymentAmount>;
};

/** User needs to poll for the authorization status */
export type CheckoutPollAction = {
  __typename?: "CheckoutPollAction";
  /** mutationId to poll on */
  mutationId: Scalars["String"];
  /** Interval to poll */
  pollIntervalInMs: Scalars["Int"];
};

/** User is redirected to external location */
export type CheckoutRedirectAction = {
  __typename?: "CheckoutRedirectAction";
  /**
   * Transaction Id
   * @deprecated @sunset_date(2024-10-21) Unused field, used by ah-checkout and appie-android.
   * . .
   */
  transactionId: Scalars["String"];
  /** URI */
  uri: Scalars["String"];
};

/** Request payload for paying a payment request */
export type CreatePayPaymentRequest = {
  /** Originating channel for payment */
  channel: PaymentChannel;
  /** List of Transactions within the request */
  transactions: CreatePaymentRequestTransactions;
};

/** Which transactions to create per request */
export type CreatePaymentRequestTransactions = {
  /** iDEAL */
  ideal?: Maybe<IdealTransactionRequest>;
  /** Bancontact Mobile */
  bancontactMobile?: Maybe<BancontactMobileTransactionRequest>;
};

/** Onboarding result */
export type DctOnboardingResult = {
  __typename?: "DCTOnboardingResult";
  /** Onboarding response code */
  responseCode: PaymentsTokenOnboardingResponseCode;
  /** Reference id of the external token */
  externalTokenReference?: Maybe<Scalars["String"]>;
  /** https://developer.mastercard.com/mastercard-checkout-solutions/documentation/use-cases/card-on-file/card-enrollment/scof-push-acc-receipt/ */
  pushAccountReceipt: Scalars["String"];
};

/** Device Challenge that is performed by verifying the device fingerprint */
export type DeviceChallengeAction = CheckoutChallengeAction & {
  __typename?: "DeviceChallengeAction";
  /** Transaction Id */
  transactionId: Scalars["String"];
  /** The id of the authorization that is being performed on the payment */
  authorizationId: Scalars["String"];
  /** Base 64 encoded data of the psp */
  data: Scalars["String"];
  /** SDK Information used for the challenge */
  sdk?: Maybe<PaymentSdk>;
};

/** Required information for adding a giftcard */
export type GiftCardCredentials = {
  /** id of the giftcard (Usually the numbers under the barcode) */
  cardId: Scalars["String"];
  /** Secret of the Card */
  cardSecret: Scalars["String"];
  /** Id of the issuer */
  issuerId: Scalars["Int"];
};

/** Request for iDEAL Transaction */
export type IdealTransactionRequest = {
  /** amount for iDEAL Transaction */
  amount: PaymentAmountRequest;
  /** issuerId for iDEAL Transaction */
  issuerId: Scalars["String"];
};

/** Returns transactions for a given order */
export type OrderTransactions = {
  __typename?: "OrderTransactions";
  /** Payment details */
  transaction?: Maybe<TransactionDetails>;
  /** Wallet options */
  orderWalletOptions?: Maybe<OrderWalletOptions>;
};

/** Wallet options */
export type OrderWalletOptions = {
  __typename?: "OrderWalletOptions";
  /** List of giftCards applied to the order */
  giftCard: Array<PaymentsGiftCard>;
  /** List of transactions from purchase stamps */
  purchaseStamps: Array<PaymentsPurchaseStampTransaction>;
  /** Contains a evalue reservation transaction */
  hasSettlementTransaction: Scalars["Boolean"];
};

/** Result of creating a payment request */
export type PayPaymentRequestResult = MutationResult & {
  __typename?: "PayPaymentRequestResult";
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Result of adding the card to the account */
  status: MutationResultStatus;
  /** Payment Request */
  request?: Maybe<PaymentRequest>;
  /** Payments that are mutating */
  payment?: Maybe<PaymentProcess>;
};

/** Type that defines currency and the amount in money */
export type PaymentAmount = {
  __typename?: "PaymentAmount";
  /** amount in money */
  amount: Money;
  /** Currency used */
  currency: PaymentTransactionCurrencies;
};

/** Amount of the transaction that is requested */
export type PaymentAmountRequest = {
  /** Amount */
  amount: Scalars["Float"];
  /** Currencies supported by KNOX */
  currency: PaymentTransactionCurrencies;
};

/** Card Type to update DCT Card (Required by Payments) */
export enum PaymentCardType {
  /** DCT Card Type */
  Dct = "DCT",
  /** GiftCard CardType */
  GiftCard = "GIFT_CARD",
}

/** Channel of processing */
export enum PaymentChannel {
  /** Web (Web Browser) */
  Web = "WEB",
  /** Mobile (Android) */
  Android = "ANDROID",
  /** Mobile (iOS) */
  Ios = "IOS",
}

/** Available Payment Issuer */
export type PaymentIssuer = {
  __typename?: "PaymentIssuer";
  /** Id of the issuer */
  id: Scalars["Int"];
  /** logo id of the issuer */
  issuerLogoId: Scalars["String"];
  /** name of the issuer */
  name: Scalars["String"];
  /** Logo of the payment issuer url */
  image: Scalars["String"];
  /** Url to invoke of the issuer */
  url?: Maybe<Scalars["String"]>;
  /** Recenlty used card */
  recentlyUsed?: Maybe<Scalars["Boolean"]>;
  /** Availability of the issuer */
  availability?: Maybe<PaymentIssuerAvailability>;
};

/** Identifies disruption in the issuer services */
export enum PaymentIssuerAvailability {
  /** issuer is stable and available */
  Stable = "STABLE",
  /** Issuer Services are Disrupted */
  Disrupted = "DISRUPTED",
}

/** Payment method that the customer can use */
export enum PaymentMethod {
  /** Instantly pay through Ideal */
  Ideal = "IDEAL",
  /** Debit Card Tokenization, Reserving amounts on bank accounts */
  Dct = "DCT",
  /** Pay at the delivery moment */
  PayAtDelivery = "PAY_AT_DELIVERY",
  /** Gift card */
  GiftCard = "GIFT_CARD",
  /** E Value */
  Evalue = "EVALUE",
  /** Purchase Stamps */
  PurchaseStamps = "PURCHASE_STAMPS",
  /** Correction transaction */
  Correction = "CORRECTION",
  /** Belgium Payment Method similar to iDEAL */
  BancontactMobile = "BANCONTACT_MOBILE",
  /** Direct Debit Payment Method */
  SepaDirectDebit = "SEPA_DIRECT_DEBIT",
  /** Invoicing Payment Method */
  Invoice = "INVOICE",
}

/** A change that ocurred to a payment */
export type PaymentMutation = {
  __typename?: "PaymentMutation";
  /** The id of the mutation that is being performed on the payment */
  mutationId: Scalars["String"];
  /** Status of the mutation */
  status: PaymentMutationStatus;
  /** Operations */
  operations: Array<PaymentMutationOperation>;
};

/** Payment Mutation Error */
export type PaymentMutationError = {
  __typename?: "PaymentMutationError";
  /** Whether the payment mutation was successful or not */
  success: Scalars["Boolean"];
  /** Given Error code */
  errorCode: Scalars["String"];
  /** Error message */
  errorMessage: Scalars["String"];
};

/** Operations that were applied on an PaymentMutation */
export type PaymentMutationOperation = {
  __typename?: "PaymentMutationOperation";
  /** transactionId */
  transactionId: Scalars["String"];
  /** The id of the operation that is being performed on the given payment */
  operationId: Scalars["String"];
  /** Operation Status */
  operationStatus?: Maybe<PaymentOperationStatus>;
  /** Payment Operation type */
  operationType?: Maybe<PaymentOperationType>;
  /** error object */
  error?: Maybe<PaymentMutationError>;
};

/** Payment Mutation Status */
export enum PaymentMutationStatus {
  /** In Progress */
  InProgress = "IN_PROGRESS",
  /** Success */
  Success = "SUCCESS",
  /** Failed */
  Failed = "FAILED",
}

/** Defines status of an operation */
export enum PaymentOperationStatus {
  /** New */
  New = "NEW",
  /** Pending */
  Pending = "PENDING",
  /** Declined */
  Declined = "DECLINED",
  /** Expired */
  Expired = "EXPIRED",
  /** success */
  Success = "SUCCESS",
  /** Failed */
  Failed = "FAILED",
  /** Skipped */
  Skipped = "SKIPPED",
  /** Obsolete */
  Obsolete = "OBSOLETE",
}

/** Type of operation that is executed */
export enum PaymentOperationType {
  /** create */
  Create = "CREATE",
  /** adjust */
  Adjust = "ADJUST",
  /** cancel */
  Cancel = "CANCEL",
  /** capture */
  Capture = "CAPTURE",
  /** extend */
  Extend = "EXTEND",
  /** rollback */
  Rollback = "ROLLBACK",
}

/** Payment option that the user can use */
export type PaymentOption = {
  __typename?: "PaymentOption";
  /** Payment method */
  option: PaymentMethod;
  /** Issuer id to retrieve the issuers */
  issuers?: Maybe<Array<PaymentIssuer>>;
  /** List of registered tokens */
  tokens?: Maybe<Array<PaymentToken>>;
  /** Status of the payment option */
  status: PaymentOptionStatus;
};

/** Status of the PaymentOption */
export enum PaymentOptionStatus {
  /** ACTIVE */
  Active = "ACTIVE",
  /** DISABLED */
  Disabled = "DISABLED",
  /** Enrollment Disabled */
  EnrollmentDisabled = "ENROLLMENT_DISABLED",
}

/** Ongoing Payment */
export type PaymentProcess = {
  __typename?: "PaymentProcess";
  /** Identifier of the payment */
  id: Scalars["String"];
  /** Mutation with operations */
  mutation: PaymentMutation;
  /** Action that needs to be taken to complete mutation */
  action?: Maybe<PaymentProcessingAction>;
};

/** Payment Action */
export type PaymentProcessingAction =
  | PaymentProcessingUserChallengeAction
  | PaymentProcessingDeviceChallengeAction
  | PaymentProcessingRedirectAction
  | PaymentProcessingPollAction;

/** Action that requires device input. Processed within the payment flow */
export type PaymentProcessingDeviceChallengeAction = {
  __typename?: "PaymentProcessingDeviceChallengeAction";
  /** TransactionId */
  transactionId: Scalars["String"];
  /** authorizationId */
  authorizationId: Scalars["String"];
  /** Challenge Data */
  data: Scalars["String"];
  /** Sdk required for Action */
  sdk: PaymentProcessingSdk;
};

/** Action that requires the consumer to poll */
export type PaymentProcessingPollAction = {
  __typename?: "PaymentProcessingPollAction";
  /** interval in miliseconds */
  interval: Scalars["Int"];
  /** Mutation Id to poll */
  mutationId: Scalars["String"];
};

/** Action that requires leaving the payment flow. */
export type PaymentProcessingRedirectAction = {
  __typename?: "PaymentProcessingRedirectAction";
  /** Url */
  redirectUri: Scalars["String"];
};

/** SDK required for the Challenge */
export type PaymentProcessingSdk = {
  __typename?: "PaymentProcessingSdk";
  /** Sdk Type */
  sdkType: PaymentProcessingSdkType;
  /** Minimum SDK version required for transaction */
  minVersion: Scalars["String"];
};

/** SDK key */
export enum PaymentProcessingSdkType {
  /** Adyen Payment Processing SDK */
  Adyen = "ADYEN",
}

/** Action that requires user input. Processed within the payment flow */
export type PaymentProcessingUserChallengeAction = {
  __typename?: "PaymentProcessingUserChallengeAction";
  /** TransactionId */
  transactionId: Scalars["String"];
  /** authorizationId */
  authorizationId: Scalars["String"];
  /** Data required for the challengegit a */
  data: Scalars["String"];
  /** Sdk required for Action */
  sdk: PaymentProcessingSdk;
};

/** Payment request */
export type PaymentRequest = {
  __typename?: "PaymentRequest";
  /** Id of the payment request */
  id: Scalars["String"];
  /** Title of the payment request */
  title: Scalars["String"];
  /** Status of the payment request */
  status: PaymentRequestStatus;
  /** Requested amount of the payment request */
  requestedAmount: PaymentAmount;
  /** Available Payment Options for the request */
  availablePaymentOptions?: Maybe<Array<PaymentOption>>;
};

/** Input to authorize transaction in payment request */
export type PaymentRequestAuthorizeInput = {
  /** Payment Request Id */
  paymentRequestId: Scalars["String"];
  /** Payment Id */
  paymentId: Scalars["String"];
  /** Authorization Id */
  authorizationId: Scalars["String"];
  /** Challenge result */
  challengeResult: PaymentsChallengeResult;
};

/** Payment Request Status */
export enum PaymentRequestStatus {
  /** new */
  New = "NEW",
  /** in progress */
  InProgress = "IN_PROGRESS",
  /** success */
  Success = "SUCCESS",
  /** failed */
  Failed = "FAILED",
  /** cancelled */
  Cancelled = "CANCELLED",
  /** deactivated */
  Deactivated = "DEACTIVATED",
}

/** Payment SDK that needs to be consumed */
export type PaymentSdk = {
  __typename?: "PaymentSDK";
  /** SDK Type */
  id: PaymentSdkType;
  /** Minimal version of the SDK component */
  minVersion: Scalars["String"];
};

/** Payment SDK Type */
export enum PaymentSdkType {
  /** Adyen SDK */
  Adyen = "ADYEN",
}

/** The return type of a payment. This is one from the Payments domain. */
export enum PaymentStatus {
  /** New payment */
  New = "NEW",
  /** Payment in progress */
  InProgress = "IN_PROGRESS",
  /** Payment successful */
  Success = "SUCCESS",
  /** Payment failed */
  Failed = "FAILED",
  /** Payment Cancelled */
  Cancelled = "CANCELLED",
}

/** Registered token */
export type PaymentToken = {
  __typename?: "PaymentToken";
  /** Id of the token */
  id: Scalars["String"];
  /** Alias of the card */
  cardAlias?: Maybe<Scalars["String"]>;
  /** State of the card */
  status: PaymentTokenStatus;
  /** Is user default card */
  default: Scalars["Boolean"];
  /** id of the issuer company */
  issuerId?: Maybe<Scalars["String"]>;
  /** CardArtId */
  cardArtId?: Maybe<Scalars["String"]>;
  /** Payment token provider */
  psp: PaymentTokenPspProvider;
  /** Date of token creation */
  createdDate: Scalars["DateTime"];
};

/** Provider of Psp */
export enum PaymentTokenPspProvider {
  /** Adyen */
  Adyen = "ADYEN",
  /** ING */
  Ing = "ING",
  /** AH */
  Ah = "AH",
  /** Intersolve */
  Intersolve = "INTERSOLVE",
}

/** Card status of the payment token */
export enum PaymentTokenStatus {
  /** Card is inactive */
  Inactive = "INACTIVE",
  /** Card is active */
  Active = "ACTIVE",
  /** Card is suspended */
  Suspended = "SUSPENDED",
  /** Card has been deleted */
  Deleted = "DELETED",
  /** Card has been expired */
  Expired = "EXPIRED",
}

/** Payment Transaction Currencies */
export enum PaymentTransactionCurrencies {
  /** Euro - EUR */
  Eur = "EUR",
}

/** Payment Transaction Status */
export enum PaymentTransactionStatus {
  /** new */
  New = "NEW",
  /** pending */
  Pending = "PENDING",
  /** declined */
  Declined = "DECLINED",
  /** expired */
  Expired = "EXPIRED",
  /** failed */
  Failed = "FAILED",
  /** authorized */
  Authorized = "AUTHORIZED",
  /** cancelling */
  Cancelling = "CANCELLING",
  /** capturing */
  Capturing = "CAPTURING",
  /** cancelled */
  Cancelled = "CANCELLED",
  /** completed */
  Completed = "COMPLETED",
}

/** Result of adding a GiftCard */
export type PaymentsAddGiftCardResult = MutationResult & {
  __typename?: "PaymentsAddGiftCardResult";
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Result of adding the card to the account */
  status: MutationResultStatus;
  /** Replacement of onboarding response code */
  onboardingResponseCode: PaymentsTokenOnboardingResponseCode;
  /** Created card */
  card?: Maybe<PaymentsGiftCard>;
};

/** Input to authorize transaction */
export type PaymentsAuthorizeInput = {
  /** Id of the payment */
  paymentId: Scalars["String"];
  /** AuthorizationId */
  authorizationId: Scalars["String"];
  /** result of the challenge */
  challengeResult: PaymentsChallengeResult;
};

/** Payments Authorize result */
export type PaymentsAuthorizeResult = MutationResult & {
  __typename?: "PaymentsAuthorizeResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Further actions and or payments that need to be taken */
  action?: Maybe<CheckoutOrderSubmissionPayment>;
};

/** Bancontact Mobile Payment Transaction */
export type PaymentsBancontactMobileTransaction = {
  __typename?: "PaymentsBancontactMobileTransaction";
  /** Issuer Id of the payment transaction */
  issuerId: Scalars["String"];
  /** Date transaction was created */
  createdDate?: Maybe<Scalars["DateTime"]>;
};

/** Data of the challenge result provided by PSP */
export type PaymentsChallengeResult = {
  data: Scalars["String"];
};

/** Result of the payment request */
export type PaymentsCreatePaymentRequestPaymentResult = MutationResult & {
  __typename?: "PaymentsCreatePaymentRequestPaymentResult";
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Ongoing Payment */
  payment?: Maybe<PaymentProcess>;
};

/** DCT Card Type */
export type PaymentsDctCard = Card & {
  __typename?: "PaymentsDCTCard";
  /** Card Id is the id unique in the system */
  cardId: Scalars["String"];
  /** Card Alias of the Card */
  cardAlias?: Maybe<Scalars["String"]>;
  /** is default DCT card */
  default?: Maybe<Scalars["Boolean"]>;
  /** issuer Id of the card */
  issuerId?: Maybe<Scalars["String"]>;
  /** Card Art Id */
  cardArtId?: Maybe<Scalars["String"]>;
  /** Date card was added to payment profile */
  createdDate?: Maybe<Scalars["DateTime"]>;
  /** status of the card */
  status?: Maybe<PaymentTokenStatus>;
};

/** Input required to onboard DCT Tokens */
export type PaymentsDctCardOnboardingInput = {
  cardAlias?: Maybe<Scalars["String"]>;
  /** The push account receipt reived from the issuer to create a token. Note that the only first record will be processed */
  pushAccountReceipts: Array<Scalars["String"]>;
};

/** Gift Card such as NPL */
export type PaymentsGiftCard = Card & {
  __typename?: "PaymentsGiftCard";
  /** tokenId */
  cardId: Scalars["String"];
  /** Balance on the given card */
  balance?: Maybe<PaymentAmount>;
  /** Card Number of the underlying source */
  cardNumber?: Maybe<Scalars["String"]>;
  /** Status of the given token */
  status?: Maybe<PaymentTokenStatus>;
  /** Creation Date of the GiftCard Token */
  createdDate?: Maybe<Scalars["DateTime"]>;
};

/** iDEAL Payment Transaction */
export type PaymentsIdealTransaction = {
  __typename?: "PaymentsIDEALTransaction";
  /** Issuer Id of the payment transaction */
  issuerId: Scalars["String"];
  /** Date transaction was created */
  createdDate?: Maybe<Scalars["DateTime"]>;
};

/** Result of onboarding DCT Token */
export type PaymentsOnboardDctTokenResult = MutationResult & {
  __typename?: "PaymentsOnboardDCTTokenResult";
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** The created card */
  card?: Maybe<PaymentsDctCard>;
  /** Information from merchant of onboarding */
  onboardingResult?: Maybe<DctOnboardingResult>;
};

/** Return union for all cards */
export type PaymentsOrderCards = PaymentsDctCard | PaymentsGiftCard;

/** Return type for applied transactions on a order */
export type PaymentsOrderTransactions = {
  __typename?: "PaymentsOrderTransactions";
  /** List of dct cards applied on the order */
  dct: Array<PaymentsDctCard>;
  /** Latest purchase iDEAL transaction */
  iDEAL?: Maybe<PaymentsIdealTransaction>;
  /** List of giftCards applied to the order */
  giftCard: Array<PaymentsGiftCard>;
  /** List of transactions from purchase stamps */
  purchaseStamps: Array<PaymentsPurchaseStampTransaction>;
  /** Latest purchase BancontactMobile transaction */
  bancontactMobile?: Maybe<PaymentsBancontactMobileTransaction>;
  /** Contains a evalue reservation transaction */
  hasSettlementTransaction: Scalars["Boolean"];
};

/** Purchase stamp account */
export type PaymentsPurchaseStampTransaction = {
  __typename?: "PaymentsPurchaseStampTransaction";
  /** amount of booklets in transaction */
  bookletsAmount: Scalars["Int"];
};

/** User is shown a qr code to complete action */
export type PaymentsQrAction = {
  __typename?: "PaymentsQRAction";
  /** Data to be used to generate QR Code */
  qrCodeData: Scalars["String"];
  /** pspData for the QR Code */
  pspData: Scalars["String"];
  /** authorizationId to authorize payment after SDK Flow */
  authorizationId: Scalars["String"];
};

/** Replacement of GiftCard Response code */
export enum PaymentsTokenOnboardingResponseCode {
  /** Gift Card Approvded */
  Approved = "APPROVED",
  /** Gift Card is already connected */
  AlreadyConnected = "ALREADY_CONNECTED",
  /** GiftCard is declined */
  Declined = "DECLINED",
  /** Gift Card is not activated */
  NotActivated = "NOT_ACTIVATED",
  /** Giftcard has no balance */
  NoBalance = "NO_BALANCE",
  /** Gift Card requires verification */
  RequireAdditionalAuthentication = "REQUIRE_ADDITIONAL_AUTHENTICATION",
  /** Card is blocked */
  Forbidden = "FORBIDDEN",
  /** General Error */
  Error = "ERROR",
}

/** Payments Update card result */
export type PaymentsUpdateCardResult = MutationResult & {
  __typename?: "PaymentsUpdateCardResult";
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Result code of updating the card */
  errorCode?: Maybe<UpdateCardResultCode>;
  /** Result status of updating the card */
  status: MutationResultStatus;
  /** Created card */
  card?: Maybe<PaymentsOrderCards>;
};

/** Pre payments */
export type PrePayment = {
  __typename?: "PrePayment";
  /** Payment method */
  paymentMethod: PaymentMethod;
  /** Date transaction was created */
  createdDate?: Maybe<Scalars["DateTime"]>;
};

/** Payment details */
export type TransactionDetails = PaymentsDctCard | PrePayment;

/** Type that defines type of the transaction */
export enum TransactionType {
  Credit = "CREDIT",
  Debit = "DEBIT",
}

/** Specific error code when card has been updated */
export enum UpdateCardResultCode {
  /** Card can not be deleted as it has a pending reservation */
  CardHasPendingReservation = "CARD_HAS_PENDING_RESERVATION",
  /** Unknown error has occurred. */
  Unknown = "UNKNOWN",
}

/** User Challenge that is performed by the user doing something */
export type UserChallengeAction = CheckoutChallengeAction & {
  __typename?: "UserChallengeAction";
  /** Transaction Id */
  transactionId: Scalars["String"];
  /** The id of the authorization that is being performed on the payment */
  authorizationId: Scalars["String"];
  /** Base 64 encoded data of the psp */
  data: Scalars["String"];
  /** SDK Information used for the challenge */
  sdk?: Maybe<PaymentSdk>;
};

/** Pickup location */
export type PickupLocation = {
  __typename?: "PickupLocation";
  /** Pickup location Id */
  id: Scalars["Int"];
  /** Pickup location name */
  name: Scalars["String"];
  /** Pickup location description */
  description?: Maybe<Scalars["String"]>;
  /** Delivery location Id */
  deliveryLocationId: Scalars["Int"];
  /** Pickup location type */
  type: PickupLocationType;
  /** Pickup location address */
  address: StoresAddress;
  /** Pickup location geo coordinates */
  geoLocation: GeoLocation;
  /** Pickup location opening hours ranges */
  openingHours: Array<PickupLocationOpeningHours>;
};

/** Result of enabling a pickup location */
export type PickupLocationEnableResult = MutationResult & {
  __typename?: "PickupLocationEnableResult";
  /** Status of the call */
  status: MutationResultStatus;
  /** Errormessage that is thrown */
  errorMessage?: Maybe<Scalars["String"]>;
  /** StatusCode of request */
  statusCode?: Maybe<Scalars["Int"]>;
};

/** Pickup location opening hours date and time ranges */
export type PickupLocationOpeningHours = {
  __typename?: "PickupLocationOpeningHours";
  /** Date (YYYY-MM-DD) */
  date: Scalars["String"];
  /** Time ranges */
  blocks: Array<PickupLocationOpeningHoursBlock>;
};

/** Pickup location opening hours time range */
export type PickupLocationOpeningHoursBlock = {
  __typename?: "PickupLocationOpeningHoursBlock";
  /** Open time (HH:MM) */
  from: Scalars["String"];
  /** Close time (HH:MM) */
  to: Scalars["String"];
};

/** Pickup location type */
export type PickupLocationType = {
  __typename?: "PickupLocationType";
  /** Pickup location type code */
  code: PickupLocationTypeCode;
  /** Pickup location type description */
  description: Scalars["String"];
};

/** Pickup location type code */
export enum PickupLocationTypeCode {
  /** Business to business */
  B2B = "B2B",
  /** Store based full */
  Sbf = "SBF",
  /** Store based light */
  Sbl = "SBL",
  /** Stand alone */
  Sta = "STA",
  /** Delivery point */
  Dlp = "DLP",
  /** In store picking */
  Isp = "ISP",
  /** Specials only */
  Spo = "SPO",
}

/** Filters for pickup locations */
export type PickupLocationsFiltersInput = {
  /** Pickup location types */
  typeCodes?: Maybe<Array<PickupLocationTypeCode>>;
};

/** a productId with the quantity */
export type PriceLineItem = {
  /** productId */
  id: Scalars["Int"];
  /** product Quantity */
  quantity: Scalars["Int"];
};

/** Contains the total price of the products along with the total discount. */
export type PriceTotal = {
  __typename?: "PriceTotal";
  /** Total of all products without discount */
  withoutDiscount: Money;
  /** Total discount  of all products */
  discount: Money;
};

/** A type containing information on a single Koopzegel balance. */
export type PurchaseStampBalance = {
  __typename?: "PurchaseStampBalance";
  /**
   * The points, or simply "Koopzegels", included in the balance. Contains information about
   * the number of full booklets as well.
   */
  points: PurchaseStampBalancePoints;
  /** The monetary value of the Koopzegel balance. */
  money: PurchaseStampBalanceMoney;
  /**
   * The booklet targets to reach to gain interest on Koopzegels.
   * @deprecated @sunset_date(2024-04-01) use the target fields in the constants field instead.
   * . .
   */
  targets: PurchaseStampBookletTargets;
  /** The constants of the Koopzegel loyalty program. */
  constants: PurchaseStampConstants;
};

/** A type that contains information regarding the monetary value of a Koopzegel balance. */
export type PurchaseStampBalanceMoney = {
  __typename?: "PurchaseStampBalanceMoney";
  /**
   * The total amount of money invested into Koopzegels to reach the current number of
   * Koopzegels. Should be the same as (invested = points * 0.10).
   */
  invested: Money;
  /**
   * The total amount of money received through interest on Koopzegels. Half a booklet
   * of Koopzegels results in an interest of 0.50, a full booklet results in an interest
   * of 3.00.
   */
  interest: Money;
  /**
   * The total amount of money received when all Koopzegels were to be paid out right now.
   * Should be the same as (payout = invested + interest).
   */
  payout: Money;
};

/** A type containing information on the points that are embedded in a Koopzegel balance. */
export type PurchaseStampBalancePoints = {
  __typename?: "PurchaseStampBalancePoints";
  /** The total number of Koopzegels in this balance. Not divided across booklets. */
  totalPoints: Scalars["Int"];
  /**
   * The number of Koopzegels in the "current booklet". Should be the same as
   * (currentBookletPoints = totalPoints % fullBookletTarget)
   */
  currentBookletPoints: Scalars["Int"];
  /**
   * The number of full Koopzegel booklets. Should be the same as
   * (fullBooklets = floor(totalPoints / fullBookletTarget))
   */
  fullBooklets: Scalars["Int"];
};

/** A type containing a target to achieve on a Koopzegel booklet. */
export type PurchaseStampBookletTarget = {
  __typename?: "PurchaseStampBookletTarget";
  /** The number of points to gain to achieve the target. */
  points: Scalars["Int"];
  /** The interest that is gained when the target is achieved. */
  interest: Money;
};

/** A relatively constant type containing the booklet target for Koopzegel booklets. */
export type PurchaseStampBookletTargets = {
  __typename?: "PurchaseStampBookletTargets";
  /**
   * The number of points before half a booklet is reached. Might not be the same as half of
   * the fullBooklet attribute, for odd business reasons.
   */
  halfBooklet: Scalars["Int"];
  /** The number of points that make up a full booklet. */
  fullBooklet: Scalars["Int"];
};

/**
 * A relatively constant type containing the constants for Koopzegels, such as the targets
 * and the price of a single Koopzegel stamp.
 */
export type PurchaseStampConstants = {
  __typename?: "PurchaseStampConstants";
  /** The price of a single Koopzegel stamp. */
  price: Money;
  /** The partial booklet target. */
  partialBookletTarget: PurchaseStampBookletTarget;
  /** The full booklet target. */
  fullBookletTarget: PurchaseStampBookletTarget;
};

/** The migration status of the currently authenticated member. */
export type PurchaseStampMigration = {
  __typename?: "PurchaseStampMigration";
  /** The status of the migration for the currently authenticated member. */
  status: PurchaseStampMigrationStatus;
};

/** Enum containing all the types of migration status. */
export enum PurchaseStampMigrationStatus {
  /** The status indicating that a member has yet to be migrated. */
  NotMigrated = "NOT_MIGRATED",
  /**
   * The status indicating that a member is being migrated at the moment. Their balance and
   * transaction history is not available.
   */
  InProgress = "IN_PROGRESS",
  /**
   * The status indicating that a member is partially migrated. Their balance is already
   * available, but the transaction history is still being migrated.
   */
  BalanceMigrated = "BALANCE_MIGRATED",
  /** The status indicating that a member has been fully migrated. */
  Completed = "COMPLETED",
}

/** A type representing a purchase stamp saving goal. */
export type PurchaseStampSavingGoal = {
  __typename?: "PurchaseStampSavingGoal";
  /** The amount of the purchase stamp saving goal. */
  amount: Money;
  /** The name of the purchase stamp saving goal. */
  name: Scalars["String"];
};

/**
 * A type representing the mutation result of a purchase stamp saving goal.
 * Either the purchase stamp saving goal is created or deleted.
 * In case of deletion, it contains only the status or error state of the mutation.
 */
export type PurchaseStampSavingGoalMutationResult = MutationResult & {
  __typename?: "PurchaseStampSavingGoalMutationResult";
  /** The status of the mutation. */
  status: MutationResultStatus;
  /** In case of an error, it contains the reason of it. */
  errorMessage?: Maybe<Scalars["String"]>;
  /** In case of creation, it contains the created purchase stamp saving goal. */
  result?: Maybe<PurchaseStampSavingGoal>;
};

/**
 * A type containing a Koopzegel secret. These secrets are used to generate TOTP codes, which
 * are used in the Koopzegel redeem process.
 */
export type PurchaseStampSecret = {
  __typename?: "PurchaseStampSecret";
  /**
   * The ID of the secret. Since the client might create more than one secret, you can use
   * this ID to find the right secret and to check if the secret is still active, as secrets
   * might become inactive or even be fully deleted remotely.
   */
  id: Scalars["UUID"];
  /** The secret encoded in Base64. */
  secret: Scalars["String"];
};

/**
 * A type containing a Koopzegel secret. These secrets are used to generate TOTP codes, which
 * are used in the Koopzegel redeem process.
 */
export type PurchaseStampSecretMutationResult = MutationResult & {
  __typename?: "PurchaseStampSecretMutationResult";
  /** The status of the mutation. Indicates if the allocation was successful or not. */
  status: MutationResultStatus;
  /**
   * An error message explaining why the mutation was not successful. Will be null when the
   * status was of type success.
   */
  errorMessage?: Maybe<Scalars["String"]>;
  /**
   * The created secret as part of the mutation call. Will be null when the status was not of
   * type success.
   */
  secret?: Maybe<PurchaseStampSecret>;
};

/**
 * A type containing information if a secret is (still) valid. Secrets can become invalid after,
 * for example, password changes, usage or simply because they don't exist (anymore) remotely.
 */
export type PurchaseStampSecretState = {
  __typename?: "PurchaseStampSecretState";
  /** The ID of the secret. */
  id: Scalars["UUID"];
  /** A boolean indicating if the provided secret is still active. */
  valid: Scalars["Boolean"];
};

/**
 * A page containing Koopzegel transactions. This type also has a pagination object attached to it
 * with information on the pagination object that was passed along.
 */
export type PurchaseStampTransactionPage = {
  __typename?: "PurchaseStampTransactionPage";
  /** The pagination object with more information on this page's pagination object. */
  pagination: LoyaltyPointsTransactionPagination;
  /**
   * The list of Koopzegel transactions on this page. Can be empty if there are no more transactions
   * given the input pagination parameters.
   */
  transactions: Array<LoyaltyPointsTransaction>;
};

/** Questionnaire answer */
export type QuestionnaireAnswer = {
  /** The unique identifier for the answer. */
  id: Scalars["ID"];
  /** The value of the answer. */
  value: Scalars["String"];
};

/** Type representing a checkbox element in a questionnaire */
export type QuestionnaireCheckboxElement = QuestionnaireElement & {
  __typename?: "QuestionnaireCheckboxElement";
  /** Unique identifier for the element */
  id: Scalars["ID"];
  /** Type of the element */
  type: Scalars["String"];
  /** Text content of the element */
  text: Scalars["String"];
  /** List of options for the checkbox element */
  options: Array<Scalars["String"]>;
  /** Additional option for the checkbox element */
  otherOption?: Maybe<Scalars["String"]>;
  /** Placeholder text for the additional option */
  otherPlaceholder?: Maybe<Scalars["String"]>;
  /** Maximum length of the additional option text */
  maxLength?: Maybe<Scalars["Int"]>;
};

/** Interface representing a generic questionnaire element */
export type QuestionnaireElement = {
  /** Unique identifier for the element */
  id: Scalars["ID"];
  /** Type of the element */
  type: Scalars["String"];
  /** Text content of the element */
  text: Scalars["String"];
};

/** Type representing a questionnaire form */
export type QuestionnaireForm = {
  __typename?: "QuestionnaireForm";
  /** Topic of the questionnaire form */
  topic: Scalars["String"];
  /** Title of the questionnaire form */
  title: Scalars["String"];
  /** List of elements in the questionnaire form */
  elements: Array<QuestionnaireElement>;
};

/** Questionnaire form submit input */
export type QuestionnaireFormSubmitInput = {
  /** The topic of the questionnaire. */
  topic: Scalars["String"];
  /** The URL where the questionnaire is hosted. */
  url: Scalars["String"];
  /** The viewport information of the user. */
  viewport: Scalars["String"];
  /** The feedback provided by the user. */
  feedback: Array<QuestionnaireAnswer>;
};

/** Type representing a paragraph element in a questionnaire */
export type QuestionnaireParagraphElement = QuestionnaireElement & {
  __typename?: "QuestionnaireParagraphElement";
  /** Unique identifier for the element */
  id: Scalars["ID"];
  /** Type of the element */
  type: Scalars["String"];
  /** Text content of the element */
  text: Scalars["String"];
};

/** Type representing a radio element in a questionnaire */
export type QuestionnaireRadioElement = QuestionnaireElement & {
  __typename?: "QuestionnaireRadioElement";
  /** Unique identifier for the element */
  id: Scalars["ID"];
  /** Type of the element */
  type: Scalars["String"];
  /** Text content of the element */
  text: Scalars["String"];
  /** List of options for the radio element */
  options: Array<Scalars["String"]>;
  /** Additional option for the radio element */
  otherOption?: Maybe<Scalars["String"]>;
  /** Placeholder text for the additional option */
  otherPlaceholder?: Maybe<Scalars["String"]>;
  /** Maximum length of the text */
  maxLength?: Maybe<Scalars["Int"]>;
};

/** Type representing a 10-point rating element in a questionnaire */
export type QuestionnaireRate10Element = QuestionnaireElement & {
  __typename?: "QuestionnaireRate10Element";
  /** Unique identifier for the element */
  id: Scalars["ID"];
  /** Type of the element */
  type: Scalars["String"];
  /** Text content of the element */
  text: Scalars["String"];
  /** Label for the lowest rating */
  low: Scalars["String"];
  /** Label for the highest rating */
  high: Scalars["String"];
  /** Indicates if the rating element is required */
  required: Scalars["Boolean"];
};

/** Type representing a 5-point rating element in a questionnaire */
export type QuestionnaireRate5Element = QuestionnaireElement & {
  __typename?: "QuestionnaireRate5Element";
  /** Unique identifier for the element */
  id: Scalars["ID"];
  /** Type of the element */
  type: Scalars["String"];
  /** Text content of the element */
  text: Scalars["String"];
  /** Label for the lowest rating */
  low: Scalars["String"];
  /** Label for the highest rating */
  high: Scalars["String"];
  /** Indicates if the rating element is required */
  required: Scalars["Boolean"];
};

/** Type representing a text area element in a questionnaire */
export type QuestionnaireTextAreaElement = QuestionnaireElement & {
  __typename?: "QuestionnaireTextAreaElement";
  /** Unique identifier for the element */
  id: Scalars["ID"];
  /** Type of the element */
  type: Scalars["String"];
  /** Text content of the element */
  text: Scalars["String"];
  /** Maximum length of the text area */
  maxLength?: Maybe<Scalars["Int"]>;
  /** Placeholder text for the text area */
  placeholder?: Maybe<Scalars["String"]>;
};

/** Type representing a text element in a questionnaire */
export type QuestionnaireTextElement = QuestionnaireElement & {
  __typename?: "QuestionnaireTextElement";
  /** Unique identifier for the element */
  id: Scalars["ID"];
  /** Type of the element */
  type: Scalars["String"];
  /** Text content of the element */
  text: Scalars["String"];
  /** Indicates if the text element is required */
  required: Scalars["Boolean"];
  /** Maximum length of the text */
  maxLength?: Maybe<Scalars["Int"]>;
  /** Placeholder text for the text element */
  placeholder?: Maybe<Scalars["String"]>;
};

/** Allerhande magazine edition */
export type AllerhandeMagazine = {
  __typename?: "AllerhandeMagazine";
  /** Magazine edition id */
  id: Scalars["Int"];
  /** Magazine edition name */
  edition: Scalars["String"];
  /** Magazine edition publication year */
  year: Scalars["Int"];
  /** Magazine url */
  url: Scalars["String"];
  /** Magazine thumbnail imgae url */
  thumbnailImageUrl: Scalars["String"];
};

/** Types of recipes that can be saved in categories */
export enum CollectionCategoryRecipeType {
  /** Allerhande */
  A = "A",
  /** Others */
  O = "O",
}

/** Delete member recipe result */
export type DeleteMemberRecipeMutationResult = MutationResult & {
  __typename?: "DeleteMemberRecipeMutationResult";
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Whether mutation succeeded or failed */
  status: MutationResultStatus;
};

export type IngredientToOverride = {
  /** Ingredient id */
  id?: Maybe<Scalars["Int"]>;
  /** Ingredient name */
  name: Scalars["String"];
  /** Product id for override */
  productOverrideId: Scalars["Int"];
};

/** Returns member diet preference option */
export type MemberDietPreferenceOption = {
  __typename?: "MemberDietPreferenceOption";
  /** Preference value, ex. LACTOSE_FREE | GLUTEN_FREE */
  value: MemberDietPreferencesOptionType;
  /** Title of diet preference option */
  label: Scalars["String"];
  /** Image of preference option */
  image: ImageSet;
  /** Helps the UI decide if this option is selected or not */
  selected: Scalars["Boolean"];
};

/** All member diet options */
export enum MemberDietPreferencesOptionType {
  /** LACTOSE_FREE */
  LactoseFree = "LACTOSE_FREE",
  /** GLUTEN_FREE */
  GlutenFree = "GLUTEN_FREE",
}

/** Returns member meat preference option */
export type MemberFavouriteDishOption = {
  __typename?: "MemberFavouriteDishOption";
  /** Title of favourite dish type */
  label: Scalars["String"];
  /** Image of preference option */
  image: ImageSet;
  /** Helps the UI decide if this option is selected or not */
  selected: Scalars["Boolean"];
};

/** All member preferences pertaining food */
export type MemberFoodPreferences = {
  __typename?: "MemberFoodPreferences";
  /** Preference on how often a member eats meat or fish. Options are one letter */
  protein: Array<MemberPreferenceProteinOptions>;
  /** Preference on what a members favorite dish type is. Like pasta. */
  favouriteDishTypes: Array<MemberPreferenceDishOptions>;
  /** Preference on what ingredients a member dislikes. */
  unwantedIngredients: Array<Scalars["String"]>;
};

/** Member food preference input */
export type MemberFoodPreferencesInput = {
  /** Stores how often a member eats meat/fish */
  protein?: Maybe<MemberProteinPreferencesOptionType>;
  /** Stores favorite dish types of the member */
  favouriteDishTypes: Array<Scalars["String"]>;
  /** Stores 5 ingredients a member dislikes */
  unwantedIngredients: Array<Scalars["String"]>;
  /** Stores diet preferences */
  dietPreferences?: Maybe<Array<Scalars["String"]>>;
  /** Stores meat preference */
  meatPreference?: Maybe<MemberMeatPreferencesOptionType>;
  /** Stores meat frequency for FLEXITARIAN meat option only */
  meatFrequency?: Maybe<MemberMeatFrequencyPreferenceOptionType>;
  /** Nutrition preference */
  nutritionPreference?: Maybe<MemberNutritionPreferenceOptionType>;
  /** Default serving number */
  familySize?: Maybe<Scalars["Int"]>;
};

/** Returns member meat preference option */
export type MemberMeatFrequencyPreferenceOption = {
  __typename?: "MemberMeatFrequencyPreferenceOption";
  /** Preference value, ex. RARELY | REGULARLY | OFTEN */
  value: MemberMeatFrequencyPreferenceOptionType;
  /** Title of the preference */
  label: Scalars["String"];
  /** Specifies how often meat dishes appear in weekmenu */
  timesPerWeek: Scalars["Int"];
  /** Helps the UI decide if this option is selected or not */
  selected: Scalars["Boolean"];
};

/** All member meat frequency options for FLEXITARIAN diet only */
export enum MemberMeatFrequencyPreferenceOptionType {
  /** RARELY */
  Rarely = "RARELY",
  /** REGULARLY */
  Regularly = "REGULARLY",
  /** OFTEN */
  Often = "OFTEN",
}

/** Returns member meat preference option */
export type MemberMeatPreferenceOption = {
  __typename?: "MemberMeatPreferenceOption";
  /** Preference value, ex. VEGETARIAN | VEGAN | PESCATARIAN | FLEXITARIAN */
  value: MemberMeatPreferencesOptionType;
  /** Title of the preference */
  label: Scalars["String"];
  /** Image of preference option */
  image: ImageSet;
  /** Link to preference option webview */
  href: Scalars["String"];
  /** Helps the UI decide if this option is selected or not */
  selected: Scalars["Boolean"];
};

/** All member protein options */
export enum MemberMeatPreferencesOptionType {
  /** VEGETARIAN */
  Vegetarian = "VEGETARIAN",
  /** VEGAN */
  Vegan = "VEGAN",
  /** PESCATARIAN */
  Pescatarian = "PESCATARIAN",
  /** FLEXITARIAN */
  Flexitarian = "FLEXITARIAN",
}

/** Returns member meat preference option */
export type MemberNutritionPreferenceOption = {
  __typename?: "MemberNutritionPreferenceOption";
  /** Preference value, ex. KETO | LOW_CALORIES | LOW_CARBS | PROTEIN_RICH */
  value: MemberNutritionPreferenceOptionType;
  /** Title of the preference */
  label: Scalars["String"];
  /** Helps the UI decide if this option is selected or not */
  selected: Scalars["Boolean"];
};

/** All member nutrition preference options */
export enum MemberNutritionPreferenceOptionType {
  /** KETO */
  Keto = "KETO",
  /** LOW CALORIES */
  LowCalories = "LOW_CALORIES",
  /** LOW CARBS */
  LowCarbs = "LOW_CARBS",
  /** PROTEIN RICH */
  ProteinRich = "PROTEIN_RICH",
}

/** Returns member dish preference */
export type MemberPreferenceDishOptions = {
  __typename?: "MemberPreferenceDishOptions";
  /** Helps the UI decide if this option is selected or not */
  selected: Scalars["Boolean"];
  /** title of the preference */
  label: Scalars["String"];
};

/** Returns member protein preference */
export type MemberPreferenceProteinOptions = {
  __typename?: "MemberPreferenceProteinOptions";
  /** Helps the UI decide if this option is selected or not */
  selected: Scalars["Boolean"];
  /** title of the preference */
  label: MemberProteinPreferencesOptionType;
};

/** Returns member food preference */
export type MemberPreferences = {
  __typename?: "MemberPreferences";
  /** These are preferences the user entered pertaining their liked and disliked food */
  food: MemberFoodPreferences;
};

/** All member protein options */
export enum MemberProteinPreferencesOptionType {
  /** ALWAYS */
  Always = "ALWAYS",
  /** NEVER */
  Never = "NEVER",
  /** SOMETIMES */
  Sometimes = "SOMETIMES",
}

/**
 * Member recipe is type of recipe that is created by members or scraped by members from third party sources.
 * Unlike regular Recipe, Member Recipe can be created, updated or delete. Regular Recipe is a read-only recipe
 * that's been created by dedicated team and is managed by them
 */
export type MemberRecipe = {
  __typename?: "MemberRecipe";
  /** Member's recipe Id */
  id: Scalars["Int"];
  /** Recipe Title */
  title?: Maybe<Scalars["String"]>;
  /** Recipe Description */
  description?: Maybe<Scalars["String"]>;
  /** Recipe ingredients */
  ingredients?: Maybe<Array<MemberRecipeIngredient>>;
  /** Recipe preparation details */
  preparation: RecipePreparation;
  /** Recipe servings */
  servings?: Maybe<MemberRecipeServing>;
  /** Recipe time */
  time?: Maybe<RecipeTime>;
  /**
   * Recipe source
   * @deprecated @sunset_date(2024-06-01) use author
   * . author.
   */
  source?: Maybe<RecipeSource>;
  /** Recipe images by rendition name */
  images: Array<RecipeImage>;
  /** Recipe author */
  author?: Maybe<RecipeAuthor>;
};

/**
 * Member recipe is type of recipe that is created by members or scraped by members from third party sources.
 * Unlike regular Recipe, Member Recipe can be created, updated or delete. Regular Recipe is a read-only recipe
 * that's been created by dedicated team and is managed by them
 */
export type MemberRecipeImagesArgs = {
  renditions?: Maybe<Array<RenditionKey>>;
};

/** Member recipe author input */
export type MemberRecipeAuthorInput = {
  /** Recipe origin input */
  origin: MemberRecipeOriginInput;
};

/** Member Recipe ingredient type */
export type MemberRecipeIngredient = {
  __typename?: "MemberRecipeIngredient";
  /**
   * Ingredient complete text which includes name, quantity and quantity unit for example:
   * 15 g verse peterselie
   */
  text?: Maybe<Scalars["String"]>;
};

/** Member recipe input */
export type MemberRecipeInput = {
  /** Id of the member's recipe that is being updated. For create id is empty */
  id?: Maybe<Scalars["Int"]>;
  /** Member recipe title */
  title: Scalars["String"];
  /** Member recipe description */
  description: Scalars["String"];
  /** Ingredients */
  ingredients?: Maybe<Array<Scalars["String"]>>;
  /** Preparation steps */
  preparationSteps?: Maybe<Array<Scalars["String"]>>;
  /** Servings number */
  servingsNumber?: Maybe<Scalars["Int"]>;
  /** Cook Time */
  cookTime?: Maybe<Scalars["Int"]>;
  /** Recipe author */
  author?: Maybe<MemberRecipeAuthorInput>;
};

/** Member recipe origin input */
export type MemberRecipeOriginInput = {
  /** Recipe type */
  type: MemberRecipeOriginType;
  /** Recipe url */
  url?: Maybe<Scalars["String"]>;
  /** Recipe host name */
  hostName?: Maybe<Scalars["String"]>;
};

/** Member recipe origin type */
export enum MemberRecipeOriginType {
  /** Member created */
  MemberCreated = "MEMBER_CREATED",
  /** Member scraped */
  MemberScraped = "MEMBER_SCRAPED",
}

/**
 * Preference option that's going to be displayed if member haven't specified the preferences
 * and as the result doesn't have any recipes recommended
 */
export type MemberRecipePreferencePreviewOption = {
  __typename?: "MemberRecipePreferencePreviewOption";
  /** Link to preference option webview */
  href: Scalars["String"];
  /** Image of preference option */
  image: ImageSet;
  /** Title of the preference */
  label: Scalars["String"];
  /** Preference value */
  value: Scalars["String"];
};

/** Preference option that's been selected */
export type MemberRecipePreferenceSelectedOption = {
  __typename?: "MemberRecipePreferenceSelectedOption";
  /** Title of the preference */
  label: Scalars["String"];
  /** Preference value */
  value: Scalars["String"];
};

/** All member recipe related preferences */
export type MemberRecipePreferences = {
  __typename?: "MemberRecipePreferences";
  /** Preference on how often a member eats meat or fish */
  meatPreferences: Array<MemberMeatPreferenceOption>;
  /** Preference on how often a member wants to have meat dishes for FLEXITARIAN diet */
  meatFrequencyPreferences: Array<MemberMeatFrequencyPreferenceOption>;
  /** Preference on what a members favorite dish type is. Like pasta. */
  favouriteDishTypes: Array<MemberFavouriteDishOption>;
  /** Preference on what ingredients a member dislikes. */
  unwantedIngredients: Array<Scalars["String"]>;
  /** Diet preferences */
  dietPreferences: Array<MemberDietPreferenceOption>;
  /** Nutrition preferences */
  nutritionPreferences: Array<MemberNutritionPreferenceOption>;
  /** Default serving size */
  familySize?: Maybe<Scalars["Int"]>;
};

/** Member Recipe Serving Details */
export type MemberRecipeServing = {
  __typename?: "MemberRecipeServing";
  /** Recipe number of servings */
  number?: Maybe<Scalars["Int"]>;
  /** Recipe serving type */
  type: Scalars["String"];
};

/**
 * We have two types of entities in recipe domain: Recipe and RecipeSummary
 * Recipe has more data compare to RecipeSummary and they have different data sources:
 * RecipeSummar comes from Elastic
 * Recipe comes from PostgreSQL DB
 *
 * Will be extended with more fields
 */
export type Recipe = {
  __typename?: "Recipe";
  /** Recipe alternative title */
  alternateTitle: Scalars["String"];
  /** Recipe author */
  author?: Maybe<RecipeAuthor>;
  /** Recipe classifications */
  classifications: Array<Scalars["String"]>;
  /** Recipe cooking time */
  cookTime: Scalars["Int"];
  /** Recipe courses */
  courses: Array<Scalars["String"]>;
  /** Recipe cuisines */
  cuisines?: Maybe<Array<Scalars["String"]>>;
  /** Recipe description */
  description: Scalars["String"];
  /** Recipe flags */
  flags: Array<RecipeFlag>;
  /** Recipe group */
  group?: Maybe<Scalars["String"]>;
  /** Recipe link */
  href: Scalars["String"];
  /** Recipe ID */
  id: Scalars["Int"];
  /** Recipe images by rendition name */
  images: Array<RecipeImage>;
  /** Recipe ingredients */
  ingredients: Array<RecipeIngredient>;
  /** Recipe kitchen appliances */
  kitchenAppliances: Array<RecipeKitchenAppliance>;
  /** Recipe magazine mentions */
  magazines: Array<RecipeMagazine>;
  /** Recipe seo meta */
  meta: RecipeMeta;
  /** Recipe last modification date */
  modifiedAt: Scalars["String"];
  /** Flag indicating whether recipe should be indexed by search engines or not */
  noIndex: Scalars["Boolean"];
  /** Recipe nutri-score */
  nutriScore?: Maybe<RecipeNutriScore>;
  /** Recipe nutrition information */
  nutritions?: Maybe<RecipeNutritionInfo>;
  /** Recipe oven time */
  ovenTime?: Maybe<Scalars["Int"]>;
  /** Recipe preparation details */
  preparation: RecipePreparation;
  /** Recipe publication date */
  publishedAt: Scalars["String"];
  /** Recipe rating */
  rating: RecipeRating;
  /** SEO canonical recipe url */
  seoCanonical?: Maybe<Scalars["String"]>;
  /** Recipe servings */
  servings: RecipeDetailsServing;
  /** Recipe slugified title */
  slugifiedTitle: Scalars["String"];
  /**
   * Recipe source
   * @deprecated @sunset_date(2024-06-01) @use author
   * . author.
   */
  source?: Maybe<RecipeSource>;
  /** Recipe spiciness level */
  spiciness: Scalars["Int"];
  /**
   * Recipe supplier company info
   * @deprecated @sunset_date(2024-06-01) use author
   * . author.
   */
  supplier?: Maybe<RecipeSupplier>;
  /** Recipe tags */
  tags: Array<RecipeTag>;
  /** Recipe cooking tips */
  tips: Array<RecipeTip>;
  /** Recipe title */
  title: Scalars["String"];
  /** Recipe variants */
  variants: Array<Maybe<RecipeSummary>>;
  /** Recipe videos */
  videos: RecipeVideos;
  /** Recipe wait time */
  waitTime?: Maybe<Scalars["Int"]>;
};

/**
 * We have two types of entities in recipe domain: Recipe and RecipeSummary
 * Recipe has more data compare to RecipeSummary and they have different data sources:
 * RecipeSummar comes from Elastic
 * Recipe comes from PostgreSQL DB
 *
 * Will be extended with more fields
 */
export type RecipeImagesArgs = {
  renditions?: Maybe<Array<RenditionKey>>;
};

/** Alternative Sections, alternative products are divided into sections, for example Biological, Product with less waste, Best priced, etc.. */
export type RecipeAlternativeSection = {
  __typename?: "RecipeAlternativeSection";
  /** Alternative title */
  title: Scalars["String"];
  /** Alternative description */
  description: Scalars["String"];
  /** Alternative product suggestion */
  productSuggestions: Array<Maybe<RecipeShoppableProductSuggestion>>;
};

/** Recipe source */
export type RecipeAuthor = {
  __typename?: "RecipeAuthor";
  /** Recipe origin */
  origin?: Maybe<RecipeOrigin>;
  /** Recipe brand */
  brand?: Maybe<RecipeBrand>;
};

/** Recipe brand */
export type RecipeBrand = {
  __typename?: "RecipeBrand";
  /** Brand name */
  name?: Maybe<Scalars["String"]>;
  /** Brand logo image */
  logo?: Maybe<ImageSet>;
  /** Recipe supplier */
  supplier?: Maybe<RecipeBrandSupplier>;
};

/** Recipe brand supplier */
export type RecipeBrandSupplier = {
  __typename?: "RecipeBrandSupplier";
  /** Supplier name */
  name?: Maybe<Scalars["String"]>;
};

/** Mutation result */
export type RecipeCollectionAssignRecipeToCategoriesResult = MutationResult & {
  __typename?: "RecipeCollectionAssignRecipeToCategoriesResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Result of assigning recipe to the given categories */
  result: RecipeCollectionCategoryRecipe;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/**
 * Recipe collection - all member recipes
 * Collection is divided into categories
 * Each category contains recipes (it's only Allerhande)
 */
export type RecipeCollectionCategory = {
  __typename?: "RecipeCollectionCategory";
  /** Category id */
  id: Scalars["Int"];
  /** Category name given by user */
  name: Scalars["String"];
  /** Defines whether this is the default category that can't be renamed or deleted */
  isDefault: Scalars["Boolean"];
  /** List of recipe ids in the category */
  list: Array<RecipeCollectionCategoryRecipe>;
  /** List of recipe entities */
  recipes: Array<RecipeSummary>;
};

/**
 * Recipe collection - all member recipes
 * Collection is divided into categories
 * Each category contains recipes (it's only Allerhande)
 */
export type RecipeCollectionCategoryRecipesArgs = {
  size?: Maybe<Scalars["Int"]>;
};

/**
 * Contains informaton about collected recipe
 * (Will be extended with type property in future)
 */
export type RecipeCollectionCategoryRecipe = {
  __typename?: "RecipeCollectionCategoryRecipe";
  /**
   * Collected recipe id
   * @deprecated @sunset_date(2022-08-01) checked 2023-05-08 - used in appie-ios@8.6.2 appie-be-ios@8.6.2 - This field will not be available soon
   * . .
   */
  collectedId: Scalars["Int"];
  /** Recipe id */
  id: Scalars["Int"];
  /** Recipe type (e.g.: Allerhande) */
  type: CollectionCategoryRecipeType;
};

/** Mutation result */
export type RecipeCollectionCreateCategoryResult = MutationResult & {
  __typename?: "RecipeCollectionCreateCategoryResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Result of create recipe collection category */
  result: RecipeCollectionCategory;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Mutation result */
export type RecipeCollectionDeleteCategoryResult = MutationResult & {
  __typename?: "RecipeCollectionDeleteCategoryResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Result of remove recipe from category */
  result: Scalars["Boolean"];
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Mutation result */
export type RecipeCollectionRemoveRecipeFromCategoriesResult =
  MutationResult & {
    __typename?: "RecipeCollectionRemoveRecipeFromCategoriesResult";
    /** Whether mutation succeeded, failed completely or partially */
    status: MutationResultStatus;
    /** Result of remove recipe from all categories */
    result: Scalars["Boolean"];
    /** Relevant error message if applicable */
    errorMessage?: Maybe<Scalars["String"]>;
  };

/** Mutation result */
export type RecipeCollectionUpdateCategoryResult = MutationResult & {
  __typename?: "RecipeCollectionUpdateCategoryResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Result of update recipe collection category */
  result: RecipeCollectionCategory;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Mutation result */
export type RecipeCollectionUpdateRecipeWithCategoriesResult =
  MutationResult & {
    __typename?: "RecipeCollectionUpdateRecipeWithCategoriesResult";
    /** Whether mutation succeeded, failed completely or partially */
    status: MutationResultStatus;
    /** Result of updated recipe with the given categories */
    result: Scalars["Boolean"];
    /** Relevant error message if applicable */
    errorMessage?: Maybe<Scalars["String"]>;
  };

/** Recipe Serving Details */
export type RecipeDetailsServing = {
  __typename?: "RecipeDetailsServing";
  /** Recipe number of servings */
  number: Scalars["Int"];
  /** Recipe serving type */
  type: Scalars["String"];
  /** Min serving */
  min: Scalars["Int"];
  /** Max serving */
  max: Scalars["Int"];
  /** Serving scale */
  scale: Scalars["Int"];
  /** Is serving changeable */
  isChangeable: Scalars["Boolean"];
};

/** Recipe filter */
export type RecipeFilter = {
  __typename?: "RecipeFilter";
  /** Group key where the filters belong to */
  group: Scalars["String"];
  /** Filter keys of the group */
  values: Array<Scalars["String"]>;
};

/** Recipe flags indicating presence of certain tags, internalTags or classifications */
export enum RecipeFlag {
  /** Lactose free flag */
  LactoseFree = "LACTOSE_FREE",
  /** Gluten free flag */
  GlutenFree = "GLUTEN_FREE",
  /** Keto flag */
  Keto = "KETO",
  /** Low calories flag */
  LowCalories = "LOW_CALORIES",
  /** Low carbs flag */
  LowCarbs = "LOW_CARBS",
  /** Protein rich flag */
  ProteinRich = "PROTEIN_RICH",
}

/** Highlighted recipe themes created in Hippo CMS by content team */
export type RecipeHighlightedThemes = {
  __typename?: "RecipeHighlightedThemes";
  /** Title */
  title: Scalars["String"];
  /** Recipe Themes */
  themes: Array<RecipeTheme>;
};

/** Extended model for recipe image */
export type RecipeImage = {
  __typename?: "RecipeImage";
  /** Image rendition. Can be numeric (d200x200) for Allerhande recipes and t-shirt-esque (s, m, l, xl) */
  rendition: RenditionKey;
  /** Url of the image */
  url?: Maybe<Scalars["String"]>;
  /** Width of the image in pixels */
  width?: Maybe<Scalars["Int"]>;
  /** Height of the image in pixels */
  height?: Maybe<Scalars["Int"]>;
};

/** Recipe Image Renditions */
export type RecipeImageRenditions = {
  __typename?: "RecipeImageRenditions";
  /** Size 220x162 */
  d220x162?: Maybe<ImageSet>;
  /** Size 302x220 */
  d302x220?: Maybe<ImageSet>;
  /** Size 440x324 */
  d440x324?: Maybe<ImageSet>;
  /** Size 445x297 */
  d445x297?: Maybe<ImageSet>;
  /** Size 612x450 */
  d612x450?: Maybe<ImageSet>;
  /** Size 680x320 */
  d680x320?: Maybe<ImageSet>;
  /** Size 890x594 */
  d890x594?: Maybe<ImageSet>;
  /** Size 1024x748 */
  d1024x748?: Maybe<ImageSet>;
  /** Size 1224x900 */
  d1224x900?: Maybe<ImageSet>;
  /** Size 1600x560 */
  d1600x560?: Maybe<ImageSet>;
  /** Size 1920x1080 */
  d1920x1080?: Maybe<ImageSet>;
  /** Size 2048x1496 */
  d2048x1496?: Maybe<ImageSet>;
};

/** Recipe ingredient type */
export type RecipeIngredient = {
  __typename?: "RecipeIngredient";
  /** Ingredient Id */
  id: Scalars["Int"];
  /** Ingredient name */
  name: SingularPluralName;
  /** Ingredient quantity */
  quantity?: Maybe<Scalars["Float"]>;
  /** Ingredient quantity unit name */
  quantityUnit?: Maybe<SingularPluralName>;
  /**
   * Ingredient complete text which includes name, quantity and quantity unit for example:
   * 15 g verse peterselie
   */
  text?: Maybe<Scalars["String"]>;
  /** Ingredient quantity divided by number of servings. See normalizeRecipeIngredient */
  servingsScale: Scalars["Float"];
};

/** Recipe Kitchen Appliance */
export type RecipeKitchenAppliance = {
  __typename?: "RecipeKitchenAppliance";
  /** Kitchen appliance name */
  name: Scalars["String"];
  /** Kitchen appliance quantity */
  quantity?: Maybe<Scalars["Int"]>;
  /** Kitchen appliance scalability flag */
  scalable?: Maybe<Scalars["Boolean"]>;
  /** Complete text containing quantity and name */
  text: Scalars["String"];
};

/** Recipe magazine issue */
export type RecipeMagazine = {
  __typename?: "RecipeMagazine";
  /** Recipe magazine title */
  title: Scalars["String"];
  /** Recipe magazine issue publication date in format YYYY-MM-DD */
  date: Scalars["String"];
  /** Recipe magazine issue number */
  number: Scalars["String"];
  /** Recipe magazine slugified name */
  issueSlug: Scalars["String"];
  /** Recipe magazine type */
  type: Scalars["String"];
};

/** Recipe seo meta */
export type RecipeMeta = {
  __typename?: "RecipeMeta";
  /** Recipe seo description */
  description: Scalars["String"];
  /** Recipe seo title */
  title: Scalars["String"];
};

/** Recipe nutri-score */
export enum RecipeNutriScore {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
}

/** Nutrition data */
export type RecipeNutrition = {
  __typename?: "RecipeNutrition";
  /** Name to display */
  name: Scalars["String"];
  /** How much with the specified measure unit */
  value: Scalars["Float"];
  /** What is a measure unit */
  unit: Scalars["String"];
};

/** Nutrition data set */
export type RecipeNutritionInfo = {
  __typename?: "RecipeNutritionInfo";
  /** How many calories */
  energy?: Maybe<RecipeNutrition>;
  /** How much carbohydrates */
  carbohydrates?: Maybe<RecipeNutrition>;
  /** How much sugar */
  sugar?: Maybe<RecipeNutrition>;
  /** How much sodium */
  sodium?: Maybe<RecipeNutrition>;
  /** How much protein */
  protein?: Maybe<RecipeNutrition>;
  /** How much fat */
  fat?: Maybe<RecipeNutrition>;
  /** How much saturated fat */
  saturatedFat?: Maybe<RecipeNutrition>;
  /** How much fibers */
  fibers?: Maybe<RecipeNutrition>;
};

/** Recipe origin */
export type RecipeOrigin = {
  __typename?: "RecipeOrigin";
  /** Origin type */
  type?: Maybe<RecipeOriginType>;
  /** Recipe host name */
  hostName?: Maybe<Scalars["String"]>;
  /** Recipe url */
  url?: Maybe<Scalars["String"]>;
};

/** Recipe origin type enum */
export enum RecipeOriginType {
  /** Allerhande recipe */
  Allerhande = "ALLERHANDE",
  /** Sponsored recipe */
  Sponsored = "SPONSORED",
  /** Orphaned recipe */
  Orphaned = "ORPHANED",
  /** Member created recipe */
  MemberCreated = "MEMBER_CREATED",
  /** Member scraped recipe */
  MemberScraped = "MEMBER_SCRAPED",
  /** FFN recipe */
  Ffn = "FFN",
}

/** Recipe preparation details */
export type RecipePreparation = {
  __typename?: "RecipePreparation";
  /** Recipe preparation steps */
  steps: Array<Scalars["String"]>;
  /** Recipe preparation summary */
  summary: Array<Scalars["String"]>;
};

/** Recipe preparation section */
export type RecipePreparationSection = {
  __typename?: "RecipePreparationSection";
  /** Recipe Title */
  recipeTitle?: Maybe<Scalars["String"]>;
  /** Recipe images by rendition name */
  recipeImages: Array<RecipeImage>;
  /** Serving size */
  servingSize: Scalars["Int"];
  /** Cooking time */
  cookingTime?: Maybe<Scalars["Int"]>;
  /** Preparation steps */
  preparationSteps: Array<RecipePreparationStep>;
};

/** Recipe preparation section */
export type RecipePreparationSectionRecipeImagesArgs = {
  renditions?: Maybe<Array<RenditionKey>>;
};

/** Preparation step information */
export type RecipePreparationStep = {
  __typename?: "RecipePreparationStep";
  /** Preparation step text */
  text?: Maybe<Scalars["String"]>;
  /** Preparation step ingredients */
  ingredients: Array<RecipeIngredient>;
  /** Kitchen timer for the step */
  kitchenTimer?: Maybe<Scalars["Int"]>;
  /** Recipe cooking tips */
  tips: Array<RecipeTip>;
  /** Recipe images by rendition name */
  images: Array<RecipeImage>;
  /** Recipe preparation step videos */
  videos?: Maybe<Array<RecipeVideo>>;
  /** Recipe kitchen appliances */
  kitchenAppliances?: Maybe<Array<RecipeKitchenAppliance>>;
};

/** Preparation step information */
export type RecipePreparationStepImagesArgs = {
  renditions?: Maybe<Array<RenditionKey>>;
};

/** recipeProductSuggestionsV2 input type */
export type RecipeProductSuggestionV2Input = {
  /** Recipe Id */
  recipeId: Scalars["Int"];
  /** Recipe number of servings */
  numberOfServings?: Maybe<Scalars["Int"]>;
  /** Product Id Override */
  productIdOverride?: Maybe<Array<Scalars["Int"]>>;
  /** Ingredients to override */
  ingredientsToOverride?: Maybe<Array<IngredientToOverride>>;
};

/** Recipe Ingredient */
export type RecipeProductSuggestionsIngredient = {
  __typename?: "RecipeProductSuggestionsIngredient";
  /** Id */
  id?: Maybe<Scalars["Int"]>;
  /** Ingredient name */
  name?: Maybe<Scalars["String"]>;
  /**
   * Ingredient quantity
   * @deprecated @sunset_date(2023-10-18) checked 2023-04-18 - the quantity should support decimals - use quantityFloat instead
   * . .
   */
  quantity?: Maybe<Scalars["Int"]>;
  /** Ingredient quantity as a Float */
  quantityFloat?: Maybe<Scalars["Float"]>;
  /** Ingredient quantity unit */
  quantityUnit?: Maybe<Scalars["String"]>;
  /** Index used by FE to identify the position of the element withing the array of objects. */
  index?: Maybe<Scalars["Int"]>;
  /** Ingredient additional information */
  additionalInfo?: Maybe<Scalars["String"]>;
  /** Complete text for ingredient that includes quantity, quantity unit and name */
  completeText?: Maybe<Scalars["String"]>;
  /** Ingredient name as it mentioned in the recipe ingredients section */
  description?: Maybe<SingularPluralName>;
};

/** Defines recipe rating */
export type RecipeRating = {
  __typename?: "RecipeRating";
  /** How many users rated */
  count: Scalars["Int"];
  /** Average rating, null when not rated */
  average?: Maybe<Scalars["Float"]>;
};

/** Recipe recommendation type */
export type RecipeRecommendation = {
  __typename?: "RecipeRecommendation";
  /** Recipe id */
  id: Scalars["Int"];
  /** Recipe summary information */
  recipe: RecipeSummary;
};

/**
 * All necessary data to render recipe recommendation lane on koken tab.
 * Contains recommended recipes and member preferences
 */
export type RecipeRecommendationLane = {
  __typename?: "RecipeRecommendationLane";
  /** Weeks for which recommendations are available for user */
  availableWeeks: Array<RecommendationWeek>;
  /** Bonus recipes */
  bonusRecipes: Array<RecipeRecommendation>;
  /** Member recipe preferences */
  memberPreferencePreviewOptions: Array<MemberRecipePreferencePreviewOption>;
  /** Recommended recipes */
  recipeRecommendations: Array<RecipeRecommendation>;
  /** Selected nutrition and allergy preferences */
  selectedNutritionAndAllergyPreferences: Array<MemberRecipePreferenceSelectedOption>;
  /** Default servings number */
  servingSize?: Maybe<Scalars["Int"]>;
};

/** Recipe recommendation result */
export type RecipeRecommendationResult = {
  __typename?: "RecipeRecommendationResult";
  /** Recipe recommendations */
  recipeRecommendations: Array<RecipeRecommendation>;
  /** Bonus recipes */
  bonusRecipes: Array<RecipeRecommendation>;
};

/** Query options for search request */
export type RecipeSearchParams = {
  /** Query text, used for searching by title and ingredients */
  searchText?: Maybe<Scalars["String"]>;
  /** Pagination: how many recipes to skip */
  start?: Maybe<Scalars["Int"]>;
  /** Pagination: size of a page */
  size?: Maybe<Scalars["PageSize"]>;
  /** How to sort */
  sortBy?: Maybe<RecipeSearchSortOption>;
  /** Filters */
  filters?: Maybe<Array<RecipeSearchQueryFilter>>;
  /** Recipes that should always come first on the first page */
  priorityRecipeIds?: Maybe<Array<Scalars["Int"]>>;
  /** Favourite recipe ids. Used to identify "favorieten" filter */
  favoriteRecipeIds?: Maybe<Array<Scalars["Int"]>>;
  /** Use it if you want to search through only specific recipe ids */
  recipeIds?: Maybe<Array<Scalars["Int"]>>;
  /** The recipes that contain these ingredients will appear first in the search results when "sortBy=MOST_RELEVANT" */
  ingredients?: Maybe<Array<Scalars["String"]>>;
  /** Flag to include or exclude aggregations */
  includeAggregations?: Maybe<Scalars["Boolean"]>;
};

/** Filter options for recipe search query */
export type RecipeSearchQueryFilter = {
  /** Group key where the filters belong to */
  group: Scalars["String"];
  /** Filter keys of the group */
  values: Array<Scalars["String"]>;
};

/** Recipe search data */
export type RecipeSearchResult = {
  __typename?: "RecipeSearchResult";
  /** Pagination info */
  page: PageInfo;
  /** Filters that can be applied */
  filters?: Maybe<Array<RecipeSearchResultFilterGroup>>;
  /** Recipes */
  result: Array<RecipeSummary>;
  /** If searchText has a typo, it will contain a proper one */
  correctedSearchTerm?: Maybe<Scalars["String"]>;
};

/** Recipe search data filter */
export type RecipeSearchResultFilter = {
  __typename?: "RecipeSearchResultFilter";
  /** Filter name */
  name: Scalars["String"];
  /** Filter text */
  label?: Maybe<Scalars["String"]>;
  /** Filter group name */
  group: Scalars["String"];
  /** How many recipes there are for that filter */
  count: Scalars["Int"];
  /** Is it selected */
  selected: Scalars["Boolean"];
};

/** Recipe search data filter group */
export type RecipeSearchResultFilterGroup = {
  __typename?: "RecipeSearchResultFilterGroup";
  /** Filter group text */
  label: Scalars["String"];
  /** Filter group name */
  name: Scalars["String"];
  /** Filters of that group */
  filters: Array<RecipeSearchResultFilter>;
};

/** Sorting options for recipe search query */
export enum RecipeSearchSortOption {
  /** Sorted by relevancy */
  MostRelevant = "MOST_RELEVANT",
  /** Sorted by newest */
  Newest = "NEWEST",
  /** Sorted by most popular */
  Popular = "POPULAR",
  /** Sorted by most rated */
  Ratings = "RATINGS",
  /** Sorted by preparation time */
  TotalTime = "TOTAL_TIME",
  /** Sorted by trending */
  Trending = "TRENDING",
}

/** Set member's rating for recipe mutation result type */
export type RecipeSetMemberRatingResult = MutationResult & {
  __typename?: "RecipeSetMemberRatingResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Result of the rating which user gave */
  result: UpdatedRecipeRating;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Recipe ingredient and quantity unit comes in singular and plural names */
export type RecipeShoppableIngredientName = {
  /** Singular naming text */
  singular: Scalars["String"];
  /** Plural naming text */
  plural?: Maybe<Scalars["String"]>;
};

/** Recipe product suggestion */
export type RecipeShoppableProductSuggestion = {
  __typename?: "RecipeShoppableProductSuggestion";
  /** selected product id */
  id: Scalars["Int"];
  /** selected product quanity */
  quantity: Scalars["Float"];
  /** the instance that did the product proposement */
  proposer: RecipeShoppableProductSuggestionProposer;
  /** whole product object */
  product?: Maybe<Product>;
};

/** Product suggestion proposer */
export enum RecipeShoppableProductSuggestionProposer {
  /** Albert Heijn */
  A = "A",
  /** North Fork */
  N = "N",
  /** Product Search */
  ProductSearch = "PRODUCT_SEARCH",
  /** Semantic Model */
  SemanticModel = "SEMANTIC_MODEL",
  /** Sponsored Product */
  SponsoredProduct = "SPONSORED_PRODUCT",
  /** Bonus recipe */
  BonusRecipe = "BONUS_RECIPE",
  /** Search override */
  SearchOverride = "SEARCH_OVERRIDE",
  /** Member override */
  MemberOverride = "MEMBER_OVERRIDE",
}

/** Input type for the mutations that saves user selections of the ingredients to products mappings */
export type RecipeShoppableSaveSelectionParams = {
  /** Recipe id */
  recipeId: Scalars["Int"];
  /** Number of persons */
  servingNumber: Scalars["Int"];
  /** product selections the users made */
  selections: Array<RecipeShoppableSelection>;
};

/** Result type for the mutations that saves user selections of the ingredients to products mappings */
export type RecipeShoppableSaveSelectionResult = MutationResult & {
  __typename?: "RecipeShoppableSaveSelectionResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Result of save member-product-selections, should always return true */
  result: Scalars["Boolean"];
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Single selection of the ingredient to product mappings */
export type RecipeShoppableSelection = {
  /** the ingredient for which a product got selected */
  ingredient: RecipeShoppableSelectionIngredient;
  /** the selected product */
  product: RecipeShoppableSelectionProduct;
  /** action the user took */
  action: RecipeShoppableSelectionAction;
};

/** Selection type enum. Specifies whether ingredient to product mapping was added, changed or removed */
export enum RecipeShoppableSelectionAction {
  /** ADD */
  Add = "ADD",
  /** CHANGE */
  Change = "CHANGE",
  /** REMOVE */
  Remove = "REMOVE",
}

/** Ingredient type for mappings selection */
export type RecipeShoppableSelectionIngredient = {
  /** ingredient id */
  id?: Maybe<Scalars["Int"]>;
  /** ingredient quantity */
  quantity?: Maybe<Scalars["Float"]>;
  /** ingredient name */
  name: RecipeShoppableIngredientName;
  /** quantity unit */
  quantityUnit?: Maybe<RecipeShoppableIngredientName>;
};

/** Selection product type for mappings */
export type RecipeShoppableSelectionProduct = {
  /** selected product id */
  id: Scalars["Int"];
  /** selected product quantity */
  quantity?: Maybe<Scalars["Float"]>;
  /** the instance that did the product proposal */
  proposer: RecipeShoppableProductSuggestionProposer;
};

/** Recipe shopped recipe */
export type RecipeShoppedRecipe = {
  __typename?: "RecipeShoppedRecipe";
  /** recipe Summary */
  recipe: RecipeSummary;
  /** Last shopped at */
  lastShoppedAt: Scalars["DateTime"];
};

/** Recipe source */
export type RecipeSource = {
  __typename?: "RecipeSource";
  /** Recipe url */
  url?: Maybe<Scalars["String"]>;
  /** Recipe host name */
  hostName?: Maybe<Scalars["String"]>;
  /** Recipe type */
  type?: Maybe<RecipeSourceType>;
};

/** Recipe source input */
export type RecipeSourceInput = {
  /** Source url (for scrapped recipes) */
  url?: Maybe<Scalars["String"]>;
  /** Source host name (for scrapped recipes) */
  hostName?: Maybe<Scalars["String"]>;
};

/** Recipe source type enum */
export enum RecipeSourceType {
  /** Member created recipe */
  MemberRecipe = "MEMBER_RECIPE",
  /** Allerhande recipe */
  AllerhandeRecipe = "ALLERHANDE_RECIPE",
}

/** Defines when recipe story will be visible/active */
export type RecipeStoryActivePeriod = {
  __typename?: "RecipeStoryActivePeriod";
  /** First day when the story is active */
  from: Scalars["String"];
  /** Last day when the story is active */
  to: Scalars["String"];
};

/** Recipe story a/b testing campaign */
export type RecipeStoryCampaign = {
  __typename?: "RecipeStoryCampaign";
  /** Indicates if story should be displayed by default regardless of A/B testing */
  controlVariant?: Maybe<Scalars["Boolean"]>;
  /** A/B testing campaign id */
  campaignId: Scalars["Int"];
  /** A/B testing variant id */
  variantId: Scalars["Int"];
};

/** Recipe Story */
export type RecipeStoryCollection = {
  __typename?: "RecipeStoryCollection";
  /** story Id */
  id: Scalars["Int"];
  /** story title */
  title: Scalars["String"];
  /** story theme (e.g.: CHRISTMAS) */
  theme: RecipeStoryCollectionTheme;
  /** story type: defines what kind of story this is */
  type: RecipeStoryCollectionType;
  /** contains A/B testing campaign data */
  campaign?: Maybe<RecipeStoryCampaign>;
  /** Defines story's start and end dates */
  active: RecipeStoryActivePeriod;
  /** Optional story cover image */
  coverImage?: Maybe<ImageSet>;
  /**
   * Stories
   * @deprecated @sunset_date(2024-10-01) @Use storyItems field instead
   * . .
   */
  stories: Array<RecipeStoryType>;
  /** Story Items */
  storyItems: Array<RecipeStoryItemBase>;
};

/** Recipe story theme enum */
export enum RecipeStoryCollectionTheme {
  /** Default theme (i.e.: no theme) */
  Default = "DEFAULT",
  /** Christmas theme */
  Christmas = "CHRISTMAS",
  /** Prijsfavorieten theme */
  Prijsfavorieten = "PRIJSFAVORIETEN",
}

/** Enum thats contains all type of recipeStories */
export enum RecipeStoryCollectionType {
  /** Bonus */
  Bonus = "BONUS",
  /** Product Bundle */
  Products = "PRODUCTS",
  /** Recipe */
  Recipe = "RECIPE",
  /** Flex Page */
  FlexPage = "FLEX_PAGE",
}

/** Recipe Story Flex Page */
export type RecipeStoryFlexPage = {
  __typename?: "RecipeStoryFlexPage";
  /** id */
  id: Scalars["Int"];
  /** flex page Id */
  flexPageId: Scalars["String"];
  /** title */
  title: Scalars["String"];
  /** description */
  description?: Maybe<Scalars["String"]>;
  /** hero image */
  heroImage?: Maybe<ImageSet>;
  /** video id */
  videoId?: Maybe<Scalars["Int"]>;
  /** recipe story video */
  video?: Maybe<RecipeVideo>;
};

/** Recipe Story flex page story item type */
export type RecipeStoryFlexPageStoryItem = RecipeStoryItemBase & {
  __typename?: "RecipeStoryFlexPageStoryItem";
  /** Type */
  type: RecipeStoryItemType;
  /** Flex page story item data */
  data: RecipeStoryFlexPage;
};

/** Recipe Story Item Base Interface */
export type RecipeStoryItemBase = {
  /** Type */
  type: RecipeStoryItemType;
};

/** Enum that contains all types of recipeStoryItems */
export enum RecipeStoryItemType {
  /** Product Bundle */
  Products = "PRODUCTS",
  /** Recipe */
  Recipe = "RECIPE",
  /** Flex Page */
  FlexPage = "FLEX_PAGE",
}

/** Recipe Story productBundle */
export type RecipeStoryProductBundle = {
  __typename?: "RecipeStoryProductBundle";
  /** id */
  id: Scalars["Int"];
  /** title */
  title: Scalars["String"];
  /** sponsored */
  sponsored: Scalars["Boolean"];
  /** products inside the product bundle */
  products: Array<RecipeStoryProductBundleItem>;
  /** hero image */
  heroImage?: Maybe<ImageSet>;
  /** video id */
  videoId?: Maybe<Scalars["Int"]>;
  /** recipe story video */
  video?: Maybe<RecipeVideo>;
};

/** Recipe Story productBundle Items */
export type RecipeStoryProductBundleItem = {
  __typename?: "RecipeStoryProductBundleItem";
  /** productId */
  id: Scalars["Int"];
  /** optional */
  optional: Scalars["Boolean"];
  /** whole product object */
  product?: Maybe<Product>;
};

/** Recipe Story productBundle story item type */
export type RecipeStoryProductBundleStoryItem = RecipeStoryItemBase & {
  __typename?: "RecipeStoryProductBundleStoryItem";
  /** Type */
  type: RecipeStoryItemType;
  /** Product bundle story item data */
  data: RecipeStoryProductBundle;
};

/** Recipe Story Recipe */
export type RecipeStoryRecipe = {
  __typename?: "RecipeStoryRecipe";
  /** id */
  id: Scalars["Int"];
  /** recipe Summary */
  recipe?: Maybe<RecipeSummary>;
  /** recipe Id */
  recipeId: Scalars["Int"];
  /** recipe sponsored */
  sponsored: Scalars["Boolean"];
  /** recipe story video */
  video?: Maybe<RecipeVideo>;
  /** recipe story video id */
  videoId?: Maybe<Scalars["Int"]>;
};

/** Recipe Story recipe story item type */
export type RecipeStoryRecipeStoryItem = RecipeStoryItemBase & {
  __typename?: "RecipeStoryRecipeStoryItem";
  /** Type */
  type: RecipeStoryItemType;
  /** Recipe story item data */
  data: RecipeStoryRecipe;
};

/** Union for types of recipe stories: product bundle story, recipe story and flex page story */
export type RecipeStoryType =
  | RecipeStoryProductBundle
  | RecipeStoryRecipe
  | RecipeStoryFlexPage;

/**
 * We have two types of entities in recipe domain: Recipe and RecipeSummary
 * RecipeSummary has less data compare to Recipe and they have different data sources:
 * RecipeSummary comes from Elastic
 * Recipe comes from PostgreSQL DB
 */
export type RecipeSummary = {
  __typename?: "RecipeSummary";
  /** Recipe ID */
  id: Scalars["Int"];
  /**
   * Recipe source
   * @deprecated @sunset_date(2024-06-01) use author
   * . author.
   */
  source?: Maybe<RecipeSource>;
  /** Recipe recipe */
  title: Scalars["String"];
  /** This title is used as URL suffix making better URLs -> increasing SEO value */
  slug: Scalars["String"];
  /**
   * This title can be used in Allerhande magaznie issue.
   * Placing this in page metadata helps to find this recipe by this title as well.
   */
  alternateTitle?: Maybe<Scalars["String"]>;
  /** Defines diet (e.g.: vegan, vegeterian, without meat, without gluten, etc.) */
  diet: Array<Maybe<Scalars["String"]>>;
  /** Defines meal type (e.g.: main dish, appetizer, etc.) */
  courses: Array<Maybe<Scalars["String"]>>;
  /** Date string when the rescipe was published */
  publishedAt: Scalars["String"];
  /** Date string when the recipe was modified */
  modifiedAt: Scalars["String"];
  /** Recipe images */
  time: RecipeTime;
  /** Recipe rating */
  rating: RecipeRating;
  /** Recipe images by rendition name */
  images: Array<RecipeImage>;
  /**
   * Recipe image renditions
   * @deprecated @sunset_date(2022-08-01) checked 2023-05-08 - used in appie-ios@8.15.1 appie-be-ios@8.15.1 appie-android@8.20.3 - Please use images instead. It's a unified images representation format for all recipe related entities: recipe, recipe summary, member recipe
   * . images.
   */
  imageRenditions?: Maybe<RecipeImageRenditions>;
  /** Recipe serving information */
  serving: RecipeSummaryServing;
  /** Recipe nutrition information */
  nutrition?: Maybe<RecipeNutritionInfo>;
  /** Recipe nutri-score */
  nutriScore?: Maybe<RecipeNutriScore>;
  /** Recipe author */
  author?: Maybe<RecipeAuthor>;
  /** Recipe flags */
  flags: Array<RecipeFlag>;
  /** Recipe tags */
  tags: Array<RecipeTag>;
};

/**
 * We have two types of entities in recipe domain: Recipe and RecipeSummary
 * RecipeSummary has less data compare to Recipe and they have different data sources:
 * RecipeSummary comes from Elastic
 * Recipe comes from PostgreSQL DB
 */
export type RecipeSummaryImagesArgs = {
  renditions?: Maybe<Array<RenditionKey>>;
};

/** Recipe serving information */
export type RecipeSummaryServing = {
  __typename?: "RecipeSummaryServing";
  /** Number of servings the recipe is designed for */
  number: Scalars["Int"];
  /** Serving type, per person, or portion (one person can eat many) */
  type: Scalars["String"];
};

/** Company that provided the recipe */
export type RecipeSupplier = {
  __typename?: "RecipeSupplier";
  /** Company name */
  name: Scalars["String"];
  /** Company logo */
  logo: Array<RecipeImage>;
};

/** Company that provided the recipe */
export type RecipeSupplierLogoArgs = {
  renditions?: Maybe<Array<RenditionKey>>;
};

/** Recipe tag */
export type RecipeTag = {
  __typename?: "RecipeTag";
  /** Recipe tag key */
  key: Scalars["String"];
  /** Recipe tag value */
  value: Scalars["String"];
};

/** Recipe theme represents a document with type recipeGroup in hippo (also called themes by the content team) */
export type RecipeTheme = {
  __typename?: "RecipeTheme";
  /** Title */
  title: Scalars["String"];
  /** Hader recipe id */
  headerRecipeId?: Maybe<Scalars["Int"]>;
  /** Header recipe */
  headerRecipe?: Maybe<RecipeSummary>;
  /** Highlighted recipe id */
  highlightedRecipeId?: Maybe<Scalars["Int"]>;
  /** Highlighted recipe */
  highlightedRecipe?: Maybe<RecipeSummary>;
  /** Recipe theme search params */
  themeSearchParams: RecipeThemeSearchParams;
};

/** Query to search the recipes related to this theme */
export type RecipeThemeSearchParams = {
  __typename?: "RecipeThemeSearchParams";
  /** Query text, used for searching by title and ingredients */
  searchText?: Maybe<Scalars["String"]>;
  /** How to sort */
  sortBy: RecipeSearchSortOption;
  /** Filters */
  filters?: Maybe<Array<RecipeFilter>>;
  /** Recipes that should always come first on the first page */
  priorityRecipeIds?: Maybe<Array<Scalars["Int"]>>;
};

/** Defines time to spend for each stage of cooking */
export type RecipeTime = {
  __typename?: "RecipeTime";
  /** Preparation time in minutes */
  cook: Scalars["Int"];
  /** Baking time in minutes */
  oven?: Maybe<Scalars["Int"]>;
  /** Waiting time in minutes (usually in the freezer) */
  wait?: Maybe<Scalars["Int"]>;
};

/** Recipe tip */
export type RecipeTip = {
  __typename?: "RecipeTip";
  /** Recipe tip type */
  type: Scalars["String"];
  /** Recipe tip value */
  value: Scalars["String"];
};

/** Map Product to Suggestion result */
export type RecipeToProductSuggestionsResult = {
  __typename?: "RecipeToProductSuggestionsResult";
  /** Ingredient */
  ingredient: RecipeProductSuggestionsIngredient;
  /** is product optional/reusablr */
  optional: Scalars["Boolean"];
  /** Product selected as suggestion */
  productSuggestion?: Maybe<RecipeShoppableProductSuggestion>;
  /** AlternativeSections, alternative products are divided into sections, for example Biological, Product with less waste, Best priced, etc.. */
  alternativeSections: Array<RecipeAlternativeSection>;
  /** Index used by FE to identify the position of the element withing the array of objects. */
  index?: Maybe<Scalars["Int"]>;
};

/** Top recipes list created in Hippo CMS by content team */
export type RecipeTopRecipes = {
  __typename?: "RecipeTopRecipes";
  /** Top Id */
  id: Scalars["Int"];
  /** Top title */
  title: Scalars["String"];
  /** Top category */
  category: Scalars["String"];
  /** Top overview title */
  overviewTitle: Scalars["String"];
  /** Top images. Images of the first recipe in the top would be provided as such as per requirements */
  images: Array<Maybe<RecipeImage>>;
  /** Recipe summaries */
  recipeSummary: Array<Maybe<RecipeSummary>>;
  /** Text color */
  textColor: Scalars["String"];
  /** Use gradient flag */
  useGradient: Scalars["Boolean"];
};

/** Top recipes list created in Hippo CMS by content team */
export type RecipeTopRecipesImagesArgs = {
  renditions?: Maybe<Array<RenditionKey>>;
};

/** Recipe Video (from Blue Billy Wig) */
export type RecipeVideo = {
  __typename?: "RecipeVideo";
  /** Recipe video id */
  id: Scalars["Int"];
  /** Recipe video title */
  title: Scalars["String"];
  /** Recipe video link */
  href?: Maybe<Scalars["String"]>;
  /** This title is used as URL suffix making better URLs -> increasing SEO value */
  slug: Scalars["String"];
  /** Recipe video description */
  description: Scalars["String"];
  /** Recipe video description in HTML format */
  descriptionHtml: Scalars["String"];
  /** Recipe video category */
  category: Scalars["String"];
  /** Recipe video duration */
  duration: Scalars["String"];
  /** Recipe video publication date */
  publication: Scalars["String"];
  /** Recipe video images */
  images: RecipeVideoImages;
  /** Recipe video views count */
  views: Scalars["Int"];
  /** Recipe video streams */
  streams: RecipeVideoStreams;
};

/** Recipe Video Images */
export type RecipeVideoImages = {
  __typename?: "RecipeVideoImages";
  /** SD quality recipe video image */
  sd: Scalars["String"];
  /** Thumbnail (smaller) recipe video image */
  thumbnail: Scalars["String"];
};

/** Input for searching recipe videos */
export type RecipeVideoSearchParams = {
  /** Query text, used for searching by title */
  searchText?: Maybe<Scalars["String"]>;
  /** Pagination: how many videos to skip */
  start?: Maybe<Scalars["Int"]>;
  /** Pagination: size of a page */
  size?: Maybe<Scalars["PageSize"]>;
  /** How to sort */
  sortBy?: Maybe<RecipeVideoSearchSortOption>;
  /** Filters */
  filters?: Maybe<Array<RecipeSearchQueryFilter>>;
};

/** Result of searching recipe videos */
export type RecipeVideoSearchResult = {
  __typename?: "RecipeVideoSearchResult";
  /** Pagination info */
  page: PageInfo;
  /** Filters that can be applied */
  filters?: Maybe<Array<RecipeSearchResultFilterGroup>>;
  /** Videos */
  result: Array<RecipeVideo>;
  /** If searchText has a typo, it will contain a proper one */
  correctedSearchTerm?: Maybe<Scalars["String"]>;
};

/** Sorting options for recipe search query */
export enum RecipeVideoSearchSortOption {
  /** Sorted by alphabet */
  Alphabetic = "ALPHABETIC",
  /** Sorted by duration */
  Duration = "DURATION",
  /** Sorted by newest */
  Latest = "LATEST",
  /** Sorted by relevancy */
  MostRelevant = "MOST_RELEVANT",
  /** Sorted by views count */
  MostViewed = "MOST_VIEWED",
}

/** Recipe Video Streams */
export type RecipeVideoStreams = {
  __typename?: "RecipeVideoStreams";
  /** SD quality recipe video stream */
  sd?: Maybe<Scalars["String"]>;
  /** HD quality recipe video stream */
  hd?: Maybe<Scalars["String"]>;
};

/** Recipe preparation details */
export type RecipeVideos = {
  __typename?: "RecipeVideos";
  /** Recipe preparation video */
  preparation?: Maybe<RecipeVideo>;
  /** Recipe preparation tips videos */
  tips: Array<RecipeVideo>;
};

/** Weeks for which recommendations are available for user */
export type RecommendationWeek = {
  __typename?: "RecommendationWeek";
  /** Start date */
  startDate: Scalars["String"];
  /** End week */
  endDate: Scalars["String"];
  /** Flag indicating if it's a current week or not */
  activeWeek?: Maybe<Scalars["Boolean"]>;
};

/** Recipe image rendition keys enum. See graphQlKey = backendKey */
export enum RenditionKey {
  /** Graphql d256x256 key corresponds to backend '256x256_PNG' key */
  D256X256Png = "D256X256_PNG",
  /** Graphql d220x162 key corresponds to backend '210x118_JPG' key */
  D210X118 = "D210X118",
  /** Graphql d220x162 key corresponds to backend '220x162_JPG' key */
  D220X162 = "D220X162",
  /** Graphql d302x220 key corresponds to backend '302x220_JPG' key */
  D302X220 = "D302X220",
  /** Graphql d420x236 key corresponds to backend '420x236_JPG' key */
  D420X236 = "D420X236",
  /** Graphql d440x324 key corresponds to backend '440x324_JPG' key */
  D440X324 = "D440X324",
  /** Graphql d445x297 key corresponds to backend '445x297_JPG' key */
  D445X297 = "D445X297",
  /** Graphql d612x450 key corresponds to backend '612x450_JPG' key */
  D612X450 = "D612X450",
  /** Graphql d680x320 key corresponds to backend '680x320_JPG' key */
  D680X320 = "D680X320",
  /** Graphql d890x594 key corresponds to backend '890x594_JPG' key */
  D890X594 = "D890X594",
  /** Graphql d1024x576 key corresponds to backend '1024x576_JPG' key */
  D1024X576 = "D1024X576",
  /** Graphql d1024x748 key corresponds to backend '1024x748_JPG' key */
  D1024X748 = "D1024X748",
  /** Graphql d1224x900 key corresponds to backend '1224x900_JPG' key */
  D1224X900 = "D1224X900",
  /** Graphql d1600x560 key corresponds to backend '1600x560_JPG' key */
  D1600X560 = "D1600X560",
  /** Graphql d1920x1080 key corresponds to backend '1920x1080_JPG' key */
  D1920X1080 = "D1920X1080",
  /** Graphql d2048x1152 key corresponds to backend '2048x1152_JPG' key */
  D2048X1152 = "D2048X1152",
  /** Graphql d2048x1496 key corresponds to backend '2048x1496_JPG' key */
  D2048X1496 = "D2048X1496",
  /** Graphql xxs key corresponds to backend 'XXS' key */
  Xxs = "XXS",
  /** Graphql xs key corresponds to backend 'XS' key */
  Xs = "XS",
  /** Graphql s key corresponds to backend 'S' key */
  S = "S",
  /** Graphql m key corresponds to backend 'M' key */
  M = "M",
  /** Graphql l key corresponds to backend 'L' key */
  L = "L",
  /** Graphql xl key corresponds to backend 'XL' key */
  Xl = "XL",
}

/** Save member recipe result */
export type SaveMemberRecipeMutationResult = MutationResult & {
  __typename?: "SaveMemberRecipeMutationResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Saved recipe */
  result?: Maybe<MemberRecipe>;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Recipe scraped from external source */
export type ScrapedRecipe = {
  __typename?: "ScrapedRecipe";
  /** Recipe title */
  title?: Maybe<Scalars["String"]>;
  /** Recipe description */
  description?: Maybe<Scalars["String"]>;
  /** Recipe courses */
  courses?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Recipe preparation details */
  preparation?: Maybe<RecipePreparation>;
  /** Image url */
  imageUrl?: Maybe<Scalars["String"]>;
  /**
   * Recipe source
   * @deprecated @sunset_date(2024-06-01) use author
   * . author.
   */
  source?: Maybe<RecipeSource>;
  /** Recipe author */
  author?: Maybe<RecipeAuthor>;
};

/** GraphQL equivalent for Noun */
export type SingularPluralName = {
  __typename?: "SingularPluralName";
  /** Singular name */
  singular: Scalars["String"];
  /** Plural name */
  plural?: Maybe<Scalars["String"]>;
};

/** Defines recipe rating after update */
export type UpdatedRecipeRating = {
  __typename?: "UpdatedRecipeRating";
  /** New number of counts */
  count: Scalars["Int"];
  /** New average rating */
  average: Scalars["Float"];
};

/** Arguments for checkout recommendations endpoint for basketitems. These are the items that are currently in your the basket. */
export type BasketItemRecommendationsInput = {
  /** Product id of the favorite list item */
  productId: Scalars["Int"];
  /** Quantity of the product. Defaults to 1. */
  quantity: Scalars["Int"];
};

/**
 * Recommendations for a bonus offer a member is missing out on in their order.
 * The recommendations are in the form of enriched order lines.
 */
export type MissingBonusOrderLine = {
  __typename?: "MissingBonusOrderLine";
  /** The product in the basket that triggers the missing bonus recommendation. */
  product: Product;
  /** The quantity of the missing bonus product. */
  productQuantity: Scalars["Int"];
  /** The position of the missing bonus order line. */
  position: Scalars["Int"];
  /** Discount bonus segment id. */
  segmentId?: Maybe<Scalars["Int"]>;
  /** The title of the bonus segment the missing bonus product is related to. */
  title?: Maybe<Scalars["String"]>;
  /** More information about the missing bonus recommendation. */
  description?: Maybe<Scalars["String"]>;
  /** The amount of products still needed to reach the bonus discount. */
  offerQuantity?: Maybe<Scalars["Int"]>;
};

/** Settlement */
export type Settlement = {
  __typename?: "Settlement";
  /** Settlement id */
  id: Scalars["Int"];
  /** Settlement type */
  type: Scalars["String"];
  /** Optional order linked to the settlement */
  order?: Maybe<Order>;
  /** Optional product linked to the settlement */
  product?: Maybe<Product>;
  /** Quantity of products claimed */
  quantity?: Maybe<Scalars["Int"]>;
  /** Comment that was entered by used on creation of settlement */
  comment?: Maybe<Scalars["String"]>;
  /** Total amount of this specific settlement */
  amount: Money;
  /** The refund method for this settlement, it describes if it will be settled by invoice, deliverer or bank */
  refundMethod?: Maybe<SettlementRefundMethod>;
  /** List of image ids submitted by the user */
  imageIds: Array<Scalars["Int"]>;
  /** Images uploaded by the user which belongs to a settlement */
  images?: Maybe<Array<SettlementImage>>;
  /** If the settlement can be cancelled by the user */
  cancellable: Scalars["Boolean"];
  /** Fraction for compensation e.g. 0.25, 0.50, 0.75 or 1 */
  settlementFraction?: Maybe<Scalars["Float"]>;
  /** Label for Deposit type */
  depositLabel?: Maybe<Scalars["String"]>;
};

/** Settlement image */
export type SettlementImage = {
  __typename?: "SettlementImage";
  /** Generated presigned URL (valid for 15 seconds) */
  url?: Maybe<Scalars["String"]>;
  /** ID of the image */
  imageId?: Maybe<Scalars["Int"]>;
};

/** SettlementV2 image */
export type SettlementImageV2 = {
  __typename?: "SettlementImageV2";
  /** ID of the image */
  imageId: Scalars["String"];
  /** Generated presigned URL (valid for 15 seconds) */
  url: Scalars["String"];
};

/** Settlement refund method */
export enum SettlementRefundMethod {
  /** INVOICE */
  Invoice = "INVOICE",
  /** BANK */
  Bank = "BANK",
  /** DELIVERER */
  Deliverer = "DELIVERER",
  /** NO_REFUND */
  NoRefund = "NO_REFUND",
  /** EVALUE */
  Evalue = "EVALUE",
}

/** Settlement feedback type */
export enum SettlementType {
  Missing = "MISSING",
  WrongDelivery = "WRONG_DELIVERY",
  Frozen = "FROZEN",
  Damaged = "DAMAGED",
  Spoiled = "SPOILED",
  ActionCode = "ACTION_CODE",
  Return = "RETURN",
  PastExpiryMargin = "PAST_EXPIRY_MARGIN",
  Defrosted = "DEFROSTED",
  MissingLoadCarrier = "MISSING_LOAD_CARRIER",
  PackagingDeposit = "PACKAGING_DEPOSIT",
  CalculationError = "CALCULATION_ERROR",
  DeliveryTooLate = "DELIVERY_TOO_LATE",
  DiscountNotApplied = "DISCOUNT_NOT_APPLIED",
  PersonalDiscountNotApplied = "PERSONAL_DISCOUNT_NOT_APPLIED",
  OnlinePriceDiffers = "ONLINE_PRICE_DIFFERS",
  DamageCleaningCosts = "DAMAGE_CLEANING_COSTS",
  CancelledByCustomerSupport = "CANCELLED_BY_CUSTOMER_SUPPORT",
  CancelledByCustomer = "CANCELLED_BY_CUSTOMER",
  PickupOrderCosts = "PICKUP_ORDER_COSTS",
  GeneralCompensation = "GENERAL_COMPENSATION",
  NotAtHome = "NOT_AT_HOME",
  GeneralCorrection = "GENERAL_CORRECTION",
  DoublePayment = "DOUBLE_PAYMENT",
  CorrectionPartnershop = "CORRECTION_PARTNERSHOP",
  DepositsExceedOrderValue = "DEPOSITS_EXCEED_ORDER_VALUE",
  NotPickedUp = "NOT_PICKED_UP",
  SubscriptionRestitution = "SUBSCRIPTION_RESTITUTION",
  Mouldy = "MOULDY",
  Leaky = "LEAKY",
  Expired = "EXPIRED",
  DeliveryTooEarly = "DELIVERY_TOO_EARLY",
  PackingSlipPriceDiffers = "PACKING_SLIP_PRICE_DIFFERS",
  PartiallyNotDelivered = "PARTIALLY_NOT_DELIVERED",
  Other = "OTHER",
  NoGelPacks = "NO_GEL_PACKS",
  CoolBoxOpen = "COOL_BOX_OPEN",
}

/** Settlement V2 */
export type SettlementV2 = {
  __typename?: "SettlementV2";
  /** Settlement id */
  id: Scalars["String"];
  /** Settlement type */
  type: Scalars["String"];
  /** Optional order linked to the settlement */
  order?: Maybe<Order>;
  /** Optional product linked to the settlement */
  product?: Maybe<Product>;
  /** Quantity of products claimed */
  quantity?: Maybe<Scalars["Int"]>;
  /** Comment that was entered by used on creation of settlement */
  comment?: Maybe<Scalars["String"]>;
  /** Total amount of this specific settlement */
  amount: Money;
  /** List of image ids submitted by the user */
  imageIds: Array<Scalars["Int"]>;
  /**
   * Images uploaded by the user which belongs to a settlement
   * @deprecated @sunset_date(2025-02-12) Images have been migrated to the new feedback database schema.
   * . .
   */
  images?: Maybe<Array<SettlementImage>>;
  /** ImagesV2 uploaded by the user which belongs to a settlement */
  imagesV2?: Maybe<Array<SettlementImageV2>>;
  /** If the settlement can be cancelled by the user */
  cancellable: Scalars["Boolean"];
  /** Fraction for compensation e.g. 0.25, 0.50, 0.75 or 1 */
  settlementFraction?: Maybe<Scalars["Float"]>;
  /** Label for Deposit type */
  feedbackLabel?: Maybe<Scalars["String"]>;
  /** Settlement title */
  title: Scalars["String"];
  /** subtitle */
  subtitle: Scalars["String"];
};

/** List of settlements containing settlement's and a message + a conclusion for all settlements */
export type SettlementsTotal = {
  __typename?: "SettlementsTotal";
  /** List of all settlements */
  settlements: Array<Settlement>;
  /** Accumulated amount of all settlements */
  totalAmount: Money;
};

/** Error reason for Sharing link validation and stamp transfer failiure. */
export enum StampShareErrorReason {
  CannotSelfShare = "CANNOT_SELF_SHARE",
  LinkConsumed = "LINK_CONSUMED",
  LinkExpired = "LINK_EXPIRED",
  LinkNotFound = "LINK_NOT_FOUND",
  NotEnoughStamps = "NOT_ENOUGH_STAMPS",
  SharingNotAllowed = "SHARING_NOT_ALLOWED",
  Unknown = "UNKNOWN",
}

/** A gifting or requesting document. */
export type StampShareable = {
  __typename?: "StampShareable";
  /** The id of the gifting/requesting document */
  shareableId: Scalars["String"];
  /** The programId of the gifting/requesting document */
  programId: Scalars["Int"];
  /** The expiration date and time of the gifting/requesting document */
  expiresAt: Scalars["String"];
  /** The links of the gifting/requesting document */
  links: StampShareableLinks;
};

/** Links of a gifting or requesting document. */
export type StampShareableLinks = {
  __typename?: "StampShareableLinks";
  /** Shareable link */
  href: Scalars["String"];
  /** Shareable link as a deeplink */
  deeplink: Scalars["String"];
};

/** Mutation result of creating or delete a gift link. */
export type StampShareableMutationResult = MutationResult & {
  __typename?: "StampShareableMutationResult";
  /** Status of the mutation [failed | completely | partially] */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Result of getting gift or request documents */
  result?: Maybe<StampShareable>;
};

/** Validation result of a ShareableLink */
export type StampShareableValidationResult = {
  __typename?: "StampShareableValidationResult";
  /** The id of the gifting/requesting document */
  shareableId: Scalars["String"];
  /** Is the shareableId valid */
  valid: Scalars["Boolean"];
  /** Reason why the shareableId is invalid [expired|consumed|not found] */
  invalidReason?: Maybe<StampShareErrorReason>;
};

/** Chage of the stamp balance */
export type StampTransferBalanceChange = {
  __typename?: "StampTransferBalanceChange";
  /** Members old balance */
  old: Scalars["Int"];
  /** Members new balance */
  new: Scalars["Int"];
  /** How changes the balance */
  change: Scalars["Int"];
};

/** Mutation result ot transfering stamps. */
export type StampTransferMutationResult = MutationResult & {
  __typename?: "StampTransferMutationResult";
  /** Status of the mutation [failed | completely | partially] */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Reason of transferring stamps error */
  errorReason?: Maybe<StampShareErrorReason>;
  /** Result of transferring stamps */
  result?: Maybe<StampTransferResult>;
};

/** Result ot transfering stamps. */
export type StampTransferResult = {
  __typename?: "StampTransferResult";
  /** The id of the gifting/requesting document */
  shareableId: Scalars["String"];
  /** The programId of the gifting/requesting document */
  programId: Scalars["Int"];
  /** Chage of the stamp balance */
  balanceChange: StampTransferBalanceChange;
};

/** Store information for store details */
export type Stores = {
  __typename?: "Stores";
  /** Main store id */
  id: Scalars["Int"];
  /** Basic name */
  name: Scalars["String"];
  /** phone */
  phone?: Maybe<Scalars["String"]>;
  /** address */
  address?: Maybe<StoresAddress>;
  /** we have different types of stores */
  storeType: StoresType;
  /** position on the map */
  geoLocation?: Maybe<GeoLocation>;
  /** opening days per week starting from current week */
  openingDays?: Maybe<Array<Array<StoresOpeningDay>>>;
  /** the services the shop offers */
  services?: Maybe<Array<StoresService>>;
  /** distance to store when searching with geolocation */
  distance?: Maybe<Scalars["Float"]>;
};

/** Address of the store */
export type StoresAddress = {
  __typename?: "StoresAddress";
  /** street name */
  street: Scalars["String"];
  /** house number */
  houseNumber: Scalars["String"];
  /** house number extra */
  houseNumberExtra?: Maybe<Scalars["String"]>;
  /** zipcode */
  postalCode: Scalars["String"];
  /** city */
  city: Scalars["String"];
  /** iso3 country code? */
  countryCode: Scalars["String"];
};

/** Store count per place */
export type StoresCityCount = {
  __typename?: "StoresCityCount";
  /** Place containing the stores */
  city: Scalars["String"];
  /** Amount of stores in place */
  count: Scalars["Int"];
};

/** Filter options for stores */
export type StoresFilterInput = {
  /** Services store offers */
  services?: Maybe<Array<Scalars["ID"]>>;
  /** Time frames stores is open on */
  openingHours?: Maybe<Array<StoresOpeningHourType>>;
  /** Type of store to include */
  storeType?: Maybe<StoresType>;
  /** City store is in should start with */
  cityStartsWith?: Maybe<Scalars["String"]>;
  /** If provided will sort the result set by nearest store */
  location?: Maybe<GeoLocationInput>;
  /** Returns stores sorted by nearest to given postal code */
  postalCode?: Maybe<Scalars["String"]>;
};

/** Suggestion for a possible location */
export type StoresGeoLocationSuggestion = {
  __typename?: "StoresGeoLocationSuggestion";
  /** Suggestion text */
  description: Scalars["String"];
  /** The matched substring of the result */
  match?: Maybe<StoresGeoLocationSuggestionMatch>;
  /** Geolocation of the suggestion */
  geoLocation?: Maybe<GeoLocation>;
};

/** Matched substring of the result */
export type StoresGeoLocationSuggestionMatch = {
  __typename?: "StoresGeoLocationSuggestionMatch";
  /** Start position of the match within the result */
  position: Scalars["Int"];
  /** Length of the matched string */
  length: Scalars["Int"];
};

/** opening day */
export type StoresOpeningDay = {
  __typename?: "StoresOpeningDay";
  /** name of day, example 'maandag' */
  dayName: Scalars["String"];
  /** date */
  date: Scalars["String"];
  /** openings hours */
  openingHour?: Maybe<StoresOpeningHour>;
  /** type */
  type: StoresOpeningDayType;
};

/** The type of opening day */
export enum StoresOpeningDayType {
  /** current */
  Current = "CURRENT",
  /** future */
  Future = "FUTURE",
  /** past */
  Past = "PAST",
}

/** opening hour */
export type StoresOpeningHour = {
  __typename?: "StoresOpeningHour";
  /** openings time store from */
  openFrom?: Maybe<Scalars["String"]>;
  /** openings time store till */
  openUntil?: Maybe<Scalars["String"]>;
};

/** For each kind of opening hour, the amount of times it occurs in the search */
export type StoresOpeningHourCount = {
  __typename?: "StoresOpeningHourCount";
  /** Type of store opening day */
  type: StoresOpeningHourType;
  /** Amount of stores open in part of day */
  count: Scalars["Int"];
};

/** Time frames stores can be open */
export enum StoresOpeningHourType {
  /** Store is open in evening */
  Evening = "EVENING",
  /** Store is open now */
  Now = "NOW",
  /** Store is open on sundays */
  Sunday = "SUNDAY",
}

/** Aggregated results after searching for stores */
export type StoresResultAggregationType = {
  __typename?: "StoresResultAggregationType";
  /** All services offered by result set and their aggregated amounts */
  services: Array<StoresServiceCount>;
  /** All opening days offered by result set and their aggregated amounts */
  openingHours: Array<StoresOpeningHourCount>;
  /** All store types offered by result set and their aggregated amounts */
  storeTypes: Array<StoresTypeCount>;
};

/** Result of searching for stores */
export type StoresResultType = {
  __typename?: "StoresResultType";
  /** Stores matching filter */
  result?: Maybe<Array<Stores>>;
  /** Pagination information */
  pageInfo: PageInfo;
  /** Aggregations on store filter */
  aggregation: StoresResultAggregationType;
};

/** Services stores can provide */
export type StoresService = {
  __typename?: "StoresService";
  /** code */
  code: Scalars["ID"];
  /** long description */
  description: Scalars["String"];
  /** short description */
  shortDescription: Scalars["String"];
};

/** Services and amount of stores that provide them */
export type StoresServiceCount = {
  __typename?: "StoresServiceCount";
  /** Service provided by store */
  service: StoresService;
  /** Amount of stores providing the service */
  count: Scalars["Int"];
};

/** The type of store */
export enum StoresType {
  /** normal shop */
  Regular = "REGULAR",
  /** ah togo */
  Togo = "TOGO",
  /** unknown */
  Unknown = "UNKNOWN",
  /** big xl shop */
  Xl = "XL",
}

/** For each kind of store, the amount of times it occurs in the search */
export type StoresTypeCount = {
  __typename?: "StoresTypeCount";
  /** Type of store */
  type: StoresType;
  /** Amount of stores of this type */
  count: Scalars["Int"];
};

/** Payment Action types */
export type Action =
  | QrCodeAction
  | RedirectAction
  | PollAction
  | ChallengeAction;

/** Possible action return by polling payment status. Probably not used but for typing completion's sake */
export type ChallengeAction = {
  __typename?: "ChallengeAction";
  /** Transaction ID */
  transactionId: Scalars["String"];
  /** Authorization ID */
  authorizationId: Scalars["String"];
  /** Challenge Type */
  challengeType: ChallengeType;
  /** Data */
  data?: Maybe<Scalars["String"]>;
  /** SDK */
  sdk?: Maybe<ChallengeActionSdk>;
};

/** Challenge Action SDK */
export type ChallengeActionSdk = {
  __typename?: "ChallengeActionSdk";
  /** id */
  id: Scalars["String"];
  /** Minimum version of the SDK */
  minVersion: Scalars["String"];
};

/** Challenge Type */
export enum ChallengeType {
  /** Device */
  Device = "DEVICE",
  /** User */
  User = "USER",
}

export enum Channel {
  /** WEB */
  Web = "WEB",
  /** ANDROID */
  Android = "ANDROID",
  /** IOS */
  Ios = "IOS",
  /** APPLICATION */
  Application = "APPLICATION",
}

/** Generic key value input for subscriptionPaymentIDealStatusV2 queryParam */
export type KeyValueInput = {
  /** The key of the key value pair */
  key: Scalars["String"];
  /** The value of the key value pair */
  value: Scalars["String"];
};

/** Supported payment action types. QR_CODE for WEB(BEL) and REDIRECT for WEB(NLD)/ANDROID/IOS */
export enum PaymentActionType {
  /** QR_CODE Action for WEB(BEL) */
  QrCode = "QR_CODE",
  /** REDIRECT Action for WEB(NLD)/ANDROID/IOS/APPLICATION */
  Redirect = "REDIRECT",
  /** Poll */
  PollStatus = "POLL_STATUS",
  /** Challenge */
  Challenge = "CHALLENGE",
}

/** Poll payment status may return a suggested poll policy */
export type PollAction = {
  __typename?: "PollAction";
  /** Mutation ID of the payment status */
  mutationId: Scalars["String"];
  /** Suggested poll interval in ms */
  pollInterval: Scalars["Int"];
};

/** Whenever BE returns a QR Code string, QRCodeAction is used */
export type QrCodeAction = {
  __typename?: "QRCodeAction";
  /** QR code */
  qrCodeData: Scalars["String"];
  /** PSP data */
  pspData?: Maybe<Scalars["String"]>;
};

/** Whenever FE needs to be redirected then a RedirectAction is used. */
export type RedirectAction = {
  __typename?: "RedirectAction";
  /** Redirect URI */
  redirectUri: Scalars["String"];
};

/** Calculated Saving for either Instore or WithSubscriptions */
export type Savings = {
  __typename?: "Savings";
  /** Minimum amount of savings */
  min: Money;
  /** Maximum amount of savings */
  max: Money;
};

export type SavingsPeriod = {
  __typename?: "SavingsPeriod";
  /** The year of the premium savings period */
  year: Scalars["Int"];
  /** The starting month of the premium savings period */
  startMonth: Scalars["Int"];
  /** The ending month of the premium savings period */
  endMonth: Scalars["Int"];
};

export type SavingsPeriodInput = {
  /** The year of the premium savings period */
  year: Scalars["Int"];
  /** The starting month of the premium savings period */
  startMonth: Scalars["Int"];
  /** The ending month of the premium savings period */
  endMonth: Scalars["Int"];
};

/** The availability of a certain subscription. For example: a delivery bundle cannot be sold to a member with a non-deliverable zipcode */
export type SubscriptionAvailability = {
  __typename?: "SubscriptionAvailability";
  /** Whether or not the subscription is available */
  available: Scalars["Boolean"];
  /**
   * Specific delivery slots for fixedDeliverySlots. For example gridType '5a' means that we only deliver between 07:00-14:00 on the specific postalCode.
   * If gridType is not returned, it means that the all slots are available.
   */
  gridType?: Maybe<Scalars["String"]>;
};

/** Available subscription for purchase, including terms and pricing */
export type SubscriptionAvailable = {
  __typename?: "SubscriptionAvailable";
  /** Subscription identifier */
  id: Scalars["ID"];
  /** Defintioncode, i.e. BEZORG12) */
  code: Scalars["String"];
  /** The subscription code type, i.e. OMNI or BEZORG */
  type: Scalars["String"];
  /** Human readable description */
  description: Scalars["String"];
  /** Contract length of the subscription in months */
  duration: Scalars["Int"];
  /** Pricing per month and per full duration */
  price: SubscriptionPrice;
  /** Pricing per month and per full duration without discount */
  priceBeforeDiscount: SubscriptionPrice;
  /** Delivery days of the subscription */
  deliveryScheme: Scalars["String"];
  /** Optional discounts applied to available subscription */
  discounts?: Maybe<Array<SubscriptionDiscount>>;
  /** Whether the subscription is a trial subscription. No need for FE to have a list of trial subscriptions. */
  isTrialSubscription: Scalars["Boolean"];
  /** What the next subscription type will be */
  postTrialSubscription?: Maybe<SubscriptionPostTrial>;
  /** Whether promocode is applicable for the subscriptionAvailable so members can get discount on this subscription */
  isPromoCodeApplicable: Scalars["Boolean"];
};

/** The available delivery days per subscription code */
export type SubscriptionAvailableDeliveryDays = {
  __typename?: "SubscriptionAvailableDeliveryDays";
  /** The available delivery days per subscription code */
  availableDeliveryDays: Array<SubscriptionCodeDeliveryDays>;
};

/** A bundle containing a possible combination of subscriptions */
export type SubscriptionBundle = {
  __typename?: "SubscriptionBundle";
  /** The bundle ID */
  bundleId: Scalars["ID"];
  /** The available subscriptions in this subscription bundle */
  subscriptionsAvailable: Array<SubscriptionAvailable>;
  /**
   * Bundleprice per month and per full duration with discounts,
   * this is the sum of the subscriptionsAvailable forPrices
   */
  bundlePrice: SubscriptionPrice;
  /**
   * Bundleprice per month and per full duration without discount,
   * this is the sum of the subscriptionsAvailable fromPrices
   */
  bundlePriceBeforeDiscount: SubscriptionPrice;
  /**
   * Another bundle that may be an enhanced version of the current bundle. For example:
   * Current bundle: BEZORG1 subscription
   * Connected bundle: BEZORG1 + PREMIUM
   * Using this data users may toggle premium on/off
   */
  connectedBundle?: Maybe<SubscriptionBundle>;
};

/** Result after applying a promotion code to a subscriptionBundle */
export type SubscriptionBundlePromoCodeApplyResult = MutationResult & {
  __typename?: "SubscriptionBundlePromoCodeApplyResult";
  /** The subscriptionBundles with the code applied which includes the new bundle prices */
  result?: Maybe<Array<SubscriptionBundle>>;
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable. Show this on client-side to inform customers about what went wrong. */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Result of subscribing to a subscription bundle */
export type SubscriptionBundleSubscribeMutationResult = MutationResult & {
  __typename?: "SubscriptionBundleSubscribeMutationResult";
  /** Response of an ideal payment */
  result?: Maybe<SubscriptionPaymentIDeal>;
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Result after cancelling your subscription */
export type SubscriptionCancelMutationResult = MutationResult & {
  __typename?: "SubscriptionCancelMutationResult";
  /** SubscriptionPayment payload */
  result?: Maybe<SubscriptionCurrent>;
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/**
 * Result after cancelling you subscription. Directly cancelled returns null subscription and cancelled after end of period returns a subscription with
 * a certain end date
 */
export type SubscriptionCancelMutationResultTemp = MutationResult & {
  __typename?: "SubscriptionCancelMutationResultTemp";
  /** SubscriptionPayment payload */
  result?: Maybe<SubscriptionPlan>;
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Subscription cancellation specification */
export type SubscriptionCancellation = {
  __typename?: "SubscriptionCancellation";
  /** First possible cancellation date option, null if the option isn't possible */
  earliestDate?: Maybe<Scalars["Date"]>;
  /** Last possible cancellation date option, null if the option isn't possible */
  latestDate?: Maybe<Scalars["Date"]>;
  /** Shows the date the subscription will be cancelled on after a user choose to cancel it, null if not cancelled */
  date?: Maybe<Scalars["Date"]>;
  /** Whether the subscription can be cancelled now without having to wait until the end of the period */
  isImmediatelyCancellable?: Maybe<Scalars["Boolean"]>;
};

/** Comparison between current and new subscription */
export type SubscriptionChange = {
  __typename?: "SubscriptionChange";
  /** Current subscription */
  currentSubscription: SubscriptionAvailable;
  /** New subscription */
  newSubscription: SubscriptionAvailable;
  /** Residual amount when changing to new subscriptionplan. Will be substracted from the original price. */
  residualPrice: Money;
  /** Sell price with discounts and residual amount substracted. Customer needs to pay this amount when changing subscription. */
  finalPrice: Money;
};

/** The available delivery days for a specific subscription code */
export type SubscriptionCodeDeliveryDays = {
  __typename?: "SubscriptionCodeDeliveryDays";
  /** The subscription code for which the delivery days are available */
  subscriptionCode: Scalars["String"];
  /** The available delivery days for the subscription code */
  deliveryDays: Array<Maybe<WeekDay>>;
};

/** The current subscription of a certain type of a member, such as delivery bundle and premium. */
export type SubscriptionCurrent = {
  __typename?: "SubscriptionCurrent";
  /** Subscription id */
  id: Scalars["ID"];
  /** The id of the definition which is the 'template' for the subscription containing the subscription details such as duration and prices */
  definitionId: Scalars["Int"];
  /** Description based on the subscription definition, such as 'Bezorgbundel 12 maanden' */
  description: Scalars["String"];
  /** Subscription type such as OMNI, BEZORG or B2B */
  type: Scalars["String"];
  /** Subscription definition code such as BEZORG_12 */
  code: Scalars["String"];
  /** Statuscode of subscription */
  statusCode: Scalars["Int"];
  /** Delivery scheme of the subscription */
  deliveryScheme: Scalars["String"];
  /** Data regarding extension of the current subscription */
  extension?: Maybe<SubscriptionExtension>;
  /** Subscription duration in months */
  duration?: Maybe<Scalars["Int"]>;
  /** Start day of the subscription */
  startDate: Scalars["String"];
  /** Last day of the subscription, null if not active */
  endDate?: Maybe<Scalars["String"]>;
  /** Subscription cancellation options and a the cancellation date */
  cancellation: SubscriptionCancellation;
  /** Whether the subscription is activated and can be used */
  isActive: Scalars["Boolean"];
  /** Whether the subscription can be changed */
  isChangeable: Scalars["Boolean"];
  /** Whether the subscription can be canceled */
  isCancellable: Scalars["Boolean"];
  /** Whether the subscriptionCurrent is a trialSubscription */
  isTrialSubscription: Scalars["Boolean"];
  /** What the next subscription type will be */
  postTrialSubscription?: Maybe<SubscriptionPostTrial>;
  /** The price of the subscription without any optional discounts */
  originalPrice: Money;
  /** The price paid for the current subscription, originalPrice including discounts */
  sellPrice: Money;
  /** Whether promocode is applicable for the next subscription so members can get discounts on their extension */
  isPromoCodeApplicable: Scalars["Boolean"];
  /** Whether member is eligible for the SavingWarranty, is null when not applicable for subscription type */
  isEligibleForSavingWarranty?: Maybe<Scalars["Boolean"]>;
  /** Whether member can reactivate the subscription */
  isReactivateEnabled?: Maybe<Scalars["Boolean"]>;
};

/** Result after applying a promotion code to a current subscription */
export type SubscriptionCurrentPromoCodeApplyResult = MutationResult & {
  __typename?: "SubscriptionCurrentPromoCodeApplyResult";
  /** The subscriptionCurrent with the code applied which includes the new extension */
  result?: Maybe<SubscriptionCurrent>;
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable. Show this on client-side to inform customers about what went wrong. */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Result after changing your subscription */
export type SubscriptionDefinitionChangeMutationResult = MutationResult & {
  __typename?: "SubscriptionDefinitionChangeMutationResult";
  /** Subscription of the member AFTER change */
  result?: Maybe<SubscriptionCurrent>;
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Result after changing your subscription */
export type SubscriptionDefinitionChangeMutationResultTemp = MutationResult & {
  __typename?: "SubscriptionDefinitionChangeMutationResultTemp";
  /** Subscription of the member AFTER change */
  result?: Maybe<SubscriptionPlan>;
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Subscription discount information */
export type SubscriptionDiscount = {
  __typename?: "SubscriptionDiscount";
  /** Code name of the Member Incentive */
  code: Scalars["String"];
  /** Description of the discount */
  description: Scalars["String"];
  /** The discount amount */
  discount: Money;
  /** The used promoCode */
  promoCode?: Maybe<Scalars["String"]>;
};

/** Estimated premium savings of remaining subscription days based on the members current purchase history */
export type SubscriptionEstimatedPremiumSavings = {
  __typename?: "SubscriptionEstimatedPremiumSavings";
  /** Amount of continuous active days of your active premium subscription. Extensions included up until 27 months ago. */
  subscriptionActiveDays: Scalars["Int"];
  /** Estimated yearly saved amount = Average daily saved amount * 365. */
  estimatedYearlySavedAmount: Scalars["Float"];
  /** Estimated yearly saved stamps amount = Average daily saved stamps amount * 365. */
  estimatedYearlySavedStampsAmount: Scalars["Int"];
  /**
   * Estimated saved amount of the remaining days of your subscription. An attempt to convince members to NOT cancel subscriptions.
   * 365 - (active days % 365) * average saved amount
   */
  estimatedRemainingDaysSavedAmount: Scalars["Float"];
  /**
   * Estimated saved stamps amount of the remaining days of your subscription. An attempt to convince members to NOT cancel subscriptions.
   * 365 - (active days % 365) * average saved stamps amount
   */
  estimatedRemainingDaysSavedStampsAmount: Scalars["Int"];
  /**
   * Average daily saved based on current purchase history since the start of your subscription. If the startdate is longer than 27 months ago,
   * then the startdate used to calculate will be 27 months ago.
   */
  averageDailySavedAmount: Scalars["Float"];
  /**
   * Average daily stamps saved based on current purchase history since the start of your subscription. If the startdate is longer than
   * 27 months ago, then the startdate used to calculate will be 27 months ago.
   */
  averageDailySavedStampsAmount: Scalars["Float"];
};

/** Data regarding the extension of the subscription. Previously known as SubscriptionRenewal */
export type SubscriptionExtension = {
  __typename?: "SubscriptionExtension";
  /** Date when the subscription will be extended */
  date: Scalars["String"];
  /** Price of the extended subscription without any discounts */
  originalPrice: Money;
  /** Price of the extended subscription which includes discounts */
  sellPrice: Money;
  /** Discounts that are applied on the subscription extension */
  discounts?: Maybe<Array<SubscriptionDiscount>>;
};

/** The available fixed delivery slot for a specific subscription. Only available for BEZORG and B2B type. */
export type SubscriptionFixedDeliverySlot = {
  __typename?: "SubscriptionFixedDeliverySlot";
  /** Date of delivery slot */
  date: Scalars["String"];
  /** Begin time of range where delivery may be expected */
  from: Scalars["String"];
  /** End time of range where delivery may be expected */
  until: Scalars["String"];
  /** Whether the delivery slot is preferred or not */
  isPreferred: Scalars["Boolean"];
  /** Whether the moment is favourite or not */
  isFavourite: Scalars["Boolean"];
  /** Scoring of how good a slot is for AH. You want to stimulate members to choose the highest scoring slots */
  score?: Maybe<Scalars["Float"]>;
  /** Nudge labels */
  nudgeTypes: Array<NudgeType>;
  /** Delivery scheme type of the fixed delivery slot */
  subscriptionValidityType?: Maybe<Scalars["String"]>;
};

/** The current chosen fixed delivery slot of the member */
export type SubscriptionFixedDeliverySlotCurrent = {
  __typename?: "SubscriptionFixedDeliverySlotCurrent";
  /** Startdate of fixed delivery slot */
  startDate: Scalars["String"];
  /** Begin time of range where delivery may be expected */
  slotStartTime: Scalars["String"];
  /** End time of range where delivery may be expected */
  slotEndTime: Scalars["String"];
  /** Whether the fixed delivery slot is sustainable or not */
  isSustainableSlot: Scalars["Boolean"];
};

/** Description of next subscription */
export type SubscriptionNextSubscription = {
  __typename?: "SubscriptionNextSubscription";
  /** Subscription identifier */
  id: Scalars["ID"];
  /** Subscription type code */
  code: Scalars["String"];
  /** Human readable description */
  description: Scalars["String"];
  /** When the subscription will start */
  startDate: Scalars["String"];
  /** Amount customer will pay for the next subscription */
  price: Money;
};

/** The return type of a payment */
export type SubscriptionPayment = SubscriptionPaymentIDeal;

/** Result of starting of payment */
export type SubscriptionPaymentIDeal = {
  __typename?: "SubscriptionPaymentIDeal";
  /** Id of payment */
  id: Scalars["String"];
  /** Status of payment (will be deprecated in favor of paymentStatus) */
  status: SubscriptionPaymentStatus;
  /** Status of payment */
  paymentStatus: SubscriptionPaymentStatus;
  /** Url to continue payment (will be deprecated in favor of action) */
  url: Scalars["String"];
  /** Mutation ID to map the transaction to the payment */
  mutationId: Scalars["String"];
  /** Action to be taken by the client. Can be either QR_CODE or REDIRECT */
  action?: Maybe<Action>;
};

/** Available iDeal issuers */
export type SubscriptionPaymentIDealIssuer = {
  __typename?: "SubscriptionPaymentIDealIssuer";
  /** Reference ID of iDeal issuer */
  id: Scalars["Int"];
  /** Name of iDeal issuer */
  name: Scalars["String"];
  /** Logo brand image of iDeal issuer */
  brandUrl: Scalars["String"];
};

/** Supported subscription payment method types by bundle processor */
export enum SubscriptionPaymentMethod {
  /** IDEAL */
  Ideal = "IDEAL",
  /** BANCONTACT_MOBILE */
  BancontactMobile = "BANCONTACT_MOBILE",
  /** INVOICE */
  Invoice = "INVOICE",
  /** DCT */
  Dct = "DCT",
  /** GIFT_CARD */
  GiftCard = "GIFT_CARD",
  /** PURCHASE_STAMPS */
  PurchaseStamps = "PURCHASE_STAMPS",
  /** EVALUE */
  Evalue = "EVALUE",
}

/** Available payment option for the member */
export type SubscriptionPaymentOption = {
  __typename?: "SubscriptionPaymentOption";
  /** Payment option type. Can be IDEAL, BANCONTACT_MOBILE, INVOICE, or UNKNOWN */
  option: Scalars["String"];
  /** Status of payment option. Can be ACTIVE, DISABLED, or ENROLLMENT_DISABLED */
  status: Scalars["String"];
  /** Optional list of issuers for iDEAL payment option */
  issuers?: Maybe<Array<SubscriptionPaymentIDealIssuer>>;
};

/** Possible payment status after payment */
export enum SubscriptionPaymentStatus {
  /** Payment has been cancelled */
  Cancelled = "CANCELLED",
  /** Payment has been completed */
  Completed = "COMPLETED",
  /** Payment has expired */
  Expired = "EXPIRED",
  /** Payment has failed */
  Failure = "FAILURE",
  /** Payment is newly created */
  New = "NEW",
  /** Payment is open */
  Open = "OPEN",
}

/** A subscription. Identical to MemberSubscription. Use this instead. Note: Subscription is a reserved type in GraphQL for a real-time websocket connection, so we call this SubscriptionPlan instead. */
export type SubscriptionPlan = {
  __typename?: "SubscriptionPlan";
  /** Subscription identifier */
  id: Scalars["ID"];
  /** Subscription type such as OMNI, BEZORG or B2B, */
  type: Scalars["String"];
  /** Subscription definition code such as BEZORG_12 */
  code: Scalars["String"];
  /** Statuscode of subscription */
  statusCode: Scalars["Int"];
  /** Delivery scheme of the subscription */
  deliveryScheme: Scalars["String"];
  /** The monthly price of the subscription */
  price: Money;
  /** Next renewal, null if already canceled */
  renewal?: Maybe<SubscriptionRenewal>;
  /** Subscription duration in months */
  duration: Scalars["Int"];
  /** Start day of the subscription */
  startDate: Scalars["String"];
  /** Last day of the subscription, null if not active */
  endDate?: Maybe<Scalars["String"]>;
  /** Subscription cancellation options and a the cancellation date */
  cancellation: SubscriptionCancellation;
  /** Whether the subscription is activated and can be used */
  isActive: Scalars["Boolean"];
  /** Whether the subscription can be changed */
  isChangeable: Scalars["Boolean"];
  /** Whether the subscription can be canceled */
  isCancellable: Scalars["Boolean"];
  /** What the next subscription type will be */
  nextSubscription?: Maybe<SubscriptionNextSubscription>;
};

/** The payment status of a subscription. May contain response data regarding polling. */
export type SubscriptionPollPaymentStatus = {
  __typename?: "SubscriptionPollPaymentStatus";
  /** ID of the payment status */
  id: Scalars["String"];
  /** Mutation ID of the payment status */
  mutationId: Scalars["String"];
  /** The actual payment status, may contain NEW, IN_PROGRESS, SUCCESS, FAILED or CANCELLED */
  paymentStatus: PaymentStatus;
  /** The action that can be used to enhance UX. For example, increase of poll interval because BE 'knows' it will take longer to prevent firing too many calls from FE. */
  action?: Maybe<Action>;
};

/** Description of the subscription a member automatically gets after a trial subscription */
export type SubscriptionPostTrial = {
  __typename?: "SubscriptionPostTrial";
  /** Subscription identifier */
  id: Scalars["ID"];
  /** Subscription code such as BEZORG1, PREMIUM, B2B12 */
  code: Scalars["String"];
  /** Duration of the subscription after trial subscription */
  duration?: Maybe<Scalars["Int"]>;
  /** Human readable description of the subscription */
  description: Scalars["String"];
  /** When the subscription will start */
  startDate: Scalars["String"];
  /** The price of the automatically extended subscription after the trial */
  sellPrice: Money;
  /** Optional discounts applied to available subscription */
  discounts?: Maybe<Array<SubscriptionDiscount>>;
};

/** The amount saved due to the premium subscription */
export type SubscriptionPremiumSavings = {
  __typename?: "SubscriptionPremiumSavings";
  /**
   * Latest update of the savings. The data may be already present in the DB but the savings calculations job
   * still needs to run for the latest state.
   */
  lastUpdated: Scalars["String"];
  /** Start date of one's consecutive premium subscription. Format is YYYY-MM-DD. */
  subscriptionStartDate: Scalars["String"];
  /** Total amount saved on buying biological products. */
  bioDiscountAmount: Money;
  /** Total amount saved on buying Bonus Box promotions SINCE premium activation. Both premium Bonus Box and normal Bonus Box promotions. */
  bonusBoxDiscountAmount: Money;
  /** Amount saved by buying Premium specific Bonus Box promotions. */
  bonusBoxDiscountPremiumExclusiveAmount: Money;
  /**
   * The amount of extra Airmiles received by buying at Albert Heijn with Premium.
   * Premium doubles the amount of Airmiles a customer receives.
   */
  additionalAirmilesObtained: Scalars["Int"];
  /** The amount of extra Airmiles received but displayed in money. */
  additionalAirmilesObtainedInMoney: Money;
  /**
   * The amount of extra purchaseStamps (koopzegels) received.
   * Customers can collect purchaseStamps twice as fast with premium by buying more stamps.
   */
  additionalPurchaseStampsObtained: Scalars["Int"];
  /** The amount spent to purchase the additional purchaseStamps. */
  addtionalPurchaseStampsPurchaseAmount: Money;
  /** The total amount of interest received over the extra purchaseStamps */
  additionalPurchaseStampsInterest: Money;
  /** The amount of extra savingsstamps (spaarzegels such as the cutlery campaign) received */
  additionalSavingsStampsObtained: Scalars["Int"];
  /** The total amount saved by purchasing / renewing delivery bundles due to having Premium */
  deliveryBundleDiscountAmount: Money;
  /** Total amount saved on buying Terra products. */
  terraDiscountAmount: Money;
  /**
   * The total amount saved by purchasing with premium.
   * Total = additionalAirmilesObtainedInMoney + bioDiscountAmount + bonusboxPremiumDiscDivided + additionalPurchaseStampsInterest.
   */
  totalSavedAmount: Money;
  /**
   * The total amount of extra stamps and Airmiles received.
   * Total = additionalAirmilesObtained + additionalPurchaseStampsObtained + additionalSavingsStampsObtained.
   */
  totalAdditionalStamps: Scalars["Int"];
  /** Optional field to show saved amount per period of a year. */
  periods: Array<Maybe<SavingsPeriod>>;
};

/** Subscription pricing specification */
export type SubscriptionPrice = {
  __typename?: "SubscriptionPrice";
  /** Price for entire duration */
  fullDuration: Money;
  /** Monthly price */
  monthly: Money;
};

/** Result after applying reactivation to a current trial subscription */
export type SubscriptionReactivateResult = MutationResult & {
  __typename?: "SubscriptionReactivateResult";
  /** The reactivated subscriptionCurrent */
  result?: Maybe<SubscriptionCurrent>;
  /** Whether reactivation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable. Show this on client-side to inform customers about what went wrong. */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Subscription next renewal pricing specification */
export type SubscriptionRenewal = {
  __typename?: "SubscriptionRenewal";
  /** Date renewal will occur */
  date: Scalars["String"];
  /** Price before discounts are applied */
  originalPrice: Money;
  /** Price after discounts are applied */
  sellPrice: Money;
};

/** The potential savings a member can get by getting a subscription. Hence, the discount they are missing out on. */
export type SubscriptionSavingPotential = {
  __typename?: "SubscriptionSavingPotential";
  /** Potential savings if the member has premium. */
  premiumSavingPotential: Scalars["Float"];
  /** Premium customer WITHOUT delivery bundle who ordered online in the past 60 days. */
  hasOrderedRecently: Scalars["Boolean"];
};

/** Subscription savingsamount */
export type SubscriptionSavings = {
  __typename?: "SubscriptionSavings";
  /** Calculated savings for Instore purchases */
  inStore: Savings;
  /** Calculated savings for WithSubscriptions purchases such as Videoland, delivery-bundle and Ziggo */
  withSubscriptions: Savings;
};

/** Carousel for premium savings */
export type SubscriptionSavingsCarousel = {
  __typename?: "SubscriptionSavingsCarousel";
  /** The id of the carousel */
  id: Scalars["ID"];
  /** The index of the carousel. Starts at 1 */
  index: Scalars["Int"];
  /** The title of the carousel */
  title: Scalars["String"];
  /** The image url of the carousel */
  imageUrl: Scalars["String"];
  /** The link of the carousel */
  link: SubscriptionSavingsCarouselLink;
  /** The theme of the carousel */
  theme: SubscriptionSavingsCarouselTheme;
  /** Indicates if the carousel is marked as done */
  isCompleted: Scalars["Boolean"];
  /** Indicates if the carousel is updated by requirements. In case of false, FE/APP has to call the POST endpoint for updating the status */
  isUpdatedByRequirements: Scalars["Boolean"];
};

/** The link of the carousel. Contains URL and type of the link ("DEEPLINK", "WEB") */
export type SubscriptionSavingsCarouselLink = {
  __typename?: "SubscriptionSavingsCarouselLink";
  /** The url of the link */
  url: Scalars["String"];
  /** The type of the link: DEEPLINK, WEB */
  type: SubscriptionSavingsCarouselLinkType;
};

/** The type of the link: DEEPLINK, WEB */
export enum SubscriptionSavingsCarouselLinkType {
  /** DEEPLINK */
  Deeplink = "DEEPLINK",
  /** WEB */
  Web = "WEB",
}

/** Themes for the premium savings carousel */
export enum SubscriptionSavingsCarouselTheme {
  /** BLUE */
  Blue = "BLUE",
  /** GOLD */
  Gold = "GOLD",
  /** ORANGE */
  Orange = "ORANGE",
}

/** Result of updating a premium savings carousel */
export type SubscriptionSavingsCarouselUpdateMutationResult = MutationResult & {
  __typename?: "SubscriptionSavingsCarouselUpdateMutationResult";
  /** Response of updated carousels */
  result?: Maybe<Array<SubscriptionSavingsCarousel>>;
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Input options for calculating the hypothetical savings after having a subscription */
export type SubscriptionSavingsOptions = {
  /** Amount of bio products bought per week */
  weeklyBioProductsPurchase: Scalars["String"];
  /** Frequency of enabling 1-5 products from Bonusbox */
  bonusBoxActivationFrequency: Scalars["String"];
  /** Member is saving purchase stamps */
  purchaseStampsActive: Scalars["Boolean"];
  /** Member is saving air miles */
  airmilesActive: Scalars["Boolean"];
};

/** Result after setting your fixed delivery slot */
export type SubscriptionSetFixedDeliverySlotMutationResult = MutationResult & {
  __typename?: "SubscriptionSetFixedDeliverySlotMutationResult";
  /** SubscriptionPayment payload */
  result?: Maybe<SubscriptionFixedDeliverySlotCurrent>;
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Date and time slot for a subscription slot */
export type SubscriptionSlotInput = {
  /** Date of personal slot */
  date: Scalars["Date"];
  /** Begin time of personal slot */
  from: Scalars["String"];
  /** End time of personal slot */
  until: Scalars["String"];
};

/** A summary of the current subscription. */
export type SubscriptionSummary = {
  __typename?: "SubscriptionSummary";
  /** Whether member has had the subscription before */
  hasHadSubscription: Scalars["Boolean"];
  /** The definition code of a member's current subscription (e.g., BEZORG1, BEZORG12) */
  currentSubscriptionCode?: Maybe<Scalars["String"]>;
};

/** Currently supported subscriptionTypes */
export enum SubscriptionType {
  /** PREMIUM */
  Omni = "OMNI",
  /** B2B delivery bundle */
  B2B = "B2B",
  /** B2C delivery bundle */
  Bezorg = "BEZORG",
}

export enum WeekDay {
  Monday = "MONDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "THURSDAY",
  Friday = "FRIDAY",
  Saturday = "SATURDAY",
  Sunday = "SUNDAY",
}

/** Store supplier information */
export type Supplier = {
  __typename?: "Supplier";
  /** id for supplier */
  id: Scalars["Int"];
  /** title of the supplier */
  name: Scalars["String"];
  /** address of the supplier */
  address: SupplierAddress;
  /** category of the supplier */
  category: Scalars["String"];
  /** geolocation of the supplier */
  geoLocation: GeoLocation;
  /** supplier type */
  supplierType: Scalars["String"];
  /** Is inside Better for Nature Program */
  inBetterForNatureProgram: Scalars["Boolean"];
};

/** Address of the supplier */
export type SupplierAddress = {
  __typename?: "SupplierAddress";
  /** address */
  address?: Maybe<Scalars["String"]>;
  /** zipcode */
  postalCode?: Maybe<Scalars["String"]>;
  /** city */
  city: Scalars["String"];
  /** country code in Aplha3 */
  countryCode: Scalars["String"];
};

/** Http Header (has name & value) */
export type TestHttpHeader = {
  __typename?: "TestHttpHeader";
  /** Name of the header. */
  name: Scalars["String"];
  /** Value of the header. */
  value: Scalars["String"];
};

/** A MutationResult with an Int */
export type TestMutationResult = MutationResult & {
  __typename?: "TestMutationResult";
  /** The status */
  status: MutationResultStatus;
  /** The result */
  result: Scalars["Int"];
  /** An error message */
  errorMessage?: Maybe<Scalars["String"]>;
};

/** Input type for a testWithArguments mutation */
export type TestWithArgumentsInput = {
  requiredNumber: Scalars["Int"];
  optionalNumber?: Maybe<Scalars["Int"]>;
  requiredString: Scalars["String"];
  optionalString?: Maybe<Scalars["String"]>;
};

/**
 * A type containing a targeted offer. This is an offer that is only valid for a single member,
 * for example a Bonus Box or Digital Scratching offer.
 */
export type TargetedOffer = {
  __typename?: "TargetedOffer";
  /** The primary ID of a targeted offer. */
  id: Scalars["UUID"];
  /**
   * Secondary, external, IDs of a targeted offer. These are IDs that link this targeted offer
   * to various other systems in the domain.
   */
  externalIds: TargetedOfferExternalIds;
  /** The status of the targeted offer. */
  status: TargetedOfferStatus;
  /** The period in which the targeted offer is valid. */
  validityPeriod: TargetedOfferPeriod;
};

/**
 * An enumeration that contains the exact error reason that might be returned when attempting to
 * allocate a targeted offer to a member.
 */
export enum TargetedOfferAllocationErrorReason {
  /**
   * Unable to allocate a targeted offer as the member does not have enough points to trade
   * in for an targeted offer.
   */
  NotEnoughPoints = "NOT_ENOUGH_POINTS",
  /**
   * Unable to allocate a targeted offer as the member is not opted in for Digital Savings,
   * and thus does not have access to this feature.
   */
  NotOptedIn = "NOT_OPTED_IN",
  /** Unable to allocate a targeted offer as there are none more available (for this member). */
  NoOfferAvailable = "NO_OFFER_AVAILABLE",
  /** No challenge answer was provided, but one was expected (Belgium-only). */
  NoChallengeProvided = "NO_CHALLENGE_PROVIDED",
  /** A challenge answer was provided, but it was incorrect (Belgium-only). */
  WrongChallengeAnswer = "WRONG_CHALLENGE_ANSWER",
  /**
   * A challenge answer was provided, but it was not the one expected for this member
   * (Belgium-only).
   */
  ChallengeMismatch = "CHALLENGE_MISMATCH",
  /** Unknown exception occurred, most likely due to a backend system malfunctioning. */
  Unknown = "UNKNOWN",
}

/**
 * A type containing the result of an allocation mutation. Allocations might fail if the member
 * is not eligible for (another) targeted offer for a program. For example, they might not
 * have enough points available to trade for an allocated offer.
 */
export type TargetedOfferAllocationMutationResult = MutationResult & {
  __typename?: "TargetedOfferAllocationMutationResult";
  /** The status of the mutation. Indicates if the allocation was successful or not. */
  status: MutationResultStatus;
  /**
   * A message stating why an allocation was not successful. Will be null when the mutation
   * was successful.
   */
  errorMessage?: Maybe<Scalars["String"]>;
  /**
   * A reason enum stating why an allocation was not successful, more fine-tuned than the
   * error message. Will be null when the mutation was successful.
   */
  errorReason?: Maybe<TargetedOfferAllocationErrorReason>;
  /**
   * The allocated Targeted Offer, when the allocation was successful. Will be null when
   * the allocation was not successful.
   */
  targetedOffer?: Maybe<TargetedOffer>;
};

/**
 * A type containing the allocation challenge (tie-breaker question) used in the Belgian domain.
 * Contains a question and a list of possible answers (multiple choice).
 */
export type TargetedOfferChallenge = {
  __typename?: "TargetedOfferChallenge";
  /** The ID of the challenge. */
  id: Scalars["Int"];
  /** The question prompt shown to the customer. */
  question: Scalars["String"];
  /** The list of multiple-choice answers that can be selected in this challenge. */
  answers: Array<TargetedOfferChallengeAnswer>;
};

/**
 * A type containing a possible answer for an allocation challenge (tie-breaker question) used in
 * the Belgian domain.
 */
export type TargetedOfferChallengeAnswer = {
  __typename?: "TargetedOfferChallengeAnswer";
  /** The ID of the answer. */
  id: Scalars["Int"];
  /** The label of the answer. In multiple-choice answers, this is something like A, B, or C. */
  label: Scalars["String"];
  /** The actual readable answer of the answer. */
  answer: Scalars["String"];
};

/** A type containing various secondary, external, IDs of a targeted offer. */
export type TargetedOfferExternalIds = {
  __typename?: "TargetedOfferExternalIds";
  /**
   * The ID of the offer. This is not the same as the targeted offer ID. The offer ID is the
   * ID of an offer in our offer systems that is not member-specific. The combination of member
   * and offer IDs makes the targeted offer ID.
   */
  offerId: Scalars["UUID"];
  /**
   * The ID of the loyalty program that a targeted offer belongs to. Can be null if the targeted
   * offer does not belong to any loyalty program (or belongs to a loyalty program without an ID).
   */
  programId?: Maybe<Scalars["Int"]>;
  /**
   * The old ID of the offer. This one has a similar role as the offerId, but is used for legacy
   * systems not yet migrated over to the new offer microservices.
   */
  hqId: Scalars["String"];
};

/**
 * A type containing a timespan used by targeted offers. The start and end are both dates, and
 * as such do not contain time information.
 */
export type TargetedOfferPeriod = {
  __typename?: "TargetedOfferPeriod";
  /** Start date of the period. */
  start: Scalars["Date"];
  /** End date of the period. */
  end: Scalars["Date"];
};

/**
 * An enumeration containing the status of a targeted offer. This status indicates if and what
 * action a member has already taken for a particular targeted offer.
 */
export enum TargetedOfferStatus {
  /**
   * The targeted offer is (still) redeemable. This means that the member is eligable to pick
   * up one or multiple of the products in the targeted offer.
   */
  Redeemable = "REDEEMABLE",
  /** The targeted offer has been redeemed, and can not be redeemed a second time. */
  Redeemed = "REDEEMED",
}

/** Result of performing mutation */
export type CreateProductReturnResult = MutationResult & {
  __typename?: "CreateProductReturnResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Feedback id */
  feedbackId?: Maybe<Scalars["String"]>;
};

/** Explanation types */
export enum ProductReturnExplanationType {
  /** Product return is settled by deliverer */
  SettledByDeliverer = "SETTLED_BY_DELIVERER",
  /** Product is submited for return */
  Submitted = "SUBMITTED",
  /** Return is procesed */
  Processed = "PROCESSED",
  /** Product was not delivered */
  NotDelivered = "NOT_DELIVERED",
  /** Product is excluded from self service */
  ExcludedFromSelfService = "EXCLUDED_FROM_SELF_SERVICE",
  /** Product cannot be returned */
  CannotBeReturned = "CANNOT_BE_RETURNED",
}

/** Explanations */
export type ProductReturnExplanations = {
  __typename?: "ProductReturnExplanations";
  /** Explanations type */
  type: ProductReturnExplanationType;
  /** Explanation label */
  label: Scalars["String"];
};

/** Order eligible to return products */
export type ProductReturnOrder = {
  __typename?: "ProductReturnOrder";
  /** is of the order */
  id: Scalars["String"];
  /** Date time of the delivery slot */
  transactionDateTime: Scalars["String"];
  /** Delivery slot start time */
  deliveryStartTime?: Maybe<Scalars["String"]>;
  /** Delivery slot end time */
  deliveryEndTime?: Maybe<Scalars["String"]>;
  /** Delivery address */
  transactionAddress: ProductReturnOrderAddress;
  /** Shopping type of the order */
  shoppingType: ProductReturnShoppingType;
  /** Is the order eligible for returns */
  returnStatus: ProductReturnStatus;
};

/** The adress of the delivery */
export type ProductReturnOrderAddress = {
  __typename?: "ProductReturnOrderAddress";
  /** The street of the delivery */
  street?: Maybe<Scalars["String"]>;
  /** The housenumber of the delivery */
  houseNumber?: Maybe<Scalars["String"]>;
  /** The postalcode of the delivery */
  postalCode?: Maybe<Scalars["String"]>;
  /** The city of the delivery */
  city?: Maybe<Scalars["String"]>;
};

/** product with return properties */
export type ProductReturnProduct = {
  __typename?: "ProductReturnProduct";
  /** the product id */
  id: Scalars["Int"];
  /** the product */
  product?: Maybe<Product>;
  /** Product description fallback if product is not found. */
  description: Scalars["String"];
  /** quantities about the product in the order */
  quantities: ProductReturnProductQuantities;
  /** explanations about the product in self service context */
  explanations: Array<ProductReturnExplanations>;
  /** true if the product is eligible for return */
  isReturnable: Scalars["Boolean"];
};

/** Quantity properties for the return product */
export type ProductReturnProductQuantities = {
  __typename?: "ProductReturnProductQuantities";
  /** amount of items that can be returned */
  returnable: Scalars["Int"];
  /** amount ordered */
  ordered: Scalars["Int"];
};

/** Shopping type of the order */
export enum ProductReturnShoppingType {
  /** unkown */
  Unknown = "UNKNOWN",
  /** store */
  PhysicalStore = "PHYSICAL_STORE",
  /** delivery */
  Delivery = "DELIVERY",
  /** pickup delivery */
  PickupDelivery = "PICKUP_DELIVERY",
  /** delivery point */
  DeliveryPoint = "DELIVERY_POINT",
  /** pickup */
  Pickup = "PICKUP",
  /** in store pick */
  InStorePick = "IN_STORE_PICK",
  /** specials only */
  SpecialsOnly = "SPECIALS_ONLY",
}

/** Status of the order for product-returns */
export enum ProductReturnStatus {
  /** Maximum products in this order have been returned */
  MaxReturned = "MAX_RETURNED",
  /** The order contains products that can be returned */
  Returnable = "RETURNABLE",
  /** The order and its products cannot be returned */
  NotPossible = "NOT_POSSIBLE",
}

/** Result of performing mutation */
export type CreateProductComplaintResult = MutationResult & {
  __typename?: "CreateProductComplaintResult";
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Feedback id */
  feedbackId?: Maybe<Scalars["String"]>;
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
};

/** Explanation type */
export enum ExplanationType {
  /** Settled by deliverer */
  SettledByDeliverer = "SETTLED_BY_DELIVERER",
  /** Submitted */
  Submitted = "SUBMITTED",
  /** Processed */
  Processed = "PROCESSED",
  /** Not delivered */
  NotDelivered = "NOT_DELIVERED",
  /** Excluded from self service */
  ExcludedFromSelfService = "EXCLUDED_FROM_SELF_SERVICE",
  /** Cannot be returned */
  CannotBeReturned = "CANNOT_BE_RETURNED",
  /** WARN_FOR_SHORT_EXPIRATION */
  WarnForShortExpiration = "WARN_FOR_SHORT_EXPIRATION",
  /** WARN_FOR_SHORT_EXPIRATION */
  WarnDiscountAlreadyApplied = "WARN_DISCOUNT_ALREADY_APPLIED",
}

/** Explanation with label */
export type ExplanationWithLabel = {
  __typename?: "ExplanationWithLabel";
  /** Type */
  type: ExplanationType;
  /** Label */
  label: Scalars["String"];
  /** explanation that belongs to a feedbackType */
  byFeedbackTypes: Array<FeedbackType>;
};

/** Feedback type with label */
export type FeedbackTypeWithLabel = {
  __typename?: "FeedbackTypeWithLabel";
  /** The feedback type */
  value: FeedbackType;
  /** Label */
  label: Scalars["String"];
};

/** Product complaint claim status */
export enum ProductComplaintClaimStatus {
  /** Maximum products in this order have been claimed */
  MaxClaimed = "MAX_CLAIMED",
  /** The order contains products that can be claimed */
  Claimable = "CLAIMABLE",
}

/** Product complaint order */
export type ProductComplaintOrder = {
  __typename?: "ProductComplaintOrder";
  /** ID of the order */
  id: Scalars["String"];
  /** The shopping type */
  shoppingType: ProductComplaintShoppingType;
  /** Date time of the delivery slot */
  transactionDateTime: Scalars["String"];
  /** Delivery slot start time */
  deliveryStartTime?: Maybe<Scalars["String"]>;
  /** Delivery slot end time */
  deliveryEndTime?: Maybe<Scalars["String"]>;
  /** Delivery address */
  transactionAddress: ProductComplaintOrderAddress;
  /** Is the order eligible for claims */
  claimStatus: ProductComplaintClaimStatus;
};

/** Product complaint order address */
export type ProductComplaintOrderAddress = {
  __typename?: "ProductComplaintOrderAddress";
  /** The street of the delivery */
  street?: Maybe<Scalars["String"]>;
  /** The housenumber of the delivery */
  houseNumber?: Maybe<Scalars["String"]>;
  /** The postalcode of the delivery */
  postalCode?: Maybe<Scalars["String"]>;
  /** The city of the delivery */
  city?: Maybe<Scalars["String"]>;
};

/** Product complaint order product */
export type ProductComplaintOrderProduct = {
  __typename?: "ProductComplaintOrderProduct";
  /** The id of the product */
  id: Scalars["Int"];
  /** the product */
  product?: Maybe<Product>;
  /** Product description */
  description: Scalars["String"];
  /** Quantities */
  quantities: Quantities;
  /** Explanations */
  explanations: Array<Maybe<ExplanationWithLabel>>;
  /** Submittable feedback types */
  submittableFeedbackTypes: Array<Maybe<FeedbackTypeWithLabel>>;
  /** true if the product is claimable */
  isClaimable: Scalars["Boolean"];
};

/** Product complaint shopping type */
export enum ProductComplaintShoppingType {
  /** Unknown */
  Unknown = "UNKNOWN",
  /** Physical store */
  PhysicalStore = "PHYSICAL_STORE",
  /** Delivery */
  Delivery = "DELIVERY",
  /** Pickup delivery */
  PickupDelivery = "PICKUP_DELIVERY",
  /** Delivery point */
  DeliveryPoint = "DELIVERY_POINT",
  /** Pickup */
  Pickup = "PICKUP",
  /** In-store pick */
  InStorePick = "IN_STORE_PICK",
  /** Specials only */
  SpecialsOnly = "SPECIALS_ONLY",
}

/** Product complaint store product */
export type ProductComplaintStoreProduct = {
  __typename?: "ProductComplaintStoreProduct";
  /** ID */
  id?: Maybe<Scalars["Int"]>;
  /** HQ ID */
  hqId: Scalars["Int"];
  /** Description */
  description: Scalars["String"];
  /** Quantity */
  quantity: Scalars["Int"];
  /** The product */
  product?: Maybe<Product>;
  /** Submittable feedback types */
  submittableFeedbackTypes: Array<Maybe<FeedbackTypeWithLabel>>;
};

/** Product complaint store purchase */
export type ProductComplaintStorePurchase = {
  __typename?: "ProductComplaintStorePurchase";
  /** ID of the order */
  id: Scalars["String"];
  /** Date time of the delivery slot */
  transactionDateTime: Scalars["String"];
  /** Date time of the store purchase nicely formatted */
  dateTimeFormatted: Scalars["String"];
  /** Delivery address */
  transactionAddress: ProductComplaintOrderAddress;
  /** Is the order eligible for claims */
  claimStatus: ProductComplaintClaimStatus;
};

/** Quantities */
export type Quantities = {
  __typename?: "Quantities";
  /** Claimable quantity */
  claimable: Scalars["Int"];
};

/** OfflineReceipt */
export type OfflineReceipt = {
  __typename?: "OfflineReceipt";
  /** The id of the receipt */
  id: Scalars["String"];
  /** The member id of the receipt */
  memberId?: Maybe<Scalars["String"]>;
  /** The bonus card id of the receipt */
  bonusCardId?: Maybe<Scalars["String"]>;
  /** The store info of the receipt */
  storeInfo?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The verifications of the receipt */
  verifications?: Maybe<Array<Maybe<OfflineReceiptVerification>>>;
  /** The products of the receipt */
  products?: Maybe<Array<Maybe<OfflineReceiptProduct>>>;
  /** The loyalty cards of the receipt */
  loyaltyCards?: Maybe<Array<Maybe<OfflineReceiptLoyaltyCard>>>;
  /** The coupons of the receipt */
  coupons?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The subtotal of the receipt */
  subtotalProducts: OfflineReceiptSubtotal;
  /** The footnotes of the receipt */
  footnotes?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The discounts of the receipt */
  discounts?: Maybe<Array<Maybe<OfflineReceiptDiscount>>>;
  /** The total discount of the receipt */
  discountTotal?: Maybe<PaymentAmount>;
  /** The personal discount of the receipt */
  discountPersonal?: Maybe<PaymentAmount>;
  /** The subtotal discount of the receipt */
  subtotalDiscount?: Maybe<PaymentAmount>;
  /** The stamps of the receipt */
  stamps?: Maybe<OfflineReceiptStamps>;
  /** The total of the receipt */
  total: PaymentAmount;
  /** The payments of the receipt */
  payments?: Maybe<Array<Maybe<OfflineReceiptPayment>>>;
  /** The change of the receipt */
  change?: Maybe<PaymentAmount>;
  /** The giftCards of the receipt */
  giftCards?: Maybe<OfflineReceiptGiftCards>;
  /** The eftReceipt of the receipt */
  eftReceipt?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The vat of the receipt */
  vat?: Maybe<OfflineReceiptVat>;
  /** The promotion of the receipt */
  promotions?: Maybe<Array<Maybe<OfflineReceiptPromotion>>>;
  /** The transaction of the receipt */
  transaction: OfflineReceiptTransaction;
  /** The store additional info of the receipt */
  storeAdditionalInfo?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The errors of the receipt */
  errors?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The store address of the receipt */
  address?: Maybe<OfflineReceiptStoreAddress>;
  /** The store type of the receipt */
  storeType?: Maybe<OfflineReceiptStoreType>;
  /** The memberships of the receipt */
  memberships?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The return payment of the receipt */
  returnPayment?: Maybe<OfflineReceiptReturnPayment>;
};

/** OfflineReceiptActivation */
export type OfflineReceiptActivation = {
  __typename?: "OfflineReceiptActivation";
  /** The id of the activation */
  id: Scalars["String"];
  /** The name of the activation */
  name: Scalars["String"];
  /** The price of the activation */
  price?: Maybe<Money>;
  /** The status of the activation */
  status: Scalars["String"];
};

/** OfflineReceiptBalance */
export type OfflineReceiptBalance = {
  __typename?: "OfflineReceiptBalance";
  /** The id of the balance */
  id: Scalars["String"];
  /** The balance of the balance */
  balance: Money;
};

/** OfflineReceiptDiscount */
export type OfflineReceiptDiscount = {
  __typename?: "OfflineReceiptDiscount";
  /** The type of the discount */
  type: Scalars["String"];
  /** The name of the discount */
  name: Scalars["String"];
  /** The amount of the discount */
  amount: Money;
};

/** OfflineReceiptGiftCards */
export type OfflineReceiptGiftCards = {
  __typename?: "OfflineReceiptGiftCards";
  /** The balance of the giftcards */
  balance?: Maybe<Array<Maybe<OfflineReceiptBalance>>>;
  /** The amount of the giftcards */
  activations?: Maybe<Array<Maybe<OfflineReceiptActivation>>>;
};

/** OfflineReceiptIndicator */
export type OfflineReceiptIndicator = {
  __typename?: "OfflineReceiptIndicator";
  /** The name of the indicator */
  name: Scalars["String"];
  /** The percentage of the indicator */
  percentage?: Maybe<Scalars["Float"]>;
};

/** OfflineReceiptLoyaltyCard */
export type OfflineReceiptLoyaltyCard = {
  __typename?: "OfflineReceiptLoyaltyCard";
  /** The id of the loyaltyCard */
  id: Scalars["String"];
  /** The card of the loyaltyCard */
  card: Scalars["String"];
};

/** OfflineReceiptPackageTax */
export type OfflineReceiptPackageTax = {
  __typename?: "OfflineReceiptPackageTax";
  /** The name of the packageTax */
  name: Scalars["String"];
  /** The amount of the packageTax */
  amount: Scalars["Int"];
  /** The currency of the pakcageTax */
  currency: Scalars["String"];
};

/** OfflineReceiptPayment */
export type OfflineReceiptPayment = {
  __typename?: "OfflineReceiptPayment";
  /** The method of the payment */
  method: Scalars["String"];
  /** The amount of the payment */
  amount?: Maybe<Money>;
  /** The products of the payment */
  products?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** OfflineReceiptProduct */
export type OfflineReceiptProduct = {
  __typename?: "OfflineReceiptProduct";
  /** The id of the product */
  id: Scalars["Int"];
  /** The quantity of the product */
  quantity: Scalars["Float"];
  /** The weight of the product */
  weight?: Maybe<OfflineReceiptWeight>;
  /** The name of the product */
  name: Scalars["String"];
  /** The externalIds of the product */
  externalIds?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The price of the product */
  price?: Maybe<Money>;
  /** The amount of the product */
  amount: Money;
  /** The deposit of the product */
  deposit?: Maybe<Money>;
  /** The indicators type of the product */
  indicators?: Maybe<Array<Maybe<OfflineReceiptIndicator>>>;
  /** The package tax of the product */
  packageTax?: Maybe<OfflineReceiptPackageTax>;
};

/** OfflineReceiptPromotion */
export type OfflineReceiptPromotion = {
  __typename?: "OfflineReceiptPromotion";
  /** The quantity of the promotion */
  quantity: Scalars["Int"];
  /** The name of the promotion */
  name: Scalars["String"];
};

/** OfflineReceiptReturnPayment */
export type OfflineReceiptReturnPayment = {
  __typename?: "OfflineReceiptReturnPayment";
  /** The method of the paymentReturn */
  method: Scalars["String"];
  /** The amount of the paymentReturn */
  amount: Money;
  /** The footnote of the paymentReturn */
  footnote?: Maybe<Scalars["String"]>;
};

/** OfflineReceiptStamps */
export type OfflineReceiptStamps = {
  __typename?: "OfflineReceiptStamps";
  /** The quantity of the stamps */
  quantity: Scalars["Int"];
  /** The amount of the stamps */
  amount: Money;
};

/** Address of the store */
export type OfflineReceiptStoreAddress = {
  __typename?: "OfflineReceiptStoreAddress";
  /** streetname */
  street: Scalars["String"];
  /** housenumber */
  houseNumber: Scalars["String"];
  /** zipcode */
  postalCode: Scalars["String"];
  /** city */
  city: Scalars["String"];
  /** iso3 country code? */
  countryCode: Scalars["String"];
};

/** The type of store */
export enum OfflineReceiptStoreType {
  /** etos store */
  EtosStore = "ETOS_STORE",
  /** etos franchise store */
  EtosFranchiseStore = "ETOS_FRANCHISE_STORE",
  /** albert heijn to go */
  AhTogo = "AH_TOGO",
  /** albert heijn */
  AhAlbert = "AH_ALBERT",
  /** albert heijn dntg */
  AhDntg = "AH_DNTG",
  /** albert heijn regular */
  AhRegular = "AH_REGULAR",
  /** albert heijn xl */
  AhXl = "AH_XL",
  /** albert heijn belgium */
  AhBelgium = "AH_BELGIUM",
  /** albert heijn regular old */
  AhRegularOld = "AH_REGULAR_OLD",
}

/** OfflineReceiptSubtotal */
export type OfflineReceiptSubtotal = {
  __typename?: "OfflineReceiptSubtotal";
  /** The quantity of the subtotal */
  name: Scalars["Int"];
  /** The amount of the subtotal */
  amount: Money;
};

/** OfflineReceiptTotal */
export type OfflineReceiptTotal = {
  __typename?: "OfflineReceiptTotal";
  /** The sales amount of the total */
  salesAmount: Money;
  /** The amount of the total */
  amount: Money;
};

/** OfflineReceiptTransaction */
export type OfflineReceiptTransaction = {
  __typename?: "OfflineReceiptTransaction";
  /** The store of the transaction */
  store: Scalars["Int"];
  /** The lane of the transaction */
  lane: Scalars["Int"];
  /** The id of the transaction */
  id: Scalars["Int"];
  /** The operator of the transaction */
  operator?: Maybe<Scalars["Int"]>;
  /** The DateTime of the transaction */
  dateTime: Scalars["String"];
};

/** OfflineReceiptVat */
export type OfflineReceiptVat = {
  __typename?: "OfflineReceiptVat";
  /** The levels of the vat */
  levels: Array<Maybe<OfflineReceiptVatLevel>>;
  /** The total of the vat */
  total: OfflineReceiptTotal;
};

/** OfflineReceiptVatLevel */
export type OfflineReceiptVatLevel = {
  __typename?: "OfflineReceiptVatLevel";
  /** The percentage of the vat */
  percentage: Scalars["Int"];
  /** The sales amount of the vat */
  salesAmount: Money;
  /** The amount of the vat */
  amount: Money;
};

/** OfflineReceiptVerification */
export type OfflineReceiptVerification = {
  __typename?: "OfflineReceiptVerification";
  /** The id of the verification */
  id: Scalars["Int"];
  /** The quantity of the verification */
  quantity: Scalars["Int"];
  /** The weight of the verification */
  weight?: Maybe<OfflineReceiptWeight>;
  /** The name of the verification */
  name: Scalars["String"];
  /** The amount of the verification */
  amount: Money;
  /** The discount percentage of the verification */
  discountPercentage?: Maybe<Scalars["Int"]>;
};

/** OfflineReceiptWeight */
export type OfflineReceiptWeight = {
  __typename?: "OfflineReceiptWeight";
  /** The amount of the weight */
  amount: Scalars["Float"];
  /** The unit of the weight */
  unit: Scalars["String"];
};

/** Result of performing mutation */
export type CreateDepositComplaintResult = MutationResult & {
  __typename?: "CreateDepositComplaintResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Feedback id */
  feedbackId?: Maybe<Scalars["String"]>;
};

/** The deposit item that the complaint is about */
export type DepositComplaintDepositItem = {
  __typename?: "DepositComplaintDepositItem";
  /** The item the deposit is for */
  type: DepositComplaintDepositType;
  /** The deposit item label */
  label: Scalars["String"];
  /** Item quantities in the order */
  quantities: DepositComplaintDepositItemQuantities;
  /** Explanations about the deposit state */
  explanations: Array<DepositComplaintExplanation>;
};

/** Quantity properties for the deposit item */
export type DepositComplaintDepositItemQuantities = {
  __typename?: "DepositComplaintDepositItemQuantities";
  /** amount of items has already been claimed */
  claimed: Scalars["Int"];
  /** amount of items that can be claimed */
  claimable: Scalars["Int"];
  /** amount of items that has been settled on delivery */
  settledByDeliverer: Scalars["Int"];
};

/** The type of deposit */
export enum DepositComplaintDepositType {
  FoldingCrate = "FOLDING_CRATE",
  PlasticBag = "PLASTIC_BAG",
  PetBottleSmall = "PET_BOTTLE_SMALL",
  PetBottleLarge = "PET_BOTTLE_LARGE",
  Can = "CAN",
  BeerBottle = "BEER_BOTTLE",
  FlipTopBottle = "FLIP_TOP_BOTTLE",
  BeerCrate_16Or_24Bottles = "BEER_CRATE_16_OR_24_BOTTLES",
  BeerCrate_12Bottles = "BEER_CRATE_12_BOTTLES",
}

/** Explanations */
export type DepositComplaintExplanation = {
  __typename?: "DepositComplaintExplanation";
  /** Explanation type */
  type: DepositComplaintExplanationType;
  /** Explanation label */
  label?: Maybe<Scalars["String"]>;
};

/** Explanation type */
export enum DepositComplaintExplanationType {
  SettledByDeliverer = "SETTLED_BY_DELIVERER",
  Submitted = "SUBMITTED",
}

/** Order eligible to deposits */
export type DepositComplaintOrder = {
  __typename?: "DepositComplaintOrder";
  /** is of the order */
  id: Scalars["String"];
  /** Date time of the delivery slot */
  transactionDateTime: Scalars["String"];
  /** Delivery slot start time */
  deliveryStartTime?: Maybe<Scalars["String"]>;
  /** Delivery slot end time */
  deliveryEndTime?: Maybe<Scalars["String"]>;
  /** Delivery address */
  transactionAddress: DepositComplaintOrderAddress;
  /** Shopping type of the order */
  shoppingType: DepositComplaintShoppingType;
  /** Is the order eligible for returns */
  claimStatus: DepositComplaintStatus;
};

/** The adress of the delivery */
export type DepositComplaintOrderAddress = {
  __typename?: "DepositComplaintOrderAddress";
  /** The street of the delivery */
  street?: Maybe<Scalars["String"]>;
  /** The housenumber of the delivery */
  houseNumber?: Maybe<Scalars["String"]>;
  /** The postalcode of the delivery */
  postalCode?: Maybe<Scalars["String"]>;
  /** The city of the delivery */
  city?: Maybe<Scalars["String"]>;
};

/** Optional reimbursement */
export enum DepositComplaintReimbursementOption {
  Reimbursement = "REIMBURSEMENT",
  FeedbackOnly = "FEEDBACK_ONLY",
}

/** Shopping type of the order */
export enum DepositComplaintShoppingType {
  /** unkown */
  Unknown = "UNKNOWN",
  /** store */
  PhysicalStore = "PHYSICAL_STORE",
  /** delivery */
  Delivery = "DELIVERY",
  /** pickup delivery */
  PickupDelivery = "PICKUP_DELIVERY",
  /** delivery point */
  DeliveryPoint = "DELIVERY_POINT",
  /** pickup */
  Pickup = "PICKUP",
  /** in store pick */
  InStorePick = "IN_STORE_PICK",
  /** specials only */
  SpecialsOnly = "SPECIALS_ONLY",
}

/** Status of the order for deposit complaints */
export enum DepositComplaintStatus {
  /** Maximum deposits in this order have been returned */
  MaxClaimed = "MAX_CLAIMED",
  /** The order contains deposits that can be returned */
  Claimable = "CLAIMABLE",
}

/** Input required to mark message center message as read or unmark message as read */
export type MessageCenterMarkingMessageReadInput = {
  /** Id of the message to be marked */
  messageId: Scalars["String"];
  /** Should mark message as read or vice versa */
  isRead: Scalars["Boolean"];
};

/** Represents a message center message */
export type MessageCenterMessage = {
  __typename?: "MessageCenterMessage";
  /** Id of a message */
  id: Scalars["String"];
  /** Is message read or not */
  isRead: Scalars["Boolean"];
  /** Is message urgent or not */
  isUrgent: Scalars["Boolean"];
  /** Content related data of message */
  content: MessageCenterMessageContent;
  /** Perion when this message should be displayed and at which time section it should be put */
  period: MessageCenterMessageDisplayTimePeriod;
  /** Optional attributes for analytics and other purposes */
  optionalAttributes: MessageCenterMessageOptionalAttributes;
};

/** Represents a message center message content related data */
export type MessageCenterMessageContent = {
  __typename?: "MessageCenterMessageContent";
  /** Application deeplink that specifies app behaviour when message is clicked */
  deeplink: Scalars["String"];
  /** Message title */
  title: Scalars["String"];
  /** Message category */
  category: Scalars["String"];
  /** Links to icons to show beside the message. */
  icons: Array<ImageSet>;
};

/** Represents a message center message display time period data */
export type MessageCenterMessageDisplayTimePeriod = {
  __typename?: "MessageCenterMessageDisplayTimePeriod";
  /** Date that should be displayed to the user indicating when message was created. */
  displayDate: Scalars["String"];
  /**
   * Which section message belongs to (today, this week or this month)
   * @deprecated Use displayDate instead
   * . .
   */
  section: Scalars["String"];
  /** Date starting from which message is relevant */
  startDate: Scalars["String"];
  /** Date after which message is no longer relevant */
  endDate: Scalars["String"];
};

/** Represents optional attributes of each message that should be used for analytics purposes */
export type MessageCenterMessageOptionalAttributes = {
  __typename?: "MessageCenterMessageOptionalAttributes";
  /** Id of SAS (marketing tool) marketing campaign */
  campaignId?: Maybe<Scalars["String"]>;
  /** Identifier used for analytics purposes */
  trackingCode?: Maybe<Scalars["String"]>;
};

/** Represent message center unread messages info */
export type MessageCenterUnreadMessagesInfo = {
  __typename?: "MessageCenterUnreadMessagesInfo";
  /** Amount of unread messages */
  unreadMessagesAmount: Scalars["Int"];
  /** Amount of unread urgent messages */
  urgentUnreadMessagesAmount: Scalars["Int"];
  /** Whether to show profile icon dot or not */
  showProfileIcon: Scalars["Boolean"];
};

/** A type containing all information on an entry point, which is part of a component. */
export type EntryPoint = {
  __typename?: "EntryPoint";
  /**
   * The unique name of the entry point. This can serve as an identifier of the entry
   * point, but be aware that the name can change as a result of A/B-tests or changes
   * in the configuration in the backend.
   */
  name: Scalars["String"];
  /**
   * The content to be rendered in the entry point. Contains elements such as a title,
   * a subtitle, an image, background colors and the target to route to on interaction.
   */
  contentVariant: EntryPointContentVariant;
  /** The Additional properties of the entry point */
  properties?: Maybe<Array<EntryPointProperty>>;
  /** The additional metadata of the entry point. */
  metadata?: Maybe<EntryPointMetadata>;
};

/**
 * A type containing the content of a card entry point. Contains elements such as a title,
 * a subtitle, an action label, an image, background colors and the target to route to on
 * interaction.
 */
export type EntryPointCardContent = {
  __typename?: "EntryPointCardContent";
  /**
   * The variant of the content. Mostly used for internal purposes, as GraphQL's query
   * language already supports fetching based on type. Will always be set to
   * CARD for this type.
   */
  variantType?: Maybe<EntryPointContentVariantType>;
  /**
   * The title of the entry point. Every entry point will always have a title, and the
   * title cannot contain any dynamic data. Optional, can be null in very rare cases when
   * the backend fails to format the title and there is no fallback configured.
   */
  title?: Maybe<Scalars["String"]>;
  /**
   * The body of the entry point. Can be built by the backend using dynamic data
   * formatted into a string. Optional, entry points do not always have a subtitle. Will
   * also be null if the backend failed to create the dynamic body due to an internal
   * error.
   */
  body?: Maybe<Scalars["String"]>;
  /**
   * The label of an entry point. Optional, entry points do not always have a label. Will
   * also be null if the backend failed to create the dynamic label due to an internal
   * error.
   */
  label?: Maybe<Scalars["String"]>;
  /**
   * The label font color of an entry point. Optional, entry points do not always have a
   * label, and thus also not a label font color.
   */
  labelFontColor?: Maybe<Scalars["String"]>;
  /**
   * The label background color of an entry point. Optional, entry points do not always
   * have a label background color.
   */
  labelBackgroundColors?: Maybe<Array<Scalars["String"]>>;
  /** List of image rendition URLs for the entry point. */
  imageUrls: Array<Scalars["String"]>;
  /**
   * The font color of the entry point. This color will be used for the text displayed
   * on the entry point. The value will have the format of a hexadecimal color code: #xxxxxx.
   */
  fontColor: Scalars["String"];
  /**
   * List of background colors of the entry point. Will contain one of three options:
   * no values, 1 value or 2 values. If there are 2 values, then a gradiant is meant to
   * be rendered. Each value will have the format of a hexadecimal color code: #xxxxxx.
   */
  backgroundColors: Array<Scalars["String"]>;
  /** The target to route to on interaction with the entry point. */
  target: EntryPointTarget;
};

/**
 * A type containing the content of a card extended entry point. Contains elements such as
 * a title, a subtitle, an action label, an image, background colors and the target to route
 * to on interaction.
 */
export type EntryPointCardExtendedContent = {
  __typename?: "EntryPointCardExtendedContent";
  /**
   * The variant of the content. Mostly used for internal purposes, as GraphQL's query
   * language already supports fetching based on type. Will always be set to
   * CARD_EXTENDED for this type.
   */
  variantType?: Maybe<EntryPointContentVariantType>;
  /**
   * The title of the entry point. Every entry point will always have a title, and the
   * title cannot contain any dynamic data. Optional, can be null in very rare cases when
   * the backend fails to format the title and there is no fallback configured.
   */
  title?: Maybe<Scalars["String"]>;
  /**
   * The subtitle of the entry point. Can be built by the backend using dynamic data
   * formatted into a string. Optional, entry points do not always have a subtitle. Will
   * also be null if the backend failed to create the dynamic subtitle due to an internal
   * error.
   */
  subtitle?: Maybe<Scalars["String"]>;
  /**
   * The body of the entry point. Can be built by the backend using dynamic data
   * formatted into a string. Optional, entry points do not always have a subtitle. Will
   * also be null if the backend failed to create the dynamic body due to an internal
   * error.
   */
  body?: Maybe<Scalars["String"]>;
  /**
   * The label of an entry point. Optional, entry points do not always have a label. Will
   * also be null if the backend failed to create the dynamic label due to an internal
   * error.
   */
  label?: Maybe<Scalars["String"]>;
  /**
   * The label font color of an entry point. Optional, entry points do not always have a
   * label, and thus also not a label font color.
   */
  labelFontColor?: Maybe<Scalars["String"]>;
  /**
   * The label background color of an entry point. Optional, entry points do not always
   * have a label background color.
   */
  labelBackgroundColors?: Maybe<Array<Scalars["String"]>>;
  /** List of image rendition URLs for the entry point. */
  imageUrls: Array<Scalars["String"]>;
  /**
   * The font color of the entry point. This color will be used for the text displayed
   * on the entry point. The value will have the format of a hexadecimal color code: #xxxxxx.
   */
  fontColor: Scalars["String"];
  /**
   * List of background colors of the entry point. Will contain one of three options:
   * no values, 1 value or 2 values. If there are 2 values, then a gradiant is meant to
   * be rendered. Each value will have the format of a hexadecimal color code: #xxxxxx.
   */
  backgroundColors: Array<Scalars["String"]>;
  /** The target to route to on interaction with the entry point. */
  target: EntryPointTarget;
};

/**
 * A type containing a full entry point component. This is a renderable component by a
 * frontend consumer and acts as a lane or page with entries to other parts of the app or
 * website, supporting both deeplinks and weblinks.
 */
export type EntryPointComponent = {
  __typename?: "EntryPointComponent";
  /**
   * The name of the entry point component. Is unique among other entry point components,
   * and is used as an easy identifier for a component. Every component has a name.
   */
  name: Scalars["String"];
  /**
   * The ranked list of entry points that are part of the component. It is important
   * to maintain the order of the list as the entry-point backend has determined that
   * this is the order to be used by the dynamic ranking business ruling. If the backend
   * failed to rank entry points, they will assume the default ranking.
   */
  entryPoints: Array<EntryPoint>;
};

/** Union type of all entry point content variants. */
export type EntryPointContentVariant =
  | EntryPointRegularHorizontalContent
  | EntryPointRegularHorizontalExtendedContent
  | EntryPointLargeHorizontalContent
  | EntryPointRegularVerticalContent
  | EntryPointLargeVerticalContent
  | EntryPointCardContent
  | EntryPointCardExtendedContent;

/**
 * Enum type referencing the content variant of an entry point content. Mostly used for
 * internal purposes to differentiate between the different content types, as GraphQL's
 * query language already supports fetching based on type.
 */
export enum EntryPointContentVariantType {
  /** Regular Horizontal Entry Point Content. */
  RegularHorizontal = "REGULAR_HORIZONTAL",
  /** Regular Horizontal Extended Entry Point Content. */
  RegularHorizontalExtended = "REGULAR_HORIZONTAL_EXTENDED",
  /** Large Horizontal Entry Point Content. */
  LargeHorizontal = "LARGE_HORIZONTAL",
  /** Regular Vertical Entry Point Content. */
  RegularVertical = "REGULAR_VERTICAL",
  /** Large Vertical Entry Point Content. */
  LargeVertical = "LARGE_VERTICAL",
  /** Card Entry Point Content. */
  Card = "CARD",
  /** Card Extended Entry Point Content. */
  CardExtended = "CARD_EXTENDED",
}

/**
 * A type representing the mutation result of an entry point dismissal. Either the dismissal was successful, or an error
 * occurred whilst trying to dismiss the entry point. In case of an error, an error message might be present.
 */
export type EntryPointDismissalMutationResult = MutationResult & {
  __typename?: "EntryPointDismissalMutationResult";
  /** The status of the mutation. */
  status: MutationResultStatus;
  /** In case of an error, it contains the reason of it, when available. */
  errorMessage?: Maybe<Scalars["String"]>;
};

/**
 * A type containing the content of a large horizontal entry point. Contains elements
 * such as a title, a subtitle, an image, background colors and the target to route to on
 * interaction.
 */
export type EntryPointLargeHorizontalContent = {
  __typename?: "EntryPointLargeHorizontalContent";
  /**
   * The variant of the content. Mostly used for internal purposes, as GraphQL's query
   * language already supports fetching based on type. Will always be set to
   * LARGE_HORIZONTAL for this type.
   */
  variantType?: Maybe<EntryPointContentVariantType>;
  /**
   * The title of the entry point. Every entry point will always have a title, and the
   * title cannot contain any dynamic data. Optional, can be null in very rare cases when
   * the backend fails to format the title and there is no fallback configured.
   */
  title?: Maybe<Scalars["String"]>;
  /**
   * The subtitle of the entry point. Can be built by the backend using dynamic data
   * formatted into a string. Optional, entry points do not always have a subtitle. Will
   * also be null if the backend failed to create the dynamic subtitle due to an internal
   * error.
   */
  subtitle?: Maybe<Scalars["String"]>;
  /** List of image rendition URLs for the entry point. */
  imageUrls: Array<Scalars["String"]>;
  /**
   * List of background colors of the entry point. Will contain one of three options:
   * no values, 1 value or 2 values. If there are 2 values, then a gradiant is meant to
   * be rendered. Each value will have the format of a hexadecimal color code: #xxxxxx.
   */
  backgroundColors: Array<Scalars["String"]>;
  /** The target to route to on interaction with the entry point. */
  target: EntryPointTarget;
};

/**
 * A type containing the content of a large vertical entry point. Contains elements
 * such as a title, a subtitle, an image, background colors and the target to route to on
 * interaction.
 */
export type EntryPointLargeVerticalContent = {
  __typename?: "EntryPointLargeVerticalContent";
  /**
   * The variant of the content. Mostly used for internal purposes, as GraphQL's query
   * language already supports fetching based on type. Will always be set to
   * LARGE_VERTICAL for this type.
   */
  variantType?: Maybe<EntryPointContentVariantType>;
  /**
   * The title of the entry point. Every entry point will always have a title, and the
   * title cannot contain any dynamic data. Optional, can be null in very rare cases when
   * the backend fails to format the title and there is no fallback configured.
   */
  title?: Maybe<Scalars["String"]>;
  /**
   * The subtitle of the entry point. Can be built by the backend using dynamic data
   * formatted into a string. Optional, entry points do not always have a subtitle. Will
   * also be null if the backend failed to create the dynamic subtitle due to an internal
   * error.
   */
  subtitle?: Maybe<Scalars["String"]>;
  /** List of image rendition URLs for the entry point. */
  imageUrls: Array<Scalars["String"]>;
  /**
   * List of background colors of the entry point. Will contain one of three options:
   * no values, 1 value or 2 values. If there are 2 values, then a gradiant is meant to
   * be rendered. Each value will have the format of a hexadecimal color code: #xxxxxx.
   */
  backgroundColors: Array<Scalars["String"]>;
  /** The target to route to on interaction with the entry point. */
  target: EntryPointTarget;
};

/** A type containing metadata of an entry point. */
export type EntryPointMetadata = {
  __typename?: "EntryPointMetadata";
  /**
   * The group that this entry point belongs to. Used for grouping entry points together
   * under a common header, if the frontend wishes to do so, in which case the name of the
   * group will be the displayable name of the header. Optional, not all entry points
   * belong to a group.
   */
  group?: Maybe<Scalars["String"]>;
  /**
   * A flag that indicates if this entry point can be dismissed. Dismissing an entry point
   * is done through the entryPointDismiss mutation, part of the entry-point schema. When
   * you dismiss an entry point, it can be hidden from the UI layer, and subsequent calls
   * to fetch the entry point component will not include the dismissed entry point.
   */
  dismissible: Scalars["Boolean"];
};

/** A type containing a property of an entry point, with the value serialized as a string. */
export type EntryPointProperty = {
  __typename?: "EntryPointProperty";
  /** The key of the property. */
  key: Scalars["String"];
  /** The type of the property. */
  type: EntryPointPropertyType;
  /** The value of the property. */
  value?: Maybe<Scalars["String"]>;
};

/** Enum for resolving the type of a EntryPointProperty. */
export enum EntryPointPropertyType {
  Bool = "BOOL",
  Int = "INT",
  Float = "FLOAT",
  String = "STRING",
  StringList = "STRING_LIST",
  Date = "DATE",
  Datetime = "DATETIME",
  Time = "TIME",
}

/**
 * A type containing the content of a regular horizontal entry point. Contains elements
 * such as a title, a subtitle, an image, background colors and the target to route to on
 * interaction.
 */
export type EntryPointRegularHorizontalContent = {
  __typename?: "EntryPointRegularHorizontalContent";
  /**
   * The variant of the content. Mostly used for internal purposes, as GraphQL's query
   * language already supports fetching based on type. Will always be set to
   * REGULAR_HORIZONTAL for this type.
   */
  variantType?: Maybe<EntryPointContentVariantType>;
  /**
   * The title of the entry point. Every entry point will always have a title, and the
   * title cannot contain any dynamic data. Optional, can be null in very rare cases when
   * the backend fails to format the title and there is no fallback configured.
   */
  title?: Maybe<Scalars["String"]>;
  /**
   * The subtitle of the entry point. Can be built by the backend using dynamic data
   * formatted into a string. Optional, entry points do not always have a subtitle. Will
   * also be null if the backend failed to create the dynamic subtitle due to an internal
   * error.
   */
  subtitle?: Maybe<Scalars["String"]>;
  /** List of image rendition URLs for the entry point. */
  imageUrls: Array<Scalars["String"]>;
  /**
   * List of background colors of the entry point. Will contain one of three options:
   * no values, 1 value or 2 values. If there are 2 values, then a gradiant is meant to
   * be rendered. Each value will have the format of a hexadecimal color code: #xxxxxx.
   */
  backgroundColors: Array<Scalars["String"]>;
  /** The target to route to on interaction with the entry point. */
  target: EntryPointTarget;
};

/**
 * A type containing the content of a regular horizontal extended entry point. Contains
 * elements such as a title, a subtitle, an action label, an image, background colors and
 * the target to route to on interaction.
 */
export type EntryPointRegularHorizontalExtendedContent = {
  __typename?: "EntryPointRegularHorizontalExtendedContent";
  /**
   * The variant of the content. Mostly used for internal purposes, as GraphQL's query
   * language already supports fetching based on type. Will always be set to
   * REGULAR_HORIZONTAL_EXTENDED for this type.
   */
  variantType?: Maybe<EntryPointContentVariantType>;
  /**
   * The title of the entry point. Every entry point will always have a title, and the
   * title cannot contain any dynamic data. Optional, can be null in very rare cases when
   * the backend fails to format the title and there is no fallback configured.
   */
  title?: Maybe<Scalars["String"]>;
  /**
   * The subtitle of the entry point. Can be built by the backend using dynamic data
   * formatted into a string. Optional, entry points do not always have a subtitle. Will
   * also be null if the backend failed to create the dynamic subtitle due to an internal
   * error.
   */
  subtitle?: Maybe<Scalars["String"]>;
  /**
   * The action label of the entry point. Can be displayed as part of a CTA element
   * inside the button. Optional, entry points do not always have an action label. Will
   * also be null if the backend failed to create the dynamic action label due to an
   * internal error.
   */
  action?: Maybe<Scalars["String"]>;
  /**
   * The label of an entry point. Optional, entry points do not always have a label. Will
   * also be null if the backend failed to create the dynamic label due to an internal
   * error.
   */
  label?: Maybe<Scalars["String"]>;
  /**
   * The label font color of an entry point. Optional, entry points do not always have a
   * label, and thus also not a label font color.
   */
  labelFontColor?: Maybe<Scalars["String"]>;
  /**
   * The label background color of an entry point. Optional, entry points do not always
   * have a label background color.
   */
  labelBackgroundColors?: Maybe<Array<Scalars["String"]>>;
  /**
   * The footer text of an entry point. Optional, entry points do not always have a footer.
   * Will also be null if the backend failed to create the dynamic footer due to an
   * internal error.
   */
  footer?: Maybe<Scalars["String"]>;
  /**
   * The footer target of an entry point. Optional, entry points do not always have a footer
   * and the footer might not always have a target to route to.
   */
  footerTarget?: Maybe<EntryPointTarget>;
  /** List of image rendition URLs for the entry point. */
  imageUrls: Array<Scalars["String"]>;
  /**
   * List of background colors of the entry point. Will contain one of three options:
   * no values, 1 value or 2 values. If there are 2 values, then a gradiant is meant to
   * be rendered. Each value will have the format of a hexadecimal color code: #xxxxxx.
   */
  backgroundColors: Array<Scalars["String"]>;
  /** The target to route to on interaction with the entry point. */
  target: EntryPointTarget;
};

/**
 * A type containing the content of a regular vertical entry point. Contains elements
 * such as a title, a subtitle, an image, background colors and the target to route to on
 * interaction.
 */
export type EntryPointRegularVerticalContent = {
  __typename?: "EntryPointRegularVerticalContent";
  /**
   * The variant of the content. Mostly used for internal purposes, as GraphQL's query
   * language already supports fetching based on type. Will always be set to
   * REGULAR_VERTICAL for this type.
   */
  variantType?: Maybe<EntryPointContentVariantType>;
  /**
   * The title of the entry point. Every entry point will always have a title, and the
   * title cannot contain any dynamic data. Optional, can be null in very rare cases when
   * the backend fails to format the title and there is no fallback configured.
   */
  title?: Maybe<Scalars["String"]>;
  /**
   * The subtitle of the entry point. Can be built by the backend using dynamic data
   * formatted into a string. Optional, entry points do not always have a subtitle. Will
   * also be null if the backend failed to create the dynamic subtitle due to an internal
   * error.
   */
  subtitle?: Maybe<Scalars["String"]>;
  /** List of image rendition URLs for the entry point. */
  imageUrls: Array<Scalars["String"]>;
  /**
   * List of background colors of the entry point. Will contain one of three options:
   * no values, 1 value or 2 values. If there are 2 values, then a gradiant is meant to
   * be rendered. Each value will have the format of a hexadecimal color code: #xxxxxx.
   */
  backgroundColors: Array<Scalars["String"]>;
  /** The target to route to on interaction with the entry point. */
  target: EntryPointTarget;
};

/** A type containing the target to route to on interaction with the entry point. */
export type EntryPointTarget = {
  __typename?: "EntryPointTarget";
  /** The target URI. */
  uri: Scalars["String"];
  /** The type of the link. */
  type: EntryPointTargetLinkType;
};

/** Enum type referencing the target type of an entry point target. */
export enum EntryPointTargetLinkType {
  /** A deeplink, used by the mobile frontends to route to pages. */
  Deeplink = "DEEPLINK",
  /** A weblink. */
  Weblink = "WEBLINK",
}

/** Item on a grocery list */
export type GroceryItem = {
  __typename?: "GroceryItem";
  /** Grocery item id */
  id: Scalars["String"];
  /** The actual product */
  product: Product;
  /** Quantity of the item */
  quantity: Scalars["Int"];
  /** Position of the item in the list */
  position: Scalars["Int"];
  /** Is the product crossed off */
  crossedOff: Scalars["Boolean"];
};

/** The complete grocery list */
export type GroceryList = {
  __typename?: "GroceryList";
  /** GroceryList id */
  id: Scalars["String"];
  /** Title of the grocery list */
  title: Scalars["String"];
  /** Type of grocery list ea SHOPPING SHARABLE */
  type: GroceryListType;
  /** Grocery list items that are on the list */
  groceryItems: Array<GroceryItem>;
  /** Notes that are on the list */
  notes: Array<Note>;
};

/** GroceryList result we added the status code to indicate when a list is not found later on we can add more status codes for no persmission etc. */
export type GroceryListGetResult = {
  __typename?: "GroceryListGetResult";
  /** Relevant error message if applicable */
  statusCode?: Maybe<Scalars["Int"]>;
  /** GroceryList */
  groceryList?: Maybe<GroceryList>;
};

/** Result of creating a grocery list */
export type GroceryListResult = MutationResult & {
  __typename?: "GroceryListResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** GroceryList */
  groceryList?: Maybe<GroceryList>;
};

/** Different types of grocery lists */
export enum GroceryListType {
  Shopping = "SHOPPING",
  Favorite = "FAVORITE",
  Shared = "SHARED",
}

/** Arguments for creating a new grocery list item */
export type NewGroceryItem = {
  /** The actual product */
  productId: Scalars["Int"];
  /** Quantity of the item */
  quantity: Scalars["Int"];
  /** Position of the item in the list */
  position: Scalars["Int"];
  /** Is the product crossed off */
  crossedOff: Scalars["Boolean"];
};

/** Arguments for creating a new note */
export type NewNote = {
  /** The actual product */
  description: Scalars["String"];
  /** Position of the item in the list */
  position: Scalars["Int"];
  /** Is the product crossed off */
  crossedOff: Scalars["Boolean"];
};

/** A note on a grocery list */
export type Note = {
  __typename?: "Note";
  /** Note id */
  id: Scalars["String"];
  /** The actual product */
  description: Scalars["String"];
  /** Position of the item in the list */
  position: Scalars["Int"];
  /** Is the product crossed off */
  crossedOff: Scalars["Boolean"];
};

/** Folder */
export type Folder = {
  __typename?: "Folder";
  /** ID */
  id: Scalars["Int"];
  /** Details URL */
  url: Scalars["String"];
  /** Title */
  title: Scalars["String"];
  /** Slug */
  slug: Scalars["String"];
  /** CoverUrl for the cover image (@800 resolution) */
  coverUrl: Scalars["String"];
  /** Number of pages in the folder */
  pageCount: Scalars["Int"];
  /** The Folder state see enum FolderState */
  state?: Maybe<FolderState>;
  /** Time at which the folder was last set online */
  onlineAt?: Maybe<Scalars["String"]>;
  /** Time at which the folder was last set offline */
  offlineAt?: Maybe<Scalars["String"]>;
  /** Time at which the folder is scheduled to go online */
  scheduleOnlineAt?: Maybe<Scalars["String"]>;
  /** Time at which the folder is scheduled to go offline */
  scheduleOfflineAt?: Maybe<Scalars["String"]>;
  /** Folder public URL or null when the folder is still converting. */
  publicUrl: Scalars["String"];
  /** A general purpose key-value metadata. Used, for example, in A/B testing to group variations together based on the key (category). */
  metatags?: Maybe<Array<Maybe<Metatag>>>;
};

/** Publication state */
export enum FolderState {
  /** Folder is not publicly visible. */
  Offline = "OFFLINE",
  /** Folder is publicly visible */
  Online = "ONLINE",
}

/** Metatag */
export type Metatag = {
  __typename?: "Metatag";
  /** ID */
  id: Scalars["Int"];
  /** Category, or, simply, the key */
  category: Scalars["String"];
  /** Value */
  value: Scalars["String"];
};

/** Company account */
export type CompanyAccount = {
  __typename?: "CompanyAccount";
  /** Member id */
  memberId?: Maybe<Scalars["Int"]>;
  /** Company name */
  companyName?: Maybe<Scalars["String"]>;
  /** Address */
  address?: Maybe<CompanyAccountAddress>;
};

/** Address */
export type CompanyAccountAddress = {
  __typename?: "CompanyAccountAddress";
  /** City */
  city?: Maybe<Scalars["String"]>;
  /** Street */
  street?: Maybe<Scalars["String"]>;
  /** House number */
  houseNumber?: Maybe<Scalars["String"]>;
};

/** A key-value pair */
export type KeyValue = {
  __typename?: "KeyValue";
  /** The key */
  key: Scalars["String"];
  /** The value */
  value: Scalars["KeyValueValue"];
};

/** Enum that represents type of the device that performs the mutation */
export enum PushNotificationsDeviceType {
  Ios = "IOS",
  Android = "ANDROID",
}

/** Input for the Sitespect push experiment */
export type PushNotificationsSitespectExperiment = {
  /** Sitespect experiment identifier */
  experimentId: Scalars["Int"];
  /** Sitespect variation group identifier */
  variationGroupId: Scalars["Int"];
};

/** Input for the pushtokenSaveToken mutation */
export type PushNotificationsTokenUpdateInput = {
  /** Push token used to send push notifications to the device */
  token: Scalars["String"];
  /** Type of the device */
  deviceType: PushNotificationsDeviceType;
  /** Public part of the RSA key pair used in push notification encryption/decryption */
  rsaKey?: Maybe<Scalars["String"]>;
  /** Version of the application */
  applicationVersion?: Maybe<Scalars["String"]>;
  /** Unique device identifier */
  deviceId?: Maybe<Scalars["String"]>;
};

/** This type represents specific for Android configuration settings for push notifications. */
export type AndroidConfigurationInput = {
  /** User has has given permission to display notifications for following notification channels. */
  enabledChannelIds: Array<Scalars["String"]>;
};

/** Available communication topics categories */
export type CommunicationCategories = {
  __typename?: "CommunicationCategories";
  /** Category representing the most important topics and groups */
  importantInformation: CommunicationCategory;
  /** Category representing additional topics and groups, might be empty for Belgium customers */
  additionalInformation?: Maybe<CommunicationCategory>;
};

/** Communication topic category */
export type CommunicationCategory = {
  __typename?: "CommunicationCategory";
  /** Ungrouped topics in this category */
  topics: Array<CommunicationTopicDescription>;
  /** Grouped topics in this category */
  groups: Array<CommunicationTopicGroup>;
};

export type CommunicationConsent = {
  __typename?: "CommunicationConsent";
  /** The member ID of the user that has given consent */
  memberId: Scalars["String"];
  /** The application that the topic is related to. E.g. AHWEBSHOP */
  application: Scalars["String"];
  /** The channel that the topic is related to. E.g. PUSH/EMAIL */
  channel: CommunicationConsentChannel;
  /** The name of the topic. E.g. ORDER_INFORMATION */
  topic: Scalars["String"];
};

/** Enum representing communication consent channel */
export enum CommunicationConsentChannel {
  /** Push channel */
  Push = "PUSH",
  /** Email channel */
  Email = "EMAIL",
}

/** This type represents the input for adding a communication consent. */
export type CommunicationConsentInput = {
  /** The channel of the consent. */
  channel: CommunicationConsentChannel;
  /** The topic of the consent. */
  topics: Array<Scalars["String"]>;
};

/** This type represents the response all communication consents for the current user. */
export type CommunicationConsentsResponse = {
  __typename?: "CommunicationConsentsResponse";
  /** The communication consents for the current user. */
  consents: Array<CommunicationConsent>;
};

/** Communication topic description that contains data that should be used for displaying particular topic */
export type CommunicationTopicDescription = {
  __typename?: "CommunicationTopicDescription";
  /** Technical topic name */
  name: Scalars["String"];
  /** Display topic name and text */
  description: CommunicationTopicsDisplayProperties;
  /** Display topic name and text in case loyalty is enabled, might be empty */
  loyaltyDescription?: Maybe<CommunicationTopicsDisplayProperties>;
  /** Whether the topic could be interacted with */
  userInteractionEnabled: Scalars["Boolean"];
  /** Whether member is subscribed to the topic */
  isMemberSubscribed: Scalars["Boolean"];
};

/** Entity that represents communication topics that are grouped and displayed in a separated block */
export type CommunicationTopicGroup = {
  __typename?: "CommunicationTopicGroup";
  /** Technical topics group name */
  name: Scalars["String"];
  /** Topics group display name */
  displayName: Scalars["String"];
  /** Topics inside this group */
  topics: Array<CommunicationTopicDescription>;
};

/** The response for the communicationTopicsDescription query */
export type CommunicationTopicsDescriptionResponse = {
  __typename?: "CommunicationTopicsDescriptionResponse";
  /** Communication topics categories */
  categories: CommunicationCategories;
  /** Communication topics channel */
  channel: CommunicationConsentChannel;
  /** Communication topics application */
  application: Scalars["String"];
};

/** Communication topic display properties, such as name and description */
export type CommunicationTopicsDisplayProperties = {
  __typename?: "CommunicationTopicsDisplayProperties";
  /** Topic display name */
  displayName: Scalars["String"];
  /** Topic display description */
  displayText: Scalars["String"];
};

/** Input representing Cookie Consent */
export type CookieConsentInput = {
  /** The unique identifier of a device that changed the cookie consent */
  deviceId: Scalars["String"];
  /** Array of the cookie consent levels */
  levels: Array<CookieConsentLevel>;
  /** Cookie consent version */
  version: CookieConsentVersionInput;
  /** ISO timestamp of cookie consent change event occurrence */
  eventTimestamp: Scalars["String"];
};

/** Enum that represents supported Cookie Consent levels */
export enum CookieConsentLevel {
  /** Social Media Cookie Consent level */
  SocialMedia = "SOCIAL_MEDIA",
  /** Personalized Cookie Consent level */
  Personalized = "PERSONALIZED",
}

/** Input representing Cookie Consent version */
export type CookieConsentVersionInput = {
  /** Major version part */
  major: Scalars["Int"];
  /** Minor version part */
  minor: Scalars["Int"];
};

/** This type represents properties of a device that sends its notification settings. */
export type DeviceInput = {
  /** The unique identifier of the device. */
  id: Scalars["String"];
  /** The operating system of the device. ANDROID or IOS. */
  operatingSystem: OperatingSystem;
  /** The type of the device. MOBILE or TABLET. */
  type: DeviceType;
};

/** This type represents device notification settings. */
export type DeviceNotificationSettingsInput = {
  /** The user has enabled notifications for the device. */
  enabledNotifications: Scalars["Boolean"];
  /** Device properties. */
  device: DeviceInput;
  /** Specific for iOS configuration settings for push notifications. */
  iosConfiguration?: Maybe<IosConfigurationInput>;
  /** Specific for Android configuration settings for push notifications. */
  androidConfiguration?: Maybe<AndroidConfigurationInput>;
};

/** This type represents device type. */
export enum DeviceType {
  Mobile = "MOBILE",
  Tablet = "TABLET",
}

/** This type represents specific for iOS configuration settings for push notifications. */
export type IosConfigurationInput = {
  /** The user has been already asked to enable notifications. */
  userAskedEnableNotifications: Scalars["Boolean"];
  /** The badge icon is displayed on the app icon. */
  isAppIconBadgeEnabled: Scalars["Boolean"];
};

/**
 * This type represents a communication topic. A topic is a specific type of message (e.g. track and trace) that is received
 * via a specific channel that a user can be subscribed to.
 */
export type NotificationChannel = {
  __typename?: "NotificationChannel";
  /** The ID of the channel */
  id: Scalars["String"];
  /** The name of the channel that should be displayed on UI */
  name: Scalars["String"];
  /** The importance of the channel. This controls how interruptive notifications posted to this channel are. Possible values in range 0-5 according to Android specification */
  importance: Scalars["Int"];
  /** The list of push types that are belonged to the channel E.g track-and-trace, order-cost-overview also could be empty */
  allowedPushTypes: Array<Scalars["String"]>;
};

/** This type represents the response for the availablePushNotificationChannels */
export type NotificationChannelsResponse = {
  __typename?: "NotificationChannelsResponse";
  /** All available push notification channels. */
  channels: Array<NotificationChannel>;
};

/** This type represents operating system. */
export enum OperatingSystem {
  Ios = "IOS",
  Android = "ANDROID",
}

/** Response on syncing Lifestyle Advice with the service */
export type AdviceMutationResult = {
  __typename?: "AdviceMutationResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** General error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Validation errors */
  errors?: Maybe<Array<LifestyleErrorResponse>>;
};

/** Answer to an Lifestylecheck Question */
export type Answer = {
  /** Technical identifier of the Answer */
  answerId: Scalars["String"];
  /** Count of drinks, only used for COUNTER type questions */
  count?: Maybe<Scalars["Int"]>;
};

/** Response on syncing Chapter Answers with the service */
export type ChapterMutationResult = {
  __typename?: "ChapterMutationResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** General error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Validation errors */
  errors?: Maybe<Array<LifestyleErrorResponse>>;
};

/** Response on syncing Intake Answers with the service, includes Lifestylecheck Chapter metas */
export type IntakeMutationResult = {
  __typename?: "IntakeMutationResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Validation errors */
  errors?: Maybe<Array<LifestyleErrorResponse>>;
  /** lifestyleCheckChapters meta data after performing the mutation */
  result?: Maybe<Array<LifestyleCheckChapterBasic>>;
};

/** Lifestyle Advice */
export type LifestyleAdvice = {
  __typename?: "LifestyleAdvice";
  /** Goal id */
  goalId: Scalars["String"];
  /** Goal name */
  goalName: Scalars["String"];
  /** Goal Image for the Goal chosen */
  goalImageUrl?: Maybe<Scalars["String"]>;
  /** Display title of entire Advice */
  title: Scalars["String"];
  /** Description of entire Advice */
  description: Scalars["String"];
  /** Minimum amount of Topics a user should select */
  minimumTopics: Scalars["Int"];
  /** Maximum amount of Topics a user may select */
  maximumTopics: Scalars["Int"];
  /** Chapters */
  chapters: Array<LifestyleAdviceChapter>;
  /** Ask confirmation */
  askConfirmation: Scalars["Boolean"];
};

/** Lifestyle Advice Chapter */
export type LifestyleAdviceChapter = {
  __typename?: "LifestyleAdviceChapter";
  /** Id */
  id: Scalars["String"];
  /** Header */
  header: Scalars["String"];
  /** Description */
  description: Scalars["String"];
  /** Info bubble text */
  infoText: Scalars["String"];
  /** Topics */
  topics: Array<LifestyleAdviceTopicResponse>;
};

/** Icon Type of LifestyleAdvice */
export enum LifestyleAdviceIconType {
  /** Vegetables */
  Vegetables = "VEGETABLES",
  /** Fruit */
  Fruit = "FRUIT",
  /** Wholewheat */
  Wholewheat = "WHOLEWHEAT",
  /** Drinks */
  Drinks = "DRINKS",
  /** Sugar */
  Sugar = "SUGAR",
  /** Fish */
  Fish = "FISH",
  /** Meat */
  Meat = "MEAT",
  /** Strength */
  Strength = "STRENGTH",
  /** Endurance */
  Endurance = "ENDURANCE",
  /** Sitting */
  Sitting = "SITTING",
  /** Bedtime */
  Bedtime = "BEDTIME",
  /** Fall asleep */
  FallAsleep = "FALL_ASLEEP",
  /** Shifts */
  Shifts = "SHIFTS",
  /** Breaks */
  Breaks = "BREAKS",
  /** Stress */
  Stress = "STRESS",
  /** Alcohol */
  Alcohol = "ALCOHOL",
  /** Smoking */
  Smoking = "SMOKING",
  /** Balance */
  Balance = "BALANCE",
}

/** Path of LifestyleAdvice */
export enum LifestyleAdvicePath {
  /** Lifestyle check */
  LifestyleCheck = "LIFESTYLE_CHECK",
  /** Hub */
  Hub = "HUB",
}

/** Label of LifestyleAdviceTopic */
export enum LifestyleAdviceTopicLabel {
  /** Advice */
  Advice = "ADVICE",
  /** Can improve */
  CanImprove = "CAN_IMPROVE",
  /** Okay */
  Okay = "OKAY",
}

/** Lifestyle Advice Topic */
export type LifestyleAdviceTopicResponse = {
  __typename?: "LifestyleAdviceTopicResponse";
  /** Topic display name */
  title: Scalars["String"];
  /** Identifier */
  id: Scalars["String"];
  /** Icon Type */
  iconType: LifestyleAdviceIconType;
  /** Label */
  label: LifestyleAdviceTopicLabel;
  /** Is Ticked by system as suggestion or selected by user in the past (depending on in which mode operation is used) */
  isTicked: Scalars["Boolean"];
  /** Image URL */
  imageUrl?: Maybe<Scalars["String"]>;
  /** Description */
  description: Scalars["String"];
  /** Deeplink */
  deeplink: Scalars["String"];
};

/** Lifestylecheck Chapter, full version */
export type LifestyleCheckChapter = {
  __typename?: "LifestyleCheckChapter";
  /** Technical identifier of the chapter */
  id: Scalars["String"];
  /** Current state of a member's LifestyleCheck chapter. */
  status: LifestyleCheckChapterStatus;
  /** Is this the last chapter? */
  isLastChapter: Scalars["Boolean"];
  /** One or more Chapter questions */
  questions: Array<LifestyleCheckQuestion>;
};

/** Lifestylecheck Chapter, meta version */
export type LifestyleCheckChapterBasic = {
  __typename?: "LifestyleCheckChapterBasic";
  /** Technical identifier of the chapter */
  id: Scalars["String"];
  /** Current state of a member's LifestyleCheck chapter. */
  status: LifestyleCheckChapterStatus;
  /** Header of the chapter */
  header: Scalars["String"];
  /** Description of the chapter */
  description: Scalars["String"];
  /** IconType of the chapter. Used to display the right icon. */
  iconType: LifestyleCheckChapterIconType;
};

/** Lifestylecheck Chapter Icon Type */
export enum LifestyleCheckChapterIconType {
  /** Chapter icon type for Food questions */
  Nutrition = "NUTRITION",
  /** Chapter icon type for Exercising questions */
  Exercising = "EXERCISING",
  /** Chapter icon type for Resting questions */
  Resting = "RESTING",
  /** Chapter icon type for Relaxation questions */
  Relaxation = "RELAXATION",
}

/** Lifestylecheck Chapter Score */
export type LifestyleCheckChapterScore = {
  __typename?: "LifestyleCheckChapterScore";
  /** Technical identifier of the chapter */
  chapterId: Scalars["String"];
  /** Header name of the chapter */
  name: Scalars["String"];
  /** Enum to determine which icon to display per chapter. */
  iconType: LifestyleCheckChapterIconType;
  /** Calculated average score of the chapter, based on questions answered in that chapter */
  averageScore: Scalars["Int"];
};

/** State of Lifestylecheck Chapter */
export enum LifestyleCheckChapterStatus {
  /** Member hasnt started the LifestyleCheck chapter yet */
  NotStarted = "NOT_STARTED",
  /** Member has finished the LifestyleCheck chapter */
  Finished = "FINISHED",
}

/** Lifestylecheck Counter Answer */
export type LifestyleCheckCounterAnswer = {
  __typename?: "LifestyleCheckCounterAnswer";
  /** Technical identifier of the answer */
  id: Scalars["String"];
  /** Answer to pick */
  answer: Scalars["String"];
  /** Image to display per answer. */
  imageUrl?: Maybe<Scalars["String"]>;
};

/** Lifestylecheck Counter Question */
export type LifestyleCheckCounterQuestion = LifestyleCheckQuestionBase & {
  __typename?: "LifestyleCheckCounterQuestion";
  /** Technical identifier of the question */
  id: Scalars["String"];
  /** Question to ask */
  question: Scalars["String"];
  /** Describing the question */
  description?: Maybe<Scalars["String"]>;
  /** Answers to the question */
  possibleAnswers: Array<LifestyleCheckCounterAnswer>;
  /** If member has already answered the question, this will be the answerId(s) (should be present in possibleAnswers) */
  selectedAnswers?: Maybe<Array<Maybe<LifestyleCheckSelectedAnswer>>>;
  /** If this question is the last question of the check, this will be true */
  isLastQuestion: Scalars["Boolean"];
};

/** Lifestylecheck Intake */
export type LifestyleCheckIntake = {
  __typename?: "LifestyleCheckIntake";
  /**
   * Image Header for the Introduction screen of the Lifestyle Check
   * @deprecated @sunset_date(2024-09-01) @removal
   * . .
   */
  headerImageUrl?: Maybe<Scalars["String"]>;
  /**
   * Title Header for the Introduction screen of the Lifestyle Check
   * @deprecated @sunset_date(2024-09-01) @removal
   * . .
   */
  header: Scalars["String"];
  /**
   * Body for the Introduction screen of the Lifestyle Check
   * @deprecated @sunset_date(2024-09-01) @removal
   * . .
   */
  body: Scalars["String"];
  /** One or more Intake questions */
  questions: Array<LifestyleCheckQuestion>;
  /** Current state of a member's LifestyleCheck Intake. To be used to determine if we should show the Introduction screen or not */
  status: LifestyleCheckIntakeStatus;
};

/** Lifestylecheck Intake Answer */
export type LifestyleCheckIntakeAnswer = {
  __typename?: "LifestyleCheckIntakeAnswer";
  /** Technical identifier of the answer */
  id: Scalars["String"];
  /** Answer to pick */
  answer: Scalars["String"];
  /** Enum to determine which icon to display per answer. */
  iconType: LifestyleCheckIntakeAnswerIconType;
  /** Image to display per answer. */
  imageUrl?: Maybe<Scalars["String"]>;
};

/** Lifestylecheck Intake Answer Icon Type */
export enum LifestyleCheckIntakeAnswerIconType {
  /** Intake Answer icon type for Scales option */
  Scales = "SCALES",
  /** Intake Answer icon type for Energy option */
  Energy = "ENERGY",
  /** Intake Answer icon type for Stamina option */
  Stamina = "STAMINA",
  /** Intake Answer icon type for Less Stress option */
  StressLess = "STRESS_LESS",
  /** Intake Answer icon type for Resting option */
  Resting = "RESTING",
  /** Intake Answer icon type for Healthy Aging option */
  HealthyAging = "HEALTHY_AGING",
  /** Intake Answer icon type for Unclear option */
  Unclear = "UNCLEAR",
}

/** Lifestylecheck Intake Question */
export type LifestyleCheckIntakeQuestion = LifestyleCheckQuestionBase & {
  __typename?: "LifestyleCheckIntakeQuestion";
  /** Technical identifier of the question */
  id: Scalars["String"];
  /** Question to ask */
  question: Scalars["String"];
  /** Additional information about the question */
  description?: Maybe<Scalars["String"]>;
  /** Answers to the question */
  possibleAnswers: Array<LifestyleCheckIntakeAnswer>;
  /** If member has already answered the question, this will be the answerId(s) (should be present in possibleAnswers) */
  selectedAnswers?: Maybe<Array<Maybe<LifestyleCheckSelectedAnswer>>>;
  /** If this question is the last question of the check, this will be true */
  isLastQuestion: Scalars["Boolean"];
};

/** State of Lifestylecheck Intake */
export enum LifestyleCheckIntakeStatus {
  /** Member hasnt started the LifestyleCheck intake yet */
  NotStarted = "NOT_STARTED",
  /** Member has finished the LifestyleCheck intake */
  Finished = "FINISHED",
}

/** Lifestylecheck Multi Select Answer */
export type LifestyleCheckMultiSelectAnswer = {
  __typename?: "LifestyleCheckMultiSelectAnswer";
  /** Technical identifier of the answer */
  id: Scalars["String"];
  /** Answer to pick */
  answer: Scalars["String"];
  /** Answer to pick */
  isExclusive: Scalars["Boolean"];
};

/** Lifestylecheck Multi Select Question */
export type LifestyleCheckMultiSelectQuestion = LifestyleCheckQuestionBase & {
  __typename?: "LifestyleCheckMultiSelectQuestion";
  /** Technical identifier of the question */
  id: Scalars["String"];
  /** Question to ask */
  question: Scalars["String"];
  /** Additional information about the question */
  description?: Maybe<Scalars["String"]>;
  /** Answers to the question */
  possibleAnswers: Array<LifestyleCheckMultiSelectAnswer>;
  /** If member has already answered the question, this will be the answerId(s) (should be present in possibleAnswers) */
  selectedAnswers?: Maybe<Array<Maybe<LifestyleCheckSelectedAnswer>>>;
  /** If this question is the last question of the check, this will be true */
  isLastQuestion: Scalars["Boolean"];
  /** Header Image */
  headerImageUrl?: Maybe<Scalars["String"]>;
  /** Default answer id */
  defaultAnswerId?: Maybe<Scalars["String"]>;
};

/** Lifestylecheck Navigation Intent */
export enum LifestyleCheckNavigationIntent {
  /** Lifestyle Hub, giving you all kinds of lifestyle information based on what you have told us about yourself */
  LifestyleHub = "LIFESTYLE_HUB",
  /** Lifestyle Check, a way for us get information about your lifestyle and give you advice on how to improve it */
  LifestyleCheck = "LIFESTYLE_CHECK",
  /** Lifestyle Check results, shortcut to go to the results of your Lifestyle Check */
  LifestyleResults = "LIFESTYLE_RESULTS",
  /** Lifestyle Check results, shortcut to go to the advice based on your Lifestyle Check results */
  LifestyleAdvice = "LIFESTYLE_ADVICE",
  /** Lifestyle Check deeplink, shortcut to go to the check based on your progression */
  LifestyleCheckDeeplink = "LIFESTYLE_CHECK_DEEPLINK",
}

/** Lifestylecheck Navigation Suggestion */
export enum LifestyleCheckNavigationSuggestion {
  /** Lifestyle Hub, locked version */
  HubLocked = "HUB_LOCKED",
  /** Lifestyle Hub, unlocked version */
  HubUnlocked = "HUB_UNLOCKED",
  /** Lifestyle Check introduction/opt-in screen */
  LifestyleCheckWelcome = "LIFESTYLE_CHECK_WELCOME",
  /** Lifestyle Check Chapter overview screen */
  LifestyleCheckChapters = "LIFESTYLE_CHECK_CHAPTERS",
  /** Lifestyle Check Results screen */
  LifestyleResultsDefault = "LIFESTYLE_RESULTS_DEFAULT",
  /** Lifestyle Check Results screen, with a different caption on the button */
  LifestyleResultsRestart = "LIFESTYLE_RESULTS_RESTART",
  /** Lifestyle Check Advice screen */
  LifestyleAdvice = "LIFESTYLE_ADVICE",
}

/** LifestyleCheck Question */
export type LifestyleCheckQuestion =
  | LifestyleCheckIntakeQuestion
  | LifestyleCheckMultiSelectQuestion
  | LifestyleCheckSingleSelectQuestion
  | LifestyleCheckSliderSelectQuestion
  | LifestyleCheckCounterQuestion;

/** Lifestylecheck Question Interface */
export type LifestyleCheckQuestionBase = {
  /** Technical identifier of the question */
  id: Scalars["String"];
  /** Question to ask */
  question: Scalars["String"];
  /** If member has already answered the question, this will be the answerId(s) (should be present in possibleAnswers) */
  selectedAnswers?: Maybe<Array<Maybe<LifestyleCheckSelectedAnswer>>>;
  /** If this question is the last question of the check, this will be true */
  isLastQuestion: Scalars["Boolean"];
};

/** Lifestylecheck Score */
export type LifestyleCheckScore = {
  __typename?: "LifestyleCheckScore";
  /** Goal chosen at the start of the LifestyleCheck during the intake */
  chosenGoal: Scalars["String"];
  /** Goal Image for the Goal chosen */
  goalImageUrl?: Maybe<Scalars["String"]>;
  /** Calculated average score of the check, based on average chapter scores */
  totalAverageScore: Scalars["Int"];
  /** Chapter scores */
  chapterScores: Array<LifestyleCheckChapterScore>;
};

/** Lifestylecheck Single Select Answer */
export type LifestyleCheckSelectedAnswer = {
  __typename?: "LifestyleCheckSelectedAnswer";
  /** Technical identifier of the answer */
  answerId: Scalars["String"];
  /** Count of drinks, only used for COUNTER type questions */
  count?: Maybe<Scalars["Int"]>;
};

/** Lifestylecheck Single Select Answer */
export type LifestyleCheckSingleSelectAnswer = {
  __typename?: "LifestyleCheckSingleSelectAnswer";
  /** Technical identifier of the answer */
  id: Scalars["String"];
  /** Answer to pick */
  answer: Scalars["String"];
};

/** Lifestylecheck Single Select Question */
export type LifestyleCheckSingleSelectQuestion = LifestyleCheckQuestionBase & {
  __typename?: "LifestyleCheckSingleSelectQuestion";
  /** Technical identifier of the question */
  id: Scalars["String"];
  /** Question to ask */
  question: Scalars["String"];
  /** Additional information about the question */
  description?: Maybe<Scalars["String"]>;
  /** Answers to the question */
  possibleAnswers: Array<LifestyleCheckSingleSelectAnswer>;
  /** If member has already answered the question, this will be the answerId(s) (should be present in possibleAnswers) */
  selectedAnswers?: Maybe<Array<Maybe<LifestyleCheckSelectedAnswer>>>;
  /** If this question is the last question of the check, this will be true */
  isLastQuestion: Scalars["Boolean"];
  /** Header Image */
  headerImageUrl?: Maybe<Scalars["String"]>;
  /** Default answer id */
  defaultAnswerId?: Maybe<Scalars["String"]>;
};

/** Lifestylecheck Slider Select Answer */
export type LifestyleCheckSliderSelectAnswer = {
  __typename?: "LifestyleCheckSliderSelectAnswer";
  /** Technical identifier of the answer */
  id: Scalars["String"];
  /** Answer to pick */
  answer: Scalars["String"];
  /** Answer Image url, replacement of the Image url on its parent question. */
  imageUrl?: Maybe<Scalars["String"]>;
};

/** Lifestylecheck Slider Select Question */
export type LifestyleCheckSliderSelectQuestion = LifestyleCheckQuestionBase & {
  __typename?: "LifestyleCheckSliderSelectQuestion";
  /** Technical identifier of the question */
  id: Scalars["String"];
  /** Question to ask */
  question: Scalars["String"];
  /** Additional information about the question */
  description?: Maybe<Scalars["String"]>;
  /** Answers to the question */
  possibleAnswers: Array<LifestyleCheckSliderSelectAnswer>;
  /** If member has already answered the question, this will be the answerId(s) (should be present in possibleAnswers) */
  selectedAnswers?: Maybe<Array<Maybe<LifestyleCheckSelectedAnswer>>>;
  /** If this question is the last question of the check, this will be true */
  isLastQuestion: Scalars["Boolean"];
  /**
   * Header Image
   * @deprecated @sunset_date(2024-10-21) @removal
   * . .
   */
  headerImageUrl?: Maybe<Scalars["String"]>;
  /** Default answer id */
  defaultAnswerId?: Maybe<Scalars["String"]>;
};

/** Lifestyle error Response */
export type LifestyleErrorResponse = {
  __typename?: "LifestyleErrorResponse";
  /** Error code */
  code: LifestyleErrors;
  /** Specific error message */
  message: Scalars["String"];
};

/** LifestyleErrors Enum */
export enum LifestyleErrors {
  /** Member Not Authenticated */
  MemberNotAuthenticated = "MEMBER_NOT_AUTHENTICATED",
}

/** Lifestyle Hub Info */
export type LifestyleGoalInfo = {
  __typename?: "LifestyleGoalInfo";
  /** Goal id */
  id: Scalars["String"];
  /** Goal name */
  name: Scalars["String"];
  /** Goal imageUrl */
  goalImageUrl?: Maybe<Scalars["String"]>;
};

/** Lifestyle Hub Info */
export type LifestyleHubInfo = {
  __typename?: "LifestyleHubInfo";
  /** Chosen goal in the LifestyleCheck, if present */
  goalInfo?: Maybe<LifestyleGoalInfo>;
  /** Lifestyle Topics. Either in the order of the member's advice topics or random/shuffled */
  topics: Array<LifestyleAdviceTopicResponse>;
};

/** Lifestyle Introduction Info containing welcome and legal fields */
export type LifestyleIntroduction = {
  __typename?: "LifestyleIntroduction";
  /** Lifestyle Welcome info */
  welcome: LifestyleWelcome;
  /** Lifestyle Legal info */
  legal: LifestyleLegal;
};

/** Lifestyle legal info */
export type LifestyleLegal = {
  __typename?: "LifestyleLegal";
  /** Lifestyle Legal title */
  title: Scalars["String"];
  /** Lifestyle Legal full text */
  text: Scalars["String"];
};

/** Lifestyle welcome info */
export type LifestyleWelcome = {
  __typename?: "LifestyleWelcome";
  /** Lifestyle Welcome header image */
  headerImageUrl?: Maybe<Scalars["String"]>;
  /** Lifestyle Welcome header */
  header: Scalars["String"];
  /** Lifestyle Welcome body */
  body: Scalars["String"];
  /** Lifestyle Legal introduction */
  legalIntro: Scalars["String"];
  /** Lifestyle USP's */
  uniqueSellingPoints: Array<Scalars["String"]>;
};

/** Customer provided/picked Answers to an Lifestylecheck Question */
export type QuestionAnswers = {
  /** Technical identifier of the Question */
  questionId: Scalars["String"];
  /** Chosen Answer(s) */
  answers: Array<Answer>;
};

/** The balance of the evalue account */
export type EvalueAccountBalance = {
  __typename?: "EvalueAccountBalance";
  /** The balance of the account. Can be negative */
  value?: Maybe<EvalueAccountBalanceAmount>;
  /** The amount reserved on the account */
  reserved?: Maybe<EvalueAccountBalanceAmount>;
  /** The amount available in the account */
  available?: Maybe<EvalueAccountBalanceAmount>;
};

/** Amount of the balance of the evalue account */
export type EvalueAccountBalanceAmount = {
  __typename?: "EvalueAccountBalanceAmount";
  /** The amount of the account balance */
  amount?: Maybe<Scalars["Float"]>;
  /** The formatted amount with units of the account balance */
  formatted?: Maybe<Scalars["String"]>;
};

/** Payment Transaction Currencies */
export enum EvalueCurrencyEnum {
  /** Euro - EUR */
  Eur = "EUR",
  /** POINTS */
  Points = "POINTS",
}

/** Evalue Transaction History */
export type EvalueTransactionHistory = {
  __typename?: "EvalueTransactionHistory";
  /** The list of transactions */
  transactions: Array<EvalueTransaction>;
};

/** Transaction Status */
export enum EvalueTransactionStatus {
  /** Transaction Status - RESERVED */
  Reserved = "RESERVED",
  /** Transaction Status - COMPLETED */
  Completed = "COMPLETED",
  /** Transaction Status - CANCELLED */
  Cancelled = "CANCELLED",
  /** Transaction Status - REFUNDED */
  Refunded = "REFUNDED",
  /** Transaction Status - EXPIRED */
  Expired = "EXPIRED",
}

/** Transaction Type */
export enum EvalueTransactionType {
  /** Deposit Transaction Type */
  Deposit = "DEPOSIT",
  /** Withdrawal Transaction Type */
  Withdrawal = "WITHDRAWAL",
}

/** Amount of the transaction */
export type TransactionAmountCurrency = {
  __typename?: "TransactionAmountCurrency";
  /** The amount of transaction */
  value: Scalars["Float"];
  /** The currency of transaction */
  currency: EvalueCurrencyEnum;
};

/** Transaction status enum */
export enum TransactionStatus {
  /** The transaction is completed */
  Completed = "COMPLETED",
  /** The transaction is reserved */
  Reserved = "RESERVED",
  /** The transaction is cancelled */
  Cancelled = "CANCELLED",
  /** The transaction is refunded */
  Refunded = "REFUNDED",
}

/** DigitalReceipt */
export type DigitalReceipt = {
  __typename?: "DigitalReceipt";
  /** The id of the receipt */
  id: Scalars["String"];
  /** The member id of the receipt */
  memberId?: Maybe<Scalars["String"]>;
  /** The bonus card id of the receipt */
  bonusCardId?: Maybe<Scalars["String"]>;
  /** The store info of the receipt */
  storeInfo?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The verifications of the receipt */
  verifications?: Maybe<Array<Maybe<DigitalReceiptVerification>>>;
  /** The products of the receipt */
  products?: Maybe<Array<Maybe<DigitalReceiptProduct>>>;
  /** The loyalty cards of the receipt */
  loyaltyCards?: Maybe<Array<Maybe<DigitalReceiptLoyaltyCard>>>;
  /** The coupons of the receipt */
  coupons?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The subtotal of the receipt */
  subtotalProducts: DigitalReceiptSubtotal;
  /** The footnotes of the receipt */
  footnotes?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The discounts of the receipt */
  discounts?: Maybe<Array<Maybe<DigitalReceiptDiscount>>>;
  /** The total discount of the receipt */
  discountTotal?: Maybe<Money>;
  /** The personal discount of the receipt */
  discountPersonal?: Maybe<Money>;
  /** The subtotal discount of the receipt */
  subtotalDiscount?: Maybe<Money>;
  /** The stamps of the receipt */
  stamps?: Maybe<DigitalReceiptStamps>;
  /** The total of the receipt */
  total: Money;
  /** The payments of the receipt */
  payments?: Maybe<Array<Maybe<DigitalReceiptPayment>>>;
  /** The change of the receipt */
  change?: Maybe<Money>;
  /** The giftCards of the receipt */
  giftCards?: Maybe<DigitalReceiptGiftCards>;
  /** The eftReceipt of the receipt */
  eftReceipt?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The vat of the receipt */
  vat?: Maybe<DigitalReceiptVat>;
  /** The promotion of the receipt */
  promotions?: Maybe<Array<Maybe<DigitalReceiptPromotion>>>;
  /** The transaction of the receipt */
  transaction: DigitalReceiptTransaction;
  /** The store additional info of the receipt */
  storeAdditionalInfo?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The errors of the receipt */
  errors?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The store address of the receipt */
  address?: Maybe<DigitalReceiptStoreAddress>;
  /** The store type of the receipt */
  storeType?: Maybe<DigitalReceiptStoreType>;
  /** The memberships of the receipt */
  memberships?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The return payment of the receipt */
  returnPayment?: Maybe<DigitalReceiptReturnPayment>;
};

/** DigitalReceiptActivation */
export type DigitalReceiptActivation = {
  __typename?: "DigitalReceiptActivation";
  /** The id of the activation */
  id: Scalars["String"];
  /** The name of the activation */
  name: Scalars["String"];
  /** The price of the activation */
  price?: Maybe<Money>;
  /** The status of the activation */
  status: Scalars["String"];
};

/** DigitalReceiptBalance */
export type DigitalReceiptBalance = {
  __typename?: "DigitalReceiptBalance";
  /** The id of the balance */
  id: Scalars["String"];
  /** The balance of the balance */
  balance: Money;
};

/** DigitalReceiptDiscount */
export type DigitalReceiptDiscount = {
  __typename?: "DigitalReceiptDiscount";
  /** The type of the discount */
  type: Scalars["String"];
  /** The name of the discount */
  name: Scalars["String"];
  /** The amount of the discount */
  amount: Money;
};

/** DigitalReceiptGiftCards */
export type DigitalReceiptGiftCards = {
  __typename?: "DigitalReceiptGiftCards";
  /** The balance of the giftcards */
  balance?: Maybe<Array<Maybe<DigitalReceiptBalance>>>;
  /** The amount of the giftcards */
  activations?: Maybe<Array<Maybe<DigitalReceiptActivation>>>;
};

/** DigitalReceiptIndicator */
export type DigitalReceiptIndicator = {
  __typename?: "DigitalReceiptIndicator";
  /** The name of the indicator */
  name: Scalars["String"];
  /** The discount of the indicator */
  discount?: Maybe<Scalars["String"]>;
  /** The percentage of the indicator */
  percentage?: Maybe<Scalars["Float"]>;
};

/** A single digital receipt. */
export type DigitalReceiptListItem = {
  __typename?: "DigitalReceiptListItem";
  /** id */
  id: Scalars["String"];
  /** The date and time of the receipt. */
  dateTime: Scalars["DateTime"];
  /** Total amount of the receipt. */
  totalAmount: Money;
  /** Address of the store where the receipt is issued. */
  storeAddress: DigitalReceiptStoreAddress;
};

/** DigitalReceiptLoyaltyCard */
export type DigitalReceiptLoyaltyCard = {
  __typename?: "DigitalReceiptLoyaltyCard";
  /** The id of the loyaltyCard */
  id: Scalars["String"];
  /** The card of the loyaltyCard */
  card: Scalars["String"];
};

/** DigitalReceiptPackageTax */
export type DigitalReceiptPackageTax = {
  __typename?: "DigitalReceiptPackageTax";
  /** The name of the packageTax */
  name: Scalars["String"];
  /** The amount of the packageTax */
  amount: Scalars["Int"];
  /** The currency of the pakcageTax */
  currency: Scalars["String"];
};

/**
 * A page containing Digital Receipts. This type also has a pagination object attached to it
 * with information on the pagination object that was passed along.
 */
export type DigitalReceiptPage = {
  __typename?: "DigitalReceiptPage";
  /** The pagination object with more information on this page's pagination object. */
  pagination: DigitalReceiptPagination;
  /**
   * The list of digital receipts on this page. Can be empty if there are no more receipts
   * given the input pagination parameters.
   */
  digitalReceipts: Array<DigitalReceiptListItem>;
};

/**
 * A pagination object containing information on the page of receipts that was
 * returned.
 */
export type DigitalReceiptPagination = {
  __typename?: "DigitalReceiptPagination";
  /**
   * The pagination session key. To be attached on subsequent calls to ensure that
   * receipts do not randomly jump in case of new receipts.
   */
  key: Scalars["String"];
  /** The limit of items on the page. */
  limit: Scalars["Int"];
  /** The offset of items on the page. */
  offset: Scalars["Int"];
  /** The total number of elements. */
  totalElements: Scalars["Int"];
};

/** DigitalReceiptPayment */
export type DigitalReceiptPayment = {
  __typename?: "DigitalReceiptPayment";
  /** The method of the payment */
  method: Scalars["String"];
  /** The amount of the payment */
  amount?: Maybe<Money>;
  /** The products of the payment */
  products?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** DigitalReceiptProduct */
export type DigitalReceiptProduct = {
  __typename?: "DigitalReceiptProduct";
  /** The id of the product */
  id: Scalars["Int"];
  /** The quantity of the product */
  quantity: Scalars["Float"];
  /** The weight of the product */
  weight?: Maybe<DigitalReceiptWeight>;
  /** The name of the product */
  name: Scalars["String"];
  /** The externalIds of the product */
  externalIds?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** The price of the product */
  price?: Maybe<Money>;
  /** The amount of the product */
  amount: Money;
  /** The deposit of the product */
  deposit?: Maybe<Money>;
  /** The indicators type of the product */
  indicators?: Maybe<Array<Maybe<DigitalReceiptIndicator>>>;
  /** The package tax of the product */
  packageTax?: Maybe<DigitalReceiptPackageTax>;
};

/** DigitalReceiptPromotion */
export type DigitalReceiptPromotion = {
  __typename?: "DigitalReceiptPromotion";
  /** The quantity of the promotion */
  quantity: Scalars["Int"];
  /** The name of the promotion */
  name: Scalars["String"];
};

/** DigitalReceiptReturnPayment */
export type DigitalReceiptReturnPayment = {
  __typename?: "DigitalReceiptReturnPayment";
  /** The method of the paymentReturn */
  method: Scalars["String"];
  /** The amount of the paymentReturn */
  amount: Money;
  /** The footnote of the paymentReturn */
  footnote?: Maybe<Scalars["String"]>;
};

/** DigitalReceiptStamps */
export type DigitalReceiptStamps = {
  __typename?: "DigitalReceiptStamps";
  /** The quantity of the stamps */
  quantity: Scalars["Int"];
  /** The amount of the stamps */
  amount: Money;
};

/** Address of the store where the receipt is issued. */
export type DigitalReceiptStoreAddress = {
  __typename?: "DigitalReceiptStoreAddress";
  /** The street of the store. */
  street: Scalars["String"];
  /** The house number of the store. */
  houseNumber: Scalars["String"];
  /** The postal code of the store. */
  postalCode: Scalars["String"];
  /** The city of the store. */
  city: Scalars["String"];
  /** The country code of the store. */
  countryCode: Scalars["String"];
};

/** The type of store */
export enum DigitalReceiptStoreType {
  /** etos store */
  EtosStore = "ETOS_STORE",
  /** etos franchise store */
  EtosFranchiseStore = "ETOS_FRANCHISE_STORE",
  /** albert heijn to go */
  AhTogo = "AH_TOGO",
  /** albert heijn */
  AhAlbert = "AH_ALBERT",
  /** albert heijn dntg */
  AhDntg = "AH_DNTG",
  /** albert heijn regular */
  AhRegular = "AH_REGULAR",
  /** albert heijn xl */
  AhXl = "AH_XL",
  /** albert heijn belgium */
  AhBelgium = "AH_BELGIUM",
  /** albert heijn regular old */
  AhRegularOld = "AH_REGULAR_OLD",
}

/** DigitalReceiptSubtotal */
export type DigitalReceiptSubtotal = {
  __typename?: "DigitalReceiptSubtotal";
  /** The quantity of the subtotal */
  quantity: Scalars["Int"];
  /** The amount of the subtotal */
  amount: Money;
};

/** DigitalReceiptTotal */
export type DigitalReceiptTotal = {
  __typename?: "DigitalReceiptTotal";
  /** The sales amount of the total */
  salesAmount: Money;
  /** The amount of the total */
  amount: Money;
};

/** DigitalReceiptTransaction */
export type DigitalReceiptTransaction = {
  __typename?: "DigitalReceiptTransaction";
  /** The store of the transaction */
  store: Scalars["Int"];
  /** The lane of the transaction */
  lane: Scalars["Int"];
  /** The id of the transaction */
  id: Scalars["Int"];
  /** The operator of the transaction */
  operator?: Maybe<Scalars["Int"]>;
  /** The DateTime of the transaction */
  dateTime: Scalars["String"];
};

/** DigitalReceiptVat */
export type DigitalReceiptVat = {
  __typename?: "DigitalReceiptVat";
  /** The levels of the vat */
  levels: Array<Maybe<DigitalReceiptVatLevel>>;
  /** The total of the vat */
  total: DigitalReceiptTotal;
};

/** DigitalReceiptVatLevel */
export type DigitalReceiptVatLevel = {
  __typename?: "DigitalReceiptVatLevel";
  /** The percentage of the vat */
  percentage: Scalars["Int"];
  /** The sales amount of the vat */
  salesAmount: Money;
  /** The amount of the vat */
  amount: Money;
};

/** DigitalReceiptVerification */
export type DigitalReceiptVerification = {
  __typename?: "DigitalReceiptVerification";
  /** The id of the verification */
  id: Scalars["Int"];
  /** The quantity of the verification */
  quantity: Scalars["Int"];
  /** The weight of the verification */
  weight?: Maybe<DigitalReceiptWeight>;
  /** The name of the verification */
  name: Scalars["String"];
  /** The amount of the verification */
  amount: Money;
  /** The discount percentage of the verification */
  discountPercentage?: Maybe<Scalars["Int"]>;
};

/** DigitalReceiptWeight */
export type DigitalReceiptWeight = {
  __typename?: "DigitalReceiptWeight";
  /** The amount of the weight */
  amount: Scalars["Float"];
  /** The unit of the weight */
  unit: Scalars["String"];
};

/** Result after deleting an Offline Receipt */
export type OfflineReceiptMutationResult = MutationResult & {
  __typename?: "OfflineReceiptMutationResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** id of the deleted receipt if applicable */
  receiptId?: Maybe<Scalars["String"]>;
};

/** Type of items in the basket */
export type BasketItemInput = {
  /** Product id */
  productId: Scalars["Int"];
  /** Quantity of items in the basket */
  quantity: Scalars["Int"];
  /** Position of the item in the basket */
  position: Scalars["Int"];
};

/** Bonus filter types. When passed it allows to filter products that have bonus price of specified type */
export enum BonusFilterType {
  /** Default filter */
  None = "NONE",
  /** All bonus types */
  All = "ALL",
  /** Mass bonus type */
  Mass = "MASS",
  /** Store bonus type */
  Store = "STORE",
  /** Etos bonus type */
  Etos = "ETOS",
  /** Personal bonus type */
  Personal = "PERSONAL",
  /** Spotlight bonus type */
  Spotlight = "SPOTLIGHT",
}

/** Product model */
export type Model = {
  __typename?: "Model";
  /** Model name */
  name?: Maybe<Scalars["String"]>;
  /** Model version */
  version?: Maybe<Scalars["String"]>;
};

/** product availability */
export type ProductAvailability = {
  __typename?: "ProductAvailability";
  /**
   * Presence of `productId` simplifies handling the fetched data when availabilities for multiple products were requested
   * from the `availability-facade` at once.
   */
  productId?: Maybe<Scalars["Int"]>;
  /** is the product orderable for this user */
  isOrderable: Scalars["Boolean"];
  /** is the product visible for this user */
  isVisible: Scalars["Boolean"];
  /** online availability */
  online: ProductAvailabilityIndication;
  /** offline availability */
  offline: ProductAvailabilityIndication;
  /** if unavailable for order, this field is filled */
  unavailableForOrder?: Maybe<ProductUnavailableForOrderIndication>;
  /**
   * Label if the product is unavailable
   *
   * eg: Vandaag besteld, vanaf zondag in huis
   */
  availabilityLabel?: Maybe<Scalars["String"]>;
  /**
   * Maximum amount of units you can have in one order
   *
   * eg: 6 if you can only add 6 beer crates to your order
   */
  maxUnits?: Maybe<Scalars["Int"]>;
};

/** indication of the availability of a product */
export type ProductAvailabilityIndication = {
  __typename?: "ProductAvailabilityIndication";
  /** availability status */
  status: ProductAvailabilityStatus;
  /** optional: date when is the product available again YYYY-MM-DD */
  availableFrom?: Maybe<Scalars["String"]>;
};

/** availability status */
export enum ProductAvailabilityStatus {
  /** available */
  Available = "AVAILABLE",
  /** available in the future */
  FutureAssortment = "FUTURE_ASSORTMENT",
  /** no longer available */
  OutOfAssortment = "OUT_OF_ASSORTMENT",
  /** not in assortment */
  NotInAssortment = "NOT_IN_ASSORTMENT",
  /** will go out of assortment */
  WillGoOutOfAssortment = "WILL_GO_OUT_OF_ASSORTMENT",
  /** in assortment */
  InAssortment = "IN_ASSORTMENT",
  /** not at this pickup point */
  NotAtThisPickupPoint = "NOT_AT_THIS_PICKUP_POINT",
  /** out of stock */
  OutOfStock = "OUT_OF_STOCK",
  /** offered from */
  OfferedFrom = "OFFERED_FROM",
}

/** A product brand */
export type ProductBrand = {
  __typename?: "ProductBrand";
  /** Human readable brand name */
  title: Scalars["String"];
  /** Sanitized brand name */
  name: Scalars["String"];
  /** Amount of products under this brand name */
  count: Scalars["Int"];
};

/**
 * Input type for the productCrossSellsV2 query
 * V2 endpoint filters out unavailable products whereas V1 does not
 */
export type ProductCrossSellsV2Input = {
  /** Product id */
  productId: Scalars["Int"];
  /** Items currently in the basket */
  basketItems?: Maybe<Array<BasketItemInput>>;
  /** ID of the experiment */
  experimentId?: Maybe<Scalars["String"]>;
  /** Amount of products to return */
  limit: Scalars["Int"];
  /** Offset of products to return */
  offset: Scalars["Int"];
  /** Treshold to determine the propensity score */
  propensityTreshold?: Maybe<Scalars["Float"]>;
  /** Enable cross-sells based on propensity */
  propensityFilter?: Maybe<Scalars["Boolean"]>;
};

/** Possible product icons */
export enum ProductIcon {
  /** Price favorite */
  PriceFavorite = "PRICE_FAVORITE",
  /** Vegetarion */
  Vegetarian = "VEGETARIAN",
  /** Vega */
  Vegan = "VEGAN",
  /** Locally produced */
  LocallyProduced = "LOCALLY_PRODUCED",
  /** Organic */
  Organic = "ORGANIC",
  /** Frozen */
  Frozen = "FROZEN",
  /** Bake off */
  BakeOff = "BAKE_OFF",
  /** New */
  New = "NEW",
  /** Discount pack */
  DiscountPack = "DISCOUNT_PACK",
  /** Prize winner */
  PrizeWinner = "PRIZE_WINNER",
  /** XL store */
  XlStore = "XL_STORE",
  /**
   * Available in store property
   * Temporarily used for availability label on mobile
   */
  AvailableInStore = "AVAILABLE_IN_STORE",
  /** Nutri-score A */
  NutriscoreA = "NUTRISCORE_A",
  /** Nutri-score B */
  NutriscoreB = "NUTRISCORE_B",
  /** Nutri-score C */
  NutriscoreC = "NUTRISCORE_C",
  /** Nutri-score D */
  NutriscoreD = "NUTRISCORE_D",
  /** Nutri-score E */
  NutriscoreE = "NUTRISCORE_E",
}

/** Each product is expected to have 1 or more image(s)/angle(s) associated with it. */
export type ProductImage = {
  __typename?: "ProductImage";
  /** Angle of the image */
  angle: ProductImageAngle;
  /** Small version of the image (normally 200x200 px) */
  small?: Maybe<ProductImageRendition>;
  /** Medium version of the image (normally 400x400 px) */
  medium?: Maybe<ProductImageRendition>;
  /** Large version of the image (normally 800x800 px) */
  large?: Maybe<ProductImageRendition>;
};

/** What angles are available for a product image */
export enum ProductImageAngle {
  /** packshot voorkant / packshot frontside */
  Angle_2D1 = "ANGLE_2D1",
  /** A multi-angle image */
  Angle_4D1 = "ANGLE_4D1",
  /** A multi-angle image */
  Angle_4D2 = "ANGLE_4D2",
  /** A multi-angle image */
  Angle_4D3 = "ANGLE_4D3",
  /** A multi-angle image */
  Angle_4D4 = "ANGLE_4D4",
  /** A multi-angle image */
  Angle_4D5 = "ANGLE_4D5",
  /** A multi-angle image */
  Angle_4D6 = "ANGLE_4D6",
  /** A multi-angle image */
  Angle_4D7 = "ANGLE_4D7",
  /** A multi-angle image */
  Angle_5D1 = "ANGLE_5D1",
  /** A multi-angle image */
  Angle_5D2 = "ANGLE_5D2",
  /** A multi-angle image */
  Angle_5D3 = "ANGLE_5D3",
  /** The hero image. To be used on the product detail page. */
  Hero = "HERO",
}

/** Each product is expected to have 1 or more images associated with it. */
export type ProductImageMulti = {
  __typename?: "ProductImageMulti";
  /** Angle of the image */
  angle: ProductImageAngle;
  /** Small version of the image (normally 200x200 px) */
  small?: Maybe<ProductImageRendition>;
  /** Medium version of the image (normally 400x400 px) */
  medium?: Maybe<ProductImageRendition>;
  /** Large version of the image (normally 800x800 px) */
  large?: Maybe<ProductImageRendition>;
};

/** The minimal description of a product image that includes the URL, width and height */
export type ProductImageRendition = {
  __typename?: "ProductImageRendition";
  /** Product image width */
  width: Scalars["Int"];
  /** Product image height */
  height: Scalars["Int"];
  /** An URL to fetch the product image from. */
  url: Scalars["String"];
};

/**
 * Image renditions returned by the product image processor
 * in the form of D<width>x<height>
 */
export enum ProductImageRenditions {
  /** width: 200, height: 200 */
  D200X200 = "D200X200",
  /** width: 400, height: 400 */
  D400X400 = "D400X400",
  /** width: 800, height: 800 */
  D800X800 = "D800X800",
}

/** Each product can have properties */
export type ProductProperty = {
  __typename?: "ProductProperty";
  /** property code (eg: 'np_etos') */
  code: Scalars["String"];
  /** property values (eg: ['A', 'B']) */
  values: Array<Scalars["String"]>;
  /**
   * property icon (eg: 'PRICE_FAVORITE')
   * @deprecated @sunset_date(2024-10-14) Not all the icons are property based
   * . Use `product.icons` instead.
   */
  icon?: Maybe<ProductPropertyIcon>;
};

/** Possible product property icons */
export enum ProductPropertyIcon {
  /** Price favorite */
  PriceFavorite = "PRICE_FAVORITE",
  /** Vegetarion */
  Vegetarian = "VEGETARIAN",
  /** Vega */
  Vegan = "VEGAN",
  /** Locally produced */
  LocallyProduced = "LOCALLY_PRODUCED",
  /** Organic */
  Organic = "ORGANIC",
  /** Frozen */
  Frozen = "FROZEN",
  /** Bake off */
  BakeOff = "BAKE_OFF",
  /** New */
  New = "NEW",
  /** Discount pack */
  DiscountPack = "DISCOUNT_PACK",
  /** Prize winner */
  PrizeWinner = "PRIZE_WINNER",
  /** XL store */
  XlStore = "XL_STORE",
}

/** Purchase history */
export type ProductPurchaseHistory = {
  __typename?: "ProductPurchaseHistory";
  /** Total number of ALL user's previous purchases */
  total: Scalars["Int"];
  /** List of products returned based on page size and page number requested */
  products: Array<Product>;
};

/** Result of removing products from the purchase history */
export type ProductPurchaseHistoryResult = MutationResult & {
  __typename?: "ProductPurchaseHistoryResult";
  /** Whether mutation succeeded, failed completely or partially */
  status: MutationResultStatus;
  /** Relevant error message if applicable */
  errorMessage?: Maybe<Scalars["String"]>;
  /** Number of products that were removed from the purchase history */
  hiddenProducts?: Maybe<Scalars["Int"]>;
};

/** Product recommendations */
export type ProductRecommendations = {
  __typename?: "ProductRecommendations";
  /** Model */
  model?: Maybe<Model>;
  /** Product ids */
  products?: Maybe<Array<Product>>;
};

/**
 * Product search input
 *
 * This is a temporary alternative for the old basketProductCardsByName query.
 * Should be replaced by a proper ProductSearch when it is available.
 */
export type ProductSearchInput = {
  /** Search query */
  query?: Maybe<Scalars["String"]>;
  /** Date used for availability. Determines when products become orderable and what they cost. Default is referenceDate. */
  viewDate?: Maybe<Scalars["String"]>;
  /** Order ID for context */
  orderId?: Maybe<Scalars["Int"]>;
  /** Results page you want to retrieve (0..N) */
  page?: Maybe<Scalars["Int"]>;
  /** Number of records per page. */
  size?: Maybe<Scalars["Int"]>;
  /** Is the product available online */
  availableOnline?: Maybe<Scalars["Boolean"]>;
  /** Did the user bought this product previously */
  previouslyBought?: Maybe<Scalars["Boolean"]>;
  /** Properties of the product to search on, eg: Biologisch */
  properties?: Maybe<Array<Scalars["String"]>>;
  /** Filters products that have bonusPrice of specified bonus type */
  bonus?: Maybe<BonusFilterType>;
  /** Filters products that are a part of these taxonomy ids */
  taxonomyId?: Maybe<Array<Scalars["Int"]>>;
  /** Filters products that are in stock */
  inStock?: Maybe<Scalars["Boolean"]>;
  /** Filters products based on webshopid */
  webshopId?: Maybe<Array<Scalars["Int"]>>;
  /** bonusPeriodStartDate */
  bonusPeriodStartDate?: Maybe<Scalars["String"]>;
  /** bonusPeriodEndDate */
  bonusPeriodEndDate?: Maybe<Scalars["String"]>;
  /** referenceDate */
  referenceDate?: Maybe<Scalars["String"]>;
};

/** Result type for productSearch query */
export type ProductSearchResult = {
  __typename?: "ProductSearchResult";
  /** Page information */
  page: ProductSearchResultPage;
  /** Found products */
  products: Array<Product>;
};

/** Pagination details for productSearch */
export type ProductSearchResultPage = {
  __typename?: "ProductSearchResultPage";
  /** Page size */
  pageSize: Scalars["Int"];
  /** Page number */
  pageNumber: Scalars["Int"];
  /** Total pages */
  totalPages: Scalars["Int"];
  /** Total found elements */
  totalElements: Scalars["Int"];
};

/** Possible product shop types */
export enum ProductShopType {
  /** Albert Heijn shop */
  Ah = "AH",
  /** Etos shop */
  Et = "ET",
  /** Gall shop */
  Ga = "GA",
}

/** A product taxonomy */
export type ProductTaxonomy = {
  __typename?: "ProductTaxonomy";
  /** id of the taxonomy */
  id: Scalars["Int"];
  /** name of the taxonomy */
  name: Scalars["String"];
  /** slugified version of the taxonomy name */
  slug: Scalars["String"];
  /** indicator if the taxonomy is visible of the user or not */
  active: Scalars["Boolean"];
  /** parent ids of the current taxonomy */
  parents?: Maybe<Array<Scalars["Int"]>>;
  /** children ids of the current taxonomy */
  children?: Maybe<Array<Scalars["Int"]>>;
  /** Top-level taxonomy image. Empty in case of a sub-level taxonomy. */
  topLevelImage?: Maybe<Scalars["String"]>;
  /** Total amount of products associated with the taxonomy (including sample products) */
  totalProductCount: Scalars["Int"];
  /**
   * When it's needed to represent a taxonomy by just one product, this should be the product to use.
   * E.g. images of this product can be used to decorate a button taking the user to a taxonomy.
   * NB: `coverProduct` can be `null` in many cases, please read documentation of a corresponding request
   * TODO: find out whether @cacheControl here makes sense (given that we compute `coverProduct` manually
   */
  coverProduct?: Maybe<Product>;
  /** Products associated with the taxonomy */
  products: Array<Maybe<Product>>;
  /** True for age restricted products, such as alcohol. */
  ageCheck?: Maybe<Scalars["Boolean"]>;
};

/** Trade item info */
export type ProductTradeItem = {
  __typename?: "ProductTradeItem";
  /** A product GLN code */
  gln?: Maybe<Scalars["String"]>;
  /** A product GTIN code */
  gtin?: Maybe<Scalars["String"]>;
  /** Revisions of a product GTIN code */
  gtinRevisions: Array<Scalars["String"]>;
  /** Descriptions for the product */
  description?: Maybe<ProductTradeItemDescription>;
  /** Package content specific information */
  contents?: Maybe<ProductTradeItemContents>;
  /** Ingredient data */
  ingredients?: Maybe<ProductTradeItemIngredients>;
  /** Nutrition data */
  nutritions?: Maybe<Array<ProductTradeItemNutrition>>;
  /** Feeding instructions */
  feedingInstructions?: Maybe<ProductTradeItemFeedingInstructions>;
  /** Usage instructions */
  usage?: Maybe<ProductTradeItemUsage>;
  /** Storage information */
  storage?: Maybe<ProductTradeItemStorage>;
  /** Origin information */
  origin?: Maybe<ProductTradeItemOrigin>;
  /** Contact information */
  contact?: Maybe<ProductTradeItemContact>;
  /** Additional information */
  additionalInfo?: Maybe<ProductTradeItemAdditionalInfo>;
  /** Resources (icons and attachments) */
  resources?: Maybe<ProductTradeItemResources>;
  /** Marketing info */
  marketing?: Maybe<ProductTradeItemMarketing>;
};

/** Additional info */
export type ProductTradeItemAdditionalInfo = {
  __typename?: "ProductTradeItemAdditionalInfo";
  /** Sales conditions */
  salesConditions: Array<Scalars["String"]>;
  /** Identification numbers */
  identificationNumbers: Array<ProductTradeItemIdentificationNumber>;
  /** Certification numbers */
  certificationNumbers: Array<Scalars["String"]>;
};

/** Contact communication channel */
export type ProductTradeItemCommunicationChannel = {
  __typename?: "ProductTradeItemCommunicationChannel";
  /** Type */
  type?: Maybe<ProductTradeItemCommunicationChannelType>;
  /** Value */
  value?: Maybe<Scalars["String"]>;
};

/** Communication channel type */
export enum ProductTradeItemCommunicationChannelType {
  /** Email */
  Email = "EMAIL",
  /** Fax */
  Fax = "FAX",
  /** Telephone */
  Telephone = "TELEPHONE",
  /** Website */
  Website = "WEBSITE",
  /** Social media */
  SocialMedia = "SOCIAL_MEDIA",
}

/** Contact */
export type ProductTradeItemContact = {
  __typename?: "ProductTradeItemContact";
  /** Name */
  name?: Maybe<Scalars["String"]>;
  /** Address */
  address?: Maybe<Scalars["String"]>;
  /** Communication channels */
  communicationChannels?: Maybe<
    Array<Maybe<ProductTradeItemCommunicationChannel>>
  >;
};

/** Contents data */
export type ProductTradeItemContents = {
  __typename?: "ProductTradeItemContents";
  /** Net contents */
  netContents: Array<Scalars["String"]>;
  /** Serving size */
  servingSize?: Maybe<Scalars["String"]>;
  /** Drained weight */
  drainedWeight?: Maybe<Scalars["String"]>;
  /** Servings per package */
  servingsPerPackage?: Maybe<Scalars["String"]>;
  /** Statement */
  statement?: Maybe<Scalars["String"]>;
  /** E-mark */
  eMark: Scalars["Boolean"];
};

/** A generic product definition */
export type ProductTradeItemDefinition = {
  __typename?: "ProductTradeItemDefinition";
  /** The label */
  value: Scalars["String"];
  /** The value */
  label: Scalars["String"];
};

/** Generic product descriptions */
export type ProductTradeItemDescription = {
  __typename?: "ProductTradeItemDescription";
  /** Descriptions */
  descriptions: Array<Scalars["String"]>;
  /** Definitions */
  definitions?: Maybe<ProductTradeItemDescriptionDefinitions>;
};

/** Descriptive definitions, i.e. regarding alcohol or animal type */
export type ProductTradeItemDescriptionDefinitions = {
  __typename?: "ProductTradeItemDescriptionDefinitions";
  /** Dosage form */
  dosageForm?: Maybe<Scalars["String"]>;
  /** Percentage of alcohol */
  percentageOfAlcohol?: Maybe<Scalars["String"]>;
  /** Sun protection factor */
  sunProtectionFactor?: Maybe<Scalars["String"]>;
  /** Fish catch info */
  fishCatchInfo?: Maybe<Scalars["String"]>;
  /** Fish catch method */
  fishCatchMethod?: Maybe<Scalars["String"]>;
  /** Animal type */
  animalType?: Maybe<Scalars["String"]>;
  /** Animal feed type */
  animalFeedType?: Maybe<Scalars["String"]>;
};

/** Feedings instructions */
export type ProductTradeItemFeedingInstructions = {
  __typename?: "ProductTradeItemFeedingInstructions";
  /** Statement */
  statement?: Maybe<Scalars["String"]>;
};

/** Identification number */
export type ProductTradeItemIdentificationNumber = {
  __typename?: "ProductTradeItemIdentificationNumber";
  /** Type */
  type?: Maybe<Scalars["String"]>;
  /** Label */
  label?: Maybe<Scalars["String"]>;
  /** Value */
  value?: Maybe<Scalars["String"]>;
};

/** Ingredient allergens data */
export type ProductTradeItemIngredientAllergens = {
  __typename?: "ProductTradeItemIngredientAllergens";
  /** List */
  list?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Contains */
  contains?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** May contain */
  mayContain?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Free from */
  freeFrom?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** Ingredients data */
export type ProductTradeItemIngredients = {
  __typename?: "ProductTradeItemIngredients";
  /** Allergens */
  allergens?: Maybe<ProductTradeItemIngredientAllergens>;
  /** Statement */
  statement?: Maybe<Scalars["String"]>;
  /** Non-food ingredient statement */
  nonfoodIngredientStatement?: Maybe<Scalars["String"]>;
  /** Animal feeding */
  animalFeeding?: Maybe<ProductTradeItemIngredientsAnimalFeeding>;
};

/** Ingredients animal feeding data */
export type ProductTradeItemIngredientsAnimalFeeding = {
  __typename?: "ProductTradeItemIngredientsAnimalFeeding";
  /** Statement */
  statement?: Maybe<Scalars["String"]>;
  /** Analytical constituents */
  analyticalConstituents?: Maybe<Scalars["String"]>;
  /** Additives */
  additives?: Maybe<Scalars["String"]>;
};

/** Marketing data */
export type ProductTradeItemMarketing = {
  __typename?: "ProductTradeItemMarketing";
  /** Features */
  features: Array<Maybe<Scalars["String"]>>;
  /** Description */
  description?: Maybe<Scalars["String"]>;
};

/** Info about one specific nutrient */
export type ProductTradeItemNutrient = {
  __typename?: "ProductTradeItemNutrient";
  /** Type */
  type: Scalars["String"];
  /** Name */
  name: Scalars["String"];
  /** Value */
  value: Scalars["String"];
  /** Superscript */
  superscript?: Maybe<Scalars["Int"]>;
  /** Daily value */
  dailyValue?: Maybe<Scalars["String"]>;
};

/** Nutrition data */
export type ProductTradeItemNutrition = {
  __typename?: "ProductTradeItemNutrition";
  /** Daily value intake reference */
  dailyValueIntakeReference?: Maybe<Scalars["String"]>;
  /** Nutrients */
  nutrients?: Maybe<Array<Maybe<ProductTradeItemNutrient>>>;
  /** Serving size */
  servingSize?: Maybe<Scalars["String"]>;
  /** Serving size description */
  servingSizeDescription?: Maybe<Scalars["String"]>;
  /** Preparation state */
  preparationState?: Maybe<Scalars["String"]>;
  /** Additional info */
  additionalInfo?: Maybe<Array<Maybe<ProductTradeItemDefinition>>>;
  /** Basis quantity */
  basisQuantity?: Maybe<Scalars["String"]>;
  /** Basis quantity description */
  basisQuantityDescription?: Maybe<Scalars["String"]>;
};

/** Origin data */
export type ProductTradeItemOrigin = {
  __typename?: "ProductTradeItemOrigin";
  /** Provenance */
  provenance?: Maybe<Array<Scalars["String"]>>;
  /** Activities */
  activities?: Maybe<ProductTradeItemOriginActivities>;
};

/** Origin activities */
export type ProductTradeItemOriginActivities = {
  __typename?: "ProductTradeItemOriginActivities";
  /** Rearing */
  rearing?: Maybe<Array<Scalars["String"]>>;
  /** Birth */
  birth?: Maybe<Array<Scalars["String"]>>;
  /** Slaughter */
  slaughter?: Maybe<Array<Scalars["String"]>>;
};

/** Resource attachment */
export type ProductTradeItemResourceAttachment = {
  __typename?: "ProductTradeItemResourceAttachment";
  /** Name */
  name: Scalars["String"];
  /** Format */
  format: Scalars["String"];
  /** Type */
  type: Scalars["String"];
  /** Value */
  value: Scalars["String"];
};

/** Resource icon */
export type ProductTradeItemResourceIcon = {
  __typename?: "ProductTradeItemResourceIcon";
  /** Type */
  type: ProductTradeItemResourceIconType;
  /** ID */
  id: Scalars["String"];
  /** Title */
  title: Scalars["String"];
  /** Meta */
  meta?: Maybe<Scalars["ProductTradeItemResourceIconMeta"]>;
};

/** Resource icon type */
export enum ProductTradeItemResourceIconType {
  /** Danger */
  Danger = "DANGER",
  /** Regulated */
  Regulated = "REGULATED",
  /** Registered */
  Registered = "REGISTERED",
  /** Diet allergen */
  DietAllergen = "DIET_ALLERGEN",
  /** Free from */
  FreeFrom = "FREE_FROM",
  /** Additional */
  Additional = "ADDITIONAL",
}

/** Resources */
export type ProductTradeItemResources = {
  __typename?: "ProductTradeItemResources";
  /** Attachments */
  attachments?: Maybe<Array<Maybe<ProductTradeItemResourceAttachment>>>;
  /** Icons */
  icons?: Maybe<Array<Maybe<ProductTradeItemResourceIcon>>>;
};

/** Storage data */
export type ProductTradeItemStorage = {
  __typename?: "ProductTradeItemStorage";
  /** Instructions */
  instructions?: Maybe<Array<Scalars["String"]>>;
  /** Life span */
  lifeSpan?: Maybe<Array<Scalars["String"]>>;
};

/** Instructions, suggestions and statements about product usage */
export type ProductTradeItemUsage = {
  __typename?: "ProductTradeItemUsage";
  /** Instructions */
  instructions?: Maybe<Array<Scalars["String"]>>;
  /** Age description */
  ageDescription?: Maybe<Scalars["String"]>;
  /** Serving suggestion */
  servingSuggestion?: Maybe<Scalars["String"]>;
  /**
   * Preparation instructions
   * FIXME: `preparationInstructions` type here diverges from the type in `ah-products`.
   * FIXME: @See CDS-21929
   */
  preparationInstructions?: Maybe<Array<UsageWithExtra>>;
  /** Dosage instructions */
  dosageInstructions?: Maybe<Array<Scalars["String"]>>;
  /** Precautions */
  precautions?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** Warnings */
  warnings?: Maybe<Array<Scalars["String"]>>;
  /** Hazard statements */
  hazardStatements?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /**
   * Signal word
   * @deprecated @sunset_date(2024-03-26) Use signalWords field because there can be multiple ghsDetails
   * . .
   */
  signalWord?: Maybe<Scalars["String"]>;
  /** Signal words */
  signalWords?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** During pregnancy */
  duringPregnancy?: Maybe<Scalars["String"]>;
  /** During breast feeding */
  duringBreastFeeding?: Maybe<Scalars["String"]>;
  /** Instruct the consumer to wash their hands after handling a poultry product with this property set to `true`. */
  bacteriaWarning?: Maybe<Scalars["Boolean"]>;
};

/** indication of the availability of a product */
export type ProductUnavailableForOrderIndication = {
  __typename?: "ProductUnavailableForOrderIndication";
  /** availability status */
  status: ProductUnavailableReason;
  /** optional: date when is the product available again YYYY-MM-DD */
  availableFrom?: Maybe<Scalars["String"]>;
};

/** reason why the product is unavailable */
export enum ProductUnavailableReason {
  /** product will come available but is not yet available */
  FutureAssortment = "FUTURE_ASSORTMENT",
  /** product is for pickup but not for this location */
  NotAtThisPickupPoint = "NOT_AT_THIS_PICKUP_POINT",
  /** product is not for pickup */
  NotForPickup = "NOT_FOR_PICKUP",
  /** product is not longer availabile (online) */
  NoLongerOnline = "NO_LONGER_ONLINE",
  /** product is not longer availabile (online and offline) */
  OutOfAssortment = "OUT_OF_ASSORTMENT",
  /** product is not availability online */
  ShopOnly = "SHOP_ONLY",
  /** product is sold out */
  SoldOut = "SOLD_OUT",
}

/** Variant (e.g. wine by the case vs wine per bottle) */
export type ProductVariant = {
  __typename?: "ProductVariant";
  /** Product variant type */
  type: ProductVariantType;
  /** Label for this variant ('doos', '4 personen') */
  label: Scalars["String"];
  /** The product of the variant */
  product: Product;
};

/** Product variant type */
export enum ProductVariantType {
  /** Primary type (the bottle of wine) */
  Primary = "PRIMARY",
  /** Secondary type (the case of bottles of wine) */
  Secondary = "SECONDARY",
}

/** Product virtual bundle item */
export type ProductVirtualBundleItem = {
  __typename?: "ProductVirtualBundleItem";
  /** Quantity of bundle items */
  quantity: Scalars["Int"];
  /** Product bundle product */
  product?: Maybe<Product>;
};

/**
 * Order in which the facade should return products.
 * This is sorted BEFORE splitting into pages
 */
export enum SortBySort {
  AscFrequency = "ASC_FREQUENCY",
  DescFrequency = "DESC_FREQUENCY",
  AscDate = "ASC_DATE",
  DescDate = "DESC_DATE",
  AscDepartment = "ASC_DEPARTMENT",
  DescDepartment = "DESC_DEPARTMENT",
  AscRelevance = "ASC_RELEVANCE",
  DescRelevance = "DESC_RELEVANCE",
}

/** Preparation instructions formatted for web ui */
export type UsageWithExtra = {
  __typename?: "UsageWithExtra";
  /**
   * If present, used to decorate the content of `contentLines` during rendering.
   * For example, it may contain a way of cooking: 'Koken', 'Bakken', etc.
   */
  extra?: Maybe<Scalars["String"]>;
  /**
   *  Each element in this array is a separate text line of the instruction,
   * each to be rendered on a new line
   */
  contentLines?: Maybe<Array<Scalars["String"]>>;
};

export enum ExperimentalBonusPromotionType {
  Ahonline = "AHONLINE",
  Etos = "ETOS",
  Gall = "GALL",
  Gallcard = "GALLCARD",
  Incentive = "INCENTIVE",
  National = "NATIONAL",
  Personal = "PERSONAL",
  Spotlight = "SPOTLIGHT",
  PreviouslyBought = "PREVIOUSLY_BOUGHT",
}

export type ExperimentalBonusSegmentAvailability = {
  __typename?: "ExperimentalBonusSegmentAvailability";
  startDate: Scalars["String"];
  endDate: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
};

export enum ExperimentalBonusSegmentType {
  Ah = "AH",
  AhOnlineOnly = "AH_ONLINE_ONLY",
  AhOnlineOnlySubtype = "AH_ONLINE_ONLY_SUBTYPE",
  DeliveryBundle = "DELIVERY_BUNDLE",
  BonusBox = "BONUS_BOX",
  Etos = "ETOS",
  FreeDelivery = "FREE_DELIVERY",
  GallCustomerCard = "GALL_CUSTOMER_CARD",
  GallOnlineOnly = "GALL_ONLINE_ONLY",
  PersonalBonus = "PERSONAL_BONUS",
  Premium = "PREMIUM",
  AhXl = "AH_XL",
  NegatePremium = "NEGATE_PREMIUM",
  DigitalScratchCard = "DIGITAL_SCRATCH_CARD",
  NegateDigitalScratchCard = "NEGATE_DIGITAL_SCRATCH_CARD",
  Bundel = "BUNDEL",
}

export enum ExperimentalBonusTheme {
  Bonus = "BONUS",
  BonusBox = "BONUS_BOX",
  Etos = "ETOS",
  Gall = "GALL",
  Infinite = "INFINITE",
  Premium = "PREMIUM",
  TieredOffer = "TIERED_OFFER",
}

export type ExperimentalMoney = {
  __typename?: "ExperimentalMoney";
  amount: Scalars["Float"];
  currency: Scalars["String"];
};

/** Pagination descriptor */
export type ExperimentalPageInput = {
  /**
   * Set number of products per page.
   * The default value is 30.
   */
  size?: Maybe<Scalars["Int"]>;
  /**
   * How many pages to return.
   * Page numbers are 0-based, so the first page has index of 0.
   * The 0-th is also the default page, so if no number provided, the 0-th page is returned.
   */
  number?: Maybe<Scalars["Int"]>;
  /**
   * If true, products from pages [0..number] will be merged
   * and all the products from all the pages will be returned.
   */
  merged?: Maybe<Scalars["Boolean"]>;
};

export type ExperimentalProductAvailability = {
  __typename?: "ExperimentalProductAvailability";
  productId?: Maybe<Scalars["Int"]>;
  isOrderable: Scalars["Boolean"];
  isVisible: Scalars["Boolean"];
  online: ExperimentalProductAvailabilityIndication;
  offline: ExperimentalProductAvailabilityIndication;
  unavailableForOrder?: Maybe<ExperimentalProductUnavailableForOrderIndication>;
  availabilityLabel?: Maybe<Scalars["String"]>;
  maxUnits?: Maybe<Scalars["Int"]>;
};

export type ExperimentalProductAvailabilityIndication = {
  __typename?: "ExperimentalProductAvailabilityIndication";
  status: ExperimentalProductAvailabilityStatus;
  availableFrom?: Maybe<Scalars["String"]>;
};

export enum ExperimentalProductAvailabilityStatus {
  InAssortment = "IN_ASSORTMENT",
  FutureAssortment = "FUTURE_ASSORTMENT",
  OutOfAssortment = "OUT_OF_ASSORTMENT",
}

export type ExperimentalProductCard = {
  __typename?: "ExperimentalProductCard";
  id: Scalars["ID"];
  hqId?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  brand?: Maybe<Scalars["String"]>;
  category?: Maybe<Scalars["String"]>;
  webPath?: Maybe<Scalars["String"]>;
  minBestBeforeDays?: Maybe<Scalars["Int"]>;
  salesUnitSize?: Maybe<Scalars["String"]>;
  availabilityLabel?: Maybe<Scalars["String"]>;
  interactionLabel?: Maybe<Scalars["String"]>;
  icons?: Maybe<Array<Maybe<ExperimentalProductIcon>>>;
  isSample: Scalars["Boolean"];
  highlight?: Maybe<Scalars["String"]>;
  highlights?: Maybe<Array<Maybe<Scalars["String"]>>>;
  shopType: ExperimentalProductShopType;
  smartLabel?: Maybe<Scalars["String"]>;
  maxUnits?: Maybe<Scalars["Int"]>;
  privateLabel?: Maybe<Scalars["Boolean"]>;
  hasListPrice: Scalars["Boolean"];
  imagePack?: Maybe<Array<ExperimentalProductImage>>;
  availability?: Maybe<ExperimentalProductAvailability>;
  tradeItem?: Maybe<ExperimentalProductTradeItem>;
  price?: Maybe<ExperimentalProductPrice>;
  discount?: Maybe<ExperimentalProductDiscount>;
  priceV2?: Maybe<ExperimentalProductPriceV2>;
  virtualBundleProducts?: Maybe<Array<Maybe<ExperimentalVirtualBundleProduct>>>;
  variant?: Maybe<ExperimentalProductVariant>;
  variants?: Maybe<Array<ExperimentalProductVariant>>;
  properties?: Maybe<Array<ExperimentalProductProperty>>;
};

export type ExperimentalProductCardImagePackArgs = {
  angles?: Maybe<Array<Maybe<ExperimentalProductImageAngle>>>;
};

export type ExperimentalProductDiscount = {
  __typename?: "ExperimentalProductDiscount";
  includeScratchCards?: Maybe<Scalars["Boolean"]>;
  description?: Maybe<Scalars["String"]>;
};

export enum ExperimentalProductIcon {
  PriceFavorite = "PRICE_FAVORITE",
  Vegetarian = "VEGETARIAN",
  Vegan = "VEGAN",
  LocallyProduced = "LOCALLY_PRODUCED",
  Organic = "ORGANIC",
  Frozen = "FROZEN",
  BakeOff = "BAKE_OFF",
  New = "NEW",
  DiscountPack = "DISCOUNT_PACK",
  PrizeWinner = "PRIZE_WINNER",
  XlStore = "XL_STORE",
  AvailableInStore = "AVAILABLE_IN_STORE",
  NutriscoreA = "NUTRISCORE_A",
  NutriscoreB = "NUTRISCORE_B",
  NutriscoreC = "NUTRISCORE_C",
  NutriscoreD = "NUTRISCORE_D",
  NutriscoreE = "NUTRISCORE_E",
}

export type ExperimentalProductImage = {
  __typename?: "ExperimentalProductImage";
  angle: ExperimentalProductImageAngle;
  small?: Maybe<ExperimentalProductImageRendition>;
  medium?: Maybe<ExperimentalProductImageRendition>;
  large?: Maybe<ExperimentalProductImageRendition>;
};

export enum ExperimentalProductImageAngle {
  Angle_2D1 = "ANGLE_2D1",
  Angle_4D1 = "ANGLE_4D1",
  Angle_4D2 = "ANGLE_4D2",
  Angle_4D3 = "ANGLE_4D3",
  Angle_4D4 = "ANGLE_4D4",
  Angle_4D5 = "ANGLE_4D5",
  Angle_4D6 = "ANGLE_4D6",
  Angle_4D7 = "ANGLE_4D7",
  Angle_5D1 = "ANGLE_5D1",
  Angle_5D2 = "ANGLE_5D2",
  Angle_5D3 = "ANGLE_5D3",
  Hero = "HERO",
}

export type ExperimentalProductImageRendition = {
  __typename?: "ExperimentalProductImageRendition";
  width: Scalars["Int"];
  height: Scalars["Int"];
  url: Scalars["String"];
};

export type ExperimentalProductPrice = {
  __typename?: "ExperimentalProductPrice";
  now: ExperimentalMoney;
  was?: Maybe<ExperimentalMoney>;
  unitInfo?: Maybe<ExperimentalProductUnitInfo>;
  discount?: Maybe<ExperimentalProductPriceDiscount>;
};

export type ExperimentalProductPriceDiscount = {
  __typename?: "ExperimentalProductPriceDiscount";
  segmentId?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type ExperimentalProductPriceDiscountV2 = {
  __typename?: "ExperimentalProductPriceDiscountV2";
  segmentId?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  promotionType?: Maybe<ExperimentalBonusPromotionType>;
  segmentType?: Maybe<ExperimentalBonusSegmentType>;
  subtitle?: Maybe<Scalars["String"]>;
  theme?: Maybe<ExperimentalBonusTheme>;
  tieredOffer?: Maybe<Array<Scalars["String"]>>;
  availability?: Maybe<ExperimentalBonusSegmentAvailability>;
  wasPriceVisible?: Maybe<Scalars["Boolean"]>;
  productCount?: Maybe<Scalars["Int"]>;
  multipleItemPromotion?: Maybe<Scalars["Boolean"]>;
  smartLabel?: Maybe<Scalars["String"]>;
};

export type ExperimentalProductPriceV2 = {
  __typename?: "ExperimentalProductPriceV2";
  now?: Maybe<ExperimentalMoney>;
  was?: Maybe<ExperimentalMoney>;
  unitInfo?: Maybe<ExperimentalProductUnitInfo>;
  discount?: Maybe<ExperimentalProductPriceDiscountV2>;
};

export type ExperimentalProductProperty = {
  __typename?: "ExperimentalProductProperty";
  code: Scalars["String"];
  values: Array<Scalars["String"]>;
  icon?: Maybe<ExperimentalProductPropertyIcon>;
};

export enum ExperimentalProductPropertyIcon {
  PriceFavorite = "PRICE_FAVORITE",
  Vegetarian = "VEGETARIAN",
  Vegan = "VEGAN",
  LocallyProduced = "LOCALLY_PRODUCED",
  Organic = "ORGANIC",
  Frozen = "FROZEN",
  BakeOff = "BAKE_OFF",
  New = "NEW",
  DiscountPack = "DISCOUNT_PACK",
  PrizeWinner = "PRIZE_WINNER",
  XlStore = "XL_STORE",
}

export enum ExperimentalProductShopType {
  Ah = "AH",
  Et = "ET",
  Ga = "GA",
}

export type ExperimentalProductTradeItem = {
  __typename?: "ExperimentalProductTradeItem";
  gtin?: Maybe<Scalars["String"]>;
  gtinRevisions: Array<Scalars["String"]>;
};

export type ExperimentalProductUnavailableForOrderIndication = {
  __typename?: "ExperimentalProductUnavailableForOrderIndication";
  status: ExperimentalProductUnavailableReason;
  availableFrom?: Maybe<Scalars["String"]>;
};

export enum ExperimentalProductUnavailableReason {
  FutureAssortment = "FUTURE_ASSORTMENT",
  NotAtThisPickupPoint = "NOT_AT_THIS_PICKUP_POINT",
  NotForPickup = "NOT_FOR_PICKUP",
  NoLongerOnline = "NO_LONGER_ONLINE",
  OutOfAssortment = "OUT_OF_ASSORTMENT",
  ShopOnly = "SHOP_ONLY",
  SoldOut = "SOLD_OUT",
}

export type ExperimentalProductUnitInfo = {
  __typename?: "ExperimentalProductUnitInfo";
  price: ExperimentalMoney;
  description?: Maybe<Scalars["String"]>;
};

export type ExperimentalProductVariant = {
  __typename?: "ExperimentalProductVariant";
  type: ExperimentalProductVariantType;
  label: Scalars["String"];
  product: ExperimentalProductCard;
};

export enum ExperimentalProductVariantType {
  Primary = "PRIMARY",
  Secondary = "SECONDARY",
}

/** Available Facet Configuration */
export type ExperimentalSearchFacetConfig = {
  __typename?: "ExperimentalSearchFacetConfig";
  /** Can be used as the facet ID */
  label: Scalars["String"];
  /** Facet description */
  name: Scalars["String"];
  /** Facet type */
  type: ExperimentalSearchFacetType;
};

/** Facet input type allows filtering search results */
export type ExperimentalSearchFacetInput = {
  /** Selected facet ID */
  label: Scalars["String"];
  /** The selected facet values to conform to */
  values?: Maybe<ExperimentalSearchValuesSelectedFacetInput>;
  /** The selected facet range values to conform to */
  rangeValues?: Maybe<ExperimentalSearchRangeSelectedFacetInput>;
};

/** A facet option type */
export type ExperimentalSearchFacetOption = {
  __typename?: "ExperimentalSearchFacetOption";
  /** Can be used a the facet option ID */
  value: Scalars["PrimitiveTypeScalar"];
  /** Facet option description */
  name: Scalars["String"];
  /** The number of possible matches with the option selected */
  matches: Scalars["Int"];
  /** Possible suboptions for current option */
  suboptions?: Maybe<Array<ExperimentalSearchFacetOption>>;
  /** Whether the option is selected or not */
  selected?: Maybe<Scalars["Boolean"]>;
};

/** Facet payload type */
export type ExperimentalSearchFacetPayload = {
  __typename?: "ExperimentalSearchFacetPayload";
  /** Can be used as the facet ID */
  label: Scalars["String"];
  /** Facet description */
  name: Scalars["String"];
  /** Facet type */
  type: ExperimentalSearchFacetType;
  /** Min/Max values for a range selected facet type */
  rangeSelectedFacetValues?: Maybe<ExperimentalSearchRangeSelectedFacetValues>;
  /** Facet options */
  options?: Maybe<Array<ExperimentalSearchFacetOption>>;
};

/** Possible facet types */
export enum ExperimentalSearchFacetType {
  /** Facet type that has conformance to a single value */
  Single = "SINGLE",
  /** Facet type that has conformance to multiple values */
  Multiple = "MULTIPLE",
  /** Facet type that has conformance to a range */
  Range = "RANGE",
  /** Facet type that has conformance to value/values in a hierarchical order */
  Hierarchy = "HIERARCHY",
}

/** Search facets payload contains all the available facets */
export type ExperimentalSearchFacetsPayload = {
  __typename?: "ExperimentalSearchFacetsPayload";
  /** Available facets/filters */
  facets: Array<ExperimentalSearchFacetPayload>;
  /** Available quick filters/facets */
  quickFilters: Array<ExperimentalSearchFacetPayload>;
};

/** Search base input type */
export type ExperimentalSearchInput = {
  /** Selected facet/filter inputs the search will conform to */
  facets?: Maybe<Array<ExperimentalSearchFacetInput>>;
  /** Selected search intent */
  intent?: Maybe<ExperimentalSearchIntentInput>;
  /** Pagination descriptor */
  page?: Maybe<ExperimentalPageInput>;
};

/** Search intent input */
export type ExperimentalSearchIntentInput = {
  /** Selected intent type */
  intent: ExperimentalSearchIntentType;
  /** Order ID used for ONLINE intent */
  orderId?: Maybe<Scalars["Int"]>;
  /** Favorite store ID used for STORE intent */
  storeId?: Maybe<Scalars["Int"]>;
};

/** Possible search products intent types */
export enum ExperimentalSearchIntentType {
  /** Intent type for product browsing */
  Browse = "BROWSE",
  /** Intent type for ordering online */
  Online = "ONLINE",
  /** Intent type for store order */
  Store = "STORE",
}

/** Search payload type */
export type ExperimentalSearchPayload = {
  __typename?: "ExperimentalSearchPayload";
  /** Search products results */
  products: Array<ExperimentalProductCard>;
  /** Available facets/filters */
  facets?: Maybe<ExperimentalSearchFacetsPayload>;
  /** Stores sponsoring related data (eg: 'auctionId') */
  sponsoring?: Maybe<ExperimentalSearchSponsoringPayload>;
  /** Total number of products found (including all pages) */
  totalFound: Scalars["Int"];
  /**
   * An unique ID for the current search. Each new search will have a new search ID
   * It can be used for, eg: analytics events (eg: card tap) that are related to the current search
   */
  searchId: Scalars["String"];
};

/** Search products input */
export type ExperimentalSearchProductsInput = {
  /** Search query as entered by the user */
  query: Scalars["String"];
  /** Selected sorting type */
  sortType?: Maybe<ExperimentalSearchProductsSortType>;
  /** Base search input */
  searchInput?: Maybe<ExperimentalSearchInput>;
};

/** Possible sorting types for search */
export enum ExperimentalSearchProductsSortType {
  /** Sorting type based on product RELEVANCE */
  Relevance = "RELEVANCE",
  /** Sorting type based on product price, from LOW to HIGH */
  PriceLowHigh = "PRICE_LOW_HIGH",
  /** Sorting type based on product price, from HIGH to LOW */
  PriceHighLow = "PRICE_HIGH_LOW",
  /** Sorting type based on product NUTRI-SCORE */
  NutriScoreAE = "NUTRI_SCORE_A_E",
}

/** The input min and/or max values for a RANGE selected facet */
export type ExperimentalSearchRangeSelectedFacetInput = {
  /** The min value of the selected range facet type */
  min?: Maybe<Scalars["PrimitiveTypeScalar"]>;
  /** The max value of the selected range facet type */
  max?: Maybe<Scalars["PrimitiveTypeScalar"]>;
};

/** The min and/or max values for a range selected facet type */
export type ExperimentalSearchRangeSelectedFacetValues = {
  __typename?: "ExperimentalSearchRangeSelectedFacetValues";
  /** Selected RANGE facet min value */
  min?: Maybe<Scalars["PrimitiveTypeScalar"]>;
  /** Selected RANGE facet max value */
  max?: Maybe<Scalars["PrimitiveTypeScalar"]>;
};

/** SearchSponsoringPayload stores sponsoring related data (eg: 'auctionId') */
export type ExperimentalSearchSponsoringPayload = {
  __typename?: "ExperimentalSearchSponsoringPayload";
  /** The auction ID */
  auctionId?: Maybe<Scalars["String"]>;
};

/** The input values for a selected facet (when the facet type is not RANGE) */
export type ExperimentalSearchValuesSelectedFacetInput = {
  /** Value/values for the selected facet */
  values: Array<Scalars["PrimitiveTypeScalar"]>;
};

export type ExperimentalVirtualBundleProduct = {
  __typename?: "ExperimentalVirtualBundleProduct";
  quantity: Scalars["Int"];
  product?: Maybe<ExperimentalProductCard>;
};

/** Pagination descriptor */
export type PageInput = {
  /**
   * Set number of products per page.
   * The default value is 30.
   */
  size?: Maybe<Scalars["Int"]>;
  /**
   * How many pages to return.
   * Page numbers are 0-based, so the first page has index of 0.
   * The 0-th is also the default page, so if no number provided, the 0-th page is returned.
   */
  number?: Maybe<Scalars["Int"]>;
  /**
   * If true, products from pages [0..number] will be merged
   * and all the products from all the pages will be returned.
   */
  merged?: Maybe<Scalars["Boolean"]>;
};

/** product availability */
export type ProductCardAvailability = {
  __typename?: "ProductCardAvailability";
  /**
   * Presence of `productId` simplifies handling the fetched data when availabilities for multiple products were requested
   * from the `availability-facade` at once.
   */
  productId?: Maybe<Scalars["Int"]>;
  /** is the product orderable for this user */
  isOrderable: Scalars["Boolean"];
  /** is the product visible for this user */
  isVisible: Scalars["Boolean"];
  /** online availability */
  online: ProductCardAvailabilityIndication;
  /** offline availability */
  offline: ProductCardAvailabilityIndication;
  /**
   * Label if the product is unavailable
   *
   * eg: Vandaag besteld, vanaf zondag in huis
   */
  availabilityLabel?: Maybe<Scalars["String"]>;
  /**
   * Maximum amount of units you can have in one order
   *
   * eg: 6 if you can only add 6 beer crates to your order
   */
  maxUnits?: Maybe<Scalars["Int"]>;
};

/** indication of the availability of a product */
export type ProductCardAvailabilityIndication = {
  __typename?: "ProductCardAvailabilityIndication";
  /** availability status */
  status: ProductCardAvailabilityStatus;
  /** optional: date when is the product available again YYYY-MM-DD */
  availableFrom?: Maybe<Scalars["String"]>;
};

/** availability status */
export enum ProductCardAvailabilityStatus {
  /** available */
  Available = "AVAILABLE",
  /** available in the future */
  FutureAssortment = "FUTURE_ASSORTMENT",
  /** no longer available */
  OutOfAssortment = "OUT_OF_ASSORTMENT",
}

/** Promotion type */
export enum ProductCardBonusPromotionType {
  /** Ah Online */
  Ahonline = "AHONLINE",
  /** ETOS */
  Etos = "ETOS",
  /** GALL */
  Gall = "GALL",
  /** GALLCARD */
  Gallcard = "GALLCARD",
  /** Usually free delivery */
  Incentive = "INCENTIVE",
  /** National */
  National = "NATIONAL",
  /** Personal */
  Personal = "PERSONAL",
  /** Spotlight */
  Spotlight = "SPOTLIGHT",
  /** Previously bought */
  PreviouslyBought = "PREVIOUSLY_BOUGHT",
}

/** Bonus Segment availability */
export type ProductCardBonusSegmentAvailability = {
  __typename?: "ProductCardBonusSegmentAvailability";
  /** Availability start date */
  startDate: Scalars["String"];
  /** Availability end date */
  endDate: Scalars["String"];
  /** Availability description */
  description?: Maybe<Scalars["String"]>;
};

/** BonusSegmentType */
export enum ProductCardBonusSegmentType {
  /** AH stores */
  Ah = "AH",
  /** AH online only */
  AhOnlineOnly = "AH_ONLINE_ONLY",
  /** AH online only subtype */
  AhOnlineOnlySubtype = "AH_ONLINE_ONLY_SUBTYPE",
  /** Delivery bundle */
  DeliveryBundle = "DELIVERY_BUNDLE",
  /** Bonus box */
  BonusBox = "BONUS_BOX",
  /** Etos */
  Etos = "ETOS",
  /** Free delivery */
  FreeDelivery = "FREE_DELIVERY",
  /** Gall customer card and online */
  GallCustomerCard = "GALL_CUSTOMER_CARD",
  /** Gall online only */
  GallOnlineOnly = "GALL_ONLINE_ONLY",
  /** Personal */
  PersonalBonus = "PERSONAL_BONUS",
  /** Premium */
  Premium = "PREMIUM",
  /** AH XL */
  AhXl = "AH_XL",
  /** NEGATE_PREMIUM */
  NegatePremium = "NEGATE_PREMIUM",
  /** DIGITAL_SCRATCH_CARD */
  DigitalScratchCard = "DIGITAL_SCRATCH_CARD",
  /** NEGATE_DIGITAL_SCRATCH_CARD */
  NegateDigitalScratchCard = "NEGATE_DIGITAL_SCRATCH_CARD",
  /** BUNDEL */
  Bundel = "BUNDEL",
  /** FESTIVE_FAVOURITE */
  FestiveFavourite = "FESTIVE_FAVOURITE",
}

/** Bonus Themes */
export enum ProductCardBonusTheme {
  /** Regular bonus */
  Bonus = "BONUS",
  /** Personal bonus */
  BonusBox = "BONUS_BOX",
  /** Etos */
  Etos = "ETOS",
  /** Gall'n'Gall */
  Gall = "GALL",
  /** Infinite */
  Infinite = "INFINITE",
  /** Premium */
  Premium = "PREMIUM",
  /** Tiered offer */
  TieredOffer = "TIERED_OFFER",
}

/** Possible product icons */
export enum ProductCardIcon {
  /** Price favorite */
  PriceFavorite = "PRICE_FAVORITE",
  /** Vegetarion */
  Vegetarian = "VEGETARIAN",
  /** Vega */
  Vegan = "VEGAN",
  /** Locally produced */
  LocallyProduced = "LOCALLY_PRODUCED",
  /** Organic */
  Organic = "ORGANIC",
  /** Frozen */
  Frozen = "FROZEN",
  /** Bake off */
  BakeOff = "BAKE_OFF",
  /** New */
  New = "NEW",
  /** Discount pack */
  DiscountPack = "DISCOUNT_PACK",
  /** Prize winner */
  PrizeWinner = "PRIZE_WINNER",
  /** XL store */
  XlStore = "XL_STORE",
  /**
   * Available in store property
   * Temporarily used for availability label on mobile
   */
  AvailableInStore = "AVAILABLE_IN_STORE",
  /** Nutri-score A */
  NutriscoreA = "NUTRISCORE_A",
  /** Nutri-score B */
  NutriscoreB = "NUTRISCORE_B",
  /** Nutri-score C */
  NutriscoreC = "NUTRISCORE_C",
  /** Nutri-score D */
  NutriscoreD = "NUTRISCORE_D",
  /** Nutri-score E */
  NutriscoreE = "NUTRISCORE_E",
}

/** Each product is expected to have 1 or more image(s)/angle(s) associated with it. */
export type ProductCardImage = {
  __typename?: "ProductCardImage";
  /** Angle of the image */
  angle: ProductCardImageAngle;
  /** Small version of the image (normally 200x200 px) */
  small?: Maybe<ProductCardImageRendition>;
  /** Medium version of the image (normally 400x400 px) */
  medium?: Maybe<ProductCardImageRendition>;
  /** Large version of the image (normally 800x800 px) */
  large?: Maybe<ProductCardImageRendition>;
};

/** What angles are available for a product image */
export enum ProductCardImageAngle {
  /** packshot voorkant / packshot frontside */
  Angle_2D1 = "ANGLE_2D1",
  /** A multi-angle image */
  Angle_4D1 = "ANGLE_4D1",
  /** A multi-angle image */
  Angle_4D2 = "ANGLE_4D2",
  /** A multi-angle image */
  Angle_4D3 = "ANGLE_4D3",
  /** A multi-angle image */
  Angle_4D4 = "ANGLE_4D4",
  /** A multi-angle image */
  Angle_4D5 = "ANGLE_4D5",
  /** A multi-angle image */
  Angle_4D6 = "ANGLE_4D6",
  /** A multi-angle image */
  Angle_4D7 = "ANGLE_4D7",
  /** A multi-angle image */
  Angle_5D1 = "ANGLE_5D1",
  /** A multi-angle image */
  Angle_5D2 = "ANGLE_5D2",
  /** A multi-angle image */
  Angle_5D3 = "ANGLE_5D3",
  /** The hero image. To be used on the product detail page. */
  Hero = "HERO",
}

/** The minimal description of a product image that includes the URL, width and height */
export type ProductCardImageRendition = {
  __typename?: "ProductCardImageRendition";
  /** Product image width */
  width: Scalars["Int"];
  /** Product image height */
  height: Scalars["Int"];
  /** An URL to fetch the product image from. */
  url: Scalars["String"];
};

/** Price discount information */
export type ProductCardPriceDiscountV2 = {
  __typename?: "ProductCardPriceDiscountV2";
  /** Discount bonus segment id */
  segmentId?: Maybe<Scalars["Int"]>;
  /** Discount text */
  description?: Maybe<Scalars["String"]>;
  /** Discount type */
  type?: Maybe<Scalars["String"]>;
  /** Promotion type of  the discount */
  promotionType?: Maybe<ProductCardBonusPromotionType>;
  /** Segment type of the discount */
  segmentType?: Maybe<ProductCardBonusSegmentType>;
  /** Discount subtitle */
  subtitle?: Maybe<Scalars["String"]>;
  /** Discount theme */
  theme?: Maybe<ProductCardBonusTheme>;
  /** Collection of tiered offers */
  tieredOffer?: Maybe<Array<Scalars["String"]>>;
  /** Information about the validity period of the discount */
  availability?: Maybe<ProductCardBonusSegmentAvailability>;
  /** Whether was price should be displayed */
  wasPriceVisible?: Maybe<Scalars["Boolean"]>;
  /** Quantity of products within promotion */
  productCount?: Maybe<Scalars["Int"]>;
  /** Whether a promotion is a multiple item promotion */
  multipleItemPromotion?: Maybe<Scalars["Boolean"]>;
  /**
   * Smart label to display either:
   *     - validity period
   *     - delivery bundle bonus
   *     - personal bonus
   */
  smartLabel?: Maybe<Scalars["String"]>;
};

/** Product card price V2 type */
export type ProductCardPriceV2 = {
  __typename?: "ProductCardPriceV2";
  /** the current price */
  now?: Maybe<Scalars["Float"]>;
  /** the normal price in case the now price is discounted */
  was?: Maybe<Scalars["Float"]>;
  /** discount data */
  discount?: Maybe<ProductCardPriceDiscountV2>;
  /** Promotion label, which might contain information about the discount or other labels (ex: virtual bundle without a discount) */
  promotionLabel?: Maybe<ProductCardPromotionLabel>;
};

/** Product card price V2 type */
export type ProductCardPriceV2Original = {
  __typename?: "ProductCardPriceV2Original";
  /** the current price */
  now: Money;
  /** the normal price in case the now price is discounted */
  was?: Maybe<Money>;
  /** discount data */
  discount?: Maybe<ProductCardPriceDiscountV2>;
  /** Promotion label, which might contain information about the discount or other labels (ex: virtual bundle without a discount) */
  promotionLabel?: Maybe<ProductCardPromotionLabel>;
};

/** Promotion label, which might contain information about the discount or other labels (ex: Nieuw, virtual bundle without a discount) */
export type ProductCardPromotionLabel = {
  __typename?: "ProductCardPromotionLabel";
  /** The label type */
  type?: Maybe<ProductCardPromotionLabelType>;
  /** The label tiers, will have multiple tiers in case of tiered offers */
  tiers?: Maybe<Array<Maybe<ProductCardPromotionLabelTier>>>;
};

/** A promotion label tier */
export type ProductCardPromotionLabelTier = {
  __typename?: "ProductCardPromotionLabelTier";
  /** The label mechanism (ex: DELIVERY_INCENTIVE or X_FOR_Y) */
  mechanism?: Maybe<BonusSegmentDiscountLabelCodes>;
  /** The description of the label */
  description?: Maybe<Scalars["String"]>;
  /** The alternate description of the label */
  alternateDescription?: Maybe<Scalars["String"]>;
  /** The original description of the label */
  originalDescription?: Maybe<Scalars["String"]>;
  /** amount */
  amount?: Maybe<Scalars["Float"]>;
  /** incentiveType */
  incentiveType?: Maybe<Scalars["String"]>;
  /** count */
  count?: Maybe<Scalars["Int"]>;
  /** freeCount */
  freeCount?: Maybe<Scalars["Int"]>;
  /** actualCount */
  actualCount?: Maybe<Scalars["Int"]>;
  /** price */
  price?: Maybe<Scalars["Float"]>;
  /** percentage */
  percentage?: Maybe<Scalars["Float"]>;
  /** unit */
  unit?: Maybe<Scalars["String"]>;
};

/** Promotion Label Type */
export enum ProductCardPromotionLabelType {
  /** B2B_PREMIUM */
  B2BPremium = "B2B_PREMIUM",
  /** BONUS_BOX */
  BonusBox = "BONUS_BOX",
  /** NO_DISCOUNT_BUNDLE */
  NoDiscountBundle = "NO_DISCOUNT_BUNDLE",
  /** PRODUCT_DISCOUNT_BUNDLE */
  ProductDiscountBundle = "PRODUCT_DISCOUNT_BUNDLE",
  /** DELIVERY_BUNDLE */
  DeliveryBundle = "DELIVERY_BUNDLE",
  /** GALL_PREMIUM */
  GallPremium = "GALL_PREMIUM",
  /** ONLINE */
  Online = "ONLINE",
  /** PERSONAL_OFFER */
  PersonalOffer = "PERSONAL_OFFER",
  /** PREMIUM */
  Premium = "PREMIUM",
  /** SPOTLIGHT */
  Spotlight = "SPOTLIGHT",
  /** ETOS */
  Etos = "ETOS",
  /** AIRMILES */
  Airmiles = "AIRMILES",
  /** FREE_DELIVERY */
  FreeDelivery = "FREE_DELIVERY",
  /** SCRATCH_SUMMER */
  ScratchSummer = "SCRATCH_SUMMER",
}

/** Possible product shop types */
export enum ProductCardShopType {
  /** Albert Heijn shop */
  Ah = "AH",
  /** Etos shop */
  Et = "ET",
  /** Gall shop */
  Ga = "GA",
}

/** Variant (e.g. wine by the case vs wine per bottle) */
export type ProductCardVariant = {
  __typename?: "ProductCardVariant";
  /** Product variant type */
  type: ProductCardVariantType;
  /** Label for this variant ('doos', '4 personen') */
  label: Scalars["String"];
  /** The product of the variant */
  product: SearchProductCard;
};

/** Product variant type */
export enum ProductCardVariantType {
  /** Primary type (the bottle of wine) */
  Primary = "PRIMARY",
  /** Secondary type (the case of bottles of wine) */
  Secondary = "SECONDARY",
}

/** Product virtual bundle item */
export type ProductCardVirtualBundleItem = {
  __typename?: "ProductCardVirtualBundleItem";
  /** Quantity of bundle items */
  quantity: Scalars["Int"];
  /** ProductID bundle product */
  productId: Scalars["Int"];
};

/** Search products for given brand input */
export type SearchBrandInput = {
  /** The slugified name of the brand */
  brandSlug: Scalars["String"];
  /** Selected sorting type */
  sortType?: Maybe<SearchProductsSortType>;
  /** Base search input */
  searchInput?: Maybe<SearchInput>;
};

/** Search products in category input */
export type SearchCategoryInput = {
  /** Selected taxonomy ID */
  taxonomyId: Scalars["Int"];
  /** Selected sorting type */
  sortType?: Maybe<SearchProductsSortType>;
  /** Base search input */
  searchInput?: Maybe<SearchInput>;
};

/** Available Facet Configuration */
export type SearchFacetConfig = {
  __typename?: "SearchFacetConfig";
  /** Can be used as the facet ID */
  label: Scalars["String"];
  /** Facet description */
  name: Scalars["String"];
  /** Facet type */
  type: SearchFacetType;
};

/** Facet input type allows filtering search results */
export type SearchFacetInput = {
  /** Selected facet ID */
  label: Scalars["String"];
  /** The selected facet values to conform to */
  values?: Maybe<SearchValuesSelectedFacetInput>;
  /** The selected facet range values to conform to */
  rangeValues?: Maybe<SearchRangeSelectedFacetInput>;
};

/** A facet option type */
export type SearchFacetOption = {
  __typename?: "SearchFacetOption";
  /** Can be used a the facet option ID */
  value: Scalars["PrimitiveTypeScalar"];
  /** Facet option description */
  name: Scalars["String"];
  /** The number of possible matches with the option selected */
  matches: Scalars["Int"];
  /** Possible suboptions for current option */
  suboptions?: Maybe<Array<SearchFacetOption>>;
  /** Whether the option is selected or not */
  selected?: Maybe<Scalars["Boolean"]>;
  /** Possible facet image */
  image?: Maybe<ImageSet>;
};

/** Facet payload type */
export type SearchFacetPayload = {
  __typename?: "SearchFacetPayload";
  /** Can be used as the facet ID */
  label: Scalars["String"];
  /** Facet description */
  name: Scalars["String"];
  /** Facet type */
  type: SearchFacetType;
  /** Min/Max values for a range selected facet type */
  rangeSelectedFacetValues?: Maybe<SearchRangeSelectedFacetValues>;
  /** Facet options */
  options?: Maybe<Array<SearchFacetOption>>;
};

/** Possible facet types */
export enum SearchFacetType {
  /** Facet type that has conformance to a single value */
  Single = "SINGLE",
  /** Facet type that has conformance to multiple values */
  Multiple = "MULTIPLE",
  /** Facet type that has conformance to a range */
  Range = "RANGE",
  /** Facet type that has conformance to value/values in a hierarchical order */
  Hierarchy = "HIERARCHY",
}

/** Search facets payload contains all the available facets */
export type SearchFacetsPayload = {
  __typename?: "SearchFacetsPayload";
  /** Available facets/filters */
  facets: Array<SearchFacetPayload>;
  /** Available quick filters/facets */
  quickFilters: Array<SearchFacetPayload>;
};

/** Search base input type */
export type SearchInput = {
  /** Selected facet/filter inputs the search will conform to */
  facets?: Maybe<Array<SearchFacetInput>>;
  /** Selected search intent */
  intent?: Maybe<SearchIntentInput>;
  /** Pagination descriptor */
  page?: Maybe<PageInput>;
};

/** Search intent input */
export type SearchIntentInput = {
  /** Selected intent type */
  intent: SearchIntentType;
  /** Order ID used for ONLINE intent */
  orderId?: Maybe<Scalars["Int"]>;
  /** Favorite store ID used for STORE intent */
  storeId?: Maybe<Scalars["Int"]>;
};

/** Possible search products intent types */
export enum SearchIntentType {
  /** Intent type for product browsing */
  Browse = "BROWSE",
  /** Intent type for ordering online */
  Online = "ONLINE",
  /** Intent type for store order */
  Store = "STORE",
}

/** Search payload type */
export type SearchPayload = {
  __typename?: "SearchPayload";
  /** Search products results */
  products: Array<Product>;
  /** Available facets/filters */
  facets?: Maybe<SearchFacetsPayload>;
  /** Stores sponsoring related data (eg: 'auctionId') */
  sponsoring?: Maybe<SearchSponsoringPayload>;
  /** Total number of products found (including all pages) */
  totalFound: Scalars["Int"];
  /**
   * An unique ID for the current search. Each new search will have a new search ID
   * It can be used for, eg: analytics events (eg: card tap) that are related to the current search
   */
  searchId: Scalars["String"];
};

/** Search previously bought input */
export type SearchPreviouslyBoughtInput = {
  /** Selected sorting type */
  sortType?: Maybe<SearchPreviouslyBoughtSortType>;
  /** Base search input */
  searchInput?: Maybe<SearchInput>;
};

/** Possible previously bought sorting types */
export enum SearchPreviouslyBoughtSortType {
  /** Sorting type based on PURCHASE_DATE */
  PurchaseDate = "PURCHASE_DATE",
  /** Sorting type based on how FREQUENT a product is purchased */
  PurchaseFrequency = "PURCHASE_FREQUENCY",
  /** Sorting type based on product TAXONOMY */
  PurchaseTaxonomy = "PURCHASE_TAXONOMY",
  /** Sorting type based on product NUTRI-SCORE */
  NutriScoreAE = "NUTRI_SCORE_A_E",
}

/** Search product card type */
export type SearchProductCard = {
  __typename?: "SearchProductCard";
  /** Product identifier */
  id: Scalars["Int"];
  /** product title */
  title?: Maybe<Scalars["String"]>;
  /** additional information about the product */
  additionalInformation?: Maybe<Scalars["String"]>;
  /** brand of product */
  brand?: Maybe<Scalars["String"]>;
  /**
   * Product category, which consists of the first taxonomy node and the last taxanomy node.
   * for example: 'Aardappel, groente, fruit/IJsberg sla'
   */
  category?: Maybe<Scalars["String"]>;
  /** external hq id */
  hqId?: Maybe<Scalars["Int"]>;
  /**
   * Product image(s), specified by rendition(s) and angle(s).
   * A product can have multiple images.
   * Each of the images can be represented in different renditions (small, medium, large)
   * `imagePack` is a replacement for `imagesMulti`, `imageSet` and `images`.
   */
  imagePack?: Maybe<Array<ProductCardImage>>;
  /** all the icons for current product */
  icons?: Maybe<Array<ProductCardIcon>>;
  /** product availability */
  availability?: Maybe<ProductCardAvailability>;
  /** Sales unit size e.g. '2 stuks' */
  salesUnitSize?: Maybe<Scalars["String"]>;
  /** Summary, e.g. 'Tortellini kaas' */
  summary?: Maybe<Scalars["String"]>;
  /** Bullet points on product page */
  highlights?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** highlight (Feestfavoriet etc. / shop-in-shop / nutriscore) */
  highlight?: Maybe<Scalars["String"]>;
  /** Interaction label shows 'Kies alternatief' / 'Kies product' if unavailable */
  interactionLabel?: Maybe<Scalars["String"]>;
  /**
   * Label if the product is unavailable
   * eg: Vandaag besteld, vanaf zondag in huis
   * @deprecated @sunset_date(2024-10-01) the availability label is now returned as text by the BE directly
   * . Use `availability.availabilityLabel` instead.
   */
  availabilityLabel?: Maybe<Scalars["String"]>;
  /** Virtual bundle items (a virtual bundle is a bundle with multiple products) */
  virtualBundleProducts?: Maybe<Array<Maybe<ProductCardVirtualBundleItem>>>;
  /** Path to the web link */
  webPath?: Maybe<Scalars["String"]>;
  /**
   * DO NOT USE - Max quantity of a product order, hardcoded at 99 since
   * there is no service available yet. For testing purposes you can use
   * the x-feature-flag header with enable-maxQuantity value.
   * @deprecated @sunset_date(2024-08-01) For over two years no service is implemented so the maxUnits field, most probably, is what you need
   * . availability.maxUnits.
   */
  maxQuantity?: Maybe<Scalars["Int"]>;
  /** Whether the product is a sample or not. */
  isSample: Scalars["Boolean"];
  /**
   * Whether the product has a list price.
   * In Web FE: if `true`, display label "Adviesprijs" on the PDP or product card.
   */
  hasListPrice: Scalars["Boolean"];
  /**
   * How many days the product remains fresh
   * This maps to 'THT', which is 'Tenminste Houdbaar Tot'
   */
  minBestBeforeDays?: Maybe<Scalars["Int"]>;
  /** Whether product is deactivated */
  isDeactivated?: Maybe<Scalars["Boolean"]>;
  /** True if the product is age restricted (e.g. alcohol is 18+) */
  ageCheck?: Maybe<Scalars["Boolean"]>;
  /** Product shop type */
  shopType: ProductCardShopType;
  /**
   * Max number of addable units of the product
   * @deprecated @sunset_date(2024-12-01) Max units is now part of the availability facade instead of stripped products to achieve better performance
   * . availability.maxUnits.
   */
  maxUnits?: Maybe<Scalars["Int"]>;
  /** Whether the product is a private label product */
  privateLabel?: Maybe<Scalars["Boolean"]>;
  /** Whether the product is sponsored or not */
  isSponsored?: Maybe<Scalars["Boolean"]>;
  /** Product price with discount information */
  priceV2?: Maybe<ProductCardPriceV2>;
  /** Product price with discount information */
  priceV2Original?: Maybe<ProductCardPriceV2Original>;
  /** Optional product external URL, present when needed (eg: for Voordeel Shop product) */
  externalWebshopUrl?: Maybe<Scalars["String"]>;
  /**
   * Variant info of this product.
   * Null if product doesn't have any variants.
   */
  variant?: Maybe<ProductCardVariant>;
  /** Variants (e.g. wine by the case vs wine per bottle) */
  variants: Array<ProductCardVariant>;
};

/** Search product card type */
export type SearchProductCardImagePackArgs = {
  angles?: Maybe<Array<Maybe<ProductCardImageAngle>>>;
};

/** Search payload type */
export type SearchProductCardPayload = {
  __typename?: "SearchProductCardPayload";
  /** Search products results */
  products: Array<SearchProductCard>;
  /** Available facets/filters */
  facets?: Maybe<SearchFacetsPayload>;
  /** Stores sponsoring related data (eg: 'auctionId') */
  sponsoring?: Maybe<SearchSponsoringPayload>;
  /** Total number of products found (including all pages) */
  totalFound: Scalars["Int"];
  /**
   * An unique ID for the current search. Each new search will have a new search ID
   * It can be used for, eg: analytics events (eg: card tap) that are related to the current search
   */
  searchId: Scalars["String"];
};

/** Search products input */
export type SearchProductsInput = {
  /** Search query as entered by the user */
  query: Scalars["String"];
  /** Selected sorting type */
  sortType?: Maybe<SearchProductsSortType>;
  /** Base search input */
  searchInput?: Maybe<SearchInput>;
};

/** Possible sorting types for search */
export enum SearchProductsSortType {
  /** Sorting type based on product RELEVANCE */
  Relevance = "RELEVANCE",
  /** Sorting type based on product price, from LOW to HIGH */
  PriceLowHigh = "PRICE_LOW_HIGH",
  /** Sorting type based on product price, from HIGH to LOW */
  PriceHighLow = "PRICE_HIGH_LOW",
  /** Sorting type based on product NUTRI-SCORE */
  NutriScoreAE = "NUTRI_SCORE_A_E",
}

/** The input min and/or max values for a RANGE selected facet */
export type SearchRangeSelectedFacetInput = {
  /** The min value of the selected range facet type */
  min?: Maybe<Scalars["PrimitiveTypeScalar"]>;
  /** The max value of the selected range facet type */
  max?: Maybe<Scalars["PrimitiveTypeScalar"]>;
};

/** The min and/or max values for a range selected facet type */
export type SearchRangeSelectedFacetValues = {
  __typename?: "SearchRangeSelectedFacetValues";
  /** Selected RANGE facet min value */
  min?: Maybe<Scalars["PrimitiveTypeScalar"]>;
  /** Selected RANGE facet max value */
  max?: Maybe<Scalars["PrimitiveTypeScalar"]>;
};

/** SearchSponsoringPayload stores sponsoring related data (eg: 'auctionId') */
export type SearchSponsoringPayload = {
  __typename?: "SearchSponsoringPayload";
  /** The auction ID */
  auctionId?: Maybe<Scalars["String"]>;
};

/** A suggested section of search results with suggested search results. */
export type SearchSuggestion = {
  __typename?: "SearchSuggestion";
  /** Label of the search suggestion. */
  label: Scalars["String"];
  /** The value of the search suggestion. */
  value: Scalars["String"];
  /** The link to the result page. */
  href: Scalars["String"];
  /** The type of search suggestion. */
  type: SearchSuggestionType;
  /** Which icon is needed for the search suggestion, this is a hardcoded value. */
  icon?: Maybe<Scalars["String"]>;
  /** Multiple search suggestions, eg. the query "melk" can have a suggestion of "kokosmelk". */
  suggestions?: Maybe<Array<SearchSuggestion>>;
};

/** Suggestion types for search. */
export enum SearchSuggestionType {
  /** Default suggestion type. */
  Default = "DEFAULT",
  /** Suggestion for when there are no results found. */
  NoResult = "NO_RESULT",
  /** Suggestion which functions as a link to view more results. */
  MoreLink = "MORE_LINK",
  /** The section of the suggestions, eg. products, recipes or customer care. */
  Section = "SECTION",
}

/**
 * A representation of a product taxonomy.
 * Primarily used for displaying sub-taxonomy buttons in taxonomy browsing
 * and in search results.
 */
export type SearchTaxonomy = {
  __typename?: "SearchTaxonomy";
  /** id of the taxonomy */
  id: Scalars["Int"];
  /** name of the taxonomy */
  name: Scalars["String"];
  /** slugified version of the taxonomy name */
  slug: Scalars["String"];
  /** parent ids of the current taxonomy */
  parents?: Maybe<Array<Scalars["Int"]>>;
  /** child ids of the current taxonomy */
  children?: Maybe<Array<Scalars["Int"]>>;
  /** Images of a taxonomy */
  images: Array<ImageSet>;
  /** IDs of products in the given taxonomy */
  productIds?: Maybe<Array<Scalars["Int"]>>;
  /** How many products are there in total in the given taxonomy */
  totalProductCount: Scalars["Int"];
};

/**
 * A representation of a product taxonomy.
 * Primarily used for displaying sub-taxonomy buttons in taxonomy browsing
 * and in search results.
 */
export type SearchTaxonomyImagesArgs = {
  renditions?: Maybe<Array<TaxonomyImageRenditions>>;
};

/** The input values for a selected facet (when the facet type is not RANGE) */
export type SearchValuesSelectedFacetInput = {
  /** Value/values for the selected facet */
  values: Array<Scalars["PrimitiveTypeScalar"]>;
};

/**
 * Image renditions returned by the product image processor
 * in the form of D<width>x<height>
 */
export enum TaxonomyImageRenditions {
  /** width: 200, height: 200 */
  D200X200 = "D200X200",
  /** width: 400, height: 400 */
  D400X400 = "D400X400",
  /** width: 800, height: 800 */
  D800X800 = "D800X800",
}

/**
 * This type represents a communication topic. A topic is a specific type of message (e.g. track and trace) that is received
 * via a specific channel that a user can be subscribed to.
 */
export type CommunicationTopic = {
  __typename?: "CommunicationTopic";
  /** The channel that the topic is related to. E.g. PUSH/EMAIL */
  channel: Scalars["String"];
  /** The name of the topic. E.g. ORDER_INFORMATION */
  name: Scalars["String"];
  /** The application that the topic is related to. E.g. AHWEBSHOP */
  application: Scalars["String"];
};

/** This type represents the response for the availableCommunicationTopics */
export type CommunicationTopicsResponse = {
  __typename?: "CommunicationTopicsResponse";
  /** All available communication topics. */
  topics: Array<CommunicationTopic>;
};
