import React, { Component, useState } from 'react';
import Header from '../componentes/Header';
import Botao from '../componentes/Botao';

const Login = ({ login }) => {
    const [cpf, setCpf] = useState("")
    const [senha, setSenha] = useState("")


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      console.log(data); // Exiba o token no console ou armazene-o no estado ou local storage
    } catch (error) {
      console.log(error.message);
    }
  };

    return (
        <div className='w-full h-screen dark:bg-gradient-to-t to-[#000511] from-[#1B3168]'>
            <Header />
            <div className="flex items-center justify-center h-2/6">
                <h1 className='dark:text-light-100 font-semibold text-2xl'>Faça login na sua conta</h1>
            </div>
            <form className='flex flex-col items-center justify-center gap-10 -mt-20 mx-5 '>
                <label className='dark: text-light-100'>CPF</label>
                <input className='w-full max-w-lg  h-9 rounded-md' type='text' required placeholder='Digite o seu cpf' onChange={e => setCpf(e.target.value)} />
                <label className='dark: text-light-100'>Senha</label>
                <input className='w-full max-w-lg h-9 rounded-md' type='password' required placeholder='Digite a sua senha' onChange={e => setSenha(e.target.value)} />
                <button onClick={() => { 
                    login(cpf, senha)
                    handleLogin()
                   }} className='bg-[#6936F5] w-80 h-14 rounded-2xl' type={'button'}>Logar</button>
            </form>
        </div>
    );
}

export default Login;