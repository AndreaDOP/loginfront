import React, { useState } from 'react';
import CartItem from './CartItem';

const Header = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <header className="container flex items-center justify-end px-1 py-1 ">
      <div className="relative">
        <button
          className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full -mt-30"
          onClick={() => setActive(!active)}
        >
          <img
            src="../public/tienda.png"
            alt=""
            className="w-5 h-5 cursor-pointer "
          />
          {countProducts > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
              {countProducts}
            </span>
          )}
        </button>

        {active && (
          <div className="absolute z-10 w-64 mt-2 bg-white rounded-lg shadow-md top-12 right-0">
            {allProducts.length ? (
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">Carrito de compras</h3>
                <div className="space-y-2">
                  {allProducts.map((product) => (
                    <CartItem
                      key={product.id}
                      product={product}
                      onDeleteProduct={onDeleteProduct}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <span className="font-bold">Total:</span>
                  <span>${total}</span>
                </div>
                <button
                  className="w-full mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
                  onClick={onCleanCart}
                >
                  Vaciar Carrito
                </button>
              </div>
            ) : (
              <div className="p-4">
                <p className="text-center">El carrito está vacío</p>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

