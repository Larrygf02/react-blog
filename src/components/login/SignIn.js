import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/authAction';
import { useHistory } from 'react-router-dom';
import Copyright from '../commons/Copyright';
// Formik
import { Formik } from 'formik';
import * as Yup from 'yup';
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

function SignIn() {
    const classes = useStyles();
    const dispatch = useDispatch();
    //state
    //const [ nickname, saveNickname ] = useState('')
    //const [ password, savePassword ] = useState('');
    const login = (e) => {
        e.preventDefault();
        console.log('Loging ...');
        //dispatch(startLogin({ nickname, password }))
    }
    const history = useHistory();
    function redirectRegister() {
      history.push("/register")
    }
    //Schema to validate
    const SignInSchema = Yup.object().shape({
      nickname: Yup.string().required('Username is Required'),
      password: Yup.string().required('Password is required')
    })

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik 
            initialValues={{nickname: '', password: ''}}
            onSubmit={e => login(e)}
            validationSchema={SignInSchema}
          >
            {props => {
              const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset
              } = props;
              return (
                <form onSubmit={handleSubmit} className={classes.form}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="nickname"
                    label="Username"
                    name="nickname"
                    autoFocus
                    value={values.nickname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.nickname && touched.nickname}
                    helperText={(errors.nickname && touched.nickname) && errors.nickname}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.password && touched.password}
                    helperText={(errors.password && touched.password) && errors.password}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={!dirty || isSubmitting}
                  >
                    Sign In
                  </Button>
                </form>
              )
            }}
          </Formik>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link component="button" variant="body2" onClick={() => redirectRegister()}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    )
}

export default SignIn;