import React, { Fragment } from 'react';
import { ReactComponent as BackIcon } from '../../images/backIcon.svg';
import { ReactComponent as SearchIcon } from '../../images/searchIcon.svg';
import './navbar.component.scss';

interface NavbarProps {
    onAddList: () => void;
    onBack: () => void;
    onCancel: () => void;
    onDone: () => void;
    showCatalog: () => void;
    showPopular: () => void;
}

export function Navbar({
    onAddList,
    onBack,
    onCancel,
    onDone,
    showCatalog,
    showPopular
}: NavbarProps): JSX.Element {
    function showAddProductNavigation(): JSX.Element {
        return (
            <Fragment>
                <button className="btn--back" onClick={onBack}>
                    <BackIcon className="back-icon" /> Back
                </button>
                <button className="btn--done" onClick={onDone}>
                    Done
                </button>
            </Fragment>
        );
    }

    function showAddListNavigation(): JSX.Element {
        return (
            <Fragment>
                <button className="btn--cancel" onClick={onCancel}>
                    Cancel
                </button>
                <button className="btn--done" onClick={onDone}>
                    Done
                </button>
            </Fragment>
        );
    }

    function renderNavigation(): JSX.Element {
        return (
            <section className="navigation__btns">
                {/* TODO: add state to manage navigation */}

                {/* if add product clicked */}
                {showAddProductNavigation()}
                {/* if add list clicked */}
                {showAddListNavigation()}
                {/* if cancel clicked or it is an initial view - show preview - navigation is empty section to preserve styles*/}
            </section>
        );
    }

    function renderHeader(): JSX.Element {
        return (
            // TODO: check if empty header is visible - if yes, consider conditionals outside of header tag
            // TODO: if add product clicked - add set className="filter__btns" instead of "navbar__title" to header
            <header className="navbar__title">
                {/* if add list clicked - show add list header */}
                <h1>Add List</h1>

                {/* if cancel clicked or it is an initial view - show preview header*/}
                <h1>Lists</h1>
                <button onClick={onAddList}>Add list</button>

                {/* if add product clicked - show add product header */}
                <button
                    className="btn--popular btn--wide"
                    onClick={showPopular}
                >
                    Popular
                </button>
                <button
                    className="btn--catalog btn--wide"
                    onClick={showCatalog}
                >
                    Catalog
                </button>
            </header>
        );
    }

    function renderForm(): JSX.Element {
        return (
            // if add product clicked - return form, else - return nothing
            <form className="form">
                <label>
                    <SearchIcon className="form__label--search" />
                </label>
                <input type="text" placeholder="Add product" />
            </form>
        );
    }

    return (
        <nav className="navbar">
            {renderNavigation()}
            {renderForm()}
            {renderHeader()}
        </nav>
    );
}
