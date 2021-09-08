import React, { Component } from 'react'
import axios from 'axios'
import md5 from 'md5'
import uuid from 'react-uuid' // genera id aleatorio!!
import {Link, Redirect} from 'react-router-dom'
import '../styles/main.css'
const url = "https://api-sprint2.herokuapp.com/usuario/";

export default class Registro extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            form: {
                id: '',
                apellido_paterno: '',
                apellido_materno: '',
                nombre: '',
                username: '',
                password: ''
            },
            access: false
        }
    }

    handleChange = async e =>{
        await this.setState({
        form: {
            ...this.state.form,
            [e.target.name] : e.target.value
        }
        });
        console.log(this.state.form) // imprime todo el estado!!
    }

    handleSubmit= (e) =>{
        e.preventDefault();
    }

    RegistroUsuario = async () => {
        await axios.post(url, {
            id: uuid,
            apellido_paterno: this.state.form.apellido_paterno,
            apellido_materno: this.state.form.apellido_materno,
            nombre: this.state.form.nombre,
            username: this.state.form.username,
            password: md5(this.state.form.password)
        })
        .then(respuesta => {
            alert('Usuario Registrado')
            this.setState({access:true})

        }).catch(error => {
            console.log(error)
        })

            await axios.get(url)
            .then(respuesta => localStorage.setItem('Registro usuario', JSON.stringify(respuesta.data)))               
            
    }

    render() {
        return (
          <div className="Registro py-5 container text-center">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">
                        ¡Registrate en nuestro sistema!
                    </h1>
                    <div className="fadeIn first ">
                        <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS689Xb1GJwNGzZl9KR7CTRKAZFaXt1060H32xPbb8hw_NXNpJ409Sl-aLnPsJQUfKJnYEV_KndttR1bbUKS_f7DGE3OP59H1Y&usqp=CAU&ec=45725305" 
                        id="icon" 
                        alt="User Icon" 
                        width="100px"/>
                        <h3>Crea una cuenta</h3>
                    </div>

                    <input
                        type="text"
                        placeholder="Apellido paterno"
                        name="apellido_paterno"
                        className="input1"
                        autoComplete="off"
                        required=""
                        onChange={this.handleChange}

                    />

                    <input
                        type="text"
                        placeholder="Apellido materno"
                        name="apellido_materno"
                        className="input1"
                        autoComplete="off"
                        required=""
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        name="nombre"
                        className="input1"
                        placeholder="nombre"
                        required=""
                        onChange={this.handleChange}
                    />

                    <input
                        type="email"
                        name="username"
                        className="input1"
                        placeholder="Email"
                        required=""
                        onChange={this.handleChange}
                    />

                    <input
                        type="Password"
                        name="password"
                        className="input1"
                        placeholder="Password"
                        required=""
                        onChange={this.handleChange}
                    />
                    <br />
                    <button
                        type="submit"
                        className="btn btn-primary btn-block mb-1"
                        onClick={()=>this.RegistroUsuario()}
                    >
                        Register
                    </button>
                    <br />
                    <Link
                        to="/"
                        className="link"
                    >
                        Already registered?
                    </Link>
                </form>
                {this.state.access && <Redirect to="/main" />}
            </div>

        )
    }
}
