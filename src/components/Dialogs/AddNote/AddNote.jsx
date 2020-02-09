import React from 'react';
import  classes from './AddNote.module.css'

const AddNote = (props) => {
  debugger
  let elem = React.createRef();
  let handleClick = () => props.state.handleClick(elem);

  return (
    <div>
      <form>
        <div>
          <textarea ref={elem} className={classes.textField}></textarea>
        </div>
        <button onClick={handleClick}>{props.state.btnText}</button>
      </form>
    </div>
  )
}

export default AddNote
