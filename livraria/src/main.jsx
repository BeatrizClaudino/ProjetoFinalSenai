import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './paginas/Home';
import Login from './paginas/Login';
import Produto from './paginas/Produtos';
import ProdutoDetalhe from './paginas/ProdutoDetalhe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/Produtos",
    element: <Produto/>
  },
  {
    path: "/ProdutoDetalhe/:id",
    element: <ProdutoDetalhe/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default router;
