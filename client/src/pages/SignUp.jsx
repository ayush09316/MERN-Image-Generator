import * as React from 'react';
import {Typography,Grid,Box,TextField,Paper,Button,Avatar,Checkbox,CssBaseline,FormControlLabel} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link,useNavigate} from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';




const theme = createTheme();

export default function SignUp() {
  const navigate=useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    navigate('/');
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" pb={8}borderBottom={'2px solid blue'} sx={{height:{lg:'100vh',xs:'50vh'},
      mt:'2rem',mb:'2rem'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#6469ff',width:'3.5rem',height:'3.5rem' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1"  variant="h4"fontWeight={600}>
              Register
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                color='primary'
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color='primary'
                sx={{ mt: 3, mb: 2 ,bgcolor:'#6469ff'}}
              >
                SignUp
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" style={{textDecoration:'none',cursor:'pointer',color:'black'}}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to={'/register'} style={{textDecoration:'none',cursor:'pointer',color:'black'}}>
                    Already have an account? Log In
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}