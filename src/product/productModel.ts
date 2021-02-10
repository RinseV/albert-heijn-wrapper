export interface ProductModel {
    disclaimerText: string;
    productCard: ProductModel;
    productId: number;
    properties: Properties2;
    tradeItem: TradeItem;
}

interface TradeItem {
    additionalTradeItemIdentification: AdditionalTradeItemIdentification[];
    allergenInformation: AllergenInformation[];
    certificationInformation: any[];
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
    referencedFileDetailInformation: any[];
    regulatoryInformation: RegulatoryInformation[];
    safetyDataSheetInformation: any[];
}

interface RegulatoryInformation {
    permitIdentification: any[];
    regulationTypeCode: TypeCode[];
}

interface PlaceOfItemActivity {
    placeOfProductActivity: PlaceOfProductActivity;
}

interface PlaceOfProductActivity {
    productActivityDetails: any[];
    provenanceStatement: any[];
}

interface PackagingMarking {
    labelAccreditationCode: any[];
    localPackagingMarkedLabelAccreditationCodeReference: LocalPackagingMarkedLabelAccreditationCodeReference[];
}

interface LocalPackagingMarkedLabelAccreditationCodeReference {
    label?: string;
    value: string;
}

interface NutritionalInformation {
    nutrientHeaders: NutrientHeader[];
    nutritionalClaim: any[];
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
    weight: Weight;
}

interface Weight {}

interface NetContent {
    measurementUnitCode: TypeCode;
    value: number;
}

interface Lifespan {
    itemPeriodSafeToUseAfterOpening: any[];
}

interface HealthWellnessPackagingMarking {
    packagingMarkedDietAllergenCode: any[];
    packagingMarkedFreeFromCode: TypeCode[];
}

interface FoodAndBeveragePreparationServing {
    preparationServing: any[];
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
    usageInstructions: any[];
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

interface Properties2 {
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
    extraDescriptions: any[];
    hqId: number;
    images: Image[];
    isBonus: boolean;
    isInfiniteBonus: boolean;
    isOrderable: boolean;
    isPreviouslyBought: boolean;
    isSample: boolean;
    isStapelBonus: boolean;
    mainCategory: string;
    nix18: boolean;
    orderAvailabilityStatus: string;
    priceBeforeBonus: number;
    properties: Properties;
    propertyIcons: string[];
    salesUnitSize: string;
    shopType: string;
    subCategory: string;
    subCategoryId: number;
    title: string;
    unitPriceDescription: string;
    webshopId: number;
}

interface Properties {
    np_goedkoopje: string[];
    np_verpakking: string[];
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

interface Image {
    height: number;
    url: string;
    width: number;
}
