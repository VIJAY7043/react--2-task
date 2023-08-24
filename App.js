import React, { useState } from "react";
import Product from "./product";
import Cart from "./cart";
import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <div className="App">
      <Product
        name="Product Name"
        description="Product Description"
        price={99.99}
        onAddToCart={addToCart}
      />
      <Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
    </div>
  );
};

export default App;
