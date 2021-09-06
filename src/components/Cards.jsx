// Code here
import React, { Component } from "react";
import "bootswatch/dist/darkly/bootstrap.min.css";

export default class Cards extends Component {
  render() {
    const { imagen, titulo, lanzamiento } = this.props.peliculas;

    return (
      <div>
      <div className="d-flex  flex-wrap justify-content-around align-items-center m-2">
         <img src={imagen} alt="Movie" width="200" height="200"/>
      </div>
        <div className="d-flex  flex-wrap justify-content-around align-items-center m-2">
          <h1>{titulo}</h1>
          </div>
          <div className="d-flex  flex-wrap justify-content-around align-items-center m-2">
              <h2>{lanzamiento}</h2>
            </div>
      </div>
    );
  }
}
