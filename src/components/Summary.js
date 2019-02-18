import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SectionTitle from './SectionTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = {
  paper: {
    padding: 30,
    // marginTop: 10,
    // background: '#f9f9ff',
  },
  gridItem: {
    display: 'flex',
    padding: 10,
  },
  headParagraph: {
    fontSize: 18,
    lineHeight: 1.5,
    marginBottom: 40,
    '& p': {
      marginBottom: 30,
    }
  }
};

function Background(props) {
  const { classes } = props;
  return (
    <>
      <SectionTitle text='Summary' />
      <div className={classes.headParagraph}>
        <p>I’ve worked at two startups which both experienced rapid growth, constant change, and turbulent times. During that period I’ve had a broad range of experiences in a number of different roles.</p>
        <p>I have been learning code on and off for the past 6 years, although I have never worked commercially as a developer. In my most recent role as Head of Product, I managed the development team and thoroughly enjoyed diving deeper into the tech.</p>
        <p>I have always enjoyed coding on my own projects, and it now feels like the perfect time to transition into that area fulltime.</p>
      </div>
      <Grid container spacing={40}>
        <Grid className={classes.gridItem} item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h5" color="inherit" className={classes.jobCompany}>My Coding Journey</Typography>
            <p>Like many others, I started with HTML, CSS and PHP, where I began building websites using WordPress themes and also created my first (crappy) web app.</p>
            <p>From there I did a 3 month Ruby on Rails night course at CoderFactory, where I built "Feedsta" (see portfolio) which integrates with the Instagram API.</p>
            <p>More recently I've been learning React, Node and Mongo. To help me learn I created "Spot Quiz" where I can pre-enter questions and test myself regularly.</p>
            <p>I also built this website using React.</p>
          </Paper>
        </Grid>
        <Grid className={classes.gridItem} item xs={12} md={6} >
          <Paper className={classes.paper}>
            <Typography variant="h5" color="inherit" className={classes.jobCompany}>Career Summary</Typography>
            <p>My first startup role was at Connect2Field providing tech support for a SaaS product in the fieldworker space. We grew quickly and I was soon recruiting and leading the support team. In the evenings I studied web development.</p>
            <p>Connect2Field was then acquired by a larger US firm and I experienced all that comes with that process.</p>
            <p>Following a brief stint as a freelance web developer, I joined REFFIND as Customer Support Manager. We listed on the ASX four months later and went on a turbulent rollercoaster ride. In an unlikely turn of events, I ended up in the CEO role for six months, prior to becoming Head of Product.</p>
          </Paper>
        </Grid>
        <Grid className={classes.gridItem} item xs={12} md={6} >
          <Paper className={classes.paper}>
            <Typography variant="h5" color="inherit" className={classes.jobCompany}>Programming Skills</Typography>
            <p>I have built my own apps using HTML5, CSS3, Sass, Bootstrap, JSON, PHP, Ruby on Rails, and Javascript (React and Node) - see Portfolio. </p>
            <p>I've hosted these apps on Heroku and AWS, and also used Photoshop and Illustrator to create assets.</p>
            <p>I have strong SQL skills (both  MySQL and PostgreSQL) having used them on a daily basis in my previous role to diagnose customer issues, find bugs and run reports.</p>
          </Paper>
        </Grid>
        <Grid className={classes.gridItem} item xs={12} md={6} >
          <Paper className={classes.paper}>
          <Typography variant="h5" color="inherit" className={classes.jobCompany}>Bonus Skills</Typography>
          <p>Although I'm seeking a developer role, that doesn't mean that you can't take advantage of my other skills and experiences if the need should arise.</p>
          <p>Feel free to use me as a sounding board in relation to UX / UI design, feature scoping, product strategy, general operations and team management.</p>
          </Paper>
        </Grid>

      </Grid>
    </>
  )
}

export default withStyles(styles)(Background);
