import { useEffect, useState } from 'react';
import weatherAPI from '../api/weather-api';

export function useGetWeather() {
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        weatherAPI.getWeather()
            .then(result => {
                setWeather(result?.days.filter(day => day.datetime=='2024-08-11' || day.datetime=='2024-08-12' || day.datetime=='2024-08-13'));
            });
    }, []);

    return weather;
}