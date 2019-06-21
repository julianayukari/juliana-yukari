import React, { Component } from "react";
import "./styles.css";

class Caixa extends Component {


    render() {
        return (
            <>
                <div className={this.props.caixa}>
                    {this.props.children}
                </div>
            </>
    )}
}
export default Caixa;