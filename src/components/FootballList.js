import React from 'react';
import Match from './Match';

const FootballList = (props) => {
    const matchesList = props.matches.map(match => {
        
        return (
            <Match
            homeTeam= {match.homeTeam.name}
            awayTeam= {match.awayTeam.name}>
            </Match>
        )
    })
    return (
        <ul>
        {matchesList}
        </ul>
    )
}

export default FootballList;