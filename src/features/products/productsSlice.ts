import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/redux/store';

// const newProduct = {
//     title: 'Apple',
//     category: 'fruits',
//     index: state.addedProducts.length
// }

type Product = {
    title: string;
    category: string;
    index: number;
};

interface ProductsState {
    addedProducts: Array<Product>;
}

const initialState: ProductsState = {
    addedProducts: []
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (
            state: ProductsState,
            action: PayloadAction<Product>
        ): any => {
            console.log('add new product');
            return [...state.addedProducts, action.payload];
        },
        removeProduct: (state: ProductsState, action: PayloadAction<number>): any => {
            console.log('remove product');
            return [
                ...state.addedProducts.slice(0, indexToRemove),
                ...state.addedProducts.slice(
                    indexToRemove + 1,
                    state.addedProducts.length
                )
            ];
        },
        editProduct: (
            state: ProductsState,
            action: PayloadAction<[Product, number]>
        ): any => {
            const [editedProduct, indexToEdit] = action.payload;
            console.log('edit product', action);
            return [
                ...state.addedProducts.slice(0, indexToEdit),
                newProduct,
                ...state.addedProducts.slice(
                    indexToEdit + 1,
                    state.addedProducts.length
                )
            ];
        }
    }
});

export const { addProduct, removeProduct, editProduct } = productsSlice.actions;

export const selectProduct = (state: RootState) => state.products.addedProducts;

export default productsSlice.reducer;
