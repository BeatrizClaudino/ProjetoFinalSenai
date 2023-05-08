import React, { Component } from 'react';
import Header from '../componentes/Header';
import Botao from '../componentes/Botao';
import Celular from '../imagens/celularApp.png'
import { Link } from 'react-router-dom';
import Banner from '../componentes/Banner';

const Home = () => {
    return ( 
        <div className='w-screen h-screen dark:bg-gradient-to-t to-[#000511] from-[#1B3168]'>
            <Header/>
            <div className='flex w-screen h-[90vh] items-center justify-center border-b-2 border-[#334467]'>
                <div className='flex items-center flex-col'>
                    <div className='flex w-[50vw] flex-col justify-center items-center text-dark-100 dark:text-light-100'>
                        <label className='text-[50px]'>Mais que um banco,</label>
                        <label className='text-[50px]'>uma parceria para a vida</label>
                        <Link to='/Cadastro' className='p-14'>
                            <Botao texto='Peça seu cartão' tipo='submit'/>
                        </Link> 
                    </div>
                    <ul className='flex space-x-48 '>
                        <li>
                        <h1 className='font-bold dark:text-light-100 text-[30px]'>15M +</h1>
                            <p className='text-[#999999]'>Clientes</p>
                        </li>
                        <li>
                            <h1 className='font-bold dark:text-light-100 text-[30px]'>12 anos</h1>
                            <p className='text-[#999999]'>de história</p>
                        </li>
                        <li>
                            <h1 className='font-bold dark:text-light-100 text-[30px]'>30 +</h1>
                            <p className='text-[#999999]'>Empresas parceiras</p>
                        </li>
                    </ul>
                </div>
            <div>
                <img className='w-[700px] h-[700px]' src={Celular} alt='celular com o aplicativo do banco'></img>
            </div>
            </div>
            <div className='w-screen h-screen dark: bg-[#1B3168] flex justify-center'>
                <Banner/>
            </div>
        </div>
     );
}
 
export default Home;