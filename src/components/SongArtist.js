import React from 'react'

const SongArtist = ({artist}) => {
    return (
        <section>
            <h3>{artist.strArtist}</h3>
            <img src={artist.strArtistThumb} alt={artist.strArtist}></img>
            <p>Nacimiento</p>
            <p>País</p>
            <p>Género</p>
            <p href="">Sitio web</p>
            <p>Bio</p>            
        </section>
    );
};

export default SongArtist