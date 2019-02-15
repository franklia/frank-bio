import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SectionTitle from './SectionTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';

const styles = {
  paper: {
    padding: 30,
    flexGrow: 1,
    background: '#FFA621',
    '& p, h5': {
      color: '#fff',
    },
  },
  gridItem: {
    display: 'flex',
  },
  paper1: {
    background: '#e91e63',
  },
  paper2: {
    // background: '#1B9EB7',
    background: '#2088BA',
  },
  paper3: {
    // background: '#17B4B4',
    // background: '#18BBA0',
    background: '#FFB521',
  },
};

function Portfolio(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <SectionTitle text='Portfolio' />
    <Grid container spacing={40} alignContent='center'>
      <Grid className={classes.gridItem} item xs={4}>
        <Paper className={classNames(classes.paper, classes.paper1)}>
          <Typography variant="h5" color="inherit" className={classes.jobCompany}>This Bio Website</Typography>
          <p>Spicy jalapeno bacon ipsum dolor amet bacon shankle flank, andouille short ribs jerky jowl drumstick. Tail boudin andouille hamburger brisket, spare ribs pork chop swine pork ham hock ground round buffalo.</p>
        </Paper>
      </Grid>
      <Grid className={classes.gridItem} item xs={4}>
        <Paper className={classNames(classes.paper, classes.paper2)}>

        </Paper>
      </Grid>
      <Grid className={classes.gridItem} item xs={4}>
        <Paper className={classNames(classes.paper, classes.paper3)}>

        </Paper>
      </Grid>
    </Grid>
    </div>
  )
}

export default withStyles(styles)(Portfolio);
