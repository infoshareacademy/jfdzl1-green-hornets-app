import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import theme from './theme';
import AppBar from './components/appbar';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import Dashboard from "./components/dashboard";
import SearchBox from './components/appbar/SearchBox'


import './App.css';

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Router>
        <div className={classes.root}>
          <Grid container className={classes.items}>
            <AppBar/>
            <Sidebar/>
            <Route exact path="/" component={Dashboard}/>
            <Footer/>
          </Grid>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(theme)(App);
