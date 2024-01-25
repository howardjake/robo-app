import React, {Component} from "react";

class Hello extends Component {
    render() {
        return (
        <h1>
            {this.props.greeting}
            <p>Welcome to React.js</p>
        </h1>
        )
    }
}

export default Hello;