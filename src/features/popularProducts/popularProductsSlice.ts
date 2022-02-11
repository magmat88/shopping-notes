const initialPopularProducts: Array<any> = [];
export const popularProductsReducer = (popularProducts = initialPopularProducts, action: any) => {
    switch(action.type) {
        case 'popularProducts/addProduct':
            return [...popularProducts, action.payload];
        case 'popularProducts/removeProduct':
            return popularProducts.filter(product => {
                return product.id !== action.payload.id
            });
        default:
            return popularProducts;
    }
}