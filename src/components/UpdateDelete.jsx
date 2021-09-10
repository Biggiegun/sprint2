import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'

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

    const seleccionUsuario = (valor) =>{
        modalInsertar();
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
            <div>
            <button onClick={() => modalInsertar()}>Cargar Modal</button>
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
                    <button onClick={()=>seleccionUsuario(valor)}>Editar</button>
                    <button onClick={()=>{seleccionUsuario(valor); setmodaldelete({modaldelete:true})}}>Eliminar</button>

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
                       onClick={() => peticionDelete()}>Sí</button>
                        <button 
                       onClick={() => setmodaldelete({modaldelete:false})}>No</button>
                    </ModalFooter>
                </Modal>
            </div>
       
    )
}

export default UpdateDelete
