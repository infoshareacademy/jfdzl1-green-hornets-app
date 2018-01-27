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

import logo from '../../images/lubeer_logo.svg'

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: '#ffffff'
  }
};

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(toggleSidebar())
});

const ButtonAppBar = (props) => (
  <div style={styles.root}>
    <AppBar position="static" style={primaryGreen}>
      <Toolbar>
        <IconButton style={styles.menuButton} color="disabled" aria-label="Menu">
          <MenuIcon onClick={props.toggleSidebar}/>
        </IconButton>
        <Typography type="title" color="inherit" style={styles.flex}>
          <img src={logo} width="100" height="50" />
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default connect(null, mapDispatchToProps)(ButtonAppBar);
