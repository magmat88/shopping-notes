import React from 'react';
import { picturesList } from '../../config/staticContent';
import { Pictures } from '../../modules/content/content.state';
import './picturePicker.component.scss';

interface PicturePickerProps {
    onSetPicture: (picture: Pictures) => void;
    selectedPicture: Pictures;
}

export function PicturePicker({
    onSetPicture,
    selectedPicture
}: PicturePickerProps): JSX.Element {
    function renderIcons(): JSX.Element {
        return (
            <article className="picture-picker__icons">
                {picturesList.map((picture) => {
                    return (
                        <figure
                            key={picture}
                            className={`icon__picture ${
                                picture === selectedPicture && 'icon__picture--selected'
                            }`}
                        >
                            <div
                                onClick={() => onSetPicture(picture)}
                                className="icon__picture--with-img"
                            >
                                <img
                                    src={require(`../../images/${picture}.svg`)}
                                    alt={picture}
                                />
                            </div>
                        </figure>
                    );
                })}
            </article>
        );
    }

    return (
        <section className="picture-picker">
            <header className="picture-picker__title">
                <h3>Picture</h3>
            </header>
            {renderIcons()}
        </section>
    );
}
