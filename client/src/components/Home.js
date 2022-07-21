import React from 'react'

function Home({user, setUser}) {
function handleLogoutClick() {
  fetch('/logout', {method: 'DELETE'}).then(r => { if (r.ok){
    setUser(null);
  }
});
}


  return (
    <div>Home
      <button onClick={handleLogoutClick}> Logout</button>
    </div>
  )
}

export default Home