import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Grid from 'material-ui/Grid';

import FaAngellist from 'react-icons/lib/fa/angellist';
import FaDaschbord from 'react-icons/lib/fa/dashboard';
import FaListOfBrewers from 'react-icons/lib/fa/fort-awesome';
import FaListOfBeers from 'react-icons/lib/fa/beer';
import FaListOfCities from 'react-icons/lib/fa/bank';
import FaAddBeer from 'react-icons/lib/fa/plus';
import FaSearch from 'react-icons/lib/fa/search';
import './index.css';

class Sidebar extends Component {
  render() {
    return (
      <Grid item xs={12}>
        <h1>NAWIGACJA</h1>
        <ul>
          <li><Link to="/"><FaDaschbord/> Dashboard</Link></li>
          <li><Link to="/top"><FaAngellist/> Top 10- najlepiej oceniane</Link></li>
          <li><Link to="/listOfBrewers"><FaListOfBrewers/> Lista browarów</Link></li>
          <li><Link to="/listOfBeers"><FaListOfBeers/> Lista piw</Link></li>
          <li><Link to="/listOfCities"><FaListOfCities/> Lista miast</Link></li>
          <li><Link to="/advancedSearch"><FaSearch/> Wyszukiwanie zaawansowane</Link></li>
          <li><Link to="/add"><FaAddBeer/> Dodaj piwo</Link></li>
        </ul>
      </Grid>
    );
  }
}

export default Sidebar;
