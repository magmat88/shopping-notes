import React from 'react';
import { ShoppingList } from '../../modules/content/content.state';
import { ShoppingListTile } from '../shoppingListTile/shoppingListTile.component';
import './shoppingListsPreview.component.scss';

interface ShoppingListsPreviewProps {
    shoppingLists: Array<ShoppingList>;
}

export function ShoppingListsPreview({
    shoppingLists
}: ShoppingListsPreviewProps): JSX.Element {
    return (
        <div className="shopping-lists-preview">
            <section className="preview-empty">No lists</section>
            <section className="preview-with-content">
                <ShoppingListTile shoppingList={shoppingLists[0]} />
                <ShoppingListTile shoppingList={shoppingLists[1]} />
            </section>
        </div>
    );
}
