import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SectionTitle from './SectionTitle';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import smilingEmoji from '../images/smiling_emoji.png';

const styles = (theme) => ({
  root: {
    width: '100%',
  },
  question: {
    fontSize: 18,
    fontWeight: 500,
  },
  answer: {
    fontSize: 16,
    width: '100%',
    lineHeight: 1.5,
  },
  icon: {
    color: theme.palette.primary.main,
  },
  emoji: {
    position: 'relative',
    top: 4,
    left: 4,
  },
  displayBlock: {
    display: 'block',
    paddingTop: 0,
  },
});

class Faqs extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = (panel) => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <SectionTitle text='FAQs' />
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon classes={{ root: classes.icon }} />}>
            <Typography className={classes.question}>
              You appear to have chopped and changed a bit in your tech career so far. Why is that?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.answer}>
              This is merely the result of opportunities that presented themselves along the way. I was always drawn to
              the way things worked technically, and I used my previous roles to support myself while I gained startup
              experience and knowledge as a programmer.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon classes={{ root: classes.icon }} />}>
            <Typography className={classes.question}>Where do you see your career ultimately heading?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.answer}>
              I would like to be a CTO and I believe that spending a number of years working directly in the code is
              ultimately the best path to achieve this.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon classes={{ root: classes.icon }} />}>
            <Typography className={classes.question}>
              What are the top 10 replies by programmers when their code doesn't work?
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails classes={{ root: classes.displayBlock }}>
            <div className={classes.answer}>
              <ol>
                <li>That's weird...</li>
                <li>It's never done that before.</li>
                <li>It worked yesterday.</li>
                <li>How is that possible?</li>
                <li>You must have the wrong version.</li>
                <li>There has to be something funky in your data.</li>
                <li>It's probably a hardware problem.</li>
                <li>I haven't touched that module in weeks.</li>
                <li>It works on my machine.</li>
                <li>Are you messing with me?</li>
              </ol>
              <p>
                It's important to work hard, but also to have a laugh
                <img src={smilingEmoji} alt='Smiling Emoji' width='20' className={classes.emoji} />
              </p>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

Faqs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Faqs);
