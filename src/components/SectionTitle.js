import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  heading: {
    fontSize: 40,
    fontFamily: 'Poppins',
    color: '#222',
    fontWeight: 700,
    position: 'relative',
    display: 'inline-block',
      '&:before': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: -23,
        width: 10,
        height: 10,
        background: theme.palette.primary.main,
        borderRadius: 7,
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: -20,
        width: 100,
        height: 3,
        background: theme.palette.primary.main,
      }
  },
  headingWrapper: {
    textAlign: 'left',
    marginBottom: 30,
  }
});

function SectionTitle(props) {
  const { classes } = props;
    return (
      <div className={classes.headingWrapper}>
        <h2 className={classes.heading}>{props.text}</h2>
      </div>
    )
}

SectionTitle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SectionTitle);
