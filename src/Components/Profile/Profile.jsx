import React, { Component } from "react";
import "./Profile.css";
import { Button } from "react-bootstrap";
import image from "../../ProfilePhoto.jpg";
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "Khawla",
            bio: "This is a biography",
            imgSrc: image,
            profession: "chemicalIngineer",
            date: new Date(),
        };
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <div className="Profile">
                <h1 style={{ color: "red" }}>Hello This is my Profile </h1>
                <h3>{this.state.fullName}</h3>
                <h3>{this.state.profession}</h3>
                <h3>{this.state.bio}</h3>
                {/* <h3>{this.state.imgSrc}</h3> */}
                <img src={this.state.imgSrc} alt="photo" />
                <h1>the time since the component has mounted !</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
