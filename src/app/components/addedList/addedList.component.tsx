import React, { Fragment, useState } from 'react';
import ReactRedux from 'react-redux';
import { ShoppingList } from '../../modules/content/content.state';
import { ReactComponent as TrolleyIcon } from '../../images/trolleyIcon.svg';
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
import './addedList.component.scss';

interface AddedListProps {
    shoppingList: ShoppingList;
}

export function AddedList({ shoppingList }: AddedListProps) {
    const [color, setColor] = useState(shoppingList.icon.color);
    const [backgroundColor, setBackgroundColor] = useState(color);
    const [pictureName, setPictureName] = useState(shoppingList.icon.picture);

    function renderIcon(): JSX.Element {
        // TODO: logic to change
        if (pictureName === 'TrolleyIcon') {
            return <TrolleyIcon className="picture" />
        }
        if (pictureName === 'BasketIcon') {
            return <BasketIcon className="picture" />
        }
        if (pictureName === 'BowTieIcon') {
            return <BowTieIcon className="picture" />
        }
        if (pictureName === 'CarIcon') {
            return <CarIcon className="picture" />
        }
        if (pictureName === 'DocumentIcon') {
            return <DocumentIcon className="picture" />
        }
        if (pictureName === 'EducationIcon') {
            return <EducationIcon className="picture" />
        }
        if (pictureName === 'GiftIcon') {
            return <GiftIcon className="picture" />
        }
        if (pictureName === 'GlassessIcon') {
            return <GlassessIcon className="picture" />
        }
        if (pictureName === 'HeartIcon') {
            return <HeartIcon className="picture" />
        }
        if (pictureName === 'MedkitIcon') {
            return <MedkitIcon className="picture" />
        }
        if (pictureName === 'RoseIcon') {
            return <RoseIcon className="picture" />
        }
        if (pictureName === 'SaleIcon') {
            return <SaleIcon className="picture" />
        }
        if (pictureName === 'ToolsIcon') {
            return <ToolsIcon className="picture" />
        }
        return <Fragment></Fragment>;
    }

    return (
        <section className="added-list">
            <figure
                className="added-list__icon--colored"
                style={{ backgroundColor }}
            >
                {renderIcon()}
            </figure>
            <p className="added-list__title">{shoppingList.title}</p>
        </section>
    );
}
