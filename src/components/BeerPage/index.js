import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import {database} from "../../firebase";

import './index.css';

class BeerPage extends Component {
    state = {
        beerPage: null
    }

    componentDidMount() {
        database.ref('beers')
            .on(
                'value',
                (snapshot) => {
                    this.setState({
                        beerPage: snapshot.val()
                    })
                }
            )
    }

    render() {
        return (
            <Grid item xs={12}>
                <h1>STRONA PIWA</h1>
                <div>
                    {
                        this.state.beerPage &&
                        Object.entries(this.state.beerPage)
                            .map(
                                ([key, value]) => (
                                    <div key={key}>
                                        <p>Nazwa piwa: {value.name}</p>
                                        <p>Produkcja: {value.brewery}</p>
                                    </div>
                                )
                            )
                    }
                </div>
            </Grid>
        );
    }
}

export default BeerPage