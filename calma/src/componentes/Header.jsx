import { Link, useNavigate } from "react-router-dom"
import ToggleTheme from "./ToggleTheme"

const Header = ({ dados }) => {
  const navigate = useNavigate()
  const logout = () => {
     localStorage.clear()
     navigate('/')
     window.location.reload(true);
  }
  return (
    <header className="p-5 dark:[##000511] flex justify-between items-center border-b-2 border-[#1B1B1B]">
      <nav className="hidden md:block">
      <ul className="list-none flex items-center justify-center space-x-9">
       <li className="text-dark-100 dark:text-blue-50">
            Para o seu negócio
        </li>
        <li className="text-dark-100 dark:text-blue-50">
            Sobre nós
        </li>
        <li className="text-dark-100 dark:text-blue-50">
            Dúvidas
        </li>
        
          <li className="h-[5vh] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[3px]">
            <div className="flex rounded-full h-full w-full items-center justify-center bg-blue-950 text-dark-100 dark:text-blue-50 p-3">
          <Link to={"/Cadastro"}>
              Create your account
            </Link>
            </div>
          </li>
        
        {
          !dados?
          <li><Link to={'/Login'} className='text-white hover:text-red-800'>Login</Link></li>
          :<><li><Link to={'/Login'} className='text-white hover:text-red-800'>{dados.login}</Link></li>
          <li><Link to={'/'} className='text-white hover:text-red-800' onClick={logout}>Sair</Link></li></>
        }
        </ul>
      </nav>
      <ToggleTheme/>
    </header>
  )
}

export default Header
