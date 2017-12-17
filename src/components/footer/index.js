import React, { Component } from 'react';
import './index.css';

const today = new Date();

class Footer extends Component {

    render() {
        return (
            <div className="App-footer">
                <p className="App-footer-rights">&copy; {today.getFullYear()} All rights reserved - Lubeer</p>
                <ul className="App-footer-containerIcons">
                    <li className="App-footer-socialIcon">
                        <a href="https://github.com/infoshareacademy/jfdzl1-green-hornets-app" target="_blank">
                        <i className="fa fa-github"></i>
                        </a>
                    </li>
                    <li className="App-footer-socialIcon">
                        <a href="https://www.facebook.com/" target="_blank">
                        <i className="fa fa-facebook-square"></i>
                        </a>
                    </li>
                </ul>
                <a href="https://github.com/infoshareacademy/jfdzl1-green-hornets-app" target="_blank">
                    <i className="fa1 fa fa-github"></i>
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                    <i className="fa2 fa fa-facebook-square"></i>
                </a>
            </div>
        );
    }
}

export default Footer;
