import React from 'react';
import styled from 'styled-components';

import Nav from '../components/NavBar';

import { media } from '../utils/styles';
import image from '../images/Tricia-Noel_18_04.jpg';

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
  object-fit: contain;
  width: 50%;
  margin: 0 auto 30px;
  box-sizing: border-box;
  border: 8px solid rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.25) 0 1px 4px;
`;

const DateHeading = styled.h3`
  font-family: 'Hijrnotes Regular';
  font-weight: 400;
  font-style: normal;
  line-height: 1.4;
  text-transform: none;
  letter-spacing: normal;
  font-size: 1.9rem;
  color: rgb(146,148,146);
  margin 0 0 30px;
`;

const Date = styled.time`
  font-family: 'Lulo Clean One Bold';
  font-size: 21.6px;
  text-transform: uppercase;

  ${media.handheld`
    font-size: 25.2px;
  `} 
  ${media.tablet`
    font-size: 28.8px;
  `} 
  ${media.desktop`
    font-size: 32.4px;
  `}
`;

const StorySection = styled.section`
  background-color: rgb(235, 235, 235);
  padding: 50px 0;
`;

const StoryHeading = styled.h2`
  font-family: 'Lulo Clean One Bold';
  font-size: 21.6px;
  text-transform: uppercase;
  text-align: center;

  ${media.handheld`
    font-size: 25.2px;
  `}

  ${media.tablet`
    font-size: 28.8px;
  `}

  ${media.desktop`
    font-size: 32.4px;
  `}
`;

const StoryParagraph = styled.p`
  font-size: 16.8px;

  &:not(:last-child) {
    padding-bottom: 14.5px;
  }
`;

const StoryDiv = styled.div`
  padding: 0 15px;

  ${media.tablet`
    margin: 0 8.333%;
  `};
`;

export default () => (
  <Container>
    <Header>
      <Name>Tricia Quartey</Name>
      <Span>and</Span>
      <Name>Noel Sagaille</Name>
    </Header>
    <Nav />
    <Section style={{ marginBottom: '30px' }}>
      <Portrait src={image} alt="Noel Sagaille and Tricia Quartey" />
      <div style={{ textAlign: 'center' }}>
        <div>
          <DateHeading>
            Please join us for our wedding celebration on
          </DateHeading>
        </div>
        <Date datetime="2018-09-08T11:00">September 8, 2018</Date>
      </div>
    </Section>
    <StorySection>
      <div style={{ margin: '0 auto', 'max-width': '1170px' }}>
        <StoryDiv>
          <Section>
            <StoryHeading>Our Story</StoryHeading>
            <StoryParagraph>
              We were both talked into going to a speed dating event hosted by
              some fraternities and sororities in NYC at Katra. You all remember
              Katra….
            </StoryParagraph>
            <StoryParagraph>
              Tricia came early to meet her friend Marie then realized what the
              day was going to become. She’d been speed dating before, normally
              you have to pre-register to keep the numbers even. This one was
              different and as Tricia will say it was about 100 girls and 10
              guys. Speed dating was standing up walking past the prospects and
              Tricia was not having that so she did not participate. But she did
              notice one person…
            </StoryParagraph>
            <StoryParagraph>
              Tricia kept herself to the bar with drinks and the first time she
              ever had Fritay. She was in love!! With the fritay that is…
            </StoryParagraph>
            <StoryParagraph>
              Marie, Tricia’s dental school classment, went to NJIT with Noel
              and introduced the two. Hiwotie went to a hackathon and met Noel
              and also introduced the two…again (he likes to take credit for us
              meeting)
            </StoryParagraph>
            <StoryParagraph>
              They danced they exchanged numbers and the rest was history. He
              proposed in Italy at the Blue Grotto a cave displaying some of the
              bluest waters.
            </StoryParagraph>
          </Section>
        </StoryDiv>
      </div>
    </StorySection>
  </Container>
);
