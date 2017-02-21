import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Timer from '../../components/Timer';

describe('Timer', () => {
  test('should exist', () => {
    const timer = shallow(<Timer />);
  });

  test('should start timer on started status', (done) => {
    const timer = shallow(<Timer />);

    timer.instance().handleStatusChange('started');
    expect(timer.state()).toEqual({count: 0, timerStatus: 'started'});

    setTimeout(() => {
      expect(timer.state()).toEqual({count: 1, timerStatus: 'started'});
      done();
    }, 1001);
  });

  test('should pause timer on paused status', (done) => {
    const timer = shallow(<Timer />);

    timer.setState({count: 10});
    timer.instance().handleStatusChange('started');
    timer.instance().handleStatusChange('paused');

    setTimeout(() => {
      expect(timer.state()).toEqual({count: 10, timerStatus: 'paused'});
      done();
    }, 1001);
  });

  test('should clear count on stopped status', (done) => {
    const timer = shallow(<Timer />);

    timer.setState({count: 10});
    timer.instance().handleStatusChange('started');
    timer.instance().handleStatusChange('stopped');

    setTimeout(() => {
      expect(timer.state()).toEqual({count: 0, timerStatus: 'stopped'});
      done();
    }, 1001);
  });
});
