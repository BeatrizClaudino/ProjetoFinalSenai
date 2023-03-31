import React, { Component, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

const Produtos = () => {
    const [lista, setLista] = useState([])
    
    useEffect(() =>{
        axios.get("http://127.0.0.1:8000/loja/produtos")
        .then((res) =>{
            setLista(res.data)
            console.log(res.data)
        })
    }, [])

    let navigate = useNavigate()
    return (
        <>
        <div className="flex flex-wrap justify-between"></div>
        {lista.map((item) => (
            <div className='bg-gray-500 rounded-xl p-4' key={item.id}>
                <h3>{item.nome}</h3>
            </div>

        ))}
        <h1 className='text-black'>Listar produtos</h1>
        <button className='bg-blue-400 rounded-x1 text-xs' onClick={() => navigate('/produtodetalhe/1')}>Produto 1</button>
        <Link to="/produtodetalhe/2" className='bg-grey-500 rounded-x1'>
            Produto 2
        </Link>
        </>
    )
}
export default Produtos