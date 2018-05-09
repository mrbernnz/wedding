import React, { Component } from 'react';
import Modal from 'react-modal';
import { Collapse } from 'react-collapse';
import styled from 'styled-components';

import MastHead from '../components/Masthead';
import line from '../images/root_SmallDivider.png';

Modal.setAppElement('#___gatsby');

const SmallDivider = styled.img`
  display: block;
  height: 50px;
  width: 200px;
  margin: 0 auto 30px;
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

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
            isOpen={modalIsOpen}
            style={customStyles}
            contentLabel="Wedding"
          >
            {invitee.length > 0 ? (
              invitee.map(invite => (
                <div key={invite.code}>
                  <h2>{invite.name}</h2>
                  <p>Wedding Party: {invite.party}</p>
                  <form onSubmit={this.submitRsvpHandler}>
                    <input
                      id="rsvpYes"
                      type="radio"
                      name="rsvp"
                      value="yes"
                      checked={guestsIsOpen}
                      onChange={this.openGuests}
                    />
                    <label htmlFor="rsvpYes">Coming</label>
                    <input
                      id="rsvpNo"
                      type="radio"
                      name="rsvp"
                      value="no"
                      onChange={this.closeGuests}
                    />
                    <label htmlFor="rsvpNo">Not Coming</label>
                    <Collapse isOpened={guestsIsOpen}>
                      <label htmlFor="number">How many are coming?</label>
                      <input
                        id="number"
                        type="number"
                        name="guests"
                        value="0"
                        onChange={this.changeHandler}
                        min="0"
                        max="2"
                        maxLength="1"
                        step="1"
                      />
                      <button type="button" onClick={this.incrementGuestNumber}>
                        +
                      </button>
                      <button type="button" onClick={this.decrementGuestNumber}>
                        -
                      </button>
                      {invite.guests > 1 ? (
                        <div>
                          <p>Please select an entrees for</p>
                          <label htmlFor="entree1">
                            {invite.name.split(' ')[0]}
                          </label>
                          <select
                            id="entree1"
                            name="entree1"
                            defaultValue="Please Select"
                          >
                            <option disabled hidden>
                              Please Select
                            </option>
                            <option value="Grilled Salmon">
                              Grilled Salmon
                            </option>
                            <option value="Seasonal Vegetarian Scampi">
                              Seasonal Vegetarian Scampi
                            </option>
                            <option value="Kona Crusted Filet Tips">
                              Kona Crusted Filet Tips
                            </option>
                          </select>
                          <p>And</p>
                          <label htmlFor="entree2">
                            {invite.name.split(' ')[2]}
                          </label>
                          <select
                            id="entree2"
                            name="entree2"
                            defaultValue="Please Select"
                          >
                            <option disabled hidden>
                              Please Select
                            </option>
                            <option value="Grilled Salmon">
                              Grilled Salmon
                            </option>
                            <option value="Seasonal Vegetarian Scampi">
                              Seasonal Vegetarian Scampi
                            </option>
                            <option value="Kona Crusted Filet Tips">
                              Kona Crusted Filet Tips
                            </option>
                          </select>
                        </div>
                      ) : (
                        <div>
                          <label htmlFor="entree1">
                            Please select an entree for{' '}
                            {invite.name.split(' ')[0]}
                          </label>
                          <select
                            id="entree1"
                            name="entree1"
                            defaultValue="Please Select"
                          >
                            <option disabled hidden>
                              Please Select
                            </option>
                            <option value="Grilled Salmon">
                              Grilled Salmon
                            </option>
                            <option value="Seasonal Vegetarian Scampi">
                              Seasonal Vegetarian Scampi
                            </option>
                            <option value="Kona Crusted Filet Tips">
                              Kona Crusted Filet Tips
                            </option>
                          </select>
                        </div>
                      )}
                    </Collapse>
                    <button>Submit</button>
                  </form>
                </div>
              ))
            ) : (
              <p>The code you entered is incorrect. Please try again.</p>
            )}
            <button onClick={this.closeModal}>X</button>
          </Modal>
        </section>
      </div>
    );
  }
}

export default Rsvp;
