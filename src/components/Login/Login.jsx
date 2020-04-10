import React from 'react';
import {Field, reduxForm} from "redux-form";
import {email, required} from "../../helpers/validators";
import {
  createField,
  renderAutofilledFields,
  renderCheckbox, renderTextarea, renderTextField
} from "../common/FormElems/FormElems";
import {Redirect} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const LoginForm = ({pristine, submitting, error, handleSubmit, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField('Email', 'email', 'text', renderAutofilledFields, [required, email])}
      {createField('Password', 'password', 'password', renderAutofilledFields, [required])}
      {createField(null, 'rememberMe', 'checkbox', renderCheckbox, null, 'Remember me')}
      {error && <Typography variant='body1' color='error'>
        {error}
      </Typography>}
      {captchaUrl && <>
        <div><img src={captchaUrl} alt="captcha"/></div>
        {createField('Enter symbols from image', 'captcha', 'text', renderTextField)}</>}
      <Button type='submit' disabled={pristine || submitting}>Submit</Button>

      {/*<Grid container direction='column' spacing={2} justify='center'>*/}
      {/*  <Grid item xs={12} sm={9} md={6} lg={3}>*/}
      {/*    {createField('Email', 'email', 'email', renderAutofilledFields, [required, email])}*/}
      {/*  </Grid>*/}
      {/*  <Grid item xs={12} sm={9} md={6} lg={3}>*/}
      {/*    {createField('Password', 'password', 'password', renderAutofilledFields, [required])}*/}
      {/*  </Grid>*/}
      {/*  <Grid item xs={12} sm={9} md={6} lg={3}>*/}
      {/*    {createField('Remember me', 'rememberMe', 'checkbox', renderCheckbox)}*/}
      {/*  </Grid>*/}
      {/*  <Grid item xs={12} sm={9} md={6} lg={3}>*/}
      {/*    <Button color='primary' type="submit">Submit</Button>*/}
      {/*  </Grid>*/}
      {/*</Grid>*/}
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = ({isAuth, logIn, captchaUrl}) => {
  if (isAuth) {
    return <Redirect to={'/profile'}/>
  }
  return (
    <Grid container direction='column' spacing={2} justify='center'>
      <Grid item xs={12} sm={9} md={6} lg={3}>
        <Paper>
          <Typography variant='h5'>Log In</Typography>
          <LoginReduxForm onSubmit={logIn} captchaUrl={captchaUrl}/>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Login