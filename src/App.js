import React, {Component} from 'react';
import { ConnectedRouter } from 'react-router-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { store, history } from './store.js';
import Grid from 'material-ui/Grid';

import theme from './theme';
import BeersList from './components/BeersList'
import AppBar from './components/appbar';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import Dashboard from "./components/dashboard";

import './App.css';

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
        <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <div>
              <Grid container>
                <AppBar/>
                <Sidebar/>
                <Route exact path="/" component={Dashboard}/>
                <Route path='/listOfBeers' component={BeersList}/>
                <Footer/>
              </Grid>
            </div>
          </div>
       </ConnectedRouter>
        </Provider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App;
