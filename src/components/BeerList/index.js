import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Grid from 'material-ui/Grid';
import {database} from "../../firebase";
import {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import { init } from '../state';
import { connect } from 'react-redux';

import './index.css';

const mapDispatchToProps = dispatch => ({
       initBeers: () => dispatch(init())
});

class BeerList extends Component {

    componentWillMount() {
        this.props.initBeers();
    }

    render() {
        return (
            <Grid item xs={12}>
                <h1>LISTA PIW</h1>
                <div>
                    {
                        this.props.beers &&
                        Object.entries(this.props.beers)
                            .map(
                                ([key, value]) => (
                                    <div key={key}>
                                        <p>Nazwa piwa: {this.props.beer}</p>
                                        <p>Produkcja: {this.props.brewery}</p>
                                    </div>
                                )
                            )
                    }
                </div>
            </Grid>
        );
    }
}

export default connect(null, mapDispatchToProps)(BeerList)