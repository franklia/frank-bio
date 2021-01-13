import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SectionTitle from './SectionTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = {
  jobPosition: {
    float: 'left',
  },
  jobDate: {
    float: 'right',
    '@media (max-width: 630px)': {
      float: 'none',
      textAlign: 'left',
      clear: 'left',
    },
  },
  jobCompany: {
    clear: 'both',
    marginBottom: 20,
  },
  jobDescription: {
    marginBottom: 20,
  },
  paper: {
    padding: 30,
    background: '#fff',
  },
};

function JobHistory(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <SectionTitle text='Job History' />
      <Grid container spacing={40}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant='h5' color='inherit' className={classes.jobPosition}>
              Full Stack Developer
            </Typography>
            <Typography variant='h6' color='inherit' align='right' className={classes.jobDate}>
              Jul 2020 - Jan 2021
            </Typography>
            <Typography variant='h6' color='inherit' className={classes.jobCompany}>
              Personal Project - Building a Mobile App
            </Typography>
            <p className={classes.jobDescription}>
              Recently I had a Covid reset and took time to build a mobile app, using React Native and MongoDB Realm.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant='h5' color='inherit' className={classes.jobPosition}>
              Full Stack Developer
            </Typography>
            <Typography variant='h6' color='inherit' align='right' className={classes.jobDate}>
              Jul 2019 - Jun 2020
            </Typography>
            <Typography variant='h6' color='inherit' className={classes.jobCompany}>
              ELMO Cloud HR & Payroll
            </Typography>
            <p className={classes.jobDescription}>
              ELMO provides a comprehensive suite of cloud HR, payroll and rostering / time & attendance software
              solutions. I was part of a team tasked with building a suite of internal tools to automate employee tasks
              and aggregate distributed information.
            </p>
            <p className={classes.jobDescription}>Responsibilities:</p>
            <ul>
              <li>Full stack development using Node, React, Typescript, SQL, Mongo, and microservices architecture</li>
              <li>Ensuring code is developed in a modular way, and backed by unit tests</li>
              <li>Assisting with Product Management and BA duties when required</li>
            </ul>
            <p className={classes.jobDescription}>Achievements:</p>
            <ul>
              <li>
                Playing my part in helping to build a suite of internal tools to improve efficiencies across all ELMO
                departments
              </li>

              <li>Coming 2nd in ELMO's annual Hackathon, building a prototype for publising release notes</li>
              <li>Learning Typescript, and test writing skills</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant='h5' color='inherit' className={classes.jobPosition}>
              Product Manager
            </Typography>
            <Typography variant='h6' color='inherit' align='right' className={classes.jobDate}>
              Jun 2017 - Jun 2019
            </Typography>
            <Typography variant='h6' color='inherit' className={classes.jobCompany}>
              WooBoard (a REFFIND company)
            </Typography>
            <p className={classes.jobDescription}>
              WooBoard is an employee recognition platform designed to assist companies improve their internal culture.
              WooBoard was wholly acquired by REFFIND (who I was working for at the time) in late 2015.
            </p>
            <p className={classes.jobDescription}>Responsibilities:</p>
            <ul>
              <li>Overseeing a rebuild of the entire platform using new technology</li>
              <li>A full rebrand, including redesigning all user interfaces</li>
              <li>Managing a small development team of two</li>
              <li>
                Assisting in the architectural decision making process, in collaboration with the Lead Developer and
                contract CTO
              </li>
            </ul>
            <p className={classes.jobDescription}>Achievements:</p>
            <ul>
              <li>Delivering the new platform in a timely fashion</li>
              <li>
                Coordinating the migration process to the new platform for all customers (including database migration)
              </li>
              {/* <li>
                I also personally designed and built the new marketing website:{' '}
                <a href='https://wooboard.com' target='_blank' rel='noopener noreferrer'>
                  wooboard.com
                </a>
              </li> */}
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant='h5' color='inherit' className={classes.jobPosition}>
              Tech Support Manager
            </Typography>
            <Typography variant='h6' color='inherit' align='right' className={classes.jobDate}>
              Mar 2015 - May 2017
            </Typography>
            <Typography variant='h6' color='inherit' className={classes.jobCompany}>
              REFFIND Ltd
            </Typography>
            <p className={classes.jobDescription}>
              REFFIND is an ASX listed startup in the HR / Customer Loyalty space. Initially the company’s only offering
              was an employee referral app, but then WooBoard was also acquired. As one of the first employees at
              REFFIND my role was to establish and lead the area of Tech Support.
            </p>
            <p className={classes.jobDescription}>Responsibilities:</p>
            <ul>
              <li>Troubleshooting customer issues and following them through to resolution</li>
              <li>Using MySQL to diagnose customer issues and run reports</li>
              <li>Ensuring new customer accounts were set up correctly</li>
              <li>Manual software QA testing</li>
              <li>Supporting the WooBoard platform after REFFIND acquired it in late 2015</li>
            </ul>
            <p className={classes.jobDescription}>Achievements:</p>
            <ul>
              <li>Learning SQL to diagnose support issues and produce customer reports</li>
              <li>
                Developing an overall knowledge of our software platforms and service offerings (end to end) to such an
                extent that I became the person that my colleagues turned to when there was a problem they couldn't
                resolve
              </li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant='h5' color='inherit' className={classes.jobPosition}>
              Freelance Web Developer
            </Typography>
            <Typography variant='h6' color='inherit' align='right' className={classes.jobDate}>
              Aug 2014 - Feb 2015
            </Typography>
            <Typography variant='h6' color='inherit' className={classes.jobCompany}>
              Emotive Websites
            </Typography>
            <p className={classes.jobDescription}>
              Emotive Websites was my own freelance web design business - a short experiment where I learned a great
              deal, but ultimately realised that I didn't enjoy solely building simple WordPress websites. Hence I
              returned to the faster pace and broader horizons of the SaaS space.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant='h5' color='inherit' className={classes.jobPosition}>
              Full Time Student
            </Typography>
            <Typography variant='h6' color='inherit' align='right' className={classes.jobDate}>
              Feb - Jul 2014
            </Typography>
            <Typography variant='h6' color='inherit' className={classes.jobCompany}>
              TAFE NSW - Cert 4 in Web Based Technologies (Design & Development)
            </Typography>
            <p className={classes.jobDescription}>
              After studying in the evenings throughout 2013, I completed my qualification full-time during this period.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant='h5' color='inherit' className={classes.jobPosition}>
              Tech Support Manager
            </Typography>
            <Typography variant='h6' color='inherit' align='right' className={classes.jobDate}>
              Sep 2012 - Feb 2014
            </Typography>
            <Typography variant='h6' color='inherit' className={classes.jobCompany}>
              Connect2Field
            </Typography>
            <p className={classes.jobDescription}>
              Connect2Field (now Verizon Connect) provides job management and scheduling software for businesses running
              a team of fieldworkers. After joining the company, we grew quickly and I was soon recruiting and leading
              the support team. Connect2Field was then acquired by a larger US firm and I experienced all that came with
              that process.
            </p>
            <p className={classes.jobDescription}>Responsibilities:</p>
            <ul>
              <li>Troubleshooting customer issues and following them through to resolution</li>
              <li>Communicating with offshore developers to get bugs fixed</li>
              <li>Basic UX redesign to make our software more intuitive for customers</li>
              <li>Collecting customer feedback and passing this to the Product Manager</li>
              <li>QA testing prior to new releases</li>
            </ul>
            <p className={classes.jobDescription}>Achievements:</p>
            <ul>
              <li>Recruiting, training and managing a support team of four</li>
              <li>
                Managing the redesign of four accounting connectors (API integrated applications used to transfer data
                to MYOB, QuickBooks, Xero and Saasu)
              </li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant='h5' color='inherit' className={classes.jobPosition}>
              Prior Career in Fitness Coaching
            </Typography>
            <Typography variant='h6' color='inherit' align='right' className={classes.jobDate}>
              Prior to 2012
            </Typography>
            <Typography variant='h6' color='inherit' className={classes.jobCompany}>
              Personal Trainer and Strength & Conditioning Coach
            </Typography>
            <p className={classes.jobDescription}>
              Prior to working in Tech, I worked in the fitness industry where I trained elite athletes, and also owned
              and operated a boutique personal training studio.
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(JobHistory);
