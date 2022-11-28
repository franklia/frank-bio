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
              Senior Software Engineer (acting as Lead from June 2022)
            </Typography>
            <Typography variant='h6' color='inherit' align='right' className={classes.jobDate}>
              May 2021 - Present
            </Typography>
            <Typography variant='h6' color='inherit' className={classes.jobCompany}>
              BOULEVARD Global
            </Typography>
            <p className={classes.jobDescription}>
              BOULEVARD is a fintech platform which integrates with ASIC and enables unlisted companies to efficiently
              manage their shareholder register and investor relations. My role is across the full stack, consisting of
              React, Node, Typescript, MongoDB, Gitlab and Google Cloud Platform.
            </p>
            <p className={classes.jobDescription}>Responsibilities:</p>
            <ul>
              <li>Maintaining CI pipelines and coordinating deployments</li>
              <li>Code reviews, and managing/mentoring our mid level developers</li>
              <li>Database design</li>
              <li>Writing code, including unit and e2e tests</li>
              <li>Infrastructure upgrades and management e.g. Kubernetes</li>
            </ul>
            <p className={classes.jobDescription}>Achievements:</p>
            <ul>
              <li>Covering the Lead role after we were unable to recruit a new Lead due to a competitve market</li>
              <li>
                Starting from virtually a nil base, creating thorough documentation of our codebase, infrastructure and
                micro-services
              </li>
              <li>Overseeing the building of a new revenue generating feature</li>
            </ul>
          </Paper>
        </Grid>
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
              During this time I had a Covid reset where I took time to learn React Native and build a mobile app. This
              project is ongoing, and I work on it in my downtime.
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
              ELMO provides a suite of cloud HR, payroll and rostering/time & attendance software solutions. I was part
              of a team tasked with building a suite of internal tools to automate employee tasks and aggregate
              distributed information.
            </p>
            <p className={classes.jobDescription}>Responsibilities:</p>
            <ul>
              <li>Full stack development using Node, React, Typescript, SQL, Mongo, and microservices architecture</li>
              <li>Ensuring code was developed in a modular way, and backed by unit tests</li>
            </ul>
            <p className={classes.jobDescription}>Achievements:</p>
            <ul>
              <li>Helping to build a suite of internal tools to improve efficiencies across all ELMO departments</li>
              <li>Coming 2nd in ELMO's annual Hackathon, building a prototype for publising release notes</li>
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
              WooBoard (a subsidiary of REFFIND, which was the company I officially worked for) is a peer to peer
              employee recognition platform designed to assist companies improve their internal culture. In this role I
              was tasked with overseeing the rebuilding of the entire platform using new technologies.
            </p>
            <p className={classes.jobDescription}>Responsibilities:</p>
            <ul>
              <li>All product management duties associated with the rebuild</li>
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
                Coordinating the migration process to the new platform for all customers (including a database
                migration)
              </li>
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
              REFFIND was an ASX listed startup in the HR / Customer Loyalty space (now renamed to Wooboard
              Technologies). Initially the company’s only offering was an employee referral app, but then WooBoard was
              also acquired. As one of the first employees at REFFIND my role was to establish and lead the area of Tech
              Support.
            </p>
            <p className={classes.jobDescription}>Responsibilities:</p>
            <ul>
              <li>Troubleshooting customer issues and following them through to resolution</li>
              <li>Ensuring new customer accounts were set up correctly</li>
              <li>Manual software QA testing</li>
            </ul>
            <p className={classes.jobDescription}>Achievements:</p>
            <ul>
              <li>Learning SQL to diagnose support issues and produce customer reports</li>
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
