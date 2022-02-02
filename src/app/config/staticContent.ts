import { Colors, Pictures, Product, ShoppingList } from '../modules/content/content.state';

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

export const picturesList: Array<Pictures> = [
    Pictures.Basket,
    Pictures.BowTie,
    Pictures.Car,
    Pictures.Document,
    Pictures.Education,
    Pictures.Gift,
    Pictures.Glassess,
    Pictures.Heart,
    Pictures.Medkit,
    Pictures.Rose,
    Pictures.Sale,
    Pictures.Tools,
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
        listPicture: { color: '#008000', picture: 'GiftIcon' },
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
        listPicture: { color: '#000FFF', picture: 'TrolleyIcon' },
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
