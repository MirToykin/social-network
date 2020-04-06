import React, {Fragment} from 'react';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import Paper from "@material-ui/core/Paper/Paper";
import {makeStyles} from "@material-ui/core/styles";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Link from "@material-ui/core/Link";
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import ProfileEditReduxForm from "./EditProfileDescription/EditProfileDescription";

const useStyles = makeStyles((theme) => ({
  status: {
    fontWeight: 300
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  divider: {
    backgroundColor: theme.palette.primary.main
  },
  tableCell: {
    borderBottom: 'none'
  },
  editProfile: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dialog: {
    padding: theme.spacing(2)
  }
}));

const ProfileDescription = ({userProfile, updateStatus, status, isOwner, saveProfileDescription}) => {
  const classes = useStyles();
  const [openEdit, setOpenEdit] = React.useState(false);

  const onSaveProfileDesc = (profileData) => {
    saveProfileDescription(profileData);
    setOpenEdit(false);
  }

  const createData = (field, value) => {
    if (value) return {field, value}
  }

  const getContactsList = (contacts) => {
    let isContacts = false;
    let contactsElems = [];

    for (let key in contacts) {
      if (contacts[key]) {
        contactsElems.push(
          [key, contacts[key]]
        );
        if (!isContacts) isContacts = true;
      }
    }

    contactsElems = contactsElems.map((item, i) => {
      return <Fragment key={item[0]}>
        <Link style={{textTransform: 'capitalize'}} href={item[1]}>{item[0]}</Link>
        {i !== contactsElems.length - 1 && ' | '}
      </Fragment>
    })

    return contactsElems.length ? contactsElems : null;
  };

  const fieldsData = [
    createData('About:', userProfile.aboutMe),
    createData('Looking for a job:', userProfile.lookingForAJob ? 'Yes' : 'No'),
    createData('Professional skills:', userProfile.lookingForAJobDescription),
    createData('Links', getContactsList(userProfile.contacts))
  ];

  return (
    <Paper className={classes.paper}>
      <div>
        <Typography className={classes.editProfile} component="h5" variant="h5">
          <span>{userProfile.fullName}</span>
          {isOwner && <IconButton color="primary" component="span" onClick={() => setOpenEdit(true)}>
            <EditIcon/>
          </IconButton>}
        </Typography>
        <Typography className={classes.status} variant="subtitle1" color="textSecondary">
          <ProfileStatus
            updateStatus={updateStatus}
            status={status}
            isOwner={isOwner}/></Typography>
        <Divider className={classes.divider}/>
        <TableContainer component='div'>
          <Table>
            <TableBody>
              {fieldsData.map((row, i) => {
                return row ? <TableRow key={row.field}>
                  <TableCell className={i === fieldsData.length - 1 ? classes.tableCell : ''} component="th"
                             scope="row">{row.field}</TableCell>
                  <TableCell className={i === fieldsData.length - 1 ? classes.tableCell : ''}
                             align='left'>{row.value}</TableCell>
                </TableRow> : null
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Dialog open={openEdit} onClose={() => setOpenEdit(false)} aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.dialog}>Edit profile</DialogTitle>
        <DialogContent className={classes.dialog}>
          <ProfileEditReduxForm initialValues={userProfile} onSubmit={onSaveProfileDesc} cancel={() => setOpenEdit(false)}/>
        </DialogContent>
      </Dialog>
    </Paper>
  );
};

export default ProfileDescription;
