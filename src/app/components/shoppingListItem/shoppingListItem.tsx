import React from 'react';
import { ReactComponent as PlusIcon } from '../../images/plusIcon.svg';
import './shoppingListItem.scss';

interface ShoppingListItemProps {
    onAddProduct: () => void;
    onRemoveProduct: () => void;
    product: Product;
}

type Product = {
    // TODO: category as enum
    category: string;
    name: string;
};

export function ShoppingListItem({
    onAddProduct,
    onRemoveProduct,
    product
}: ShoppingListItemProps): JSX.Element {
    return (
        <div className="shopping-list-item">
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
        </div>
    );
}
