import { setUncaughtExceptionCaptureCallback } from 'process';
import React, { useState } from 'react';
import { Colors, Icons } from '../../modules/content/content.state';
import { ColorPicker } from '../colorPicker/colorPicker.component';
import { IconPicker } from '../iconPicker/iconPicker.component';

import './addShoppingList.component.scss';

interface AddShoppingListProps {
    //
}

export function AddShoppingList({}: AddShoppingListProps): JSX.Element {
    const [color, setColor] = useState<Colors>(Colors.Aquamarine);
    const [icon, setIcon] = useState<Icons>(Icons.Basket);

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
            <IconPicker onSetIcon={(icon) => setIcon(icon)} selectedIcon={icon} />
        </div>
    );
}
