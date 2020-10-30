import React, { Component } from 'react'
import HaikuCreator from './Helper'
import QuotesList from './components/QuotesList'
import Form from './components/Form'
import './App.css'

class App extends Component {

  constructor() {
    super()
    this.HaikuCreator = new HaikuCreator(1, 1)
    this.state = {
      quotes: []
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(data) {
    this.HaikuCreator.quoteType = data.quoteType;
    this.HaikuCreator.quoteNumber = data.numberOfQuotes;
    this.setState({ quotes: this.HaikuCreator.generateQuotes() })
  }

  render() {
    return (
      <div>
        <h1>Créateur de Haiku</h1>
        <Form onSubmit={this.onSubmit} />
        <QuotesList quotes={this.state.quotes} />
      </div>
    );
  }
}

export default App;
