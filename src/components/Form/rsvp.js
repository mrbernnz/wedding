import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../withRoot';

import Transition from '../Transitions';

const styles = theme => ({
  container: {
    fontFamily: 'Lulu Clean One Bold',
    color: '#929492'
  }
});

const randId = () => Math.floor(Math.random() * Math.floor(10));

function RsvpForm({
  changeHandler,
  classes,
  closeModal,
  guests,
  invite,
  submit
}) {
  return (
    <div>
      <DialogTitle id="form-dialog-title">Hi {invite.name.trim()}!</DialogTitle>
      <form className={classes.container} onSubmit={submit}>
        <DialogContent>
          <input type="hidden" name="code" value={invite.code} />
          <Transition
            guests={guests}
            changeHandler={changeHandler}
            invite={invite}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} type="button" color="primary">
            Cancel
          </Button>
          <Button onClick={closeModal} type="submit" color="primary">
            Send
          </Button>
        </DialogActions>
      </form>
    </div>
  );
}

export default withRoot(withStyles(styles)(RsvpForm));
