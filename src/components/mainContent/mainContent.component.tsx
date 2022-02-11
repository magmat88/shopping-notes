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
import './mainContent.component.scss';

interface MainContentProps {}

export function MainContent({}: MainContentProps): JSX.Element {
    return (
        <Fragment>
            <Preview shoppingLists={[]} />

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
