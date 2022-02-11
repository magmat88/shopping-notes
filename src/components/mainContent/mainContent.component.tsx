import React, { Fragment } from 'react';
import {
    colorsList,
    picturesList,
    productsList,
    // shoppingLists
} from '../../app/config/staticContent';
import { ListItem } from '../listItem/listItem.component';
import { CustomizeList } from '../customizeList/customizeList.component';
import { Preview } from '../preview/preview.component';
import { AllLists } from '../../features/allLists/allLists.component';
import { AllProducts } from '../../features/allProducts/allProducts.component';
import { PopularProducts } from '../../features/popularProducts/popularProducts.component';
import { SearchTerm } from '../../features/searchTerm/searchTerm.component';
import './mainContent.component.scss';

interface MainContentProps {
    props: any;
}

export function MainContent({props}: MainContentProps): JSX.Element {
    const {state, dispatch} = props;

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
