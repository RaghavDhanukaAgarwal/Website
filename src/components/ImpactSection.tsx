import React from 'react';

const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-16 md:py-24 bg-green-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"> Environmental Impact</h2>
          <div className="w-16 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
          Every year, stubble burning and single-use plastic waste cause significant environmental problems and crises.
          </p>
        </div>
        
        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-green-800/50 rounded-xl p-8 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl md:text-6xl font-bold text-green-400 mb-2">25M+</div>
            <p className="text-xl font-medium mb-2">Tons of Stubble</p>
            <p className="text-green-200">Agricultural waste burning annually</p>
          </div>
          
          <div className="bg-green-800/50 rounded-xl p-8 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl md:text-6xl font-bold text-green-400 mb-2">4M+</div>
            <p className="text-xl font-medium mb-2">Tons of Single-Use Plastic</p>
            <p className="text-green-200">Products end up in Landills each Year</p>
          </div>
          
          <div className="bg-green-800/50 rounded-xl p-8 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl md:text-6xl font-bold text-green-400 mb-2">37M+</div>
            <p className="text-xl font-medium mb-2">Metric Tons of CO₂</p>
            <p className="text-green-200">Emissions are released every year</p>
          </div>
        </div>
        
        {/* Comparison Table */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Stubbio Solutions?</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-full bg-transparent border-separate">
              <thead>
                <tr>
                  <th className="p-4 text-left text-lg font-medium">Feature</th>
                  <th className="p-4 text-center text-lg font-medium bg-green-800/30 rounded-t-lg">Our Products</th>
                  <th className="p-4 text-center text-lg font-medium bg-gray-800/30 rounded-t-lg">Traditional Plastic</th>
                  <th className="p-4 text-center text-lg font-medium bg-gray-800/30 rounded-t-lg">Paper Products</th>
                </tr>
              </thead>
              <tbody className="bg-transparent">
                <tr>
                  <td className="p-4 border-b border-green-800/20">Biodegradability</td>
                  <td className="p-4 text-center border-b border-green-800/20 bg-green-800/30">
                    <span className="text-green-400 font-bold">60-90 days</span>
                  </td>
                  <td className="p-4 text-center border-b border-green-800/20 bg-gray-800/30">
                    <span className="text-red-400">450+ years</span>
                  </td>
                  <td className="p-4 text-center border-b border-green-800/20 bg-gray-800/30">
                    <span className="text-yellow-400">2-6 months</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-green-800/20">Heat Resistance</td>
                  <td className="p-4 text-center border-b border-green-800/20 bg-green-800/30">
                    <span className="text-green-400 font-bold">TBA</span>
                  </td>
                  <td className="p-4 text-center border-b border-green-800/20 bg-gray-800/30">
                    <span className="text-yellow-400">Moderate</span>
                  </td>
                  <td className="p-4 text-center border-b border-green-800/20 bg-gray-800/30">
                    <span className="text-red-400">Poor</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-green-800/20">Water Resistance</td>
                  <td className="p-4 text-center border-b border-green-800/20 bg-green-800/30">
                    <span className="text-green-400 font-bold">TBA</span>
                  </td>
                  <td className="p-4 text-center border-b border-green-800/20 bg-gray-800/30">
                    <span className="text-green-400">Excellent</span>
                  </td>
                  <td className="p-4 text-center border-b border-green-800/20 bg-gray-800/30">
                    <span className="text-red-400">Poor</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-green-800/20">Durability</td>
                  <td className="p-4 text-center border-b border-green-800/20 bg-green-800/30">
                    <span className="text-green-400 font-bold">High</span>
                  </td>
                  <td className="p-4 text-center border-b border-green-800/20 bg-gray-800/30">
                    <span className="text-green-400">High</span>
                  </td>
                  <td className="p-4 text-center border-b border-green-800/20 bg-gray-800/30">
                    <span className="text-yellow-400">Moderate</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-green-800/20">Environmental Impact</td>
                  <td className="p-4 text-center border-b border-green-800/20 bg-green-800/30">
                    <span className="text-green-400 font-bold">Positive</span>
                  </td>
                  <td className="p-4 text-center border-b border-green-800/20 bg-gray-800/30">
                    <span className="text-red-400">Severe</span>
                  </td>
                  <td className="p-4 text-center border-b border-green-800/20 bg-gray-800/30">
                    <span className="text-yellow-400">Moderate</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4">Resource Conservation</td>
                  <td className="p-4 text-center bg-green-800/30 rounded-b-lg">
                    <span className="text-green-400 font-bold">Repurposes waste</span>
                  </td>
                  <td className="p-4 text-center bg-gray-800/30 rounded-b-lg">
                    <span className="text-red-400">Depletes resources</span>
                  </td>
                  <td className="p-4 text-center bg-gray-800/30 rounded-b-lg">
                    <span className="text-yellow-400">Uses virgin materials</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;