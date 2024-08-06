import { useEffect, useState } from 'react';
import artistsAPI from '../api/artists-api';

export function useGetAllArtists() {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        artistsAPI.getAll()
            .then(result => setArtists(result));
    }, []);

    return [artists, setArtists];
}

export function useGetOneArtist(artistId) {
    const [artist, setArtist] = useState({
        name: '',
        birthday: '',
        music: '',
        youTubeChannel: '',
        imageUrl: '',
        summary: '',
    });

    useEffect(() => {
        artistsAPI.getOne(artistId)
            .then(result => setArtist(result));
    }, [artistId]);

    return [
        artist,
        setArtist,
    ];
}

export function useCreateArtist () {
    const artistCreateHandler = (artistData) => artistsAPI.create(artistData);

    return artistCreateHandler;
}