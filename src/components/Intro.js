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
  },
  introHeading: {
    fontFamily: 'Poppins',
    fontSize: 50,
    paddingTop: 130
  },
  introSubHeading: {
    fontSize: 25,
    paddingTop: 30,
    paddingBottom: 30,
    lineHeight: 1.4,
  },
  frank: {
    display: 'block',
    margin: 'auto',
  },
};

function Intro(props) {
  const { classes } = props;
  return (
    <div className={classes.contentWrapper}>
      <Grid container spacing={24} className={classes.introContent}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" color="inherit" className={classes.introHeading}>Frank Liardet</Typography>
          <Typography variant="h3" color="inherit" className={classes.introSubHeading}>Seeking a software developer role in a<br/>dynamic startup using React and Node</Typography>
          <ContactMeButton />
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={frankImage} alt='Frank' className={classes.frank} />
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Intro);
