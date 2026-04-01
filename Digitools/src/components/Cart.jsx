const Cart = ({ cart, remove, checkout }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-3">
              <div className="flex gap-2">
                <img src={item.icon} className="w-8" />
                <p>{item.name}</p>
              </div>

              <button
                onClick={() => remove(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}

          <h3 className="font-bold mt-4">Total: ${total}</h3>

          <button
            onClick={checkout}
            className="w-full mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-full"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;