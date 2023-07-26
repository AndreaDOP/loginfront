import React from 'react';
import { Link } from 'react-router-dom';

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
          <h1 className="text-3xl font-medium text-gray-900 mb-4"></h1>
          <p className="mb-8 leading-relaxed">
            Experimenta la transformación de tu hogar con nuestra limpieza total. Desde el polvo hasta los rincones más escondidos, dejaremos cada espacio impecable y reluciente. Disfruta de un ambiente fresco, higiénico y acogedor con nuestro servicio de limpieza total en Casa Limpia. Tu comodidad y satisfacción son nuestra prioridad. ¡Haz que tu hogar brille como nunca antes!
          </p>
          <Link to="/formservi">
          <button className="inline-flex items-center text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
            Solicitar Servicio
          </button>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default Lbasica;
