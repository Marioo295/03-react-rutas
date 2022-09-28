import React from 'react'

const SongLyric = ({tittle, lyrics}) => {
    return (
        <section>
            <h3>{tittle}</h3>
            <blockquote style={{whiteSpace:"pre-wrap"}}>{lyrics}</blockquote>
        </section>
    );
};

export default SongLyric