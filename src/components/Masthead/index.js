import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/styles';

import smallGraphic from '../../images/root_SmallGraphic.png';

const Container = styled.header`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding: 10px 0;

  ${media.handheld`
    display: grid;
    grid-template-columns: auto auto auto;
  `};
`;

const Name = styled.h1`
  font-family: 'Hijrnotes Regular';
  margin: 0;
  font-size: 31.2px;

  &:first-child {
    text-align: center;
    flex: 0 0 100%;
    order: 1;
  }

  &:last-child {
    text-align: center;
    flex: 0 0 100%;
    order: 3;
  }

  ${media.handheld`
    flex: 0 1 auto;
    margin-bottom: 0;
    font-size: 39px;
  `};
`;

const SmallGraphic = styled.img`
  // flex: 0 0 100%;
  text-align: center;
  order: 2;
  margin-bottom: 5px;

  display: block;
  text-indent: -10000px;
  width: 50px;
  height: 50px;

  ${media.handheld`
    flex: 0 0 135px;
    margin: 0;
    width:50px;
    height: 50px;
  `};
`;

export default () => (
  <Container>
    <Name>Tricia Quartey</Name>
    <SmallGraphic src={smallGraphic} alt="Small Graphic" />
    <Name>Noel Sagaille</Name>
  </Container>
);
