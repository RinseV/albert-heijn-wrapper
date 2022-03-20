import { Image, ProductModel } from '../product/productModel';

export interface BonusModel {
    periods: Period[];
}

export interface Period {
    bonusEndDate: string;
    bonusFolderUrl: string;
    bonusStartDate: string;
    mmiBanner2Url: string;
    mmiBannerUrl: string;
    urlMetadataList: UrlMetadataList[];
}

export interface UrlMetadataList {
    bonusType: string;
    count: number;
    description: string;
    images: Image[];
    url: string;
}

export interface BonusSectionModel {
    bonusGroupOrProducts: BonusGroupOrProduct[];
    sectionDescription: string;
    sectionImage: Image[];
    sectionType: string;
}

export interface BonusGroupOrProduct {
    bonusGroup?: BonusGroup;
    product?: ProductModel;
}

export interface BonusGroup {
    bonusEndDate: string;
    bonusPeriodDescription: string;
    bonusStartDate: string;
    bonusType: string;
    category: string;
    discountDescription: string;
    exampleForPrice: number;
    exampleFromPrice: number;
    exampleHasListPrice: boolean;
    extraDescriptions: unknown[];
    future: boolean;
    id: string;
    images: Image[];
    isStapelBonus: boolean;
    promotionType: string;
    salesUnitSize: string;
    segmentDescription: string;
    segmentId: number;
    segmentType: string;
    shopType: string;
    subtitle: string;
}

export interface BonusSegmentModel extends BonusGroup {
    offerId: number;
    offerStartDate: string;
    products: ProductModel[];
}
