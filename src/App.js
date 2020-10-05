import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import quote from './quote';

class App extends Component {

  state = {
    user: '',
    quotation: '',
    value: ''
  }

  componentDidMount = async () => {
    console.log('Hello World');
    const user = await web3.eth.getAccounts();
    const quotation = await quote.methods.quote().call();

    this.setState({ user, quotation });
  }

  updateQuote = async (e) => {
    e.preventDefault();
    
    const accounts = await web3.eth.getAccounts();

    await quote.methods.updateQuote(this.state.value).send({
      from: accounts[0]
    });

    console.log('Update done...');
  }

  render() {

    return(
      <div>

        <h2>Contract Address: {quote._address}</h2>
        <h2>User: {this.state.user}</h2>
        <h3>Quote: {this.state.quotation}</h3>

        <form onSubmit={this.updateQuote}>

          <label>Enter your new quote</label>
          <input 
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value }) }
          />

          <button type='submit'>Update</button>
        </form>

      </div>
    );
  }
}


export default App;
