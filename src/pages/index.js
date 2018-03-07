import React from 'react';

import MastHead from '../components/MastHead';
import SingleRose from '../components/SingleRose';
import image from '../images/Save The Date/_ROZ6950.jpg';
import rose from '../images/root_SmallGraphic_QPZd0e5.png';

import '../sass/pages/index.scss';

export default () => (
  <div>
    <MastHead />
    <main className="indexMain">
      <section>
        <img
          src={image}
          style={{
            display: 'block',
            width: '100%',
            marginBottom: '30px',
            boxSizing: ' border-box',
            border: '8px solid rgb(255, 255, 255)',
            boxShadow: 'rgba(0,0,0, 0.25) 0px 1px 4px'
          }}
        />
        <div className="details1">
          <div>
            <h3>pleace join us for our wedding celebration on</h3>
          </div>
          <time datetime="2018-09-08T11:00">September 8, 2018</time>
          <div className="roseImage">
            <SingleRose />
          </div>
        </div>
      </section>
      <section className="story">
        <h3>Our Story</h3>
        <p>
          We were both talked into going to a speed dating event hosted by some
          fraternities and sororities in NYC at Katra. You all remember Katra….
        </p>
        <p>
          Tricia came early to meet her friend Marie then realized what the day
          was going to become. She’d been speed dating before, normally you have
          to pre-register to keep the numbers even. This one was different and
          as Tricia will say it was about 100 girls and 10 guys. Speed dating
          was standing up walking past the prospects and Tricia was not having
          that so she did not participate. But she did notice one person…
        </p>
        <p>
          Tricia kept herself to the bar with drinks and the first time she ever
          had Fritay. She was in love!! With the fritay that is…
        </p>
        <p>
          Marie, Tricia’s dental school classment, went to NJIT with Noel and
          introduced the two. Hiwotie went to a hackathon and met Noel and also
          introduced the two…again (he likes to take credit for us meeting)
        </p>
        <p>
          They danced they exchanged numbers and the rest was history. He
          proposed in Italy at the Blue Grotto a cave displaying some of the
          bluest waters.
        </p>
      </section>
    </main>
  </div>
);
