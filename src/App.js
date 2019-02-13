import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
// import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { pink, blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import AppBar2 from './AppBar2';
import SectionTitle from './SectionTitle';
// import Grid from './Grid';

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: blue,
  },
  typography: {
    useNextVariants: true,
  },
  // custom: {
  //
  // }
});

const styles = {
  white: {
    background: '#fff',
    paddingTop: 90,
    paddingBottom: 90,
  },
  color: {
    background: '#f9f9ff',
    paddingTop: 90,
    paddingBottom: 90,
  },
  contentWrapper: {
    marginLeft: '10%',
    marginRight: '10%',
  }
};

function App(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <AppBar2 />
        <div className={classes.color}>
          <div className={classes.contentWrapper}>
            <SectionTitle text='Frank Liardet' />
          </div>
        </div>
        <div id='about' className={classes.white}>
          <div className={classes.contentWrapper}>
            <SectionTitle text='About Me' />
          </div>
        </div>
        <div id='job-history' className={classes.color}>
          <div className={classes.contentWrapper}>
            <SectionTitle text='Job History' />
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
