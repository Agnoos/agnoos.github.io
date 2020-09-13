import React from 'react'
import Content from '../Content'
import './Portifolio.css'

import cov1 from '../../assets/img/portfolio/corona1.png'
import cov2 from '../../assets/img/portfolio/corona2.png'
import cov3 from '../../assets/img/portfolio/corona3.png'
import cov4 from '../../assets/img/portfolio/corona4.png'
import cov5 from '../../assets/img/portfolio/corona5.png'

import me1 from '../../assets/img/portfolio/me1.png'
import me2 from '../../assets/img/portfolio/me2.png'
import me3 from '../../assets/img/portfolio/me3.png'
import me4 from '../../assets/img/portfolio/me4.png'

import clim1 from '../../assets/img/portfolio/clim1.png'
import clim2 from '../../assets/img/portfolio/clim2.png'
import clim3 from '../../assets/img/portfolio/clim3.png'

import chat2 from '../../assets/img/portfolio/chat2.png'
import chat3 from '../../assets/img/portfolio/chat3.png'
import chat4 from '../../assets/img/portfolio/chat4.png'
import chat5 from '../../assets/img/portfolio/chat5.png'
import chat6 from '../../assets/img/portfolio/chat6.png'
import chat7 from '../../assets/img/portfolio/chat7.png'

import nlw2 from '../../assets/img/portfolio/nlw2.jpg'
import nlw3 from '../../assets/img/portfolio/nlw3.jpeg'

import spot1 from '../../assets/img/portfolio/spot1.png'
import spot2 from '../../assets/img/portfolio/spot2.png'
import spot3 from '../../assets/img/portfolio/spot3.png'
import spot4 from '../../assets/img/portfolio/spot4.png'
import spot5 from '../../assets/img/portfolio/spot5.png'
import spot6 from '../../assets/img/portfolio/spot6.png'
import spot7 from '../../assets/img/portfolio/spot7.png'


