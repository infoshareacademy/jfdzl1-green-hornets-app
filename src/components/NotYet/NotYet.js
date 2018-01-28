import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import './index.css';

const styles = {
  paper: {
    marginTop: 10,
    marginBottom: 20,
    padding: 16
  }
}

class NotYet extends Component {

  render() {
    return (
      <Grid item xs={12}>
        <Paper style={styles.paper}>
          <h2>Przepraszamy</h2>
          <h3>Funkcjonalność niedostępna, zapraszamy wkrótce.</h3>
        </Paper>
      </Grid>
    );
  }
}

export default NotYet
