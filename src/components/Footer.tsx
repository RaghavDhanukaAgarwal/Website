import React from 'react';
import { Leaf, Instagram, Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-xl font-semibold text-white">EcoPlate</span>
            </div>
            <p className="text-gray-400 mb-6">
            From Fields to Future: Harvesting Changes
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-green-400 transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="#problem" className="text-gray-400 hover:text-green-400 transition-colors duration-200">The Problem</a>
              </li>
              <li>
                <a href="#solution" className="text-gray-400 hover:text-green-400 transition-colors duration-200">Our Solution</a>
              </li>
              <li>
                <a href="#roadmap" className="text-gray-400 hover:text-green-400 transition-colors duration-200">Roadmap</a>
              </li>
              <li>
                <a href="#impact" className="text-gray-400 hover:text-green-400 transition-colors duration-200">Environmental Impact</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-green-400 transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} EcoPlate. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;