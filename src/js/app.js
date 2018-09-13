import React, { Component } from "react";
import { render } from "react-dom";
import "../scss/app.scss";
import Header from "../components/Header";
import styled from "styled-components";

const Hello = styled.h1`
    text-align: center;
    color: firebrick;
`;

class Greeting extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Hello>Hello {this.props.name}</Hello>
                </div>
            </div>
        );
    }
}

render(<Greeting name="Parcel" />, document.getElementById("root"));
