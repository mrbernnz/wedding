import React from 'react';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { withStyles } from '@material-ui/core/styles';

import withRoot from '../../withRoot';

function styles(theme) {
  return {
    guestNumber: {
      width: '100%'
    }
  };
}

function GuestNumber({ classes, guests, changeHandler }) {
  return (
    <FormControl className={classes.guestNumber}>
      <NativeSelect
        className={classes.guestNumber}
        name="guests"
        onChange={changeHandler}
        input={<Input id="guests" />}
      >
        <option value="" />
        <option value={'1'}>One</option>
        <option value={'2'}>Two</option>
      </NativeSelect>
      <FormHelperText>How many are coming?</FormHelperText>
    </FormControl>
  );
}

export default withRoot(withStyles(styles)(GuestNumber));
