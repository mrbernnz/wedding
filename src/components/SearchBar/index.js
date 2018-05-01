import React from 'react';
import TextField from '@material-ui/core/TextField';

const textField = {
  marginBottom: '20px'
};

export default function SearchBar({ code, change }) {
  return (
    <TextField
      id="invitationCode"
      type="search"
      name="code"
      value={code}
      autoFocus={true}
      fullWidth={true}
      label="Enter your code"
      margin="normal"
      pattern="\w.{4,4}"
      onChange={change}
      style={textField}
    />
  );
}
