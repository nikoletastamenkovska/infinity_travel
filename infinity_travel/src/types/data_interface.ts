export interface LocationType {
    City?: string;
    Address?: string;
    Country: string;
    Region?: string;
    From?: string
}

export type CountryType = Pick<LocationType, "Country">;

export interface LocationURLType {
    Country: string;
    Region?: string;
}

interface ImageType {
    Url: string;
    Thumbnail: string;
    Location: Location;
    Description: string;
}

type StateType = "Free" | "Reserved" | "Busy";

interface PriceType {
    Prices: number[];
    LastMinutePrices: number[];
}

interface AvailabilityDate {
    ArrivalDate: string;
    DepartureDate: string;
    NumberOfDays: number;
    Price: number;
}

export interface ArrangementType {
    Id: number;
    Name: string;
    Image: string;
    Description: string;
    Description2?: string;
    Location: LocationType;
    LocationURL: LocationURLType;
    TransportationDescription: string;
    Gallery: ImageType[];
    Type: string;
    Prices: PriceType[];
    AvailabilityDates: AvailabilityDate[];
    PriceForNights: number;
    State: StateType[];
    IsPublished: boolean;
    IsLastMinute: boolean;
    Rating?: number;
    Miscellanies?: string[];
}


export type AllCountries = Pick<ArrangementType, 'Id' | 'Name' | 'Location'>;

export interface TestimonialType {
    Id: number,
    Title: string;
    Rating: number;
    Url: string;
    Description: string;
    Arrangement: string;
}

export interface YourMomentsType {
    ImgId: number;
    Url: string;
    Region: string;
    Country: string;
}