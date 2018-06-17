export default function styles(theme) {
  return {
    header: {
      'line-height': 1.6,
      'text-transform': 'none',
      'letter-spacing': 'normal',
      'text-align': 'center',
      'background-color': 'transparent',
      'background-image': 'none, none',
      'background-position': 'center center, center top',
      'background-repeat': 'no-repeat, repeat',
      padding: '25px 0',
      margin: '0 auto',
      'max-width': '1170px',
      [theme.breakpoints.down('sm')]: {
        'background-size': '1200px auto, auto',
        padding: '30px 0'
      },
      [theme.breakpoints.down('md')]: {
        'background-size': '1600px auto, auto',
        padding: '50px 0'
      }
    },
    name: {
      'font-family': 'Hijrnotes Regular',
      'font-weight': 400,
      'font-style': 'normal',
      'line-height': 1,
      'font-size': '36px',
      margin: 0,
      '&:first-child': {
        'margin-bottom,': '37px'
      },
      '&:last-child': {
        'margin-top': ',3px'
      },
      [theme.breakpoints.up('sm')]: {
        'font-size': '54px'
      },
      [theme.breakpoints.up('md')]: {
        'font-size': '63px'
      },
      [theme.breakpoints.up('lg')]: {
        'font-size': '72px'
      }
    },
    span: {
      'font-family': 'Lulo Clean One Bold',
      'font-weight': 400,
      'font-style': 'normal',
      'text-transform': 'uppercase',
      'letter-spacing': 'normal'
    },
    section: {
      padding: '0 15px',
      'margin-bottom': '30px'
    },
    portrait: {
      display: 'block',
      'object-fit': 'contain',
      width: '50%',
      margin: '0 auto 30px',
      'box-sizing': 'border-box',
      border: '8px solid rgb(255, 255, 255)',
      'box-shadow': 'rgba(0, 0, 0, 0.25) 0 1px 4px'
    },
    dateHeading: {
      'font-family': 'Hijrnotes Regular',
      'font-weight': 400,
      'font-style': 'normal',
      'line-height': 1.4,
      'text-transform': 'none',
      'letter-spacing': 'normal',
      'font-size': '1.9rem',
      color: 'rgb(146,148,146)',
      margin: '0 0 30px'
    },
    date: {
      'font-family': 'Lulo Clean One Bold',
      'font-size': '21.6px',
      'text-transform': 'uppercase',
      [theme.breakpoints.up('sm')]: {
        'font-size': '25.2px'
      },
      [theme.breakpoints.up('md')]: {
        'font-size': '28.8px'
      },
      [theme.breakpoints.up('lg')]: {
        'font-size': '32.4px'
      }
    },
    storySection: {
      'background-color': 'rgb(235, 235, 235)',
      padding: '50px 0'
    },
    storyHeading: {
      'font-family': 'Lulo Clean One Bold',
      'font-size': '21.6px',
      'text-transform': 'uppercase',
      'text-align': 'center',
      [theme.breakpoints.down('sm')]: {
        'font-size': '25.2px'
      },
      [theme.breakpoints.down('md')]: {
        'font-size': '28.8px'
      },
      [theme.breakpoints.down('lg')]: {
        'font-size': '32.4px'
      }
    },
    storyParagraph: {
      'font-size': '16.8px',
      '&:not(:last-child)': {
        'padding-bottom': '14.5px'
      }
    },
    storyDiv: {
      padding: '0 15px',
      [theme.breakpoints.up('md')]: {
        margin: '0 8.333%'
      }
    }
  };
}
