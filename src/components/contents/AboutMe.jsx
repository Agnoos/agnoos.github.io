import React from 'react'
import Content from '../Content'
import Me from '../../assets/img/me.jpg'
import './AboutMe.css'
import psd from '../../assets/icon/psd.png'


export default props =>
    <Content>




        <div class="card col-12 col-md-7 mx-md-3 mt-md-2">
            <div class="row no-gutters">
                <div class="col-md-4 my-md-3 mt-2 col-12">
                    <img src={Me} class="card-img d-flex img-fluid " alt="Eu"></img>
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
                            <li class=""><i class="fab fa-adobe info"></i><span className="info mx-1">Design:</span><img className="img-psd mb-1" src={psd} alt="psd" /></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>




        <div className="container-fluid container-md">
            <div className="row">

                <div className="col-12 mt-3">
                    <p className=" text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin gravida hendrerit lectus a. Vitae sapien pellentesque habitant morbi tristique senectus. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Tristique senectus et netus et malesuada fames ac. Pulvinar neque laoreet suspendisse interdum. Placerat duis ultricies lacus sed turpis tincidunt id. Mi sit amet mauris commodo quis imperdiet. Nisl condimentum id venenatis a condimentum. Egestas erat imperdiet sed euismod nisi porta. Ut sem viverra aliquet eget sit amet. Vel orci porta non pulvinar. Curabitur gravida arcu ac tortor.
                    </p>
                </div>
            </div>



        </div>


    </Content>
