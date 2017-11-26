import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AppBar from './components/appbar';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import Dashboard from "./components/dashboard";

import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <AppBar/>
                    <Sidebar/>
                    <Route exact path="/" component={Dashboard}/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
