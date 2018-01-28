import React from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Tooltip from 'material-ui/Tooltip';
import {push} from 'react-router-redux';

import {add} from '../state';
import {showNotification} from '../UI/state';

const mapDispatchToProps = dispatch => ({
    add: (data) => dispatch(add(data)),
    showMessage: (message) => dispatch(showNotification(message)),
    redirectTo: (url) => dispatch(push(url))
});

const styles = {
    paper: {
        marginTop: 10,
        marginBottom: 20,
        padding: 50,
        marginLeft:10
    },
    row: {
        width: '100%',
        paddingBottom: 15
    },
    button: {

        paddingTop: 20
    }
};

class AddBeer extends React.Component {

    state = {
        name: '',
        brewery: '',
        style: '',
        desc: '',
        extr: '',
        image_url: ''
    }

    handleSubmit = event => {
        if (this.state.name) {
            this.props.add(this.state);
            this.props.showMessage('Beer has been added');
            this.props.redirectTo('/listOfBeers');
        } else {
            this.props.showMessage('Please provide name');
        }
        event.preventDefault();
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <Grid container justify="center">
            <Grid item xs={12} lg={3} >
                <form onSubmit={this.handleSubmit}>
                    <Grid container justify="center">
                        <Grid item xs={12} lg={12} >
                    <Paper style={styles.paper}>
                        <div style={styles.row}>
                            <TextField id="full-width" fullWidth placeholder="Name" name="name" onChange={this.handleChange} margin="normal"/>
                        </div>
                        <div style={styles.row}>
                            <TextField id="full-width" fullWidth placeholder="Brewery" name="brewery" onChange={this.handleChange}
                                       margin="normal"/>
                        </div>
                        <div style={styles.row}>
                            <TextField id="full-width" fullWidth placeholder="Style" name="style" onChange={this.handleChange} margin="normal"/>
                        </div>
                        <div style={styles.row}>
                            <TextField id="full-width" fullWidth placeholder="Description" name="desc" onChange={this.handleChange} multiline
                                       rowsMax="8" margin="normal"/>
                        </div>
                        <div style={styles.row}>
                            <TextField id="full-width" fullWidth placeholder="Alcohol" name="alc" onChange={this.handleChange} margin="normal"/>
                        </div>
                        <div style={styles.row}>
                            <TextField id="full-width" fullWidth placeholder="Extract" name="extr" onChange={this.handleChange} margin="normal"/>
                        </div>
                        <div style={styles.row}>
                            <TextField id="full-width" fullWidth placeholder="Image URL" name="image_url" onChange={this.handleChange}
                                       margin="normal"/>
                        </div>
                        <Grid container justify="space-between" style={styles.button}>
                            <Button mini color="default" href="/listOfBeers">Back to list</Button>
                            <div>
                                <Tooltip id="tooltip-icon" title="Add beer to App">
                                    <Button raised color="primary" input="true" type="submit" value="Add">Add</Button>
                                </Tooltip>
                            </div>
                        </Grid>
                    </Paper>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
            </Grid>
        );
    }
}

export default connect(null, mapDispatchToProps)(AddBeer);
