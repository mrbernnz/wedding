import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import withRoot from '../../withRoot';

const styles = theme => ({
  textField: {
    marginBottom: '20px'
  }
});

function SearchBar({ classes, code, change }) {
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
      className={classes.textField}
    />
  );
}

export default withRoot(withStyles(styles)(SearchBar));
