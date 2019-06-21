import React, {Component} from 'react';
import img1 from "../Images/img1.jpeg";
import img2 from "../Images/img2.jpeg";
import img3 from "../Images/img3.jpg";
import Title from "../Title";
import Caixa from "../Caixa";
import Text from "../Text";
import Container from '../Container';
import "./styles.css";

class Blog extends Component{

    render(){
       return(
            <section id="blog">
            <Container div="container column">
                <Title> Blog</Title>
                <Container div="row justify-sa">
                    <Caixa caixa="cx2">
                        <img src={img1} alt="Foto Robo" className="img-robo"/>
                        <Text texto="h4branco">Área de Robótica</Text>
                        <Text texto="pbranco">Em 2014 tive a oportunidade de participar da Olimpiada Brasileira de Robótica - Modo Prático - E melhor ainda, foi na companhia dos meus amigos.</Text>
                        <Text texto="pbranco">E é uma área que eu realmente gosto e creio que é o futuro da sociedade. E quem sabe não sigo essa carreira?!</Text>
                    </Caixa> 
                    <Caixa caixa="cx2">
                        <img src={img2} alt="Foto Robo" className="img-robo"/>
                        <Text texto="h4branco">V COINTER</Text>
                        <Text texto="pbranco">Ano passado, aconteceu a quinta edição do Congresso Interno dos Estudantes da UTFPR em Dois Vizinhos. EU ESTAVA LÁ!</Text>
                        <Text texto="pbranco">Seu objetivo é deliberar assuntos sobre a vida acadêmica e promover união e integração de estudantes de diferentes câmpus.</Text>
                    </Caixa> 
                    <Caixa caixa="cx2">
                        <img src={img3} alt="Foto Robo" className="img-robo"/>
                        <Text texto="h4branco">24 horas de música</Text>
                        <Text texto="pbranco">Uma das minhas manias é escutar música o dia inteiro, até mesmo para estudar.</Text>
                        <Text texto="pbranco">Já fui no show do Maroon 5 e consegui ficar bem pertinho deles. Foi sensacional! Acredito que músicas são capazes de mudar meu humor hehe :) .</Text>
                    </Caixa> 
                </Container>
            </Container>
       </section>
       );
    }
}

export default Blog;