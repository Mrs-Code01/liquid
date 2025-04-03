import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navlogo from "../../assets/images/liquidnav.png";
import { FiUser, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-900 py-4 md:py-8 border-b border-gray-700">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={navlogo} alt="Logo" className="h-8 md:h-10" />
          </Link>
        </div>

        {/* Desktop Navigation (hidden on mobile) */}
        <div className="hidden md:flex space-x-8">
          <Link to="/dashboard" className="text-white font-medium hover:text-indigo-500 transition-colors duration-300">
            Dashboard
          </Link>
          <Link to="/pools" className="text-white font-medium hover:text-indigo-500 transition-colors duration-300">
            Pools
          </Link>
          <Link to="/trades" className="text-white font-medium hover:text-indigo-500 transition-colors duration-300">
            Trades
          </Link>
          <Link to="/wallet" className="text-white font-medium hover:text-indigo-500 transition-colors duration-300">
            Wallet
          </Link>
        </div>

        {/* Mobile Menu Button (visible only on mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* User Section (hidden on mobile when menu is open) */}
        {!isMenuOpen && (
          <div className="flex items-center">
            <Link to="/stake" className="hidden sm:inline-block text-gray-400 px-4 sm:px-6 py-2 rounded-lg font-semibold transition-colors duration-300">
              0x44d.132e
            </Link>
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-custom rounded-full text-white ml-2 sm:ml-4">
              <FiUser size={20} className="sm:size-6" />
            </div>
          </div>
        )}

        {/* Mobile Off-Canvas Menu */}
        <div className={`fixed inset-0 z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleMenu}></div>
          <div className="relative w-4/5 max-w-xs h-full bg-gray-800 p-6">
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <Link to="/">
                    <img src={navlogo} alt="Logo" className="h-8 md:h-10" />
                </Link>
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                  <FiX size={24} />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-6">
                <Link 
                  to="/dashboard" 
                  className="text-white text-lg font-medium hover:text-indigo-500 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/pools" 
                  className="text-white text-lg font-medium hover:text-indigo-500 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Pools
                </Link>
                <Link 
                  to="/trades" 
                  className="text-white text-lg font-medium hover:text-indigo-500 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Trades
                </Link>
                <Link 
                  to="/wallet" 
                  className="text-white text-lg font-medium hover:text-indigo-500 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Wallet
                </Link>
              </nav>

              {/* User Section at Bottom */}
              <div className="mt-auto pt-6 border-t border-gray-700">
                <Link 
                  to="/stake" 
                  className="block text-gray-400 py-2 font-semibold transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  0x44d.132e
                </Link>
                <div className="flex items-center mt-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-custom rounded-full text-white">
                    <FiUser size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;