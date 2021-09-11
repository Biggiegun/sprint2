// Code here
import React, { Component } from "react";
import "bootswatch/dist/darkly/bootstrap.min.css";
import '../styles/main.css'
export default class Cards extends Component {
  render() {
    const { titulo, imagen, lanzamiento, calificación } = this.props.data;

    return (
      <div className="card">
            <img src={imagen} alt="Movie" width="350" height="350"/>
            <h4>{titulo}</h4>
            <p>{lanzamiento}</p>
            <p>{calificación}</p>
      </div>
    );
  }
}
