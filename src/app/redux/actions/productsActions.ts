import {
    ADD_PRODUCT_TO_PRODUCTS_LIST,
    SET_CATEGORY,
    SET_FILTER
} from '../actionTypes/productsActionTypes';

let nextProductIndex = 0;

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT_TO_PRODUCTS_LIST,
        payload: {
            id: ++nextProductIndex,
            product
        }
    };
};

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        payload: {
            filter
        }
    };
};

export const setCategory = (category) => {
    return {
        type: SET_CATEGORY,
        payload: {
            category
        }
    };
};
