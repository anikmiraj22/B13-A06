const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
      <div className="flex justify-between">
        <img src={product.icon} className="w-10" />
        <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
          {product.tagType}
        </span>
      </div>

      <h2 className="text-xl font-bold mt-4">{product.name}</h2>
      <p className="text-gray-500 text-sm">{product.description}</p>

      <p className="mt-2 font-semibold">
        ${product.price}{" "}
        <span className="text-sm text-gray-400">/{product.period}</span>
      </p>

      <ul className="text-sm mt-2">
        {product.features.map((f, i) => (
          <li key={i}> - {f}</li>
        ))}
      </ul>

      <button
        onClick={() => addToCart(product)}
        className="mt-4 w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-full"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;