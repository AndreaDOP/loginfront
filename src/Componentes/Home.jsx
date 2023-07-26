import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
{/* Servicios" */}
    <section className="text-gray-600 body-font w-full bg-gray-100">
  <div className="container px-5 py-24 mx-auto text-center">
    <h1 className="sm:text-5xl text-2xl font-semibold title-font mb-4 text-green-600 flex flex-row-reverse items-center justify-center">¿Qué servicio necesitas hoy?</h1>
    

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex justify-center"> {/* Ajustamos la clase aquí */}
    
      {/* Tarjeta "Limpieza Total" */}
      <Link to='/ltotal'>
          <div className="p-4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdqjA7KxYgh7VjslzJ7eXma2uYPDXnb-jgPd60IhdU5toOCXCn_nYauBlG_QLpup_GbcQ&usqp=CAU" alt="Limpieza full" />
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CASA LIMPIA</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">LIMPIEZA TOTAL</h1>
            <p class="leading-relaxed mb-3">Descubre la magia de nuestra limpieza total de <span className='text-orange-600'>Casa Limpia</span> y déjanos crear un espacio deslumbrante para ti. ¡Bienvenido al confort absoluto!.</p>
            <div class="flex items-center flex-wrap ">
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>7.2K
              </span>             
            </div>
          </div>
        </div>
      </div>
       </Link>
        {/* Tarjeta "Limpieza Basica" */}
       <Link to='/lbasica'>
          <div className="p-4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://cdn.wallapop.com/images/10420/f4/4e/__/c10420p913915875/i3353119840.jpg?pictureSize=W320" alt="Limpieza Basica" />
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CASA LIMPIA</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">LIMPIEZA BASICA</h1>
            <p class="leading-relaxed mb-3">Descubre la magia de nuestra limpieza total de <span className='text-orange-600'>Casa Limpia</span> y déjanos crear un espacio deslumbrante para ti. ¡Bienvenido al confort absoluto!.</p>
            <div class="flex items-center flex-wrap">
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>3.2K
              </span>             
            </div>
          </div>
        </div>
      </div>
      </Link>

       {/* Tarjeta "Limpieza Exterior" */}
       <Link to='/lexterior'>
          <div className="p-4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-muQb_CcAcnFpqI2wdLpfQlyTjKHe0gOR5huRN3MryqoRqT20WpkonXrDkbKDDyqa1Bs&usqp=CAU" alt="Limpieza Exterior" />
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CASA LIMPIA</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">LIMPIEZA EXTERIOR</h1>
            <p class="leading-relaxed mb-3">Descubre la magia de nuestra limpieza total de <span className='text-orange-600'>Casa Limpia</span> y déjanos crear un espacio deslumbrante para ti. ¡Bienvenido al confort absoluto!.</p>
            <div class="flex items-center flex-wrap">
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.1K
              </span>              
            </div>
          </div>
        </div>
      </div>
      </Link>
      {/* Tarjeta "Limpieza Vidrios" */}
       <Link to='/lvidrios'>
          <div className="p-4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.ctfassets.net/86mn0qn5b7d0/featured-img-of-post-148180/4a733e8bb34a32ac7f8a9de21dcc5dcc/featured-img-of-post-148180.jpg?fm=jpg&fl=progressive&q=50&w=1200" alt="Limpieza Vidrios" />
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CASA LIMPIA</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">LIMPIEZA VIDRIOS</h1>
            <p class="leading-relaxed mb-3">Descubre la magia de nuestra limpieza total de <span className='text-orange-600'>Casa Limpia</span> y déjanos crear un espacio deslumbrante para ti. ¡Bienvenido al confort absoluto!.</p>
            <div class="flex items-center flex-wrap">
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>4.2K
              </span>              
            </div>
          </div>
        </div>
      </div>
      </Link>

      <Link to='/lpileta'>
          <div className="p-4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://innowater.es/wp-content/uploads/2021/10/limpieza-agua-piscinas.jpg" alt="Limpieza Piletas" />
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CASA LIMPIA</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">LIMPIEZA PILETAS</h1>
            <p class="leading-relaxed mb-3">Descubre la magia de nuestra limpieza total de <span className='text-orange-600'>Casa Limpia</span> y déjanos crear un espacio deslumbrante para ti. ¡Bienvenido al confort absoluto!.</p>
            <div class="flex items-center flex-wrap">
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>5.4K
              </span>              
            </div>
          </div>
        </div>
      </div>
      </Link>

      <Link to='/lplacar'>
          <div className="p-4">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://www.elmueble.com/medio/2018/06/12/chica-limpiando-el-armario-vacio-durante-el-cambio-de-armario_7b8f38cf.jpg" alt="Limpieza Placar" />
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CASA LIMPIA</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">LIMPIEZA PLACAR</h1>
            <p class="leading-relaxed mb-3">Descubre la magia de nuestra limpieza total de <span className='text-orange-600'>Casa Limpia</span> y déjanos crear un espacio deslumbrante para ti. ¡Bienvenido al confort absoluto!.</p>
            <div class="flex items-center flex-wrap">
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>2.4K
              </span>              
            </div>
          </div>
        </div>
      </div>
      </Link>
     
    </div>
  
</section>
  </div>
</section>
    </>
  );
}

export default Home;





