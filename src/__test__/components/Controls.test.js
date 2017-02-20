import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Controls from '../../components/Controls';

describe('Controls', () => {
  test('should exist', () => {
    const controls = shallow(<Controls countdownStatus="started" />);
  });

  describe('render', () => {
    test('should rendre pause when started', () => {
      const controls = shallow(<Controls countdownStatus="started" />);

      expect(controls.contains('Pause')).toEqual(true);
    });

    test('should rendre start when paused', () => {
      const controls = shallow(<Controls countdownStatus="paused" />);

      expect(controls.contains('Start')).toEqual(true);
    });
  });
});
