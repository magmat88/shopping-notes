import React from 'react';
import { products, shoppingLists } from './config/staticContent';
import { NavigationBar } from './components/navigationBar/navigationBar.component';
import { ShoppingListItem } from './components/shoppingListItem/shoppingListItem';
import { ShoppingListsPreview } from './components/shoppingListsPreview/shoppingListsPreview.component';
import './app.scss';

export function App(): JSX.Element {
    function renderNavigationBar(): JSX.Element {
        return (
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
        );
    }

    function renderShoppingListItem(): JSX.Element {
        return (
            <ShoppingListItem
                onAddProduct={() => {
                    console.log('on add product');
                }}
                onRemoveProduct={() => {
                    console.log('on remove product');
                }}
                product={products[0]}
            />
        );
    }

    function renderShoppingListsPreview(): JSX.Element {
        return (
            <ShoppingListsPreview
                shoppingLists={shoppingLists}
            />
        );
    }

    return (
        <div className="app">
            { renderNavigationBar() }
            { renderShoppingListItem() }
            { renderShoppingListsPreview }
        </div>
    );
}
