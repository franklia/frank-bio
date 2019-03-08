import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  button: {
    '@media (max-width: 959px)': {
      display: 'block',
      margin: 'auto',
    },
  },
  dialogWrapper: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  dialogContent: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 20,
    '& p': {
      color: '#000',
    },
  },
  modalTitle: {
    fontSize: 20,
    paddingLeft: 0,
    paddingRight: 0,
  },
});

class ContactMeButton extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <Button variant="contained" color="primary" size="large" className={classes.button} onClick={this.handleClickOpen}>
          Contact Me
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          classes={{ paper: classes.dialogWrapper }}
        >
          <DialogTitle id="alert-dialog-title" disableTypography={true} className={classes.modalTitle}>Contact Details</DialogTitle>
          <Divider />
          <DialogContent classes={{ root: classes.dialogContent }}>
            <DialogContentText id="alert-dialog-description">
              Email: frank.liardet@gmail.com<br/>
              LinkedIn: <a href='https://www.linkedin.com/in/frank-liardet' target='_blank'>https://www.linkedin.com/in/frank-liardet</a><br/>
              Github: <a href='https://github.com/franklia' target='_blank'>https://github.com/franklia</a>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Got it, thanks
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default withStyles(styles)(ContactMeButton);
