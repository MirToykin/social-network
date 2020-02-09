import React from 'react';
import  classes from './AddNote.module.css'

const AddNote = (props) => {
  let elem = React.createRef();
  let handleClick = (e) => {
    props.addPost(elem);
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <div>
          <textarea ref={elem} onChange={props.handleChange} className={classes.textField}></textarea>
        </div>
        <button onClick={handleClick}>{props.state.btnText}</button>
      </form>
    </div>
  )
}

export default AddNote
