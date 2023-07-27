import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaChevronLeft, FaHome, FaRuler } from 'react-icons/fa';

const Ltotal = () => {
    return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-1/2 md:w-1/2 w-full md:pr-6 pr-0 mb-10 md:mb-0">
          <img
            src="https://netservicebarcelona.com/wp-content/uploads/2019/04/limpieza-de-oficina.jpg"
            alt="Imagen Redonda"
            className="w-100 h-100 object-cover rounded-full"
          />
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full md:pl-6 pl-0">
          <h1 className="text-3xl font-medium text-gray-900 mb-4">Limpieza Total</h1>
          <p className="mb-8 leading-relaxed">
            Experimenta la transformación de tu hogar con nuestra limpieza total. Nuestro servicio de limpieza profunda en una casa aborda todos los espacios y rincones para dejar tu hogar impecable y reluciente. Disfruta de un ambiente fresco, higiénico y acogedor con nuestra Limpieza Total de <span className='text-orange-600 font-semibold'>Casa Limpia</span>. Tu comodidad y satisfacción son nuestra prioridad. ¡Haz que tu hogar brille como nunca antes!
          </p>
          <h2 className="text-xl font-medium text-gray-900 mb-2">El servicio incluye:</h2>
          <ul className="list-disc list-inside mb-8 pl-6">
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Limpieza profunda de todas las áreas de la casa.</li>
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Limpieza y desinfección de baños y cocina.</li>
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Aspirado y limpieza de suelos y alfombras.</li>
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Limpieza de ventanas y vidrios.</li>
            <li><FaCheckCircle className="inline-block mr-2 text-green-500" /> Eliminación de polvo y telarañas.</li>
          </ul>
          <div className="mb-4">
            <h2 className="text-xl font-medium text-gray-900 mb-2">Hasta 100 metros cuadrados</h2>
            <p className="text-sm text-gray-600">El precio estándar cubre casas de hasta 100 metros cuadrados. Si tienes una casa más grande, contáctanos para una cotización personalizada.</p>
          </div>
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

export default Ltotal;