import React, { Component } from 'react';
import AutoComplete from "../components/autocomplete";
import Header from "../components/header";
import Logo from "../img/Logo-Dito-Nova.png";

import "./app.css";

class App extends Component {

  render() {
    
    return (
      <div>
        <Header title="Desafio" src={Logo} Alt="desafio dito" />
        <div className="autocomplete-component">
          <AutoComplete />
        </div>
      </div>
    );
  }
}

export default App;