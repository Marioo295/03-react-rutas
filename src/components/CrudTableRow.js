import React from 'react'
import { useHistory } from 'react-router-dom';

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
    let{name, horoscopo, id} = el;
    let history = useHistory();

    const handleEdit = () => {
        setDataToEdit(el);
        history.push(`/editar/${id}`)
    };
    return (
        <tr>
            <td>{name}</td>
            <td>{horoscopo}</td>
            <td>
                <button onClick={handleEdit}>Editar</button>
                <button onClick={() => deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    );
};

export default CrudTableRow