import React from 'react';
import { Link } from 'react-router-dom';
import navlogo from "../../assets/images/liquidnav.png"

function Navbar() {
  return (
    <div className="bg-gray-900 py-8 border-b border-gray-700">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src={navlogo} alt="Logo" className="h-10" />
          </Link>
        </div>

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

        <div className="">
          <Link to="/stake" className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
            STAKE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;