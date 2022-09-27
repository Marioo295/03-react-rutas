import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const ConceptosBasicos = () => {
    return (
        <div>
            <h2>CONCEPTOS BÁSICOS</h2>
            <Router>
                {/* La ruta del home siempre tiene que estar al final en el switch para que carguen las anteriores rutas,
                a no ser que tenga el atributo exact en el componente*/}
                <Switch>
                    <Route exact path="/">
                        <h3>Home</h3>
                        <p>Bienvenidos al tema de las rutas en React</p>
                    </Route>
                    <Route exact path="/acerca">
                        <h3>Acerca</h3>
                    </Route>
                    <Route exact path="/contacto">
                        <h3>Contacto</h3>
                    </Route>
                </Switch>            
            </Router>
        </div>
    )
}

export default ConceptosBasicos