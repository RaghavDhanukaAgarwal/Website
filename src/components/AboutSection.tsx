import React from 'react';
import { Heart, Target, Users } from 'lucide-react';
import Shivam from '../../Images/Shivam.jpg'
import Raghav from '../../Images/Raghav.jpg'
import Ayush from '../../Images/Ayush.jpg'


const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#E0DED9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Our Mission</h2>
          <div className="w-16 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We're a passionate team dedicated to creating sustainable solutions that address pressing environmental challenges.
          </p>
        </div>
        
        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-xl shadow-md p-8 text-center transition-all duration-300 hover:shadow-xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-700">
            To build a circular economy by transforming stubble into biodegradable products, tackling stubble burning and plastic waste, while delivering sustainable, customizable solutions for a greener future.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 text-center transition-all duration-300 hover:shadow-xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-700">
            Transforming stubble into solutions for a greener planet.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 text-center transition-all duration-300 hover:shadow-xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
            <p className="text-gray-700">
              Environmental stewardship, innovation, quality, transparency, and social responsibility guide everything we do. We believe in creating products that are good for people and the planet.
            </p>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="mb-20">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div 
                  className="h-64 md:h-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: 'url("https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
                  }}
                ></div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story: From Fields to Future</h3>
                <p className="text-gray-700 mb-4">
                In the heart of Delhi’s choking winters, amidst smog-filled skies and rising health concerns, three friends from completely different professional backgrounds came together — united by one urgent question: "Can we turn this crisis into a solution?"
                </p>
                <p className="text-gray-700 mb-4">
                Despite coming from diverse fields — business, sustainability, and technology — we shared a common frustration. We saw firsthand the devastating impact of stubble burning on the environment and the overwhelming plastic waste problem suffocating our cities and natural landscapes.
                </p>
                <p className="text-gray-700">
                Stubbio Solutions was born from a shared conviction that real change starts when people step beyond their industries and comfort zones to tackle urgent problems head-on. We realized that agricultural waste, often seen as a burden, could actually be the key to fighting two crises at once: air pollution and plastic pollution. 
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">Our Team</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="h-64 bg-cover bg-center" style={{backgroundImage: `url(${Raghav})`}}>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-1">Raghav Agrawal</h4>
                <p className="text-green-600 font-medium mb-3">Co-Founder & CEO</p>
                <p className="text-gray-700">
                With a background in B.Com and currently a CA Finalist aspirant, Raghav brings a strong financial acumen and strategic vision to the company. He is responsible for guiding the company’s overall direction, managing operations, and ensuring financial sustainability. With a clear focus on creating long-term value, he ensures that the company’s goals align with its core values, leading the team toward a future that balances profitability with positive social impact. 
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="h-64 bg-cover bg-center" style={{backgroundImage: `url(${Shivam})`}}>
            </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-1">Shivam Sarraf</h4>
                <p className="text-green-600 font-medium mb-3">Co-Founder & CTO</p>
                <p className="text-gray-700">
                With a background in B.Tech in Computer Science, Shivam brings a wealth of technical expertise to the team. He is responsible for overseeing the development and implementation of innovative solutions that drive the company’s mission forward. His passion for technology and sustainability has been key in shaping our eco-friendly products, utilizing advanced, eco-conscious technologies to turn agricultural stubble into biodegradable tableware. 
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="h-64 bg-cover bg-center" style={{backgroundImage: `url(${Ayush})`}}>
            </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-1">Ayush Mittal</h4>
                <p className="text-green-600 font-medium mb-3">Co-Founder & CMO/COO</p>
                <p className="text-gray-700">
                With a background in Business Administration and a Master’s in Public Policy and Governance, Ayush brings a strong foundation in both strategic marketing and operations management to the company. He is responsible for driving the company's marketing vision, operational efficiency, and ensuring smooth day-to-day management. He is passionate about leveraging sustainable business practices and marketing strategies to promote our eco-friendly products while also ensuring operational excellence across all facets of the company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;