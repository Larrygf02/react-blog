import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import Copyright from '../commons/Copyright';
import { useDispatch } from 'react-redux';
import { startNewUser } from '../../actions/authAction';
// Formik
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  //state
  /* const [ nickname, saveNickname ] = useState('')
  const [ name, saveName ] = useState('')
  const [ email, saveEmail ] = useState('')
  const [ password, savePassword ] = useState('') */

  const history = useHistory();
  function redirectLogin() {
    history.push("/login")
  }
  //Schema to validate
  const SignUpSchema = Yup.object().shape({
    nickname: Yup.string().required('Username is Required').test(
      'is-valid',
      // eslint-disable-next-line no-template-curly-in-string
      '${path} is not valid',
      async value => {
        const { data } = await axios.get(`http://localhost:5000/user/valid/${value}`)
        return data.is_valid;
      }
    ),
    name: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Email is not valid').required('Email is required'),
    password: Yup.string().required('Password is required')
  })
  const newUser = (e) => {
    e.preventDefault();
    console.log('Creando nuevo usuario..');
    //dispatch(startNewUser({ nickname, name, email, password }));
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik 
        initialValues={{nickname: '', name: '', email: '', password: ''}}
        onSubmit={values => newUser(values)}
        validationSchema={SignUpSchema}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit
            } = props;
            return (
              <form onSubmit={handleSubmit} className={classes.form}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      id="name"
                      label="Full Name"
                      name="name"
                      autoFocus
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.name && touched.name}
                      helperText={(errors.name && touched.name) && errors.name}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="nickname"
                      label="Username"
                      name="nickname"
                      autoComplete="lname"
                      value={values.nickname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.nickname && touched.nickname}
                      helperText={(errors.nickname && touched.nickname) && errors.nickname}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.email && touched.email}
                      helperText={(errors.email && touched.email) && errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
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
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link component="button" variant="body2" onClick={() => redirectLogin()}>
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
            )
          }}
        </Formik>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
