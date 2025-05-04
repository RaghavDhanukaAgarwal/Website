import React from 'react';
import { ArrowDown } from 'lucide-react';
import Logo from '../../Images/Logo.png'
import { Link } from 'react-scroll';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/5503250/pexels-photo-5503250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-800/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        <div className="flex items-center justify-center">
          <img src={Logo} alt="EcoPlate Logo" className="h-40" />
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
          <span className="block">From Fields to Future: Harvesting Changes</span>
        </h1>
        
        <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto mb-8 md:mb-10">
        We aspire to create a cleaner & greener future while promoting sustainability in everyday life
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/*<button className="px-6 py-3 bg-green-600 text-white rounded-full text-lg font-medium transition-all duration-200 hover:bg-green-700 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            Our Solution
          </button>*/}
          <Link
            to="solution"
            smooth={true}
            duration={500}
            offset={-70} // adjust if you have a fixed header
            className="cursor-pointer px-6 py-3 bg-green-600 text-white rounded-full text-lg font-medium transition-all duration-200 hover:bg-green-700 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Our Solution
            </Link>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white animate-bounce">
        <ArrowDown className="h-8 w-8" />
      </div>
    </section>
  );
};

export default HeroSection;