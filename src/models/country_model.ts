export type Region = "africa" | "americas" | "asia" | "europe" | "oceania";

export interface Country {
    name: string;
    fullname: string;
    code: number;
    currency: string;
    language: string;
    capitalCity: string;
    callingCode: number;
    region: Region;
    subregions: string;
    translation: string;
};