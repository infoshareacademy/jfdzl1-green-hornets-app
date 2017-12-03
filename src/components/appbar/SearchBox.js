import React, { Component } from 'react';
import './index.css';


class SearchBox extends Component {
    render() {
        return (
            <div className="search">
                <input type='text' placeholder='Search for Bears'/>
                <input type='submit'/>
            </div>
        );
    }
}

export default SearchBox;
