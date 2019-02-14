import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  // menuButton: {
  //   marginLeft: -12,
  //   marginRight: 20,
  // },
  // title: {
  //   display: 'none',
  //   [theme.breakpoints.up('sm')]: {
  //     display: 'block',
  //   },
  // },
  // search: {
  //   position: 'relative',
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: fade(theme.palette.common.white, 0.15),
  //   '&:hover': {
  //     backgroundColor: fade(theme.palette.common.white, 0.25),
  //   },
  //   marginRight: theme.spacing.unit * 2,
  //   marginLeft: 0,
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     marginLeft: theme.spacing.unit * 3,
  //     width: 'auto',
  //   },
  // },
  // searchIcon: {
  //   width: theme.spacing.unit * 9,
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // inputRoot: {
  //   color: 'inherit',
  //   width: '100%',
  // },
  // inputInput: {
  //   paddingTop: theme.spacing.unit,
  //   paddingRight: theme.spacing.unit,
  //   paddingBottom: theme.spacing.unit,
  //   paddingLeft: theme.spacing.unit * 10,
  //   transition: theme.transitions.create('width'),
  //   width: '100%',
  //   [theme.breakpoints.up('md')]: {
  //     width: 200,
  //   },
  // },
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

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

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

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    // const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // const renderMenu = (
    //   <Menu
    //     anchorEl={anchorEl}
    //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    //     open={isMenuOpen}
    //     onClose={this.handleMenuClose}
    //   >
    //     <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
    //     <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
    //   </Menu>
    // );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <p><a className={classes.mobileMenuLink} href='/#about'>About</a></p>
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
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>

            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button color='inherit' size='large' href='/#about'>About</Button>
              <Button color='inherit' size='large' href='/#job-history'>Job History</Button>
              <Button color='inherit' size='large' href='/#testimonials'>Testimonials</Button>
              <Button color='inherit' size='large' href='/#faqs'>FAQs</Button>
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

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);
