import React, { Component } from 'react';
import './Nosotros.css';
import ventajaimg from '../../assets/ventaja.jpeg';

export default class Nosotros extends Component {
    render (){
        return (
            <div>
                <div class="container-fluid nosotros">
                    <div class="container nosotros2">
                        <div class="row titulo">
                            <div class="col-md-12">
                                <span>¿Quienes somos?</span>
                            </div>
                            <div class="col-md-12">
                                <h4>Sobre MascotaData</h4>
                            </div>
                        </div>
                        <div class="row descripcion">
                            <div class="col-md-12">
                                <p id="texto">Nos dedicamos a ayudarte a que guardes toda la información fundamental de tus mascotas. Facilitándote a que agendes todos tus recordatorios para tus mascotas (citas veterinarias, paseos, comidas, etc). Aquí podrás escribir su vida.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid ventajas">
                    <div class="container ventajas2">
                        <div class="row">
                            <div class="col-md-12">
                                <h3>VENTAJAS</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Podrás...</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                                                </svg>
                                            </td>
                                            <td className="ventaja-texto">Estar al tanto de los alimentos de tu mascota.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                                                </svg>
                                            </td>
                                            <td className="ventaja-texto">Recordar y planificar sus próximas citas al veterinario.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                                                </svg>
                                            </td>
                                            <td className="ventaja-texto">Planificar sus paseos.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                                                </svg>
                                            </td>
                                            <td className="ventaja-texto">Redactar y editar los datos de tu mascota.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                                                </svg>
                                            </td>
                                            <td className="ventaja-texto">Crear su perfil!</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                                                </svg>
                                            </td>
                                            <td className="ventaja-texto">Agregar observaciones de su veterinario.</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                                                </svg>
                                            </td>
                                            <td className="ventaja-texto">Programar sus baños.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md-6">
                                <img id="ventajaimg" src={ventajaimg} alt="" class="image-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}