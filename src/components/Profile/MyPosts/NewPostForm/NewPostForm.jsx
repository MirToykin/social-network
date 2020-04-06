import React from 'react';
import {reduxForm} from "redux-form";
import {maxLength} from "../../../../helpers/validators";
import {createField, renderTextarea, renderTextField} from "../../../common/FormElems/FormElems";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import defaultUserPhoto from "../../../../assets/imgs/user.png";
import Avatar from "@material-ui/core/Avatar";

const maxlength1000 = maxLength(1000);

const useStyles = makeStyles(theme => ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  avatar: {
    height: theme.spacing(4),
    width: theme.spacing(4)
  },
  input: {
    height: theme.spacing(6)
  }
}))

const NewPostForm = ({ handleSubmit, pristine, submitting, avatar, authUser }) => {
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit}>
      {/*{createField('New post', 'postText', null, renderTextarea)}*/}
      {createField('New post', 'postText', null, (properties) => (
        renderTextField({...properties, ...{multiline: true, InputProps: {
              startAdornment: (
                <InputAdornment position="start">
                  <Avatar alt={authUser}
                          src={avatar ? avatar : defaultUserPhoto}
                          className={classes.avatar}
                  />
                </InputAdornment>
              ),
            }, className: classes.input}}))
      )}
      <div className={classes.buttonContainer}>
        <Button type='submit' disabled={pristine || submitting}>Add post</Button>
      </div>
    </form>
  );
};

export default reduxForm({form: 'newPostForm'})(NewPostForm);
