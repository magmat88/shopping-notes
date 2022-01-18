import React from 'react';
import { Product } from '../../modules/content/content.state';
import { ReactComponent as PlusIcon } from '../../images/plusIcon.svg';
import './shoppingListItem.component.scss';

interface ShoppingListItemProps {
    onAddProduct: () => void;
    onRemoveProduct: () => void;
    product: Product;
}

export function ShoppingListItem({
    onAddProduct,
    onRemoveProduct,
    product
}: ShoppingListItemProps): JSX.Element {
    return (
        <section className="shopping-list-item">
            <div className="add-product">
                <button className="btn-transparent btn-add-product" onClick={onAddProduct}>
                    <PlusIcon />
                </button>
                {/* TODO: product.name - first letter to UpperCase if required */}
                <div className="text-product-name">{product.name}</div>
                <div className="text-product-category">
                    in {product.category}
                </div>
            </div>
            <button className="btn-transparent btn-remove-product" onClick={onRemoveProduct}>
                Remove
            </button>
        </section>
    );
}
