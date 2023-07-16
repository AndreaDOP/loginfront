
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const btnLink = 'inline-block py-1 text-orange-600 text-lg font-bold hover:text-fuchsia-500 cursor-pointer mr-4'
    const activeLink = 'block inline-block py-1 text-white mr-4'
  return (
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="32" height="32"><path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z"/><circle cx="7" cy="22" r="2"/><circle cx="17" cy="22" r="2"/></svg>
      <span className="ml-3 text-xl font-bold text-orange-500">Y Coso</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <NavLink to="/" className={({isActivate}) => isActivate?activeLink:btnLink}>Home</NavLink>    
      <NavLink to="formulario" className={({isActivate}) => isActivate?activeLink:btnLink}>Formulario</NavLink>
      <NavLink to="lista" className={({isActivate}) => isActivate?activeLink:btnLink}>Lista</NavLink>   
      <NavLink to="notas" className={({isActivate}) => isActivate?activeLink:btnLink}>MisNotas</NavLink>   
    </nav>
        <NavLink to="/login" className={({isActivate}) => isActivate?activeLink:btnLink}>Login</NavLink>
        <NavLink to="contacto" className={({isActivate}) => isActivate?activeLink:btnLink}>Contacto</NavLink>

    {/*<button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Contactar
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
  </button>*/}

  </div>
</header>
  )
}

export default NavBar;