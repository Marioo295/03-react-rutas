import './App.css';
/* import ConceptosBasicos from './components/ConceptosBasicos'; */
/* import CrudApi from './components/CrudApi'; */
import SongSearch from './components/SongSearch';

function App() {
    return (
        <div>
        <h1>REACT ROUTER</h1>
        <a 
            href="https://v5.reactrouter.com/web/guides/quick-start" 
            target="_blank" 
            rel="noreferrer">Documentación
        </a>
        <hr></hr>
        <SongSearch></SongSearch>
        <hr></hr>
        {/* <CrudApi></CrudApi> */}
        <hr></hr>
        {/* <ConceptosBasicos></ConceptosBasicos> */}
        </div>
    );
}

export default App;
