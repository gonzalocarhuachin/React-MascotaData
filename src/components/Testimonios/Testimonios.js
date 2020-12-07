import React, { Component } from 'react';
import './Testimonios.css';
import ventaja1 from '../../assets/testimonio1.jpeg';
import ventaja2 from '../../assets/testimonio2.jpg';
import ventaja3 from '../../assets/testimonio3.jpeg';
import ventaja4 from '../../assets/testimonio4.jpeg';

export default class Testimonios extends Component {
    render (){
        return (
            <div class="container-fluid cajafueratestimonio">
                <div class="container cajadentrotestimonio">
                    <div class="row fila-testimonio testimonio">
                        <div class="col-md-12 titulo-1-testimonios">
                            <span id="subtitulo-testimonio">TESTIMONIOS</span>
                        </div>
                        <div class="col-md-12 titulo-2-testimonios" id="subrayado-testimonios">
                            <h3 id="subtitulo-testimonio2">DE NUESTROS USUARIOS</h3>
                        </div>
                    </div>
                    <div class="row fila-testimonio tarjetas">
                        <div class="row fila-testimonio row-cols-1 row-cols-md-2">
                            <div class="col mb-4">
                                <div class="card">
                                    <img src={ventaja1} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Leo</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mauris lectus, tincidunt sed est ut, ornare porta arcu. Donec egestas accumsan nunc, iaculis bibendum lorem sodales vel.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-4">
                                <div class="card">
                                    <img src={ventaja2} class="card-img-top" alt="..." height="307px"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Victor</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mauris lectus, tincidunt sed est ut, ornare porta arcu. Donec egestas accumsan nunc, iaculis bibendum lorem sodales vel.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-4">
                                <div class="card">
                                    <img src={ventaja3} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">Camila</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mauris lectus, tincidunt sed est ut, ornare porta arcu. Donec egestas accumsan nunc, iaculis bibendum lorem sodales vel.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col mb-4">
                                <div class="card">
                                    <img src={ventaja4} class="card-img-top" alt="..." height="307px"/>
                                    <div class="card-body">
                                        <h5 class="card-title">Piero</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mauris lectus, tincidunt sed est ut, ornare porta arcu. Donec egestas accumsan nunc, iaculis bibendum lorem sodales vel.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}