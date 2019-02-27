import React, { Component } from 'react';
import './App.css';

import Friends from './components/Friends';
// import Form from './components/Form'

class App extends Component {
  render() {
    return (
      <div>
        <Friends />
        {/* <Form /> */}
      </div>
    );
  }
}

export default App;
