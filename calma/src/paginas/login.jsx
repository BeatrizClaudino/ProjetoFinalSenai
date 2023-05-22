import React, { Component, useState } from 'react';
import Header from '../componentes/Header';
import Botao from '../componentes/Botao';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ navigation }) => {
    const [cpf, setCpf] = useState("")
    const [senha, setSenha] = useState("")
    const navigate =  useNavigate()
    const [token, setToken] = useState("")

    const logar = async () => {
        console.log('entre aqui em')
        try {
            const response = await axios.post('http://10.109.72.36:8000/auth/jwt/create', {
                cpf: cpf,
                password: senha
            })
            // setToken(JSON.stringify(response.data))
            // console.log(token)
            localStorage.setItem('token', JSON.stringify(response.data))
            navigate('/')
            
            console.log('aquihdjwshdj', response)
            return response.data
        } catch (error) {
            console.log('njbghjvjg', error)
            throw new Error('Falha no login')
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
                    logar()
                    // navigate('/')
                }} className='bg-[#6936F5] w-80 h-14 rounded-2xl' type={'button'}>Logar</button>

                {/* <Botao evento={() =>login(cpf, senha)} tipo='submit' texto='Login'/> */}
            </form>
        </div>
    );
}

export default Login;