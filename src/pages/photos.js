import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import styles from '../styles/photos';
import MastHead from '../components/Masthead';
import NavBar from '../components/Nav';
import Divider from '../components/Divider';

import line from '../images/root_SmallDivider.png';
import pic1 from '../images/Tricia-Noel_18_01.jpg';
import pic2 from '../images/Tricia-Noel_18_02.jpg';
import pic3 from '../images/Tricia-Noel_18_03.jpg';
import pic4 from '../images/Tricia-Noel_18_04.jpg';
import pic5 from '../images/Tricia-Noel_18_05.jpg';
import pic6 from '../images/Tricia-Noel_18_06.jpg';
import pic7 from '../images/Tricia-Noel_18_07.jpg';
import pic8 from '../images/Tricia-Noel_18_08.jpg';
import pic9 from '../images/Tricia-Noel_18_09.jpg';
import pic10 from '../images/Tricia-Noel_18_10.jpg';
import pic11 from '../images/Tricia-Noel_18_11.jpg';
import pic12 from '../images/Tricia-Noel_18_12.jpg';
import pic13 from '../images/Tricia-Noel_18_13.jpg';
import pic14 from '../images/Tricia-Noel_18_14.jpg';
import pic15 from '../images/Tricia-Noel_18_15.jpg';

const PhotoPage = ({ classes }) => (
  <div>
    <MastHead />
    <NavBar />
    <Divider />
    <section>
      <h2 className={classes.title}>Photos</h2>
      <img className={classes.smallDivider} src={line} alt="curved line" />
      <div className={classes.row}>
        <div className={classes.column}>
          <img className={classes.image} src={pic1} />
          <img className={classes.image} src={pic2} />
          <img className={classes.image} src={pic3} />
          <img className={classes.image} src={pic4} />
          <img className={classes.image} src={pic5} />
        </div>
        <div className={classes.column}>
          <img className={classes.image} src={pic6} />
          <img className={classes.image} src={pic7} />
          <img className={classes.image} src={pic8} />
          <img className={classes.image} src={pic9} />
          <img className={classes.image} src={pic10} />
        </div>
        <div className={classes.column}>
          <img className={classes.image} src={pic11} />
          <img className={classes.image} src={pic12} />
          <img className={classes.image} src={pic13} />
          <img className={classes.image} src={pic14} />
          <img className={classes.image} src={pic15} />
        </div>
      </div>
    </section>
  </div>
);

export default withRoot(withStyles(styles)(PhotoPage));
