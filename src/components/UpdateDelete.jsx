import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'

const url = "https://api-sprint2.herokuapp.com/usuario/";

const UpdateDelete = () => {

    const [state, setState] = useState([])
    const [estado, setEstado] = useState({id:'',nombre:'',apellido_paterno:'',apellido_materno:'',username: ''})
    const [modal, setModal] = useState(false)    
    

   
 useEffect(() => {
      peticionGet()
    },[])

    const modalInsertar = () => {
        setModal(!modal) // cambio de valor para el modalInsertar
    }

    // const seleccionUsuario = (valor) =>{
    //     setState(
    //        {form:{
    //        id: valor.id,
    //        nombre: valor.nombre,
    //        apellido_paterno: valor.apellido_paterno,
    //        apellido_materno: valor.apellido_materno,
    //        username: valor.username}
    //        })
    // }

   const  peticionGet =  () =>{
         axios.get(url)
        .then((response)=>{
            setState(response.data)
            console.log(state);
        }) 
        .catch(error =>{
            console.log(error)
        })
    }
   
    return (
            <div>
            <button onClick={() => modalInsertar()}>Añadir Usuario</button>
                <h3>Datos de usuario</h3>
                {state.map((valor)=>{
                return(
                    <div key={valor.id}>
                    <p>{valor.id}</p>
                    <p>{valor.nombre}</p>
                    <p>{valor.apellido_paterno}</p>
                    <p>{valor.apellido_materno}</p>
                    <p>{valor.username}</p>
                    <br/>
                    <button>Editar</button>
                    <button>Eliminar</button>

                    </div>
                    )}
                )}
 

                <Modal isOpen={modal}>
                    <h1>Crear Usuario</h1>
                    <ModalHeader style={{display: 'block'}}>
                        <span style={{float: 'right'}}>x</span>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label htmlFor="id">id</label>
                            <input  className="form-control" type="text" name="id" id="id" readOnly />
                            <br/>
    
                            <label htmlFor="nombres">Nombre</label>
                            <input className="form-control" type="text" name="nombre" id="nombre" />
                            <br/>
                            <label htmlFor="apellidos">Apellido Paterno</label>
                            <input className="form-control" type="text" name="apellido_paterno" id="apellido_paterno" />
                            <br/>
                            <label htmlFor="apellidos">Apellido Materno</label>
                            <input className="form-control" type="text" name="apellido_materno" id="apellido_materno" />
                            <br/>
                            <label htmlFor="telefono">Correo</label>
                            <input className="form-control" type="email" name="username" id="username" />
                            <br/>
                            <label htmlFor="direccion">Contraseña</label>
                            <input className="form-control" type="password" name="contraseña" id="contraseña" />
                            <br/>

                        </div>

                    </ModalBody>
                    <ModalFooter>

                        <button className="btn btn-primary"
                        >
                            Actualizar
                        </button>
                        <button className="btn btn-danger"
                         onClick={() => modalInsertar()}
                           >
                            Cancelar
                        </button>
                    </ModalFooter>
                </Modal>
            </div>
       
    )
}

export default UpdateDelete
