import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  heading: {
    fontSize: 40,
    fontFamily: 'Poppins',
    color: '#222',
    fontWeight: 700,
    position: 'relative',
    textAlign: 'left',
    display: 'inline',
      '&:before': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: -23,
        width: 10,
        height: 10,
        background: '#e91e63',
        borderRadius: 7,
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: -20,
        width: 100,
        height: 3,
        background: '#e91e63',
      }
  },
};

function SectionTitle(props) {
  const { classes } = props;
    return (
      <div>
        <h1 className={classes.heading}>{props.text}</h1>
      </div>
    )
}

SectionTitle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SectionTitle);
