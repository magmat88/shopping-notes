import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import listsReducer from '../../features/lists/listsSlice';
import productsReducer from '../../features/products/productsSlice';

// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';

export {};

//action types definitions
// TODO: move action types to external file
const ADD_LIST = "ADD_LIST";
const ADD_PRODUCT = "ADD_PRODUCT";


//action creators definitions
// const addList = (newList: any) => {
//     //returned action 
//     return {
//         type: ADD_LIST,
//         newList
//     }
// }



// addedvlists = previous state, with default initial value []
// const listReducer = (addedLists = [], action: any) => {
//     switch(action.type) {
//         case ADD_LIST:
//             return [...addedLists, action.newList];
//             break;
        
//         default:
//             return addedLists;
//     }
// }

// export default const store = Redux.createStore(listReducer);

//creating redux store
export const store =  configureStore({
    reducer: {
        lists: listsReducer,
        products: productsReducer
    }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {lists: ListsState, products: ProductsState}
export type AppDispatch = typeof store.dispatch;













// const ADD_PRODUCT = 'ADD_PRODUCT';
// const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
// const ADD_LIST = 'ADD_LIST';

// //declare action
// const addProduct = { type: ADD_PRODUCT };

// const removeProduct = { type: REMOVE_PRODUCT };

// // the first principle of Redux: all app state is held
// //in a single state object in the store

// //default state
// const defaultState = {
//     products: [
//         {
//             index: 0,
//             productName: 'apple',
//             isProductSelected: false
//         },
//         {
//             index: 1,
//             productName: 'banana',
//             isProductSelected: false
//         }
//     ],
//     selectedProducts: []
// };

// //reducer
// const productReducer = (state = defaultState, action: any) => {
//     switch (action.type) {
//         case ADD_PRODUCT:
//             const newProduct = {
//                 index: defaultState.products.length,
//                 productName: addProductAction.productName,
//                 isProductSelected: addProductAction.isProductSelected
//             };
//             return [...state.products, newProduct];
//         case REMOVE_PRODUCT:
//             return [...state.products.slice(0, action.index), ...state.products.slice(action.index+1, state.products.length)];
//         default:
//             return defaultState;
//     }
// };

// const listReducer = (state = 'Initial state', action: any) => {
//     switch (action.type) {
//         case ADD_LIST:
//             return (state = action.icon);
//         default:
//             return state;
//     }
// };

// //combine reducers
// const rootReducer = Redux.combineReducers({
//     product: productReducer,
//     list: listReducer
// });

// //create store
// const store = Redux.createStore(rootReducer);

// // get state
// const currentState = store.getState();

// //action creator method
// const addProductAction = (productName: any) => {
//     return {
//         type: ADD_PRODUCT,
//         isProductSelected: false,
//         productName: productName
//     };
// };

// const removeProductAction = (index: number) => {
//     return {
//         type: ADD_PRODUCT,
//         index
//     };
// };

// const addListIcon = (color: any, picture: any) => {
//     return {
//         type: ADD_LIST,
//         icon: { color, picture }
//     };
// };
// //register a store listener

// //subscribe listener functions to the store, which
// //are called whenever an action is dispatched against the store

// store.subscribe(addProductAction);
// store.subscribe(removeProductAction);

// //dispatch action

// store.dispatch(addProductAction('apple'));
// store.dispatch(addProductAction('banana'));
// store.dispatch(removeProductAction('apple'));
