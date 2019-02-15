import React from 'react';
import PropTypes from 'prop-types';
import '../css/App.css';
// import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { pink, blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import AppBar from './AppBar';
import Intro from './Intro';
import Background from './Background';
import Portfolio from './Portfolio';
import SectionTitle from './SectionTitle';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import JobHistory from './JobHistory';
// import Paper from '@material-ui/core/Paper';

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
};

function App(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <AppBar />
        <div id='job-history' className={classes.contentWrapper}>
          <Intro />
        </div>
        <div id='about' className={classes.color}>
          <div className={classes.contentWrapper}>
            <Background />
          </div>
        </div>
        <div id='job-history' className={classes.white}>
          <div className={classes.contentWrapper}>
            <JobHistory />
          </div>
        </div>
        <div id='portfolio' className={classes.color}>
          <div className={classes.contentWrapper}>
            <Portfolio />
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
