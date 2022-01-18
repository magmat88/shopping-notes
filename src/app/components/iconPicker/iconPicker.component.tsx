import React from 'react';
import { iconsList } from '../../config/staticContent';
import { Icons } from '../../modules/content/content.state';
import basketIcon from '../../images/basketIcon.svg';
import bowTieIcon from '../../images/bowTieIcon.svg';
import carIcon from '../../images/carIcon.svg';
import documentIcon from '../../images/documentIcon.svg';
import educationIcon from '../../images/educationIcon.svg';
import giftIcon from '../../images/giftIcon.svg';
import glassessIcon from '../../images/glassessIcon.svg';
import heartIcon from '../../images/heartIcon.svg';
import medkitIcon from '../../images/medkitIcon.svg';
import roseIcon from '../../images/roseIcon.svg';
import saleIcon from '../../images/saleIcon.svg';
import toolsIcon from '../../images/toolsIcon.svg';
import './iconPicker.component.scss';

interface IconPickerProps {
    onSetIcon: (icon: Icons) => void;
    selectedIcon: Icons;
}

export function IconPicker({
    onSetIcon,
    selectedIcon
}: IconPickerProps): JSX.Element {
    function renderIconsContainer(): JSX.Element {
        return (
            <section className="icons-container">
                <header className="container-title">
                    <h3>Icon</h3>
                </header>
                <div>
                    {iconsList.map((icon) => {
                        console.log(icon);
                        return (
                            <figure
                                key={icon}
                                onClick={() => onSetIcon(icon)}
                                className={`icon-container ${
                                    icon === selectedIcon && 'selected'
                                }`}
                            ><img src={require(`../../images/${icon}.svg`)} alt={icon}/></figure>
                        );
                    })}
                </div>
            </section>
        );
    }

    return <div>{renderIconsContainer()}</div>;
}
