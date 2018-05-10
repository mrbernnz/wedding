import React, { Component } from 'react';
import Modal from 'react-modal';
import { Collapse } from 'react-collapse';

Modal.setAppElement('#___gatsby');

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

export default ({
  invitee,
  modalIsOpen,
  guestsIsOpen,
  changeHandler,
  submitRsvpHandler,
  openModal,
  closeModal,
  openGuests,
  closeGuests,
  incrementGuestNumber,
  decrementGuestNumber
}) => {
  return (
    <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Wedding">
      {invitee.length !== undefined ? (
        invitee.map(invite => (
          <div key={invite.code}>
            <form onSubmit={submitRsvpHandler}>
              <h2>Hi {invite.name}!</h2>
              <fieldset>
                <legend>RSVP</legend>
                <input type="hidden" name="code" value={invite.code} />
                <input
                  id="rsvpYes"
                  type="radio"
                  name="rsvp"
                  value="yes"
                  checked={guestsIsOpen}
                  onChange={openGuests}
                />
                <label htmlFor="rsvpYes">Coming</label>
                <input
                  id="rsvpNo"
                  type="radio"
                  name="rsvp"
                  value="no"
                  onChange={closeGuests}
                />
                <label htmlFor="rsvpNo">Not Coming</label>
                <Collapse isOpened={guestsIsOpen}>
                  <label htmlFor="number">How many are coming?</label>
                  <input
                    id="number"
                    type="number"
                    name="guests"
                    value="0"
                    onChange={changeHandler}
                    min="0"
                    max="2"
                    maxLength="1"
                    step="1"
                  />
                  <button type="button" onClick={incrementGuestNumber}>
                    +
                  </button>
                  <button type="button" onClick={decrementGuestNumber}>
                    -
                  </button>
                  {invite.invited > 1 ? (
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
                        <option value="Grilled Salmon">Grilled Salmon</option>
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
                        <option value="Grilled Salmon">Grilled Salmon</option>
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
                        Please select an entree for {invite.name.split(' ')[0]}
                      </label>
                      <select
                        id="entree1"
                        name="entree1"
                        defaultValue="Please Select"
                      >
                        <option disabled hidden>
                          Please Select
                        </option>
                        <option value="Grilled Salmon">Grilled Salmon</option>
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
              </fieldset>
              <button>Submit</button>
            </form>
          </div>
        ))
      ) : (
        <p>Please try again.</p>
      )}
      <button onClick={closeModal}>X</button>
    </Modal>
  );
};
