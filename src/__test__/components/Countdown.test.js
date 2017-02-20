import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Countdown from '../../components/Countdown';

describe('Countdown', () => {
  test('should exist', () => {
    const countdown = shallow(<Countdown />);
  });

  describe('handleSetCountdown', () => {
    test('should set state to started and countdown', (done) => {
      const countdown = shallow(<Countdown />);

      countdown.instance().handleSetCountdown(10);
      expect(countdown.state()).toEqual({count: 10, countdownStatus: 'started'});

      setTimeout(() => {
        expect(countdown.state()).toEqual({count: 9, countdownStatus: 'started'});
        done();
      }, 1001);
    });

    test('should never set count to less than 0', (done) => {
      const countdown = shallow(<Countdown />);

      countdown.instance().handleSetCountdown(1);

      setTimeout(() => {
        expect(countdown.state()).toEqual({count: 0, countdownStatus: 'stopped'});
        done();
      }, 1001);
    });

    test('should pause countdown on pause status', (done) => {
      const countdown = shallow(<Countdown />);

      countdown.instance().handleSetCountdown(3);
      countdown.instance().handleStatusChange('paused');

      setTimeout(() => {
        expect(countdown.state()).toEqual({count: 3, countdownStatus: 'paused'});
        done();
      }, 1001);
    });

    test('should reset count on stopped', (done) => {
      const countdown = shallow(<Countdown />);

      countdown.instance().handleSetCountdown(3);
      countdown.instance().handleStatusChange('stopped');

      setTimeout(() => {
        expect(countdown.state()).toEqual({count: 0, countdownStatus: 'stopped'});
        done();
      }, 1001);
    });
  });
});
