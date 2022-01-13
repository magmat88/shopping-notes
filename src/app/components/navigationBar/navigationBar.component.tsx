import React, { Fragment } from 'react';
import { ReactComponent as BackIcon } from '../../images/backIcon.svg';
import { ReactComponent as SearchIcon } from '../../images/searchIcon.svg';
import './navigationBar.component.scss';

interface NavigationBarProps {
    onBack: () => void;
    onDone: () => void;
    showCatalog: () => void;
    showPopular: () => void;
}

export function NavigationBar({
    onBack,
    onDone,
    showCatalog,
    showPopular
}: NavigationBarProps): JSX.Element {
    function renderAddProductNavigationBar(): JSX.Element {
        return (
            <div className="navigation-bar">
                <header className="navigation-header">
                    <button className="btn-back" onClick={onBack}>
                        <BackIcon className="back-icon" /> Back
                    </button>
                    <button className="btn-done" onClick={onDone}>
                        Done
                    </button>
                </header>
                <form className="search-field">
                    <label>
                        <SearchIcon className="search-icon" />
                    </label>
                    <input type="text" placeholder="Add product" />
                </form>
                <section className="filter-btns">
                    <button
                        className="btn-popular btn-wide"
                        onClick={showPopular}
                    >
                        Popular
                    </button>
                    <button
                        className="btn-catalog btn-wide"
                        onClick={showCatalog}
                    >
                        Catalog
                    </button>
                </section>
            </div>
        );
    }

    function renderListsPreviewNavigationBar(): JSX.Element {
        return (
            <div className="navigation-bar">
                <header className="navigation-header"></header>
                <section className="navigation-title">
                    <h1>Lists</h1>
                    <button>Add list</button>
                </section>
            </div>
        );
    }

    function renderAddShoppingListNavigationBar(): JSX.Element {
        return (
            <div className="navigation-bar">
                <header className="navigation-header">
                    <button className="btn-back" onClick={onBack}>
                        Cancel
                    </button>
                    <button className="btn-done" onClick={onDone}>
                        Done
                    </button>
                </header>
                <section className="navigation-title">
                    <h1>Add List</h1>
                </section>
            </div>
        );
    }

    return (
        //TODO: write logic for switching views
        <Fragment>
            {renderAddProductNavigationBar()}
            {renderListsPreviewNavigationBar()}
            {renderAddShoppingListNavigationBar()}
        </Fragment>
    );
}