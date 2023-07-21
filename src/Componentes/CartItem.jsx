import React from 'react';

const CartItem = ({ product, onDeleteProduct }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="font-bold">{product.nameProduct}</h4>
        <p className="text-gray-600">${product.price}</p>
        <p className="text-gray-600">Cantidad: {product.quantity}</p>
      </div>
      <button
        className="ml-4 text-red-500 hover:text-red-700"
        onClick={() => onDeleteProduct(product)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;

