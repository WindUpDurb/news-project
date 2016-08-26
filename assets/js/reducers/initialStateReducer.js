"use strict";

import * as initialState from "./initialState";

export default function initialStateReducer(state = initialState.initialState, action) {
    switch(action.types) {
        default:
            return state;
    }
}