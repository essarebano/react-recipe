import { useState } from "react";
import { Link } from "react-router-dom"

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="relative bg-cover bg-center h-64 md:h-screen" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-5xl font-bold">Welcome to Just Cook</h1>
        </div>
      </div>
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Just Cook</h1>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col md:flex-row md:space-x-4">
          <li><Link to="/" className="block py-2 px-4 text-white">Home</Link></li>
          <li><Link to="/recipes" className="block py-2 px-4 text-white">Recipes</Link></li>
          <li><Link to="/about" className="block py-2 px-4 text-white">About</Link></li>
          <li><Link to="/contact" className="block py-2 px-4 text-white">Contact</Link></li>
        </ul>
      </div>
      </nav>
    </header>
  );
}

export default Header;