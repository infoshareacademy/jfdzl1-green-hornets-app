import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
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
    padding: 16
  },
  row: {
    width: '100%',
    padding: 10,
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
      <Grid item xs={12}>
        <form onSubmit={this.handleSubmit}>
          <Paper style={styles.paper}>
            <div style={styles.row}>
              <TextField
                placeholder="Name"
                name="name"
                onChange={this.handleChange}
                margin="normal"/>
            </div>
            <div style={styles.row}>
              <TextField
                placeholder="Brewery"
                name="brewery"
                onChange={this.handleChange}
                margin="normal"/>
            </div>
            <div style={styles.row}>
              <TextField
                placeholder="Style"
                name="style"
                onChange={this.handleChange}
                margin="normal"/>
            </div>
            <div style={styles.row}>
              <TextField
                placeholder="Description"
                name="desc"
                onChange={this.handleChange}
                margin="normal"/>
            </div>
            <div style={styles.row}>
              <TextField
                placeholder="Extract"
                name="extr"
                onChange={this.handleChange}
                multiline
                rowsMax="4"
                margin="normal"/>
            </div>
            <div style={styles.row}>
              <TextField
                placeholder="Image URL"
                name="image_url"
                onChange={this.handleChange}
                margin="normal"/>
            </div>
            <div>
              <Tooltip id="tooltip-icon" title="Add local to App">
                <Button raised color="primary" input type="submit" value="Add">
                  Add
                </Button>
              </Tooltip>
            </div>

            <Button raised color="link">
              <Link to="/listOfBeersy">Back to list</Link>
            </Button>
          </Paper>
        </form>
      </Grid>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddBeer);
