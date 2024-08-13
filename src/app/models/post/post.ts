export interface Post {
    "id": number,
    "title": string,
    "description": string,
    "acreage": number,
    "price": number,
    "contact": string,
    "images": string,
    "address": {
        includes(itemSearch: string): unknown;
        province: string,
        district: string,
        ward: string,
    },
    "category": {
        "id": number,
        "name": string,
    },
    "status": string,
    "createDate": Date,
    "updateDate": Date
}
