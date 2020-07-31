import React from 'react'
import Content from '../Content'
import ibm from '../../assets/img/ibm.jpg'
import unicamp from '../../assets/img/unicamp.jpg'
import people from '../../assets/img/people.png'
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
                        <div class="col-md-5 col-xl-3 my-md-3 mt-2 col-12">
                            <img src={ibm} class="card-img me-card-about " alt="Eu"></img>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Estagiário IBM 2019-2019</h4>
                                <ul className="my-list">
                                    <li class="job"><i class="fa fa-cogs info" aria-hidden="true"></i><span className="info mx-1">Função:</span>Soluções financeiras com microservices em JSON.</li>
                                    <li class=""><i class="fa fa-star info" aria-hidden="true"></i><span className="info mx-1">Stack:</span>
                                        <i class="fab fa-bootstrap text-bootstrap mr-1" aria-hidden="true"></i>
                                        <i class="fab fa-node text-node mr-1" aria-hidden="true"></i>
                                        <i class="fab fa-react text-react mr-1" aria-hidden="true"></i>
                                    </li>
                                    <li class="job"><i class="fa fa-bullseye info" aria-hidden="true"></i><span className="info mx-1">Métodologias:</span>Scrum usando Trello e Slack</li>
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
                                <h4 className="card-title">Técnico UNICAMP 2018-2019</h4>
                                <ul className="my-list">
                                    <li class="job"><i class="fa fa-cogs info" aria-hidden="true"></i><span className="info mx-1">Função:</span>Configurações de computadores e sistemas integrados.</li>
                                    <li class="job"><i class="fa fa-star info" aria-hidden="true"></i><span className="info mx-1">Operações:</span>Embarcados, pacotes de saúde, SOs, telecomunicações, Suporte técnico, etc. </li>
                                    <li class="job"><i class="fa fa-bullseye info" aria-hidden="true"></i><span className="info mx-1">Miscelânea:</span>Levantamento de requisitos operacionais.</li>
                                    <li class=""><i class="fa fa-map info"></i><span className="info mx-1">Location:</span>Campinas-SP</li>

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
                            <img src={people} class="card-img me-card-about " alt="Eu"></img>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Social mídia People 2019-2020</h4>
                                <ul className="my-list">
                                    <li class="job"><i class="fa fa-cogs info" aria-hidden="true"></i><span className="info mx-1">Função:</span>Administração da identidade visual da empresa, criação de logos, edição de conteúdo para mídias digitais e físicas, professor de desenvolvimento web.</li>
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

        <hr />


    </Content>
