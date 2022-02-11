import React, { Fragment } from 'react';
import { setSearchTerm, clearSearchTerm } from './searchTermSlice';
import { ReactComponent as SearchIcon } from '../../images/searchIcon.svg';
import { ReactComponent as BackIcon } from '../../images/backIcon.svg';

interface SearchTermProps {
    searchTerm: string;
    dispatch: any;
}

export const SearchTerm = ({ searchTerm, dispatch }: SearchTermProps): JSX.Element => {

    const onSearchTermChangeHandler = (event: any) => {
        const userInput = event.target.value;
        dispatch(setSearchTerm(userInput));
    };

    const onClearSearchTermHandler = () => {
        dispatch(clearSearchTerm());
    };

    return (
        <Fragment>
            <button className="btn--back" onClick={onClearSearchTermHandler}>
                    <BackIcon className="back-icon" /> Back
                </button>
            <button className="btn--done" onClick={()=>console.log('on done')}>
                Done
            </button>

            <form className="form">
                <label>
                    <SearchIcon className="form__label--search" />
                </label>
                <input type="text" placeholder="Add product" value={searchTerm} onChange={onSearchTermChangeHandler}/>
            </form>
        </Fragment>
    );
};
