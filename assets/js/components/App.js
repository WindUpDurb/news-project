"use strict";

import React from "react";
import {connect} from "react-redux";

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>New Project</h1>
            </div>
        )
    }
}


App.propTypes = {
    
};

function mapStateToProps(state, ownProps) {
    return {
        
    };
}

export default connect(mapStateToProps)(App);