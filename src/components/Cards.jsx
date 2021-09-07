// Code here
import React, { Component } from "react";
import "bootswatch/dist/darkly/bootstrap.min.css";

export default class Cards extends Component {
  render() {
    const { Title, Poster, Year } = this.props.data;

    return (
      <div>
      <div className="d-flex  flex-wrap justify-content-around align-items-center m-2">
         <img src={Poster} alt="Movie" width="200" height="200"/>
      </div>
        <div className="d-flex  flex-wrap justify-content-around align-items-center m-2">
          <h1>{Title}</h1>
          </div>
          <div className="d-flex  flex-wrap justify-content-around align-items-center m-2">
              <h2>{Year}</h2>
            </div>
      </div>
    );
  }
}
