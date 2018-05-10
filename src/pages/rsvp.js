import React, { Component } from 'react';
import styled from 'styled-components';

import MastHead from '../components/Masthead';
import NavBar from '../components/NavBar';
import Divider from '../components/Divider';
import Modal from '../components/Modal';

import line from '../images/root_SmallDivider.png';

const SmallDivider = styled.img`
  display: block;
  height: 50px;
  width: 200px;
  margin: 0 auto 30px;
`;

class Rsvp extends Component {
  state = {
    value: '',
    invitee: {},
    modalIsOpen: false,
    guestsIsOpen: false
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  fetchNames = async value => {
    const url = `https://91b8kz682h.execute-api.us-east-1.amazonaws.com/dev/rsvps?code=${value}`;

    const res = await fetch(url),
      json = await res.json(),
      data = await json.data;

    return data;
  };

  submitCodeHandler = e => {
    e.preventDefault();

    this.fetchNames(this.state.value).then(invitee =>
      this.setState({ invitee })
    );

    this.setState({ value: '' });
  };

  submitRsvpHandler = e => {
    e.preventDefault();
    let v = [];
    for (const prop of new FormData(e.target).values()) {
      v.push(prop);
    }
    alert(`A invite submission\n${v.join('\n')}`);

    const url =
      'https://91b8kz682h.execute-api.us-east-1.amazonaws.com/dev/rsvps';

    const res = fetch(url, { method: 'POST', body: new FormData(e.target) });
  };

  openModal = () => this.setState({ modalIsOpen: true });

  closeModal = () => this.setState({ modalIsOpen: false });

  openGuests = ({ target: { checked } }) =>
    this.setState({ guestsIsOpen: checked });

  closeGuests = ({ target: { checked } }) =>
    this.setState({ guestsIsOpen: !checked });

  incrementGuestNumber = () => {
    const num = document.querySelector('#number');
    const max = Number(num.max);
    let value = Number(num.value);

    value = Number.isNaN(value) ? 0 : value;
    value < max ? value++ : num.max;
    document.querySelector('#number').value = value;
  };

  decrementGuestNumber = () => {
    const num = document.querySelector('#number');
    const min = Number(num.min);
    let value = Number(num.value);

    value = Number.isNaN(value) ? 0 : value;
    value > min ? value-- : num.min;
    document.querySelector('#number').value = value;
  };

  render() {
    const { value, invitee, modalIsOpen, guestsIsOpen } = this.state;

    return (
      <div>
        <MastHead />
        <NavBar />
        <Divider />
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Lulu Clean One Bold'
          }}
        >
          <h2>You are invited</h2>
          <SmallDivider src={line} alt="curved line" />
          <div style={{ marginBottom: '80px' }}>
            <div style={{ maxWidth: '1170px' }}>
              <div>
                <div>
                  <div>
                    <div>
                      <form onSubmit={this.submitCodeHandler}>
                        <label htmlFor="invitationCode">
                          Enter the code on your invitation
                        </label>
                        <input
                          id="invitationCode"
                          type="search"
                          name="value"
                          placeholder="e.g. 123abc"
                          value={value}
                          onChange={this.changeHandler}
                          style={{
                            marginBottom: '20px',
                            width: '100%',
                            textAlign: 'center'
                          }}
                        />
                        <button
                          style={{ width: '100%' }}
                          onClick={this.openModal}
                        >
                          Find RSVP
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal
            invitee={invitee}
            modalIsOpen={modalIsOpen}
            guestsIsOpen={guestsIsOpen}
            changeHandler={this.changeHandler}
            submitRsvpHandler={this.submitRsvpHandler}
            openModal={this.openModal}
            closeModal={this.closeModal}
            openGuests={this.openGuests}
            closeGuests={this.closeGuests}
            incrementGuestNumber={this.incrementGuestNumber}
            decrementGuestNumber={this.decrementGuestNumber}
          />
        </section>
      </div>
    );
  }
}

export default Rsvp;
