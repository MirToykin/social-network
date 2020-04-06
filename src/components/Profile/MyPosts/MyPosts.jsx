import React from 'react';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/styles";
import NewPostForm from "./NewPostForm/NewPostForm";
import Post from "./Post/Post";

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

  return (
    <>
      <Paper className={classes.paper}>
        <NewPostForm onSubmit={handleSubmitAddPostForm} avatar={avatar} authUser={authUser}/>
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
