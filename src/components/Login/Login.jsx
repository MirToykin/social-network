import React from 'react';
import {Field, reduxForm} from "redux-form";
import {email, required} from "../../helpers/validators";
import {createField, myInput} from "../common/FormElems/FormElems";
import {Redirect} from "react-router-dom";
import classes from './../common/FormElems/FormElems.module.css'

const LoginForm = ({pristine, submitting, error, handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}>
      {createField('Your email', 'email', 'email', myInput, [required, email])}
      {createField('Your password', 'password', 'password', myInput, [required])}
      {createField(null, 'rememberMe', 'checkbox', 'input', null, 'Remember me ')}
      {error && <div className={classes.formSummaryError}>
        {error}
      </div>}
      <button disabled={pristine || submitting}>Submit</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  }
  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={props.logIn}/>
    </>
  )
}

export default Login