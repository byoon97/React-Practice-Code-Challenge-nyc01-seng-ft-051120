import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    money: 100,
    eaten : [],
    currentDisplayed : 0
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({sushis : data})
    }) 
  }

  renderFour = () => {
    return this.state.sushis.slice(this.state.currentDisplayed, this.state.currentDisplayed+4)
  }

  moreSushi = (event) => {
    let newCurrentDisplayed = this.state.currentDisplayed + 4

    this.setState({currentDisplayed : newCurrentDisplayed})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.renderFour()}
                        more={this.moreSushi} 
                        eaten={this.state.eaten} 
                      />
        <Table money={this.state.money}
              />
      </div>
    );
  }
}

export default App;