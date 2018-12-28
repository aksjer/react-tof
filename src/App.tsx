import React, { Component } from 'react';
import './App.css';
import Heroes from './heroes/heroes';
import { HEROES } from './mocks/heroes';

class App extends Component {
  render() {
    const title = 'Tour of Heroes';

    return (
      <div>
        <h1>{title}</h1>
        <Heroes heroes={HEROES} />
      </div>
    );
  }
}

export default App;
