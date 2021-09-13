import React, { Component } from 'react'
import axios from 'axios'
import md5 from 'md5'
import {Link, Redirect} from 'react-router-dom'
import "bootswatch/dist/darkly/bootstrap.min.css";

const url = "https://api-sprint2.herokuapp.com/usuario";

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            form: {
                username: "",
                password:"",
                access: false
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
        await axios.get(url, {params:{username:this.state.form.username, password:md5(this.state.form.password)}})
        .then(response=>{ 
            return response.data
            })
        .then(response=>{
            if(response.length>0){
                let respuesta = response[0];
                alert (`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
                this.setState({form:{access:true}})
            }else{
                alert('El usuario y/o la contraseña no son correctos');
            }
        })
        .catch(error => console.log(error));
    } 

    handleSubmit = (e) =>{
        e.preventDefault();
        this.iniciarSesion();
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
                        className="input1"
                        placeholder="username"
                        required=""
                        onChange={this.handleChange}
                    />

                    <input
                        type="Password"
                        id="inputPassword"
                        name="password"
                        className="input1"
                        placeholder="Contraseña"
                        required=""
                        onChange={this.handleChange}
                    />

                    <button
                        type="submit"
                        className="btnLogin"
                        
                    >
                        Iniciar Sesión
                    </button>

                    <div className="">
                        <p>Loggearse con redes sociales</p>

                        <div className="google-btn btn-primary">
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                            </div>
                            <p className="btn-text">
                                <b>Inicar sesión con google</b>
                            </p>
                        </div>
                    </div>
                      <Link
                        to="/registro"
                        className="Link"
                       >
                        Crear nueva cuenta
                    </Link>
                </form>
                {this.state.form.access && <Redirect to="/main" />}
            </div>
            </div>
        )
    }
}
