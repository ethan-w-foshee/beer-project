import axios from 'axios'
import { Component } from 'react';
import Like from './LikeButton.js';

const url = 'https://api.punkapi.com/v2/beers'

class Beer extends Component {
    state = {
        beerList: []
    }

    componentDidMount() {
        axios.get(`${url}`)
        .then(res => {
            const beerList = res.data;
            this.setState({beerList})
        })
    }

    render() {
        return (
            <ul className="Beers">
                {this.state.beerList.map(beer => 
                    <li key={beer.name}>
                        <h1>{beer.name}</h1>
                        <h2>{beer.tagline}</h2>
                        <img src={beer.image_url} alt="Beer"></img>
                        <p>{beer.description}</p>
                        <Like />
                        </li>)}
            </ul>
        );
    }
}

export default Beer