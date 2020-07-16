import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from '../src/components/navbar/Navbar';
import ApplicationViews from './ApplicationViews';
import './App.css';

const App = () => {
  const isAuthenticated = () => sessionStorage.getItem("betadata-token") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = () => {
    setHasUser(isAuthenticated());
  };

  const clearUser = () => {
    sessionStorage.clear()
    setHasUser(isAuthenticated());
  }

  return (
    <Router>
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <div id="main-content">
        <ApplicationViews hasUser={hasUser} setUser={setUser} />
      </div>
    </Router>
  );
};

export default App;
