import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaHome } from 'react-icons/fa';

const Lplacar = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        
        <div className="lg:w-1/2 md:w-1/2 w-full md:pr-6 pr-0 mb-10 md:mb-0">
          <img
            src="https://mueblesintermobil.es/wp-content/uploads/armario-empotrado-3.jpg"
            alt="Imagen Redonda"
            className="w-100 h-100 object-cover rounded-full"
          />
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full md:pl-6 pl-0">
          <h1 className="text-3xl font-medium text-gray-900 mb-4">Limpieza de Placares</h1>
          <p className="mb-8 leading-relaxed">
            Mantén tus placares ordenados y limpios con nuestro servicio de limpieza de placares en Casa Limpia. Nuestro equipo de profesionales se encargará de limpiar y organizar el interior de tus placares, dejándolos impecables y listos para que puedas guardar tus pertenencias de manera ordenada. Despídete del polvo y desorden en tus placares y disfruta de un espacio limpio y funcional. Tu satisfacción y comodidad son nuestra prioridad. ¡Mantén tus placares siempre listos y organizados!
          </p>
          <h2 className="text-xl font-medium text-gray-900 mb-2">El servicio incluye:</h2>
          <ul className="list-disc list-inside mb-8 pl-6">
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Limpieza y desinfección de estantes y superficies interiores.</li>
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Organización y doblado de prendas y objetos.</li>
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Eliminación de polvo y suciedad.</li>
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Limpieza de espejos y puertas.</li>
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

export default Lplacar;
