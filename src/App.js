import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/carousel'
import 'jquery'
import 'font-awesome/css/font-awesome.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Logo from './components/Logo'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';




function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Logo></Logo>
        <Header></Header>
        <Navbar></Navbar>
        <Router></Router>
        <Footer></Footer>
      </div>
    </BrowserRouter>

  );
}

export default App;
