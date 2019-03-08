import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import ContactMeButton from './ContactMeButton';
import frankImage from '../images/frank_depetched.jpg';

const styles = {
  introContent: {
    minHeight: 430,
    textAlign: 'left',
    paddingLeft: 70,
    paddingTop: 60,
    '@media (max-width: 959px)': {
      paddingLeft: 0,
    },
  },
  introHeading: {
    fontFamily: 'Poppins',
    fontSize: 50,
    paddingTop: 130,
    '@media (max-width: 959px)': {
      paddingTop: 0,
      textAlign: 'center',
    },
  },
  introSubHeading: {
    fontSize: 25,
    paddingTop: 30,
    paddingBottom: 30,
    lineHeight: 1.4,
    maxWidth: 500,
    '@media (max-width: 959px)': {
      textAlign: 'center',
      margin: 'auto',
    },
  },
  frank: {
    display: 'block',
    margin: 'auto',
    '@media (max-width: 959px)': {
      marginTop: 50,
    },
  },
};

function Intro(props) {
  const { classes } = props;
  return (
    <div className={classes.contentWrapper}>
      <Grid container spacing={24} className={classes.introContent}>
        <Grid item xs={12} md={6}>
          <Typography variant="h1" color="inherit" className={classes.introHeading}>Frank Liardet</Typography>
          <Typography variant="h3" color="inherit" className={classes.introSubHeading}>Seeking a software engineering role in a dynamic company using modern technologies such as React and Node</Typography>
          <ContactMeButton />
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={frankImage} alt='Frank' className={classes.frank} />
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Intro);
