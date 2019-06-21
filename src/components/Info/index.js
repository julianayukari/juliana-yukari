import React, {Component} from 'react';
import Title from "../Title";
import Text from '../Text';
import Caixa from '../Caixa';
import Container from '../Container';
import iconcurriculo from "../Images/iconcurriculo.png";
import iconmulher from "../Images/iconmulher.png";
import "./styles.css";


class Info extends Component{

    render(){
       return(
        <>
            <section id="infos">
            <Container div="container column">
                <Title> Mais Informações </Title>
                <Container div="row">
                    <Caixa caixa="cx4 padding">
                        <img src={iconcurriculo} alt="Icone de Curriculo" className="icon"/>
                        <Text texto="h4preto">Bibliografia</Text>
                        <Text texto="ppreto justify">Minha história com a tecnologia começou em 2014 quando comecei um curso técnico em Informática no Colégio Técnico Industrial da Unesp. No primeiro ano de estudo, não sabia se era essa área que pretendia seguir na minha carreira profissional, mas depois tive a certeza que era isso que eu queria. Durante o curso, fui capaz de participar em competições de robótica que incluiam montagem e programação. E como trabalho de conclusão de curso, eu e meus amigos desenvolvemos um jogo educacional em inglês na plataforma Unity 2D e um site básico, foi bem desafiador, porém tivemos uma sensação de dever cumprido quando terminamos.</Text>
                    </Caixa>
                    <Caixa caixa="cx4 padding">
                        <img src={iconmulher} alt="Icone de Mulher" className="icon"/>
                        <Text texto="h4preto">Profissão</Text>
                        <Text texto="ppreto justify">Atualmente estudo Engenharia de Software na Universidade Tecnológica Federal do Paraná (UTFPR) no câmpus de Cornélio Procópio. Já estagiei em um departamento de informática na Unesp do câmpus de Bauru, na área de suporte e manutenção de hardwares e softwares. Já estou perto de me formar, mas ainda não decidi o ramo que irei seguir. A tecnologia está constantemente mudando, portanto acredito que não basta só querer e desistir no caminho, devemos correr atrás do que nos motiva.<span> "Tentar não significa conseguir, mas todos que conseguiram, um dia tentaram." (Aristóteles) </span></Text>
                    </Caixa> 
                    
                </Container>
                <Text texto="h4preto">"Don't wish for something, work for it!"</Text>
            </Container>
       </section>
            
        </>
       );
    }
}

export default Info;