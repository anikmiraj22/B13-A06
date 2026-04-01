const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$10",
      features: ["1 Project", "Basic Support", "Limited Access"],
    },
    {
      name: "Pro",
      price: "$30",
      features: ["10 Projects", "Priority Support", "Full Access"],
    },
    {
      name: "Enterprise",
      price: "$60",
      features: ["Unlimited Projects", "24/7 Support", "All Features"],
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Pricing Plans
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition text-center"
          >
            <h3 className="text-xl font-bold">{plan.name}</h3>

            <p className="text-3xl font-bold my-4 text-purple-600">
              {plan.price}
            </p>

            <ul className="text-sm text-gray-500 mb-4">
              {plan.features.map((f, idx) => (
                <li key={idx}>✔ {f}</li>
              ))}
            </ul>

            <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-full">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;