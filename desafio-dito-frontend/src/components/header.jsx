import React from "react";
import "./header.css";

export default props => (
  <header>
    <h1>{props.title}</h1>
    <img src={props.src} alt={props.alt}/>
  </header>
)