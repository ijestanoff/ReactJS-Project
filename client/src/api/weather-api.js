const BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Nessebar?unitGroup=metric&include=days&key=4UPNY9WP7UC92N48RC5HWT4HN&contentType=json';

const getWeather = async () => {
    const response = await fetch(BASE_URL);
        
    const result = await response.json();

    return result;
};

const weatherAPI = {
    getWeather,
};

export default weatherAPI;