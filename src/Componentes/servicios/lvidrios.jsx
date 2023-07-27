import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaHome } from 'react-icons/fa';

const Lvidrios = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        
        <div className="lg:w-1/2 md:w-1/2 w-full md:pr-6 pr-0 mb-10 md:mb-0">
          <img
            src="https://razafolklorica.com/wp-content/uploads/2021/08/C%C3%B3mo-limpiar-vidrios-de-ventanas.jpg"
            alt="Imagen Redonda"
            className="w-100 h-100 object-cover rounded-full"
          />
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full md:pl-6 pl-0">
          <h1 className="text-3xl font-medium text-gray-900 mb-4">Limpieza de Vidrios</h1>
          <p className="mb-8 leading-relaxed">
            Obtén cristales y ventanas relucientes con nuestro servicio de limpieza de vidrios de <span className='text-orange-600 font-semibold'>Casa Limpia</span>. Nos encargamos de limpiar tus ventanas y vidrios para que tengas una vista clara y brillante desde tu hogar. Disfruta de la luz natural y la transparencia con nuestra Limpieza de Vidrios. Tu satisfacción es nuestra prioridad. ¡Haz que tus vidrios brillen como nuevos!
          </p>
          <h2 className="text-xl font-medium text-gray-900 mb-2">El servicio incluye:</h2>
          <ul className="list-disc list-inside mb-8 pl-6">
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Limpieza de cristales y ventanas exteriores e interiores.</li>
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Eliminación de manchas y suciedad en vidrios.</li>
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Limpieza de marcos y bordes de ventanas.</li>
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Uso de productos especializados para un acabado impecable.</li>
          </ul>
          <Link to="/formservi">
          <button className="inline-flex items-center text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
            Solicitar Servicio
          </button>
          </Link>
          <Link to="/" className="inline-flex items-center text-gray-600 bg-transparent border-0 py-2 px-6 focus:outline-none hover:text-gray-900 rounded text-lg mt-4">
            <FaHome className="inline-block mr-2" />
            Volver a Inicio
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default Lvidrios;
