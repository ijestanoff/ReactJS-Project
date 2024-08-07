import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/festival';
const FESTIVAL_ID = '0234b536-6e61-4211-8773-0b4b56f82821';

export const getFestivalData = async () => {
    const result = await request.get(BASE_URL);
    
    return result;
};

export const create = (festivalData) => request.post(`${BASE_URL}/`, festivalData);

export const update = (festivalData) => request.put(`${BASE_URL}/${FESTIVAL_ID}`, festivalData);

const festivalAPI = {
    getFestivalData,
    create,
    update,
};

export default festivalAPI;