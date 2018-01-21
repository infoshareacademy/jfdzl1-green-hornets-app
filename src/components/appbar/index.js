import React from 'react';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, {MenuItem} from 'material-ui/Menu';
import primaryGreen from '../palete'
import {toggleSidebar} from '../../UI/logic';


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


class ButtonAppBar extends React.Component {

    state = {
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleRequestClose = () => {
        this.setState({anchorEl: null});
    };


    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);


        return (
            <div style={styles.root}

            >
                <AppBar position="static" style={primaryGreen}>
                    <Toolbar>
                        <IconButton style={styles.menuButton} color="contrast" aria-label="Menu">
                            <MenuIcon onClick={this.props.toggleSidebar}/>
                        </IconButton>
                        <Typography type="title" color="inherit" style={styles.flex}>
                            LUBEER
                        </Typography>
                        <Button color="contrast">Login</Button>
                        <div ref={(item) => {
                            this.accountCircle = item
                        }}>
                            <AccountCircle
                                onClick={this.handleMenu}
                            />
                            <Menu
                                open={open}
                                anchorEl={this.accountCircle}
                                onRequestClose={this.handleRequestClose}
                            >
                                <MenuItem onClick={this.handleRequestClose}>Change email</MenuItem>
                                <MenuItem onClick={this.handleRequestClose}>Change password</MenuItem>
                                <MenuItem onClick={this.handleRequestClose}>Logout</MenuItem>
                            </Menu>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(ButtonAppBar);
