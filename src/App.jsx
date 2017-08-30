import React, { Component } from 'react';
import Clock from './Clock';
import './style/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'March 31, 2018',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return (
      <div className = "App">
        <div className="hashtag"><span className="l-tails">a</span>linae<span className="r-tails">l</span></div>
        <Clock
          deadline = {this.state.deadline}/>
      </div>
    )
  }
}

export default App;
