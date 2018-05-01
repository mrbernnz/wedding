import React, { Component } from 'react';

import MastHead from '../components/Masthead';
import NavBar from '../components/NavBar';
import Divider from '../components/Divider';
import CodeForm from '../components/Form/code';
import Modal from '../components/Modal';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import line from '../images/root_SmallDivider.png';
import { SmallDivider, Error } from '../styles/rsvpCss';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Lulu Clean One Bold'
  }
});

class Rsvp extends Component {
  state = {
    code: '',
    invitee: {},
    modalIsOpen: false
  };

  changeHandler = ({ target: { value, name, classList } }) => {
    classList.add('active');
    this.setState({ [name]: value });
  };

  fetchNames = code => {
    const url = `https://91b8kz682h.execute-api.us-east-1.amazonaws.com/dev/rsvps?code=${code}`;

    return fetch(url)
      .then(res => res.json())
      .then(json => json.data)
      .catch(err => console.log(err));
  };

  submitCodeHandler = e => {
    e.preventDefault();

    this.fetchNames(this.state.code).then(invitee =>
      this.setState({ invitee })
    );

    this.setState({ code: '' });
  };

  openModal = () => this.setState({ modalIsOpen: true });

  closeModal = () => this.setState({ modalIsOpen: false });

  render() {
    const { classes } = this.props;
    const { code, invitee, modalIsOpen, guestsIsOpen } = this.state;
    return (
      <div>
        <MastHead />
        <NavBar />
        <Divider />
        <section className={classes.container}>
          <h2>You are invited</h2>
          <SmallDivider src={line} alt="curved line" />
          <div style={{ marginBottom: '80px', width: '50%' }}>
            <div style={{ maxWidth: '1170px' }}>
              <div>
                <div>
                  <div>
                    <div>
                      <CodeForm
                        submit={this.submitCodeHandler}
                        code={code}
                        change={this.changeHandler}
                        openModal={this.openModal}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal
            invitee={invitee}
            modalIsOpen={modalIsOpen}
            changeHandler={this.changeHandler}
            openModal={this.openModal}
            closeModal={this.closeModal}
          />
        </section>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(Rsvp));
