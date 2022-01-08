import React from 'react';
import { ShoppingListItem } from './components/shoppingListItem/shoppingListItem';
import './app.scss';

export function App() {
    return (
        <div className="app">
            <ShoppingListItem
                onAddProduct={() => {
                    console.log('on add product');
                }}
                onRemoveProduct={() => {
                    console.log('on remove product');
                }}
                product={{ name: 'Arbuz', category: 'Fruits' }}
            />
        </div>
    );
}
