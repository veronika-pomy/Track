import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../Controllers/Redux/authSlice'
import './Login.css';

function Login () {

    const dispatch = useDispatch();

    const [ formInput, setFormInput ] = useState({
        email: '',
        password: ''
    });

    const inputHandler = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

    const submitInput = (e) => {
        e.preventDefault();
        dispatch(logIn(formInput));
    }

  return (
    <div
        className='login-bg'
    >
        <form 
            action=""
            className='login-form'
        >
            <h1 className="login-user">
                User Login:
            </h1>
            <input 
                type="text"
                name='email'
                placeholder='Email'
                onChange={inputHandler}
                className='login-input'
                value={formInput.email}
            />
            <input 
                name='password'
                placeholder='Password'
                onChange={inputHandler}
                value={formInput.password}
                className='login-input'
                type='password'
            />
            <button
                type='submit'
                className='login-btn'
                onClick={submitInput}
            >
                Login
            </button>
        </form>
    </div>
  )
}

export default Login;