import React from 'react';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const entreeStyle = {
  width: '100%'
};

export default function Entree({ entree, guestEntree, changeHandler, person }) {
  return (
    <FormControl style={entreeStyle}>
      <NativeSelect
        name={guestEntree}
        value={entree}
        onChange={changeHandler}
        input={<Input id={guestEntree} />}
        style={entreeStyle}
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
