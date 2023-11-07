import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import App from './App';

// Reducers
import authReducer from './Controllers/Redux/authSlice';
import issueReducer from './Controllers/Redux/issueSlice';
import userReducer from './Controllers/Redux/userSlice';

// configure Redux store and reducers
const reducer = combineReducers({
  auth: authReducer,
  issues: issueReducer,
  user: userReducer
});

const store = configureStore({
  reducer: reducer
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);