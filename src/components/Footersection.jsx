import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Bookery</p>
          <a href="#" className="text-sm text-gray-300 hover:text-white">
            About Us
          </a>
          <a href="#" className="text-sm text-gray-300 hover:text-white">
            Contact
          </a>
          <a href="#" className="text-sm text-gray-300 hover:text-white">
            FAQ
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">
            <span className="fab fa-twitter">Twitter</span>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <span className="fab fa-facebook">Facebook</span>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <span className="fab fa-instagram">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
