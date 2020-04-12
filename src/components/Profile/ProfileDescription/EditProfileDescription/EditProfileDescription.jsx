import React from 'react';
import {reduxForm} from "redux-form";
import {
  createField,
  RenderTextField,
  RenderCheckbox, RenderTextarea
} from "../../../common/FormElems/FormElems";
import {validURL, required} from "../../../../helpers/validators";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  }
}))

const EditProfileDescription = ({ handleSubmit, pristine, submitting, cancel }) => {
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {createField('Full name', 'fullName', 'text', RenderTextField, [required])}
        </Grid>
        <Grid item xs={12}>
          {createField('About me', 'aboutMe', 'text', RenderTextarea)}
        </Grid>
        <Grid item xs={12}>
          {createField('Looking for a job', 'lookingForAJob', 'checkbox', RenderCheckbox, null, 'Looking for a job ')}
        </Grid>
        <Grid item xs={12}>
          {createField('Professional skills', 'lookingForAJobDescription', 'text', RenderTextarea)}
        </Grid>
        {/*{['Facebook', 'Website', 'Vk', 'Instagram', 'Youtube', 'GitHub', 'MainLink'].map(contact => {*/}
        {/*  return createField(contact, `contacts.${contact}`, 'text', renderTextField, [validURL])*/}
        {/*}).map(field => {*/}
        {/*  return <Grid item xs={6}>{field}</Grid>*/}
        {/*})}   При динамическом выводе в поля не передаются инициализационные значения*/}
        <Grid item xs={6}>
          {createField('Facebook', 'contacts.facebook', 'text', RenderTextField, [validURL])}
        </Grid>
        <Grid item xs={6}>
          {createField('Website', 'contacts.website', 'text', RenderTextField, [validURL])}
        </Grid>
        <Grid item xs={6}>
          {createField('Vk', 'contacts.vk', 'text', RenderTextField, [validURL])}
        </Grid>
        <Grid item xs={6}>
          {createField('Instagram', 'contacts.instagram', 'text', RenderTextField, [validURL])}
        </Grid>
        <Grid item xs={6}>
          {createField('Youtube', 'contacts.youtube', 'text', RenderTextField, [validURL])}
        </Grid>
        <Grid item xs={6}>
          {createField('GitHub', 'contacts.github', 'text', RenderTextField, [validURL])}
        </Grid>
        <Grid item xs={6}>
          {createField('MainLink', 'contacts.mainLink', 'text', RenderTextField, [validURL])}
        </Grid>
        <Grid item xs={6} className={classes.buttons}>
          <Button color='primary' type="submit">Save</Button>
          <Button color='primary' type="button" onClick={cancel}>Cancel</Button>
        </Grid>
      </Grid>
    </form>
  );
};

const ProfileEditReduxForm = reduxForm({form: 'profileEdit'})(EditProfileDescription);

export default ProfileEditReduxForm;
