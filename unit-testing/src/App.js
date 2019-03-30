import React, { Component } from 'react';
import Event from './Event/event'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.message}
        <div>
        <Event onClick={() => console.log('click') } />
        </div>
      </div>
    );
  }
}
export default App;
