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
  portfolioLinksWhite: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 600,
  },
  portfolioLinksColor: {
    color: '#3c3c3c',
    textDecoration: 'none',
    fontWeight: 500,
  },
});

function Portfolio(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <SectionTitle text='Portfolio' />
      <Grid container spacing={40} alignContent='center'>
        <Grid className={classes.gridItem} item xs={12} md={4}>
          <Paper className={classNames(classes.paper, classes.paper1)}>
            <Typography variant="h5" color="inherit">This Website</Typography>
            <p>I took the opportunity to gain further React experience by using it to build this website. Being a simple site, it has no backend, and minimal need to maintain state. I used Material UI to assist with the layout and design, including their CSS in JS method of styling.</p>
            <p>The site is hosted on AWS using an S3 bucket.</p>
            <p>Github: <a className={classes.portfolioLinksWhite} href='https://github.com/franklia/frank-bio'>github.com/franklia/frank-bio</a></p>
          </Paper>
        </Grid>
        <Grid className={classes.gridItem} item xs={12} md={4}>
          <Paper className={classNames(classes.paper, classes.paper2)}>
            <Typography variant="h5" color="inherit">Spot Quiz</Typography>
            <p>Spot Quiz is an app I created to help myself learn. It was built using the MERN stack - Mongo, Node (Express.js), and React. The interface allows questions and answers to be pre-entered  according to a specific category, and then the user can test themselves regularly.</p>
            <p>Github frontend:<br/>
              <a className={classes.portfolioLinksWhite} href='https://github.com/franklia/spot-quiz-frontend'>github.com/franklia/spot-quiz-frontend</a><br/>
            </p>
            <p>Github API:<br/>
              <a className={classes.portfolioLinksWhite} href='https://github.com/franklia/spot-quiz-api'>github.com/franklia/spot-quiz-api</a>
            </p>
          </Paper>
        </Grid>
        <Grid className={classes.gridItem} item xs={12} md={4}>
          <Paper className={classNames(classes.paper, classes.paper3)}>
          <Typography variant="h5" color="inherit">Feedsta</Typography>
          <p>Feedsta is a Ruby on Rails app built to assist Instagram users preview new images in their feed prior to posting them.</p>
          <p>The app is currently hosted on Heroku, however it is still in Sandbox mode on the Instagram API and only available to approved users.</p>
          <p>Github: <a className={classes.portfolioLinksColor} href='https://github.com/franklia/feedsta'>github.com/franklia/feedsta</a></p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Portfolio);
