import React from 'react'
import Content from '../Content'
import ibm from '../../assets/img/ibm.jpg'
import unicamp from '../../assets/img/unicamp.jpg'
import people from '../../assets/img/people.png'
import kaffa from '../../assets/img/kaffa.png'
import './MyProjects.css'
import psd from '../../assets/icon/psd.png'
import camt from '../../assets/icon/camt.png'
import figma from '../../assets/icon/figma.png'


export default props =>
    <Content>

        <div className="container-fluid text-center my-2">

            <h1 className="display-4">Experiência</h1>

        </div>

        <hr />

        <div className="container">
            <div className="row ">
                <div class="card col-12 col-md-10 col-xl-12 mx-md-3 mt-md-2 ">
                    <div class="row no-gutters">
                        <div class="col-md-5 col-xl-3 my-md-3 mt-2 col-12 ">
                            <img src={kaffa} class="card-img me-card-about" alt="Eu"></img>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Desenvolvedor de Software</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Agosto 2020 - Atualmente</h6>
                                <ul className="my-list">
                                    <li class="job"><i class="fa fa-cogs info" aria-hidden="true"></i><span className="info mx-1">Função:</span>Desenvolver funcionalidades em soluções voltadas a Georreferenciamento no setor de utilities.</li>
                                    <li class="job"><i class="fa fa-bullseye info" aria-hidden="true"></i><span className="info mx-1">Métodologias:</span>Agile</li>
                                    <li class=""><i class="fa fa-map info"></i><span className="info mx-1">Location:</span>Campinas-SP</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr/>

        <div className="container">
            <div className="row ">
                <div class="card col-12 col-md-10 col-xl-12 mx-md-3 mt-md-2 ">
                    <div class="row no-gutters">
                        <div class="col-md-5 col-xl-3 my-md-3 mt-2 col-12">
                            <img src={people} class="card-img me-card-about " alt="Eu"></img>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Instrutor de TI</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Agosto 2019 - Março 2020</h6>
                                <ul className="my-list">
                                    <li class="job"><i class="fa fa-cogs info" aria-hidden="true"></i><span className="info mx-1">Função:</span>Professor de Design web, e desenvolvimento em JavaScript e suas bibliotecas.</li>
                                    <li class=""><i class="fa fa-star info" aria-hidden="true"></i><span className="info mx-1">Stack:</span>                                
                                    <img className="img-psd mb-1" src={psd} alt="psd" />
                                    <img className="img-psd mb-1 ml-1" src={camt} alt="camtasia" />
                                    <img className="img-psd mb-1 ml-1" src={figma} alt="figma" />
                                    </li>
                                    <li class=""><i class="fa fa-map info"></i><span className="info mx-1">Location:</span>Hortolândia-SP</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr/>

        <div className="container">
            <div className="row ">
                <div class="card col-12 col-md-10 col-xl-12 mx-md-3 mt-md-2 ">
                    <div class="row no-gutters">
                        <div class="col-md-5 col-xl-3 my-md-3 mt-2 col-12">
                            <img src={ibm} class="card-img me-card-about " alt="Eu"></img>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Estagiário</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Março 2019 - Agosto 2019</h6>
                                <ul className="my-list">
                                    <li class="job"><i class="fa fa-cogs info" aria-hidden="true"></i><span className="info mx-1">Função:</span>Estagiário em desenvolvimento front-end</li>
                                    <li class=""><i class="fa fa-star info" aria-hidden="true"></i><span className="info mx-1">Stack:</span>
                                        <i class="fab fa-bootstrap text-bootstrap mr-1" aria-hidden="true"></i>
                                        <i class="fab fa-node text-node mr-1" aria-hidden="true"></i>
                                        <i class="fab fa-react text-react mr-1" aria-hidden="true"></i>
                                    </li>
                                    <li class="job"><i class="fa fa-bullseye info" aria-hidden="true"></i><span className="info mx-1">Métodologias:</span>Agile</li>
                                    <li class=""><i class="fa fa-map info"></i><span className="info mx-1">Location:</span>Hortolândia-SP</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr />
        <div className="container">
            <div className="row ">
                <div class="card col-12 col-md-10 col-xl-12 mx-md-3 mt-md-2 ">
                    <div class="row no-gutters">
                        <div class="col-md-5 col-xl-3 my-md-3 mt-2 col-12">
                            <img src={unicamp} class="card-img me-card-about " alt="Eu"></img>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Técnico de TI</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Junho 2018 - Janeiro 2019</h6>
                                <ul className="my-list">
                                    <li class="job"><i class="fa fa-cogs info" aria-hidden="true"></i><span className="info mx-1">Função:</span>Configurações de computadores e sistemas integrados.</li>
                                    <li class="job"><i class="fa fa-star info" aria-hidden="true"></i><span className="info mx-1">Operações:</span>Embarcados, SOs, telecomunicações, Suporte técnico, etc. </li>
                                    <li class=""><i class="fa fa-map info"></i><span className="info mx-1">Location:</span>Campinas-SP</li>

                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Content>
