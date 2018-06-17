import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import '../font.css';

function styles(theme) {
  return {
    container: {
      'box-sizing': 'border-box',
      'font-family': 'Brandon Grotesque Regular',
      'line-height': 1.6,
      'text-transform': 'none',
      'letter-spacing': 'normal',
      'font-size': '16.8px',
      color: '#929492',
      'font-variant-ligatures': 'none'
    }
  };
}

const TemplateWrapper = ({ classes, children }) => (
  <div>
    <Helmet>
      <title>Noel &#38; Tricia Wedding Website</title>
      <meta name="description" content="Our wedding website" />
      <meta name="keywords" content="wedding, noel sagaille, tricia quartey" />
    </Helmet>
    <div className={classes.container}>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default withRoot(withStyles(styles)(TemplateWrapper));
