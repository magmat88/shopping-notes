import React, {Fragment} from 'react';
import {
    // colorsList,
    // picturesList,
    // productsList,
    // shoppingLists
} from './config/staticContent';
// import { MainContent } from '../components/mainContent/mainContent.component';
// import { Navbar } from '../components/navbar/navbar.component';
// import {
//     colorsList,
//     picturesList,
//     productsList,
    // shoppingLists
// } from '../../app/config/staticContent';
import { ListItem } from '../components/listItem/listItem.component';
import { CustomizeList } from '../components/customizeList/customizeList.component';
import { Preview } from '../components/preview/preview.component';
import { AllLists } from '../features/allLists/allLists.component';
import { AllProducts } from '../features/allProducts/allProducts.component';
import { PopularProducts } from '../features/popularProducts/popularProducts.component';
import { SearchTerm } from '../features/searchTerm/searchTerm.component';
import './app.scss';

interface AppProps {
    state: any;
    dispatch: any;
}

export function App({state, dispatch}: AppProps): JSX.Element {
    const visibleAllLists = getFilteredLists(state.allLists, state.searchTerm);
    const visiblePopularProducts = getFilteredProducts(state.popularProducts, state.searchTerm);
    const visibleAllProducts = getFilteredProducts(state.allProducts, state.searchTerm);

    return (
        <Fragment>
            <Preview shoppingLists={[]} dispatch={dispatch} />
            <AllLists allLists={visibleAllLists} dispatch={dispatch} />
            <AllProducts allProducts={visibleAllProducts} dispatch={dispatch} />
            <PopularProducts popularProducts={visiblePopularProducts} dispatch={dispatch} />
            <SearchTerm searchTerm={state.searchTerm} dispatch={dispatch}/>

            {/* <CustomizeList /> */}

            {/* <ListItem
                onAddProduct={() => {
                    console.log('on add product');
                }}
                onRemoveProduct={() => {
                    console.log('on remove product');
                }}
                product={productsList[0]}
            /> */}
        </Fragment>
    );
}

// export function App(): JSX.Element {
//     return (
//         <div className="app">
//             <Navbar
//                 onAddList={() => {
//                     // console.log(`on add list:
//                     // 1. hide default lists preview navbar view
//                     // 2. render add shopping list navbar view
//                     // 3. hide default lists preview main content view
//                     // 4. render add shopping list main content view`);
//                 }}
//                 onBack={() => {
//                     // console.log(`on back:
//                     // 1. `);
//                 }}
//                 onCancel={() => {
//                     // console.log(`on cancel:
//                     // 1. hide add list navbar view
//                     // 2. render lists preview navbar view
//                     // 3. hide addlist main content view
//                     // 4. render lists preview main content view`);
//                 }}
//                 onDone={() => {
//                     // console.log(`on done:
//                     // Adding new list:
//                     // 1. check if title lenght > 0
//                     // 1a. if empty string do nothing
//                     // 1b. if string not empty: check if check if title does not exist in shopping lists:
//                     // 1b.a if string exists in shopping lists: (...): change title color to red?
//                     // 1b.b if string doesn't exist in lists:
//                     // 2. add new list item to product list (title, color, icon, products: default empty)
//                     // 3. hide add list navbar view
//                     // 2. render lists preview navbar view
//                     // 3. hide addlist main content view
//                     // 4. render lists preview main content view`);
//                 }}
//                 showCatalog={() => {
//                     // console.log('show catalog of products');
//                 }}
//                 showPopular={() => {
//                     // console.log('show popular products');
//                 }}
//             />
//             <MainContent />
//         </div>
//     );
// }
