
import { Navigate, Routes, Route } from 'react-router-dom'


import 'semantic-ui-css/semantic.min.css'
import 'tailwindcss/tailwind.css'

import Layout from './Componentes/layout'
import NavBar from './Componentes/navbar'
import Footer from './Componentes/footer'



import Home from './Componentes/Home';
import Lista from './Componentes/Lista';
import Notas from './Componentes/notas';
import Formulario from './Componentes/Formulario';
import Update from './Componentes/Update';

import Login from "./Componentes/page/login";
import Contacto from "./Componentes/page/contacto";


function App() {
  return(
    <>
    <div className="bg-emerald-300 h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/lista" element={ <Lista />} />
        <Route path="/notas" element={ <Notas />} />
        <Route path="/formulario" element={ <Formulario />} />
        <Route path="/update" element={ <Update />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contacto' element={<Contacto />} />

        
        <Route path='*' element={<Navigate to="/" />} />
        {/* <Route path="/*" element={ <Error />} /> */}
      </Routes>
      </div>

      <Layout />
      <Footer />
    </>
  )
}

export default App;
