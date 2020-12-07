import React, { Component } from 'react';
import { ApiWebUrl } from '../utils';
import './Usuarios.css';

export default class Usuarios extends Component {

    constructor(props){
        super(props)
        this.state = {
            listaUsuarios:[]
        }
    }

    componentDidMount(){
        const rutaServicio = ApiWebUrl + "usuarios.php";

        fetch(rutaServicio)
        .then(
            res => res.json()
        )
        .then(
            (result) => {
                console.log(result);
                this.setState({
                    listaUsuarios:result
                })
            }
        )
    }

    static dibujarUsuarios(datosTablaUsuarios){
        return(
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="columna-usuario">Nombre</th>
                        <th className="columna-usuario">Apellido</th>
                        <th className="columna-usuario">Correo</th>
                        <th className="columna-usuario">Ciudad</th>
                        <th className="columna-usuario">País</th>
                        <th className="columna-usuario">Nro. Mascotas</th>
                    </tr>
                </thead>
                <tbody>
                {datosTablaUsuarios.map(itemUsuario =>
                    <tr key={itemUsuario.idusuario}>
                        <td className="columna-usuario">{itemUsuario.nombre}</td>
                        <td className="columna-usuario">{itemUsuario.apellido}</td>
                        <td className="columna-usuario">{itemUsuario.correo}</td>
                        <td className="columna-usuario">{itemUsuario.ciudad}</td>
                        <td className="columna-usuario">{itemUsuario.pais}</td>
                        <td className="columna-usuario">{itemUsuario.nromascotas}</td>
                    </tr>
                )}
                </tbody>         
            </table>
        )
    }

    render (){
        let contenidoUsuarios = Usuarios.dibujarUsuarios(this.state.listaUsuarios);
        return (
            <div className="container-fluid" id="cajafuerausuario">
                <div className="container" id="cajadentrousuario">
                    <div className="row filausuario">
                        <div className="col-md-12" id="titulo-usuario">
                            <h3>Nuestros Usuarios</h3>
                        </div>
                    </div>
                    <div className="row filausuario">
                        <div className="col-md-12">
                            {contenidoUsuarios}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}