import React from "react";
import classes from './FormElems.module.css'
import {Field} from "redux-form";

const createFormElement = (elemName, className) => ({input, type, meta: {touched, error}, ...props}) => {
  let isError = touched && error;
  return (
    <>
      {React.createElement(elemName, {
        className: classes[className] + (isError ? (' ' + classes.error) : ''),
        placeholder: props.placeholder,
        type: type,
        ...input
      })}
      {isError && <span>{error}</span>}
    </>
  )
}

export const createField = (placeholder, name, type, component, validators, label) => {
  return (
    <div>
      <Field placeholder={placeholder} name={name} type={type} component={component} validate={validators}/> {label}
    </div>
  )
}

export const myTextarea = createFormElement('textarea', 'myTextarea');
export const myInput = createFormElement('input', 'myInput')
