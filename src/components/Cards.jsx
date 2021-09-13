// Code here
import React, { Component } from "react";
import "bootswatch/dist/darkly/bootstrap.min.css";
import { Modal, ModalBody, ModalFooter} from "reactstrap";
import "../styles/main.css";
export default class Cards extends Component {
  constructor() {
    super();
    this.state = {
      modal: false
    }
  }
  render() {
    const { titulo, imagen, lanzamiento, calificación, descripción, director } = this.props.data;

    const openModal = () => this.setState({modal:!this.state.modal});

    return (
      <div>
        <div className="card">
          <button
            className="card"
            onClick={() => {
              openModal();
            }}
          >
            <img src={imagen} alt="Película" width="350" height="350" />
          </button>
          <h4>{titulo}</h4>
          <p>{lanzamiento}</p>
          <p>🌟 {calificación}</p>
        </div>

        <Modal isOpen={this.state.modal}>
          <h1>Detalle Película</h1>
          <ModalBody>
           <img src={imagen} alt="imagen Película" width="150" height="150"/>
           <h3>{titulo}</h3>
           <h4>{lanzamiento}</h4>
           <h4>Director: {director}</h4>
           <p>{descripción}</p>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={() => openModal()}>
              Volver al listado
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
