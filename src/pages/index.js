import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import Nav from '../components/Nav';
import styles from '../styles';
import image from '../images/Tricia-Noel_18_04.jpg';

function IndexPage({ classes }) {
  return (
    <main>
      <header className={classes.header}>
        <h1 className={classes.name}>Tricia Quartey</h1>
        <span className={classes.span}>and</span>
        <h1 className={classes.name}>Noel Sagaille</h1>
      </header>
      <Nav />
      <section className={classes.section}>
        <img
          className={classes.portrait}
          src={image}
          alt="Noel Sagaille and Tricia Quartey"
        />
        <div style={{ textAlign: 'center' }}>
          <div>
            <h3 className={classes.dateHeading}>
              Please join us for our wedding celebration on
            </h3>
          </div>
          <time className={classes.date}>September 8, 2018</time>
        </div>
      </section>
      <section className={classes.storySection}>
        <div style={{ margin: '0 auto', maxWidth: '1170px' }}>
          <div className={classes.storyDiv}>
            <section className={classes.section}>
              <h2 className={classes.storyHeading}>Story</h2>
              <p className={classes.storyParagraph}>
                We were both talked into going to a speed dating event hosted by
                some fraternities and sororities in NYC at Katra. You all
                remember Katra….
              </p>
              <p className={classes.storyParagraph}>
                Tricia came early to meet her friend Marie then realized what
                the day was going to become. She’d been speed dating before,
                normally you have to pre-register to keep the numbers even. This
                one was different and as Tricia will say it was about 100 girls
                and 10 guys. Speed dating was standing up walking past the
                prospects and Tricia was not having that so she did not
                participate. But she did notice one person…
              </p>
              <p className={classes.storyParagraph}>
                Tricia kept herself to the bar with drinks and the first time
                she ever had Fritay. She was in love!! With the fritay that is…
              </p>
              <p className={classes.storyParagraph}>
                Marie, Tricia’s dental school classment, went to NJIT with Noel
                and introduced the two. Hiwotie went to a hackathon and met Noel
                and also introduced the two…again (he likes to take credit for
                us meeting)
              </p>
              <p className={classes.storyParagraph}>
                They danced they exchanged numbers and the rest was history. He
                proposed in Italy at the Blue Grotto a cave displaying some of
                the bluest waters.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

export default withRoot(withStyles(styles)(IndexPage));
