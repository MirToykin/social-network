import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import userPhoto from "../../../assets/imgs/user.png";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import ProfileStatus from "./ProfielDescription/ProfileStatus/ProfileStatus";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    // display: 'flex',
    // flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  avatar: {
    width: '100%',
    height: 'auto',
    borderRadius: 4
  },
  contacts: {},
  subtitle2: {
    // fontWeight: 700
  },
  status: {
    fontWeight: 300
  },
  paper: {
    padding: theme.spacing(2)
  },
  divider: {
    backgroundColor: theme.palette.primary.main
  },
  tableCell: {
    borderBottom: 'none'
  }
}));

export default function ProfileInfo({userProfile, savePhoto, status, updateStatus, isOwner}) {
  const classes = useStyles();

  const createData = (field, value) => {
    if (value) return {field, value}
  }

  const getContactsList = (contacts) => {
    let isContacts = false;
    let contactsElems = [];

    for (let key in contacts) {
      if (contacts[key]) {
        contactsElems.push(
          [key,contacts[key]]
        );
        if (!isContacts) isContacts = true;
      }
    }

    contactsElems = contactsElems.map((item, i) => {
      return <>
        <Link style={{textTransform: 'capitalize'}} key={item[0]} href={item[1]}>{item[0]}</Link>
        {i !== contactsElems.length - 1 && ' | '}
      </>
    })

    return contactsElems.length ? contactsElems : null;
  }

  const fieldsData = [
    createData('About:', userProfile.aboutMe),
    createData('Looking for a job:', userProfile.lookingForAJob ? 'Yes' : 'No'),
    createData('Professional skills:', userProfile.lookingForAJobDescription),
    createData('Links', getContactsList(userProfile.contacts))
  ]

  return (
    <Grid container spacing={2} justify='center'>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <Avatar
            className={classes.avatar}
            src={userProfile.photos.large ? userProfile.photos.large : userPhoto}
            alt={userProfile.fullName}
            variant="square"
          />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <div className={classes.details}>
            <Typography component="h5" variant="h5">
              {userProfile.fullName}
            </Typography>
            <Typography className={classes.status} variant="subtitle1" color="textSecondary">
              <ProfileStatus
                updateStatus={updateStatus}
                status={status}
                isOwner={isOwner}/>
            </Typography>
            <Divider className={classes.divider}/>
            <TableContainer component='div'>
              <Table>
                <TableBody>
                  {fieldsData.map((row, i) => {
                    return row ? <TableRow key={row.field}>
                      <TableCell className={i === fieldsData.length - 1 && classes.tableCell} component="th" scope="row">{row.field}</TableCell>
                      <TableCell className={i === fieldsData.length - 1 && classes.tableCell} align='left'>{row.value}</TableCell>
                    </TableRow>: null
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}
