import React, { Component } from 'react';

export default class MainFooter extends Component {
    render (){
        return (
            <div>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row" id="correo">
                            <div className="col-md-6">
                                <h5>Para mayor información del servicio de <span>MascotaData</span>, envíanos un correo</h5>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Ingrese su correo" aria-label="correo" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bell" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z"/>
                                            <path fill-rule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                                        </svg>
                                    </span>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" id="contacto">
                            <div className="col-md-4">
                                <h6>MASCOTADATA</h6>
                                <p className="contacto">Síguenos en nuestras redes sociales!</p>
                                <hr/>
                                <a href="/">
                                    <p className="redes">Facebook</p>
                                </a>
                                <a href="/">
                                    <p className="redes">Instagram</p>
                                </a>
                                <a href="/">
                                    <p className="redes">Twitter</p>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <h6>AYUDA</h6>
                                <a href="/" className="ayuda">
                                    <p className="contacto">Términos y Condiciones</p>
                                </a>
                                <a href="/" className="ayuda">
                                    <p className="contacto">Video Tutorial</p>
                                </a>
                                <a href="/" className="ayuda">
                                    <p className="contacto">Contacto del Desarrollador</p>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <h6>ÚLTIMAS NOTICIAS</h6>
                                <p className="contacto">- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis ex euismod, venenatis orci sed, accumsan orci.</p>
                                <p className="contacto">- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis ex euismod, venenatis orci sed, accumsan orci.</p>
                            </div>
                        </div>
                </div>
                </div>
                <div className="container-fluid" id="copy">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p id="copytext">© 2020 MascotaData.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}