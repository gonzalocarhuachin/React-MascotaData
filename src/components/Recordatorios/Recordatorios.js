import React, { Component } from 'react';
import './Recordatorios.css';
import { ApiWebUrl } from '../../utils';
import Mascotas from '../Mascotas/Mascotas';

export default class Recordatorios extends Component {

    constructor(props){
        super(props)
        this.state = {
            listaMascotas:[],
            mascotaSeleccionada : ""
        }
    }

    componentDidMount(){
        const rutaServicio = ApiWebUrl + "mascotas.php";
        fetch(rutaServicio)
        .then(
            res => res.json()
        )
        .then(
            (result) => {
                console.log(result);
                this.setState({
                    listaMascotas:result
                })
            }
        )
    }

    dibujarMascotas = (datosTablaMascotas) => {
        return(
            <ul className="list-group lista-mascotas-recordatorios">
            {datosTablaMascotas.map(itemMascota=>
                <li className="list-group-item" 
                    id={"tr-mascota-"+itemMascota.idmascota}
                    key={itemMascota.idmascota}
                    onClick={() => this.seleccionarMascota(itemMascota)}>
                        <h5 id="titulo-masc-record">{itemMascota.nombre}</h5>
                        <small id="subtitulo-masc-record">{itemMascota.raza}</small>
                </li>
            )}   
            </ul>
        )
    }
    seleccionarMascota = (itemMascota) => {

        if(this.state.mascotaSeleccionada !== ""){
            document.getElementById("tr-mascota-" + this.state.mascotaSeleccionada.idmascota).classList.remove("fila-seleccionada")
          }  

        this.setState({ mascotaSeleccionada : itemMascota })

        document.getElementById("tr-mascota-" + itemMascota.idmascota).classList.add("fila-seleccionada")
    }

    render (){
        let contenidoMascotas = this.dibujarMascotas(this.state.listaMascotas);
        let dibujarComponenteMascotas = <Mascotas mascotaRecordatorio={this.state.mascotaSeleccionada}/>
        return (
            <div className="container-fluid cajafuerarecordatorios">
                <div className="container cajadentrorecordatorios">
                    <div className="row filarecordatorios">
                        <div className="col-md-3">
                            <h2 id="titulo-recordatorio" className="titulo-recordatorios">Recordatorios</h2>
                            {contenidoMascotas}
                        </div>
                        <div className="col-md-9">
                            {dibujarComponenteMascotas}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}