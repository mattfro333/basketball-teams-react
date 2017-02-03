import React, { Component } from 'react';
import List from './List';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      players: {
        benched: ['griffin', 'pierce', 'crawford'],
        onCourt: ['paul', 'redick', 'rivers']
      }
    }

    this.moveToBench = this.moveToBench.bind(this);
    this.moveToCourt = this.moveToCourt.bind(this);
  }

  moveToBench(player, i) {
    var court = this.state.players.onCourt;
    var bench = this.state.players.benched;

    bench.push(court.splice(i, 1));

    this.setState({
      players: {
        benched: bench,
        onCourt: court
      }
    })
  }

  moveToCourt(player, i) {
    var court = this.state.players.onCourt;
    var bench = this.state.players.benched;

    court.push(bench.splice(i, 1));

    this.setState({
      players: {
        benched: bench,
        onCourt: court
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <List title="On Court" handleClick={this.moveToBench}
        list={this.state.players.onCourt} />
        <List title="Benched" handleClick={this.moveToCourt}
        list={this.state.players.benched} />
        
      </div>
    );
  }
}

export default App;
