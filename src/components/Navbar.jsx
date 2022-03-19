import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'






export default props =>
    <nav className="navbar">
        <ul class="nav flex-md-column flex-lg-row   align-self-md-center flex-nowrap mx-0 flex-md-wrap ">
            <li class="nav-item">
                <Link className="" to="/"><a class="nav-link " >Sobre</a></Link>
            </li>
            <li class="nav-item">
                <Link className="" to="/experiencia/"><a class="nav-link">Experiência</a></Link>
            </li>
            <li class="nav-item">
                <Link className="" to="/portfolio/"><a class="nav-link">Portfólio</a></Link>
            </li>
            <li class="nav-item">
                <Link className="" to="/hobbies/" ><a class="nav-link" >Hobbies</a></Link>
            </li>
            <li class="nav-item last" id="cv">
                <a className="nav-link " href="https://drive.google.com/file/d/1ROY8SSqrgRbHzYRGKGigVZhDiCK_57FY/view?usp=sharing" target="_blank">Baixar cv PDF</a>
            </li>
        </ul>
    </nav>