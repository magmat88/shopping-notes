import React, { useState } from 'react';
import { iconsList } from '../../config/staticContent';
import { Icons } from '../../modules/content/content.state';
import { ReactComponent as BasketIcon } from '../../images/basketIcon.svg';
import { ReactComponent as BowTieIcon } from '../../images/bowTieIcon.svg';
import { ReactComponent as CarIcon } from '../../images/carIcon.svg';
import { ReactComponent as DocumentIcon } from '../../images/documentIcon.svg';
import { ReactComponent as EducationIcon } from '../../images/educationIcon.svg';
import { ReactComponent as GiftIcon } from '../../images/giftIcon.svg';
import { ReactComponent as GlassessIcon } from '../../images/glassessIcon.svg';
import { ReactComponent as HeartIcon } from '../../images/heartIcon.svg';
import { ReactComponent as MedkitIcon } from '../../images/medkitIcon.svg';
import { ReactComponent as RoseIcon } from '../../images/roseIcon.svg';
import { ReactComponent as SaleIcon } from '../../images/saleIcon.svg';
import { ReactComponent as ToolsIcon } from '../../images/toolsIcon.svg';
import './iconPicker.component.scss';

interface IconPickerProps {}

export function IconPicker({}: IconPickerProps): JSX.Element {
    function renderIconsContainer(): JSX.Element {
        // const [iconName, setIconName] = useState(shoppingList.listIcon.icon);

        return (
            <section className="icons-container">
                <header className="container-title">
                    <h3>Icon</h3>
                </header>
                <figure className="icon-container">
                    
                </figure>
            </section>
        );
    }
    
    return <div>{renderIconsContainer()}</div>;
}