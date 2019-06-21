import React, {Component} from 'react';
import Title from "../Title";
import Caixa from "../Caixa";
import Text from "../Text";
import Container from '../Container';
import img4 from "../Images/img4.png";
import img5 from "../Images/img5.png";
import img6 from "../Images/img6.png";
import img7 from "../Images/img7.png";

import "./styles.css";

class Detalhes extends Component{
    

    render(){
       return(
        <>
           <section id="detalhes">
            <Container div="container column">
                 <Title> Detalhes</Title>
                 <Container div="row justify-sa">
                    <Caixa caixa="cx1">
                        <Container div="row justify-center">
                            <img src={img7} alt="Foto Robo" className="imgdet"/>
                            <Text texto="h4preto">Interesses</Text>
                        </Container>
                        <Text texto="h5preto"></Text>
                        <Text texto="ppreto"> Área de banco de dados</Text>
                        <Text texto="ppreto"> Desenvolvimento Web</Text>
                        <Text texto="ppreto"> Robótica</Text>
                    </Caixa> 
                    <Caixa caixa="cx1">
                        <Container div="row justify-center">
                            <img src={img4} alt="Foto Robo" className="imgdet"/>
                            <Text texto="h4preto">Idiomas</Text>
                        </Container>
                        <Text texto="h5preto">Português</Text>
                        <Text texto="ppreto"> Língua Nativa</Text>
                        <Text texto="h5preto">Inglês</Text>
                        <Text texto="ppreto"> Avançado</Text>
                        <Text texto="h5preto">Mandarim</Text>
                        <Text texto="ppreto"> Básico</Text>
                    </Caixa> 
                </Container>
                <Container div="row justify-sa">
                    <Caixa caixa="cx1">
                        <Container div="row justify-center">
                            <img src={img6} alt="Foto Robo" className="imgdet"/>
                            <Text texto="h4preto">Formação</Text>
                        </Container>
                        <Text texto="h5preto">2017/Atualmente - Universidade Tecnológica Federal do Paraná</Text>
                        <Text texto="ppreto"> Bacharel em Engenharia de Software</Text>
                        <Text texto="h5preto">2014/2016 - Colégio Técnico Industrial/UNESP</Text>
                        <Text texto="ppreto"> Técnico em Informática</Text>
                    </Caixa> 
                    <Caixa caixa="cx1">
                        <Container div="row justify-center">
                            <img src={img5} alt="Foto Robo" className="imgdet"/>
                            <Text texto="h4preto">Atividades</Text>
                        </Container>
                        <Text texto="h5preto">2017-2019 Diretório Central dos Estudantes</Text>
                        <Text texto="ppreto"> Membro do núcleo de eventos externos.</Text>
                        <Text texto="h5preto">2016 - Jogo educacional em inglês</Text>
                        <Text texto="ppreto"> TCC do Colégio Técnico desenvolvido em grupo, utilizando a plataforma Unity 2D.</Text>
                    </Caixa> 
                </Container>
                
            </Container>
            </section>
            
        </>
       );
    }
}

export default Detalhes;