
import { FC } from 'react';
import { FaLaptop, FaMobileAlt, FaPaintBrush, FaCog, FaBullhorn, FaServer } from 'react-icons/fa';

const Service: FC = () => {
  return (
    <div
    
      className="bg-black text-white p-12 bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/background.jpg")' }} 
    >
      {/* Hero Section */}
      <div className="animate-slide-left">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-white mb-4">My Services</h1>
        <p className="text-xl text-gray-200">We provide cutting-edge solutions tailored to your needs.</p>
      </section>

      {/* Services List */}
      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {/* Web Development */}
        <div className="bg-gray-800 p-8 rounded-xl text-center shadow-lg transform transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-2xl hover:cursor-pointer group relative">
          <div className="bg-blue-400 p-6 rounded-full absolute top-[-30px] left-1/2 transform -translate-x-1/2 group-hover:bg-blue-500 transition-colors">
            <FaLaptop className="text-5xl text-white" />
          </div>
          <h2 className="text-2xl font-semibold mt-16 text-gray-200 group-hover:text-white transition-colors">Web Development</h2>
          <p className="text-gray-400 mt-4">Building high-performance websites with modern UI/UX designs</p>
        </div>
        
        {/* Mobile App Design */}
        <div className="bg-gray-800 p-8 rounded-xl text-center shadow-lg transform transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-2xl hover:cursor-pointer group relative">
          <div className="bg-blue-400 p-6 rounded-full absolute top-[-30px] left-1/2 transform -translate-x-1/2 group-hover:bg-blue-500 transition-colors">
            <FaMobileAlt className="text-5xl text-white" />
          </div>
          <h2 className="text-2xl font-semibold mt-16 text-gray-200 group-hover:text-white transition-colors">Mobile App Design</h2>
          <p className="text-gray-400 mt-4">Passionate mobile app designer focused on creating intuitive,visually compelling and user-centered experiences.</p>
        </div>

        {/* Graphic Design */}
        <div className="bg-gray-800 p-8 rounded-xl text-center shadow-lg transform transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-2xl hover:cursor-pointer group relative">
          <div className="bg-blue-400 p-6 rounded-full absolute top-[-30px] left-1/2 transform -translate-x-1/2 group-hover:bg-blue-500 transition-colors">
            <FaPaintBrush className="text-5xl text-white" />
          </div>
          <h2 className="text-2xl font-semibold mt-16 text-gray-200 group-hover:text-white transition-colors">Graphic Design</h2>
          <p className="text-gray-400 mt-4">Creative graphic designer dedicated to transforming ideas into impactful visuals that connect and inspire.
          </p>
        </div>

        {/* UI/UX Design */}
        <div className="bg-gray-800 p-8 rounded-xl text-center shadow-lg transform transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-2xl hover:cursor-pointer group relative">
          <div className="bg-blue-400 p-6 rounded-full absolute top-[-30px] left-1/2 transform -translate-x-1/2 group-hover:bg-blue-500 transition-colors">
            <FaCog className="text-5xl text-white" />
          </div>
          <h2 className="text-2xl font-semibold mt-16 text-gray-200 group-hover:text-white transition-colors">UI/UX Design</h2>
          <p className="text-gray-400 mt-4">Passionate UI/UX designer focused on crafting intuitive engaging, and user-centered digital eperiences.</p>
        </div>

        {/* Digital Marketing */}
        <div className="bg-gray-800 p-8 rounded-xl text-center shadow-lg transform transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-2xl hover:cursor-pointer group relative">
          <div className="bg-blue-400 p-6 rounded-full absolute top-[-30px] left-1/2 transform -translate-x-1/2 group-hover:bg-blue-500 transition-colors">
            <FaBullhorn className="text-5xl text-white" />
          </div>
          <h2 className="text-2xl font-semibold mt-16 text-gray-200 group-hover:text-white transition-colors">Digital Marketing</h2>
          <p className="text-gray-400 mt-4">Helping your brand reach a larger audience with targeted marketing campaigns</p>
        </div>

        {/* Web Hosting */}
        <div className="bg-gray-800 p-8 rounded-xl text-center shadow-lg transform transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-2xl hover:cursor-pointer group relative">
          <div className="bg-blue-400 p-6 rounded-full absolute top-[-30px] left-1/2 transform -translate-x-1/2 group-hover:bg-blue-500 transition-colors">
            <FaServer className="text-5xl text-white" />
          </div>
          <h2 className="text-2xl font-semibold mt-16 text-gray-200 group-hover:text-white transition-colors">Web Hosting</h2>
          <p className="text-gray-400 mt-4">Reliable web hosting solutions optimized for performance, security, and scalability to support your online presence.</p>
        </div>
      </section>
      </div>
    </div>
   
  );
};

export default Service;
