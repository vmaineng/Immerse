import React, { useState } from 'react'

function LoginForm({setUser}) {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);


  function handleSubmit(e) {
    e.preventDefault();

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
          console.log(errors);
        }
      });
  }

  return (
    <div>
<form onSubmit={handleSubmit}>
      
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="new_username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      
      
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      
      
        <button type="submit">Log in </button>
      
      
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      
    </form>
    </div>
  )
}

export default LoginForm