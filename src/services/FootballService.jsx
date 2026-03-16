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
    const data = await get(`/competitions/${competitionId}/standings`);
    return data;
};


export const fetchPlayerPhoto = async (playerName) => {
    try {
        // On remplace les espaces par des underscores pour l'API
        const queryName = playerName.replace(/\s+/g, '_');
        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${queryName}`);
        const data = await response.json();

        if (data.player && data.player.length > 0) {
            return data.player[0].strCutout || data.player[0].strThumb || null;
        }
        return null;
    } catch (error) {
        console.error("Erreur lors de la récupération de la photo:", error);
        return null;
    }
};

export const topScorersLoader = async ({ params }) => {

    const data = await get(`/competitions/${params.id}/scorers`);
    const scorers = data.scorers || [];

    // 2. On enrichit uniquement le TOP 3 avec les photos de TheSportsDB
    // On utilise Promise.all pour lancer les 3 recherches en même temps
    const podiumWithPhotos = await Promise.all(
        scorers.slice(0, 3).map(async (s) => {
            const photo = await fetchPlayerPhoto(s.player.name);
            return { ...s, playerPhoto: photo };
        })
    );

    // 3. On remplace les 3 premiers par les versions avec photos
    const finalScorers = [
        ...podiumWithPhotos,
        ...scorers.slice(3)
    ];

    return { ...data, scorers: finalScorers };
};


