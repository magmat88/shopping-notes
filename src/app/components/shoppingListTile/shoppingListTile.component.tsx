import React, { useState } from 'react';
import { ShoppingList } from '../../modules/content/content.state';
import { ReactComponent as TrolleyIcon } from '../../images/trolleyIcon.svg';
import './shoppingListTile.component.scss';

interface ShoppingListTileProps {
    shoppingList: ShoppingList;
}

export function ShoppingListTile({ shoppingList }: ShoppingListTileProps) {
    const [iconColor, setIconColor] = useState(shoppingList.listIcon.color);
    const [backgroundColor, setBackgroundColor] = useState(iconColor);
    const [iconName, setIconName] = useState(shoppingList.listIcon.icon);

    function renderIcon(): JSX.Element {
        return (
            <figure
                className="shopping-list__icon"
                style={{ backgroundColor }}
            >
                {/* TODO: create enum for icons */}
                {iconName === 'TrolleyIcon' ? (
                    <TrolleyIcon className="category-icon" />
                ) : null}
            </figure>
        );
    }

    return (
        <section className="shopping-list-tile">
            {renderIcon()}
            <p>{shoppingList.title}</p>
        </section>
    );
}
