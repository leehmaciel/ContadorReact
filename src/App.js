import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        cont: 0
      }
  }

  add = () => this.setState({cont: this.state.cont + 1});
  sub = () => this.setState({cont: this.state.cont - 1});
  reset = () => this.setState({cont: 0});

  render() {
    return (
      <div className="App">

        <p>{this.state.cont}</p>
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.reset}>zero</button>
      </div>
    );
  }
}

export default App;
