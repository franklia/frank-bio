import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SectionTitle from './SectionTitle';

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

function Row(props) {
  const { classes } = props;
  let sectionClass;

  if (props.bgColor === 'white'){
    sectionClass = classes.white;
  } else if (props.bgColor === 'color') {
    sectionClass = classes.color;
  } else {
    sectionClass = null;
  };

  return (
    <div className={sectionClass}>
      <div className={classes.contentWrapper}>
        <SectionTitle text={props.title} />
      </div>
    </div>
  );
}

Row.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Row);
