import React, { Component } from "react";
import {HashLink as Link} from 'react-router-hash-link';
import "./styles.css";

class Header extends Component {
  render() {

    const links = ['Home', 'Detalhes', 'Habilidades','Blog', 'Portfólio' , 'Infos', 'Contato'];
    const NavLinks = links.map( link => {
        return(
            <li><Link to={'#'+link.toLowerCase()}> {link}</Link></li>
        )
    });

    return(
        <header id = "menu">
        <ul>
            {NavLinks}
        </ul>
        </header>
    )
}
}
export default Header;