import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Views/Login/Login';

function App() {

  // grabbing date from state using redux hook to determine login status
  const { auth } = useSelector(state => state);

  return (
    <>
    {!auth.loggedIn ? 
      <Login />
      :
      <h1>LOGGED IN</h1>
    }
    </>
  );
}

export default App;
