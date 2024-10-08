import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/catalog';

export const getAll = async () => {
    const artists = await request.get(BASE_URL);
    
    return artists;
};

export const getFirstSix = async () => {
    const urlSearchParams = new URLSearchParams({
        sortBy: '_createdOn',
        pageSize: 6,
    });

    const firstArtists = await request.get(`${BASE_URL}?${urlSearchParams.toString()}`);

    return firstArtists;
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
    getFirstSix,
};

export default artistAPI;