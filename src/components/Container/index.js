import React from 'react';
import "./styles.css";


const Container = props => {
    return <div className= {props.div}>{props.children}</div>
}

export default Container;