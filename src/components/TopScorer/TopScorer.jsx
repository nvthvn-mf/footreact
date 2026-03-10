import competitionTopScorer from '../../mockData/competitionTopScorer.json'

const TopScorer = () => {
    console.log(competitionTopScorer)
    const listTopScorer = competitionTopScorer
        .scorers.slice(0, 3).map(playerData =>
            <tr key={playerData.player.id}>
                <td>{playerData.player.name}</td>
                <td>{playerData.player.position}</td>
                <td>{playerData.team.name}</td>
                <td>{playerData.goals}</td>
            </tr>
        )
    return (
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Position </th>
                    <th>Équipe </th>
                    <th>Buts </th>
                </tr>
            </thead>
            <tbody>
                {listTopScorer}
            </tbody>
        </table>
    );
}

export default TopScorer;