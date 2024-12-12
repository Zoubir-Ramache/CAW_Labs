import React from 'react';

const Order = ({ items = [], total,  }) => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg mt-8 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
      
      <div className="space-y-4 mb-6 border border-gray-200 rounded-lg p-4 my-8">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2 mb-4">
            <div>
              <h3 className="font-medium text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-600">${item.price}</p>
            </div>
            <span className="text-gray-500">x1</span>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-4 mt-8">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-800">Total:</span>
          <span className="text-xl font-bold text-blue-600">
            ${total ? total.toFixed(2) : '0.00'}
          </span>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-600">
        <p>Thank you for your order!</p>
        <p className="text-sm mt-4">Your order will be ready in approximately 20 minutes.</p>
      </div>
    </div>
  );
};

export default Order;
