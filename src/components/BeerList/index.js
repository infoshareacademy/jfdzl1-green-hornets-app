import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import {init} from '../state';
import {connect} from 'react-redux';

import './index.css';

const mapStateToProps = state => ({
  beers: state.beers.beers
});

const mapDispatchToProps = dispatch => ({
  initBeers: () => dispatch(init())
});

const styles = {
  link: {
    textDecoration: 'none'
  }
}

class BeerList extends Component {

  componentWillMount() {
    this.props.initBeers();
  }

  render() {
    return (
      <Grid item xs={12}>
        <h1>LISTA PIW</h1>
        <List>
          {
            this.props.beers && this.props.beers
              .map(beer => (
                <Link style={styles.link} to={`/beer/${beer.id}`} key={beer.id}>
                  <ListItem button>
                    <ListItemText primary={beer.name} secondary={beer.brewery} />
                  </ListItem>
                  <Divider />
                </Link>
                )
              )
          }
        </List>
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerList)