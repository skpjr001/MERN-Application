import React, { useState } from 'react';
import { TextField, Button} from '@material-ui/core'
import './style.css';


function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
    
  const handleEmailChange = (e) => {
      setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
      setPassword(e.target.value);
  }
    
  const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
  }

  
  return (
    <div className="form">
      <h1>Register</h1>
      <form className="register-fields" noValidate = {false} >
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
          
        <TextField
          variant="outlined"
          required
          fullWidth
          //error={confirmPassword !== password ? true :false}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          helperText="Please confirm your password."
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
          Sign Up
        </Button>
        
      </form>
    </div>
  );
}

export default Register;
