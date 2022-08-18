import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Alert, Snackbar } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import api from "../utils/api";
import Head from "next/head";
import Nav2 from "../components/Nav2";
import Footer from "../components/Footer";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://tyteda.ru/">
//         tyteda.ru
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function SignIn() {
  const [toast, setToast] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      router.push("/admin");
    }
  }, [router]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response: any = await api("/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: event.target.login.value,
          password: event.target.password.value,
        }),
      });
      localStorage.setItem("access_token", response.access_token);
      if (response.access_token !== undefined) {
        const answer = await api("/profile", {
          method: "GET"
        })
        if (answer.data.type === 'customer') {
          await router.push("/cabinet");
        } else {
          await router.push("/admin");
        }
      }
    } catch (err) {
      setToast(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Шашландия - авторизация</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav2 />
      <Container component="main" maxWidth="xs" sx={{ paddingTop: '150px' }}>
        <CssBaseline />
        <Box
          sx={{
            // marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 3,
            background: "white",
            borderRadius: "15px",
            boxShadow: 3,
          }}
        >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
          <Typography component="h1" variant="h5">
            Личный кабинет
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="login"
              label="login"
              name="login"
              autoComplete="login"
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
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Войти
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
              <p style={{  margin: '16px 0 5px 0', fontSize: '20px' }}>Еще не зарегистрированы?</p>
              <Link style={{ fontSize: '20px', color: 'red' }} href='/register'>
                  <a style={{  margin: '16px 0 16px 10px', fontSize: '20px', color: 'red' }}>Регистрация</a>
              </Link>
          </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        <Snackbar
          open={toast}
          autoHideDuration={3000}
          onClose={() => setToast(false)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <Alert
            onClose={() => setToast(false)}
            variant="filled"
            severity="error"
            sx={{ width: "100%" }}
          >
            Неверный логин или пароль
          </Alert>
        </Snackbar>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
