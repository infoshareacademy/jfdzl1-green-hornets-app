import React, { Component } from 'react';
import { beers } from '../../data/beerlist';

class List extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            name: '',
            desc: '',
            kind: '',
            vol: '',
            beers
        }
    }

    handleSubmit(event) {
        this.setState({
            beers: this.state.beers.concat({
                name: this.state.name,
                description: this.state.desc,
                kind: this.state.kind,
                voltage: this.state.voltage
            })
        });
        event.preventDefault();
    }

    handleChange(event) {
        let name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Name" onChange={this.handleChange} />
                    <input type="text" name="desc" placeholder="Description" onChange={this.handleChange} />
                    <input type="text" name="kind" placeholder="Kind" onChange={this.handleChange} />
                    <input type="text" name="vol" placeholder="Voltage" onChange={this.handleChange} />
                    <input type="submit" value="Dodaj bro!" />
                </form>

                {this.state.beers.map((beer, index) => (
                    <div key={index}>
                        <h4>{beer.name}</h4>
                        <p>{beer.description}</p>
                        <p>Kind: {beer.kind}, vol: {beer.voltage}</p>
                        <hr />
                    </div>
                ))}
            </div>
        );
    }
}

export default List;