import Typography from 'typography';
import {
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY
} from 'typography-breakpoint-constants';

const options = {
  bodyColor: 'white',
  baseFontSize: '10px',
  scaleRatio: 2
};

const typography = new Typography(options);

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
