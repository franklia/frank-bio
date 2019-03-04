import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import SectionTitle from './SectionTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import quote from '../images/quote.png';
import colin from '../images/colin.jpeg';
import gary from '../images/gary.png';
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
      marginTop: 0,
      marginBottom: 15,
      fontStyle: 'italic',
    },
  },
  quote: {
    marginBottom: 15,
    marginLeft: 5,
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
  title: {
    textAlign: 'center',
    fontStyle: 'normal !important',
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
            <img src={quote} className={classes.quote} alt='Quote mark' width='25'/>
            <p>I joined Frank at WooBoard in January 2018 to help bring version 2 to market. Frank has a wide ranging understanding of software development processes and tools.</p>
            <p>His ability to understand complex logic problems in coding and data really helped me come up to speed quickly on the WooBoard product and to ultimately bring version 2 to market with a rich feature set.</p>
            <Avatar alt="Gary Menzel" src={gary} className={classes.avatar} classes={{ root: classes.root }} />
            <Typography variant="h5" color="inherit">Gary Menzel</Typography>
            <p className={classes.title}>Former Lead Developer at WooBoard</p>
          </Paper>
        </Grid>
        <Grid className={classes.gridItem} item xs={12} md={4}>
          <Paper className={classNames(classes.paper, classes.paper2)}>
            <img src={quote} className={classes.quote} alt='Quote mark' width='25'/>
            <p>Frank is the epitome of focus. He cares deeply about what he does, and was always seeking to develop his own knowledge so that he could contribute to the success of REFFIND’s software platforms.</p>
            <p>A natural leader with a calm, reasoned and decisive approach, Frank was the go-to person tying the sales, customer success and technology teams together.</p>
            <Avatar alt="Colin Wong" src={colin} className={classes.avatar} classes={{ root: classes.root }} />
            <Typography variant="h5" color="inherit">Colin Wong</Typography>
            <p className={classes.title}>Former BDM at REFFIND<br/>Former CEO of WooBoard</p>
          </Paper>
        </Grid>
        <Grid className={classes.gridItem} item xs={12} md={4}>
          <Paper className={classNames(classes.paper, classes.paper3)}>
            <img src={quote} className={classes.quote} alt='Quote mark' width='25'/>
            <p>Frank worked for me at Connect2Field in tech support. Our software had a huge amount of functionality and Frank made it his business to understand it all in great detail.</p>
            <p>He's a strong communicator, and you can trust him in front of customers. Best of all, you can leave any problem with him and know he will carry it through to completion.</p>
            <Avatar alt="Steve Orenstein" src={steve} className={classes.avatar} classes={{ root: classes.root }} />
            <Typography variant="h5" color="inherit">Steve Orenstein</Typography>
            <p className={classes.title}>Founder of Connect2Field<br/>Founder of Zoom2u</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Testimonials);
