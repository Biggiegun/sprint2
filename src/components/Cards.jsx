// Code here
import React, { Component } from "react";
import "../styles/main.css"
import { Modal, ModalBody, ModalFooter} from "reactstrap";
import "../styles/main.css";
export default class Cards extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      modal2: false
    }
  }
  render() {
    const { titulo, imagen, lanzamiento, calificación, descripción, director, corto } = this.props.data;

    const openModal = () => this.setState({modal:!this.state.modal});
    const openTrailer = () => this.setState({modal2:!this.state.modal2});
    
    return (
      <div>
        <div className="card" onClick={() => {
              openModal();
            }}>
         
            <img src={imagen} alt="Película" width="300" height="400" />
          <p id="calificación">🌟 {calificación.toFixed(1)}</p>
        </div>

        <Modal isOpen={this.state.modal}>
          <div id="cerrar">
            <div id="equis" onClick={() => openModal()}>X</div>
          </div>
          <h1>Detalle Película</h1>
          <ModalBody>
            <div id="infoContainer">
           <img id="imgDetalle" src={imagen} alt="imagen Película" width="150" height="150"/>
           <div>
           <h3>{titulo}</h3>
           <h4>{lanzamiento}</h4>
           </div>
           </div>
           <h4>Director: {director}</h4>
           <p>{descripción}</p>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={() => openModal()}>
              Volver al listado
            </button>
            <button className="btn btn-primary" onClick={()=>openTrailer()}>
              Ver trailer
            </button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.modal2}>
        <iframe width="498" height="315" src={corto} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
        <ModalFooter>
        <button className="btn btn-primary" onClick={()=>openTrailer()}>
              Cerrar
            </button>
            </ModalFooter>
        </Modal>
      </div>
    );
  }
}
