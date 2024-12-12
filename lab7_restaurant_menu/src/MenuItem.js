import React from 'react';
// import Cart from './Cart';
const MenuItem = ({ name, description, price, category, addToCart,  }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">
          {name}
        </h2>
        <p className="text-sm text-gray-600 mb-2">
          {category}
        </p>
        <p className="text-gray-700 mb-4">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-blue-600">
            ${price.toFixed(2)}
          </p>

          <button
            onClick={() => addToCart({ name, price })}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            Add to Cart
          </button>
         
          
        </div> 
      </div>
    </div>
  );
};

export default MenuItem;
