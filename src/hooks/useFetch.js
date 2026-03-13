import { useState, useEffect } from 'react';
import { get } from '../services/Network.js';

export const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const responseData = await get(endpoint);
                setData(responseData);

            } catch (err) {
                setError(err.message || "Une erreur est survenue lors du chargement.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    console.log("render ----")

    return { data, isLoading, error };
};