import React from 'react';

import getTimeWithOffset from './getTime.js';

import './clock.scss';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      worldTime: getTimeWithOffset(props.offset),
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({
        worldTime: getTimeWithOffset(this.props.offset)
      }), 
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">
            {this.props.location}
        </div>
        <div className="clock__time">
            {`${this.state.worldTime}`}
        </div>
      </div>
    );
  }
}

export default Clock;