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

export interface ColorsList {
    aquamarine: Colors.Aquamarine,
    azure: Colors.Azure,
    beige: Colors.Beige,
    brown: Colors.Brown,
    fuchsia: Colors.Fuchsia,
    green: Colors.Green,
    grey: Colors.Grey,
    navyBlue: Colors.NavyBlue,
    orange: Colors.Orange,
    red: Colors.Red,
    violet: Colors.Violet,
    yellow: Colors.Yellow,
}

export enum Icons {
    Basket = 'BasketIcon',
    BowTie = 'BowTieIcon',
    Car = 'CarIcon',
    Document = 'DocumentIcon',
    Education = 'EducationIcon',
    Gift = 'GiftIcon',
    Glassess = 'GlassessIcon',
    Heart = 'HeartIcon',
    Medkit = 'MedkitIcon',
    Rose = 'RoseIcon',
    Sale = 'SaleIcon',
    Tools = 'ToolsIcon'
}

export interface IconsList {
    basket: Icons.Basket,
    bowTie: Icons.BowTie,
    car: Icons.Car,
    document: Icons.Document,
    education: Icons.Education,
    gift: Icons.Gift,
    glassess: Icons.Glassess,
    heart: Icons.Heart,
    medkit: Icons.Medkit,
    rose: Icons.Rose,
    sale: Icons.Sale,
    tools: Icons.Tools,
}

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
