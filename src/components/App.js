import React from 'react';
import PropTypes from 'prop-types';
// import '../css/App.css';
// import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { pink, blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import Intro from './Intro';
import Summary from './Summary';
import Portfolio from './Portfolio';
import Faqs from './Faqs';
import Testimonials from './Testimonials';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import JobHistory from './JobHistory';

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
      fontSize: 19,
    },
    h6: {
      fontFamily: 'Roboto',
      fontSize: 16,
    },
  },
});

const styles = {
  white: {
    background: '#fff',
    paddingTop: 30,
    paddingBottom: 90,
  },
  color: {
    // background: '#f9f9ff',
    background: '#f9f9f9',
    paddingTop: 30,
    paddingBottom: 90,
  },
  contentWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    maxWidth: 1040,
    margin: 'auto',
  },
  footer: {
    background: '#e91e63',
    paddingTop: 10,
    paddingBottom: 10,
    color: '#fff',
    fontSize: 20,
  },
  footerText: {
    margin: 10,
    textAlign: 'right',
    '@media (max-width: 959px)': {
      textAlign: 'center',
    },
  },
};

function App(props) {
  const { classes } = props;
  const copyrightDate = new Date();

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <NavBar />
        <div id='intro' className={classes.contentWrapper}>
          <Intro />
        </div>
        <div id='summary' className={classes.color}>
          <div className={classes.contentWrapper}>
            <Summary />
          </div>
        </div>
        <div id='job-history' className={classes.white}>
          <div className={classes.contentWrapper}>
            <JobHistory />
          </div>
        </div>
        <div id='testimonials' className={classes.color}>
          <div className={classes.contentWrapper}>
            <Testimonials />
          </div>
        </div>
        <div id='faqs' className={classes.white}>
          <div className={classes.contentWrapper}>
            <Faqs />
          </div>
        </div>
        <div id='portfolio' className={classes.color}>
          <div className={classes.contentWrapper}>
            <Portfolio />
          </div>
        </div>
        <div className={classes.footer}>
          <div className={classes.contentWrapper}>
              <p className={classes.footerText}>&copy; Frank Liardet {copyrightDate.getFullYear()}</p>
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
