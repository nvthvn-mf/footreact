import axios from 'axios';

const apiClient = axios.create({
    baseURL : '/api',
    headers: {
        'X-Auth-Token': import.meta.env.VITE_FOOTBALL_API_KEY,
    },
    timeout: 1000000000,
});

export const get = async (endpoint) => {
    try {
        const response = await apiClient.get(endpoint);
        return response.data
    } catch (error){
        if (error.response){
            console.error(`Erreur Serveur (${error.response.status}) sur ${endpoint}:`, error.response.data);        }
        else if (error.request){
            console.error(`Erreur Réseau sur ${endpoint} - Pas de réponse du serveur`);
        }
        else {
            console.error(`Erreur d'exécution sur ${endpoint}:`, error.message);
        }
        throw error;
    }
}
