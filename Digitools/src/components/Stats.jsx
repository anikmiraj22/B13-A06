const Stats = () => {
  const data = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Premium Tools" },
    { value: "4.9", label: "Rating" },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-3 text-center">
        {data.map((d, i) => (
          <div key={i}>
            <h2 className="text-3xl font-bold">{d.value}</h2>
            <p>{d.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;