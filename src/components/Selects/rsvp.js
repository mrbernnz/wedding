import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../withRoot';

function styles(theme) {
  return {
    formControl: {
      margin: theme.spacing.unit * 3
    },
    group: {
      'flex-direction': 'row',
      margin: `${theme.spacing.unit}px 0`
    }
  };
}

class RsvpRadioGroup extends Component {
  state = {
    rsvp: 'Yes'
  };

  changeHandler = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { rsvp } = this.state;
    const { classes, handleChange } = this.props;

    return (
      <FormControl
        component="fieldset"
        required
        className={classes.formControl}
      >
        <RadioGroup
          aria-label="rsvp"
          name="rsvp"
          className={classes.group}
          value={rsvp}
          onChange={this.changeHandler}
        >
          <FormControlLabel
            value="Yes"
            control={<Radio />}
            label="Yes"
            onChange={handleChange}
          />
          <FormControlLabel
            value="No"
            control={<Radio />}
            label="No"
            onChange={handleChange}
          />
        </RadioGroup>
        <FormHelperText>Are You Coming?</FormHelperText>
      </FormControl>
    );
  }
}

export default withRoot(withStyles(styles)(RsvpRadioGroup));
