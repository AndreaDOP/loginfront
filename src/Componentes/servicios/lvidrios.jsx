import React from 'react';
import { Link } from 'react-router-dom';

const Lvidrios = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium text-gray-900 mb-4">Limpieza Total</h1>
        <p className="mb-8 leading-relaxed">
          Experimenta la transformación de tu hogar con nuestra limpieza total. Desde el polvo hasta los rincones más escondidos, dejaremos cada espacio impecable y reluciente. Disfruta de un ambiente fresco, higiénico y acogedor con nuestro servicio de limpieza total en Casa Limpia. Tu comodidad y satisfacción son nuestra prioridad. ¡Haz que tu hogar brille como nunca antes!
        </p>
        <button className="inline-flex items-center text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
          Solicitar Servicio
        </button>
      </div>
    </section>
  );
};

export default Lvidrios;