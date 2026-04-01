import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="bg-gray-100 px-10 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-purple-600 text-sm mb-2">
          Supercharge Your Digital Workflow
        </h1>

        <h3 className="text-5xl font-bold leading-tight">
          Supercharge Your <br /> Digital Workflow
        </h3>

        <p className="mt-4 text-gray-600">
          Access premium AI tools, design assets, and productivity software —
          all in one place.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full">
            Explore Products
          </button>

          <button className="border px-6 py-2 rounded-full">
            Watch Demo
          </button>
        </div>
      </div>

      <img src={banner} className="rounded-xl shadow-lg" />
    </div>
  );
};

export default Banner;