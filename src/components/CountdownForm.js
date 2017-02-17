import React, { Component } from 'react';

export default class CountdownForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({seconds: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let strSeconds = this.state.seconds;

    if (strSeconds.match(/^[0-9]*$/)) {
      this.setState({value: ''});
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  }

  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.handleSubmit} className="countdown-form">
          <input type="text" value={this.state.seconds} onChange={this.handleChange} placeholder="Enter time in seconds" />
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
}

CountdownForm.propTypes = {
  onSetCountdown: React.PropTypes.func.isRequired
};
