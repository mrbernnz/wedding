import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Lulo Clean One Bold';
  font-weight: 400;
  font-style: normal;
  line-heigh: 1;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  margin: 0 auto 30px;
  background-color: transparent;
`;

const NavBarList = styled.div`
  position: relative;
`;

const Nav = styled.nav`
  padding: 0;
  margin: 0;
  z-index: 1000;
`;

const List = styled.ul`
  margin: 0;
  list-style: none;

  @media (min-width: 544px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    & li {
      margin: 0 15px;
      padding: 0;

      & a {
        color: rgb(196, 196, 196);
        text-decoration: none;
      }
    }
  }
`;

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
