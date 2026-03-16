import axios from 'axios';

const apiClient1 = axios.create({
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
        'X-Auth-Token': import.meta.env.VITE_FOOTBALL_API_KEY_3,
    },
    timeout: 10000,
});

const apiClient4 = axios.create({
    baseURL : '/api',
    headers: {
        'X-Auth-Token': import.meta.env.VITE_FOOTBALL_API_KEY_4,
    },
    timeout: 10000,
});

const apiClient5 = axios.create({
    baseURL : '/api',
    headers: {
        'X-Auth-Token': import.meta.env.VITE_FOOTBALL_API_KEY_5,
    },
    timeout: 10000,
});

const apiClient6 = axios.create({
    baseURL : '/api',
    headers: {
        'X-Auth-Token': import.meta.env.VITE_FOOTBALL_API_KEY_6,
    },
    timeout: 10000,
});


const axios_clients = [apiClient1,apiClient2, apiClient3, apiClient4, apiClient5, apiClient6]
const size = axios_clients.length;

let calls = 0; 

export const get = async (endpoint) => {
    try {
        const client = axios_clients[calls%size]
        const response = await client.get(endpoint);
        calls ++;
        console.log("Clé "+calls%size+ " utilisé ")
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
