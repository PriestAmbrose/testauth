// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Auth0Context } from '../react-auth0-spa';

const NavBar = () => { //main component for the whole web page
  const { isAuthenticated, loginWithRedirect, logout } = React.useContext(Auth0Context); //unpacking fields from object
  //when you click "Log in" - you invoke loginWithRedirect()
  //when you click "Log out" - you invoke logout() function
  //you check isAuthenticated by invoking Auth0Context in the beginning of all process to load the page

  return (
    <div>
      {!isAuthenticated && ( // if it is not Authenticated - then it shows only Log in button
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      
      {isAuthenticated &&  // if it is Authenticated then it returns Log out button
      <button onClick={() => logout()}>Log out</button>}

      {isAuthenticated && ( //apart form Log out also shows two links - to profile and to home
        <span>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </span>
      )}
    </div>
  );
};

export default NavBar; //that's it!