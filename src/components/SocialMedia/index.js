import React, { Component } from "react";
import "./styles.css";
import Caixa from "../Caixa";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import github from "../Images/github.png";

class SocialMedia extends Component {
  
  render() {
    return (
    <>
        <Caixa caixa="caixa-footer">
            <a href="https://www.facebook.com/juliana.yukari.1" target="_black"><img src={facebook} alt="Icone Facebook" className="icone"/></a>
            <a href="https://www.instagram.com/ju_yukari" target="_black"><img src={instagram} alt="Icone Instagram" className="icone"/></a>
            <a href="https://github.com/julianayukari"target="_black"><img src={github} alt="Icone Github" className="icone"/></a>
        </Caixa>
        
    </>
    )}
}
export default SocialMedia;