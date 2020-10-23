import React, { Component } from 'react';
import Helper from './Helper'
import QuotesList from './components/QuotesList'
import Form from './components/Form'
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      quotes: []
    }
  }

  render() {
    return (
      <div>
        <Form />
        <QuotesList quotes={this.state.quotes} />
      </div>
    );
  }
}

export default App;
