import React, { useEffect, useState } from 'react';
import Message from './Message';
import './style.css';

export default function App() {
  const [email, setEmail] = useState('');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    console.log(`email has changed`);
  }, [email]);

  useEffect(() => {
    console.log(`isUserLoggedIn has changed to: ${isUserLoggedIn}`);
  }, [isUserLoggedIn]);

  const handleSubmit = e => {
    e.preventDefault();
    setIsUserLoggedIn(true);
  };

  const handleLogout = () => {
    setIsUserLoggedIn(false);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email : </label>
        <input type="text" placeholder="elon@spacex.com" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="submit" value="submit" />
      </form>
      <button onClick={handleLogout}>Logout</button>
      {isUserLoggedIn && <Message />}
    </div>
  );
}
