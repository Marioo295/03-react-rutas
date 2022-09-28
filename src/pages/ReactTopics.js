import React from 'react'
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';

const Topic = () => {
    let{ topic } = useParams();
    return(
        <div>
            <h4>{topic}</h4>
            <p>Este es el tema que se va a documentar</p>
        </div>
    );
};

const ReactTopics = () => {
    //let match = useRouteMatch();
    //console.log(match);
    //"path" nos permite construir rutas relativas <Route />, mientras que
    //"url" nos permite construir enlaces relativos <Link /> o <Navlink />
    let{ path, url } = useRouteMatch();
    return (
        <div>
            <h3>Temas de React</h3>
            <ul>
                <li>
                    <Link to={`${url}/jsx`}>JSX</Link>
                </li>
                <li>
                    <Link to={`${url}/props`}>Props</Link>
                </li>
                <li>
                    <Link to={`${url}/estado`}>Estado</Link>
                </li>
                <li>
                    <Link to={`${url}/componentes`}>Componentes</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h4>Elige un tema de React</h4>
                </Route>
                <Route path={`${path}/:topic`} component={Topic}></Route>
            </Switch>
        </div>
    );
};

export default ReactTopics