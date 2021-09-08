//Code here
import React, { Component } from "react";
import Cards from "../components/Cards";
import { Navbar } from "../components/Navbar";
import {Link} from 'react-router-dom'

const url = "https://www.omdbapi.com/?i=tt3896198&apikey=3c86e97";

export default class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      peli: [],
      searchTerm: 'Batman',
      error:''
    };
  }

  async componentDidMount() {
    const res = await fetch(`${url}&s=${this.state.searchTerm}`);
    const {Search} = await res.json();
    this.setState({ peli: Search });
    console.log(this.state.peli);
  }

  render() {

    const handleSubmit = async (e) => {
      e.preventDefault()
      const res = await fetch(`${url}&s=${this.state.searchTerm}`)
      const { Search } = await res.json()
      this.setState({ peli: Search })
      console.log(this.state.peli)
  }

    const buscar = (<form className="d-flex justify-content-end" onSubmit = {handleSubmit}>
    <input
      className="form-control me-sm-2 bg-light"
      type="text"
      name="searchTerm"
      placeholder="Busca tu película favorita"
      onChange = {(e)=>this.setState({searchTerm:e.target.value})}
      value={this.state.searchTerm}
    />
    <p className="btn btn-warning my-2 my-sm-0">🔍</p>
  </form>)

    return (
      <div>
        <Navbar form= {buscar}/>
        <div className="carContainer">
          {this.state.peli.map((movie, index) => {
            return (
            <Cards key={index} data={movie}/>
            )
          }
          )}
        </div>
      </div>
    );
  }
}
