import { ADD_LIST, ADD_PRODUCT_TO_SHOPPING_LIST, CUSTOMIZE_LIST, TOGGLE_LIST } from '../actionTypes/listsActionTypes';

let nextListIndex = 0;
let nextProductIndex = 0;

export const addList = (list) => {
    return {
        type: ADD_LIST,
        payload: {
            id: ++nextListIndex,
            list
        }
    };
};

export const customizeList = (id, color, picture, title) => {
    return {
        type: CUSTOMIZE_LIST,
        payload: {
            id,
            color,
            picture,
            title
        }
    };
};

export const toggleList = (id) => {
    return {
        type: TOGGLE_LIST,
        payload: {
            id
        }
    };
};

export const addProductToShoppingList = (product) => {
    return [
        type: ADD_PRODUCT_TO_SHOPPING_LIST,
        payload: {
            id: ++nextProductIndex,
            product
        }
    ]
}