import React, { Component } from 'react';
import Modal from 'react-modal';
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
    term: '',
    people: [],
    modalIsOpen: false
  };

  openModal = () => this.setState({ modalIsOpen: true });

  closeModal = () => this.setState({ modalIsOpen: false });

  changeHandler = e => {
    this.setState({ term: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();

    this.fetchNames(this.state.term).then(people => this.setState({ people }));
    this.setState({ term: '' });
  };

  fetchNames = async term => {
    const url = `https://91b8kz682h.execute-api.us-east-1.amazonaws.com/dev/rsvps?name=${term}`;

    const res = await fetch(url),
      json = await res.json(),
      data = await json.data;

    return data;
  };

  render() {
    const { term, modalIsOpen } = this.state;

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
                          type="submit"
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
            close={this.closeModal}
            style={customStyles}
            contentLabel="Wedding"
          >
            <p>
              {this.state.people.length > 0 ? this.state.people[0].name : ''}
            </p>
            <form>
              <select>
                <option>1</option>
                <option>2</option>
              </select>
              <button type="submit">Submit</button>
              <button onClick={this.closeModal}>X</button>
            </form>
          </Modal>
        </section>
      </div>
    );
  }
}

export default Rsvp;
