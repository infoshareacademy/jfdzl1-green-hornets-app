import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import './index.css';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import primaryGreen from '../palete'
import {showNotification, toggleSidebar} from '../../UI/logic';
import {connect} from 'react-redux';


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

const mapDispatchToProps = dispatch => {
    return {
        showSnackbar: (message) => dispatch(showNotification('Hello iSA :)')),
        toggleSidebar: () => dispatch(toggleSidebar())
    }
}

class ButtonAppBar extends Component {
    render() {
        return (
            <div style={styles.root}>
                <AppBar position="static" style={primaryGreen}>
                    <Toolbar>
                        <IconButton style={styles.menuButton} color="contrast" aria-label="Menu">
                            <MenuIcon onClick={this.props.toggleSidebar}/>
                        </IconButton>
                        <Typography type="title" color="inherit" style={styles.flex}>
                            LUBEER
                        </Typography>
                        <Button color="contrast">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(ButtonAppBar);