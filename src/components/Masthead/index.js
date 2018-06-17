import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../withRoot';

import styles from './style';
import smallGraphic from '../../images/root_SmallGraphic.png';

function Masthead({ classes }) {
  return (
    <header className={classes.container}>
      <h1 className={classes.name}>Tricia Quartey</h1>
      <img
        className={classes.smallGraphic}
        src={smallGraphic}
        alt="Small Graphic"
      />
      <h1 className={classes.name}>Noel Sagaille</h1>
    </header>
  );
}

export default withRoot(withStyles(styles)(Masthead));
