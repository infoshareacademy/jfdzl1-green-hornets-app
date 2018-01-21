import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Grid from 'material-ui/Grid';
import {database} from "../../firebase";
import {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import {init} from '../state';
import {connect} from 'react-redux';

import './index.css';

const mapStateToProps = state => ({
  beers: state.beers.beers
});

const mapDispatchToProps = dispatch => ({
  initBeers: () => dispatch(init())
});

class BeerList extends Component {

  componentWillMount() {
    this.props.initBeers();
  }

  render() {
    return (
      <Grid item xs={12}>
        <h1>LISTA PIW</h1>
        <div>
          {
            this.props.beers && this.props.beers
              .map(beer => (
                  <div key={beer.id}>
                    <p>Nazwa piwa: {beer.name}</p>
                    <p>Produkcja: {beer.brewery}</p>
                  </div>
                )
              )
          }
        </div>
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerList)