import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SectionTitle from './SectionTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = {
  paper: {
    padding: 30,
    marginTop: 30,
    // background: '#f9f9ff',
  },
  gridItem: {
    display: 'flex',
  },
};

function Background(props) {
  const { classes } = props;
  return (
    <>
      <SectionTitle text='Background' />
      <p>Spicy jalapeno bacon ipsum dolor amet bacon shankle flank, andouille short ribs jerky jowl drumstick. Tail boudin andouille hamburger brisket, spare ribs pork chop swine pork ham hock ground round buffalo. Meatball kevin hamburger, chuck salami tri-tip cow picanha strip steak kielbasa.</p>
      <Grid container spacing={40}>
        <Grid className={classes.gridItem} item xs={6} >
          <Paper className={classes.paper}>
            <Typography variant="h5" color="inherit" className={classes.jobCompany}>Career Summary</Typography>
            <p className={classes.jobDescription}>I have not worked commercially as a developer before, but I have a broad range of experience in tech startups. I have also used SQL extensively to manually query databases in order to assist with tech support and finding bugs.</p>
            <p>My tech career was founded in Customer Support, having been a manager in that area in two startups. </p>
          </Paper>
        </Grid>
        <Grid className={classes.gridItem} item xs={6} >
          <Paper className={classes.paper}>
            <Typography variant="h5" color="inherit" className={classes.jobCompany}>Overview Of My Skills</Typography>
            <p className={classes.jobDescription}>My coding journey began with PHP, where I tinkered with WordPress themes and also created my first (crappy) web app.</p>
            <p>From there I did a 3 month (part time) Ruby on Rails course at CoderFactory, where I built "Feedsta" (see portfolio) which integrates with the Instagram API.</p>
            <p>More recently I've been learning Node and React. To help me learn I created "Spot Quiz" where I can pre-enter questions and then test myself regularly.</p>
            <p>I have intermediate level SQL skills having used MySQL and PostgreSQL extensively </p>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default withStyles(styles)(Background);
