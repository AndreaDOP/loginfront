import { Form, Button } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingWater, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Formulario = () => {

    const URL = import.meta.env.VITE_URL;

    console.log(URL);

    
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: { 
            nombre: '',
            apellido: '',
            email: '',
            password: ''
        }
    });
    
    const onSubmit = (datos, e) =>{
        e.preventDefault();
        try {
            console.log(datos);
            axios.post(URL, datos)
            e.target.reset();
            console.log(URL);
        } catch (error) {
            console.log(error);
        }
    }

/*  const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); */


    return (
        <>
        <section className="text-gray-600 body-font relative">
            <div className="container mx-auto" />
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-5xl text-2xl font-semibold title-font mb-4 text-green-600 flex flex-row-reverse items-center justify-center">
                    <FontAwesomeIcon icon={faHandHoldingWater} className="ml-2 text-orange-600" />
                    Contáctanos
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl text-orange-600 font-semibold">Si tienes cualquier duda o pregunta, no dudes en rellenar el formulario. Te responderemos lo antes posible.</p>
                </div>
        </section>

        <Form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <Form.Field className="p-2 w-1/2">
                        <div className="relative">
                            <label htmlFor="name" className="leading-7 text-base text-orange-600 font-semibold">
                                Nombre
                            </label>
            <input 
              placeholder='Nombre'
              type= 'text'
              name='nombre'
              className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-orange-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
              {...register('nombre', 
                {
                  required: true,
                  maxLength: 50
                })
              }
            />
            </div>
          </Form.Field>

                    <Form.Field className="p-2 w-1/2">
                        <div className="relative">
                            <label htmlFor="email" className="leading-7 text-base text-orange-600 font-semibold">
                                Email
                            </label>
                            <input
                                placeholder='Email'
                                type='email'
                                name='email'
                                className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-orange-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                                {...register('email',
                                    {
                                        required: true,
                                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                    })
                                }
                            />
                        </div>
                    </Form.Field>


                    <Form.Field className="p-2 w-full">
                        <div className="relative">
                            <label htmlFor="name" className="leading-7 text-base text-orange-600 font-semibold">
                                mensaje
                            </label>
                            <textarea
                                placeholder='Mensaje'
                                name='mensaje'
                                className='w-full bg-gray-100 bg-opacity-50 rounded border border-orange-500 focus:border-orange-600 focus:bg-white focus:ring-2 focus:ring-orange-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
                            />
                        </div>
                    </Form.Field>
        </div>

                 
               
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-orange-600 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
            Enviar
            <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
          </button>
        </div>
        
        </Form>
            
           <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a href="mailto:limpio@limpio.com" className="text-xl font-semibold text-orange-600 hover:text-pink-500">limpio@limpio.com</a>
          <p className="leading-normal my-5">Calle 7 N324
            <br />Buenos Aires - Argentina
          </p>

          <span className="inline-flex">
            <a className="text-orange-600 transition-colors duration-300 ease-in-out hover:text-pink-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-7 h-7" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-6 text-orange-600 transition-colors duration-300 ease-in-out hover:text-pink-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-7 h-7" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-6 text-orange-600 transition-colors duration-300 ease-in-out hover:text-pink-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-7 h-7" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>           
          </span>

        </div>
        
        </>
    );
    };


export default Formulario;