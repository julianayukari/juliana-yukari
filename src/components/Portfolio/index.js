import React, {Component} from 'react';
import Title from "../Title";
import Text from "../Text";
import Caixa from "../Caixa";
import Container from '../Container';
import bulb from "../Images/bulb.png";
import site from "../Images/site.png";
import sicov from "../Images/sicov.png";
import "./styles.css";

class Portfolio extends Component{

    render(){
       return(
        <>
            <section id="portfólio">
                <Container div="container column">
                    <Title> Portfólio</Title>
                    <Container div="row">
                      <Caixa caixa="cx4">
                        <img src={bulb} alt="Foto Bulb" className="imgport"/>  
                        <Text texto="ppreto">Jogo desenvolvido em Unity 2D em grupo.</Text> 
                        <Text texto="ppreto">(Grupo de 6 pessoas)</Text>
                    </Caixa> 
                    <Caixa caixa="cx4">
                        <img src={site} alt="Foto Site" className="imgport"/>  
                        <Text texto="ppreto">Trabalho Web</Text>
                        <Text texto="ppreto">Refazer um website pronto em HTML e CSS</Text>
                    </Caixa> 
                    <Caixa caixa="cx4">
                        <img src={sicov} alt="Foto Site" className="imgport"/>  
                        <Text texto="ppreto">Programa em desktop sendo desenvolvido em Java</Text>
                        <Text texto="ppreto">(Beatriz, Juliana, Lucas e Luís)</Text>
                    </Caixa> 
                    </Container>
                    
                </Container>
            </section>
           
            
        </>
       );
    }
}

export default Portfolio;