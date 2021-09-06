//Code here
import React, { Component } from "react";
import Cards from "../components/Cards";
import Login from "../components/Login";
import {Link} from 'react-router-dom'

const url = "https://api-sprint2.herokuapp.com/movie";

export default class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      film: [],
      search: '',
    };
  }

  async componentDidMount() {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    this.setState({ film: data });
    console.log(this.state.film);
  }

  render() {

    return (
      <div>
       <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img src="https://res.cloudinary.com/biggiegun/image/upload/v1630781079/APISprint2/logoBlockbuster_aidxa9.png" alt="Logo Blockbuster" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarColor02"
                aria-controls="navbarColor02"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Todas
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Más Valoradas
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Menos Valoradas
                    </a>
                  </li>
                  <form className="d-flex justify-content-end">
                    <input
                      className="form-control me-sm-2 bg-light"
                      type="text"
                      name="search"
                      placeholder="Busca tu película favorita"
                    />
                    <button className="btn btn-warning my-2 my-sm-0">🔍</button>
                  </form>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login 
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/registro">
                      Registro 
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div>
          {this.state.film.map((datos, index) => {
            return <Cards key={index} peliculas={datos}/>;
          })}
        </div>
      </div>
    );
  }
}
