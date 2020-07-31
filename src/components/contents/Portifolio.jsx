import React from 'react'
import Content from '../Content'
import './Portifolio.css'

import cov1 from '../../assets/img/portfolio/corona1.png'
import cov2 from '../../assets/img/portfolio/corona2.png'
import cov3 from '../../assets/img/portfolio/corona3.png'
import cov4 from '../../assets/img/portfolio/corona4.png'
import cov5 from '../../assets/img/portfolio/corona5.png'
import cov6 from '../../assets/img/portfolio/corona6.png'

import me1 from '../../assets/img/portfolio/me1.png'
import me2 from '../../assets/img/portfolio/me2.png'
import me3 from '../../assets/img/portfolio/me3.png'
import me4 from '../../assets/img/portfolio/me4.png'

import clim1 from '../../assets/img/portfolio/clim1.png'
import clim2 from '../../assets/img/portfolio/clim2.png'
import clim3 from '../../assets/img/portfolio/clim3.png'
import clim4 from '../../assets/img/portfolio/clim4.png'


export default props =>
    <Content>


        <div className="container col-md-10 col-12">
            <div className="row ">
                <div class="card col-12 col-md-10 col-xl-12 mx-md-3 mt-md-2 ">
                    <div class="row no-gutters">
                        <div class="col-md-5 col-xl-3 my-md-3 mt-2 col-12">
                            <img src={cov6} class="card-img me-card-about " alt="Eu"></img>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Corona Tracker Com Reactjs e API REST</h4>
                                <ul className="my-list">
                                    <li class=""><i class="fa fa-cogs info" aria-hidden="true"></i><span className="info mx-1">Função:</span>Buscar e formatar dados da api da OMS</li>
                                    <li class=""><i class="fa fa-star info" aria-hidden="true"></i><span className="info mx-1">Stack:</span>
                                        React, ReactHooks, Axios, Material-ui e Api terceira.
                                    </li>
                                    <li class=""><i class="fab fa-internet-explorer info"></i><span className="info mx-1">Online:</span> <a className="noDecoration" href="https://confident-booth-bfbae8.netlify.app/">Acessar Sistema</a></li>
                                    <li class=""><i class="fab fa-github info"></i><span className="info mx-1">Git:</span> <a className="noDecoration" href="https://github.com/Agnoos/my_project_covid19_tracker">Repositório GitHub</a></li>

                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container col-md-10 col-12 my-2" >

            <div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 img-fluid" src={cov2} alt="Second slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 img-fluid" src={cov3} alt="Third slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 img-fluid" src={cov4} alt="Third slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 img-fluid" src={cov5} alt="Third slide"></img>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

        </div>

        <hr />


        <div className="container col-md-10 col-12">
            <div className="row ">
                <div class="card col-12 col-md-10 col-xl-12 mx-md-3 mt-md-2 ">
                    <div class="row no-gutters">
                        <div class="col-md-5 col-xl-3 my-md-3 mt-2 col-12">
                            <img src={me1} class="card-img me-card-about " alt="Eu"></img>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Site Pessoal</h4>
                                <ul className="my-list">
                                    <li class=""><i class="fa fa-cogs info" aria-hidden="true"></i><span className="info mx-1">Função:</span>Site para portfolio e Informativos.</li>
                                    <li class=""><i class="fa fa-star info" aria-hidden="true"></i><span className="info mx-1">Stack:</span>
                                        React, JavaScript, Bootstrap, Font Awesome, React Router, ReactDom.
                                    </li>
                                    <li class=""><i class="fab fa-internet-explorer info"></i><span className="info mx-1">Online:</span> <a className="noDecoration" href="https://agnoos.github.io/site/">Acessar Site</a></li>
                                    <li class=""><i class="fab fa-github info"></i><span className="info mx-1">Git:</span> <a className="noDecoration" href="https://github.com/Agnoos/site">Repositório GitHub</a></li>

                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container col-md-10 col-12 my-2" >

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="4" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 img-fluid" src={me2} alt="Second slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 img-fluid" src={me4} alt="Third slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 img-fluid" src={me3} alt="Third slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 img-fluid" src={me1} alt="Third slide"></img>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

        </div>

        <hr />


        <div className="container col-md-10 col-12">
            <div className="row ">
                <div class="card col-12 col-md-10 col-xl-12 mx-md-3 mt-md-2 ">
                    <div class="row no-gutters">
                        <div class="col-md-5 col-xl-3 my-md-3 mt-2 col-12">
                            <img src={clim4} class="card-img me-card-about " alt="Eu"></img>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Progressive Web App</h4>
                                <ul className="my-list">
                                    <li class=""><i class="fa fa-cogs info" aria-hidden="true"></i><span className="info mx-1">Função:</span>Web App para verificar o Clima da sua cidade</li>
                                    <li class=""><i class="fa fa-star info" aria-hidden="true"></i><span className="info mx-1">Stack:</span>
                                        React, Axios e Api terceira.
                                    </li>
                                    <li class=""><i class="fab fa-internet-explorer info"></i><span className="info mx-1">Online:</span> <a className="noDecoration" href="https://ecstatic-mcnulty-b86dfc.netlify.app/">Acessar Sistema</a></li>
                                    <li class=""><i class="fab fa-github info"></i><span className="info mx-1">Git:</span> <a className="noDecoration" href="https://github.com/Agnoos/React-PWA">Repositório GitHub</a></li>

                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container col-md-10 col-12 my-2" >

            <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators2" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 img-fluid" src={clim1} alt="Second slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 img-fluid" src={clim2} alt="Third slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 img-fluid" src={clim3} alt="Third slide"></img>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

        </div>
    </Content>
