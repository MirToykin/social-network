import React from 'react';
import {Field, reduxForm} from "redux-form";
import {emptyPost, maxLength, required} from "../../../../helpers/validators";
import {newPostTextarea} from "../../../common/FormElems/FormElems";

const maxlength1000 = maxLength(1000);

const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field placeholder={'Enter post text'} name={'postText'} component={newPostTextarea} validate={[emptyPost, maxlength1000]}/></div>
      <button>Add post</button>
    </form>
  );
};

export default reduxForm({form: 'newPostForm'})(NewPostForm);
