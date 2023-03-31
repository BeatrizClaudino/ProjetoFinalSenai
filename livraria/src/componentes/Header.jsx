import React, { Component } from 'react';
import user from "../assets/user.png"
import cart from "../assets/cart.png"
import search from "../assets/search.png"
import { useNavigate } from "react-router-dom";


const Header = () => {
    let navigate = useNavigate();
    return ( 
        <header className='bg-cyan-600 w-full h-20 flex justify-center items-center'>
            <nav className='w-full flex  justify-between items-center px-10'>
            <div className='logo'></div>
                <div className="input_com_icon w-1/3 flex">
                    <input className='rounded-2xl h-9 w-full p-4'  type="text" placeholder='Qual aventura você está buscando hoje?'/>
                        <a href="" className='-ml-11'>
                            <img className='w-7' src={search} alt="search"/>
                        </a>
                </div>
            <div className="icones flex pl-3.5">
                <div className="imgUser"  onClick={() => navigate("/Login")}>
                    <img src={user} className="w-7 cursor-pointer"  alt="" />
                </div>
                <div className="imgCart ml-3.5">
                    <img src={cart} className="w-7" alt="" />
                </div>
            </div>
            </nav>
        </header>
    );
}
 
export default Header;