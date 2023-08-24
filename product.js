import React, { useState } from "react";

const Product = ({ name, description, price, onAddToCart }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    onAddToCart({ name, price });
  };

  return (
    <div className="product">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <button
        onClick={handleAddToCart}
        disabled={addedToCart}
      >
        {addedToCart ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default Product;
