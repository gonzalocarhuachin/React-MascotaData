import React, { Component } from 'react';
import './Mensaje.css';

export default class Mensaje extends Component {
    render (){
        return (
            <div className="container-fluid" id="cajafuera">
                <div className="container" id="mensaje">
                    <div className="row fila" id="titulo">
                        <div className="col-md-12">
                            <h4>MENSAJE DE NUESTROS ENGREIDOS</h4>
                        </div>
                    </div>
                    <div className="row fila">
                        <div className="col-md-12">
                            <p>"No nos abandonen, ustedes son todo lo que tenemos..."</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}