import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from "react-router-dom"
 
const theme = createTheme();

export default function SignIn() {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    var username = data.get('username')
    var password = data.get('password')

    postregister()
    async function postregister()
    {   
        let item={username,password}
        console.warn(item) 

        let result = await fetch("https://sutt-front-task-one.herokuapp.com/api/v1/auth/login",{
            method: 'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'*/*'
            }
        })
        result = await result.json()
        console.warn("result",result)

        if(result.success)
        {
          localStorage.setItem('token', result.responses.accessToken)
          console.log(result.responses.accessToken);
          console.log(result.responses.accessToken);
          console.log(result.responses.user);
          localStorage.setItem('name',result.responses.user.name);
          localStorage.setItem('username',result.responses.user.username);
          localStorage.setItem('email',result.responses.user.email);
          
          navigate("/profile");
        }
        else
        {
          alert(result.message)
        }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
             <h1>Welcome back</h1>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <div class="text-center mb-4">
            <img class="mb-4" src="https://cdn-icons-png.flaticon.com/512/1309/1309534.png" alt="" width="72" height="72"/>
             <h1 class="h3 mb-3 font-weight-normal">Authentication Page</h1>
        <p>Can you proove that you have the capability. Log In if you are registered in our Backend API</p>
      </div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container><center>
            <Grid item>Are you sure that you are a member? 
                <Link  to="signup">
                  Register
                </Link>
              </Grid></center>
            </Grid>
          </Box>
        </Box><br/><br/>
      </Container>
    </ThemeProvider>
  );
}