import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './Views/Pages/Login/Login';
import Dashboard from './Views/Pages/Dashboard/Dashboard';
import Authorization from './utils/auth';

function App() {

  const { auth } = useSelector(state => state);

  return (
    <>
    <Router>
      <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/dashboard' exact element={Authorization.isLoggedIn(auth) ? <Dashboard /> : <Navigate to='/'/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
