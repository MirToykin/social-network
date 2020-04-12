import React from 'react';
import {Field, reduxForm} from "redux-form";
import {email, required} from "../../helpers/validators";
import {
  createField,
  RenderCheckbox, RenderTextField
} from "../common/FormElems/FormElems";
import {Redirect} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => {
  return ({
    paper: {
      padding: theme.spacing(2)
    },
    input: {
      marginBottom: theme.spacing(1)
    }
  });
})

const LoginForm = ({pristine, submitting, error, handleSubmit, captchaUrl}) => {
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit}>
      {createField('Email', 'email', 'text', RenderTextField, [required, email])}
      {createField('Password', 'password', 'password', RenderTextField, [required])}
      {createField('Remember me', 'rememberMe', 'checkbox', RenderCheckbox)}
      {error && <Typography variant='body1' color='error'>
        {error}
      </Typography>}
      {captchaUrl && <>
        <div><img src={captchaUrl} alt="captcha"/></div>
        {createField('Enter symbols from image', 'captcha', 'text', RenderTextField)}</>}
      <Button type='submit' disabled={pristine || submitting}>Submit</Button>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = ({isAuth, logIn, captchaUrl}) => {
  const classes = useStyles();

  if (isAuth) {
    return <Redirect to={'/profile'}/>
  }
  return (
    <Grid container alignItems='center' justify='center'>
      <Grid item xs={12} sm={9} md={6} lg={3}>
        <Paper className={classes.paper}>
          <Typography variant='h5' align='center'>Log In</Typography>
          <LoginReduxForm onSubmit={logIn} captchaUrl={captchaUrl}/>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Login