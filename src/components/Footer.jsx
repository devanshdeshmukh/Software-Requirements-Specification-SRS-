import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full fixed left-0 bottom-0 bg-gray-400 shadow-lg text-gray-800 px-4 py-6 rounded-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        <div className="flex flex-wrap items-center gap-1">
          <span>2025 ©</span>
          <Link to="/" className="hover:text-blue-400 transition-colors">
            NRT
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 justify-center sm:justify-end">
          <Link to="/docs" className="hover:text-blue-400 transition-colors">
            Docs
          </Link>
          <Link to="/purchase" className="hover:text-blue-400 transition-colors">
            Purchase
          </Link>
          <Link to="/faq" className="hover:text-blue-400 transition-colors">
            FAQ
          </Link>
          <Link to="/support" className="hover:text-blue-400 transition-colors">
            Support
          </Link>
          <Link to="/license" className="hover:text-blue-400 transition-colors">
            License
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
