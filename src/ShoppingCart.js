// ShoppingCart.js
import React, { useState } from "react";
import Product from "./Product";
import "./App.css";

const ShoppingCart = () => {
  const initialProducts = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 5.99 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <div className="product-list">
        {initialProducts.map((product) => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingCart;
