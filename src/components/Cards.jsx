// Code here
import React, { Component } from "react";
import "bootswatch/dist/darkly/bootstrap.min.css";
import '../styles/main.css'
export default class Cards extends Component {
  render() {
    const { Title, Poster, Year } = this.props.data;

    return (
      <div className="card">
            <img src={Poster} alt="Movie" width="350" height="350"/>
            <h4>{Title}</h4>
            <p>{Year}</p>
      </div>
    );
  }
}
