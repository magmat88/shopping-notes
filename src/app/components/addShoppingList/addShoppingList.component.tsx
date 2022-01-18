import React, { useState } from 'react';
import { Colors } from '../../modules/content/content.state';
import { ColorPicker } from '../colorPicker/colorPicker.component';
import { IconPicker } from '../iconPicker/iconPicker.component';

import './addShoppingList.component.scss';

interface AddShoppingListProps {
    //
}

export function AddShoppingList({}: AddShoppingListProps): JSX.Element {
    const [color, setColor] = useState<Colors>(Colors.Aquamarine);

    function renderInputField(): JSX.Element {
        return (
            <form className="input-field">
                <input type="text" placeholder="New list" />
            </form>
        );
    }

    return (
        <div className="add-shopping-list">
            {renderInputField()}
            <ColorPicker onSetColor={(color) => setColor(color)} selectedColor={color} />
            <IconPicker />
        </div>
    );
}
