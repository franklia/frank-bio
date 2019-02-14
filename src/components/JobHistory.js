import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = {
  jobWrapper: {
    background: '#f9f9ff',
    borderRadius: 5,
  },
  jobCompany: {
    float: 'left',
  },
  jobDate: {
    float: 'right',
  },
  jobPostion: {
    clear: 'both',
  },
  jobDescription: {
    fontSize: 14,
  },
  paper: {
    padding: 10,
    background: '#f9f9ff',
  },
};

function JobHistory(props) {
  const { classes } = props;
  const jobData = [
    {
      'id': 1,
      'company': 'REFFIND Ltd',
      'position': 'Product Manager',
      'date': 'Jun 2017 - Dec 2018',
      'description': 'I ran the dev team to produce the new app'
    },
    {
      'id': 2,
      'company': 'REFFIND Ltd',
      'position': 'CEO',
      'date': 'Jun 2017 - Dec 2017',
      'description': 'I took a caretaker role as CEO.'
    },
    {
      'id': 3,
      'company': 'REFFIND Ltd',
      'position': 'Customer Support Manager',
      'date': 'Mar 2015 - May 2017',
      'description': 'I took a caretaker role as CEO.'
    },
    {
      'id': 4,
      'company': 'Full Time Student',
      'position': 'Cert 4 Web Development',
      'date': 'Feb 2014 - Jul 2014',
      'description': 'I took a caretaker role as CEO.'
    },
    {
      'id': 5,
      'company': 'Freelance Web Design',
      'position': 'Web Developer',
      'date': 'Mar 2015 - May 2017',
      'description': 'Emotive Websites was my own freelance web design business - a shortish experiment where I learned a great deal, but ultimately realised that I didn\'t enjoy working solely as a web designer. I prefer the faster pace and broader horizons of the SaaS space.'
    },
    {
      'id': 6,
      'company': 'Connect2Field',
      'position': 'Customer Support Manager',
      'date': 'Sep 2012 - Feb 2014',
      'description': 'Connect2Field (now Fleetmatics Work) provides cloud based job management and scheduling software for businesses running a team of fieldworkers.'
    }
  ];

  console.log(jobData);

  return (
    <div className={classes.root}>
      <Grid container spacing={40}>
        {jobData.map(job => (
          <Grid item xs={12} sm={12} md={6}>
            <Paper className={classes.paper}>
              <Typography variant="h5" color="inherit" className={classes.jobCompany}>{job.company}</Typography>
              <Typography variant="h6" color="inherit" align='right' className={classes.jobDate}>{job.date}</Typography>
              <Typography variant="h6" color="inherit" className={classes.jobPostion}>{job.position}</Typography>
              <p className={classes.jobDescription}>{job.description}</p>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default withStyles(styles)(JobHistory);
