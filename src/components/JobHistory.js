import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SectionTitle from './SectionTitle';
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
    marginBottom: 20,
  },
  jobDescription: {
    // fontSize: 15,
    marginBottom: 20,
  },
  paper: {
    padding: 30,
    background: '#fff',
  },
};

function JobHistory(props) {
  const { classes } = props;
  const jobData = [
    {
      'id': 1,
      'company': 'WooBoard (a REFFIND company)',
      'position': 'Head of Product',
      'date': 'Jun 2017 - Dec 2018',
      'description': {
        'paragraphs': [
          {
            'id': 1,
            'content': 'WooBoard is an employee recognition platform designed to assist companies improve their internal culture. WooBoard was wholely acquired by REFFIND (who I was working for at the time) in late 2015.'
          },
          {
            'id': 2,
            'content': 'My role as Head of Product was to oversee the rebuilding of the platform using new technology. This involved a full rebrand, as well as redesigning all user interfaces. I oversaw a small development team of two throughout the process.'
          },
          {
            'id': 3,
            'content': 'Achievements included delivering the new platform in a timely fashion, as well as coordinating the migration process for all customers (including database migration). I also designed and built the new marketing website: www.wooboard.com'
          }
        ]}
    },
    {
      'id': 2,
      'company': 'REFFIND Ltd',
      'position': 'CEO',
      'date': 'Jun 2017 - Dec 2017',
      'description': {
        'paragraphs': [
          {
            'id': 1,
            'content': 'REFFIND is an ASX listed company in the HR space. Initially it\'s only offering was an employee referral app, but then also acquired WooBoard.'
          },
          {
            'id': 2,
            'content': 'After a period of great turmoil which saw a large reduction in staff numbers, I was offered the role as CEO. During my short stint in this position, my first task was to take the Board through a strategic review of company operations, and help formulate a new way forward for the business. I also assisted in reducing costs and streamlining operations. In our new lean format, I was also covering the Product Manger role on WooBoard during this period.'
          },
          {
            'id': 3,
            'content': 'A new CEO came onboard at the end of 2017 when the Board made a pivot into the Customer Loyalty space via a large strategic investment into a company called Loyyal.'
          }
        ]}
    },
    {
      'id': 3,
      'company': 'REFFIND Ltd',
      'position': 'Customer Support Manager',
      'date': 'Mar 2015 - May 2017',
      'description': {
        'paragraphs': [
          {
            'id': 1,
            'content': 'As one of the first employees at REFFIND my role was to establish and lead Customer Support. During this time I learned SQL to reduce my reliance on the development team to diagnose support issues and produce customer reports. After REFFIND acquired WooBoard in late 2015, I was also responsible for customer support services for that platform.'
          }
        ]}
    },
    {
      'id': 4,
      'company': 'Freelance Web Design',
      'position': 'Web Developer',
      'date': 'Aug 2014 - Feb 2015',
      'description': {
        'paragraphs': [
          {
            'id': 1,
            'content': 'Emotive Websites was my own freelance web design business - a short experiment where I learned a great deal, but ultimately realised that I didn\'t enjoy working solely as a web developer and wanted to go back to working in a team environment.'
          }
        ]}
    },
    {
      'id': 5,
      'company': 'Full Time Student',
      'position': 'Cert 4 Web Development - TAFE NSW',
      'date': 'Feb - Jul 2014',
      'description': {
        'paragraphs': [
          {
            'id': 1,
            'content': 'I spent six months fulltime completing the course I originally began studying at nights.'
          }
        ]}
    },
    {
      'id': 6,
      'company': 'Connect2Field',
      'position': 'Customer Support Manager',
      'date': 'Sep 2012 - Feb 2014',
      'description': {
        'paragraphs': [
          {
            'id': 1,
            'content': 'Connect2Field (now Verizon Connect) provides cloud based job management and scheduling software for businesses running a team of fieldworkers. Initially I began in a hybrid role across both sales and support but as we grew, I began focusing solely on tech support and was soon recruiting and leading a team of five. '
          },
          {
            'id': 2,
            'content': 'Responsibilities included troubleshooting customer issues, communicating with offshore devs to get bugs fixed, testing new releases, and training new staff members.'
          }
        ]}
      },
      {
        'id': 7,
        'company': 'Prior Career in Fitness Coaching',
        'position': 'Personal Trainer and Strength & Condioning Coach',
        'date': '1996 - 2012',
        'description': {
          'paragraphs': [
            {
              'id': 1,
              'content': 'My first career was in fitness coaching, where I worked with National and Olympic level athletes as well as owning and operating a boutique personal training studio.'
            }
          ]}
        }
    ];

  console.log(jobData);

  return (
    <div className={classes.root}>
      <SectionTitle text='Job History' />
      <Grid container spacing={40}>
        {jobData.map(job => (
          <Grid item xs={12} >
            <Paper className={classes.paper}>
              <Typography variant="h5" color="inherit" className={classes.jobCompany}>{job.company}</Typography>
              <Typography variant="h6" color="inherit" align='right' className={classes.jobDate}>{job.date}</Typography>
              <Typography variant="h6" color="inherit" className={classes.jobPostion}>{job.position}</Typography>
              {job.description.paragraphs.map(paragraph => (
                <p className={classes.jobDescription}>{paragraph.content}</p>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default withStyles(styles)(JobHistory);
