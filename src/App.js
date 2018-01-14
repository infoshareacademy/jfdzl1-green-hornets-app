import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import BeersList from './components/BeerList'

import theme from './theme';
import AppBar from './components/appbar';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import Dashboard from "./components/dashboard";
import Notifications from './UI/Notifications';
import { store, history } from './store';

import './App.css';

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
                <Sidebar/>
                <Route exact path="/" component={Dashboard}/>
                <Route path='/listOfBeers' component={BeersList}/>
                <Footer/>
              </Grid>
            </div>
            <Notifications/>
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
