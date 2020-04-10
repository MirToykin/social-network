import React from "react";
import classes from './FormElems.module.css'
import {Field} from "redux-form";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import withStyles from "@material-ui/core/styles/withStyles";

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

// При данном варианте текстовые поля поля неконтролиремо теряют фокус
// export const renderTextField = (custom) => ({
//                                   label,
//                                   input,
//                                   meta: {touched, invalid, error},
//                                 }) => (
//   <TextField
//     fullWidth
//     label={label}
//     placeholder={label}
//     error={touched && invalid}
//     helperText={touched && error}
//     {...input}
//     {...custom}
//   />
// )

export const renderTextField = ({
                                  label,
                                  input,
                                  meta: {touched, invalid, error},
                                  classes,
                                  ...custom
                                }) => (
  <TextField
    fullWidth
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    InputProps={classes ? {classes: {input: classes.input, underline: classes.underline}} : null}
    {...input}
    {...custom}
  />
)

export const renderTextarea = (props) => renderTextField({...props, ...{multiline: true}})

export const renderAutofilledFields = (props) => {
  const styles = {
    underline: {
      "&::before": {
        borderBottom: "1px solid #90caf9"
      },
      "&:hover:not(.Mui-disabled):before": {
        borderBottom: "2px solid #90caf9"
      },
      "&::after": {
        borderBottom: "2px solid #90caf9"
      }
    },
    input: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 1000px #424242 inset",
        WebkitTextFillColor: '#fff',
        caretColor: '#fff'
      }
    }
  };
  const StyledField = withStyles(styles)(renderTextField);
  return <StyledField {...props}/>
}


export const renderCheckbox = ({input, label}) => (
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
