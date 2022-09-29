import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, lyric, bio }) => {
    if (!lyric || !bio) return null;

    return (
        <>
            {lyric.error || lyric.err || lyric.name === "AbortError" ? (
                <Message msg={`Error: no existe la canción "<em>${search.song}</em>"`} bgColor="#dc3545"></Message>
            ) : (
                <SongLyric title={search.song} lyrics={lyric.lyrics}></SongLyric>
            )}
            {bio.artists ? (
                <SongArtist artist={bio.artists[0]}></SongArtist>
            ) : (
                <Message msg={`Error: no existe el intérprete '<em>${search.artist}</em>'`} bgColor="#dc3545"></Message>
            )}
        </>
    );
};

export default SongDetails;