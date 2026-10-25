import { Link } from "react-router-dom";

export default function NavBarMain() {
  return (
    <nav className="flex justify-center items-center space-x-6 sm:space-x-8 font-itim font-bold text-2xl py-5 bg-blue-600 text-white shadow-md">
      <Link to="/" className="text-white hover:text-yellow-300 transition-colors">Home</Link>
      <Link to="/about" className="text-white hover:text-yellow-300 transition-colors">About</Link>
      <Link to="/contact" className="text-white hover:text-yellow-300 transition-colors">Contact</Link>
      <Link to="/product" className="text-white hover:text-yellow-300 transition-colors">Product</Link>
    </nav>
  );
}