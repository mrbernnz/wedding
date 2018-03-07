import React from 'react';
import Link from 'gatsby-link';

import Divider from '../Divider';
import SingleRose from '../SingleRose';
import smallRose from '../../images/root_SmallGraphic_QPZd0e5.png';

const Header = () => (
  <div className="header">
    <div
      style={{
        margin: '0 auto',
        // maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        Tricia Quartey <SingleRose /> Noel Sagaille
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          Home
        </Link>
        {/*
          <Link to="/rsvp">RSVP</Link>
        */}
        <Link
          to="/photos"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          Photos
        </Link>
        <Link
          to="/events"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          Events
        </Link>
        <Link
          to="/travel"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          Travel
        </Link>
        <Link
          to="/registry"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          Gift Registry
        </Link>
      </h1>
    </div>
    <Divider />
  </div>
);

export default Header;
