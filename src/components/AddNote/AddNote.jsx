import React from 'react';
import  classes from './AddNote.module.css'

const AddNote = (props) => {
  let elem = React.createRef();
  let handleClick = (e) => {
    props.add();
    e.preventDefault();
  };
  let handleChange = (e) => {
    props.change(elem)
  }
  return (
    <div>
      <form>
        <div>
          <textarea ref={elem}
                    className={classes.textField}
                    value={props.noteText}
                    onChange={handleChange}
          />
        </div>
        <button onClick={handleClick}>{props.btnText}</button>
      </form>
    </div>
  )
}

export default AddNote
