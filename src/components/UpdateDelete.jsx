import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import '../styles/main.css'
import {Link} from 'react-router-dom'

const url = "https://api-sprint2.herokuapp.com/usuario/";

const UpdateDelete = () => {

    const [state, setState] = useState([])
    const [form, setform] = useState({id:'',nombre:'',apellido_paterno:'',apellido_materno:'',username: ''})
    const [modal, setModal] = useState(false)    
    const [modaldelete, setmodaldelete] = useState(false)

   
 useEffect(() => {
      peticionGet()
    },[])

    const modalInsertar = () => {
        setModal(!modal) // cambio de valor para el modalInsertar
    }

    const modalDelete = () =>{
        setmodaldelete(!modaldelete)
    }

    const seleccionUsuario = (valor) =>{
        setform({
           id: valor.id,
           nombre: valor.nombre,
           apellido_paterno: valor.apellido_paterno,
           apellido_materno: valor.apellido_materno,
           username: valor.username}
           )
    }

    const handleChange = async(e) => {
        e.persist()
        await setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }

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
   
    const peticionPut = async () => {
        await axios.put(url+form.id,form)
        .then(response => {
            modalInsertar();
            peticionGet();
        }).catch(error => {
            console.log(error.message);
        })
    }

    const peticionDelete = async () => {
        await axios.delete(url+form.id)
        .then(response => {
            setmodaldelete({modaldelete:false});
            peticionGet();
        }).catch(error => {
            console.log(error.message);
        })
    }

    return (
            <div id="usuarios">
                <div>
                <Link to="/main"><img src="https://res.cloudinary.com/biggiegun/image/upload/v1630781079/APISprint2/logoBlockbuster_aidxa9.png" alt="Ir a Home" /></Link>
                <h3>Datos de usuario</h3>
                {state.map((valor)=>{
                return(
                    <div key={valor.id}>
                    <p>ID: {valor.id}</p>
                    <p>Nombre: {valor.nombre}</p>
                    <p>Apellido Paterno: {valor.apellido_paterno}</p>
                    <p>Apellido Materno: {valor.apellido_materno}</p>
                    <p>Username: {valor.username}</p>
                    <br/>
                    <button className="botonCRUD" onClick={()=>{seleccionUsuario(valor); modalInsertar()}}>Editar</button>
                    <button className="botonCRUD" onClick={()=>{seleccionUsuario(valor); modalDelete()}}>Eliminar</button>

                    </div>
                    )}
                )}
 

                <Modal isOpen={modal}>
                    <h1>Gestión de Usuario</h1>
                    <ModalHeader style={{display: 'block'}}>
                        <span style={{float: 'right'}}>x</span>
                    </ModalHeader>
                    <ModalBody>
                        <div className="form-group">
                            <label htmlFor="id">id</label>
                            <input  className="form-control" type="text" name="id" id="id" readOnly onChange={handleChange} value={form.id}/>
                            <br/>
    
                            <label htmlFor="nombres">Nombre</label>
                            <input className="form-control" type="text" name="nombre" id="nombre" onChange={handleChange} value={form.nombre}/>
                            <br/>
                            <label htmlFor="apellidos">Apellido Paterno</label>
                            <input className="form-control" type="text" name="apellido_paterno" id="apellido_paterno" onChange={handleChange} value={form.apellido_paterno}/>
                            <br/>
                            <label htmlFor="apellidos">Apellido Materno</label>
                            <input className="form-control" type="text" name="apellido_materno" id="apellido_materno" onChange={handleChange} value={form.apellido_materno}/>
                            <br/>
                            <label htmlFor="telefono">Correo</label>
                            <input className="form-control" type="email" name="username" id="username" onChange={handleChange} value={form.username}/>
                            <br/>

                        </div>

                    </ModalBody>
                    <ModalFooter>

                        <button className="btn btn-primary"
                        onClick={()=> peticionPut()}>
                            Actualizar
                        </button>
                        <button className="btn btn-danger"
                         onClick={() => modalInsertar()}
                           >
                            Cancelar
                        </button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={modaldelete}>
                    <ModalBody>
                        Está seguro de eliminar el usuario {form && form.nombre}
                    </ModalBody>
                    <ModalFooter>
                        <button 
                       onClick={() => {peticionDelete(); modalDelete()}}>Sí</button>
                        <button 
                       onClick={() => {setmodaldelete({modaldelete:false}); modalDelete()}}>No</button>
                    </ModalFooter>
                </Modal>
                </div>
            </div>
       
    )
}

export default UpdateDelete
