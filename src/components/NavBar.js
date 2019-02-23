import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    '& button': {
      color: '#fff',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appBar: {
    display: 'block',
  },
  toolbar: {
    paddingLeft: 20,
    paddingRight: 20,
    maxWidth: 1040,
    margin: 'auto',
    padding: 0,
  },
  logo: {
    fontSize: 40,
    borderWidth: 3,
    borderColor: '#fff',
    borderStyle: 'solid',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 6,
    paddingRight: 6,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 10,
    lineHeight: 'normal',
  },
  mobileMenuLink: {
    textDecoration: 'none',
    '&:visited': {
      color: 'inherit',
    }
  }
});

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    // this.scrollToId = this.scrollToId.bind(this);

    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
    };
  }


  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = (e) => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  scrollToSummary = () => {
    const element = document.getElementById('summary');
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  scrollToJobHistory = () => {
    const element = document.getElementById('job-history');
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  scrollToTestimonials = () => {
    const element = document.getElementById('testimonials');
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  scrollToFaqs = () => {
    const element = document.getElementById('faqs');
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
  };



  render() {
    const { mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <p><a className={classes.mobileMenuLink} href='/#summary'>Summary</a></p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <p><a className={classes.mobileMenuLink} href='/#portfolio'>Portfolio</a></p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <p><a className={classes.mobileMenuLink} href='/#job-history'>Job History</a></p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <p><a className={classes.mobileMenuLink} href='/#testimonials'>Testimonials</a></p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <p><a className={classes.mobileMenuLink} href='/#faqs'>FAQs</a></p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" className={classes.logo}>FL</Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button color='inherit' size='large' onClick={this.scrollToSummary}>Summary</Button>
              <Button color='inherit' size='large' onClick={this.scrollToPortfolio}>Portfolio</Button>
              <Button color='inherit' size='large' onClick={this.scrollToJobHistory}>Job History</Button>
              <Button color='inherit' size='large' onClick={this.scrollToTestimonials}>Testimonials</Button>
              <Button color='inherit' size='large' onClick={this.scrollToFaqs}>FAQs</Button>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
