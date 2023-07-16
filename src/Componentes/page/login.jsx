
//import { userForm } from 'React-hook-form';
import axios from 'axios'

  const login = () => {
  const URL = process.env.REACT_APP_URL;

  const { register, handLeSubmit, reset, formState: { errors } } = userForm({
    defaultValues: {
      nombre: '',
      apellido: '',
      email: '',
      password: '',
    }  
  });
}

const onSubmit =(datos, e) => {
  e.preventDefault();
  try {
    console.log(datos);
    axios.post(URL, datos)
    e.target.reset();
    console.log(URL);
  }catch(error) {
    console.log(error);
  }
};

const Login = () => {
  return (
    <div className="App">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">Registrate Ahora! y se parte del gran mundo Y COSO!</h1>
              <p className="leading-relaxed mt-4">Porque todo sucede muy rápido, hemos diseñado esta app para vos. Prontamente Y COSO hará tus mandados sin que vos tengas que salir. </p>
          </div>

    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Registrar 😉🛒</h2>
      <div className="relative mb-4">
        <label for="nombre" className="leading-7 text-sm text-gray-600">Nombre</label>
        <input type="text" id="nombre" name="nombre" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label for="apellido" className="leading-7 text-sm text-gray-600">Apellido</label>
        <input type="text" id="apellido" name="apellido" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
       <div className="relative mb-4">
        <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
        <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Enviar</button>
      <p className="text-xs text-gray-500 mt-3"></p>
    </div>
  </div>
</section>
</div>
  )
}

export default Login