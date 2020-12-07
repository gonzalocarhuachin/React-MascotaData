import React, { Component } from 'react';
import './Recordatorios.css';

export default class Recordatorios extends Component {
    render (){
        return (
            <div className="container-fluid cajafuerarecordatorios">
                <div className="container cajadentrorecordatorios">
                    <div className="row filarecordatorios">
                        <div className="col-md-3">
                            <h2 className="titulo-recordatorios">Recordatorios</h2>
                            <ul className="list-group">
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}