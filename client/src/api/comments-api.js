import requester from './requester';

const BASE_URL = 'http://localhost:3030/data/comments';

const create = async (artistId, text) => await requester.post(BASE_URL, {artistId, text});

const getAll = async (artistId) => {
    const params = new URLSearchParams({
        where: `artistId="${artistId}"`,
        load: 'author=_ownerId:users',
    });
    const result = await requester.get(`${BASE_URL}?${params.toString()}`);

    console.log(result);

    return result;
};

const commentsAPI = {
    create,
    getAll,
};

export default commentsAPI;