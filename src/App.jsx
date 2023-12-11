import Login from './pages/login/login';
import TaskPage from './pages/taskpage/taskpage';
import React, { useState } from 'react';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    // Simulate a login request. In a real app, you'd communicate with a server.
    print('here')
    setLoggedIn(true);
    setUsername(user);
  };
  return (
    <div>
      {loggedIn ? (
        <TaskPage />
      ) : (
        <Login onLogin={handleLogin} />
      )}
  </div>     
  )
}