
import { Navigate, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import  Header  from './Componentes/Header.jsx';
import ProductList from './Componentes/ProductList'; // Importa el componente ProductList


import 'tailwindcss/tailwind.css';
import 'semantic-ui-css/semantic.min.css';


import Layout from './Componentes/layout';
import NavBar from './Componentes/navbar';
import Footer from './Componentes/footer';

import Home from './Componentes/Home';
import Formulario from './Componentes/Formulario';
import Lista from './Componentes/Lista';
import Notas from './Componentes/notas';
import Clientes from "./Componentes/Clientes";

import Update from './Componentes/Update';



function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const addToCart = (product) => {
    setAllProducts((prevProducts) => [...prevProducts, product]);
    setTotal((prevTotal) => prevTotal + product.price * product.quantity);
    setCountProducts((prevCount) => prevCount + product.quantity);
  };

  const removeFromCart = (product) => {
    const updatedProducts = allProducts.filter((item) => item.id !== product.id);
    setAllProducts(updatedProducts);
    setTotal((prevTotal) => prevTotal - product.price * product.quantity);
    setCountProducts((prevCount) => prevCount - product.quantity);
  };

  const clearCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <>
      <div className="bg-slate-50 h-screen">
        <NavBar />
        <Header
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
         <Layout>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/ProductList" element={<ProductList addToCart={addToCart}  />} />
          <Route path="/formulario" element={<Formulario />} />
          {/*<Route path="/lista" element={<Lista />} />*/}
          <Route path="/notas" element={<Notas />} />         
          <Route path="/update" element={<Update />} />         
          <Route path="/clientes" element={<Clientes />} />
          <Route path='*' element={<Navigate to="/" />} />
         
        </Routes>
        
        </Layout>
        <Footer />
      </div>       
    
    </>
  );
}

export default App;
