import React, { Component } from 'react';
import './index.css';
import logo from '../images/logo.svg';
import SearchBox from './SearchBox'


class AppBar extends Component {
    render() {
        return (
            <div className="appbar">
                <div className="logo">
                    <img src={logo} width="100" height="50" />
                <SearchBox/>
                </div>
            </div>
        );
    }
}

export default AppBar;
