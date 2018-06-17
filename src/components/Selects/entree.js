import React from 'react';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { withStyles } from '@material-ui/core/styles';

import withRoot from '../../withRoot';

function styles(theme) {
  return {
    entreeStyle: {
      width: '100%'
    }
  };
}

function Entree({ classes, entree, guestEntree, changeHandler, person }) {
  return (
    <FormControl className={entreeStyle}>
      <NativeSelect
        className={classes.entreeStyle}
        name={guestEntree}
        value={entree}
        onChange={changeHandler}
        input={<Input id={guestEntree} />}
      >
        <option value="" />
        <option value={'Seasonal Vegetarian Scampi'}>
          Seasonal Vegetarian Scampi
        </option>
        <option value={'Kona Crusted Filet Tips'}>
          Kona Crusted Filet Tips
        </option>
        <option value={'Grilled Salmon'}>Grilled Salmon</option>
      </NativeSelect>
      <FormHelperText>
        Please select an entree for Guest {person}
      </FormHelperText>
    </FormControl>
  );
}

export default withRoot(withStyles(styles)(Entree));
