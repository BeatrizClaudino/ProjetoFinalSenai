import React from 'react'

const Botao = (props) => {
    return ( 
        <button onClick={props.evento} className='bg-[#6936F5] w-80 h-14 rounded-2xl hover:bg-gradient-to-r from-cyan-500 to-blue-500' type={props.tipo}>{props.texto}</button>
    );
}
 
export default Botao;