import React from 'react';
import MarketingApp from './MarketingApp.jsx';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import Header from './Header.js';
import { BrowserRouter } from 'react-router-dom';

const generateClassName = createGenerateClassName({
    productionPrefix: 'mrkt-'
});

function App() {
    return <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
            I am a React Container!
            <Header></Header>
            <MarketingApp></MarketingApp>
        </BrowserRouter>
    </StylesProvider>
};

export default App;