import React, { Component } from 'react';
import './MainHeader.css';

export default class MainHeader extends Component {
    render (){
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>BIENVENIDOS</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}