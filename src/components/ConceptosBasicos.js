import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Acerca from '../pages/Acerca'
import Contacto from '../pages/Contacto'

const ConceptosBasicos = () => {
    return (
        <div>
            <h2>CONCEPTOS BÁSICOS</h2>
            <Router>
                {/* La ruta del home siempre tiene que estar al final en el switch para que carguen las anteriores rutas,
                a no ser que tenga el atributo exact en el componente*/}
                <Switch>
                    {/* El componente Route es un componente contenedor */}
                    <Route exact path="/">
                        <h3>Home</h3>
                        <p>Bienvenidos al tema de las rutas en React</p>
                    </Route>
                    <Route exact path="/acerca" component={Acerca}></Route> 
                    {/* Hay dos maneras de definirlo
                     <Route exact path="/contacto" component={Contacto}></Route> */}
                    <Route exact path="/contacto" children={<Contacto></Contacto>}></Route>
                </Switch>            
            </Router>
        </div>
    )
}

export default ConceptosBasicos