import React, { Component } from "react";

export class TempClassComp extends Component {
    constructor() {
        super();
        this.state = { color: "red" };
    }

    render() {
        return (
            <div>
                <h1 style={this.state}>Hello From class Component</h1>
            </div>
        );
    }
}

export default TempClassComp;
