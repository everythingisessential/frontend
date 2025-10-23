export default function ProductsSection() {
  const products = [
    {
      name: "Product One",
      desc: "A high-quality product built to deliver performance and reliability.",
      img: "/product1.jpg",
    },
    {
      name: "Product Two",
      desc: "Designed with innovation in mind, this product helps you achieve more.",
      img: "/product2.jpg",
    },
    {
      name: "Product Three",
      desc: "Our most popular product — trusted by professionals worldwide.",
      img: "/product3.jpg",
    },
  ];

  return (
    <section id="products" className="bg-white py-20">
      <div className="max-w-7xl  md:max-w-[70%] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Products</h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-teal-600 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.desc}</p>
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
