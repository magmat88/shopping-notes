import React from 'react';
import { Product } from '../../modules/content/content.state';
import { ReactComponent as PlusIcon } from '../../images/plusIcon.svg';
import './listItem.component.scss';

interface ListItemProps {
    onAddProduct: () => void;
    onRemoveProduct: () => void;
    product: Product;
}

export function ListItem({
    onAddProduct,
    onRemoveProduct,
    product
}: ListItemProps): JSX.Element {
    return (
        <section className="list-item">
            <article className="list-item__product--left">
                <button className="btn--transparent btn--plus" onClick={onAddProduct}>
                    <PlusIcon />
                </button>
                {/* TODO: product.name - first letter to UpperCase if required */}
                <div className="product__name">{product.name}</div>
                <div className="product__category">
                    in {product.category}
                </div>
            </article>
            <button className="btn--transparent btn--remove" onClick={onRemoveProduct}>
                Remove
            </button>
        </section>
    );
}
