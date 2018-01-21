import React, {Component} from 'react';
import { Route } from 'react-router-dom';
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
                <Footer/>
              </Grid>
            </div>
            <Sidebar/>
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
