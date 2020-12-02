import React, { Component } from 'react';

export default class Banner extends Component {
    render (){
        return (
            <div className="container-fluid">
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
                              <img src="assets/mascota1.jpeg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                              <img src="assets/mascota2.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                              <img src="assets/mascota3.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                              <img src="assets/mascota4.jpg" className="d-block w-100" alt="..."/>
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