import React, { useRef, useState } from "react";
import Header from '../componentes/Header';

import { useNavigate } from "react-router-dom";
import bannerMulheres from "../assets/semanaMulheres.png"
import Bolinhas from "../componentes/Bolinhas";
import Carrossel from "../componentes/carrossel";

const Home = () => {
  // let navigate = useNavigate();

  // const goLogin = () => {
  //   navigate("/login");
  // }
  const listaImagens = [bannerMulheres, bannerMulheres]
    return ( 
        <>
        <Header/>
        <Carrossel imagens= {listaImagens}/>
        <Bolinhas/>
         
      {/* <a href="javasdcript:void(0)" onclick={goLogin} */}
      {/* className="Possui conta"> Já possuí uma conta? */}
        
        </>
     );
}
 
export default Home;
