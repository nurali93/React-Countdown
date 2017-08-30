import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
//import { Form, FormControl, Button } from 'react-bootstrap';


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
        <div className = 'App-title'>
          Countdown to {this.state.deadline}
        </div>
        <Clock
          deadline = {this.state.deadline}/>
        {
        // <Form inline>
        //   <FormControl
        //     className = 'Deadline-input'
        //     placeholder = 'new date'
        //     onChange = {event => this.setState({newDeadline: event.target.value})}
        //   />
        //   <Button onClick = {() => this.changeDeadline()}>
        //     Submit
        //   </Button>
        // </Form>
        }
        <h2>#alinael</h2>
      </div>
    )
  }
}

export default App;
