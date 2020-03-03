import React from 'react';
import Match from './Match';

const FootballList = (props) => {
    const matchesList = props.matches.map(match => {
        
        return (
            <Match
            homeTeamName= {match.homeTeam.name}
            awayTeamName= {match.awayTeam.name}
            fullTimeScoreHomeTeam = {match.score.fullTime.homeTeam}
            fullTimeScoreAwayTeam = {match.score.fullTime.awayTeam}
            >
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