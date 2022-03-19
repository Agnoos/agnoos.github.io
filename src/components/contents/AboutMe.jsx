import React from 'react'
import Content from '../Content'
import './AboutMe.css'
import psd from '../../assets/icon/psd.png'
import camt from '../../assets/icon/camt.png'
import me from '../../assets/img/me.jpeg'
import me2 from '../../assets/img/me2.png'
import braber from '../../assets/img/braber.jpg'
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
                            <img src={braber} class="card-img me-card-about " alt="Eu"></img>
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h4 className="card-title">Lucas Ricardo Lemes</h4>
                                <ul class=" my-list">
                                    <li class=""><i class="fa fa-child info" aria-hidden="true"></i><span className="info mx-1">Age:</span>21</li>
                                    <li class=""><i class="fa fa-university info"></i><span className="info mx-1">University:</span>PUC-Campinas</li>
                                    <li class=""><i class="fa fa-code info"></i><span className="info mx-1">Level:</span>Junior</li>
                                    <li class=""><i class="fa fa-star info"></i><span className="info mx-1">Stack:</span>
                                        <i class="fab fa-css3 text-primary mx-1" aria-hidden="true"></i>
                                        <i class="fab fa-html5 text-danger mr-1" aria-hidden="true"></i>
                                        <i class="fab fa-js text-warning mr-1" aria-hidden="true"></i>
                                        <i class="fab fa-react text-react mr-1" aria-hidden="true"></i>
                                        <i class="fab fa-vuejs text-vuejs mr-1" aria-hidden="true"></i>
                                        <i class="fab fa-java text-dark mr-1" aria-hidden="true"></i>
                                        <i class="fab fa-bootstrap text-bootstrap mr-1" aria-hidden="true"></i>
                                        <i class="fab fa-node text-node mr-1" aria-hidden="true"></i>
                                    </li>
                                    <li class=""><i class="fab fa-adobe info"></i><span className="info mx-1">Outros:</span><img className="img-psd mb-1" src={psd} alt="psd" /><img className="img-psd mb-1 ml-1" src={camt} alt="psd" /></li>
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
                    <p className="text-justify artigo">Me chamo Lucas, tenho 21 anos, sou natural da capital de São Paulo, vivendo na região de Campinas, mais precisamente em Hortolândia há 8 anos. Solteiro, gosto de passar meu tempo livre assistindo filmes, jogando ou com os amigos.</p>
                    <p className="text-justify artigo mt-2">Estudei em escola técnica e terminei meu ensino médio juntamente ao ensino técnico em Análise e desenvolvimento de Sistemas em 2017, posteriormente ingressando no ensino superior onde me formei no final de 2021.</p>
                    <p className="text-justify artigo mt-2">Tenho ampla experiência em soluções da área de utilities e serviços públicos, vivência de três anos no desenvolvimento e manutenção dos produtos de georreferenciamento e financeiro.</p>
                    <p className="text-justify artigo mt-2">Experiência de desenvolvimento em Java, Kotlin, Javascript, e Typescript.</p>
                </div>

            </div>
        </div>


    </Content>
