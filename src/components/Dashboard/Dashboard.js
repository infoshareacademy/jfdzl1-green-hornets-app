import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import {showNotification} from '../UI/state';
import Typography from 'material-ui/Typography';
import banner from '../../images/banner.jpg';
import {LineChart, BarChart, Bar, Line, XAxis, YAxis, PieChart, Pie,} from 'recharts';


import './index.css';

const styles = {
    paper: {
        marginTop: 25,
        padding: 16,
        justify: "center"
    },

    typo: {
        marginBottom: 15,
        justify: "center"
    },

    stats: {
        marginTop: 8,
        padding: 16,
        justify: "center"
    },


};


const mapDispatchToProps = dispatch => {
    return {
        showSnackbar: (message) => dispatch(showNotification('Hello iSA :)')),
    }
};

class Dashboard extends Component {
    render() {
        return (
            <Grid container justify="center">
                <Grid item xs={12} md={8} lg={8}>
                    <Paper style={styles.paper}>
                        <img src={banner} width="100%" height="100%"/>
                    </Paper>
                <Grid container justify="center">
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper style={styles.paper}>
                            <Typography type="headline" component="h3"style={styles.typo}>
                                Lubeer to wyszukiwarka niepowtarzalnych smaków lubelszczyzny, piwa warzonego z sercem i miłością do tego wspaniałego trunku.
                            </Typography>
                            <Typography component="p">
                                Dzięki Lubeer odnajdziesz to co najbardziej interesuje Cię w każdym z proponowanych piw.
                                Zaawansowana wyszukiwarka pozwoli Ci znaleźć piwo, które najbardziej odpowiada Twoim
                                gustom.

                                Takie filtry jak ciężkość, kolor, nutę zapachową czy zawartość alkoholu pomogą odnaleźć
                                to co najważniejsze w najlepszym piwie dla każdego z nas.

                                Tak jak Ty jesteśmy miłośnikami złocistego trunku dlatego stworzyliśmy aplikację, którą
                                można pokochać jak piwo. Kiedy już znajdziesz najlepszą warkę dla siebie, wskażemy Ci
                                miejsce gdzie możesz ją zakupić. Wypróbuj już teraz i ciesz się łatwością z jaką możesz
                                tworzyć własne statystyki piw i browarów lokalnych. </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Paper style={styles.stats}>
                        <Typography type="headline" component="h3" style={styles.typo}> Visitor </Typography>
                            <BarChart width={300} height={242} data={data}>
                                <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
                                <XAxis dataKey="name" stroke="#8884d8"/>
                                <YAxis/>
                                <Bar dataKey="pv" fill="#0B622F"/>
                                <Bar dataKey="uv" fill="#CA2F23"/>
                            </BarChart>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Paper style={styles.stats}>
                            <Typography type="headline" component="h3"style={styles.typo}> Users </Typography>
                            <PieChart width={300} height={242}>
                                <Pie data={dataCustomers} dataKey="uv" nameKey="name" cx="50%" cy="50%" outerRadius={30}
                                     fill="#0B622F"/>
                                <Pie data={data} dataKey="uv" nameKey="name" cx="50%" cy="50%" innerRadius={40}
                                     outerRadius={60}
                                     fill="#CA2F23" label/>
                            </PieChart>
                        </Paper>
                    </Grid>
                    </Grid>
                </Grid>
                </Grid>
        );
    }
}

const data = [
    {name: 'January', uv: 1000, pv: 1000, amt: 1000},
    {name: 'February', uv: 1000, pv: 1500, amt: 1000},
    {name: 'March', uv: 1500, pv: 1000, amt: 1500},
    {name: 'April', uv: 1500, pv: 1500, amt: 1000},
    {name: 'May', uv: 1500, pv: 1500, amt: 1000},

];
const dataCustomers = [
    {name: 'January', uv: 2000, pv: 4300, amt: 4400},
    {name: 'February', uv: 1000, pv: 3390, amt: 2500},
    {name: 'March', uv: 2181, pv: 1800, amt: 5290},
    {name: 'May', uv: 4000, pv: 2000, amt: 2000},

];

export default connect(null, mapDispatchToProps)(Dashboard);
