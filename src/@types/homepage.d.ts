import type {AssetColor} from "./colors";

export interface HotOffer {
    category: string;
    color: AssetColor;
    name: string;
    price: number;
    description: string;
    duration: string;
    pic: string;
}

export interface TrustedItem {
    category: string;
    title: string;
    description: string;
    mainColor: AssetColor;
    secondaryColor: AssetColor;
}
