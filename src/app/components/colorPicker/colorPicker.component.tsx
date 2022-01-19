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
            <section className="color-picker">
                <header className="title">
                    <h3>Color</h3>
                </header>
                <div className="color-icons-container">
                    {colorsList.map((color) => {
                        return (
                            <div
                                key={color}
                                className={`color-icon-container ${
                                    color === selectedColor && 'selected'
                                }`}
                            >
                                <figure
                                    onClick={() => onSetColor(color)}
                                    className="color-icon"
                                    style={{ backgroundColor: color }}
                                ></figure>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }

    return <div>{renderColorsContainer()}</div>;
}
