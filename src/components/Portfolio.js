import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SectionTitle from './SectionTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';

const styles = theme => ({
  paper: {
    padding: 30,
    flexGrow: 1,
    background: '#FFA621',
    '& p, h5': {
      color: '#fff',
    },
  },
  gridItem: {
    display: 'flex',
  },
  paper1: {
    background: theme.palette.primary.main,
  },
  paper2: {
    // background: '#1B9EB7',
    background: '#2088BA',
  },
  paper3: {
    // background: '#17B4B4',
    // background: '#18BBA0',
    background: '#FFB521',
    '& h5, p': {
        color: '#3c3c3c',
    }
  },
});

function Portfolio(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <SectionTitle text='Portfolio' />
    <Grid container spacing={40} alignContent='center'>
      <Grid className={classes.gridItem} item xs={4}>
        <Paper className={classNames(classes.paper, classes.paper1)}>
          <Typography variant="h5" color="inherit">This Website</Typography>
          <p>I took the opportunity to gain further React experience by using it to build this website. Being a simple site, it has no backend, and I did not need to maintain state. I used Material UI to assist with the layout and design.</p>
          <p>Github: https://github.com/franklia/frank-bio</p>
          <p>Web: </p>
        </Paper>
      </Grid>
      <Grid className={classes.gridItem} item xs={4}>
        <Paper className={classNames(classes.paper, classes.paper2)}>
          <Typography variant="h5" color="inherit">Spot Quiz</Typography>
          <p>Spot Quiz is a simple app I created to help myself learn. It was built using React, Mongo and Node (Express.js). The interface allows me to pre-enter questions and answers according to a specific category, and then I can test myself later.</p>
          <p>Github: </p>
          <p>Web: </p>
        </Paper>
      </Grid>
      <Grid className={classes.gridItem} item xs={4}>
        <Paper className={classNames(classes.paper, classes.paper3)}>
        <Typography variant="h5" color="inherit">Feedsta</Typography>
        <p>Feedsta is a Ruby on Rails app built to assist Instagram users preview new images in their feed prior to posting them. It's currently hosted on Heroku, however it is still in Sandbox mode and only available to approved users.</p>
        <p>Github: https://github.com/franklia/feedsta</p>
        </Paper>
      </Grid>
    </Grid>
    </div>
  )
}

export default withStyles(styles)(Portfolio);
