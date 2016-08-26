"use strict";

import { combineReducers } from "redux";
import initialStateReducer from "./initialStateReducer"

const rootReducer = combineReducers({
    initialState: initialStateReducer
});

export default rootReducer;