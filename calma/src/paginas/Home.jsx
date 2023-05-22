import React, { Component } from 'react';
import Header from '../componentes/Header';
import Botao from '../componentes/Botao';
import Celular from '../imagens/celularApp.png'
import Cartao from '../imagens/cartao.png'
import app from '../imagens/app.png'
import Mulher from '../imagens/Mulherempresaria.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='w-screen dark:bg-gradient-to-t to-[#000511] from-[#1B3168]'>
            <Header />
            <div className='flex w-screen h-[80vh] items-center justify-center'>
                <div className='flex items-center flex-col'>
                    <div className='flex w-[50vw] flex-col justify-center items-center text-dark-100 dark:text-light-100'>
                        <label className='text-[50px]'>Mais que um banco,</label>
                        <label className='text-[50px]'>uma parceria para a vida</label>
                        <Link to='/Cadastro' className='p-14'>
                            <Botao texto='Peça seu cartão' tipo='submit' />
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
                <div className=''>
                    <img src={Celular} alt='celular com o aplicativo do banco'></img>
                </div>
            </div>
            <div className='w-screen h-[70vh] flex items-center justify-center  bg-gradient-to-t from-blue-950 to-[#6939CD]'>
                <div className='flex items-center justify-center w-screen'>
                    <div className='flex flex-col text-left items-center w-[50%]'>
                        <label className='font-semibold text-light-100 text-[30px]'>Conheça o CashCard</label>
                        <label className='font-semibold text-light-100 text-[30px]'>Perfeito e feito para você</label>
                        <img className='w-[60%]' src={Cartao}></img>
                        <label className='font-semibold text-light-100 text-[20px]'>Com o CashBank, controle seus gastos sem preocupações com juros. Peça já o seu!</label>
                    </div>
                    <div className='w-[50%]'>
                        <img className='w-[100%] h-[70vh]' src={Mulher} alt=''></img>
                    </div>
                </div>
            </div>
            <div className='w-screen h-[70vh] flex items-center justify-center'>
                <div className='flex'>
                    <div className='w-[50%]'>
                        <label className='dark:text-white'>Gerencie suas finanças com facilidade - Baixe agora o aplicativo do CashBank e tenha acesso a todas as funcionalidades do seu banco na palma da mão.</label>
                    </div>
                    <div className='w-[50%]'>
                    <img src={app} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;