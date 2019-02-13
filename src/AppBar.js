import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  logo: {
    fontSize: 40,
    borderWidth: 3,
    borderColor: '#fff',
    borderStyle: 'solid',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 40,
  },
  menuItem: {
    // paddingRight: 40,
    flexGrow: 1,
  },
  toolBar: {
    marginLeft: '10%',
    marginRight: '10%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 0,
  }
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" color="inherit" className={classes.logo}>FL</Typography>
          <Typography variant="h6" color="inherit" className={classes.menuItem}>About Me</Typography>
          <Typography variant="h6" color="inherit" className={classes.menuItem}>Job History</Typography>
          <Typography variant="h6" color="inherit" className={classes.menuItem}>Testimonials</Typography>
          <Typography variant="h6" color="inherit" className={classes.menuItem}>FAQs</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
