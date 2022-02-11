import React from 'react';
import { colorsList } from '../../app/config/staticContent';
import { Colors } from '../../app/modules/content/content.state';
import './colorPicker.component.scss';

interface ColorPickerProps {
    onSetColor: (color: Colors) => void;
    selectedColor: Colors;
}

export function ColorPicker({
    onSetColor,
    selectedColor
}: ColorPickerProps): JSX.Element {
    
    function renderIcons(): JSX.Element {
        return (
            <article className="color-picker__icons">
                {colorsList.map((color) => {
                    return (
                        <figure
                            key={color}
                            className={`icon__color ${
                                color === selectedColor &&
                                'icon__color--selected'
                            }`}
                        >
                            <div
                                onClick={() => onSetColor(color)}
                                className="icon__color--with-background"
                                style={{ backgroundColor: color }}
                            ></div>
                        </figure>
                    );
                })}
            </article>
        );
    }

    return (
        <section className="color-picker">
            <header className="color-picker__title">
                <h3>Color</h3>
            </header>
            {renderIcons()}
        </section>
    );
}
