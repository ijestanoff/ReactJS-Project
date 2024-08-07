import { useEffect, useReducer } from 'react';
import commentsAPI from '../api/comments-api';

export function useCreateComment() {
    const createHandler = (artistId, comment) => commentsAPI.create(artistId, comment);

    return createHandler;
}

function commentsReducer(state, action) {
    switch (action.type) {
    case 'GET_ALL':
        return action.payload.slice();
    case 'ADD_COMMENT':
        return [...state, action.payload];
    default:
        return state;
    }
}

export function useGetAllComments(artistId) {
    const [comments, dispatch] = useReducer(commentsReducer, []);

    useEffect(() => {
        (async () => {
            try {
                const result = await commentsAPI.getAll(artistId);

                dispatch({ type: 'GET_ALL', payload: result});
            } catch (error) {
                console.log(error.message);
            }
        })();
    }, [artistId]);

    return [comments, dispatch];
}