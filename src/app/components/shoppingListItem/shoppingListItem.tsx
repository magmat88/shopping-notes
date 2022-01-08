import plusBtn from "../../images/plusBtn.svg";
import './shoppingListItem.scss';

export function ShoppingListItem(): JSX.Element {
    return (
        <div className="shopping-list-item">
            <div className="add-product">
                <div className="btn-add-product"><img src={plusBtn} alt="Circle button with plus symbol" /></div>
                <div className="text-product-name">Apples</div>
                <div className="text-product-category">in Fruits</div>
            </div>
            <button className="btn-remove-product">Remove</button>
        </div>
    );
}
