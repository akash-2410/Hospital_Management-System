import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Card, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import home from '../Home/Home/Home';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    setLoginData(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    // Handle your login submission here
    console.log("Submitted:", loginData);
  };

  const signInWithGoogle = () => {
    // Implement Google sign-in functionality here
    console.log("Signing in with Google...");
  };

  return (
    <Card
      sx={{
        minWidth: 200,
        maxWidth: '100vw',
        height: '865px',
      }}
    >
      <Container fixed>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ backgroundColor: 'white', borderRadius: '5px', marginTop: '15%', marginLeft: '14px' }}>
              <Typography variant="h5" gutterBottom component="div">
                Login
              </Typography>
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  sx={{ width: '50%', m: 1 }}
                  id="standard-basic-1"
                  label="Your mail"
                  name='email'
                  value={loginData.email}
                  onChange={handleOnChange}
                  variant="standard"
                />

                <TextField
                  sx={{ width: '50%', m: 1 }}
                  id="standard-basic-2"
                  label="Your password"
                  name='password'
                  value={loginData.password}
                  onChange={handleOnChange}
                  variant="standard"
                  type="password"
                />
                <Button
                onClick={home}
                  sx={{ width: '50%', m: 1 }}
                  variant="contained"
                  type="submit"
                  style={{
                    backgroundColor: 'green',
                    color: 'white'
                  }}
                >
                  Login
                </Button>
                <Typography>-----------OR-----------</Typography>
                <GoogleIcon
                  sx={{ width: '50%', m: 1 }}
                  onClick={signInWithGoogle}
                  style={{
                    color: 'linear-gradient(to right bottom,(2, 89, 87, 0),(234, 67, 53))',
                    cursor: 'pointer'
                  }}
                />
                <br />
                <NavLink to='/registration' style={{ textDecoration: 'none' }}>
                  <Button sx={{ width: '50%', m: 1, background: '#F6FAFD' }}>For the First time ?</Button>
                </NavLink>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Card>
  );
};

export default Login;
