import { Time } from "@angular/common";

export interface Baidang {
    userId: number;
    imgSrc: string;
    quantity: number;
    title: string;
    address: string;
    price: number;
    area: number;
    date: Time;
    status: string;
    checked: boolean;
}
