import React, { Component } from "react";
import "./styles.css";

class Text extends Component {


    render() {
        return (
            <>
                <div className={this.props.texto}>
                    {this.props.children}
                </div>
            </>
    )}
}
export default Text;