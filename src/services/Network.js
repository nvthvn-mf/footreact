import axios from 'axios';

const API_KEY='e54c0687314746b882f10e330625734b';
const API_URL='https://api.football-data.org/v4';

const apiClient = axios.create({
    baseURL : '/api',
    headers: {
        'X-Auth-Token': API_KEY,
        //'X-Auth-'
        'Content-Type': 'application/json',
    },
    timeout: 10000,
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
