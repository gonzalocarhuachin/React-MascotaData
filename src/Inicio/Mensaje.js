import React, { Component } from 'react';

export default class Mensaje extends Component {
    render (){
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="row" id="titulo">
                        <div className="col-md-12">
                            <h4>MENSAJE DE NUESTROS ENGREIDOS</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p>"No nos abandonen, ustedes son todo lo que tenemos..."</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}