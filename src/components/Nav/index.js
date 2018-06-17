import React, { Component } from 'react';

import {
  Container,
  StyledInput,
  StyledButton,
  Icon,
  NavBackground,
  Nav,
  NavList,
  NavItem,
  NavLink
} from './style';

const ListItem = ({ path, link }) => (
  <NavItem>
    <NavLink to={path}>{link}</NavLink>
  </NavItem>
);

const debounce = (fn, wait) => {
  let timeout = null;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), wait);
  };
};

export default class NavBar extends Component {
  state = {
    navPosition: false
  };

  componentDidMount() {
    return window.addEventListener('scroll', debounce(this.handleScroll, 32));
  }

  componentWillUnmount() {
    return window.removeEventListener(
      'scroll',
      debounce(this.handleScroll, 32)
    );
  }

  handleScroll = () => {
    window.scrollY >= 300 && this.refs.nav
      ? this.setState({ navPosition: true })
      : this.setState({ navPosition: false });
  };

  render() {
    const isTop = this.state.navPosition;

    return (
      <Container ref="nav">
        <StyledInput id="navi-toggle" />
        <StyledButton htmlFor="navi-toggle">
          <Icon />
        </StyledButton>
        <NavBackground>&nbsp;</NavBackground>

        <Nav className={isTop ? 'graybck' : ''}>
          <NavList>
            <ListItem path="/" link="Home" />
            <ListItem path="/rsvp" link="Rsvp" />
            <ListItem path="/photos" link="Photos" />
            <ListItem path="/events" link="Events" />
          </NavList>
        </Nav>
      </Container>
    );
  }
}
