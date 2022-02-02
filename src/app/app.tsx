import React from 'react';
import {
    colorsList,
    picturesList,
    productsList,
    shoppingLists
} from './config/staticContent';
import { AddList } from './components/addList/addList.component';
import { Navbar } from './components/navbar/navbar.component';
import { ListItem } from './components/listItem/listItem.component';
import { Preview } from './components/preview/preview.component';
import './app.scss';

export function App(): JSX.Element {
    function renderNavbar(): JSX.Element {
        return (
            <Navbar
                onAddList={() => {
                    console.log(`on add list:
                    1. hide default lists preview navbar view
                    2. render add shopping list navbar view
                    3. hide default lists preview main content view
                    4. render add shopping list main content view`);
                }}
                onBack={() => {
                    console.log(`on back:
                    1. `);
                }}
                onCancel={() => {
                    console.log(`on cancel:
                    1. hide add list navbar view
                    2. render lists preview navbar view
                    3. hide addlist main content view
                    4. render lists preview main content view`);
                }}
                onDone={() => {
                    console.log(`on done:
                    Adding new list:
                    1. check if title lenght > 0
                    1a. if empty string do nothing
                    1b. if string not empty: check if check if title does not exist in shopping lists:
                    1b.a if string exists in shopping lists: (...): change title color to red?
                    1b.b if string doesn't exist in lists:
                    2. add new list item to product list (title, color, icon, products: default empty)
                    3. hide add list navbar view
                    2. render lists preview navbar view
                    3. hide addlist main content view
                    4. render lists preview main content view`);
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

    function renderProductLabel(): JSX.Element {
        return (
            <ListItem
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

    function renderPreview(): JSX.Element {
        return <Preview shoppingLists={shoppingLists} />;
    }

    function renderAddList(): JSX.Element {
        return <AddList />;
    }

    return (
        <div className="app">
            {renderNavbar()}
            {/* TODO: Create main content component with logic for switching different views */}
            {/* {renderShoppingListItem()} */}
            {renderPreview()}
            {/* {renderAddList()} */}
        </div>
    );
}
