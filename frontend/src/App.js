import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './Views/Pages/Login/Login';
import Dashboard from './Views/Pages/Dashboard/Dashboard';

function App() {

  // grabbing date from state using redux hook to determine login status
  const { auth } = useSelector(state => state);

  console.log(auth.loggedIn)

  return (
    <>
    <Router>
      <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
