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
  jobPosition: {
    float: 'left',
  },
  jobDate: {
    float: 'right',
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
  const jobData = [
    {
      'id': 1,
      'company': 'WooBoard (a REFFIND company)',
      'position': 'Head of Product',
      'date': 'Jun 2017 - Present',
      'description': {
        'paragraphs': [
          {
            'id': 1,
            'content': 'WooBoard is an employee recognition platform designed to assist companies improve their internal culture. WooBoard was wholly acquired by REFFIND (who I was working for at the time) in late 2015.'
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
      'company': 'Freelance Web Developer',
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
      'position': 'Cert 4 Web Design & Development - TAFE NSW',
      'date': 'Feb - Jul 2014',
      'description': {
        'paragraphs': [
          {
            'id': 1,
            'content': 'After studying in the evenings throughout 2013, I completed my Cert 4 full-time during this period.'
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
            'content': 'Connect2Field (now Verizon Connect) provides cloud based job management and scheduling software for businesses running a team of fieldworkers. Initially I began in a hybrid role across both sales and support but as we grew, I began focusing solely on tech support and was soon recruiting and leading a team of four. '
          },
          {
            'id': 2,
            'content': 'Responsibilities included troubleshooting customer issues, communicating with offshore devs to get bugs fixed, testing new releases, and training new staff members.'
          }
        ]}
      },
    ];

  console.log(jobData);

  return (
    <div className={classes.root}>
      <SectionTitle text='Job History' />
      <Grid container spacing={40}>
        <Grid item xs={12} >
          <Paper className={classes.paper}>
            <Typography variant="h5" color="inherit" className={classes.jobPosition}>Product Manager</Typography>
            <Typography variant="h6" color="inherit" align='right' className={classes.jobDate}>Jun 2017 - Present</Typography>
            <Typography variant="h6" color="inherit" className={classes.jobCompany}>WooBoard (a REFFIND company)</Typography>
            <p className={classes.jobDescription}>WooBoard is an employee recognition platform designed to assist companies improve their internal culture. WooBoard was wholly acquired by REFFIND (who I was working for at the time) in late 2015.</p>
            <p className={classes.jobDescription}>Responsibilities:</p>
            <ul>
              <li>Overseeing a rebuild of the entire platform using new technology</li>
              <li>A full rebrand, including redesigning all user interfaces</li>
              <li>Managing a small development team of two</li>
              <li>Assisting in the architectural decision making process, in collaboration with the Lead Developer and contract CTO</li>
            </ul>
            <p className={classes.jobDescription}>Achievements:</p>
            <ul>
              <li>Delivering the new platform in a timely fashion</li>
              <li>Coordinating the migration process for all customers (including database migration)</li>
              <li>I also designed and built the new marketing website: <a href='https://wooboard.com' target='_blank'>wooboard.com</a></li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} >
          <Paper className={classes.paper}>
            <Typography variant="h5" color="inherit" className={classes.jobPosition}>CEO</Typography>
            <Typography variant="h6" color="inherit" align='right' className={classes.jobDate}>Jun 2017 - Dec 2017</Typography>
            <Typography variant="h6" color="inherit" className={classes.jobCompany}>REFFIND Ltd</Typography>
            <p className={classes.jobDescription}>REFFIND is an ASX listed company in the HR / Customer Loyalty space. Initially the company’s only offering was an employee referral app, but then WooBoard was also acquired.</p>
            <p className={classes.jobDescription}>After a period of great turmoil which saw a large reduction in staff numbers, I was offered the role as CEO. In our new lean format, I was also covering the Product Manager role on WooBoard during this period.</p>
            <p className={classes.jobDescription}>A new CEO came on board at the end of 2017 when the Board made a pivot into the Customer Loyalty space via a large strategic investment into a company called Loyyal. This allowed me to go back to focusing on the software itself, which is where my heart is.</p>
            <p className={classes.jobDescription}>Achievements:</p>
            <ul>
              <li>During my short stint in this position, my first task was to take the Board through a strategic review of our software offerings, and help formulate a new way forward for the business</li>
              <li>I also assisted in reducing costs and streamlining operations</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} >
          <Paper className={classes.paper}>
            <Typography variant="h5" color="inherit" className={classes.jobPosition}>Customer Support Manager</Typography>
            <Typography variant="h6" color="inherit" align='right' className={classes.jobDate}>Mar 2015 - May 2017</Typography>
            <Typography variant="h6" color="inherit" className={classes.jobCompany}>REFFIND Ltd</Typography>
            <p className={classes.jobDescription}>As one of the first employees at REFFIND my role was to establish and lead Customer Support.</p>
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
              <li>Developing an overall knowledge of our software platforms and service offerings (end to end) to such an extent that I became the person that others turned to when there was a problem they couldn't resolve</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} >
          <Paper className={classes.paper}>
            <Typography variant="h5" color="inherit" className={classes.jobPosition}>Freelance Web Developer</Typography>
            <Typography variant="h6" color="inherit" align='right' className={classes.jobDate}>Aug 2014 - Feb 2015</Typography>
            <Typography variant="h6" color="inherit" className={classes.jobCompany}>Emotive Websites</Typography>
            <p className={classes.jobDescription}>Emotive Websites was my own freelance web design business - a short experiment where I learned a great deal, but ultimately realised that I didn't enjoy working solely as a web developer. Hence I returned to the faster pace and broader horizons of the SaaS space.</p>
          </Paper>
        </Grid>
        <Grid item xs={12} >
          <Paper className={classes.paper}>
            <Typography variant="h5" color="inherit" className={classes.jobPosition}>Full Time Student</Typography>
            <Typography variant="h6" color="inherit" align='right' className={classes.jobDate}>Feb - Jul 2014</Typography>
            <Typography variant="h6" color="inherit" className={classes.jobCompany}>TAFE NSW - Cert 4 in Web Based Technologies (Design & Development)</Typography>
            <p className={classes.jobDescription}>After studying in the evenings throughout 2013, I completed my qualification full-time during this period.</p>
          </Paper>
        </Grid>
        <Grid item xs={12} >
          <Paper className={classes.paper}>
            <Typography variant="h5" color="inherit" className={classes.jobPosition}>Customer Support Manager</Typography>
            <Typography variant="h6" color="inherit" align='right' className={classes.jobDate}>Sep 2012 - Feb 2014</Typography>
            <Typography variant="h6" color="inherit" className={classes.jobCompany}>Connect2Field</Typography>
            <p className={classes.jobDescription}>Connect2Field (now Verizon Connect) provides job management and scheduling software for businesses running a team of fieldworkers.</p>
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
              <li>Managing the redesign of 4 accounting connectors (API integrated applications used to transfer data to MYOB, QuickBooks, Xero and Saasu)</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} >
          <Paper className={classes.paper}>
            <Typography variant="h5" color="inherit" className={classes.jobPosition}>Prior Career in Fitness Coaching</Typography>
            <Typography variant="h6" color="inherit" align='right' className={classes.jobDate}>1996 - 2012</Typography>
            <Typography variant="h6" color="inherit" className={classes.jobCompany}>Personal Trainer and Strength & Conditioning Coach</Typography>
            <p className={classes.jobDescription}>Prior to working in Tech, I worked in the fitness industry where I trained elite athletes, and also owned and operated a boutique personal training studio.</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(JobHistory);
