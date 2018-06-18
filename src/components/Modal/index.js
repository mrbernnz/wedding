import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../withRoot';

import RsvpForm from '../Form/rsvp';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 5.5
  }
});

class RsvpModal extends Component {
  state = {
    guests: ''
  };

  submitRsvpHandler = e => {
    e.preventDefault();

    const url =
      'https://91b8kz682h.execute-api.us-east-1.amazonaws.com/dev/rsvps';

    const res = fetch(url, { method: 'POST', body: new FormData(e.target) });
    this.props.closeModal();
  };

  render() {
    const {
      classes,
      invitee,
      modalIsOpen,
      changeHandler,
      openModal,
      closeModal
    } = this.props;

    const { guests } = this.state;

    return (
      <Dialog
        open={modalIsOpen}
        onClose={closeModal}
        aria-labelledby="form-dialog-title"
      >
        {invitee.length !== undefined ? (
          invitee.map(invite => (
            <RsvpForm
              key={invite.code}
              guests={guests}
              invite={invite}
              changeHandler={changeHandler}
              submit={this.submitRsvpHandler}
              closeModal={closeModal}
            />
          ))
        ) : (
          <CircularProgress className={classes.progress} />
        )}
      </Dialog>
    );
  }
}

export default withRoot(withStyles(styles)(RsvpModal));
