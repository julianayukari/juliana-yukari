import React, { Component } from "react";
import "./styles.css";
import Caixa from "../Caixa";

class Footer extends Component {
  
  render() {
    return (
    <>
        <Caixa caixa="caixa-footer column">
            <p> Desenvolvido por Juliana Yukari em Junho de 2019</p>
            <p>julianayukari36@gmail.com</p>
            <p>+55 (14)99175-3000</p>
        </Caixa>
        
    </>
    )}
}
export default Footer;