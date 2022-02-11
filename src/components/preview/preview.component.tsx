import React, {useState} from 'react';
import { ShoppingList } from '../../app/modules/content/content.state';
import { AddedList } from '../addedList/addedList.component';
import './preview.component.scss';

interface PreviewProps {
    shoppingLists: Array<ShoppingList>;
    dispatch: any;
}

export function Preview({
    shoppingLists, dispatch
}: PreviewProps): JSX.Element {
   

    return (
        <section className="preview">
            {/* TODO: create separate functions to render tile content */}
            <article className="preview--empty">No lists</article>
            <article className="preview--with-content">
                {/* to remove: */}
                {/* <AddedList shoppingList={shoppingLists[0]} />
                <AddedList shoppingList={shoppingLists[1]} /> */}
            </article>
        </section>
    );
}
