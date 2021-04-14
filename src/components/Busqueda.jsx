import React from 'react'

const Busqueda = ({children})=>{
    return (
        <div className="categories">
            <h1 className="categories__title">Resultado de la busqueda:</h1>
                {children}
        </div>
    )
}
export default Busqueda;
