

import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';

const About: FC = () => {
  return (
    <div className="animate-slide-up">
    <div
      className="bg-black text-white p-10 min-h-screen bg-cover bg-center flex flex-col items-center justify-start lg:justify-center"
      style={{ backgroundImage: 'url("/public/images/Animation Gif.gif")' }} // Replace with your image path
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24 p-8 rounded-xl shadow-2xl bg-opacity-90 backdrop-blur-lg">
        
        {/* Left Side - Profile Picture */}
        <div className="flex-shrink-0 w-full lg:w-1/3 flex justify-center lg:justify-start lg:pl-8 xl:pl-12 mb-8 lg:mb-0">
          <Image
            src="/images/profile.jpg" // Replace with your image path
            alt="Your Name"
            width={300}
            height={300}
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full shadow-lg border-4 border-blue-500 object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Right Side - About and Skills */}
        <div className="w-full lg:w-2/3 space-y-10 text-center lg:text-left">
          
          
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">About Me</h2>

<div className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 space-y-4">
  
  <p>
    I am a UI/UX designer and frontened developer passionate about creating engaging and user friendly digital experiences with highly motivation.
  </p>


<div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl mx-auto lg:mx-0 space-y-4">
  <p className="font-semibold text-xl text-blue-500">Core Skills</p>
  <ul className="space-y-3">
    <li className="flex items-center space-x-3 bg-gray-700 p-3 rounded-md hover:bg-blue-600 transition duration-200">
      <span className="text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="text-white">Combining aesthetic design with functional development</span>
    </li>
    <li className="flex items-center space-x-3 bg-gray-700 p-3 rounded-md hover:bg-blue-600 transition duration-200">
      <span className="text-blue-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="text-white">Proficiency in modern web technologies</span>
    </li>
    <li className="flex items-center space-x-3 bg-gray-700 p-3 rounded-md hover:bg-blue-600 transition duration-200">
      <span className="text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="text-white">Analytical approach to problem solving</span>
    </li>
  </ul>
</div>

</div>
</div>
</div>
</div>   <br />
 

<button
  className="relative px-8 py-3 border-2 border-blue-500 text-white font-semibold text-lg rounded-full shadow-lg transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105 flex items-center animate-pulse space-x-2"
>
<Link href="/images/cv/mycv.pdf" target="_blank" rel="noopener noreferrer">
      <span className="text-white hover:bg-blue-600 font-semibold text-lg transition-all duration-200 transform hover:scale-105">
        Hire Me
      </span>
    </Link>

  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
  </svg>
  <span
    className="absolute  rounded-full opacity-75 bg-blue-500 blur-lg "
    aria-hidden="true"
  ></span>
</button>


<div className="w-full max-w-5xl mx-auto mt-16 lg:mt-24 p-10 rounded-2xl shadow-2xl bg-gradient-to-r from-gray-900 to-gray-800 bg-opacity-90 backdrop-blur-lg px-4 sm:px-6">
  <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center tracking-wide">
    Ca<span className="text-blue-500">reer</span> Jour<span className="text-blue-500">ney</span>
  </h2>

  <hr className="border-t-2 border-blue-500 w-20 mx-auto mb-6" />

  <p className="text-gray-300 text-lg leading-relaxed text-center lg:text-left transition-transform duration-300 ease-in-out hover:scale-105">
    My programming journey began in 2023 driven by a deep curiosity and fascination for technology Since then I have immersed myself in the world of web development constantly learning and building new skills With each project I grow more confident and excited about what I can create
  </p>

  <div className="flex justify-center mt-8">
    <button className="px-6 py-3 text-lg font-semibold bg-black border-2 border-blue-500 animate-pulse text-white rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-110">

     <Link href="/project">Explore My Work</Link> 

      <span className="ml-2 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      </span>
    </button>
  </div>
</div>

  </div>
  </div>
  );
};

export default About;
