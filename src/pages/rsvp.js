import React from 'react';
import Header from '../components/Header';
import smallDivider from '../images/root_SmallDivider_jDiIH3s.png';

const RsvpPage = () => (
  <div>
    <Header />
    <section>
      <h2>You are invited</h2>
      <img src={smallDivider} alt="Small Divider" />
      <h3>Enter the name on your invitation</h3>
      <form>
        <input />
        <button>Find RSVP</button>
      </form>
    </section>
  </div>
);

export default RsvpPage;
