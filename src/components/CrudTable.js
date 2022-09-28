import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({data, setDataToEdit, deleteData}) => {
  return (
    <div>
        <h3>Tabla de datos</h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Horoscopo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ? 
                    (data.map((el)=>
                        <CrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData}></CrudTableRow>)
                        ) : (
                        <tr><td colSpan="3">Sin datos</td></tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default CrudTable