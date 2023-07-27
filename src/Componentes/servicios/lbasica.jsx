import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaHome } from 'react-icons/fa';

const Lbasica = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-1/2 md:w-1/2 w-full md:pr-6 pr-0 mb-10 md:mb-0">
          <img
            src="https://www.diariodesevilla.es/2022/04/17/tecnologia/Limpieza-hogar_1675342904_156408240_667x375.jpg"
            alt="Imagen Redonda"
            className="w-100 h-100 object-cover rounded-full"
          />
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full md:pl-6 pl-0">
          <h1 className="text-3xl font-medium text-gray-900 mb-4">Limpieza Básica</h1>
          <p className="mb-8 leading-relaxed">
            Disfruta de nuestro servicio de limpieza básica de <span className='text-orange-600 font-semibold'>Casa Limpia</span>. Nos encargaremos de limpiar y mantener en orden los espacios principales de tu hogar. Obtén un ambiente limpio y acogedor para tu comodidad y satisfacción. ¡Haz que tu hogar brille como nunca antes con nuestra Limpieza Básica!
          </p>
          <h2 className="text-xl font-medium text-gray-900 mb-2">El servicio incluye:</h2>
          <ul className="list-disc list-inside mb-8 pl-6">
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Limpieza de polvo y superficies visibles.</li>
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Barrido y trapeado de pisos.</li>
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Limpieza de baños y cocina.</li>
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Recogida y organización básica de espacios.</li>
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

export default Lbasica;

