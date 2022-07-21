import React, { useEffect, useState } from 'react';
import Login from '../pages/Login';
import Home from '../components/Home';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  if (!user) return <Login setUser={setUser} />

  return (
    <div className="App">
      <Home user={user} setUser={setUser}/>
      apples
    </div>
  );
}

export default App;
