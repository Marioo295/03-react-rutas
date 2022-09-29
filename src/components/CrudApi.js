import React, { useState, useEffect } from 'react';
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';
import { helpHttp } from '../helpers/helpHttp';
import Error404 from '../pages/Error404';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';

const CrudApi = () => {
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let api = helpHttp();
    let url = "http://localhost:5000/nombres";

    useEffect(() => {
        setLoading(true);
        helpHttp().get(url).then(res => {
            if (!res.err) {
                setDb(res);
                setError(null);
            } else {
                setDb(null);
                setError(res);
            }
            setLoading(false);
        });
    }, [url]);

    const createData = (data) => {
        data.id=Date.now();
        let options = {
            body:data,
            headers:{"content-type":"application/json"},
        };

        api.post(url, options).then((res) => {
            console.log(res);
            if (!res.err) {
                setDb([...db, res]);
            } else {
                setError(res);
            }
        });
    };

    const updateData = (data) => {
        let endpoint = `${url}/${data.id}`
        let options = {
            body:data,
            headers:{"content-type":"application/json"},
        };

        api.put(endpoint, options).then((res) => {
            if (!res.err) {
                let newData = db.map((el) => (el.id === data.id ? data : el));
                setDb(newData);
            } else {
                setError(res);
            }
        });
    };

    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con id '${id}'?`);
        if (isDelete) {
            let endpoint = `${url}/${id}`;
            let options = {
                headers:{"content-type":"application/json"},
            };
            api.del(endpoint, options).then(res => {
                if (!res.err) {
                    let newData = db.filter((el) => el.id !== id);
                    setDb(newData);
                } else {
                    setError(res);
                }
            });
        } else {
            return;
        }
    };

    return (
        <div>
            <HashRouter basename="nombres">
                <header>
                    <h2>CRUD API con rutas</h2>
                    <nav>
                        <NavLink to="/" activeClassName="active">Nombres</NavLink>
                        <NavLink to="/agregar" activeClassName="active">Agregar</NavLink>
                    </nav>
                </header>
                <Switch>
                    <Route exact path="/">
                        <h2>
                            {loading && <Loader></Loader>}
                            {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545"></Message>}
                            {db && <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}></CrudTable>}
                        </h2>
                    </Route>
                    <Route exact path="/agregar">
                        <h2>
                            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}></CrudForm>
                        </h2>
                    </Route>
                    <Route exact path="/editar/:id">
                        <h2>
                            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}></CrudForm>
                        </h2>
                    </Route>
                    <Route exact path="*" children={<Error404></Error404>}>
                        <h2>
                            Error 404
                        </h2>
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    );
};

export default CrudApi;