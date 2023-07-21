
import { NavLink } from 'react-router-dom';




const NavBar = () => {
  const btnLink = 'inline-block py-1 text-lg font-bold text-orange-600 hover:text-blue-500 cursor-pointer mr-4';
  const activeLink = 'block inline-block py-1 text-white mr-4';
  
  return (
    <header className="bg-zinc-50 text-white body-font">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <NavLink to="/" className="flex title-font font-medium items-center mb-2 md:mb-0">
           <img src='/logo1.png' alt="Logo" className="w-20 h-20 " />

          <span className="ml-3 text-xl font-bold text-orange-600">Casa Limpia</span>
        </NavLink>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center">
          <NavLink to="/" activeClassName={activeLink} className={btnLink}>Home</NavLink>    
          <NavLink to="formulario" activeClassName={activeLink} className={btnLink}>Formulario</NavLink>
          <NavLink to="lista" activeClassName={activeLink} className={btnLink}>Lista</NavLink>  
          <NavLink to="ProductList" activeClassName={activeLink} className={btnLink}>Servicios</NavLink> 
          <NavLink to="notas" activeClassName={activeLink} className={btnLink}>MisNotas</NavLink>   
        </nav>
        <nav className="md:ml-auto flex flex-wrap items-center text-lg">
          <NavLink to="/login" activeClassName={activeLink} className={btnLink}>Login</NavLink>
          <NavLink to="contacto" activeClassName={activeLink} className={btnLink}>Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
