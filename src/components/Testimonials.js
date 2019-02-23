import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import SectionTitle from './SectionTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import colin from '../images/colin.jpeg';
import gary from '../images/gary.jpeg';
import steve from '../images/steve.jpeg';

const styles = theme => ({
  root: {
    margin: 'auto',
  },
  gridItem: {
    display: 'flex',
  },
  paper: {
    padding: 20,
    flexGrow: 1,
    background: theme.palette.primary.main,
    '& h5': {
      color: '#fff',
      marginTop: 15,
      textAlign: 'center',
    },
    '& p': {
      color: '#fff',
      marginTop: 5,
      marginBottom: 0,
      textAlign: 'center',
    },
  },
  avatar: {
    width: 120,
    height: 120,
    marginTop: 35
  },
  letterAvatar: {
    width: 120,
    height: 120,
  },
});

function Testimonials(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <SectionTitle text='Testimonials' />
      <Grid container spacing={40} alignContent='center'>
        <Grid className={classes.gridItem} item xs={12} md={4}>
          <Paper className={classNames(classes.paper, classes.paper1)}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Avatar alt="Gary Menzel" src={gary} className={classes.avatar} classes={{ root: classes.root }} />
            <Typography variant="h5" color="inherit">Gary Menzel</Typography>
            <p>Former Lead Developer, REFFIND Ltd</p>
          </Paper>
        </Grid>
        <Grid className={classes.gridItem} item xs={12} md={4}>
          <Paper className={classNames(classes.paper, classes.paper2)}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Avatar alt="Colin Wong" src={colin} className={classes.avatar} classes={{ root: classes.root }} />
            <Typography variant="h5" color="inherit">Colin Wong</Typography>
            <p>Former CEO of WooBoard</p>
          </Paper>
        </Grid>
        <Grid className={classes.gridItem} item xs={12} md={4}>
          <Paper className={classNames(classes.paper, classes.paper3)}>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Avatar alt="Steve Orenstein" src={steve} className={classes.avatar} classes={{ root: classes.root }} />
            <Typography variant="h5" color="inherit">Steve Orenstein</Typography>
            <p>Founder of Zoom2u and Connect2Field</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Testimonials);
