export default function styles(theme) {
  return {
    title: {
      'font-family': 'Lulu Clean One Bold',
      'text-align': 'center'
    },
    smallDivider: {
      display: 'block',
      height: '50px',
      width: '200px',
      margin: '0 auto 30px'
    },
    infoContainer: {
      display: 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'flex-grow': 1,
      'flex-basis': 0,
      padding: '0 15px',
      'text-align': 'left'
    },
    anchor: {
      'text-transform': 'uppercase',
      color: 'rgb(146, 148, 146)',
      'text-decoration': 'none',
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'transparent',
      'background-color': 'transparent'
    }
  };
}
