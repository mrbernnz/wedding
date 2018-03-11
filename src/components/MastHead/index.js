import React from 'react';
import Link from 'gatsby-link';

import NavBar from '../NavBar';
import './index.scss';

const MastHead = () => (
  <header className="masthead">
    <div className="mastheadContainer">
      <div>
        <div>
          <div className="verticalNames">
            <div className="name">
              <h1 style={{ fontSize: '43.2px' }}>Tricia quartey</h1>
            </div>
            <div className="coupleNameSeperator">and</div>
            <div className="name">
              <h1 style={{ fontSize: '43.2px' }}>Noel Sagaille</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default MastHead;
