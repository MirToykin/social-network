import React, {useState} from 'react';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/styles";
import NewPostForm from "./NewPostForm/NewPostForm";
import Post from "./Post/Post";
import {renderTextField} from "../../common/FormElems/FormElems";

const useStyles = makeStyles(theme => ({
  paper: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2)
  }
}))

const MyPosts = ({addPost, newPostFormName, reset, posts, avatar, authUser}) => {
  const classes = useStyles();

  const handleSubmitAddPostForm = (post) => {
    addPost(post);
    reset(newPostFormName)
  }

  //=======================НАЧАЛО БЛОКА=========================================
    /*
    *Данный блок кода для избежания бага в NewPostForm
    * При создании функции для рендера (renderTextarea) непосредственно в NewPostForm
    * поле для ввода ведет себя не как ожидается: после ввода первого символа
    * курсор перескакивает в начало инпута, при перенесении state и функции renderTextarea
    * поле ввода работает корректно
     */
  const [editMode, setEditMode] = useState(false)

  const handleBlur = (e) => {
    if (!e.target.value) {
      setEditMode(false);
    }
  }

  const renderTextarea = renderTextField({
    multiline: true,
    autoFocus: true,
    onBlur: handleBlur,
    placeholder: 'New post'
  })
  //========================КОНЕЦ БЛОКА========================================

  return (
    <>
      <Paper className={classes.paper}>
        <NewPostForm onSubmit={handleSubmitAddPostForm}
                     avatar={avatar}
                     authUser={authUser}
                     editMode={editMode}
                     renderTextarea={renderTextarea}
                     setEditMode={setEditMode}
        />
      </Paper>
      {posts.map((post) => (
        <Paper className={classes.paper} key={post.id}>
          <Post message={post.text} likeNum={post.likesCount}/>
        </Paper>
      ))}
    </>
  );
};

export default MyPosts;
