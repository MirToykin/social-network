import React from "react";
import classes from './FormElems.module.css'

const createFormElement = (elemName, className) => ({input, type, meta: {touched, error}, ...props}) => {
  let isError = touched && error;
  return (
    <>
      {React.createElement(elemName, {
        className: classes[className] + ' ' + (isError ? classes.error : ''),
        placeholder: props.placeholder,
        type: type,
        ...input
      })}
      {isError && <span>{error}</span>}
    </>
  )
}

export const newPostTextarea = createFormElement('textarea', 'newPostTextarea');
export const newMessageTextarea = createFormElement('textarea', 'newMessageTextarea');
export const emailInput = createFormElement('input', 'emailInput')
export const loginPasswordInput = createFormElement('input', 'loginPasswordInput')