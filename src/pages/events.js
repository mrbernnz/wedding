import React from 'react';
import styled from 'styled-components';

import { media } from '../utils/styles';
import MastHead from '../components/Masthead';

import line from '../images/root_SmallDivider.png';

const Title = styled.h2`
  text-align: center;
`;

const SmallDivider = styled.img`
  display: block;
  height: 50px;
  width: 200px;
  margin: 0 auto 30px;
`;

const EventsPage = () => (
  <div>
    <MastHead />
    <section>
      <Title>Events</Title>
      <SmallDivider src={line} alt="curved line" />
      <div style={{ marginBottom: '80px' }}>
        <div
          style={{ margin: '0 auto', maxWidth: '1170px', textAlign: 'center' }}
        >
          <div style={{ margin: '0 8.3334%' }}>
            <div style={{ display: 'flex' }}>
              <div style={{ padding: '0 15px', flexGrow: '1', flexBasis: '0' }}>
                <div>
                  <div>
                    <h3>Wedding Ceremony</h3>
                  </div>
                  <div>
                    <p>
                      11:00 AM, September 8, 2018<br />The Chophouse<br />4
                      Lakeview Drive South<br />Gibbsboro, NJ 08026
                    </p>
                  </div>
                  <div />
                </div>
                <div>
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default EventsPage;
