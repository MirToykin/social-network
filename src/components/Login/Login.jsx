import React from 'react';
import {Field, reduxForm} from "redux-form";
import {email, required} from "../../helpers/validators";
import {myInput} from "../common/FormElems/FormElems";
import {Redirect} from "react-router-dom";
import classes from './../common/FormElems/FormElems.module.css'

const LoginForm = props => {
  const {pristine, submitting, error} = props;
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Your email'} name={'email'} component={myInput} type={'email'} validate={[required, email]}/>
      </div>
      <div>
        <Field placeholder={'Your password'} name={'password'} component={myInput} type={'password'} validate={[required]}/>
      </div>
      <div>
        <Field name={'rememberMe'} component={'input'} type={'checkbox'}/> Remember me
      </div>
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