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
        <div className="shopping-lists-preview-items">
            <header className="preview-header">
                <h1>Lists</h1>
                <button>Add list</button>
            </header>
            <section className="preview-empty">No lists</section>
            <section className="preview-with-content">
                <ShoppingListTile shoppingList={shoppingLists[0]} />
                <ShoppingListTile shoppingList={shoppingLists[1]} />
            </section>
        </div>
    );
}
