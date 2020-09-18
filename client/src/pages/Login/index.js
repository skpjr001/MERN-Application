import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core'
import './style.css';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    
  const handleEmailChange = (e) => {
      setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
      setPassword(e.target.value);
  }
    
  
  return (
    <div className="form">
      <h1>Login</h1>
      <form className="login-fields" noValidate = {false} >
        <TextField
          variant="outlined"
          required
          fullWidth
          noValidate={false}
          value={email}
          onChange={handleEmailChange}
          type='text'
          id="Email"
          label="Email Address"
          name="Email"
          autoComplete="Email"
          autoFocus
          helperText="Email Address cannot be less than 4 characters."
        />
        <TextField
          variant="outlined"
          required
          fullWidth
          value={password}
          onChange={handlePasswordChange}
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          helperText="Password must be minimum 8 characters long. *(a-zA-Z0-9_)"
        />
          
        <Button
          //disabled={(username.length < 4 || confirmPassword !== password) ? true :false}
          type="submit"
          fullWidth
          //onClick={handleSignup}
          variant="contained"
          color="primary"
          className="submit"
        >
          Login
        </Button>
        
      </form>
    </div>
  );
}

export default Login;
