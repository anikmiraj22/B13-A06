import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

const Products = ({ addToCart, cart, remove, checkout }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="bg-gray-100 py-10">
      
      <h2 className="text-3xl font-bold text-center">
        Premium Digital Tools
      </h2>

      <p className="text-center text-gray-500 mt-2 mb-6">
        Choose from our curated collection of premium digital products
      </p>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setShowCart(false)}
          className={`px-6 py-2 rounded-full ${
            !showCart
              ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
              : "border"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setShowCart(true)}
          className={`px-6 py-2 rounded-full ${
            showCart
              ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
              : "border"
          }`}
        >
          Cart ({cart.length})
        </button>
      </div>

      {showCart ? (
        <Cart cart={cart} remove={remove} checkout={checkout} />
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;