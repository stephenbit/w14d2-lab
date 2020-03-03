import React from 'react';

const Match = ({homeTeam, awayTeam}) => {

    return (
        <li>
        <p>{homeTeam} vs {awayTeam}</p>
        </li>
    )
}

export default Match;