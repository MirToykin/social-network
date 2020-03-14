import React, {useEffect, useState} from "react";
import classes from './ProfileStatus.module.css'

const ProfileStatus = props => {
  const [editMode, setEditMode] = useState(false);
  const [statusValue, setStatusValue] = useState(props.status);

  useEffect(() => {
    setStatusValue(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(statusValue)
  }

  const handleChangeStatusValue = e => {
    setStatusValue(e.target.value);
  }

  return (
    <div className={classes.status}>
      {!editMode && <div>
          <span onDoubleClick={activateEditMode}>
            {statusValue || props.isAuthProfile && 'Добавить статус'}
          </span>
      </div>}
      {editMode && <div>
        <input
          autoFocus={true}
          onBlur={deactivateEditMode}
          value={statusValue}
          onChange={handleChangeStatusValue}
        />
      </div>}
    </div>
  );
}

export default ProfileStatus;