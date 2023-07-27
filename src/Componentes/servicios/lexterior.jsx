import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaHome } from 'react-icons/fa';

const Lexterior = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        
        <div className="lg:w-1/2 md:w-1/2 w-full md:pr-6 pr-0 mb-10 md:mb-0">
          <img
            src="https://carbonestore.com/cdn/shop/articles/shutterstock_1146089351-768x506_1024x.jpg?v=1626119618"
            alt="Imagen Redonda"
            className="w-100 h-100 object-cover rounded-full"
          />
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full md:pl-6 pl-0">
          <h1 className="text-3xl font-medium text-gray-900 mb-4">Limpieza de Exteriores</h1>
          <p className="mb-8 leading-relaxed">
            Disfruta de nuestro servicio de limpieza de exteriores de <span className='text-orange-600 font-semibold'>Casa Limpia</span>. Nos encargaremos de limpiar y embellecer los espacios exteriores de tu hogar, como jardines, terrazas y fachadas. Obtén un ambiente fresco y acogedor en el exterior de tu casa para tu comodidad y satisfacción. ¡Haz que tu hogar brille como nunca antes con nuestra Limpieza de Exteriores!
          </p>
          <h2 className="text-xl font-medium text-gray-900 mb-2">El servicio incluye:</h2>
          <ul className="list-disc list-inside mb-8 pl-6">
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Limpieza y despeje de jardines.</li>
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Limpieza y lavado de terrazas.</li>
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Limpieza de fachadas y paredes exteriores.</li>
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Limpieza de piscinas y áreas de recreación al aire libre.</li>
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

export default Lexterior;
