import React from 'react';
import { StylesProvider } from "@material-ui/core/styles";
import {Route, Switch, HashRouter } from "react-router-dom";

import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

function App() {
    return <div>
        <StylesProvider>
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