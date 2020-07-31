import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'






export default props =>
    <nav className="navbar">
        <ul class="nav flex-md-column flex-lg-row   align-self-md-center flex-nowrap mx-0 flex-md-wrap ">
            <li class="nav-item">
                <Link className="" to="/site/"><a class="nav-link " >Sobre</a></Link>
            </li>
            <li class="nav-item">
                <Link className="" to="/site/experiencia/"><a class="nav-link">Experiência</a></Link>
            </li>
            <li class="nav-item">
                <Link className="" to="/site/portfolio/"><a class="nav-link">Portfólio</a></Link>
            </li>
            {/* <li class="nav-item">
                <Link className="" to="/site/hobbies/" ><a class="nav-link" >Hobbies</a></Link>
            </li> */}
        </ul>
    </nav>