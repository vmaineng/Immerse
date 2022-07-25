import React from 'react'
import {Link } from 'react-router-dom';
import {Segment, Container, Menu, Button} from 'semantic-ui-react'

function Navbar({user, setUser}) {
function handleLogoutClick() {
  fetch('/logout', {method: 'DELETE'}).then(r => { if (r.ok){
    setUser(null);
  }
});
}


  return (
    <Segment inverted textAlign='center' style={{minHeight: 20}} >
   
      <Container>
    <div>Immerse
      <Menu.Item active>
      <Link to='/home'>Home</Link></Menu.Item>
      <Menu.Item ><Link to='/favorites'>Saved Deals</Link></Menu.Item>
      <Menu.Item ><Link to='/ratings'>Rate Experience</Link></Menu.Item>
      <Menu.Item position='right'> <Button onClick={handleLogoutClick}> Logout</Button></Menu.Item>
    </div>
    </Container>
  
    </Segment>
  )
}

export default Navbar