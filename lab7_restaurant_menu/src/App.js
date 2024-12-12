import './App.css';
import MenuDisplay from './MenuDisplay';
import { useState } from 'react';
function App() {
  const [cartItems, setCartItems] = useState([
    { name: 'Burger', price: 10.99 },
    { name: 'Salad', price: 7.99 },
    { name: 'Ice Cream', price: 5.99 },
  ]); 

  const [orders, setOrders] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    const indexToRemove = cartItems.findIndex(i => i.name === item.name);
    if (indexToRemove === -1) return;
    
    const newCartItems = [...cartItems];
    newCartItems.splice(indexToRemove, 1);
    setCartItems(newCartItems);
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      const newOrder = {
        id: Date.now(),
        items: [...cartItems],
        total: cartItems.reduce((sum, item) => sum + item.price, 0),
        date: new Date().toLocaleString()
      };
      setOrders((prevOrders)=>[...prevOrders, newOrder]);
      setCartItems([]); // Clear cart after order
    }
  };

  const menuItems = [
    { name: 'Burger', description: 'A juicy burger with fries', price: 10.99, category: 'Main' },
    { name: 'Salad', description: 'A fresh salad with dressing', price: 7.99, category: 'Side' },
    { name: 'Ice Cream', description: 'A delicious ice cream', price: 5.99, category: 'Dessert' },
  ];

  return (
    <div className="App">
      <MenuDisplay 
        menuItems={menuItems} 
        cartItems={cartItems} 
        addToCart={addToCart} 
        removeFromCart={removeFromCart}
        onCheckout={handleCheckout}
        orders={orders}
      />
    </div>
  );
}

export default App;
