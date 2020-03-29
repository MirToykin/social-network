import React from 'react';
import {reduxForm} from "redux-form";
import {createField, myInput, myTextarea} from "../../../../common/FormElems/FormElems";
import {validURL} from "../../../../../helpers/validators";

const ProfileEditForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {createField('Full name', 'fullName', 'text', myInput)}
      {createField('About me', 'aboutMe', 'text', myTextarea)}
      {createField(null, 'lookingForAJob', 'checkbox', 'input', null, 'Looking for a job ')}
      {createField('Professional skills', 'lookingForAJobDescription', 'text', myTextarea)}
      {createField('Facebook', 'contacts.facebook', 'text', myInput, [validURL])}
      {createField('Website', 'contacts.website', 'text', myInput, [validURL])}
      {createField('Vk', 'contacts.vk', 'text', myInput, [validURL])}
      {createField('Instagram', 'contacts.instagram', 'text', myInput, [validURL])}
      {createField('Youtube', 'contacts.youtube', 'text', myInput, [validURL])}
      {createField('GitHub', 'contacts.github', 'text', myInput, [validURL])}
      {createField('MainLink', 'contacts.mainLink', 'text', myInput, [validURL])}
      <button>Save</button>
    </form>
  );
};

const ProfileEditReduxForm = reduxForm({form: 'profileEdit'})(ProfileEditForm);

export default ProfileEditReduxForm;
