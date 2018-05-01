import React from 'react';
import Button from '@material-ui/core/Button';

import SearchBar from '../SearchBar';
import styled from 'styled-components';

const button = {
  fontFamily: 'Lulu Clean One Bold',
  fontSize: '1.1rem',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'block',
  margin: '0 auto',
  width: '50%'
};

export default function CodeForm({ submit, code, change, openModal }) {
  return (
    <form onSubmit={submit}>
      <SearchBar code={code} change={change} />
      <Button
        type="submit"
        variant="raised"
        color="primary"
        style={button}
        onClick={openModal}
      >
        Find RSVP
      </Button>
    </form>
  );
}
