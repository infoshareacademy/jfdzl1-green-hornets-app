import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography';

import {init} from './state';

const mapStateToProps = state => ({
  beers: state.beers.list
});

const mapDispatchToProps = dispatch => ({
  initData: () => dispatch(init())
});

class BeersList extends Component {

  componentWillMount() {
    this.props.initData();
  }

  render() {
    return (
      <div>
        <Paper>
        <ul>
          {this.props.beers.map(local => (
            <li key={BeersList.id}>
              <Typography type="title" gutterBottom>
              <Link to={`/beer/${BeersList.id}`}>{BeersList.name}</Link>
              </Typography>
            </li>
          ))}
        </ul>
        </Paper>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BeersList);
