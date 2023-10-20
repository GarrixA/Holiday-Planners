import React, { useState } from 'react';
import './signup.css'

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
    } else {
      setMessage('Thank you for signing up!');
      console.log('Username:', username);
      console.log('Password:', password);
      setUsername('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div className="container">
      <div className="signups">
        <h1 >Sign Up</h1>
        <form onSubmit={handleSignup}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <div className="message">{message}</div>
      </div>
    </div>
  );
}

export default Signup;
