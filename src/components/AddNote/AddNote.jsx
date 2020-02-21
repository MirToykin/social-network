import React from 'react';
import  classes from './AddNote.module.css'

const AddNote = (props) => {

  let handleClick = (e) => {
    e.preventDefault();
    props.addNote();
  }

  let handleChange = (e) => {
    props.changeNoteValue(e.target.value);
  }
  return (
    <div>
      <form>
        <div>
          <textarea className={classes.textField}
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
