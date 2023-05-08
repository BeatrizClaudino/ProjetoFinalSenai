import React, { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from "./paginas/Home";
import Login from "./paginas/login";
import CriarConta from './paginas/CriarConta'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { useEffect } from "react";



function App() {
    const navigate = useNavigate()
    //iniciando o estado do logado como falso
    const [logado, setLogado] = useState(false)
    const [dados, setDados] = useState("")

    const logar = (login, senha) => {
        console.log('====================================');
        console.log(login, senha);
        console.log('====================================');
        axios.post('http://127.0.0.1:8000/auth/jwt/create', {
            username: login, password: senha
        }).then(res=> {
            console.log(res)
            navigate("/")
            
        })


        // axios.post('http://127.0.0.1:8000/auth/jwt/create', {
        //     username: login,
        //     password: senha
        // }).then((res) => {
        //     console.log(res)
        //     localStorage.setItem("Token", JSON.stringify({ acess: res.data.access, refresh: res.data.refresh }))
        //     localStorage.setItem("dados", JSON.stringify({ login: login, senha: senha }))
        //     setLogado(true)
        // }).catch((erro) => {
        //     console.log(erro)
        // })

        // const defaultOptions = {
        //     headers: {
        //         Authorization: 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzMjIzOTM5LCJpYXQiOjE2ODMyMjM2MzksImp0aSI6ImI3ZjVlNGRmYjczZDQ4Mzc5MDI5MTY0ODNiMWU4MWNkIiwidXNlcl9pZCI6MX0.xCk-K31vPh2RCCz6XAqsr5i_153VuTJXF-PSMrAQt7A'
        //     },
        // }
        // axios.get('http://127.0.0.1:8000/loja/clientes',
        //     { ...defaultOptions }).then((res) => {
        //         console.log(res)
        //     })
    }
    const criarconta = (nome, email, cpf, datanascimento, celular) =>{
        axios.post('http://127.0.0.1:8000/app/usuario/', {
        nome: nome,
        cpf: cpf,
        email: email,
        datanascimento: datanascimento,
        celular:celular 

    }).then(res=>{
        console.log(res)
    })
    }
    const getAccessToken = () => {
        const info = JSON.parse(localStorage.getItem('Token'))
        alert(info.access)
    }


    useEffect(() => {
        setDados(JSON.parse(localStorage.getItem("dados")))
    }, [logado])
    return (
            <Routes>
                <Route path='/Login' element={<Login login={logar}/>} />
                <Route path="/Cadastro" element={<CriarConta conta={criarconta}/>} />
                <Route path='/' element={<Home />} />
            </Routes>

    )
};

export default App;