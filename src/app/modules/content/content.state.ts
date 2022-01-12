export interface Product {
    //TODO: category as enum
    category: string;
    name: string;
    quantity: number;
};

export interface ShoppingList {
    listIcon: ListIcon;
    productsList: Array<Product>;
    title: string;
};

export interface ListIcon {
    //TODO: color and icon as enums
    color: string;
    icon: string;
}
