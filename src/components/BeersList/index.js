import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography';

import {init} from './state';

const mapStateToProps = state => ({
  beers: state.beers.list
});

const mapDispatchToProps = dispatch => ({
  initData: () => dispatch(init())
});

class BeersList extends Component {

  componentWillMount() {
    this.props.initData();
  }

  render() {
    return (
      <div>
        <Paper>
        <ul>
          {this.props.beers.map(local => (
            <li key={BeersList.id}>
              <Typography type="title" gutterBottom>
              <Link to={`/beer/${BeersList.id}`}>{BeersList.name}</Link>
              </Typography>
            </li>
          ))}
        </ul>
        </Paper>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BeersList);

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Grid from 'material-ui/Grid';
import {database} from "../../firebase";

import FaAngellist from 'react-icons/lib/fa/angellist';
import FaDaschbord from 'react-icons/lib/fa/dashboard';
import FaListOfBrewers from 'react-icons/lib/fa/fort-awesome';
import FaListOfBeers from 'react-icons/lib/fa/beer';
import FaListOfCities from 'react-icons/lib/fa/bank';
import FaAddBeer from 'react-icons/lib/fa/plus';
import FaSearch from 'react-icons/lib/fa/search';
import './index.css';

class BeerList extends Component {
    state = {
        beerList: null
    }

    componentDidMount() {
        database.ref('beers')
            .on(
                'value',
                (snapshot) => {
                    this.setState({
                        beerList: snapshot.val()
                    })
                }
            )
    }

    render() {
        return (
            <Grid item xs={12}>
                <h1>LISTA PIW</h1>
                <div>
                    {
                        this.state.beerList &&
                        Object.entries(this.state.beerList)
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

export default BeerList
