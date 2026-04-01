import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Added to cart!");
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    toast.error("Removed from cart!");
  };

  const handleCheckout = () => {
    setCart([]);
    toast.info("Checkout successful!");
  };

  return (
    <div>
      <Navbar count={cart.length} />
      <Banner />
      <Stats />

      <div className="text-center my-6">
        <button
          onClick={() => setShowCart(false)}
          className="btn btn-outline mr-2"
        >
          Products
        </button>
        <button
          onClick={() => setShowCart(true)}
          className="btn btn-primary"
        >
          Cart
        </button>
      </div>

      {showCart ? (
        <Cart
          cart={cart}
          remove={handleRemove}
          checkout={handleCheckout}
        />
      ) : (
        <Products addToCart={handleAddToCart} cart={cart} remove={handleRemove} checkout={handleCheckout} />
      )}

      <Steps />
      <Pricing />
      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;