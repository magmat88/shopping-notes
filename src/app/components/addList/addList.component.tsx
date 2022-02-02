import React, { useEffect, useState } from 'react';
import { Colors, Pictures } from '../../modules/content/content.state';
import { ColorPicker } from '../colorPicker/colorPicker.component';
import { PicturePicker } from '../picturePicker/picturePicker.component';

import './addList.component.scss';

export function AddList(): JSX.Element {
    const [color, setColor] = useState<Colors>(Colors.Aquamarine);
    const [picture, setPicture] = useState<Pictures>(Pictures.Basket);
    const [title, setTitle] = useState<String>('');

    useEffect(() => {}, [color, picture, title]);

    function renderInputField(): JSX.Element {
        function onChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
            event.preventDefault();
            setTitle(event.target.value);
            console.log(title);
        }
        return (
            <form className="add-list__input">
                <input
                    type="text"
                    placeholder="New list"
                    onChange={onChangeTitle}
                />
            </form>
        );
    }

    function onSetColorHandler(color: Colors): any {
        return setColor(color);
    }

    function onSetPictureHandler(picture: Pictures): any {
        setPicture(picture);
    }

    return (
        <section className="add-list">
            {renderInputField()}
            <ColorPicker
                onSetColor={onSetColorHandler(color)}
                selectedColor={color}
            />
            <PicturePicker
                onSetPicture={onSetPictureHandler(picture)}
                selectedPicture={picture}
            />
        </section>
    );
}
