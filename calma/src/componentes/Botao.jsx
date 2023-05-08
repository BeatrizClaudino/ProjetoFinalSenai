import React from 'react'

const Botao = (props) => {
    return ( 
        <button onClick={props.evento} className='bg-[#6936F5] w-80 h-14 rounded-2xl' type={props.tipo}>{props.texto}</button>
    );
}
 
export default Botao;