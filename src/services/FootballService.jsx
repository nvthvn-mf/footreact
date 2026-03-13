import { get } from './Network';

export const fetchLigue1Standings = async () => {
    const data = await get('/competitions/FL1/standings');

    // On garde la logique de formatage ici
    return data.standings[0].table.slice(0, 5).map(item => ({
        id: item.team.id,
        pos: item.position,
        team: item.team.shortName,
        p: item.playedGames,
        pts: item.points
    }));
};

export const fetchCompetitionStandings = async (competitionId) => {
    // On récupère tout le classement brut de l'API
    const data = await get(`/competitions/${competitionId}/standings`);
    return data;
};