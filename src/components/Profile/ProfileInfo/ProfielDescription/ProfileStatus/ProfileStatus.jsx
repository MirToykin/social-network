import React, {useEffect, useState} from "react";
import classes from './ProfileStatus.module.css'

const ProfileStatus = ({isOwner, status, updateStatus}) => {
  const [editMode, setEditMode] = useState(false);
  const [statusValue, setStatusValue] = useState(status);

  useEffect(() => {
    setStatusValue(status)
  }, [status])

  const activateEditMode = () => {
    if (isOwner) {
      setEditMode(true);
    }
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(statusValue)
  }

  const handleChangeStatusValue = e => {
    setStatusValue(e.target.value);
  }

  return (
    <div className={classes.status}>
      {!editMode && <div>
          <span onDoubleClick={activateEditMode}>
            {statusValue || isOwner && 'Добавить статус'}
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