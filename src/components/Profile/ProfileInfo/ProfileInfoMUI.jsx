import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
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

export default function ProfileInfo({userProfile, savePhoto, status}) {
  const classes = useStyles();

  const createData = (field, value) => {
    return {field, value}
  }

  const fieldsData = [
    createData('About:', userProfile.aboutMe),
    createData('Looking for a job:', userProfile.lookingForAJob ? 'Yes' : 'No'),
    createData('Professional skills:', userProfile.lookingForAJobDescription)
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
              {status}
            </Typography>
            <Divider className={classes.divider}/>
            <TableContainer component='div'>
              <Table>
                <TableBody>
                  {fieldsData.map((row, i) => (
                    <TableRow key={row.field}>
                      <TableCell className={i === fieldsData.length - 1 && classes.tableCell} component="th" scope="row">{row.field}</TableCell>
                      <TableCell className={i === fieldsData.length - 1 && classes.tableCell} align='left'>{row.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className={classes.contacts}>
              <Typography></Typography>
            </div>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}