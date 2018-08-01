import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddToCollectionTree from './tree/AddToCollectionTree';

const collections = [
  {
    id: '1',
    name: 'Collection 1',
    children: [
      {
        id: '4',
        name: 'Collection 4',
        children: [
          {
            id: '5',
            name: 'Collection 5',
            children: []
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Collection 2',
    children: []
  },
  {
    id: '3',
    name: 'Collection 3',
    children: []
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <AddToCollectionTree collections={collections} />
      </div>
    );
  }
}

export default App;
