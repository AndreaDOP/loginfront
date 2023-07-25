import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="bg-custom-background-image bg-cover bg-center  flex items-center">
      <section className="text-gray-600 body-font w-full">
        <div className="container px-5 py-24 mx-auto flex flex-col items-center">
          <div className="lg:w-2/3 md:w-1/2 bg-white bg-opacity-50 flex flex-col w-full mb-16 p-8 items-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <br className="hidden lg:inline-block" />¿Buscas una empresa de limpieza para dejar de lidiar en el día a día con todas las tareas de la casa?
            </h1>
            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center ">
              {/*botón Servicios*/}
              <Link to="/ProductList">
              <button className="inline-flex items-center text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg mr-4 ">
              <span className="mr-2">Servicios</span>
              <FontAwesomeIcon icon={faShoppingCart} />
              </button>
              </Link>
              {/*botón contactar*/}
              <Link to="/Formulario">
              <button className="inline-flex items-center text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                <span>Contactar</span>
                <FontAwesomeIcon icon={faEnvelope} className="ml-1" />
              </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img src="" alt="" />
          </div>
        </div>
      </section>      
    </div>
  );
}

export default Home;



