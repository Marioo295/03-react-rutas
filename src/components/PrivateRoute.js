import React from 'react'
import { Redirect, Route } from 'react-router-dom';

/* const PrivateRoute = (props) => {
    return (
            <Route exact={props.exact} path={props.path} component={props.component}></Route>
    );
}; */

/* const PrivateRoute = (props) => {
    return <Route {...props}></Route>;
}; */

//Simular la autenticación. En caso de que auth=true estaría a null finalmente, estaría protegido
let auth;
auth=null;
auth=true;

const PrivateRoute = ({ component: Component, ...restoVariables}) => {
    return <Route {...restoVariables}>
        {auth ? <Component></Component> : <Redirect to="/login"></Redirect>}
    </Route>;
};

export default PrivateRoute