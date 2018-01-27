import React from 'react';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import primaryGreen from '../palete'
import {toggleSidebar} from '../UI/state';

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(toggleSidebar())
});

const ButtonAppBar = (props) => (
  <div style={styles.root}>
    <AppBar position="static" style={primaryGreen}>
      <Toolbar>
        <IconButton style={styles.menuButton} color="primary" aria-label="Menu">
          <MenuIcon onClick={props.toggleSidebar}/>
        </IconButton>
        <Typography type="title" color="inherit" style={styles.flex}>
          LUBEER
        </Typography>
        <Button color="primary">Login</Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default connect(null, mapDispatchToProps)(ButtonAppBar);
