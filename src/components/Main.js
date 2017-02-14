import React, {PropTypes} from 'react';

export default function Main (props) {
  return (
    <div>
      <div >
        <div>
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
