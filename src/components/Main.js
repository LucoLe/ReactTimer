import React, {PropTypes} from 'react';

import Navigation from './Navigation';

export default function Main (props) {
  return (
    <div>
      <div >
        <div>
          <Navigation/>
          <p>Main.js Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.object.isRequired
};
