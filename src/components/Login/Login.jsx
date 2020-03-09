import React from 'react';
import {Field, reduxForm} from "redux-form";
import {email, required} from "../../helpers/validators";
import {emailInput, loginPasswordInput} from "../common/FormElems/FormElems";
import {Redirect} from "react-router-dom";

const LoginForm = props => {
  const {pristine, submitting} = props;
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Your email'} name={'email'} component={emailInput} type={'email'} validate={[required, email]}/>
      </div>
      <div>
        <Field placeholder={'Your password'} name={'password'} component={loginPasswordInput} type={'password'} validate={[required]}/>
      </div>
      <div>
        <Field name={'rememberMe'} component={'input'} type={'checkbox'}/> Remember me
      </div>
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