import React, {Component} from 'react';
import Title from "../Title";
import Text from "../Text";
import Container from '../Container';
import "./styles.css";

class Habilidade extends Component{

    render(){
        const hab = ['C', 'C++', 'JAVA', 'JavaScript', 'React JS', 'HTML/CSS', 'MySQL', 'MySQL Workbench','Trabalhar em equipe'];
        const todasHab = hab.map(( habs,i )=> {
            return(
                    <Text texto="h4preto">{habs}</Text>
            )
        });

       return(
        <>
            <section id="habilidades">
            <Container div="container column">
                <Title> Habilidades</Title>
                <Container div="row justify-center items">
                <Text texto="h4preto">{todasHab}</Text>
               </Container> 
            </Container>
            </section>
        </>
       );
    }
}

export default Habilidade;