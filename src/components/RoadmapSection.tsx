import React from 'react';
import { Calendar, LightbulbIcon } from 'lucide-react';

const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-16 md:py-24 bg-[#E0DED9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Roadmap</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            From concept to market: our journey to transform agricultural waste into sustainable products
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 hidden md:block"></div>

          <div className="space-y-16 relative">
            {[
              {
                title: 'Research & Development',
                description:
                  'Researching optimal processing methods and conducting material tests to ensure product durability and biodegradability.',
                icon: <LightbulbIcon className="h-6 w-6 text-green-600" />,
              },
              {
                title: 'Prototype Development',
                description:
                  'Creating initial product prototypes and testing with potential customers for feedback and improvements.',
                icon: <Calendar className="h-6 w-6 text-green-600" />,
              },
              {
                title: 'Pilot Production',
                description:
                  'Setting up small-scale production to refine manufacturing processes and establish supply chains with local farmers.',
                icon: <Calendar className="h-6 w-6 text-green-600" />,
              },
              {
                title: 'Market Launch',
                description:
                  'Full-scale production and distribution to restaurants, caterers, and event planners as a sustainable alternative to plastic.',
                icon: <Calendar className="h-6 w-6 text-green-600" />,
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:justify-between gap-8"
              >
                {/* Step card */}
                <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 relative">
                    <div className="absolute top-6 -left-4 md:left-auto md:-right-4 md:top-1/2 md:-translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white text-sm font-semibold shadow-md">
                      {index + 1}
                    </div>
                    <div className="flex items-center gap-2 mb-3">{step.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-gray-700">{step.description}</p>
                  </div>
                </div>

                {/* Placeholder image */}
                <div
                  className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''} hidden md:block`}
                >
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt={`${step.title} process`}
                    className="w-full h-auto rounded-xl shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
