import React from 'react';
import {Field, reduxForm} from "redux-form";
import {myTextarea} from "../../common/FormElems/FormElems";
import {emptyMessage, maxLength} from "../../../helpers/validators";

const maxLength500 = maxLength(500);

const NewMessageForm = props => {
  const {pristine, submitting} = props;
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Enter your message'} name={'messageText'} component={myTextarea} validate={[emptyMessage, maxLength500]}/>
      </div>
      <button disabled={pristine || submitting}>Add Message</button>
    </form>
  );
};

export default reduxForm({form: 'newMessageForm'})(NewMessageForm);
