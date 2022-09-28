import React from 'react'
import { BrowserRouter as Router, HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Acerca from '../pages/Acerca'
import Contacto from '../pages/Contacto'
import Dashboard from '../pages/Dashboard';
import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Productos from '../pages/Productos';
import ReactTopics from '../pages/ReactTopics';
import Usuario from '../pages/Usuario';
import MenuConceptos from './MenuConceptos';
import PrivateRoute from './PrivateRoute';

/* El hashRouter te permite interaccionar y recargar mientras navegas con el build (/#/ruta) */

/* La ruta del home siempre tiene que estar al final en el switch para que carguen las anteriores rutas,
a no ser que tenga el atributo exact en el componente*/

/* El componente Route es un componente contenedor */

/* Para para un parámetro a un link hay que utilizar /: */

/* Para redireccionar una página con otra dentro de la aplicación, se usa el componente <Redirect /> */

/* El uso del * de Error404 indica que cualquier ruta se va a cargar y siempre se pone al final */

const ConceptosBasicos = () => {
    return (
        <div>
            
            <h2>HASH ROUTER</h2>
            <HashRouter>
                <MenuConceptos></MenuConceptos>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/acerca" component={Acerca}></Route>
                    <Route exact path="/contacto" component={Contacto}></Route>
                    <Route exact path="/usuario/:username" component={Usuario}></Route>
                    <Route exact path="/productos" component={Productos}></Route>
                    <Route exact path="/about"><Redirect to="/acerca"></Redirect></Route>
                    <Route exact path="/contact"><Redirect to="/contacto"></Redirect></Route>
                    <Route path="/react" component={ReactTopics}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    {/* <Route exact path="/dashboard" component={Dashboard}></Route> */}
                    <PrivateRoute exact path="/dashboard" component={Dashboard}></PrivateRoute>
                    <Route path="*" component={Error404}></Route>
                </Switch>
            </HashRouter>

            <hr></hr>

            <h2>CONCEPTOS BÁSICOS</h2>
            <Router>
                <MenuConceptos></MenuConceptos>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/acerca" component={Acerca}></Route>
                    <Route exact path="/contacto" component={Contacto}></Route>
                    <Route exact path="/usuario/:username" component={Usuario}></Route>
                    <Route exact path="/productos" component={Productos}></Route>
                    <Route exact path="/about"><Redirect to="/acerca"></Redirect></Route>
                    <Route exact path="/contact"><Redirect to="/contacto"></Redirect></Route>
                    <Route path="/react" component={ReactTopics}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    {/* <Route exact path="/dashboard" component={Dashboard}></Route> */}
                    <PrivateRoute exact path="/dashboard" component={Dashboard}></PrivateRoute>
                    <Route path="*" component={Error404}></Route>
                </Switch>            
            </Router>

            <hr></hr>

        </div>
    );
};

/* const ConceptosBasicos = () => {
    return (
        <div>
            <h2>CONCEPTOS BÁSICOS</h2>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <h3>Home</h3>
                        <p>Bienvenidos al tema de las rutas en React</p>
                    </Route>
                    <Route exact path="/acerca" component={Acerca}></Route> 
                    <Route exact path="/contacto" children={<Contacto></Contacto>}></Route>
                </Switch>            
            </Router>
        </div>
    )
} */

export default ConceptosBasicos