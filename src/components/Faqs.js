import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SectionTitle from './SectionTitle';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexShrink: 0,
    fontWeight: 500,
  },
  icon: {
    color: theme.palette.primary.main,
  },
});

class Faqs extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <SectionTitle text="FAQs" />
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon classes={{ root: classes.icon }} />} >
            <Typography className={classes.heading}>You appear to have chopped and changed a bit in your tech career so far. Why is that?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              This is simply the result of opportunities that presented themselves along the way. I was always drawn to the way things worked technically, and I used my two tech support roles to support myself while I gained knowledge as a programmer.<br /><br />
              As a result of immense upheaval at REFFIND, the opportunity arose to take on the CEO role and I thought it would be crazy not to take it. During that time I also covered the Product Manager role, which was what the business needed at the time (we had limited staff covering a number of roles).
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon classes={{ root: classes.icon }} />}>
            <Typography className={classes.heading}>Where do you see your career ultimately heading?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              I would like to be a CTO and I believe that commercial coding experience is ultimately the best path to achieve this.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon classes={{ root: classes.icon }} />}>
            <Typography className={classes.heading}>Why should we hire you?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Because I'll go to lengths
            </Typography>
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
