import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import {Link} from 'react-router-dom';

import BeersList from './components/BeerList';
import BreweriesList from './components/BreweriesList';
import Beer from './components/Beer';
import theme from './theme';
import AppBar from './components/Appbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Notifications from './components/UI/Notifications';
import AddBeer from './components/AddBeer';
import NotYet from './components/NotYet';
import { store, history } from './store';

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <div className={classes.root}>
              <Grid container className={classes.items}>
                <AppBar/>
                <Route exact path="/" component={Dashboard}/>
                <Route path='/listOfBeers' component={BeersList}/>
                <Route path='/listOfBreweries' component={BreweriesList}/>
                <Route path='/notyet' component={NotYet}/>
                <Route path='/beer/:beerId' component={Beer}/>
                <Route path='/add' component={AddBeer}/>
              </Grid>
            </div>
            <Sidebar/>
            <Notifications/>
            <Link to="/add">
              <Button fab className={classes.fab}>
                <AddIcon />
              </Button>
            </Link>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(theme)(App);
