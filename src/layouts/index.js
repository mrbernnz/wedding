import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import '../font.css';

const Container = styled.div`
  box-sizing: border-box;
  font-family: 'Brandon Grotesque Regular';
  line-height: 1.6;
  text-transform: none;
  letter-spacing: normal;
  font-size: 16.8px;
  color: #929492;
  font-variant-ligatures: none;
`;

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
