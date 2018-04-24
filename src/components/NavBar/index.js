import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { mediaForNav } from '../../utils/styles';

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

  input:checked ~ div {
    transform: scale(80);
  }

  input:checked ~ nav {
    opacity: 1;
    width: 100%;
  }

  label:hover > span::before {
    top: -0.7rem;
  }

  label:hover > span::after {
    top: 0.7rem;
  }

  input:checked + label > span {
    background-color: transparent;
  }

  input:checked + label > span::before {
    top: 0;
    transform: rotate(135deg);
  }

  input:checked + label > span::after {
    top: 0;
    transform: rotate(-135deg);
  }
`;

const StyledInput = styled.input.attrs({
  type: 'checkbox',
  className: 'styledInput'
})`
  display: none;
`;

const StyledButton = styled.label`
  display: none;

  ${mediaForNav`
    display: block;
    cursor: pointer;
    height: 3rem;
    width: 3rem;
    position: fixed;
    top: 0.5rem;
    left: 0.5rem;
    border-radius: 50%;
    z-index: 2000;
    box-shadow: 0 1rem 3rem rgba(0,0,0, 0.1);
    text-align: center;
  `};
`;

const Icon = styled.span`
  position: relative;
  margin-top: 1.5rem;
  color: rgb(196, 196, 196);

  &,
  &::before,
  &::after {
    width: 1.5rem;
    height: 2px;
    background-color: grey;
    display: inline-block;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::before {
    top: -0.5rem;
  }

  &::after {
    top: 0.5rem;
  }
`;

const NavBackground = styled.div.attrs({ className: 'navBackground' })`
  display: none;

  ${mediaForNav`
    display: block;
    height: 2.5rem;
    width: 2.5rem;
    position: fixed;
    border-radius: 50%;
    top: 1rem;
    left: 1rem;
    background-image: radial-gradient(#fff,#fff);
    z-index: 1000;
    transition: transform 0.8s cubic-bezier(0.86, 0,0.07,1);
  `};
`;

const Nav = styled.nav`
  padding: 0;
  margin: 0;
  z-index: 1000;

  ${mediaForNav`
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1500;
    opacity: 0;
    width: 0;
    transition: all 0.8s cubic-bezier(0.68, -0.55,0.265,1.55);
  `};
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  margin: 0;
  list-style: none;

  ${mediaForNav`
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `};
`;

const NavItem = styled.li`
  margin: 0 1rem;
  padding: 0;

  ${mediaForNav`
    margin: 0;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  `};
`;

const NavLink = styled(Link)`
  &:link,
  &:visited {
    display: inline-block;
    color: rgb(196, 196, 196);
    text-decoration: none;
  }

  &:hover,
  &active {
    color: rgb(119, 119, 119);
  }

  ${mediaForNav`
    font-size: 1.875rem;
  `};
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
