"use strict";

const React = require("react");
const ReactDOM = require("react-dom");

const Hello = () => {
    return (
        <div>
            <h1>Hello, hello</h1>
        </div>
    );
};



ReactDOM.render(<Hello/>, document.getElementById("root"));