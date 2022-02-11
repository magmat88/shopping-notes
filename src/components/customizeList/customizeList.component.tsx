import React, { useEffect, useState } from 'react';
import { EVENT_CODE_ENTER_KEY } from '../../app/utils/eventKeyCodes';
import { Colors, Pictures } from '../../app/modules/content/content.state';
import { ColorPicker } from '../colorPicker/colorPicker.component';
import { PicturePicker } from '../picturePicker/picturePicker.component';
import './customizeList.component.scss';

export function CustomizeList(): JSX.Element {
    const [color, setColor] = useState<Colors>(Colors.Aquamarine);
    const [picture, setPicture] = useState<Pictures>(Pictures.Basket);
    const [title, setTitle] = useState<String | any>('');
    const [addedLists, setLists] = useState<Array<any>>([]);
    const [userInput, setUserInput] = useState<String|any>('');

    useEffect(() => {}, [color, picture, title]);

    function renderInputField(): JSX.Element {
        function onChangeUserInput(
            event: React.ChangeEvent<HTMLInputElement>
        ): void {
            // event.preventDefault();
            setUserInput(event.target.value);
        }

        function onKeyDownInputHandler(
            event: React.KeyboardEvent<HTMLInputElement>|any
        ): void {
            if (event.code === EVENT_CODE_ENTER_KEY) {
                setTitle(userInput);
                const customizedList = {
                    color,
                    picture,
                    title
                };
                setLists([...addedLists, customizedList]);
                setUserInput('');
            }
        }

        return (
            <form className="customize-list__input">
                <input
                    type="text"
                    placeholder="New list"
                    onChange={onChangeUserInput}
                    onKeyDown={onKeyDownInputHandler}
                    value={userInput}
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
        <section className="customize-list">
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
