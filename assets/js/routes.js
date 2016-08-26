"use strict";

import React from "react";
import { Route, IndexRoute, IndexRedirect } from "react-router";
import App from "./components/App";


export const generateRoutes = (store) => {


    return (
        <Route path="/" component={App}>
        </Route>
    );
};