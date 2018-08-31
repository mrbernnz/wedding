import React from 'react';
import styles from '../styles/events';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import MastHead from '../components/Masthead';
import NavBar from '../components/Nav';
import Divider from '../components/Divider';

import line from '../images/root_SmallDivider.png';

const RegistryPage = ({ classes }) => (
  <div>
    <MastHead />
    <NavBar />
    <Divider />
    <section>
      <h2 className={classes.title}>Registry</h2>
      <img src={line} alt="curved line" className={classes.smallDivider} />
      <div style={{ marginBottom: '80px' }}>
        <div style={{ margin: '0 auto', maxWidth: '1170px' }}>
          <div style={{ margin: '0 8.3334%' }}>
            <div style={{ display: 'flex' }}>
              <div className={classes.infoContainer}>
                <div
                  style={{
                    marginBottom: '30px',
                    textAlign: 'center'
                  }}
                >
                  <div>
                    <h3 style={{ fontFamily: 'Lulu Clean One Bold' }}>
                      Target
                    </h3>
                  </div>
                  <div style={{ marginTop: '40px' }}>
                    <a
                      className={classes.anchor}
                      href="https://www.target.com/gift-registry/giftgiver?registryId=4568809b445c4701812599f615b989bd&lnk=registry_custom_url"
                      target="_blank"
                    >
                      View Registry
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default withRoot(withStyles(styles)(RegistryPage));
