import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-16 md:py-24 bg-[#E0DED9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Problem We're Solving</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-xl overflow-hidden h-96 shadow-xl transform transition-all duration-500 hover:scale-105">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ 
                backgroundImage: 'url("https://images.pexels.com/photos/4500200/pexels-photo-4500200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Stubble Burning Crisis</h3>
              <p className="text-white/90">
                Millions of tons of crop residue are burned annually in India, causing severe air pollution and respiratory health issues.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Environmental Impact</h4>
              <p className="text-gray-700">
                Agricultural stubble burning contributes to 30-40% of air pollution in major cities during harvest seasons, releasing harmful particulate matter and greenhouse gases.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Health Consequences</h4>
              <p className="text-gray-700">
                The toxic smoke causes respiratory issues, eye irritation, and exacerbates conditions like asthma, affecting millions of people each year.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Economic Burden</h4>
              <p className="text-gray-700">
                The healthcare costs and productivity losses from pollution-related illnesses exceeds ₹20,000 crore annually.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Plastic Pollution Crisis</h4>
              <p className="text-gray-700">
                Single-use plastic tableware contributes to the 4.06 million tons of plastic that enter our oceans annually, threatening marine life and ecosystems.
              </p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Centuries to Decompose</h4>
              <p className="text-gray-700">
                Conventional plastic tableware takes 450+ years to decompose, creating persistent pollution that affects generations to come.
              </p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Growing Demand</h4>
              <p className="text-gray-700">
                The food service industry's demand for disposable tableware continues to rise, with billions of plastic items discarded every year.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative rounded-xl overflow-hidden h-96 shadow-xl transform transition-all duration-500 hover:scale-105">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ 
                backgroundImage: 'url("https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
              }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Plastic Waste Crisis</h3>
              <p className="text-white/90">
                Single-use plastic tableware contributes significantly to our global plastic pollution problem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;