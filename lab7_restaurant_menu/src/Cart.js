import React, { useState } from 'react';

const Cart = ({ items = [], removeFromCart, onCheckout, orders  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Cart Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {items.length}
            </span>
          )}
        </div>
      </button>

      {/* Dropdown Cart */}
      {isOpen && (
        <div className="absolute right-0 mt-4 w-72 bg-white rounded-xl shadow-2xl">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Shopping Cart</h2>
            
            {items.length === 0 ? (
              <div className="text-center py-6">
                <p className="text-gray-500 text-base">Your cart is empty</p>
                <p className="text-sm text-gray-400 mt-2">Add some items to get started!</p>
              </div>
            ) : (
              <>
                <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                  {items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-gray-800 text-sm">{item.name}</h3>
                        <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
                      </div>
                      <button onClick={() => removeFromCart(item)} className="text-red-500 hover:text-red-700 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                  <span className="text-base font-bold text-gray-800">Total:</span>
                  <span className="text-lg font-bold text-blue-600">${total.toFixed(2)}</span>
                </div>
                <button onClick={onCheckout} className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">
                  Checkout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
