export interface SingleProductModel {
    disclaimerText: string;
    productCard: ProductModel;
    productId: number;
    properties: Properties;
    tradeItem: TradeItem;
}

interface TradeItem {
    additionalTradeItemIdentification: AdditionalTradeItemIdentification[];
    allergenInformation: AllergenInformation[];
    certificationInformation: unknown[];
    consumerInstructions: ConsumerInstructions;
    contactInformation: ContactInformation[];
    description: Description;
    foodAndBeveragePreparationServing: FoodAndBeveragePreparationServing;
    gln: string;
    gtin: string;
    healthWellnessPackagingMarking: HealthWellnessPackagingMarking;
    lifespan: Lifespan;
    measurements: Measurements;
    nutritionalInformation: NutritionalInformation;
    packagingMarking: PackagingMarking;
    placeOfItemActivity: PlaceOfItemActivity;
    referencedFileDetailInformation: unknown[];
    regulatoryInformation: RegulatoryInformation[];
    safetyDataSheetInformation: unknown[];
}

interface RegulatoryInformation {
    permitIdentification: unknown[];
    regulationTypeCode: TypeCode[];
}

interface PlaceOfItemActivity {
    placeOfProductActivity: PlaceOfProductActivity;
}

interface PlaceOfProductActivity {
    productActivityDetails: unknown[];
    provenanceStatement: unknown[];
}

interface PackagingMarking {
    labelAccreditationCode: unknown[];
    localPackagingMarkedLabelAccreditationCodeReference: LocalPackagingMarkedLabelAccreditationCodeReference[];
}

interface LocalPackagingMarkedLabelAccreditationCodeReference {
    label?: string;
    value: string;
}

interface NutritionalInformation {
    nutrientHeaders: NutrientHeader[];
    nutritionalClaim: unknown[];
}

interface NutrientHeader {
    dailyValueIntakeReference: string[];
    nutrientBasisQuantity: NetContent;
    nutrientBasisQuantityDescription: string[];
    nutrientDetail: NutrientDetail[];
    preparationStateCode: TypeCode;
}

interface NutrientDetail {
    measurementPrecisionCode: TypeCode;
    nutrientSource: string[];
    nutrientTypeCode: TypeCode;
    quantityContained: NetContent[];
    dailyValueIntakePercent?: number;
}

interface Measurements {
    netContent: NetContent[];
    weight: unknown;
}

interface NetContent {
    measurementUnitCode: TypeCode;
    value: number;
}

interface Lifespan {
    itemPeriodSafeToUseAfterOpening: unknown[];
}

interface HealthWellnessPackagingMarking {
    packagingMarkedDietAllergenCode: unknown[];
    packagingMarkedFreeFromCode: TypeCode[];
}

interface FoodAndBeveragePreparationServing {
    preparationServing: unknown[];
    servingQuantityInformation: ServingQuantityInformation;
}

interface ServingQuantityInformation {
    numberOfServingsPerPackage: number;
}

interface Description {
    regulatedProductName: string[];
}

interface ContactInformation {
    contactAddress: string;
    contactName: string;
    contactTypeCode: TypeCode;
    targetMarketCommunicationChannel: TargetMarketCommunicationChannel[];
}

interface TargetMarketCommunicationChannel {
    communicationChannel: CommunicationChannel[];
}

interface CommunicationChannel {
    code: TypeCode;
    value: string;
}

interface ConsumerInstructions {
    storageInstructions: string[];
    usageInstructions: unknown[];
}

interface AllergenInformation {
    items: Item[];
}

interface Item {
    levelOfContainmentCode: TypeCode;
    typeCode: TypeCode;
}

interface AdditionalTradeItemIdentification {
    typeCode: TypeCode;
    value: string;
}

interface TypeCode {
    label: string;
    value: string;
}

interface Properties {
    nutriscore: string[];
    sp_exclude_dieet_biologisch: string[];
    sp_exclude_dieet_laag_suiker: string[];
    sp_exclude_dieet_veganistisch: string[];
    sp_exclude_intolerance_geen_lactose: string[];
    sp_exclude_intolerance_geen_melk: string[];
    sp_include_dieet_laag_vet: string[];
    sp_include_dieet_laag_zout: string[];
    sp_include_dieet_vegetarisch: string[];
    sp_include_intolerance_geen_eieren: string[];
    sp_include_intolerance_geen_gluten: string[];
    sp_include_intolerance_geen_kreeftachtigen: string[];
    sp_include_intolerance_geen_lupine: string[];
    sp_include_intolerance_geen_mosterd: string[];
    sp_include_intolerance_geen_noten: string[];
    sp_include_intolerance_geen_pindas: string[];
    sp_include_intolerance_geen_schelpdieren: string[];
    sp_include_intolerance_geen_selderij: string[];
    sp_include_intolerance_geen_sesam: string[];
    sp_include_intolerance_geen_soja: string[];
    sp_include_intolerance_geen_sulfiet: string[];
    sp_include_intolerance_geen_vis: string[];
}

export interface ProductModel {
    availableOnline: boolean;
    brand: string;
    descriptionFull: string;
    descriptionHighlights: string;
    extraDescriptions: unknown[];
    hqId: number;
    images: Image[];
    isBonus: boolean;
    isInfiniteBonus: boolean;
    isOrderable: boolean;
    isPreviouslyBought: boolean;
    isSample: boolean;
    isSponsored: boolean;
    isStapelBonus: boolean;
    isVirtualBundle: boolean;
    mainCategory: string;
    nix18: boolean;
    nutriscore: string;
    orderAvailabilityStatus: string;
    priceBeforeBonus: number;
    properties?: Properties;
    propertyIcons: string[];
    salesUnitSize: string;
    shopType: string;
    subCategory: string;
    subCategoryId?: number;
    title: string;
    unitPriceDescription: string;
    webshopId: number;
}

interface Image {
    height: number;
    url: string;
    width: number;
}
