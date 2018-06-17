import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import withRoot from '../../withRoot';

import SearchBar from '../Inputs/search';

const styles = theme => ({
  button: {
    fontFamily: 'Lulu Clean One Bold',
    fontSize: '1.1rem',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'block',
    margin: '0 auto',
    width: '50%'
  }
});

function CodeForm({ classes, submit, code, change, openModal }) {
  return (
    <form onSubmit={submit}>
      <SearchBar code={code} change={change} />
      <Button
        className={classes.button}
        type="submit"
        variant="raised"
        color="primary"
        onClick={openModal}
      >
        Find RSVP
      </Button>
    </form>
  );
}

export default withRoot(withStyles(styles)(CodeForm));
