import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { showNotification} from '../../UI/logic';

import './index.css';

const mapStateToProps = state => ({
    beerList: state.beer,
    query: state.query
});

const mapDispatchToProps = dispatch => {
  return {
    showSnackbar: (message) => dispatch(showNotification('Hello iSA :)')),
  }
};

class Dashboard extends Component {
  render() {
    return (
      <Grid item xs={12}>
        <Paper>
          <h1>Dashboard</h1>
          <div>
              {this.props.beerList}
            <button onClick={this.props.showSnackbar}>CLICK ME For notification!</button>
          </div>
        </Paper>
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
