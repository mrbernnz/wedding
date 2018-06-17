import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import withRoot from '../../withRoot';

function styles(theme) {
  return {
    horizontalLine: {
      height: '50px',
      'background-image':
        'url(https://d3t14gfu9ehll4.cloudfront.net/themes/b6213b20-50f1-4749-b53f-924c296af2e9/root_LargeDivider.png)',
      'background-size': 'auto 50px',
      'background-position': 'center center',
      'background-repeat': 'repeat-x',
      'background-color': 'transparent'
    }
  };
}

function HorizontalLine({ classes }) {
  return <div className={classes.horizontalLine} />;
}

export default withRoot(withStyles(styles)(HorizontalLine));
