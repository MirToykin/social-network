import React from 'react';
import  classes from './AddNote.module.css'

const AddNote = (props) => {
  // let elem = React.createRef();
  let handleClick = (e) => {
    props.dispatch(props.addActionCreator());
    e.preventDefault();
  };
  let handleChange = (e) => {
    props.dispatch(props.changeValueActionCreator(e.target.value))
  }
  return (
    <div>
      <form>
        <div>
          <textarea /*ref={elem}*/
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
