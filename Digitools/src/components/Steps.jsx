const Steps = () => {
  const steps = [
    {
      title: "Choose Product",
      desc: "Browse and select your desired digital tool",
    },
    {
      title: "Add to Cart",
      desc: "Add products easily to your cart",
    },
    {
      title: "Checkout",
      desc: "Secure and fast checkout process",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        How It Works
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {steps.map((step, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl shadow hover:shadow-lg transition text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white flex items-center justify-center rounded-full">
              {i + 1}
            </div>

            <h3 className="font-semibold text-lg">{step.title}</h3>
            <p className="text-gray-500 text-sm mt-2">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;