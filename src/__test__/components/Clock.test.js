import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Clock from '../../components/Clock';

describe('Clock', () => {
  test('should exist', () => {
    const clock = shallow(<Clock />);
  });
});

describe('render', () => {
  test('should render clock to output', () => {
    const clock = shallow(<Clock totalSeconds={62}/>);

    expect(clock.find('.clock-text').text()).toEqual('01:02');
  });
});

describe('formatSeconds', () => {
  test('should format seconds', () => {
    const clock = shallow(<Clock />);
    const seconds = 615;
    const expected = '10:15';

    expect(clock.instance().formatSeconds(seconds)).toEqual(expected);
  });

  test('should format seconds when min/sec is less than 10', () => {
    const clock = shallow(<Clock />);
    const seconds = 61;
    const expected = '01:01';

    expect(clock.instance().formatSeconds(seconds)).toEqual(expected);
  });
});
