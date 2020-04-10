import React, {useState} from 'react';
import {formValueSelector, reduxForm} from "redux-form";
import {maxLength} from "../../../../helpers/validators";
import {createField} from "../../../common/FormElems/FormElems";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";
import defaultUserPhoto from "../../../../assets/imgs/user.png";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {connect} from "react-redux";

// const maxlength1000 = maxLength(1000);

const useStyles = makeStyles(theme => ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  avatar: {
    height: theme.spacing(3.5),
    width: theme.spacing(3.5)
  },
  inputContainer: {
    flexGrow: 1
  },
  avatarContainer: {
    alignSelf: 'stretch',
    display: 'flex',
    alignItems: 'flex-start'
  },
  typography: {
    cursor: 'text',
    fontWeight: 200,
    fontSize: theme.spacing(1.75)
  }
}))

const NewPostForm = ({handleSubmit,
                     pristine, submitting,
                     avatar, authUser,
                     renderTextarea, editMode,
                     setEditMode, inputValue}) => {
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item className={classes.avatarContainer}>
          <Avatar alt={authUser}
                  src={avatar ? avatar : defaultUserPhoto}
                  className={classes.avatar}
          />
        </Grid>
        <Grid item className={classes.inputContainer}>
          {editMode ?
            createField(null, 'postText', null, renderTextarea) :
            <Typography className={classes.typography} onClick={() => setEditMode(true)}>New post</Typography>
          }
        </Grid>
      </Grid>
      <div className={classes.buttonContainer}>
        {editMode && inputValue && <Button type='submit' disabled={pristine || submitting}>Add post</Button>}
      </div>
    </form>
  );
};

const NewPostReduxForm =  reduxForm({form: 'newPostForm'})(NewPostForm);
const selector = formValueSelector('newPostForm');
export default connect(state => ({inputValue: selector(state, 'postText')}))(NewPostReduxForm)
