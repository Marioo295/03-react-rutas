import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import Loader from './Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';

const SongSearch = () => {
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (search === null) {
            return
        }
        const fetchData = async () => {
            const{artist, song} = search;

            let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
            let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

            setLoading(true);
            const [artistRes, songRes] = await Promise.all([
                helpHttp().get(artistUrl),
                helpHttp().get(songUrl),
            ]);
            setBio(artistRes);
            setLyric(songRes);
            setLoading(false);
        };
        fetchData();
    }, [search]);
    

    const handleSearch = (data) => {
        setSearch(data);
    };

    return (
        <div>
            <h2>BUSCADOR DE CANCIONES</h2>
            {loading && <Loader></Loader>}
            <SongForm handleSearch={handleSearch}></SongForm>
            {search && !loading && (<SongDetails search={search} lyric={lyric} bio={bio}></SongDetails>)} 
        </div>
    );
};

export default SongSearch;