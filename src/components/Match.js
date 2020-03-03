import React from 'react';

const Match = ({homeTeamName, awayTeamName, fullTimeScoreAwayTeam, fullTimeScoreHomeTeam}) => {

    return (
        <li>
        <p>{homeTeamName} vs {awayTeamName} {fullTimeScoreAwayTeam}, {fullTimeScoreHomeTeam} </p>
        </li>
    )
}

export default Match;