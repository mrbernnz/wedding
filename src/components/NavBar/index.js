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
  <Container>
    <NavBarList>
      <Nav>
        <List>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rsvp">Rsvp</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/travel">Travel</Link>
          </li>
          <li>
            <Link to="/registry">Gift Registry</Link>
          </li>
        </List>
      </Nav>
    </NavBarList>
  </Container>
);
