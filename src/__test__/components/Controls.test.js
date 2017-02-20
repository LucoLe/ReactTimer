import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Controls from '../../components/Controls';

describe('Controls', () => {
  let onStatusChange = jest.fn();
  test('should exist', () => {
    const controls = shallow(<Controls countdownStatus="started" onStatusChange={onStatusChange} />);
  });

  describe('render', () => {
    test('should rendre pause when started', () => {
      const controls = shallow(<Controls countdownStatus="started" onStatusChange={onStatusChange} />);

      expect(controls.contains('Pause')).toEqual(true);
    });

    test('should rendre start when paused', () => {
      const controls = shallow(<Controls countdownStatus="paused" onStatusChange={onStatusChange} />);

      expect(controls.contains('Start')).toEqual(true);
    });
  });
});
