import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import {connect} from 'react-redux';
import Link from '../Link';

import {getBeer} from './state';

const mapStateToProps = state => ({
    beer: state.beer.data
});

const mapDispatchToProps = dispatch => ({
    getBeer: (id) => dispatch(getBeer(id))
});

const styles = {
    paper: {
        marginTop: 10,
        marginBottom: 20,
        padding: 50,
        marginLeft: 10
    },
    row: {
        width: '100%',
        paddingBottom: 15
    },
    button: {
        paddingTop: 20
    }
};

class Beer extends React.Component {

    componentWillMount() {
        const id = this.props.match.params.beerId;
        this.props.getBeer(id);
    }

    render() {
        return (
            <Grid container justify="center">
                <Grid item xs={12} sm={11} md={8} lg={8}>
                    <Paper style={styles.paper}>
                        <Grid container>
                            <Grid container xs={12} sm={12} md={4} lg={4} justify="center">
                                <img src={this.props.beer.image_url} alt={this.props.beer.name} height={450}/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={8} lg={8}>
                                <h1>{this.props.beer.name}</h1>
                                <p><strong>Produkcja:</strong> {this.props.beer.brewery}</p>
                                <p><strong>Styl:</strong> {this.props.beer.style}</p>
                                <p><strong>Zawartość alkoholu:</strong> {this.props.beer.alc}</p>
                                <p><strong>Ekstrakt:</strong> {this.props.beer.extr}</p>
                                <Grid item xs={12}><h4>Opis:</h4> {this.props.beer.desc}</Grid>
                            </Grid>
                        </Grid>
                        <Grid container xs={12} justify="flex-end" style={styles.button}>
                            <Button mini color="default" href="/listOfBeers">Powrót do listy</Button>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Beer);
