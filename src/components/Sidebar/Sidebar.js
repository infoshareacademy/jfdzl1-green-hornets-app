import React from 'react';
import {connect} from 'react-redux';
import Drawer from 'material-ui/Drawer';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import FaAngellist from 'react-icons/lib/fa/angellist';
import FaDaschbord from 'react-icons/lib/fa/dashboard';
import FaListOfBrewers from 'react-icons/lib/fa/fort-awesome';
import FaListOfBeers from 'react-icons/lib/fa/beer';
import FaListOfCities from 'react-icons/lib/fa/bank';
import FaAddBeer from 'react-icons/lib/fa/plus';
import FaSearch from 'react-icons/lib/fa/search';
import Divider from 'material-ui/Divider';

import Link from '../Link'
import {toggleSidebar} from './../UI/state';
import './index.css';

const mapStateToProps = state => ({
  open: state.ui.sidebar.open
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(toggleSidebar())
});

const Sidebar = (props) => (
  <Drawer open={props.open} onClose={props.toggleSidebar}>
    <div
      tabIndex={0}
      role="button"
      onClick={props.toggleSidebar}
      onKeyDown={props.toggleSidebar}
    >
      <List>
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <FaDaschbord/>
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
          </ListItem>
        </Link>
        <Divider/>
        <Link to="/top">
          <ListItem button>
            <ListItemIcon>
              <FaAngellist/>
            </ListItemIcon>
            <ListItemText primary="Top 10- najlepiej oceniane"/>
          </ListItem>
        </Link>
        <Divider/>
        <Link to="/listOfBrewers">
          <ListItem button>
            <ListItemIcon>
              <FaListOfBrewers/>
            </ListItemIcon>
            <ListItemText primary="Lista browarów"/>
          </ListItem>
        </Link>
        <Divider/>
        <Link to="/listOfBeers">
          <ListItem button>
            <ListItemIcon>
              <FaListOfBeers/>
            </ListItemIcon>
            <ListItemText primary="Lista piw"/>
          </ListItem>
        </Link>
        <Divider/>
        <Link to="/listOfCities">
          <ListItem button>
            <ListItemIcon>
              <FaListOfCities/>
            </ListItemIcon>
            <ListItemText primary="Lista miast"/>
          </ListItem>
        </Link>
        <Divider/>
        <Link to="/advancedSearch">
          <ListItem button>
            <ListItemIcon>
              <FaSearch/>
            </ListItemIcon>
            <ListItemText primary="Wyszukiwanie zaawansowane"/>
          </ListItem>
        </Link>
        <Divider/>
        <Link to="/add">
          <ListItem button>
            <ListItemIcon>
              <FaAddBeer/>
            </ListItemIcon>
            <ListItemText primary="Dodaj piwo"/>
          </ListItem>
        </Link>
      </List>
    </div>
  </Drawer>
);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
