//Code here
import React, { Component } from 'react'
//import "bootstrap/dist/css/bootstrap.min.css"
//import "bootstrap/dist/js/bootstrap.bundle"
//import "bootswatch/dist/darkly/bootstrap.min.css";

export default class Banner extends Component {
    render() {
        return (
            <div>
  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://res.cloudinary.com/biggiegun/image/upload/v1631567950/APISprint2/mulan_syl89n.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/biggiegun/image/upload/v1631567948/APISprint2/unidos_eefgpm.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/biggiegun/image/upload/v1631567948/APISprint2/raya_ph3nmi.png" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Anterior</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Siguiente</span>
  </button>
</div>
            </div>
        )
    }
}
