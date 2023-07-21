
import React from 'react';
import { data } from '../data';

const ProductList = ({
  allProducts,
  setAllProducts,
  total,
  setTotal,
  countProducts,
  setCountProducts,
  addToCart,
}) => {

  const onAddProducts = (product) => {
    addToCart(product);
    // Resto del código para actualizar el carrito si es necesario
    const cartProduct = allProducts.find((item) => item.id === product.id);

    if (cartProduct) {
      setAllProducts((prevAllProducts) =>
        prevAllProducts.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setAllProducts((prevAllProducts) => [...prevAllProducts, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 container mx-auto flex-wrap p-3 flex-col md:flex-row items-center">
      <div className="col-span-3 text-center">
        <h1 className="text-4xl font-bold text-orange-600 mb-8 mt-10">Servicios de Limpieza</h1>
      </div>
      {data.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
          <figure>
            <img src={product.img} alt={product.nameProduct} className="w-full h-40 object-cover mb-4" />
          </figure>
          <div className="info-product">
            <h2 className="text-lg font-bold mb-2">{product.nameProduct}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => onAddProducts(product)}
              className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
            >
              Añadir al Carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
