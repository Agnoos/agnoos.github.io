import React from 'react'
import Content from '../Content'
import ibm from '../../assets/img/ibm.jpg'
import unicamp from '../../assets/img/unicamp.jpg'


export default props =>
    <Content>

        <div className="container-fluid text-center my-2">

            <h1 className="display-4">Experiência</h1>

        </div>

        <hr/>

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
                        <img class="card-img-top" src={ibm} alt="Turma de administração" />
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
                <div className="col-12">
                    <h1 className="display-5">Educação</h1>
                </div>

                <div className="col-12 col-md-6 col-xl-8">
                    <p className="text-justify">Me mudei para o interior de São Paulo em 2015 e logo iniciei o ensino técnico em administração no Centro Paula Souza de Hortolândia. Com interesse em processos empresariais, o ensino na ETEC foi fundamental para formação e desenvolvimento da minha imagem. Me formei em junho de 2017 juntamente ao meu ensino médio na rede pública estadual.</p>
                    <p className="text-justify">Meu TCC abordou métodos inteligentes de investimentos, onde citamos inclusive as criptomoedas que viera a explodir no ano seguinte, há quem diga que eramos gênios que previram o futuro, pois bem! estudamos, mas ninguém do grupo comprou Bitcoin, gênios nem tão gênios assim...</p>
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                    <div class="card mt-2 mt-md-2">
                        <img class="card-img-top" src={unicamp} alt="Turma de administração" />
                        <div class="card-body">
                            <p class="card-text 1x">Turma de administração - Hortolândia 2017</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Content>
