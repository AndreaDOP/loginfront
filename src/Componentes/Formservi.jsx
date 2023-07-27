import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom, faSprayCan } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const opcionesServicios = [
  { value: 'ltotal', label: 'Limpieza Total' },
  { value: 'lbasica', label: 'Limpieza Básica' },
  { value: 'lexterior', label: 'Limpieza Exterior' },
  { value: 'lvidrios', label: 'Limpieza Vidrios' },
  { value: 'lpiletas', label: 'Limpieza Pileta' },
  { value: 'lplacar', label: 'Limpieza Placar' },
];

const Formservi = () => {
  const URL = import.meta.env.VITE_URL;

  console.log(URL);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: '',
      apellido: '',
      email: '',
      celular: '',
      servicios: [],
    },
  });

  const onSubmit = (datos, e) => {
    e.preventDefault();
    try {
      console.log(datos);
      axios.post(URL, datos);
      e.target.reset();
      console.log(URL);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center m-5">
        <h1 className="text-orange-600 text-2xl font-semibold">Formulario Servicios</h1>
        <h2 className="text-orange-600 text-lg font-semibold mb-2">Completa el formulario y selecciona el o  los servicios que necesitas:</h2>
        <div className="flex items-center justify-center space-x-4 my-4"> {/* Espacio entre h1 y h2 */}
          <FontAwesomeIcon icon={faBroom} size="2x" className="text-green-600" /> {/* Icono de escoba */}
          <p className="text-lg font-semibold text-orange-600">Servicios de limpieza profesionales</p> {/* Texto relacionado con limpieza */}
          <FontAwesomeIcon icon={faSprayCan} size="2x" className="text-green-600" /> {/* Icono de spray */}
        </div>
      </div>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-orange-600 text-lg font-semibold mb-3">Nombre:</label>
            <input
              placeholder="Nombre"
              type="text"
              name="nombre"
              {...register('nombre', {
                required: true,
                maxLength: 50,
              })}
            />
            {errors.nombre && <p className="errores">El nombre es obligatorio y con un máximo de 50 caracteres</p>}
          </div>

          <div>
            <label className="text-orange-600 text-lg font-semibold mb-3">Apellido:</label>
            <input
              placeholder="Apellido"
              type="text"
              name="apellido"
              {...register('apellido', {
                required: true,
                maxLength: 80,
              })}
            />
            {errors.apellido && <p className="errores">El apellido es obligatorio y con un máximo de 80 caracteres</p>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-orange-600 text-lg font-semibold mt-3">Email:</label>
            <input
              placeholder="Email"
              type="email"
              name="email"
              {...register('email', {
                required: true,
                // eslint-disable-next-line no-useless-escape
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && <p className="errores">El email es obligatorio</p>}
          </div>

          <div>
            <label className="text-orange-600 text-lg font-semibold mt-3">Celular:</label>
            <input
              placeholder="Cel. de contacto"
              type="tel"
              name="celular"
              {...register('celular', {
                required: true,
                minLength: 10,
                maxLength: 15,
              })}
            />
            {errors.celular && <p className="errores">El celular es obligatorio y debe tener entre 10 y 15 caracteres</p>}
          </div>
        </div>

        <div className="mt-5 ">
          <h2 className="text-orange-600 text-lg font-semibold pb-2 text-center">Servicios Disponibles:</h2>
          <div className="grid grid-cols-3 gap-4 mt-2 ">
            {opcionesServicios.map(opcion => (
              <label key={opcion.value} className="justify-center items-center inline-flex text-orange-600">
                <input 
                  type="checkbox"
                  name="servicios"
                  value={opcion.value}
                  {...register('servicios', {
                    required: true,
                    validate: value => value.length > 0,
                  })}
                  className="form-checkbox h-5 w-5 text-green-600"
                />
                <span className="ml-2">{opcion.label}</span>
              </label>
            ))}
          </div>
          {errors.servicios && <p className="errores mt-2">Selecciona al menos un servicio</p>}
        </div>

        <div className="centrar mt-5">
          <Button type="submit" positive>
            Enviar Datos
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Formservi;

