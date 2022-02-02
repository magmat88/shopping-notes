export enum Colors {
    Aquamarine = '#00EA96',
    Azure = '#64D2FF',
    Beige = '#C1A386',
    Brown = '#734230',
    Fuchsia = '#E1289B',
    Green = '#047C52',
    Grey = '#6E7972',
    NavyBlue = '#524C8C',
    Orange = '#FF9F0A',
    Red = '#D23D33',
    Violet = '#BF5AF2',
    Yellow = '#FFE200'
}

export enum Pictures {
    Basket = 'basketIcon',
    BowTie = 'bowTieIcon',
    Car = 'carIcon',
    Document = 'documentIcon',
    Education = 'educationIcon',
    Gift = 'giftIcon',
    Glassess = 'glassessIcon',
    Heart = 'heartIcon',
    Medkit = 'medkitIcon',
    Rose = 'roseIcon',
    Sale = 'saleIcon',
    Tools = 'toolsIcon'
}

export interface Product {
    //TODO: category as enum
    category: string;
    name: string;
    quantity: number;
};

export interface ShoppingList {
    listPicture: ListPicture;
    productsList: Array<Product>;
    title: string;
};

export interface ListPicture {
    //TODO: color and icon as enums
    color: string;
    picture: string;
}
