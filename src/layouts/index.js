import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { TypographyStyle } from 'react-typography';
import typography from '../util/typography';

import Footer from '../components/Footer';
import '../sass/main.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Noel & Tricia Wedding Website</title>
      <meta name="description" content="Our wedding website" />
      <meta name="keywords" content="wedding, noel sagaille, tricia quartey" />
      <TypographyStyle typography={typography} />
    </Helmet>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
