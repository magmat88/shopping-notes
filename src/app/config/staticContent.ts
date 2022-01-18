import { Colors, ColorsList, Icons, IconsList, Product, ShoppingList } from '../modules/content/content.state';

export const colorsList: Array<Colors> = [
    Colors.Aquamarine,
    Colors.Azure,
    Colors.Beige,
    Colors.Brown,
    Colors.Fuchsia,
    Colors.Green,
    Colors.Grey,
    Colors.NavyBlue,
    Colors.Orange,
    Colors.Red,
    Colors.Violet,
    Colors.Yellow,
];

export const iconsList: IconsList = {
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
};

export const productsList: Array<Product> = [
    {
        category: 'Fruits',
        name: 'Arbuz',
        quantity: 4
    },
];

export const shoppingLists: Array<ShoppingList> = [
    {
        listIcon: { color: '#008000', icon: 'GiftIcon' },
        productsList: [
            {
                category: 'Fruits',
                name: 'Orange',
                quantity: 2
            },
            {
                category: 'Dairy',
                name: 'Milk',
                quantity: 5
            }
        ],
        title: 'All I need'
    },
    {
        listIcon: { color: '#000FFF', icon: 'TrolleyIcon' },
        productsList: [
            {
                category: 'Vegetables',
                name: 'Carrot',
                quantity: 8
            },
            {
                category: 'Cleaning products',
                name: 'Dish soap',
                quantity: 1
            }
        ],
        title: 'To buy later'
    }
];
