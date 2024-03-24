import React, { useState } from 'react';
import './style.css';
import logo from "../../images/logo.png";

const Login = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validate = () => {
    // Reset errors
    setNameError('');
    setPasswordError('');

    // Your validation logic here
    // ...

    // Example validation for name
    if (name === '') {
      setNameError('Please provide your name!');
      return false;
    }

    // Example validation for password
    if (password === '') {
      setPasswordError('Please provide your password');
      return false;
    }

    // Add more validation as needed...

    return true; // Return true if validation passes
  };

  const handleLogin = () => {
    if (!validate()) {
      return; // Do not proceed with login if validation fails
    }

    // Your login logic here
    // ...

    // If login is successful, call onLogin
    onLogin();
  };

  return (
    <div>
      <img
        src={logo}
        alt="logo"
        className="logo1 w-60 cursor-pointer"
      />
      <form className='loginForm'>
        <label>
          Username:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <p style={{ color: 'red' }}>{nameError}</p>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <p style={{ color: 'red' }}>{passwordError}</p>
        <button type="button" onClick={handleLogin} className='loginButton'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
