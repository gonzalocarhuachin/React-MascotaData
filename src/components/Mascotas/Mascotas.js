import React, { Component } from 'react';
import { ApiWebUrl } from '../../utils';
import './Mascotas.css';

export default class Mascotas extends Component {

    constructor(props){
        super(props)
        this.state = {
          mascotaElegida: props.mascotaRecordatorio,
          listaRecordatorios:[]
        }
        console.log("CONSTRUCTOR")
    }

    componentDidMount(){
        console.log("COMPONENTDIDMOUNT")
          console.log(this.state.mascotaElegida)
      }

    componentWillReceiveProps(props){
        console.log("COMPONENTRECEIVEPROPS")        
        console.log(props.mascotaRecordatorio)
        this.obtenerRecordatoriosPorMascota(props.mascotaRecordatorio)
    }

    obtenerRecordatoriosPorMascota = (itemMascota) => {
        const rutaServicio = ApiWebUrl + "recordatoriosxmascota.php";
    
        var formData = new FormData();
        formData.append("caty",itemMascota.idmascota)  
        //Asi se agregan todos los parámetros que el servicio requiera (nombre del parámetro , valor que se envía)  
    
        fetch(rutaServicio,{
            method: 'POST',
            body: formData
        })
        .then(
            res => res.json()
        )
        .then(
            (result) => {
                console.log(result);
                this.setState({
                    listaRecordatorios:result
                })
            }
        )
    }

    dibujarRecordatoriosTabla = (datosTablaRecordatorios) => {
        return(
            <table className="table table-bordered">
              <thead className="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>Descripción</th>
                    <th>Fecha</th>
                  </tr>
              </thead>
              <tbody>
                  {datosTablaRecordatorios && datosTablaRecordatorios.map(itemRecordatorio=>
                      <tr key={itemRecordatorio.idrecordatorio}>
                        <td>{itemRecordatorio.idrecordatorio}</td>
                        <td>{itemRecordatorio.descripcion}</td>
                        <td>{itemRecordatorio.fecha}</td>
                      </tr>
                  )}
              </tbody>
          </table>
        )
    }

    render (){
        let contenidoRecordatoriosTabla = this.dibujarRecordatoriosTabla(this.state.listaRecordatorios);
        return (
            <div className="container-fluid cajafueramascota">
                <div className="container cajadentromascota">
                    <div className="row filamascota">
                        <div className="col-md-12">
                            {contenidoRecordatoriosTabla}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}