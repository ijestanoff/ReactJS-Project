import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/catalog';

export const getAll = async () => {
    const result = await request.get(BASE_URL);
    const artists = Object.values(result);
    return artists;
};

export const getLatest = async () => {
    const urlSearchParams = new URLSearchParams({
        sortBy: '_createdOn desc',
        pageSize: 3,
    });

    console.log(`${BASE_URL}?${urlSearchParams.toString()}`);
    const result = await request.get(`${BASE_URL}?${urlSearchParams.toString()}`);

    const latestArtists = Object.values(result);

    return latestArtists;
};

export const getOne = (artistId) => request.get(`${BASE_URL}/${artistId}`);

export const create = (artistData) => request.post(`${BASE_URL}/`, artistData);

export const remove = (artistId) => request.del(`${BASE_URL}/${artistId}`);

export const update = (artistId, artistData) => request.put(`${BASE_URL}/${artistId}`, artistData);

const artistAPI = {
    getAll,
    getOne,
    create,
    remove,
    update,
    getLatest,
};

export default artistAPI;