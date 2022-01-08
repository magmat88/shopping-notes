import React from 'react';
import { ReactComponent as PlusBtn} from '../../images/plusBtn.svg';
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
                {/* zmienić style */}
                <button className="btn-add-product" onClick={onAddProduct}>
                    <PlusBtn />
                </button>
                {/* TODO: product.name - first letter to UpperCase if required */}
                <div className="text-product-name">{product.name}</div>
                <div className="text-product-category">in {product.category}</div>
            </div>
            <button className="btn-remove-product" onClick={onRemoveProduct}>
                Remove
            </button>
        </div>
    );
}
