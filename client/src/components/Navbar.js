import React from 'react'
import {Link } from 'react-router-dom';
import {Header, Menu, Button} from 'semantic-ui-react'

function Navbar({user, setUser}) {
function handleLogoutClick() {
  fetch('/logout', {method: 'DELETE'}).then(r => { if (r.ok){
    setUser(null);
  }
});
}


  return (

  
    <div>Immerse
      <Header as='h1'>Welcome {user.username}</Header>
        <Menu>
        <Menu.Item><Link to='/home'>Home</Link></Menu.Item>
      <Menu.Item ><Link to='/favorites'>Saved Deals</Link></Menu.Item>
      <Menu.Item ><Link to='/ratings'>Rate Experience</Link></Menu.Item>
      <Menu.Item ><Link to='/hotels'>Find a Hotel </Link></Menu.Item>
      <Menu.Item position='right'> <Button onClick={handleLogoutClick}> Logout</Button></Menu.Item>
      </Menu>
    </div>
  
  
  )
}

export default Navbar


// <Segment inverted textAlign='center' style={{minHeight: 20}} >
   
// <Container>
// <div>Immerse
// <Menu.Item active>
//   <Header as='h1'>Welcome {user.username}</Header>
// <Link to='/home'>Home</Link></Menu.Item>
// <Menu.Item ><Link to='/favorites'>Saved Deals</Link></Menu.Item>
// <Menu.Item ><Link to='/ratings'>Rate Experience</Link></Menu.Item>
// <Menu.Item ><Link to='/hotels'>Find a hotel</Link></Menu.Item>
// <Menu.Item position='right'> <Button onClick={handleLogoutClick}> Logout</Button></Menu.Item>
// </div>
// </Container>

// </Segment>