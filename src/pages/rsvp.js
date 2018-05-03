import React, { Component } from 'react';
import styled from 'styled-components';

import MastHead from '../components/Masthead';
import line from '../images/root_SmallDivider.png';

const SmallDivider = styled.img`
  display: block;
  height: 50px;
  width: 200px;
  margin: 0 auto 30px;
`;

class Rsvp extends Component {
  state = {
    term: '',
    names: []
  };

  changeHandler = e => {
    this.setState({ term: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();

    this.fetchNames(this.state.term).then(names => this.setState({ names }));
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
    const { term } = this.state;

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
                      <h3>Enter the name on your invitation</h3>
                      <form onSubmit={this.submitHandler}>
                        <input
                          type="search"
                          name="name"
                          placeholder="e.g. Jon and Jane Doe"
                          value={term}
                          onChange={this.changeHandler}
                          style={{
                            marginBottom: '20px',
                            width: '100%',
                            textAlign: 'center'
                          }}
                        />
                        <button type="submit" style={{ width: '100%' }}>
                          Find RSVP
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Rsvp;
