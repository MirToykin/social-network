import React, {useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  underline: {
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  },
  input: {
    fontWeight: 300
  },
});

const ProfileStatus = ({isOwner, status, updateStatus}) => {
  const [editMode, setEditMode] = useState(false);
  const [statusValue, setStatusValue] = useState(status);
  const classes = useStyles();

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
    <div>
      {!editMode && <Tooltip title="Click to edit" disableHoverListener={!isOwner}>
        <p onClick={activateEditMode}>
            {statusValue || isOwner && 'Add status'}
        </p>
      </Tooltip>}
      {editMode && <TextField
        InputProps={{ classes }} // remove underline
        fullWidth
        autoFocus={true}
        onBlur={deactivateEditMode}
        value={statusValue}
        onChange={handleChangeStatusValue}
        className={classes.input}
      />}
    </div>
  );
}

export default ProfileStatus;