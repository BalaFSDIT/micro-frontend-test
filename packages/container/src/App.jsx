import React from 'react';
import MarketingApp from './MarketingApp.jsx';
import Header from './Header.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return <div>
        <BrowserRouter>
            I am a React Container!
            <Header></Header>
            <MarketingApp></MarketingApp>
        </BrowserRouter>
    </div>
};

export default App;