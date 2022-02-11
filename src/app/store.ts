import { createStore, combineReducers } from 'redux';
import { allListsReducer } from '../features/allLists/allListsSlice';
import { allProductsReducer } from '../features/allProducts/allProductsSlice';
import { popularProductsReducer } from '../features/popularProducts/popularProductsSlice';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice';


const reducers = {
    allLists: allListsReducer,
    allProducts: allProductsReducer,
    popularProducts: popularProductsReducer,
    searchTerm: searchTermReducer
}

export const store = createStore(combineReducers(reducers));


// import { createStore } from 'redux';
// // import rootReducer from "./reducers/reducers";
// import { configureStore } from '@reduxjs/toolkit';
// import { ADD_LIST, REMOVE_LIST } from './actionTypes/listsActionTypes';

// //initial state with slices (each property is a single slice)

// const initialState = {
//     allProducts: [],
//     popularProducts: [],
//     allLists: [],
// };


// //action creators
// const addList = () => {
//     return {
//         type: ADD_LIST
//     }
// }

// const removeList = () => {
//     return {
//         type: REMOVE_LIST
//     }
// }

// //reducer
// const initialLists: Array<any> = [];
// const listsReducer = (state = initialLists, action: any): any => {
//     switch (action.type) {
//         case ADD_LIST:
//             action.payload = {title: `my list`, color: 'red', picture: 'basket'};
//             return [...state, action.payload];
//         case REMOVE_LIST:
//             action.payload = 1;
//             return [...state.slice(0, action.payload), ...state.slice(action.payload + 1, state.length)];
//             // return [...state.filter((listTitle) => listTitle !== action.payload)]
//         default:
//             return state;
//     }
// };

// //store
// export const store = createStore(listsReducer);

// //HTML elements
// // const

// //change listener:
// function printNumOfLists() {
//     console.log(`Number of added lists: ${store.getState().length}`);
// }
// store.subscribe(printNumOfLists);

// // console.log(store.getState());
// printNumOfLists()
// store.dispatch(addList());
// store.dispatch(addList());
// // console.log('added 2 lists ', store.getState());

// store.dispatch(removeList());
// // console.log('deleted 1 list ', store.getState());

// // import React from 'react';
// // import { createStore } from "redux";
// // import rootReducer from "./reducers/reducers";
// // import { configureStore } from '@reduxjs/toolkit';
// // import listsReducer from '../../features/lists/listsSlice';
// // import productsReducer from '../../features/products/productsSlice';


// // // export default const store = Redux.createStore(listReducer);

// // //creating redux store
// // export const store =  configureStore({
// //     reducer: {
// //         lists: listsReducer,
// //         products: productsReducer
// //     }
// // })
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>

// // Inferred type: {lists: ListsState, products: ProductsState}
// export type AppDispatch = typeof store.dispatch;

// // export default createStore(rootReducer);


// // // //default state
// // // const defaultState = {
// // //     products: [
// // //         {
// // //             index: 0,
// // //             productName: 'apple',
// // //             isProductSelected: false
// // //         },
// // //         {
// // //             index: 1,
// // //             productName: 'banana',
// // //             isProductSelected: false
// // //         }
// // //     ],
// // //     selectedProducts: []
// // // };

// // // //reducer
// // // const productReducer = (state = defaultState, action: any) => {
// // //     switch (action.type) {
// // //         case ADD_PRODUCT:
// // //             const newProduct = {
// // //                 index: defaultState.products.length,
// // //                 productName: addProductAction.productName,
// // //                 isProductSelected: addProductAction.isProductSelected
// // //             };
// // //             return [...state.products, newProduct];
// // //         case REMOVE_PRODUCT:
// // //             return [...state.products.slice(0, action.index), ...state.products.slice(action.index+1, state.products.length)];
// // //         default:
// // //             return defaultState;
// // //     }
// // // };

// // // const listReducer = (state = 'Initial state', action: any) => {
// // //     switch (action.type) {
// // //         case ADD_LIST:
// // //             return (state = action.icon);
// // //         default:
// // //             return state;
// // //     }
// // // };

// //combine reducers
// // const rootReducer = Redux.combineReducers({
//     //  product: productReducer,
//     //  list: listReducer
// //  });

// //create store
// // const store = Redux.createStore(rootReducer);

// // // // get state
// // // const currentState = store.getState();

// // // //action creator method
// // // const addProductAction = (productName: any) => {
// // //     return {
// // //         type: ADD_PRODUCT,
// // //         isProductSelected: false,
// // //         productName: productName
// // //     };
// // // };

// // // const removeProductAction = (index: number) => {
// // //     return {
// // //         type: ADD_PRODUCT,
// // //         index
// // //     };
// // // };

// // // const addListIcon = (color: any, picture: any) => {
// // //     return {
// // //         type: ADD_LIST,
// // //         icon: { color, picture }
// // //     };
// // // };
// // // //register a store listener

// // // //subscribe listener functions to the store, which
// // // //are called whenever an action is dispatched against the store

// // // store.subscribe(addProductAction);
// // // store.subscribe(removeProductAction);

// // // //dispatch action

// // // store.dispatch(addProductAction('apple'));
// // // store.dispatch(addProductAction('banana'));
// // // store.dispatch(removeProductAction('apple'));
