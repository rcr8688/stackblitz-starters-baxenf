import React, { useContext } from 'react';
import { LOGO_IMG } from '../utils/constents';
import { Link } from 'react-router-dom';
import Isonline from '../utils/onlineCustomHook';
import UserContext from '../utils/usercontext';

const Header = () => {
  let isOnline = Isonline();
  let { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_IMG} />
      </div>
      <div className="nav-items">
        <ul>
          <li>online status {isOnline ? 'userOnline' : 'userOffline'}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
