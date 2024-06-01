import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';

const Form = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (username === 'user' && password === 'password') {
        setMessage(`Welcome, ${username}!`);
        setAuthenticated(true);
      } else {
        setMessage('Invalid username or password');
        setAuthenticated(false);
      }
    };
  
    return (
      <Container maxWidth="sm">
        <div>
          <Typography variant="h4" gutterBottom>Login Page</Typography>
          <div>
          {message && !authenticated && (
            <Typography variant="body1" color="error" sx={{mb:3}}>
              {message}
            </Typography>
          )}
          </div>
          {!authenticated && (
            <form onSubmit={handleSubmit}>
              <div>
                <TextField
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div style={{marginTop:'8px'}}>
                <TextField
                  type="password"
                  label="Password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" variant="contained" color="primary" sx={{mt:2}}>
                Submit
              </Button>
            </form>
          )}
          {authenticated && <Typography variant="body1" sx={{color:"#056608"}}>Welcome, {username}!</Typography>}
        </div>
      </Container>
    );
}

export default Form;
