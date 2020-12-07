import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
    render (){
        return (
            <div class="container-fluid cajaafueralogin">
                <div class="container cajadentrologin">
                    <div class="row filalogin">
                        <div class="col-md-12">
                            <h2 id="titulo-login">Inicio de Sesión</h2>
                        </div>
                    </div>
                    <div class="row filalogin">
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Usuario" 
                                    formControlName="usuario" required/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Contraseña" 
                                    formControlName="clave" required/>
                                </div>
                                <div class="form-group" id="login">
                                    <input type="submit" class="btn btn-danger login" value="Iniciar sesión"/>
                                </div>                        
                            </form>    
                            <div class="form-group" id="logout">
                                <input type="button" class="btn btn-light logout" value="Cerrar sesión"/>
                            </div> 
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                </div>
            </div>
        );
    }
}