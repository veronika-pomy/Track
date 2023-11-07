import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../Controllers/Redux/authSlice';
import './Sidebar.css';

const Sidebar = () => {

  const dispatch = useDispatch();

  const { auth } = useSelector(state => state);

  const logOutHandler = () => {
    dispatch(logOut());
  }

  return (
    <div className='sidebar'>
      <Link 
        className='sidebar-nav-link'
        to='/'
      >
        <h1 className='logo'>Track Logo</h1>
      </Link>
      <Link 
          className='sidebar-nav-link'
          to='/view-issues'
        >
          <h1 className='issue'>View Issues #1</h1>
      </Link>
      <Link 
          className='sidebar-nav-link'
          to='/view-issues'
        >
          <h1 className='issue'>View Issues #2</h1>
      </Link>
      <Link 
          className='sidebar-nav-link'
          to='/view-issues'
        >
          <h1 className='issue'>View Issues #2</h1>
      </Link>
      {/* Only admin can create issues, not reg users */}
      {auth.admin && 
        <Link 
          className='sidebar-nav-link'
          to='/create-issues'
        >
          <h1 className='issue'>Create Issues</h1>
        </Link>
      }
      <button className='logout' onClick={logOutHandler}>
        Log out
      </button>
    </div>
  )
}

export default Sidebar;