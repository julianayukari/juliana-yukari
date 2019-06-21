import React, {Component} from 'react';
import Title from "../Title";
import Container from '../Container';
import Text from '../Text';
import Input from '../Input';
import Button from '../Button';
import "./styles.css";


class Contato extends Component{

    render(){
       return(
        <>
            <section id="contato">
            <Container div="container column">
                <Title> Entre em contato </Title>
                <div id="repos-filter">
                    <Text texto="pbranco">Remetente:</Text>
                    <Input label="Filtar" onChange={this.handleChangeInput} />
                </div>
                <div id="repos-filter">
                    <Text texto="pbranco">Email válido:</Text>
                    <Input label="Filtar" onChange={this.handleChangeInput} />
                </div>
                <div id="repos-filter">
                    <Text texto="pbranco">Assunto:.</Text>
                    <Input label="Filtar" onChange={this.handleChangeInput} />
                </div>
                <div id="repos-filter">
                    <Text texto="pbranco">Mensagem:</Text>
                    <Input label="Filtar" onChange={this.handleChangeInput} />
                </div>
                <div id="repos-filter">
                    <Button onClick={this.handleButtonClick}> Enviar</Button>
                </div>
            </Container>
            </section>
            
        </>
       );
    }
}

export default Contato;