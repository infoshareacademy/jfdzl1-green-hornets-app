import React, {Component} from 'react';
import './index.css';

class Footer extends Component {
    render() {
        return (
            <div className="App-footer">
                <p className="App-footer-rights">&copy;All rights reserved-Lubeer</p>
                <ul className="App-footer-containerIcons">

                    <li className="App-footer-socialIcon"><a
                        href="https://github.com/infoshareacademy/jfdzl1-green-hornets-www" target="_blank"><i
                        class="fa fa-github"></i></a></li>
                    <li className="App-footer-socialIcon"><a href="https://www.facebook.com/" target="_blank"><i
                        class="fa fa-facebook-square"></i></a></li>
                </ul>
            </div>
        );
    }
}
 export default Footer;
