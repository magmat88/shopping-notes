import React from 'react';

import { ShoppingListItem } from './components/shoppingListItem/shoppingListItem';
import './app.scss';

export function App() {
    return (
        <div className="app">
            <ShoppingListItem />
        </div>
    );
}