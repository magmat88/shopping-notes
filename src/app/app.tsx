import React from 'react';
import { NavigationBar } from './components/navigationBar/navigationBar.component';
import { ShoppingListItem } from './components/shoppingListItem/shoppingListItem';
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
                product={{ name: 'Arbuz', category: 'Fruits' }}
            />
        </div>
    );
}
