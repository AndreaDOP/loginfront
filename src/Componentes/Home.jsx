import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="relative">
      {/* Imagen de fondo */}
      <img src="https://jardinica.com/wp-content/uploads/2023/07/image-15.png" alt="" className="w-full" />

      {/* Contenido superpuesto */}
      <section className="absolute inset-0 flex items-center justify-center bg-opacity-75 backdrop-blur">
        <div className="text-white text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-gray-900">
            ¿Buscas una empresa de limpieza para dejar de lidiar en el día a día con todas las tareas de la casa?
          </h1>
          <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
          <div className="flex justify-center">
            {/* Botón Servicios */}
            <Link to="/ProductList">
              <button className="inline-flex items-center text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg mr-4">
                <span className="mr-2">Servicios</span>
                <FontAwesomeIcon icon={faShoppingCart} />
              </button>
            </Link>
            {/* Botón contactar */}
            <Link to="/Formulario">
              <button className="inline-flex items-center text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                <span>Contactar</span>
                <FontAwesomeIcon icon={faEnvelope} className="ml-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Componente nuevo */}
      <section className="text-gray-600 body-font mt-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col items-center">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Space The Final Frontier
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.
              </p>
            </div>
          </div>
          {/* Aquí puedes agregar el contenido adicional del nuevo componente */}
        </div>
      </section>
    </div>
  );
}

export default Home;



