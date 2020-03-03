import React from 'react';

const Match = ({homeTeamName, awayTeamName, fullTimeScoreAwayTeam, fullTimeScoreHomeTeam}) => {

    return (
        <li>
        <p>{homeTeamName} ({fullTimeScoreHomeTeam} - {fullTimeScoreAwayTeam}) {awayTeamName}</p>
        </li>
    )
}

export default Match;