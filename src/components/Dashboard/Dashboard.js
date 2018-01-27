import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import {showNotification} from '../UI/state';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';


import './index.css';

const styles = {
    paper: {
        marginTop: 10,
        padding: 16,
        justify: "center"
    }
};

const mapDispatchToProps = dispatch => {
    return {
        showSnackbar: (message) => dispatch(showNotification('Hello iSA :)')),
    }
};

class Dashboard extends Component {
    render() {
        return (
            <Grid container justify="center">
                <Grid item xs={8}>
                    <Paper style={styles.paper}>
                        <img src={"<%= asset_url('../images/banner.jpg') %>"} />
                    </Paper>
                </Grid>
                <Grid container justify="center">
                    <Grid item xs={4}>
                        <Paper style={styles.paper}>
                            <Typography type="headline" component="h3">
                                This is a sheet of paper.
                            </Typography>
                            <Typography component="p" >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={styles.paper}>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={styles.paper}>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default connect(null, mapDispatchToProps)(Dashboard);
