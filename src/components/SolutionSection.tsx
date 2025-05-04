import React from 'react';
import { Wheat, Recycle, Leaf, Factory } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-16 md:py-24 bg-[#E0DED9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Innovative Solution</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We transform agricultural stubble into high-quality, biodegradable tableware and food packaging solutions, creating a sustainable alternative to plastic while reducing air pollution.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="relative">
          {/* Process Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-green-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-16 relative">
            {/* Step 1 */}
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Collection & Sorting</h3>
                <p className="text-gray-700">
                  Instead of burning crop residue, we will work with local farmers to collect and sort agricultural stubble, providing them with an additional source of income.
                </p>
              </div>
              <div className="md:w-24 mx-auto md:mx-0 flex justify-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white relative z-10 shadow-lg">
                  <Wheat className="h-8 w-8" />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 md:text-left hidden md:block">
                <div 
                  className="h-64 bg-cover bg-center rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105"
                  style={{ 
                    backgroundImage: 'url("https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
                  }}
                ></div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 hidden md:block">
                <div 
                  className="h-64 bg-cover bg-center rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105"
                  style={{ 
                    backgroundImage: 'url("https://images.pexels.com/photos/3846822/pexels-photo-3846822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
                  }}
                ></div>
              </div>
              <div className="md:w-24 mx-auto md:mx-0 flex justify-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white relative z-10 shadow-lg">
                  <Recycle className="h-8 w-8" />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Eco-Processing</h3>
                <p className="text-gray-700">
                  Our low-impact processing method transforms the stubble into a durable, food-safe material without harmful chemicals or excessive energy consumption.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Molding & Manufacturing</h3>
                <p className="text-gray-700">
                  The processed material is molded into various tableware items including plates, bowls, cups, and cutlery that will be heat-resistant, sturdy, and visually appealing.
                </p>
              </div>
              <div className="md:w-24 mx-auto md:mx-0 flex justify-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white relative z-10 shadow-lg">
                  <Factory className="h-8 w-8" />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 hidden md:block">
                <div 
                  className="h-64 bg-cover bg-center rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105"
                  style={{ 
                    backgroundImage: 'url("https://images.pexels.com/photos/6205625/pexels-photo-6205625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
                  }}
                ></div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 hidden md:block">
                <div 
                  className="h-64 bg-cover bg-center rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105"
                  style={{ 
                    backgroundImage: 'url("https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
                  }}
                ></div>
              </div>
              <div className="md:w-24 mx-auto md:mx-0 flex justify-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white relative z-10 shadow-lg">
                  <Leaf className="h-8 w-8" />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">100% Biodegradable</h3>
                <p className="text-gray-700">
                  Our products naturally decompose in 60-90 days in composting conditions, returning nutrients to the soil and leaving no harmful residues.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">Key Benefits</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Reduces Air Pollution</h4>
              <p className="text-gray-700">
                By repurposing stubble, we prevent it from being burned, reducing harmful emissions and improving air quality.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Empowering Farmers</h4>
              <p className="text-gray-700">
                Creates income opportunities for farmers, supporting rural economies and incentivizing sustainable practices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Plastic Reduction</h4>
              <p className="text-gray-700">
                Each piece of our tableware replaces a plastic alternative, helping reduce the 4.06 million tons of plastic entering our oceans annually.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Durable & Functional</h4>
              <p className="text-gray-700">
                Our products will be heat-resistant, liquid-resistant, and sturdy enough for all types of food, without compromising on performance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Customizable</h4>
              <p className="text-gray-700">
                Available in various shapes, sizes, and subtle natural colors to meet diverse needs across hospitality and food service industries.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"></path>
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Food Safe</h4>
              <p className="text-gray-700">
                Will meet all food safety standards with no harmful chemicals, providing peace of mind for businesses and consumers alike.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;