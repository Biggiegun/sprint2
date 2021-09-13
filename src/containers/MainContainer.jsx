//Code here
import React, { Component } from "react";
import Cards from "../components/Cards";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";

const url = "https://api-sprint2.herokuapp.com/movie/";

export default class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      peli: [],
      searchTerm: "",
      error: false,
    };
  }

  async componentDidMount() {
    const res = await fetch(url);
    const data = await res.json();
    this.setState({ peli: data });
    console.log(this.state.peli);
  }

  render() {
    const todas = async () => {
      const res = await fetch(url);
      const data = await res.json();
      this.setState({ peli: data });
      this.setState({error:false});
    };

    const menosValoradas = async () => {
      const res = await fetch(`${url}?calificación_gte=0&calificación_lte=7`);
      const data = await res.json();
      this.setState({ peli: data });
      this.setState({error:false});
    };

    const masValoradas = async () => {
      const res = await fetch(
        `${url}?calificación_gte=7.1&calificación_lte=10`
      );
      const data = await res.json();
      this.setState({ peli: data });
      this.setState({error:false});
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (this.state.searchTerm === "") {
        const res = await fetch(url);
        const data = await res.json();
        this.setState({ peli: data });
        this.setState({error:false});
        console.log(this.state.peli);

      } else {
        const res = await fetch(`${url}?titulo=${this.state.searchTerm}`);
        const data = await res.json();
        this.setState({ peli: data });
        console.log(this.state.peli);
        if (!this.state.peli.length) {
          this.setState({error:true});
          return
        }
      }
    };

    const buscar = (
      <form className="d-flex justify-content-end" onSubmit={handleSubmit}>
        <input
          className="form-control me-sm-2 bg-light"
          type="text"
          name="searchTerm"
          placeholder="Busca tu película favorita"
          onChange={(e) => this.setState({ searchTerm: e.target.value })}
          value={this.state.searchTerm}
        />
        <button className="btn btn-warning my-2 my-sm-0">🔍</button>
      </form>
    );

    return (
      <div>
        <Navbar
          form={buscar}
          menos={menosValoradas}
          mas={masValoradas}
          todas={todas}
        />

        <div className="carContainer">
          <div>
            {this.state.error && 
            <div>
            <img src="https://res.cloudinary.com/biggiegun/image/upload/v1631536135/APISprint2/noResults_kuvjqy.png" alt="Película no Encantrada !!" />
            <h3>No se encontraron resultados para "{this.state.searchTerm}"</h3>
            </div>
            }
          </div>
          {this.state.peli.map((movie, index) => {
            return <Cards key={index} data={movie} />;
          })}
        </div>
      </div>
    );
  }
}
