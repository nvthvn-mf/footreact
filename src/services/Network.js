import axios from 'axios';

const apiKeys = [
    import.meta.env.VITE_FOOTBALL_API_KEY_1,
    import.meta.env.VITE_FOOTBALL_API_KEY_2,
    import.meta.env.VITE_FOOTBALL_API_KEY_3,
    import.meta.env.VITE_FOOTBALL_API_KEY_4,
    import.meta.env.VITE_FOOTBALL_API_KEY_5,
    import.meta.env.VITE_FOOTBALL_API_KEY_6,
].filter(Boolean); // .filter(Boolean) supprime les clés vides si jamais il en manque une

// 2. Création automatique des clients
const axios_clients = apiKeys.map(key => axios.create({
    baseURL: '/api',
    headers: { 'X-Auth-Token': key },
    timeout: 10000,
}));

let currentClientIndex = 0;

/**
 * Fonction GET avec rotation et retry automatique
 */
export const get = async (endpoint, attempt = 0) => {
    // Si on a testé toutes les clés et que ça échoue toujours
    if (attempt >= axios_clients.length) {
        throw new Error("Toutes les clés API ont atteint leur limite de quota.");
    }

    const clientIndex = (currentClientIndex + attempt) % axios_clients.length;
    const client = axios_clients[clientIndex];

    try {
        const response = await client.get(endpoint);
        
        // On ne change l'index global que si l'appel réussit 
        // pour répartir la charge au prochain appel
        currentClientIndex = (clientIndex + 1) % axios_clients.length;
        
        console.log(`Succès avec la clé n°${clientIndex + 1}`);
        return response.data;

    } catch (error) {
        // Si l'erreur est un dépassement de quota (429), on tente la clé suivante
        if (error.response && error.response.status === 429) {
            console.warn(`Clé n°${clientIndex + 1} saturée (429). Tentative avec la suivante...`);
            return get(endpoint, attempt + 1); // Récursion pour tester la clé suivante
        }

        // Pour les autres erreurs (404, 500, réseau), on log et on throw
        handleErrors(error, endpoint);
        throw error;
    }
};

// Petite fonction utilitaire pour la clarté des logs
const handleErrors = (error, endpoint) => {
    if (error.response) {
        console.error(`Erreur Serveur (${error.response.status}) sur ${endpoint}`);
    } else if (error.request) {
        console.error(`Erreur Réseau sur ${endpoint}`);
    } else {
        console.error(`Erreur d'exécution:`, error.message);
    }
};