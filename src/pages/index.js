import React from 'react';
import styled from 'styled-components';

import Nav from '../components/NavBar';

import { media } from '../utils/styles';
import image from '../images/Save The Date/_ROZ6950.jpg';

const Container = styled.main``;

const Header = styled.header`
  line-height: 1.6;
  text-transform: none;
  letter-spacing: normal;
  text-align: center;
  background-color: transparent;
  background-image: none, none;
  background-position: center center, center top;
  background-repeat: no-repeat, repeat;
  padding: 25px 0;
  margin: 0 auto;
  max-width: 1170px;

  ${media.handheld`
    background-size: 1200px auto, auto;
    padding: 30px 0;
  `} ${media.tablet`
    background-size: 1600px auto, auto;
    padding: 50px 0;
  `};
`;

const Name = styled.h1`
  font-family: 'Hijrnotes Regular';
  font-weight: 400;
  font-style: normal;
  line-height: 1;
  font-size: 36px;
  margin: 0;

  &:first-child {
    margin-bottom: 37px;
  }

  &:last-child {
    margin-top: 3px;
  }


  ${media.handheld`
    font-size: 54px;
  `}

  ${media.tablet`
    font-size: 63px;
  `}

  ${media.desktop`
    font-size: 72px;
  `}
`;

const Span = styled.span`
  font-family: 'Lulo Clean One Bold';
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: normal;
`;

const Section = styled.section`
  padding: 0 15px;
`;

const Portrait = styled.img`
  display: block;
  width: '100%',
  marginBottom: '30px',
  boxSizing: ' border-box',
  border: '8px solid rgb(255, 255, 255)',
  boxShadow: 'rgba(0,0,0, 0.25) 0px 1px 4px'
`;

export default () => (
  <Container>
    <Header>
      <Name>Tricia Quartey</Name>
      <Span>and</Span>
      <Name>Noel Sagaille</Name>
    </Header>
    <Nav />
    {/*
      <Section>
        <Portrait src={image} alt="Noel and Tricia" />
        <div className="details1">
          <div>
            <h3>please join us for our wedding celebration on</h3>
          </div>
          <time
            datetime="2018-09-08T11:00"
            style={{ fontSize: '28.8px', color: 'white' }}
          >
            September 8, 2018
          </time>
        </div>
      </Section>
      <Section>
        <h3
          style={{
            fontSize: '28.8px',
            color: 'white',
            paddingBottom: '14.5px'
          }}
        >
          Our Story
        </h3>
        <p
          style={{
            fontSize: '16.8px',
            color: 'white',
            paddingBottom: '14.5px'
          }}
        >
          We were both talked into going to a speed dating event hosted by some
          fraternities and sororities in NYC at Katra. You all remember Katra….
        </p>
        <p
          style={{
            fontSize: '16.8px',
            color: 'white',
            paddingBottom: '14.5px'
          }}
        >
          Tricia came early to meet her friend Marie then realized what the day
          was going to become. She’d been speed dating before, normally you have
          to pre-register to keep the numbers even. This one was different and
          as Tricia will say it was about 100 girls and 10 guys. Speed dating
          was standing up walking past the prospects and Tricia was not having
          that so she did not participate. But she did notice one person…
        </p>
        <p
          style={{
            fontSize: '16.8px',
            color: 'white',
            paddingBottom: '14.5px'
          }}
        >
          Tricia kept herself to the bar with drinks and the first time she ever
          had Fritay. She was in love!! With the fritay that is…
        </p>
        <p
          style={{
            fontSize: '16.8px',
            color: 'white',
            paddingBottom: '14.5px'
          }}
        >
          Marie, Tricia’s dental school classment, went to NJIT with Noel and
          introduced the two. Hiwotie went to a hackathon and met Noel and also
          introduced the two…again (he likes to take credit for us meeting)
        </p>
        <p style={{ fontSize: '16.8px', color: 'white' }}>
          They danced they exchanged numbers and the rest was history. He
          proposed in Italy at the Blue Grotto a cave displaying some of the
          bluest waters.
        </p>
      </Section>
      */}
  </Container>
);
