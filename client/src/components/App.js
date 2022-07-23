import React, { useEffect, useState } from "react";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import Experience from "../pages/Experience";
import Favorite from "../pages/Favorite";
import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      apples
      <Routes>
        <Route path='/home' element={<Experience />} />
        <Route path='/favorites' element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
