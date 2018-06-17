const styles = theme => ({
  title: {
    'text-align': 'center'
  },
  smallDivider: {
    display: 'block',
    height: '50px',
    width: '200px',
    margin: '0 auto 30px'
  },
  row: {
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'center',
    'align-items': 'center',
    padding: '0 4px'
  },
  column: {
    flex: '100%',
    'max-width': '100%',
    padding: '0 4px',
    [theme.breakpoints.down('md')]: {
      flex: '50%',
      'max-width': '100%'
    },
    [theme.breakpoints.down('lg')]: {
      flex: '25%',
      'max-width': '100%'
    }
  },
  image: {
    'margin-top': '8px',
    'vertical-align': 'middle',
    width: '100%',
    'box-shadow': '0 1px 4px rgba(0, 0, 0, 0.25)'
  }
});

export default styles;
