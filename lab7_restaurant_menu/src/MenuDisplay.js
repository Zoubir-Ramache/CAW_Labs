import React, { useState } from 'react';
import MenuItem from './MenuItem';
import Cart from './Cart';
import Order from './Order';
const MenuDisplay = ({ menuItems, cartItems, addToCart, removeFromCart, onCheckout, orders }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get unique categories from menu items
  const categories = ['All', ...new Set(menuItems.map(item => item.category))];
  
  // Filter items based on selected category
  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="w-full p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Restaurant Menu
      </h1>
      
      {/* Category Navigation */}
      <div className="flex justify-center mb-8 overflow-x-auto">
        <div className="flex space-x-4 border-b border-gray-200">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 font-medium transition-colors duration-200 
                ${selectedCategory === category 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items Display */}
      {filteredItems.map((item, index) => (
        <MenuItem key={index} {...item} cartItems={cartItems} addToCart={addToCart}  />
      ))}
      <Cart items={cartItems} removeFromCart={removeFromCart} onCheckout={onCheckout} orders={orders} />
      <Order items={orders} total={orders.reduce((total, order) => total + order.total, 0)}  />
      </div>
  );
};

export default MenuDisplay;