export default props =>
    <Content>

        <div className="container-fluid text-center my-2">

            <h1 className="display-4">Portfólio</h1>

        </div>

        <hr />
        <div className="container col-md-10 col-12 mb-3">
            <div className="row ">
                <div class="card col-12 col-md-10 col-xl-12 mx-md-3 mt-md-2 ">
                    <div class="row no-gutters">
                        <div class="col-md-5 col-xl-3 my-md-3 mt-2 col-12">
                            <div id="spotifyapi" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#spotifyapi" data-slide-to="0" class="active"></li>
                                    <li data-target="#spotifyapi" data-slide-to="1"></li>
                                    <li data-target="#spotifyapi" data-slide-to="2"></li>
                                    <li data-target="#spotifyapi" data-slide-to="3"></li>
                                    <li data-target="#spotifyapi" data-slide-to="4"></li>
                                    <li data-target="#spotifyapi" data-slide-to="5"></li>
                                    <li data-target="#spotifyapi" data-slide-to="6"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100 img-fluid" src={spot1} alt=""></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100 img-fluid" src={spot2} alt=""></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100 img-fluid" src={spot3} alt=""></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100 img-fluid" src={spot4} alt=""></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100 img-fluid" src={spot5} alt=""></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100 img-fluid" src={spot6} alt=""></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100 img-fluid" src={spot7} alt=""></img>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#spotifyapi" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#spotifyapi" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Spotify Integration API <i class=" fab fa-spotify text-success"></i></h4>
                                <ul className="my-list">
                                    <li class=""><i class="fa fa-cogs info" aria-hidden="true"></i><span className="info mx-1">Função:</span>Utilizar funções da API Spotify.</li>
                                    <li class=""><i class="fa fa-star info" aria-hidden="true"></i><span className="info mx-1">Stack:</span>
                                    React, Reacthooks, Axios.
                                    </li>
                                    {/* <li class=""><i class="fab fa-internet-explorer info"></i><span className="info mx-1">Online:</span> <a className="noDecoration" ></a></li> */}
                                    <li class=""><i class="fab fa-github info"></i><span className="info mx-1">Git:</span> <a className="noDecoration" target="_blank" href="https://github.com/Agnoos/api-spotify-challenger">Repositório GitHub</a></li>
                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container col-md-10 col-12 mb-3">
            <div className="row ">
                <div class="card col-12 col-md-10 col-xl-12 mx-md-3 mt-md-2 ">
                    <div class="row no-gutters">
                        <div class="col-md-5 col-xl-3 my-md-3 mt-2 col-12">
                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100 img-fluid" src={nlw2} alt="First Slide"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Next Level Week 2</h4>
                                <ul className="my-list">
                                    <li class=""><i class="fa fa-cogs info" aria-hidden="true"></i><span className="info mx-1">Função:</span>Plataforma para estudo a distancia e cadastro de professores Freelancer, interface para alunos.</li>
                                    <li class=""><i class="fa fa-star info" aria-hidden="true"></i><span className="info mx-1">Stack:</span>
                                    React, Reacthooks, MaterialUi, ReactNative e Figma.
                                    </li>
                                    {/* <li class=""><i class="fab fa-internet-explorer info"></i><span className="info mx-1">Online:</span> <a className="noDecoration" ></a></li> */}
                                    <li class=""><i class="fab fa-github info"></i><span className="info mx-1">Git:</span> <a className="noDecoration" target="_blank" href="https://github.com/Agnoos/nlw2-rocketseat">Repositório GitHub</a></li>
                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container col-md-10 col-12">
            <div className="row ">
                <div class="card col-12 col-md-10 col-xl-12 mx-md-3 mt-md-2 ">
                    <div class="row no-gutters">
                        <div class="col-md-5 col-xl-3 my-md-3 mt-2 col-12">


                            <div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100 img-fluid" src={chat2} alt=""></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100 img-fluid" src={chat3} alt=""></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100 img-fluid" src={chat4} alt=""></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100 img-fluid" src={chat5} alt=""></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100 img-fluid" src={chat6} alt=""></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100 img-fluid" src={chat7} alt=""></img>
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
                            </div>                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Chat em tempo real</h4>
                                <ul className="my-list">
                                    <li class=""><i class="fa fa-cogs info" aria-hidden="true"></i><span className="info mx-1">Função:</span>Conversar entre pessoas em salas separadas.</li>
                                    <li class=""><i class="fa fa-star info" aria-hidden="true"></i><span className="info mx-1">Stack:</span>
                                        React, ReactHooks e Socket.io.
                                    </li>
                                    <li class=""><i class="fa fa-project-diagram info" aria-hidden="true"></i><span className="info mx-1">Deploy:</span>
                                        Netlify e Heroku.
                                    </li>

                                    <li class=""><i class="fab fa-internet-explorer info"></i><span className="info mx-1">Online:</span> <a className="noDecoration" target="_blank" href="https://5f27bfb1dc0ccb0fe032caf2--blissful-brown-7549c8.netlify.app/">Acessar Sistema</a></li>
                                    <li class=""><i class="fab fa-github info"></i><span className="info mx-1">Git:</span> <a className="noDecoration" target="_blank" href="https://github.com/Agnoos/chat-bot-realtime">Repositório GitHub</a></li>

                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <hr />


        <div className="container col-md-10 col-12">
            <div className="row ">
                <div class="card col-12 col-md-10 col-xl-12 mx-md-3 mt-md-2 ">
                    <div class="row no-gutters">
                        <div class="col-md-5 col-xl-3 my-md-3 mt-2 col-12">


                            <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators2" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
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
                                <a class="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Corona Tracker Com Reactjs e API REST</h4>
                                <ul className="my-list">
                                    <li class=""><i class="fa fa-cogs info" aria-hidden="true"></i><span className="info mx-1">Função:</span>Buscar e formatar dados da api da OMS.</li>
                                    <li class=""><i class="fa fa-star info" aria-hidden="true"></i><span className="info mx-1">Stack:</span>
                                        React, ReactHooks, Axios, Material-ui e Api terceira.
                                    </li>
                                    <li class=""><i class="fab fa-internet-explorer info"></i><span className="info mx-1">Online:</span> <a className="noDecoration" target="_blank" href="https://confident-booth-bfbae8.netlify.app/">Acessar Sistema</a></li>
                                    <li class=""><i class="fab fa-github info"></i><span className="info mx-1">Git:</span> <a className="noDecoration" target="_blank" href="https://github.com/Agnoos/my_project_covid19_tracker">Repositório GitHub</a></li>

                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <hr />


        <div className="container col-md-10 col-12">
            <div className="row ">
                <div class="card col-12 col-md-10 col-xl-12 mx-md-3 mt-md-2 ">
                    <div class="row no-gutters">
                        <div class="col-md-5 col-xl-3 my-md-3 mt-2 col-12">
                            <div id="CauroselMySite" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#CauroselMySite" data-slide-to="4" class="active"></li>
                                    <li data-target="#CauroselMySite" data-slide-to="5"></li>
                                    <li data-target="#CauroselMySite" data-slide-to="6"></li>
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
                                <a class="carousel-control-prev" href="#CauroselMySite" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#CauroselMySite" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Site Pessoal</h4>
                                <ul className="my-list">
                                    <li class=""><i class="fa fa-cogs info" aria-hidden="true"></i><span className="info mx-1">Função:</span>Site para portfolio e Informativos.</li>
                                    <li class=""><i class="fa fa-star info" aria-hidden="true"></i><span className="info mx-1">Stack:</span>
                                        React, JavaScript, Bootstrap, Font Awesome, React Router, ReactDom.
                                    </li>
                                    <li class=""><i class="fab fa-internet-explorer info"></i><span className="info mx-1">Online:</span> <a className="noDecoration" target="_blank" href="https://agnoos.github.io/site/">Acessar Site</a></li>
                                    <li class=""><i class="fab fa-github info"></i><span className="info mx-1">Git:</span> <a className="noDecoration" target="_blank" href="https://github.com/Agnoos/site">Repositório GitHub</a></li>

                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





        <hr />


        <div className="container col-md-10 col-12 mb-3">
            <div className="row ">
                <div class="card col-12 col-md-10 col-xl-12 mx-md-3 mt-md-2 ">
                    <div class="row no-gutters">
                        <div class="col-md-5 col-xl-3 my-md-3 mt-2 col-12">
                            <div id="PWA" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#PWA" data-slide-to="0" class="active"></li>
                                    <li data-target="#PWA" data-slide-to="1"></li>
                                    <li data-target="#PWA" data-slide-to="2"></li>
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
                                <a class="carousel-control-prev" href="#PWA" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#PWA" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Progressive Web App - Clima</h4>
                                <ul className="my-list">
                                    <li class=""><i class="fa fa-cogs info" aria-hidden="true"></i><span className="info mx-1">Função:</span>Web App para verificar o Clima da sua cidade.</li>
                                    <li class=""><i class="fa fa-star info" aria-hidden="true"></i><span className="info mx-1">Stack:</span>
                                        React, Axios e Api terceira.
                                    </li>
                                    <li class=""><i class="fab fa-internet-explorer info"></i><span className="info mx-1">Online:</span> <a className="noDecoration" target="_blank" href="https://kind-archimedes-6c34b9.netlify.app/">Acessar Sistema</a></li>
                                    <li class=""><i class="fab fa-github info"></i><span className="info mx-1">Git:</span> <a className="noDecoration" target="_blank" href="https://github.com/Agnoos/React-PWA">Repositório GitHub</a></li>

                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    </Content>
