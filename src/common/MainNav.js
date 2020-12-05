import React, { Component } from 'react';
import './MainNav.css';

export default class MainNav extends Component {
    render (){
        return (
            <div className="container-fluid sticky-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <a href="/"><h2>MascotaData</h2></a>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <a href="/" className="nav-link active">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/nosotros" className="nav-link active">Nosotros</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/testimonios" className="nav-link active">Testimonios</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/recordatorios" className="nav-link active">Recordatorios</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/mismascotas" className="nav-link active">Mis Mascotas</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/iniciosesion" className="nav-link active">Inicio de Sesión</a>
                                </li> 
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}