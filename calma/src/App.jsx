import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./paginas/Home";
import Login from "./paginas/login";
import CriarConta from './paginas/CriarConta'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { useEffect } from "react";
import Teste from "./paginas/teste";

const API_URL = 'http://192.168.0.104:8000/auth';

function App() {
    const navigate = useNavigate()
    //iniciando o estado do logado como falso
    const [logado, setLogado] = useState(false)
    const [dados, setDados] = useState("")
    const [token, setToken] = useState("")

    const refreshToken = async (refreshToken) => {
        try {
            const response = await axios.post(API_URL + '/jwt/refresh', {
                refresh: refreshToken
            });
            return response.data
        } catch (error) {
            throw new Error('Falha no refresh token')
        }
    };
    const criarconta = (nome, email, cpf, datanascimento, celular, senha) => {
        axios.post('http://192.168.0.104:8000/auth/users/', {
            username: nome,
            celular: celular,
            email: email,
            data_nascimento: datanascimento,
            cpf: cpf,
            password: senha
        }).then((res) => {
            console.log('passei awqui')
            axios.post('http://192.168.0.104:8000/auth/jwt/create', {
                cpf: cpf,
                password: senha
            }).then((res) => {
                setToken(JSON.stringify(res.data))
                localStorage.setItem('token', token)
                console.log(res)
            })
            .catch((err) => {
                console.log('aquiaquiaqui', err)
            })
        }).catch((err) => {
            console.error("erro" +err)
        })
    }

useEffect(() => {
    setDados(JSON.parse(localStorage.getItem("dados")))
}, [logado])
return (
    <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path="/Cadastro" element={<CriarConta conta={criarconta} />} />
        <Route path='/' element={<Home />} />
        <Route path='/teste' element={<Teste />}/>
    </Routes>

)
};

export default App;