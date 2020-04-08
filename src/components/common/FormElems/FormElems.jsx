import React from "react";
import classes from './FormElems.module.css'
import {Field} from "redux-form";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

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

export const createField = (label, name, type, component, validators, ...rest) => {
  return (
    <div>
      <Field label={label} name={name} type={type} component={component} validate={validators} {...rest}/>
    </div>
  )
}

export const myTextarea = createFormElement('textarea', 'myTextarea');
export const myInput = createFormElement('input', 'myInput')

// -------------------for Material-UI-----------------------
export const renderTextField = (custom) => ({
                                  label,
                                  input,
                                  meta: {touched, invalid, error},
                                }) => (
  <TextField
    fullWidth
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

export const renderCheckbox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          color="primary"
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </div>
)
