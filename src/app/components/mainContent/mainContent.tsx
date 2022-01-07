import React, { Fragment } from 'react';
import './mainContent.scss';

interface MainContentProps {
    title: string;
}

export function MainContent(title: MainContentProps): JSX.Element {
    return (
        <Fragment>
            <div>{title}</div>
        </Fragment>
    );
}
