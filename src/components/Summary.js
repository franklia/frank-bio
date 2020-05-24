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
    },
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
        <p>
          My journey has been unique, and I believe that's a strength. My tech career began in tech support, which
          allowed me to support myself whilst building up my skill base. During that time I began learning HTML, CSS and
          PHP at nights and on the weekend, and built websites and simple web apps.
        </p>
        <p>
          I then had the opportunity to lead a project to rebuild a software platform (WooBoard) as Head of Product. It
          was an amazing experience. In that role I managed two developers and thoroughly enjoyed delving deeper and
          more strategically into the tech, including an involvement in architectural decision making.
        </p>
        <p>
          Ultimately though, I've always been drawn to the code, and I finally reached my goal of becoming a full stack
          software developer in my current role.
        </p>
      </div>
      <Grid container spacing={40}>
        <Grid className={classes.gridItem} item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant='h5' color='inherit'>
              My Coding Journey
            </Typography>
            <p>
              Like many others, I started with HTML, CSS and PHP, where I began building websites using WordPress themes
              and also created my first simple web app.
            </p>
            <p>
              From there I completed a 3 month Ruby on Rails night course at CoderFactory, where I built "Feedsta" (see
              portfolio) which integrates with the Instagram API.
            </p>
            <p>
              I have had commercial experience with MySQL and PostgreSQL in my roles at REFFIND and WooBoard where I
              used them to diagnose customer issues, find bugs and run reports.
            </p>
            <p>
              More recently in my role at ELMO, I've been working with React, Node and MongoDB. I also have a modest
              level of experience with AWS, having had exposure to it whilst working at WooBoard, and also hosting my
              own apps using Elastic Beanstalk and S3.
            </p>
          </Paper>
        </Grid>
        <Grid className={classes.gridItem} item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant='h5' color='inherit'>
              How Diversity Helps
            </Typography>
            <p>
              Over the past couple of decades, the world has pursued specialisation in the quest for success. But the
              mood is changing. It is now recognised that a diverse range of experiences can help individuals join the
              dots in a more wholistic sense to produce better outcomes.
            </p>
            <p>
              My time in tech support has given me empathy for the customer. It has also taught me how to adjust my
              language when speaking with non-technical people, to ensure understanding.
            </p>
            <p>
              My time in product management has sharpened my eye for design and UX. When this is coupled with my tech
              support background, I now have a strong sense for the types of things that might trip up users on a page,
              and how to guard against it.
            </p>
            <p>
              As a result I am a developer who can place himself squarely in the shoes of the user, which is a
              perspective that many developers struggle with.
            </p>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles(styles)(Background);
