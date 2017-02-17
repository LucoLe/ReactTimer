import React, {PropTypes} from 'react';

import Navigation from './Navigation';

export default function Main (props) {
  return (
    <div>
      <Navigation/>
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          {props.children}
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.object.isRequired
};
