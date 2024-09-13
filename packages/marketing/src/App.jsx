import React from 'react';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import {Route, Switch, HashRouter } from "react-router-dom";

import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

const generateClassName = createGenerateClassName({
    productionPrefix: 'mrkt-'
});

function App() {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <HashRouter>
            <Switch>
                <Route path='/pricing' exact>
                    <Pricing></Pricing>
                </Route>
                <Route path='/'>
                    <Landing></Landing>
                </Route>
                <Route path='**'>
                    <div>No Route Found!</div>
                </Route>
            </Switch>
            </HashRouter>
        </StylesProvider>

    </div>
};

export default App;