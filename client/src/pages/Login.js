import React, {useState} from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

function Login({setUser}) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {/* <LoginForm setUser={setUser}/>
      <SignupForm setUser={setUser}/> */}

{isLogin ? (
                <>
                  <LoginForm setUser={setUser} />
                  
                    Don't have an account? &nbsp;
                    <button color="black" onClick={() => setIsLogin(false)}>
                      Sign Up
                    </button>
                
                </>
              ) : (
                <>
                  <SignupForm setUser={setUser} />

                  
                    Already have an account? &nbsp;
                    <button color="black" onClick={() => setIsLogin(true)}>
                      Log In
                    </button>
                
                </>
              )}

    </div>
  );
}

export default Login;