import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default props =>
    <nav className="navbar">
        <ul class="nav flex-column">
                <li class="nav-item">
                    <Link to="/"><a class="nav-link active" href="#">Sobre Mim</a></Link>
                </li>
                <li class="nav-item">
                    <Link to="projetos"><a class="nav-link" href="#">Experiencia</a></Link>
                </li>
                <li class="nav-item">
                    <Link to="portifolio"><a class="nav-link" href="#">Portifólio</a></Link>
                </li>
                <li class="nav-item">
                    <Link to="hobbies"><a class="nav-link" href="#">Hobbies</a></Link>
                </li>
                <li class="nav-item">
                    <Link to=""><a class="nav-link " href="#">Disabled</a></Link>
                </li>
        </ul>
    </nav>