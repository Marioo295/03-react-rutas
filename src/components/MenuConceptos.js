import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const MenuConceptos = () => {
    return (
        <nav>
            <ol>
                <li>
                    <span>Enlaces HTML (no recomendado): </span>
                    <a href="/">Home</a>
                    <a href="/acerca">Acerca</a>
                    <a href="/contacto">Contacto</a>
                </li>
                <li>
                    <span>Componente Link: </span>
                    <Link to="/">Home</Link>
                    <Link to="/acerca">Acerca</Link>
                    <Link to="/contacto">Contacto</Link>
                    <Link to="/no-existe">Error404</Link>
                </li>
                <li>
                    <span>Componente NavLink: </span>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                    <NavLink exact to="/acerca" activeClassName="active">Acerca</NavLink>
                    <NavLink exact to="/contacto" activeClassName="active">Contacto</NavLink>
                    <NavLink exact to="/no-existe" activeClassName="active">Error404</NavLink>
                </li>
                <li>
                    <span>Paso por parámetros: </span>
                    <Link to="/usuario/Mario">Mario</Link>
                    <Link to="/usuario/Alejandro">Alejandro</Link>
                    <Link to="/usuario/MariaAngeles">María Ángeles</Link>
                    <Link to="/usuario/JuanAntonio">Juan Antonio</Link>
                </li>
                <li>
                    <span>Parámetros de consulta: </span>
                    <Link to="/productos">Productos</Link>
                </li>
            </ol>
        </nav>
    );
};

export default MenuConceptos