import React from 'react';
import styles from '../styles/events';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import MastHead from '../components/Masthead';
import NavBar from '../components/Nav';
import Divider from '../components/Divider';

import line from '../images/root_SmallDivider.png';

const EventsPage = ({ classes }) => (
  <div>
    <MastHead />
    <NavBar />
    <Divider />
    <section>
      <h2 className={classes.title}>Events</h2>
      <img src={line} alt="curved line" className={classes.smallDivider} />
      <div style={{ marginBottom: '80px' }}>
        <div style={{ margin: '0 auto', maxWidth: '1170px' }}>
          <div style={{ margin: '0 8.3334%' }}>
            <div style={{ display: 'flex' }}>
              <div className={classes.infoContainer}>
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
                    <a
                      className={classes.anchor}
                      href="https://maps.google.com/maps?saddr=Current+Location&daddr=4 Lakeview Drive South Gibbsboro, NJ 08026"
                    >
                      Get Directions
                    </a>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default withRoot(withStyles(styles)(EventsPage));
