import React from 'react';
import PropTypes from 'prop-types';
import '../css/App.css';
// import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { pink, blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './AppBar';
import SectionTitle from './SectionTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import frankImage from '../images/frank_depetched.jpg';
import JobHistory from './JobHistory';
import Paper from '@material-ui/core/Paper';

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: blue,
  },
  typography: {
    useNextVariants: true,
    h1: {
      fontFamily: 'Poppins',
    },
    h2: {
      fontFamily: 'Poppins',
    },
    h3: {
      fontFamily: 'Roboto',
    },
    h4: {
      fontFamily: 'Poppins',
    },
    h5: {
      fontFamily: 'Poppins',
      fontSize: 18,
    },
    h6: {
      fontFamily: 'Roboto',
      fontSize: 13,
    }
  },
  // custom: {
  //
  // }
});

const styles = {
  white: {
    background: '#fff',
    paddingTop: 30,
    paddingBottom: 90,
  },
  color: {
    background: '#f9f9ff',
    paddingTop: 30,
    paddingBottom: 90,
  },
  contentWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    maxWidth: 1040,
    margin: 'auto',
  },
  introContent: {
    minHeight: 430,
    textAlign: 'left',
    paddingLeft: 70,
    paddingTop: 60,
  },
  introHeading: {
    fontFamily: 'Poppins',
    fontSize: 50,
    paddingTop: 130
  },
  introSubHeading: {
    fontSize: 25,
    paddingTop: 30,
  },
  frank: {
    display: 'block',
    margin: 'auto',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: '#f9f9ff',
  },
};

function App(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <AppBar />
        <div>
          <div className={classes.contentWrapper}>
            <Grid container spacing={24} className={classes.introContent}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h1" color="inherit" className={classes.introHeading}>Frank Liardet</Typography>
                <Typography variant="h3" color="inherit" className={classes.introSubHeading}>Currently seeking software developer role in a dynamic start up</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <img src={frankImage} alt='Frank' className={classes.frank} />
              </Grid>
            </Grid>
          </div>
        </div>
        <div id='about' className={classes.color}>
          <div className={classes.contentWrapper}>
            <SectionTitle text='About Me' />
          </div>
        </div>
        <div id='job-history' className={classes.white}>
          <div className={classes.contentWrapper}>
            <SectionTitle text='Job History' />
            <JobHistory />
          </div>
        </div>
        <div id='portfolio' className={classes.color}>
          <div className={classes.contentWrapper}>
            <SectionTitle text='Portfolio' />
            <Grid container spacing={40} alignContent='center'>
              <Grid item xs={4}>
                <Paper className={classes.paper}>

                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>xs=6</Paper>
              </Grid>
            </Grid>
          </div>
        </div>
        <div id='testimonials' className={classes.white}>
          <div className={classes.contentWrapper}>
            <SectionTitle text='Testimonials' />
          </div>
        </div>
        <div id='faqs' className={classes.color}>
          <div className={classes.contentWrapper}>
            <SectionTitle text="FAQs" />
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
