import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import BillsContext from '../context/bills-context';


const SignIn = () => {
  const { state, dispatch } = useContext(BillsContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password)
      fetch('/signin',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(res => {
          if (res.error) dispatch({ type: 'UPDATE_LOGIN', loggedIn: false });
          else dispatch({ type: 'UPDATE_LOGIN', loggedIn: true, username });
        })
  }

  if (state.loggedIn === true) {
    return <Redirect to='/home' />;
  } else if (state.loggedIn === false) {
    return <Redirect to='/signup' />
  } else {
    return (
      <div>
        <h1>Please Sign In</h1>
        <div>
          <label>Username: </label>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} onKeyPress={e => e.key === 'Enter' ? handleLogin() : null}></input>
        </div>
        <div>
          <label>Password: </label>
          <input type="text" value={password} onChange={e => setPassword(e.target.value)} onKeyPress={e => e.key === 'Enter' ? handleLogin() : null}></input>
        </div>
        <button id="signin" type="submit" value="Login" onClick={() => handleLogin({ username, password })} >Submit</button>
        <br />
        <button id="signup" type="submit" value="Create Account" onClick={() => dispatch({ type: 'UPDATE_LOGIN', loggedIn: false })}>Create Account</button>

      </div >
    )
  }
}

export default SignIn;