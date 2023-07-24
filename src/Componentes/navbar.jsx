import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Función para cambiar el estado del menú
  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Estilos para el botón de hamburguesa cuando el menú está abierto o cerrado
  const btnHamburgerStyles = isNavOpen
    ? 'text-white inline-flex p-3 rounded'
    : 'text-white inline-flex p-3 rounded';

  // Estilos para el menú cuando está abierto o cerrado
  const navMenuStyles = isNavOpen
    ? 'md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center'
    : 'hidden md:flex md:ml-auto md:mr-auto flex flex-wrap items-center text-lg';

  // Estilos para el logo cuando la pantalla se achique
  const logoStyles = isNavOpen
    ? 'w-12 h-12 ml-3'
    : 'w-20 h-20';

  const btnLink = 'inline-block py-1 text-lg font-bold text-orange-600 hover:text-blue-500 cursor-pointer mr-4';
  const activeLink = 'block inline-block py-1 text-white mr-4';
  
  return (
    <header className="bg-zinc-50 text-white body-font">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center justify-center">
        {/* Boton Hamburguesa */}
        <nav className='md:hidden'>
          <button 
            className={btnHamburgerStyles}
            onClick={() => handleToggleNav()}
          >
            <img className={logoStyles} src="./public/menu.png" alt="" />
          </button>
        </nav>

        <NavLink to="/" className="flex title-font font-medium items-center mb-2 md:mb-0">
          <img src='/logo.png' alt="Logo" className={`w-28 h-28 ml-3 text-xl font-bold text-orange-600 ${logoStyles}`} />
          <span className="ml-3 text-xl font-bold text-orange-600"></span>
        </NavLink>

        <nav className={navMenuStyles}>
          <NavLink to="/" activeClassName={activeLink} className={btnLink}>Home</NavLink>    
          <NavLink to="formulario" activeClassName={activeLink} className={btnLink}>Formulario</NavLink>
          <NavLink to="lista" activeClassName={activeLink} className={btnLink}>Lista</NavLink>  
          <NavLink to="ProductList" activeClassName={activeLink} className={btnLink}>Servicios</NavLink> 
          <NavLink to="notas" activeClassName={activeLink} className={btnLink}>MisNotas</NavLink>   
       
          <NavLink to="/login" activeClassName={activeLink} className={btnLink}>Login</NavLink>
          <NavLink to="contacto" activeClassName={activeLink} className={btnLink}>Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

