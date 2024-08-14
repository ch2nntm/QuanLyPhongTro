export interface Post {
    "id": number,
    "title": string,
    "description": string,
    "acreage": number,
    "price": number,
    "contact": string,
    "images": string,
    "address": {
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
    "updateDate": Date,
    "user":{
        "address_user": string,
        "name": string,
        "phone": string,
    }
}
