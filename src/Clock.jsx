import React, { Component } from 'react';
import './style/App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
  }
  
  componentWillUnmount() {
    clearInterval();
  }

  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());

    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60) % 60) % 24;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(time / (1000 * 60 * 60 * 24) / 7);
    const months = Math.floor(time / (1000 * 60 * 60 * 24) / 30);

    this.setState({months, weeks, days, hours, minutes, seconds});


  }

  render() {
    return (
      <div className = 'countdown-timer'>
        <div>
          <div className = 'clock-date d-inline'>
            March 31<sup>st</sup> 2018
          </div>
        </div>
        <div>
          <div className = 'd-inline'>
            {this.leading0(this.state.months)}
            <span className = 'mini-text'>Months</span>
          </div>
          <div className = 'd-inline'>
            {this.leading0(this.state.weeks)}
            <span className = 'mini-text'>Weeks</span>
          </div>
          <div className = 'd-inline'>
            {this.leading0(this.state.days)}
            <span className = 'mini-text'>Days</span>
          </div>
          <div className = 'd-inline'>
            {this.leading0(this.state.hours)}
            <span className = 'mini-text'>Hours</span>
          </div>
          <div className = 'd-inline'>
            {this.leading0(this.state.minutes)}
            <span className = 'mini-text'>Minutes</span>
          </div>
          <div className = 'd-inline'>
            {this.leading0(this.state.seconds)}
            <span className = 'mini-text'>Seconds</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Clock;
