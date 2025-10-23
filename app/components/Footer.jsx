export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl  md:max-w-[70%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Brand / Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.jpg" alt="Logo" className="h-8 w-auto" />
            <span className="text-white font-semibold text-lg">Everything Is Essential</span>
          </div>

          {/* Links */}
          <div className="flex space-x-6">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="/about" className="hover:text-white transition">About</a>
            <a href="/products" className="hover:text-white transition">Products</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} EIE. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
