export type Product = {
    //TODO: category as enum
    category: string;
    name: string;
    numberOfItems: number;
};

export type ShoppingList = {
    listIcon: ListIcon;
    productsList: Array<Product>;
    title: string;
};

export type ListIcon = {
    //TODO: color and icon as enums
    color: string;
    icon: string;
}



