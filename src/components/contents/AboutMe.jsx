import React from 'react'
import Content from '../Content'
import './AboutMe.css'
import psd from '../../assets/icon/psd.png'
import camt from '../../assets/icon/camt.png'
import me from '../../assets/img/me.jpeg'
import pucc from '../../assets/img/pucc.jpg'
import customcandy from '../../assets/img/customcandy.jpg'
import admetec from '../../assets/img/admetec.jpg'

export default props =>
    <Content>




        <div className="container">
            <div className="row ">
                <div class="card col-12 col-md-10 col-xl-12 mx-md-3 mt-md-2 ">
                    <div class="row no-gutters">
                        <div class="col-md-5 col-xl-3 my-md-3 mt-2 col-12">
                            <img src={me} class="card-img me-card-about " alt="Eu"></img>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Lucas Ricardo Lemes</h4>
                                <ul class=" my-list">
                                    <li class=""><i class="fa fa-child info" aria-hidden="true"></i><span className="info mx-1">Age:</span>20</li>
                                    <li class=""><i class="fa fa-university info"></i><span className="info mx-1">University:</span>PUC-Campinas</li>
                                    <li class=""><i class="fa fa-code info"></i><span className="info mx-1">Level:</span>Junior</li>
                                    <li class=""><i class="fa fa-star info"></i><span className="info mx-1">Stack:</span>
                                        <i class="fab fa-css3 text-primary mx-1" aria-hidden="true"></i>
                                        <i class="fab fa-html5  text-danger mr-1" aria-hidden="true"></i>
                                        <i class="fab fa-js text-warning mr-1" aria-hidden="true"></i>
                                        <i class="fab fa-react text-react mr-1" aria-hidden="true"></i>
                                        <i class="fab fa-vuejs text-vuejs mr-1" aria-hidden="true"></i>
                                        <i class="fab fa-bootstrap text-bootstrap mr-1" aria-hidden="true"></i>
                                        <i class="fab fa-node text-node mr-1" aria-hidden="true"></i>
                                    </li>
                                    <li class=""><i class="fab fa-adobe info"></i><span className="info mx-1">Design:</span><img className="img-psd mb-1" src={psd} alt="psd" /><img className="img-psd mb-1 ml-1" src={camt} alt="psd" /></li>
                                    <li class=""><i class="fa fa-map info"></i><span className="info mx-1">Location:</span>Campinas-SP</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container  mt-2 mb-4">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-4">Sobre</h1>
                </div>

                <div className="col-12">
                    <p className="text-justify artigo">Developer júnior, trabalhando na área de TI desde os 17 anos, quando dei inicio ao curso técnico de analise e desenvolvimento de sistemas em 2016, posteriormente ingressando na graduação em tecnologia da informação pela PUC-Campinas, onde me formo ao final de 2021.</p>
                    <p className="text-justify artigo mt-2">Trabalhei nas mais váriadas áreas de TI, já prestei suporte, estagiário em testes, freelancer, help desk, e agora estou como desenvolvedor. Pretendo construir carreira na área, assumindo responsabilidades e superando obstáculos.</p>
                    <p className="text-justify artigo mt-4">Se não estiver codando, estou assistindo um filme, jogando um video game ou ouvindo música, sou apaixonado por cinema e arte, e passo meu tempo livre escrevendo sobre eles.</p>
                </div>

            </div>
        </div>


    </Content>
