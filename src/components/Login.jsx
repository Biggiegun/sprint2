import React, { Component } from 'react'
import axios from 'axios'
import md5 from 'md5'
import {Link} from 'react-router-dom'

const url = "https://api-sprint2.herokuapp.com/usuario";

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            form: {
                username: "",
                password:""
            }
        }
    }

    handleChange = async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form) // Se imprime todo el estado
    }

    iniciarSesion = async () =>{
        await axios.get(url, {parameters:{username:this.state.form.username, password:md5(this.state.form.password)}})
        .then(respuesta=>{ 
            return respuesta.data
            })
        .then(respuesta=>{
            if(respuesta.length>0){
                let traer = respuesta[0];
                alert (`Bienvenido ${traer.nombre} ${traer.apellido_paterno}`);
            }else{
                alert('El usuario y/o la contraseña no son correctos');
            }
        })
        .catch(error => console.log(error));
    } 

    handleSubmit = (e) =>{
        e.preventDefault();
    }

    render() {
        return (
            <div>
                 <div>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <h1 className="h4 mb-3 font-weight-normal">
                        Inicio de sesión
                    </h1>

                    <input
                        type="username"
                        id="inputUsername"
                        name="username"
                        className="form-control mt-1"
                        placeholder="username"
                        required=""
                        onChange={this.handleChange}
                    />

                    <input
                        type="Password"
                        id="inputPassword"
                        name="password"
                        className="form-control mt-1"
                        placeholder="Contraseña"
                        required=""
                        onChange={this.handleChange}
                    />

                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        onClick={()=> this.iniciarSesion()}
                    >
                        Login
                    </button>

                    <div className="">
                        <p>Login with social networks</p>

                        <div className="google-btn btn-primary">
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                            </div>
                            <p className="btn-text">
                                <b>Sign in with google</b>
                            </p>
                        </div>
                    </div>
                      <Link
                        to="/registro"
                        className="Link"
                       >
                        Create new account
                    </Link>
                </form>
            </div>
            </div>
        )
    }
}
