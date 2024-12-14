import React from 'react'
import './home.css'
const Home = () => {
  return (

    <div className="home-section relative bg-cover bg-center flex items-center justify-center text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="z-10 text-center px-6 md:px-12">
        {/* Animated Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in">
          Hi, I'm <span className="highlight">Nadim Mostofa</span>
        </h1>
        {/* Animated Location */}
        <p className="text-lg md:text-xl mb-6 animate-fade-in-delayed">
          From Bangladesh, Rangpur City
        </p>
        {/* Animated Profession */}
        <p className="text-lg md:text-2xl font-light mb-8 animate-fade-in-long">
          I'm a <span className="highlight">MERN Stack Web Developer</span>
        </p>
        {/* Call-to-Action Buttons */}
        <div className="space-x-4">
          <a
            href="#projects"
            className="btn btn-primary animate-slide-up"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="btn btn-secondary animate-slide-up"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home