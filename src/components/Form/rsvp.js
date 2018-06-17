import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../withRoot';

import Entree from '../Selects/entree';
import GuestNumber from '../Selects/guest';

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
  return [
    <DialogTitle id="form-dialog-title">Hi {invite.name.trim()}!</DialogTitle>,
    <form className={classes.container} onSubmit={submit}>
      <DialogContent>
        <input type="hidden" name="code" value={invite.code} />
        <input type="hidden" name="rsvp" value="yes" />
        <GuestNumber guests={guests} changeHandler={changeHandler} />
        <br />
        {invite.invited > 1 ? (
          <div>
            <Entree
              guestEntree="guestone"
              changeHandler={changeHandler}
              person="One"
            />
            <br />
            <Entree
              guestEntree="guesttwo"
              changeHandler={changeHandler}
              person="Two"
            />
          </div>
        ) : (
          <Entree
            guestEntree="guestone"
            changeHandler={changeHandler}
            person="One"
          />
        )}
        <TextField
          type="email"
          name="email"
          margin="normal"
          helperText="Please enter your email"
          fullWidth
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
  ];
}

export default withRoot(withStyles(styles)(RsvpForm));
