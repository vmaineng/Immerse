import React, {useState} from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { Button, Grid, Header } from 'semantic-ui-react'
// import Travel from '../images/travel.png';


function Login({setUser}) {
 const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {/* <LoginForm setUser={setUser}/>
      <SignupForm setUser={setUser}/> */}
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>

      <Header as='h2' color='teal' textAlign='center'>

  </Header>
{isLogin ? (
                <>
                
                  <LoginForm setUser={setUser} />
                  
                    Don't have an account? &nbsp;
                    <Button color="black" onClick={() => setIsLogin(false)}>
                      Sign Up
                    </Button>
                
                </>
              ) : (
                <>
                  <SignupForm setUser={setUser} />

                  
                    Already have an account? &nbsp;
                    <Button color="black" onClick={() => setIsLogin(true)}>
                      Log In
                    </Button>
                
                </>
              )}

</Grid.Column>
</Grid>
    </div>
  );
}

export default Login;