import React from 'react'
import Content from '../Content'
import './AboutMe.css'
import psd from '../../assets/icon/psd.png'
import camt from '../../assets/icon/camt.png'
import me from '../../assets/img/me.jpg'
import pucc from '../../assets/img/pucc.jpg'
import customcandy from '../../assets/img/customcandy.jpg'
import admetec from '../../assets/img/admetec.jpg'

export default props =>
    <Content>




        <div class="card col-12 col-md-10 col-xl-7 mx-md-3 mt-md-2">
            <div class="row no-gutters">
                <div class="col-md-4 my-md-3 mt-2 col-12">
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




        <div className="container-fluid  mt-2 mb-4">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-4">Sobre</h1>
                </div>

                <div className="col-12 ">
                    <p className="text-justify">Natural de Ribeirão Pires zona metropolitana de São Paulo sempre tive apreciação a tecnologia, desde muito novo desmontava computadores e máquinas velhas para descobrir como funcionavam. Depois de ganhar meu primeiro video-game, um Super Nintendo em 2007, despertou-se em mim o fascínio por jogos eletrônicos, que só fizera aumentar quando ganhei meu primeiro computador, um Pentium Dual-Core E2140 de 1.0 GHz em 2010.</p>
                    <p className="text-justify">Com 11 anos criei meu primeiro artigo técnico sobre atualizações de Minecraft, no mesmo ano iniciei um canal no Youtube sobre Counter Strike. Todo conteúdo está na web até hoje, e documentam minhas nostalgias.</p>
                    {/* <p className="text-justify">Mesmo sem acesso a materiais de estudo e computadores de ponta, transitei da minha infância para adolescência estudando tudo que podia estudar, isso formulou e formula boa parte de quem sou, construindo princípios inegociáveis.</p> */}
                </div>

            </div>
        </div>
        <hr />

        <div className="container-fluid mb-4">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-5">Educação</h1>
                </div>

                <div className="col-12 col-md-6 col-xl-8">
                    <p className="text-justify">Me mudei para o interior de São Paulo em 2015 e logo iniciei o ensino técnico em administração no Centro Paula Souza de Hortolândia. Com interesse em processos empresariais, o ensino na ETEC foi fundamental para formação e desenvolvimento da minha imagem. Me formei em junho de 2017 juntamente ao meu ensino médio na rede pública estadual.</p>
                    <p className="text-justify">Meu TCC abordou métodos inteligentes de investimentos, onde citamos inclusive as criptomoedas que viera a explodir no ano seguinte, há quem diga que eramos gênios que previram o futuro, pois bem! estudamos, mas ninguém do grupo comprou Bitcoin, gênios nem tão gênios assim...</p>
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                    <div class="card mt-2 mt-md-2">
                        <img class="card-img-top" src={admetec} alt="Turma de administração" />
                        <div class="card-body">
                            <p class="card-text 1x">Turma de administração - Hortolândia 2017</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className="container-fluid mb-4">
            <div className="row">
                <div className="col-12 col-md-6 col-xl-8">
                    <p className="text-justify">Em 2018 dei início a outro curso técnico também na ETEC de Hortolândia, iria fazer meus 18 anos de idade e estava na hora de me especializar em algo, escolhi a grade de Informática para Internet, onde aprendi a desenvolver programas em C++ e C#, todos os princípios da engenharia da computação, principais tecnologias da web, redes de computadores, entre outros.</p>
                    <p className="text-justify">Nosso tcc foi o desenvolvimento de uma plataforma e-commerce, nomeada por nós como Custom Candy, a proposta era melhorar a visibilidade de pequenos comerciantes independentes da cidade. Mesmo que nosso projeto tenha utilizado tecnologias legado da web, foi através dele que colocamos em prática os princípios de uma API, pilares de estilização, templates responsivos, etc.</p>
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                    <div class="card mt-2 mt-md-2">
                        <img class="card-img-top" src={customcandy} alt="Equipe Custom Candy" />
                        <div class="card-body">
                            <p class="card-text 1x">Equipe Custom Candy - 2019</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className="container-fluid mb-4">
            <div className="row">
                <div className="col-12 col-md-6 col-xl-8">
                    <p className="text-justify">Em 2019 logo depois de me formar na ETEC, consegui uma bolsa de estudos na PUC-Campinas para o curso de Tecnologia da Informação, um curso direcionado as tecnologias de desenvolvimento e o manejo de equipes técnicas. Nele também aprendemos sobre métodos gerenciais e governança de TI. Alguns meses após o meu ingresso, já pude participar de desafios na anual PUC-Experiencie que com parceria de empresas privadas propõe projetos a serem desenvolvidos por equipes multidisciplinares do campus.</p>
                    <p className="text-justify">Minha equipe ficou em 2°lugar e fomos premiados com um dia VIP com gestores da empresa IBM.</p>
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                    <div class="card mt-2 mt-md-2">
                        <img class="card-img-top" src={pucc} alt="PUC Experience 2019" />
                        <div class="card-body">
                            <p class="card-text 1x">PUC Experience Desafio IBM 2019</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Content>
