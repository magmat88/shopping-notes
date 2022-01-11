import React from 'react';
import { NavigationBar } from './components/navigationBar/navigationBar.component';
import { ShoppingListItem } from './components/shoppingListItem/shoppingListItem';
import { ShoppingListsPreview } from './components/shoppingListsPreview/shoppingListsPreview.component';
import './app.scss';

export function App() {
    return (
        <div className="app">
            <NavigationBar
                onBack={() => {
                    console.log('on back');
                }}
                onDone={() => {
                    console.log('on done');
                }}
                showCatalog={() => {
                    console.log('show catalog of products');
                }}
                showPopular={() => {
                    console.log('show popular products');
                }}
            />
            <ShoppingListItem
                onAddProduct={() => {
                    console.log('on add product');
                }}
                onRemoveProduct={() => {
                    console.log('on remove product');
                }}
                product={{
                    category: 'Fruits',
                    name: 'Arbuz',
                    numberOfItems: 4
                }}
            />
            <ShoppingListsPreview
                shoppingLists={[
                    {
                        listIcon: { color: '#008000', icon: 'TrolleyIcon' },
                        productsList: [
                            {
                                category: 'Fruits',
                                name: 'Orange',
                                numberOfItems: 2
                            },
                            {
                                category: 'Dairy',
                                name: 'Milk',
                                numberOfItems: 5
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
                                numberOfItems: 8
                            },
                            {
                                category: 'Cleaning products',
                                name: 'Dish soap',
                                numberOfItems: 1
                            }
                        ],
                        title: 'To buy later'
                    }
                ]}
            />
        </div>
    );
}
