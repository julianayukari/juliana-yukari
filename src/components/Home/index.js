import React, { Component } from "react";
import Banner from "../Banner";
import Container from '../Container';
import Button from '../Button';
import "./styles.css";
import juliana from "../Images/juliana.png";
import Resume_Juliana from "../Images/Resume_Juliana.pdf";

class Home extends Component {
    render() {
    return (
    <>
        <section id="home">
            <Container div="container column items">
                <div className="img">
                    <img src={juliana} alt="Foto Juliana" className="img-juliana"/>
                </div>
                <Banner ban="banner-text">
                    <h1>Juliana Yukari Hukuchima</h1>
                    <p> Olá, prazer! Sou Juliana Yukari, tenho 21 anos e atualmente estudo Engenharia de Software na UTFPR no campus de Cornélio Procópio. </p>
                    <Button> <a href={Resume_Juliana} download>Currículo</a></Button>
                </Banner>
            </Container>
        </section> 
    </>
    )}
}
export default Home;