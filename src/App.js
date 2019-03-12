import React, { Component } from 'react';
import './bootstrap.min.css'
import './App.css';

import TodoContainer from "./components/TodoContainer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoContainer />
      </div>
    );
  }
}

export default App;
