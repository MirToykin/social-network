import React from 'react';
import {Field, reduxForm} from "redux-form";

const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field placeholder={'Enter post text'} name={'postText'} component={'textarea'} /></div>
      <button>Add post</button>
    </form>
  );
};

export default reduxForm({form: 'newPostForm'})(NewPostForm);
