import React, { Component } from "react";
import Header from "../../components/Header";
import Home from "../../components/Home";
import Blog from "../../components/Blog";
import Detalhes from "../../components/Detalhes";
import Habilidade from "../../components/Habilidade";
import Portfolio from "../../components/Portfolio";
import Info from "../../components/Info";
import SocialMedia from "../../components/SocialMedia";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";

class Main extends Component {
  render() {
    return (
      <>
        <Header/>
        <Home/>
        <Detalhes/>
        <Habilidade/>
        <Blog/>
        <Portfolio/>
        <Info/> 
        <Contato/>   
        <SocialMedia/> 
        <Footer/>      
      </>
    );
  }
}

export default Main;
