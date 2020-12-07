import React, { Component } from 'react';
import './Banner.css';
import banner1 from '../assets/mascota1.jpeg';
import banner2 from '../assets/mascota2.jpg';
import banner3 from '../assets/mascota3.jpg';
import banner4 from '../assets/mascota4.jpg';

export default class Banner extends Component {
    render (){
        return (
            <div className="container-fluid" id="banner">
                <div className="row">
                    <div className="container">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img src={banner1} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                              <img src={banner2} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                              <img src={banner3} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                              <img src={banner4} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}