import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {
  state = {
    todos : [
      {
        id :1,
        title : 'Watch React Video',
        completed : false
      },
      {
        id :2,
        title : 'Solve Algoexpert',
        completed : false
      },
      {
        id :3,
        title : 'Do Geeksforgeeks',
        completed : false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>REACT APP</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
