import React, { Component } from 'react';

import MastHead from '../components/Masthead';
import NavBar from '../components/NavBar';
import Divider from '../components/Divider';
import Modal from '../components/Modal';

import line from '../images/root_SmallDivider.png';
import { SmallDivider, Input, Error } from './rsvpCss';

class Rsvp extends Component {
  state = {
    code: '',
    invitee: {},
    isValidated: false,
    modalIsOpen: false,
    guestsIsOpen: false
  };

  changeHandler = ({ target: { value, name, classList } }) => {
    classList.add('active');
    this.setState({ [name]: value });
  };

  fetchNames = async code => {
    const url = `https://91b8kz682h.execute-api.us-east-1.amazonaws.com/dev/rsvps?code=${code}`;

    const res = await fetch(url),
      json = await res.json(),
      data = await json.data;

    return data;
  };

  vaildate = () => {
    const formLength = this.formEl.length;

    if (this.formEl.checkValidity() === false) {
      for (let i = 0; i < formLength; i++) {
        const elem = this.formEl[i];
        const errorLabel = elem.parentNode.querySelector('.invalid-feedback');

        if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
          !elem.validity.valid
            ? (errorLabel.textContent = elem.validationMessage)
            : (errorLabel.textContent = '');
        }
      }

      return false;
    } else {
      for (let i = 0; i < formLength; i++) {
        const elem = this.formEl[i];
        const errorLabel = elem.parentNode.querySelector('.invalid-feedback');
        if (errorLabel && elem.nodeName.toLowerCase() !== 'button') {
          errorLabel.textContent = '';
        }
      }

      return true;
    }
  };

  submitCodeHandler = ({ preventDefault }) => {
    preventDefault();

    if (this.validate())
      console.log('componet state', JSON.stringify(this.state));

    /*
     * this.fetchNames(this.state.code).then(invitee =>
     *   this.setState({ invitee })
     * );
     */

    this.setState({ code: '', isValidated: true });
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
    const { code, invitee, modalIsOpen, guestsIsOpen } = this.state;
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
                      <form
                        ref={form => (this.formEl = form)}
                        onSubmit={this.submitCodeHandler}
                        noValidate
                      >
                        <fieldset>
                          <label
                            htmlFor="invitationCode"
                            style={{
                              display: 'block',
                              textAlign: 'center',
                              lineHeight: '150%',
                              fontSize: '1.5rem'
                            }}
                          >
                            Enter the code on your invitation
                          </label>
                          <Input
                            ref="code"
                            required
                            value={code}
                            onChange={this.changeHandler}
                          />
                          <Error>Must be 5 characters long</Error>
                        </fieldset>
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
