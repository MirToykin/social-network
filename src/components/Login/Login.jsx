import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = props => {
  console.log('rerender')
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'enter login'} name={'login'} component={'input'}/>
      </div>
      <div>
        <Field placeholder={'enter password'} name={'password'} component={'input'}/>
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
  const onSubmit = formData => {
    console.log(formData)
  }
  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </>
  )
}

export default Login