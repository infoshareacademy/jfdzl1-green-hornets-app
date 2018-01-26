import React, {Component} from 'react';
import Link from '../Link';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import StarIcon from 'material-ui-icons/Star';

import {init} from '../state';
import {connect} from 'react-redux';

import './index.css';

const styles = {
  paper: {
    marginTop: 10,
    marginBottom: 20,
    padding: 16
  }
}

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
        <Paper style={styles.paper}>
          <h1>LISTA PIW</h1>
          <List>
            {
              this.props.beers && this.props.beers
                .map(beer => (
                    <div key={beer.id}>
                      <ListItem button>
                        <Link to={`/beer/${beer.id}`}>
                          <ListItemText primary={beer.Nazwa_piwa} secondary={beer.Styl}/>
                        </Link>
                        <ListItemSecondaryAction>
                          <IconButton aria-label="Add to favorites">
                            <StarIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                      <Divider />
                    </div>
                  )
                )
            }
          </List>
        </Paper>
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerList)