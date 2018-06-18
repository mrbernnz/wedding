import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import withRoot from '../../withRoot';
import RsvpRadioGroup from '../Selects/rsvp';
import Entree from '../Selects/entree';
import GuestNumber from '../Selects/guest';

const styles = theme => ({
  root: {
    height: 180
  }
});

class Transition extends Component {
  state = {
    checked: true
  };

  handleChange = ({ target: { value } }) => {
    value === 'Yes'
      ? this.setState({ checked: true })
      : this.setState({ checked: false });
  };

  render() {
    const { changeHandler, classes, guests, invite } = this.props;
    const { checked } = this.state;

    return (
      <div>
        <RsvpRadioGroup handleChange={this.handleChange} aria-label="RSVPing" />
        <Collapse in={checked}>
          <GuestNumber guests={guests} changeHandler={changeHandler} />
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
        </Collapse>
      </div>
    );
  }
}

Transition.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Transition));
