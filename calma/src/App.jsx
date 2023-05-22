import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./paginas/Home";
import Login from "./paginas/login";
import CriarConta from './paginas/CriarConta'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { useEffect } from "react";

const API_URL = 'http://192.168.0.104:8000/auth';

function App() {
    const navigate = useNavigate()
    //iniciando o estado do logado como falso
    const [logado, setLogado] = useState(false)
    const [dados, setDados] = useState("")

    const logar = async (cpf, senha) => {
        try {
            const response = await axios.post(API_URL + '/jwt/create', {
                cpf: cpf,
                password: senha
            });
            return response.data
        } catch (error) {
            throw new Error('Falha no login')
        }
    };
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
            nome: nome,
            celular: celular,
            email: email,
            datanascimento: datanascimento,
            cpf: cpf,
            password: senha
        }).then((res) => {
            console.log(res)
            localStorage.setItem("Token", JSON.stringify({ acess: res.data.access, refresh: res.data.refresh }))
            localStorage.setItem("dados", JSON.stringify({ cpf: cpf, password: senha }))
            setLogado(true)
        }).catch((erro) => {
            console.log(erro)
        })
    }



    useEffect(() => {
        setDados(JSON.parse(localStorage.getItem("dados")))
    }, [logado])
    return (
        <Routes>
            <Route path='/Login' element={<Login login={logar} />} />
            <Route path="/Cadastro" element={<CriarConta conta={criarconta} />} />
            <Route path='/' element={<Home />} />
        </Routes>

    )
};

export default App;