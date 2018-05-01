import React from 'react';
import styled from 'styled-components';

import MastHead from '../components/Masthead';
import line from '../images/root_SmallDivider.png';

const SmallDivider = styled.img`
  display: block;
  height: 50px;
  width: 200px;
  margin: 0 auto 30px;
`;

const RsvpPage = () => (
  <div>
    <MastHead />
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h2 style={{ fontFamily: 'Lulu Clean One Bold' }}>You are invited</h2>
      <SmallDivider src={line} alt="curved line" />
      <div style={{ marginBottom: '80px' }}>
        <div style={{ maxWidth: '1170px' }}>
          <div>
            <div>
              <div>
                <div>
                  <h3 style={{ fontFamily: 'Lulu Clean One Bold' }}>
                    Enter the name on your invitation
                  </h3>
                  <form>
                    <input style={{ marginBottom: '20px', width: '100%' }} />
                    <button style={{ width: '100%' }}>Find RSVP</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default RsvpPage;
