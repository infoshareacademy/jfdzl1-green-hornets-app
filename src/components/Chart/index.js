import React, {Component} from 'react';
import {Bar, BarChart, CartesianGrid, XAxis, YAxis, Legend, Tooltip,LineChart,Line,PieChart,Pie} from 'recharts';
import Grid from 'material-ui/Grid';

class Chart extends Component {

    state = {
        direction: 'row',
        justify: 'center',
        alignItems: 'center',
    };
    render() {
        const {classes} = this.props;
        const {alignItems, direction, justify} = this.state;

        return (

            <div>
                <Grid container spacing={10}>
                    <h1>Statystyki</h1>
                    <Grid item xs={12}>
                        <Grid
                            container
                            alignItems={alignItems}
                            direction={direction}
                            justify={justify}
                        >

                            <Grid item xs={6}>
                                <h2>Użytkownicy</h2>
                                <BarChart width={500}
                                          height={400}
                                          data={data}
                                          margin={{ top: 5, right: 0, left: 10, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="name"/>
                                    <YAxis/>
                                    <Tooltip/>
                                    <Legend/>
                                    <Bar dataKey="pv" fill="#8884d8"/>
                                    <Bar dataKey="uv" fill="#82ca9d"/>
                                </BarChart>
                            </Grid>
                            <Grid item xs={6}>
                                <h2> Dodane Piwa</h2>
                                <LineChart
                                    width={500}
                                    height={400}
                                    data={data}
                                    margin={{ top: 5, right: 0, left: 10, bottom: 5 }}
                                >
                                    <XAxis dataKey="name" />
                                    <Tooltip />
                                    <CartesianGrid stroke="#f5f5f5" />
                                    <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                                    <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
                                </LineChart>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


const data = [
    {name: 'January', uv: 1000, pv: 1000, amt: 1000, cx:200, cy:340},
    {name: 'February', uv: 1000, pv: 1500, amt: 1000, cx:200, cy:560},
    {name: 'March', uv: 1500, pv: 1000, amt: 1500, cx:200, cy:21},
    {name: 'April', uv: 1500, pv: 1500, amt: 1000, cx:200, cy:85},
    {name: 'May', uv: 1500, pv: 1500, amt: 1000, cx:200, cy:169},

];

export default Chart;
