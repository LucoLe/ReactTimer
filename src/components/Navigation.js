import React from 'react';
import { Link, IndexLink } from 'react-router';

export default function Navigation () {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Timer App
          </li>
          <li className="menu-text">
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li className="menu-text">
            <Link to="/countdown" activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="https://github.com/LucoLe" target="_blank">Luco</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
