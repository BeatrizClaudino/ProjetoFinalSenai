import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';

const Produtodetalhe = () => {
    //DESESTRUTURAR
    const {id, categoria} = useParams()

    return ( 
        <>
        <h1 className='text-black'>Produto {id} - {categoria}</h1>

        <Link to="/produtos" className="text-black">Voltar</Link>
        <button className="text-red-500" onClick={() => Navigate(-1)}>Voltar</button>
        </>
    );
}
 
export default Produtodetalhe;