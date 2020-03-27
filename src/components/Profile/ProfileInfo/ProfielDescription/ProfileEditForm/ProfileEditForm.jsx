import React from 'react';
import {Field, reduxForm} from "redux-form";
import {myInput, myTextarea} from "../../../../common/FormElems/FormElems";

const ProfileEditForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Full name'} name={'fullName'} type={'text'} component={myInput}/>
      </div>
      <div>
        <Field placeholder={'About me'} name={'aboutMe'} type={'text'} component={myTextarea}/>
      </div>
      <div>
        Looking for a job <Field name={'lookingForAJob'} type={'checkbox'} component={'input'}/>
      </div>
      <div>
        <Field placeholder={'Professional skills'} name={'lookingForAJobDescription'} type={'text'} component={myInput}/>
      </div>
      <div>
        <Field placeholder={'Facebook'} name={'contacts.facebook'} type={'text'} component={myInput}/>
      </div>
      <div>
        <Field placeholder={'website'} name={'contacts.website'} type={'text'} component={myInput}/>
      </div>
      <div>
        <Field placeholder={'vk'} name={'contacts.vk'} type={'text'} component={myInput}/>
      </div>
      <div>
        <Field placeholder={'twitter'} name={'contacts.twitter'} type={'text'} component={myInput}/>
      </div>
      <div>
        <Field placeholder={'instagramm'} name={'contacts.instagramm'} type={'text'} component={myInput}/>
      </div>
      <div>
        <Field placeholder={'youtube'} name={'contacts.youtube'} type={'text'} component={myInput}/>
      </div>
      <div>
        <Field placeholder={'github'} name={'contacts.github'} type={'text'} component={myInput}/>
      </div>
      <div>
        <Field placeholder={'mainLink'} name={'contacts.mainLink'} type={'text'} component={myInput}/>
      </div>
      <button>Save</button>
    </form>
  );
};

const ProfileEditReduxForm = reduxForm({form: 'profileEdit'})(ProfileEditForm);

export default ProfileEditReduxForm;
