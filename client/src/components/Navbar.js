import React from 'react'
import {Link } from 'react-router-dom';

function Navbar({user, setUser}) {
function handleLogoutClick() {
  fetch('/logout', {method: 'DELETE'}).then(r => { if (r.ok){
    setUser(null);
  }
});
}


  return (
    <div>Navbar
      <Link to='/home'>Home</Link>
      <Link to='/favorites'>Saved Deals</Link>
      <button onClick={handleLogoutClick}> Logout</button>
    </div>
  )
}

export default Navbar