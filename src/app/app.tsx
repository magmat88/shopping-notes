import React from 'react';
import { colorsList, iconsList, productsList, shoppingLists } from './config/staticContent';
import { AddShoppingList } from './components/addShoppingList/addShoppingList.component';
import { NavigationBar } from './components/navigationBar/navigationBar.component';
import { ShoppingListItem } from './components/shoppingListItem/shoppingListItem.component';
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
                product={productsList[0]}
            />
        );
    }

    function renderShoppingListsPreview(): JSX.Element {
        return <ShoppingListsPreview shoppingLists={shoppingLists} />;
    }

    function renderAddShoppingList(): JSX.Element {
        console.log(colorsList)
        return <AddShoppingList />;
    }
    // TODO: Create main content component with logic for switching different views
    return (
        <div className="app">
            {renderNavigationBar()}
            {renderShoppingListItem()}
            {renderShoppingListsPreview()}
            {renderAddShoppingList()}
        </div>
    );
}
