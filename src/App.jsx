import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faNodeJs, faGitAlt, faGithub, faAws, faDocker, faBootstrap, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLaptopCode, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { BiLogoMongodb } from "react-icons/bi";
import ScrollAnimation from "react-animate-on-scroll";
import { useRef } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import Projects from '../Projects';


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

  const formRef = useRef(); // Reference to the form
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxlsBv-ardvGBSn1mtfZxVCPKBkkWsJB0rPadtS_ZOPLIjh5aJvthXbDQvdpn_6LBmH5g/exec"; // Replace with your script URL

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior

    const form = formRef.current; // Get the form DOM element
    const formData = new FormData(form); // Create FormData object

    try {
      // Send form data to Google Sheets using Axios
      await axios.post(scriptURL, formData);

      // Success alert
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully.",
        icon: "success",
        confirmButtonColor: "#3085d6",
      });

      form.reset(); // Clear form fields
    } catch (error) {
      console.error("Error!", error.message);

      // Error alert
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  };

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
              <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                Hi, I'm
                <span className="dark:text-violet-600"> Nadim Mostofa</span>
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
                  href="#"
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
        <section id="about" className="py-16 px-8 mt-10 text-black ">
          <Fade bottom cascade>
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-violet-600 mb-6">About Me</h2>
              <p className="text-xl mb-8">
                Hi! I'm Nadim Mostofa, and I specialize in web development. Here’s a little more about me and my educational journey.
              </p>

              <Tabs>
                <TabList className="flex justify-center space-x-6 mb-8">
                  <Tab className="cursor-pointer py-2 px-4 rounded-md hover:text-white hover:bg-violet-600 transition-all">
                    Education
                  </Tab>
                  <Tab className="cursor-pointer py-2 px-4 rounded-md hover:text-white hover:bg-violet-600 transition-all">
                    Academics
                  </Tab>
                  {/* Added Expertise Tab */}
                  <Tab className="cursor-pointer py-2 px-4 rounded-md hover:text-white hover:bg-violet-600 transition-all">
                    Expertise
                  </Tab>
                </TabList>

                {/* Education Tab */}
                <TabPanel>
                  <Fade bottom>
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold text-violet-500 mb-4">Education</h3>
                      <p className="text-lg">
                        I completed my <strong>SSC</strong> at <strong>Rangpur Technical School & College</strong> in the session 2019-2020, specializing in <strong>Civil Drafting with CAD</strong>.
                        My GPA was <strong>4.75</strong>. Currently, I'm pursuing my <strong>Diploma in Engineering</strong> at <strong>Kurigram Polytechnic Institute</strong>, with a major in <strong>Computer Science and Technology</strong>.
                        I will complete my diploma in <strong>2025</strong> and am currently in my <strong>6th semester</strong>.
                      </p>
                    </div>
                  </Fade>
                </TabPanel>

                {/* Academics Tab */}
                <TabPanel>
                  <Fade bottom>
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold text-violet-500 mb-4">Academic Achievements</h3>
                      <p className="text-lg">
                        Throughout my academic career, I have developed a strong interest in technology, especially in programming and web development.
                        I have successfully completed my 5th semester exams and am preparing for the 6th semester.
                        I'm always looking for ways to improve my skills and gain practical knowledge.
                      </p>
                    </div>
                  </Fade>
                </TabPanel>

                {/* Expertise Tab */}
                <TabPanel>
                  <Fade bottom>
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold text-violet-500 mb-4">Expertise</h3>
                      <p className="text-lg">
                        I am an expert in <strong>MERN Stack Web Development</strong>, with a strong focus on <strong>Frontend Development</strong>.
                        I specialize in <strong>React.js</strong> to create dynamic, user-friendly, and responsive websites.
                        My skills also extend to <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>, which enable me to build full-stack applications.
                        I am passionate about developing engaging and functional web applications, making React.js my go-to choice for frontend development.
                      </p>
                    </div>
                  </Fade>
                </TabPanel>
              </Tabs>
            </div>
          </Fade>
        </section>
        <br /><br />
        {/* skills section */}
        <section id="skills" className="py-16 px-8 ">
          <div className="group">
            <motion.h1
              className="text-4xl font-bold text-gray-800 relative inline-block hover:cursor-pointer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              My Skills
              <motion.span
                className="absolute left-0 bottom-0 h-1 bg-blue-600 w-0"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </motion.h1>
          </div>
          <br /><br />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Skills Description */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl text-black dark:text-black mb-8">
                I have experience in a wide range of technologies, tools, and techniques, from front-end development to back-end and project management.
              </p>
              <ul className="text-lg text-gray-600 space-y-4">
                <li><strong>Front-End Development:</strong> HTML5, CSS, JavaScript, ES6, Tailwind CSS, Bootstrap and React.js</li>
                <li><strong>Back-End Development:</strong> Node.js, Express.js</li>
                <li><strong>Databases:</strong> MongoDB</li>
                <li><strong>APIs:</strong> REST APIs</li>
                <li><strong>Version Control:</strong> Git & GitHub</li>
                <li><strong>Deployment:</strong> GitHub Page, Vercel, Netlify and Firebase</li>
              </ul>
            </motion.div>

            {/* Right Side - Icons */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-semibold text-black mb-6">Technologies</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-12">
                {/* Icons with Animation */}
                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl mb-4 text-gray-500 hover:text-violet-600">
                    <FontAwesomeIcon icon={faHtml5} />
                  </div>
                  <p className="text-lg text-black">HTML5</p>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl mb-4 text-gray-500 hover:text-violet-600">
                    <FontAwesomeIcon icon={faCss3Alt} />
                  </div>
                  <p className="text-lg text-black">CSS3</p>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl mb-4 text-gray-500 hover:text-violet-600">
                    <FontAwesomeIcon icon={faJs} />
                  </div>
                  <p className="text-lg text-black">JavaScript</p>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl mb-4 text-gray-500 hover:text-violet-600">
                    <FontAwesomeIcon icon={faReact} />
                  </div>
                  <p className="text-lg text-black">React.js</p>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl mb-4 text-gray-500 hover:text-violet-600">
                    <FontAwesomeIcon icon={faNodeJs} />
                  </div>
                  <p className="text-lg text-black">Node.js</p>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl mb-4 text-gray-500 hover:text-violet-600">
                    <BiLogoMongodb />
                  </div>
                  <p className="text-lg text-black">MongoDB</p>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl mb-4 text-gray-500 hover:text-violet-600">
                    <FontAwesomeIcon icon={faGitAlt} />
                  </div>
                  <p className="text-lg text-black">Git</p>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl mb-4 text-gray-500 hover:text-violet-600">
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                  <p className="text-lg text-black">GitHub</p>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl mb-4 text-gray-500 hover:text-violet-600">
                    <FontAwesomeIcon icon={faDocker} />
                  </div>
                  <p className="text-lg text-black">Docker</p>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl mb-4 text-gray-500 hover:text-violet-600">
                    <FontAwesomeIcon icon={faBootstrap} />
                  </div>
                  <p className="text-lg text-black">Bootstrap</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* project section */}
        <Projects></Projects>
        {/* contact section */}
        <section id="contact" className="py-16 px-8 text-black ">
          <ScrollAnimation animateIn="fadeIn">
            <div className=" flex items-center justify-center px-6 py-12">
              <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-8 w-full max-w-5xl transition-transform duration-300 hover:scale-105 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side - Contact Info */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
                  <p className="text-gray-700">
                    I’m here to help! Reach out to me for any queries, collaborations, or project discussions.
                  </p>

                  <div className="space-y-4">
                    {/* Phone */}
                    <div className="flex items-center space-x-4">
                      <FontAwesomeIcon icon={faPhone} className="text-blue-600 text-2xl" />
                      <span className="text-gray-800">+880 1756790052</span>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-4">
                      <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 text-2xl" />
                      <span className="text-gray-800">nadimmostafa334@email.com</span>
                    </div>

                    {/* Address */}
                    <div className="flex items-center space-x-4">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 text-2xl" />
                      <span className="text-gray-800">Rangpur City, Bangladesh</span>
                    </div>
                  </div>

                  {/* Social Media Icons */}
                  <div className="flex space-x-6 mt-6">
                    <a
                      href="https://github.com/Nadimmo?tab=overview&from=2024-12-01&to=2024-12-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 text-2xl transition"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/md-nadim-mostofa-931a48247"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 text-2xl transition"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=100033618980505"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 text-2xl transition"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </div>

                  {/* Download CV Button */}
                  {/* Download CV Button */}
                  <a
                    href="https://docs.google.com/document/d/1ng98B1qSjpzntnVEmlDfk2oKD3jCX46dS89SuNcCjLc/edit?usp=sharing" // Corrected file path with a leading slash
                    download // Specifies the downloaded file name
                    target='_blank'
                    className="inline-block  mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
                  >
                    View Resume
                  </a>

                </div>

                {/* Right Side - Contact Form */}
                <div>
                  <div className="group">
                    <h1 className="text-3xl font-bold text-gray-800 relative inline-block hover:cursor-pointer">
                      Contact Us
                      <span className="absolute left-0 bottom-0 h-1 bg-blue-600 w-0 transition-all duration-300 group-hover:w-full"></span>
                    </h1>
                  </div>
                  <br /><br />
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    name="submit-to-google-sheet"
                  >
                    {/* First Name */}
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Enter your first name"
                        className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows="4"
                        placeholder="Enter your message"
                        className="mt-1 block w-full rounded-lg border border-gray-300 p-3 focus:ring-blue-500 focus:border-blue-500"
                        required
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-transform transform hover:scale-105"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>

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
