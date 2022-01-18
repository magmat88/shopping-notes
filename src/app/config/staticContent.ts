import { Colors, Icons, Product, ShoppingList } from '../modules/content/content.state';

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

export const iconsList: Array<Icons> = [
    Icons.Basket,
    Icons.BowTie,
    Icons.Car,
    Icons.Document,
    Icons.Education,
    Icons.Gift,
    Icons.Glassess,
    Icons.Heart,
    Icons.Medkit,
    Icons.Rose,
    Icons.Sale,
    Icons.Tools,
];

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
