import React, { useState } from 'react';
import './style.css';
import Header from './Component/Header';
import UserContext from './utils/usercontext';

import { Outlet } from 'react-router-dom';
export default function App() {
  let [username, setUsername] = useState('reyansh');
  return (
    <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
      <div className="applayout">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}
