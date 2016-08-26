"use strict";

import React from "react";
import {render} from "react-dom";
import configureStore from "./store/configureStore";
import{Provider} from "react-redux";
import {Router, browserHistory} from "react-router";
import {generateRoutes} from "./routes";

const store = configureStore();

const Hello = () => {
    return (
        <div>
            <h1>Test, test</h1>
        </div>
    );
};



render(
    <Provider store={store}>
        <Router
            history={browserHistory}
            routes={generateRoutes(store)}/>
    </Provider>,
    document.getElementById("root"));