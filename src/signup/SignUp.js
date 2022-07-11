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

export default function SignUp() {

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log({
       name: data.get('name'),
       username: data.get('username'),
       email: data.get('email'),
       password: data.get('password'),
     });

    var name = data.get('name')
    var username = data.get('username')
    var email = data.get('email')
    var password = data.get('password')

    postregister()

    async function postregister()
    {   
        let item={name,username,email,password}
        console.warn(item) 

        let result = await fetch("https://sutt-front-task-one.herokuapp.com/api/v1/auth/register",{
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
            alert("Registered successfully! Navigating you to the Sign In.")
            navigate("/")
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
          <div class="text-center">
            <img class="mb-4" src="https://uxwing.com/wp-content/themes/uxwing/download/03-editing-user-action/new-registration.png" alt="" width="72" height="72"/>
             <h1 class="h3 mb-3 font-weight-normal">Registration Page</h1>
        <p>Can you proove that you have the capability. Register in our Backend Postman to join the Team</p>
      </div>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  autoComplete="user-name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
             <></>
             <></>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>  Already have an account....
                <Link to="/">Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}