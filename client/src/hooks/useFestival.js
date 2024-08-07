import { useEffect, useState } from 'react';
import festivalAPI from '../api/festival-api';

export function useCreateFestivalData () {
    const festivalCreateHandler = (festivalData) => festivalAPI.create(festivalData);

    return festivalCreateHandler;
}

export function useUpdateFestivalData () {
    const festivalUpdateHandler = (festivalData) => festivalAPI.update(festivalData);

    return festivalUpdateHandler;
}

export function useGetFestivalData () {
    const [festival, setFestival] = useState([]);

    useEffect(() => {
        festivalAPI.getFestivalData()
            .then(result => setFestival(result));
    }, []);

    return [festival, setFestival];
}