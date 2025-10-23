export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Entrepreneur",
      feedback:
        "Absolutely love their products! The quality and attention to detail are top-notch.",
      img: "/user1.jpg",
    },
    {
      name: "Michael Lee",
      role: "Designer",
      feedback:
        "Great customer support and fast delivery. I always recommend them to my clients.",
      img: "/user2.jpg",
    },
    {
      name: "Emily Carter",
      role: "Developer",
      feedback:
        "Fantastic experience from start to finish. I’ll definitely be back for more!",
      img: "/user3.jpg",
    },
  ];

  return (
    <section id="testimonials" className="bg-gray-50 py-20">
      <div className="max-w-7xl  md:max-w-[70%] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white shadow-sm rounded-lg p-8 hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <p className="text-gray-600 mb-4 italic">“{t.feedback}”</p>
              <h4 className="text-teal-600 font-semibold">{t.name}</h4>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
