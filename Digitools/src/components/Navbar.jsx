const Navbar = ({ count }) => {
  return (
    <div className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-purple-600">DigiTools</h1>

      <div className="hidden md:flex gap-6 text-sm">
        <a>Products</a>
        <a>Features</a>
        <a>Pricing</a>
        <a>FAQ</a>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm"> {count}</span>
        <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;