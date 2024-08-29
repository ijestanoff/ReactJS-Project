import { useEffect, useState } from 'react';
import weatherAPI from '../api/weather-api';

export function useGetWeather() {
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        weatherAPI.getWeather()
            .then(result => setWeather(result))
            .catch(error => console.log(error.message));
    }, []);

    return weather;
}