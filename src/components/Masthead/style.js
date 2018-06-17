export default function styles(theme) {
  return {
    container: {
      display: 'flex',
      'flex-flow': 'row wrap',
      'align-items': 'center',
      'justify-content': 'center',
      padding: '10px 0',
      [theme.breakpoints.down('md')]: {
        display: 'grid',
        'grid-template-columns': 'auto auto auto'
      }
    },
    name: {
      'font-family': 'Hijrnotes Regular',
      margin: 0,
      'font-size': '31.2px',
      '&:first-child': {
        'text-align': 'center',
        flex: '0 0 100%',
        order: 1
      },
      '&:last-child': {
        'text-align': 'center',
        flex: '0 0 100%',
        order: 3
      },
      [theme.breakpoints.down('md')]: {
        flex: '0 1 auto',
        'margin-bottom': 0,
        'font-size': '39px'
      }
    },
    smallGraphic: {
      'text-align': 'center',
      order: 2,
      'margin-bottom': '5px',

      display: 'block',
      'text-indent': '-10000px',
      width: '50px',
      height: '50px',
      [theme.breakpoints.down('md')]: {
        flex: '0 0 135px',
        margin: 0,
        width: '50px',
        height: '50px'
      }
    }
  };
}
