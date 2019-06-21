import React, { Component } from "react";
import "./styles.css";

class Banner extends Component {


    render() {
        return (
            <>
                <div className={this.props.ban}>
                    {this.props.children}
                </div>
            </>
    )}
}
export default Banner;