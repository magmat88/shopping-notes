import React from 'react';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { MainContent } from './components/mainContent/mainContent';
import './App.scss';

function App() {
    return (
        <div className="App">
            <Header title={"This is header"} />
            <MainContent title={"This is main content"} />
            <Footer title={"This is footer"} />
        </div>
    );
}

export default App;
