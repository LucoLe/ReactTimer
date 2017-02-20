import React, { Component } from 'react';

export default class Controlls extends Component {
  render() {
    let { countdownStatus } = this.props;
    let renderStartStopButton = () => {
      if (countdownStatus ==='started') {
        return <button className="button secondary">Pause</button>;
      } else if (countdownStatus === 'paused') {
        return <button className="button primary">Start</button>;
      }
    };

    return (
      <div className="controlls">
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    );
  }
}

Controlls.propTypes = {
  countdownStatus: React.PropTypes.string.isRequired
};
