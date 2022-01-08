import { ReactComponent as BackIcon } from '../../images/backIcon.svg';
import { ReactComponent as SearchIcon } from '../../images/searchIcon.svg';
import './navigationBar.component.scss';

interface NavigationBarProps {
    onBack: () => void;
    onDone: () => void;
    showCatalog: () => void;
    showPopular: () => void;
}

export const NavigationBar = function ({
    onBack,
    onDone,
    showCatalog,
    showPopular
}: NavigationBarProps): JSX.Element {
    return (
        <div className="navigation-bar-items">
            <div className="navigation-btns">
                <button className="btn-back" onClick={onBack}>
                    <BackIcon className="back-icon" /> Back
                </button>
                <button className="btn-done" onClick={onDone}>
                    Done
                </button>
            </div>
            <form className="search-field">
                <label>
                    <SearchIcon className="search-icon" />
                </label>
                <input type="text" placeholder="Add product" />
            </form>
            <div className="filter-btns">
                <button className="btn-popular btn-wide" onClick={showPopular}>
                    Popular
                </button>
                <button className="btn-catalog btn-wide" onClick={showCatalog}>
                    Catalog
                </button>
            </div>
        </div>
    );
};
