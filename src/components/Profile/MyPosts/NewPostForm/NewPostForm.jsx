import React from 'react';
import {Field, reduxForm} from "redux-form";
import {emptyPost, maxLength, required} from "../../../../helpers/validators";
import {createField, myTextarea} from "../../../common/FormElems/FormElems";

const maxlength1000 = maxLength(1000);

const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {createField('Enter post text', 'postText', null, myTextarea, [emptyPost, maxlength1000])}
      <button>Add post</button>
    </form>
  );
};

export default reduxForm({form: 'newPostForm'})(NewPostForm);
