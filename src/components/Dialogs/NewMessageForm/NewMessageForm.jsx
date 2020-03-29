import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, myTextarea} from "../../common/FormElems/FormElems";
import {emptyMessage, maxLength} from "../../../helpers/validators";

const maxLength500 = maxLength(500);

const NewMessageForm = props => {
  const {pristine, submitting} = props;
  return (
    <form onSubmit={props.handleSubmit}>
      {createField('Enter your message', 'messageText', null, myTextarea, [emptyMessage, maxLength500])}
      <button disabled={pristine || submitting}>Add Message</button>
    </form>
  );
};

export default reduxForm({form: 'newMessageForm'})(NewMessageForm);
