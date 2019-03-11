import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SectionTitle from './SectionTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = {
  paper: {
    padding: 30,
  },
  gridItem: {
    display: 'flex',
    padding: 10,
  },
  initialSummary: {
    fontSize: 19,
    lineHeight: 1.5,
    marginBottom: 50,
    '& p': {
      marginBottom: 30,
    }
  },
  italics: {
    fontStyle: 'italic',
  },
};

function Background(props) {
  const { classes } = props;
  return (
    <>
      <SectionTitle text='Summary' />
      <div className={classes.initialSummary}>
        <p>You’ll notice that I don’t have a typical CV and I believe that’s a positive. Some amazing opportunities came my way and I took them, I learned a lot, and I’m now ready for the next step.</p>
        <p>For the past 6 years, whilst working in startups, I've also been learning code and building my own websites and apps. In my most recent role as Head of Product I managed a small development team and thoroughly enjoyed delving deeper and more strategically into the tech. I am now seeking to transition into programming full time. After reading my job history, you may think <span className={classes.italics}>What the? This guy is going backwards!</span> &nbsp;But you’d be wrong. </p>
        <p>Few things are more valuable in a tech company than knowing the code and the architecture of your apps. I am willing to take a (perceived) step backwards in order to achieve long term success. Ultimately I would like to be a CTO and this is another step along that path.</p>
      </div>
      <Grid container spacing={40}>
        <Grid className={classes.gridItem} item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h5" color="inherit">My Coding Journey</Typography>
            <p>Like many others, I started with HTML, CSS and PHP, where I began building websites using WordPress themes and also created my first simple web app.</p>
            <p>From there I completed a 3 month Ruby on Rails night course at CoderFactory, where I built "Feedsta" (see portfolio) which integrates with the Instagram API.</p>
            <p>More recently I've been learning React, Node and Mongo. To help me learn I created "Spot Quiz" where I can pre-enter questions and test myself regularly.</p>
            <p>Fun fact: I also built this website using React.</p>
          </Paper>
        </Grid>
        <Grid className={classes.gridItem} item xs={12} md={6} >
          <Paper className={classes.paper}>
            <Typography variant="h5" color="inherit">Career Summary</Typography>
            <p>My first startup role was at Connect2Field providing tech support for a SaaS product in the fieldworker space. We grew quickly and I was soon recruiting and leading the support team. In the evenings I studied web development.</p>
            <p>Connect2Field was then acquired by a larger US firm and I experienced all that came with that process.</p>
            <p>Following a brief stint as a freelance web developer, I joined REFFIND as Customer Support Manager. We listed on the ASX four months later and went on a rollercoaster ride. In an unlikely turn of events, I ended up in the CEO role for six months, prior to becoming Head of Product.</p>
          </Paper>
        </Grid>
        <Grid className={classes.gridItem} item xs={12} md={6} >
          <Paper className={classes.paper}>
            <Typography variant="h5" color="inherit">Programming Skills</Typography>
            <p>I have built my own apps using HTML5, CSS3, Sass, Bootstrap, JSON, PHP, Ruby on Rails, Javascript, React and Node - see Portfolio. </p>
            <p>I've hosted these apps on Heroku and AWS, and also used Photoshop and Illustrator to create assets.</p>
            <p>I have strong SQL skills (both  MySQL and PostgreSQL) having used them on a daily basis in my previous role to diagnose customer issues, find bugs and run reports.</p>
            <p>Manual software QA testing (using the UI) is also an area I've had a lot of experience in.</p>
          </Paper>
        </Grid>
        <Grid className={classes.gridItem} item xs={12} md={6} >
          <Paper className={classes.paper}>
          <Typography variant="h5" color="inherit">Additional Skills</Typography>
          <p>Although I'm seeking a developer role, that doesn't mean you can't take advantage of my other skills and experiences if required.</p>
          <p>I'm happy to share my knowledge and experience in relation to UX / UI design, feature scoping, product strategy, and general startup strategy & operations.</p>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default withStyles(styles)(Background);
