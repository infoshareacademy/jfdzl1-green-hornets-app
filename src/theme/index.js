const styles = theme => ({
  root: {
    flexGrow: 1,
    fontFamily: 'Roboto, sans-serif'
  },
  items: {
    direction: 'row',
    justify: 'center',
    alignItems: 'center'
  },
  fab: {
    position: 'absolute',
    background: '#126131',
    color: '#fff',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  }
});

export default styles;
