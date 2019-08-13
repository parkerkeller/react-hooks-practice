import React, { useState, useContext } from 'react';
import { Redirect, Link } from 'react-router-dom'
import BillsContext from '../context/bills-context'

const SignUp = () => {
  const { state, dispatch } = useContext(BillsContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    fetch('/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      .then(response => {
        return response.json()
      })
      .then(res => {
        if (res.error) {
          console.log('try again');
        } else {
          dispatch({ type: "UPDATE_LOGIN", loggedIn: true });
        }
      })
  }

  if (state.loggedIn === true) {
    return <Redirect to='/bills' />
  } else {
    return (
      <div>
        <h1>Create an account</h1>
        <h3>Account not found, please create one!</h3>
        <div>
          <label>Username: </label>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} onKeyPress={e => e.key === 'Enter' ? handleSignup() : null}></input>
        </div>
        <div>
          <label>Password: </label>
          <input type="text" value={password} onChange={e => setPassword(e.target.value)} onKeyPress={e => e.key === 'Enter' ? handleSignup() : null}></input>
        </div>
        <button><Link to="/">Go Back </Link></button>
        <br />
        <button id="signup" type="submit" value="Submit" onClick={() => handleSignup({ username, password })}>Submit</button>
      </div>
    )
  }
}

export default SignUp;