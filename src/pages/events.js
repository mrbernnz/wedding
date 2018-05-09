import React from 'react';
import styled from 'styled-components';

import { media } from '../utils/styles';
import MastHead from '../components/Masthead';
import NavBar from '../components/NavBar';
import Divider from '../components/Divider';

import line from '../images/root_SmallDivider.png';

const Title = styled.h2`
  font-family: 'Lulu Clean One Bold';
  text-align: center;
`;

const SmallDivider = styled.img`
  display: block;
  height: 50px;
  width: 200px;
  margin: 0 auto 30px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  flex-basis: 0;
  padding: 0 15px;
  text-align: left;
`;

const Anchor = styled.a`
  text-transform: uppercase;
  color: rgb(146, 148, 146);
  text-decoration: none;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  background-color: transparent;
`;

const EventsPage = () => (
  <div>
    <MastHead />
    <NavBar />
    <Divider />
    <section>
      <Title>Events</Title>
      <SmallDivider src={line} alt="curved line" />
      <div style={{ marginBottom: '80px' }}>
        <div style={{ margin: '0 auto', maxWidth: '1170px' }}>
          <div style={{ margin: '0 8.3334%' }}>
            <div style={{ display: 'flex' }}>
              <InfoContainer>
                <div style={{ marginBottom: '30px' }}>
                  <div>
                    <h3 style={{ fontFamily: 'Lulu Clean One Bold' }}>
                      Wedding Ceremony
                    </h3>
                  </div>
                  <div>
                    <p>
                      11:00 AM, September 8, 2018<br />The Chophouse
                      <br />
                      4 Lakeview Drive South<br />Gibbsboro, NJ 08026
                    </p>
                  </div>
                  <div style={{ marginTop: '40px' }}>
                    <Anchor href="https://maps.google.com/maps?saddr=Current+Location&daddr=4 Lakeview Drive South Gibbsboro, NJ 08026">
                      Get Directions
                    </Anchor>
                  </div>
                </div>
                <div>
                  <div style={{ width: '202px' }}>
                    <h3 style={{ fontFamily: 'Lulu Clean One Bold' }}>
                      Reception
                    </h3>
                  </div>
                  <div>
                    <p>To Follow Ceremony</p>
                  </div>
                  <div />
                </div>
              </InfoContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default EventsPage;
