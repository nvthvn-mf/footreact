import axios from 'axios';

const apiClient = axios.create({
    baseURL : '/api',
    headers: {
        'X-Auth-Token': import.meta.env.VITE_FOOTBALL_API_KEY_1,
    },
    timeout: 10000,
});

const apiClient2 = axios.create({
    baseURL : '/api',
    headers: {
        'X-Auth-Token': import.meta.env.VITE_FOOTBALL_API_KEY_2,
    },
    timeout: 10000,
});

const apiClient3 = axios.create({
    baseURL : '/api',
    headers: {
        'X-Auth-Token': import.meta.env.VITE_FOOTBALL_API_KEY_2,
    },
    timeout: 10000,
});

const axios_clients = [apiClient,apiClient2, apiClient3]
const size = axios_clients.length;

let calls = 0; 

export const get = async (endpoint) => {
    try {
        const client = axios_clients[calls%size]
        const response = await client.get(endpoint);
        calls ++;
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
