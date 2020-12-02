import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MainNav extends Component {
    render (){
        return (
            <div className="container-fluid sticky-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Link className="nav-link" to="/">MascotaData</Link>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/nosotros">Nosotros</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/testimonios">Testimonios</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/recordatorios">Recordatorios</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/mismascotas">Mis Mascotas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/iniciosesion">Inicio de Sesión</Link>
                                </li> 
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}