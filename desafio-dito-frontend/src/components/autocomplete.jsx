import React, { Component } from "react";
import api from "../api/api";

import "./autocomplete.css";

class AutoComplete extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      events: "",
      list: [],
      idKey: "",
      suggestions: [],
      text: ""
    }
  }

  async componentDidMount() {
    await api.get()
      .then(resp => this.setState({ ...this.state, events: resp.data}))
      this.listEvents();
  }
  
  listEvents = () => {
    const { events, list } = this.state;

    events.map(itens => {
      this.setState({ ...this.state, idKey: itens._id}); 
      return list.push(itens.event);
    });
  }
  
  handleChange = event => {
    const value = event.target.value;

    const { list } = this.state;

    let suggestions = [];
    
    
    if (value.length > 1) {
      const regex =  new RegExp(`^${value}`, "i");
      suggestions = list.sort().filter(v => regex.test(v));
    }
    
    this.setState({ ...this.state, suggestions, text: value });
  }
  
  renderSuggestions () {
    const { suggestions } = this.state;
    
    if (suggestions.length === 0) {
      return null;
    }

    return (
      <ul>
        {suggestions.map((item) => <li key={item} onClick={() => this.suggestionSelected(item)}>{item}</li>)}
      </ul>
    )
  }

  suggestionSelected (value) {
    this.setState(() => ({
      text: value,
      suggestions: []
    }))
  }

  render() {
    const { text } = this.state;

    return (
      <div className="autocomplete">
        <input value={text} onChange={this.handleChange} type="text" />
        {this.renderSuggestions()}
      </div>
    )
  }
} 

export default AutoComplete;