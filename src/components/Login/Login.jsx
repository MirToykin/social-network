import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Your email'} name={'email'} component={'input'}/>
      </div>
      <div>
        <Field placeholder={'Your password'} name={'password'} component={'input'}/>
      </div>
      <div>
        <Field name={'rememberMe'} component={'input'} type={'checkbox'}/> Remember me
      </div>
      <button>Submit</button>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={props.logIn}/>
    </>
  )
}

export default Login