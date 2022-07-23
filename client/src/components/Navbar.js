import React from 'react'

function Navbar({user, setUser}) {
function handleLogoutClick() {
  fetch('/logout', {method: 'DELETE'}).then(r => { if (r.ok){
    setUser(null);
  }
});
}


  return (
    <div>Navbar
      <button onClick={handleLogoutClick}> Logout</button>
    </div>
  )
}

export default Navbar