import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import CountdownForm from '../../components/CountdownForm';

describe('CountdownForm', () => {
  let onSetCountdown = jest.fn();

  afterEach(() => {
    onSetCountdown.mockReset();
  });

  test('should exist and should have default state', () => {
    const countdownForm = shallow(<CountdownForm onSetCountdown={onSetCountdown} />);

    expect(countdownForm.state()).toEqual({seconds: ''});
  });

  test('should update state when input is changed', () => {
    const countdownForm = shallow(<CountdownForm onSetCountdown={onSetCountdown} />);

    countdownForm.find('input').simulate('change', {
      target: {
        value: '56'
      },
    });

    expect(countdownForm.state('seconds')).toBe('56');
  });

  test('should call onSetCountdown if valid seconds entered', () => {
    const countdownForm = shallow(<CountdownForm onSetCountdown={onSetCountdown} />);

    countdownForm.setState({seconds: '109'});
    countdownForm.find('form').simulate('submit', {
      preventDefault() {},
    });

    expect(onSetCountdown).toHaveBeenCalledWith(109);
  });

  test('should not call onSetCountdown if invalid seconds entered', () => {
    const countdownForm = shallow(<CountdownForm onSetCountdown={onSetCountdown} />);

    countdownForm.setState({seconds: 'abc'});
    countdownForm.find('form').simulate('submit', {
      preventDefault() {},
    });

    expect(onSetCountdown).not.toHaveBeenCalledWith(109);
  });
});
