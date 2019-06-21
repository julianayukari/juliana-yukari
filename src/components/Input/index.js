import React from "react";
import "./styles.css";

const Input = ({ onChange }) => {
  return (
    <input onChange={onChange} className="input" placeHolder="Digite aqui..." />
  );
};

export default Input;
