import React from 'react';
import Link from 'gatsby-link';

export default () => (
  <div styles={{ marginBottom: '30px' }}>
    <div>
      <div>
        <div className="navBarContainer">
          <div className="navBarList">
            <nav className="nav">
              <ul className="list">
                <li>
                  <Link
                    to="/"
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/rsvp"
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    Rsvp
                  </Link>
                </li>
                <li>
                  <Link
                    to="/photos"
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    Photos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/travel"
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    Travel
                  </Link>
                </li>
                <li>
                  <Link
                    to="/registry"
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    Gift Registry
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
);
