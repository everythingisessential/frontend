export default function FeaturesSection() {
  const features = [
    { title: "High Quality", desc: "We ensure the best materials and design." },
    { title: "Fast Delivery", desc: "Your orders reach you quickly and safely." },
    { title: "24/7 Support", desc: "We’re here anytime you need us." },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl md:max-w-[70%] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white shadow-sm p-8 rounded-lg hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-teal-600">
                {f.title}
              </h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
