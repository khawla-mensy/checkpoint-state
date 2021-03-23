import "./App.css";
import React, { Component } from "react";
import Profile from "./Components/Profile/Profile";
import bootstrap from "react-bootstrap";

class App extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
        };

        this.handleShow = () => {
            this.setState({ show: !this.state.show });
        };
    }

    render() {
        {
            return (
                <div className="App">
                    <button className="button" onClick={this.handleShow}>
                        Show Profile
                    </button>
                    {this.state.show === true ? (
                        <Profile />
                    ) : (
                        <h2 style={{ color: "red" }}>Nothing to Show !</h2>
                    )}
                </div>
            );
        }
    }
}

export default App;
