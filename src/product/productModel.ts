export interface ProductModel {
    card: Card;
}

interface Card {
    type: string;
    id: number;
    products: Product[];
    meta: Meta;
}

interface Meta {
    gln: string;
    gtin: string;
    description: Description;
    nutritions: Nutrition[];
    contents: Contents;
    ingredients: Ingredients;
    storage: Storage;
    contact: Contact;
    resources: Resources;
}

interface Resources {
    attachments: any[];
    icons: Icon[];
}

interface Icon {
    type: string;
    id: string;
    title: string;
}

interface Contact {
    name: string;
    address: string;
    communicationChannels: CommunicationChannel[];
}

interface CommunicationChannel {
    type: string;
    value: string;
}

interface Storage {
    instructions: string[];
    lifeSpan: any[];
}

interface Ingredients {
    allergens: Allergens;
}

interface Allergens {
    list: any[];
    contains: string[];
    mayContain: any[];
    freeFrom: string[];
}

interface Contents {
    netContents: string[];
    servingSize: string;
    servingsPerPackage: string;
    eMark: boolean;
}

interface Nutrition {
    nutrients: Nutrient[];
    additionalInfo: AdditionalInfo[];
    dailyValueIntakeReference: string;
    servingSize: string;
    servingSizeDescription: string;
    preparationState: string;
    basisQuantity: string;
    basisQuantityDescription: string;
}

interface AdditionalInfo {
    label: string;
    value: string;
}

interface Nutrient {
    name: string;
    type: string;
    value: string;
    dailyValue: string;
    superscript?: number;
}

interface Description {
    descriptions: string[];
}

interface Product {
    id: number;
    control: Control;
    title: string;
    link: string;
    availableOnline: boolean;
    orderable: boolean;
    propertyIcons: PropertyIcon[];
    images: Image[];
    price: Price;
    itemCatalogId: number;
    brand: string;
    category: string;
    theme: string;
    hqId: number;
    gtins: number[];
    summary: string;
    descriptionFull: string;
    taxonomyId: number;
    taxonomies: Taxonomy[];
    contributionMargin: number;
    properties: Properties;
}

interface Properties {
    nutriscore: string;
    lifestyle: string[];
}

interface Taxonomy {
    id: number;
    name: string;
    imageSiteTarget?: string;
    images: Image2[];
    shown: boolean;
    level: number;
    sortSequence: number;
    parentIds: number[];
}

interface Image2 {
    height: number;
    width: number;
    url: string;
}

interface Price {
    unitInfo: UnitInfo;
    now: number;
    unitSize: string;
}

interface UnitInfo {
    price: number;
    description: string;
}

interface Image {
    height: number;
    width: number;
    title: string;
    url: string;
    ratio: string;
}

interface PropertyIcon {
    name: string;
    title: string;
}

interface Control {
    theme: string;
    type: string;
}
