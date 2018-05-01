import React from 'react';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const guestNumber = {
  width: '100%'
};

export default function GuestNumber({ guests, changeHandler }) {
  return (
    <FormControl style={guestNumber}>
      <NativeSelect
        name="guests"
        onChange={changeHandler}
        input={<Input id="guests" />}
        style={guestNumber}
      >
        <option value="" />
        <option value={'1'}>One</option>
        <option value={'2'}>Two</option>
      </NativeSelect>
      <FormHelperText>How many are coming?</FormHelperText>
    </FormControl>
  );
}
