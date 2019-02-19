import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
// import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  modalTitle: {
    fontSize: 20,
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
      <div>
        <Button variant="contained" color="primary" size="large" onClick={this.handleClickOpen}>
          Contact Me
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" disableTypography={true} className={classes.modalTitle}>Contact Details</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Email: frank.liardet@gmail.com<br/>
              Phone: 0419 418 929<br/>
              LinkedIn: <a href='https://www.linkedin.com/in/frank-liardet-08283b5b'>https://www.linkedin.com/in/frank-liardet-08283b5b</a>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Got it, thanks
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(ContactMeButton);
