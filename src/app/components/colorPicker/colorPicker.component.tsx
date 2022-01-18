import React from 'react';
import { colorsList } from '../../config/staticContent';
import { Colors } from '../../modules/content/content.state';
import './colorPicker.component.scss';

interface ColorPickerProps {
    onSetColor: (color: Colors) => void;
    selectedColor: Colors;
}

export function ColorPicker({
    onSetColor,
    selectedColor
}: ColorPickerProps): JSX.Element {
    function renderColorsContainer(): JSX.Element {
        return (
            <section className="colors-container">
                <header className="container-title">
                    <h3>Color</h3>
                </header>
                <div>
                    {colorsList.map((color) => {
                        return (
                            <figure
                                key={color}
                                onClick={() => onSetColor(color)}
                                className={`color-container ${
                                    color === selectedColor && 'selected'
                                }`}
                                style={{ backgroundColor: color }}
                            ></figure>
                        );
                    })}
                </div>
            </section>
        );
    }

    return <div>{renderColorsContainer()}</div>;
}
