import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faNodeJs, faGitAlt, faGithub, faAws, faDocker, faBootstrap, faLinkedin, faFacebook, faMonero } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faEnvelope, faLaptopCode, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { BiLogoMongodb } from "react-icons/bi";
import ScrollAnimation from "react-animate-on-scroll";

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Projects from './Projects';
import { TypeAnimation } from 'react-type-animation';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';


function App() {
  const Links = <>
    {/* Center - Navigation Links */}
    <ul className="menu menu-horizontal px-4 space-x-6 font-semibold lg:space-x-6">
      <li>
        <a href="/" className="relative hover:text-purple-400 group">
          Home
          <span className="absolute left-0 bottom-0 h-1 bg-purple-400 w-0 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
      <li>
        <a href="#about" className="relative hover:text-purple-400 group">
          About
          <span className="absolute left-0 bottom-0 h-1 bg-purple-400 w-0 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
      <li>
        <a href="#skills" className="relative hover:text-purple-400 group">
          Skills
          <span className="absolute left-0 bottom-0 h-1 bg-purple-400 w-0 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
      <li>
        <a href="#project" className="relative hover:text-purple-400 group">
          Project
          <span className="absolute left-0 bottom-0 h-1 bg-purple-400 w-0 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
      <li>
        <a href="#contact" className="relative hover:text-purple-400 group">
          Contact
          <span className="absolute left-0 bottom-0 h-1 bg-purple-400 w-0 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
    </ul>
  </>



  return (
    <div className="bg-white">
      {/* navbar section */}
      <section className="transition-all fixed z-10 w-full">
        <div className="navbar bg-[#E8F5E9]">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-[#E8F5E9] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {Links}
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {Links}
            </ul>
          </div>
          {/* Right Side - Profile Image */}
          <div className="navbar-end">
            <a href="/" className="flex items-center space-x-2">
              <img
                src="https://i.ibb.co.com/kxmnLsb/profile.jpg"
                alt="Profile"
                className="h-12 w-12 rounded-full border-2 border-purple-500 shadow-md"
              />
            </a>
          </div>
        </div>
      </section>

      {/* main section */}
      <main>
        {/* Banner Section */}
        <motion.section
          className="dark:bg-[#90CAF9] dark:text-gray-900 font-serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between ">
            {/* Text Section */}
            <motion.div
              className="lg:mt-0 mt-5 flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h1 className="lg:text-4xl font-bold leading-none">
                Hi, I'm
                <span className="dark:text-violet-600"> Nadim Mostofa</span>
              </h1>
              <h1 className="lg:text-2xl font-bold leading-none">
                I'm
                <span className="dark:text-violet-600"> <TypeAnimation
                  sequence={[
                    '', // Blank initial state
                    500, // Waits for 0.5s before starting
                    'MERN Stack Developer',
                    1000,
                    'Front-End Developer',
                    2000,
                    'React.js Developer',
                    3000,
                    'Web Developer',
                    () => {
                      // console.log('Sequence completed');
                    },
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                /></span>
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
                A passionate and dedicated junior web developer with hands-on experience in the MERN stack.
                I specialize in React.js, utilizing my expertise to create innovative and engaging websites.
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <a
                  rel="noopener noreferrer"
                  href="#project"
                  className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50 hover:shadow-lg transition-all"
                >
                  View My Work
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#contact"
                  className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-white transition-all"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>

            {/* Image Section with Hover and Animation */}
            <motion.div
              className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.1, rotate: 3 }}
            >
              <img
                src="https://i.ibb.co.com/kxmnLsb/profile.jpg"
                alt="Profile"
                className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-full border-4 border-violet-600 shadow-lg"
              />
            </motion.div>
          </div>
        </motion.section>
        <br /><br />
        {/* about section */}
        <About></About>
        {/* skills section */}
        <Skills></Skills>
        {/* project section */}
        <Projects></Projects>
        {/* contact section */}
          <Contact></Contact>
        {/* footer section */}
        <footer className="footer footer-center bg-[#E8F5E9] text-base-content rounded p-10">
          <nav className="grid grid-flow-col gap-4">
            <a href='/#about' className="link link-hover">About us</a>
            <a href='/#skills' className="link link-hover">Skills</a>
            <a href='/#project' className="link link-hover">Project</a>
            <a href='/#contact' className="link link-hover">Contact</a>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a href='https://www.facebook.com/profile.php?id=100033618980505' target='_blank' className='text-2xl hover:cursor-pointer hover:text-violet-500'>
                <FaFacebook />
              </a>
              <a href='https://www.linkedin.com/in/md-nadim-mostofa-931a48247' target='_blank' className='text-2xl hover:cursor-pointer hover:text-violet-500'>
                <FaLinkedin />
              </a>
              <a href='https://github.com/Nadimmo?tab=overview&from=2024-12-01&to=2024-12-18' target='_blank' className='text-2xl hover:cursor-pointer hover:text-violet-500'>
                <FaGithub />
              </a>
              <a href='' target='_blank' className='text-2xl hover:cursor-pointer hover:text-violet-500'>
                <FaInstagram />
              </a>
            </div>
          </nav>
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by Nadim Mostofa</p>
          </aside>
        </footer>

      </main>
    </div>
  );
}

export default App;
