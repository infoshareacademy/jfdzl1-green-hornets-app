import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import Link from '../Link';

import { getBeer } from './state';

const styles = {
  paper: {
    marginTop: 10,
    marginBottom: 20,
    padding: 16
  }
}

const mapStateToProps = state => ({
  beer: state.beer.data
});

const mapDispatchToProps = dispatch => ({
  getBeer: (id) => dispatch(getBeer(id))
});

class Beer extends React.Component {

  componentWillMount() {
    const id = this.props.match.params.beerId;
    this.props.getBeer(id);
  }

  render() {
    return(
      <Grid item xs={12}>
        <Paper style={styles.paper}>
          <h1>Beer: {this.props.beer.Nazwa_piwa}</h1>
          <p>Styl: {this.props.beer.Styl}</p>

          <Link to="/listOfBeers">Back to list</Link>

        </Paper>
      </Grid>
    );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Beer);
