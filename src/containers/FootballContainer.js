import React, { Component } from 'react';
import FootballList from '../components/FootballList'

class FootballContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            matches: []
        }

    }

    componentDidMount() {
        fetch('https://api.football-data.org/v2/competitions/CL/matches', {
            headers: { 'X-Auth-Token': '059894eaf0bb4deabd324cd6d7e3dbd3' }
        })
            .then(response => response.json())
            .then(data => this.setState({matches: data.matches}))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <FootballList matches = {this.state.matches} />
        );
    }
}
export default FootballContainer;
