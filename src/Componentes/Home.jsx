import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faShoppingCart, faUsers, faAward, faStar } from '@fortawesome/free-solid-svg-icons';
import Ltotal from './servicios/ltotal';
import Lbasica from './servicios/lbasica';
import Lexterior from './servicios/lexterior';

const Home = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-custom-background-image bg-cover bg-center h-screen flex items-center justify-center">
          <section className="text-black body-font">
            <div className="container mx-auto">
              <div className="bg-white bg-opacity-50 rounded-lg p-8 md:p-16 text-center">
                <h1 className="sm:text-5xl text-2xl font-semibold title-font mb-4 text-orange-600 flex flex-row-reverse items-center justify-center">
                  ¿Buscas una empresa de limpieza para las tareas de la casa?
                </h1>
                <p className="mb-8 leading-relaxed sm:text-lg font-semibold">
                  Casa Limpia, se ocupa de las tareas del hogar y nos permite disfrutar de nuestro tiempo libre.
                </p>
                <div className="flex justify-center gap-4">
                  {/*botón Servicios*/}
                  <Link to="/ProductList">
                    <button className="inline-flex items-center text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                      <span className="mr-2">Servicios</span>
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                  </Link>
                  {/*botón contactar*/}
                  <Link to="/Formulario">
                    <button className="inline-flex items-center text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                      <span>Contactar</span>
                      <FontAwesomeIcon icon={faEnvelope} className="ml-1" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <hr />
      {/* Servicios */}
      <section className="text-gray-600 body-font w-full bg-gray-100">
        <div className="container px-5 py-24 mx-auto text-center">
          <h1 className="sm:text-5xl text-2xl font-semibold title-font mb-4 text-green-600 flex flex-row-reverse items-center justify-center">¿Qué servicio necesitas hoy?</h1>

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center">

              {/* Tarjeta "Limpieza Total" */}
              <div className="flex flex-wrap justify-center w-full">
                <Link to='/ltotal' className="p-4 w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdqjA7KxYgh7VjslzJ7eXma2uYPDXnb-jgPd60IhdU5toOCXCn_nYauBlG_QLpup_GbcQ&usqp=CAU" alt="Limpieza full" />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CASA LIMPIA</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">LIMPIEZA TOTAL</h1>
                      <p className="leading-relaxed mb-3 hover:text-green-600">Descubre la magia de nuestra limpieza total de <span className='text-orange-600'>Casa Limpia</span> y déjanos crear un espacio deslumbrante para ti. ¡Bienvenido al confort absoluto!.</p>
                      <div className="flex items-center flex-wrap">
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>7.2K
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Tarjeta "Limpieza Basica" */}
                <Link to='/lbasica' className="p-4 w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://cdn.wallapop.com/images/10420/f4/4e/__/c10420p913915875/i3353119840.jpg?pictureSize=W320" alt="Limpieza Basica" />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CASA LIMPIA</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">LIMPIEZA BASICA</h1>
                      <p className="leading-relaxed mb-3 hover:text-green-600">Descubre la magia de nuestra limpieza total de <span className='text-orange-600'>Casa Limpia</span> y déjanos crear un espacio deslumbrante para ti. ¡Bienvenido al confort absoluto!.</p>
                      <div className="flex items-center flex-wrap">
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>3.2K
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Tarjeta "Limpieza Exterior" */}
                <Link to='/lexterior' className="p-4 w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-muQb_CcAcnFpqI2wdLpfQlyTjKHe0gOR5huRN3MryqoRqT20WpkonXrDkbKDDyqa1Bs&usqp=CAU" alt="Limpieza Exterior" />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CASA LIMPIA</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">LIMPIEZA EXTERIOR</h1>
                      <p className="leading-relaxed mb-3 hover:text-green-600">Descubre la magia de nuestra limpieza total de <span className='text-orange-600'>Casa Limpia</span> y déjanos crear un espacio deslumbrante para ti. ¡Bienvenido al confort absoluto!.</p>
                      <div className="flex items-center flex-wrap">
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>1.1K
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Tarjeta "Limpieza Vidrios" */}
              <div className="flex flex-wrap justify-center w-full">
                <Link to='/lvidrios' className="p-4 w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.ctfassets.net/86mn0qn5b7d0/featured-img-of-post-148180/4a733e8bb34a32ac7f8a9de21dcc5dcc/featured-img-of-post-148180.jpg?fm=jpg&fl=progressive&q=50&w=1200" alt="Limpieza Vidrios" />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CASA LIMPIA</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">LIMPIEZA VIDRIOS</h1>
                      <p className="leading-relaxed mb-3 hover:text-green-600">Descubre la magia de nuestra limpieza total de <span className='text-orange-600'>Casa Limpia</span> y déjanos crear un espacio deslumbrante para ti. ¡Bienvenido al confort absoluto!.</p>
                      <div className="flex items-center flex-wrap">
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>4.2K
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Tarjeta "Limpieza Piletas" */}
                <Link to='/lpiletas' className="p-4 w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://innowater.es/wp-content/uploads/2021/10/limpieza-agua-piscinas.jpg" alt="Limpieza Piletas" />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CASA LIMPIA</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">LIMPIEZA PILETAS</h1>
                      <p className="leading-relaxed mb-3 hover:text-green-600">Descubre la magia de nuestra limpieza total de <span className='text-orange-600'>Casa Limpia</span> y déjanos crear un espacio deslumbrante para ti. ¡Bienvenido al confort absoluto!.</p>
                      <div className="flex items-center flex-wrap">
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>5.4K
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Tarjeta "Limpieza Placar" */}
                <Link to='/lplacar' className="p-4 w-1/3">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://www.elmueble.com/medio/2018/06/12/chica-limpiando-el-armario-vacio-durante-el-cambio-de-armario_7b8f38cf.jpg" alt="Limpieza Placar" />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CASA LIMPIA</h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">LIMPIEZA PLACAR</h1>
                      <p className="leading-relaxed mb-3 hover:text-green-600">Descubre la magia de nuestra limpieza total de <span className='text-orange-600'>Casa Limpia</span> y déjanos crear un espacio deslumbrante para ti. ¡Bienvenido al confort absoluto!.</p>
                      <div className="flex items-center flex-wrap">
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                          <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>2.4K
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
          {/* seccion trayectoria */}
          <section class="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-orange-600 mb-4 transition-transform transform hover:scale-110">¿Por qué contratar los servicios de limpieza de CASA LIMPIA?</h1>
                <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-orange-600">Más de 14 años ofreciendo servicios de limpieza para el hogar.</p>
                <div className="flex mt-6 justify-center">
                  <div clasNaclassNames="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 flex flex-col text-center items-center bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-600 text-white mb-5">
                    <FontAwesomeIcon icon={faUsers} className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-green-600 text-lg title-font font-semibold mb-3">+50.000 familias satisfechas</h2>
                    <p className="text-gray-600">Nuestros clientes satisfechos avalan nuestra calidad de servicio.</p>
                  </div>
                </div>

                <div className="p-4 flex flex-col text-center items-center bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-600 text-white mb-5">
                    <FontAwesomeIcon icon={faAward} className="w-10 h-10" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-green-600 text-lg title-font font-semibold mb-3">+14 años prestando servicios</h2>
                    <p className="text-gray-600">Experiencia y trayectoria nos respaldan en el mercado.</p>
                  </div>
                </div>

                <div className="p-4 flex flex-col text-center items-center bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-600 text-white mb-5">
                    <FontAwesomeIcon icon={faStar} className="w-10 h-10" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-green-600 text-lg title-font font-semibold mb-3">+4.5 Valoración de clientes</h2>
                    <p className="text-gray-600">La satisfacción de nuestros clientes es nuestra mejor carta de presentación.</p>
                  </div>
                </div>

              </div>
            </div>
          </section>
          {/* exibir casas de clientes */}
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-3xl text-4xl font-extrabold title-font mb-4 text-orange-600 animate-pulse">Transformando hogares en espacios impecables</h1>
              </div>

              <div class="flex flex-wrap -m-4 ">
                <div class="lg:w-1/3 sm:w-1/2 p-4 transition-transform transform hover:scale-150">
                  <div class="flex relative">
                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center " src="https://www.bezzia.com/wp-content/uploads/2016/05/casa-impecable-salon-830x718.jpg" />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4 transition-transform transform hover:scale-150">
                  <div class="flex relative">
                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://images.hola.com/imagenes/decoracion/20210914195994/errores-limpieza-frecuentes-casa-lm/0-994-129/mitos-limpieza-3m-m.jpg?tx=w_680" />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4 transition-transform transform hover:scale-150">
                  <div class="flex relative">
                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://hips.hearstapps.com/hmg-prod/images/modern-kitchen-interior-with-white-cabinets-and-royalty-free-image-1642501569.jpg" />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4 transition-transform transform hover:scale-150">
                  <div class="flex relative">
                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://images.ecestaticos.com/uCHUIGzJ2z_xjfokrUDh-hbz-44=/246x0:1953x1280/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fbaa%2F83c%2Fe78%2Fbaa83ce78cabd520c0726506d40c1b74.jpg" />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4 transition-transform transform hover:scale-150">
                  <div class="flex relative">
                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://images.ecestaticos.com/NHIWq_c2yb-Yzg-udRzyHRJgPnw=/0x2:2216x1664/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F36c%2F3a1%2F934%2F36c3a19347812a0b08da88e9dca50246.jpg" />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4 transition-transform transform hover:scale-150">
                  <div class="flex relative">
                    <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://media.revistaad.es/photos/60fe77a622e619dc40e759ad/16:9/w_2560%2Cc_limit/A7B7625.jpg" />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                      <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col items-center justify-center w-full  mt-20">
                  <Link to="/Formulario">
                  <button class="inline-flex items-center text-white bg-orange-600 border-0 py-3 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                    <span className='font-semibold'>Contactar</span>
                    <FontAwesomeIcon icon={faEnvelope} class="ml-1" />
                  </button>
                  </Link>
                </div>


              </div>
            </div>
          </section>

        </div>
      </section>
    </>
  );
}
export default Home;