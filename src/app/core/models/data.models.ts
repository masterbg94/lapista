export interface BasicResponse {
    statusCode: number;
    message?: string;
    data?: [Item | Color | any];
}

export interface Category {
    id?: number;
    name: string;
    items?: Item[];
}

export interface CategoryWithData {
    name: string;
    items?: Item[];
}

export interface Item {
    id?: number;
    name: string;
    description: string;
    price: number;
    isnew?: number;
}

export interface Color {
    id?: number;
    name: string;
}

export interface Size {
    id?: number;
    name: string;
}
