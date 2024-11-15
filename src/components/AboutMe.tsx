

import Link from 'next/link';

const AboutMe: React.FC = () => {
  return (

    <div className="animate-slide-left">
    <div className="relative bg-gradient-to-r from-to-pink-700 to-blue-700 text-blue-700 py-12 rounded-lg">
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url(/public/images/Animation Gif.gif)' }}></div>
      <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-12 lg:px-24 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h3>
        <p className="text-base sm:text-lg mb-6">
    I am a web developer in

I specialize in creating dynamic, responsive websites that enhance user experience and drive business growth

With a passion for innovative web solutions, I build scalable, clean, and efficient web applications tailored to meet clients unique needs.


My expertise lies in developing seamless, high-performance websites using modern tools and technologies to bring ideas to life


I am committed to delivering high-quality, visually appealing web solutions with a focus on user-centric design and functionality.



        </p>
        <Link href="/about" passHref>
          <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg border-2 font-bold border-blue-700 hover:bg-blue-200 transition duration-300">
            More About me
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default AboutMe;
