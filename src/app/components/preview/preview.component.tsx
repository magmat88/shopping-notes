import React from 'react';
import { ShoppingList } from '../../modules/content/content.state';
import { ShoppingListTile } from '../shoppingListTile/shoppingListTile.component';
import './preview.component.scss';

interface PreviewProps {
    shoppingLists: Array<ShoppingList>;
}

export function Preview({
    shoppingLists
}: PreviewProps): JSX.Element {
    return (
        <section className="preview">
            {/* TODO: create separate functions to render tile content */}
            <article className="preview--empty">No lists</article>
            <article className="preview--with-content">
                {/* to remove: */}
                {/* <ShoppingListTile shoppingList={shoppingLists[0]} />
                <ShoppingListTile shoppingList={shoppingLists[1]} /> */}
            </article>
        </section>
    );
}
