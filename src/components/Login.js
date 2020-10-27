import React, { useState } from 'react';
import './Login.styles.scss'
import axios from 'axios';
import { setUserSession } from '../Utils/Common';

function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }

  return (
    <form onSubmit={handleLogin} >
      <div className='container'>
        <h4>Login Form</h4>
          <label for="uname"><b>Username</b></label><br/>
          <input type="text" {...username} autoComplete="new-username"  required /><br/>
          <label for="psw"><b>Password</b></label><br/>
          <input type="password" {...password} autoComplete="new-password" required /><br/>
          {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
          <button type='submit' value={loading ? 'Loading...' : 'Login'} disabled={loading} >Login</button>
      
      </div>
    </form>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;