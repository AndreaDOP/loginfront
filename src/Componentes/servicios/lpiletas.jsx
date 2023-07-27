import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaHome } from 'react-icons/fa';

const Lpiletas = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        
        <div className="lg:w-1/2 md:w-1/2 w-full md:pr-6 pr-0 mb-10 md:mb-0">
          <img
            src="https://www.viviendasaludable.es/wp-content/uploads/2013/08/cloro-piscina.jpg"
            alt="Imagen Redonda"
            className="w-100 h-100 object-cover rounded-full"
          />
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full md:pl-6 pl-0">
          <h1 className="text-3xl font-medium text-gray-900 mb-4">Limpieza de Piscinas</h1>
          <p className="mb-8 leading-relaxed">
            Mantén tu piscina en perfecto estado con nuestro servicio de limpieza de piscinas en Casa Limpia. Nos encargamos de mantener tu piscina limpia y cristalina para que puedas disfrutar de un chapuzón refrescante en cualquier momento. Nuestro equipo de profesionales se asegurará de que tu piscina esté libre de impurezas y con el nivel de químicos adecuado. Tu satisfacción y seguridad son nuestra prioridad. ¡Mantén tu piscina lista para disfrutarla al máximo!
          </p>
          <h2 className="text-xl font-medium text-gray-900 mb-2">El servicio incluye:</h2>
          <ul className="list-disc list-inside mb-8 pl-6">
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Limpieza de paredes y fondo de la piscina.</li>
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Eliminación de hojas y residuos flotantes.</li>
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Verificación y ajuste de niveles de cloro y pH.</li>
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Limpieza y revisión del sistema de filtrado.</li>
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

export default Lpiletas;
