import React from 'react';
import  classes from './AddNote.module.css'

const AddNote = (props) => {
  let elem = React.createRef();
  let handleClick = (e) => {
    debugger
    props.addPost(elem);
    e.preventDefault();
  };
  let handleChange = (e) => {
    props.handlePostValue(elem)
  }
  return (
    <div>
      <form>
        <div>
          <textarea ref={elem}
                    className={classes.textField}
                    value={props.state.postValue}
                    onChange={handleChange}
          />
        </div>
        <button onClick={handleClick}>{props.state.addPost.btnText}</button>
      </form>
    </div>
  )
}

export default AddNote
