import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faNodeJs, faGitAlt, faGithub, faAws, faDocker, faBootstrap, faLinkedin, faFacebook, faMonero } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faEnvelope, faLaptopCode, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
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
import { TypeAnimation } from 'react-type-animation';


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
                      console.log('Sequence completed');
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
        <section id="about" className="py-16 px-8 mt-10 text-black bg-gradient-to-b from-violet-50 to-blue-50">
          <Fade bottom cascade>
            <div className="max-w-7xl mx-auto text-center">
              {/* Section Title */}
              <h2 className="text-4xl font-bold text-violet-600 mb-6">
                About Me
              </h2>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                Hi! I'm <span className="text-violet-600 font-bold">Nadim Mostofa</span>, a passionate web developer. Here's a glimpse of my educational journey, expertise, and academic highlights.
              </p>

              <Tabs>
                {/* Tab List */}
                <TabList className="flex justify-center space-x-4 md:space-x-6 mb-8">
                  <Tab
                    className="cursor-pointer py-2 px-6 rounded-md text-gray-600 font-medium bg-white shadow-md hover:text-white hover:bg-violet-600 transition-all"
                    selectedClassName="bg-violet-600 text-white"
                  >
                    Education
                  </Tab>
                  <Tab
                    className="cursor-pointer py-2 px-6 rounded-md text-gray-600 font-medium bg-white shadow-md hover:text-white hover:bg-violet-600 transition-all"
                    selectedClassName="bg-violet-600 text-white"
                  >
                    Academics
                  </Tab>
                  <Tab
                    className="cursor-pointer py-2 px-6 rounded-md text-gray-600 font-medium bg-white shadow-md hover:text-white hover:bg-violet-600 transition-all"
                    selectedClassName="bg-violet-600 text-white"
                  >
                    Expertise
                  </Tab>
                </TabList>

                {/* Education Tab */}
                <TabPanel>
                  <Fade bottom>
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-violet-600 mb-4">
                        My Education
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        I completed my <strong>SSC</strong> at{" "}
                        <span className="text-violet-500">
                          Rangpur Technical School & College
                        </span>{" "}
                        (2019-2020), specializing in{" "}
                        <strong>Civil Drafting with CAD</strong> with a GPA of{" "}
                        <strong>4.75</strong>. <br /> Currently, I'm pursuing a{" "}
                        <strong>Diploma in Engineering</strong> at{" "}
                        <span className="text-violet-500">
                          Kurigram Polytechnic Institute
                        </span>{" "}
                        in <strong>Computer Science and Technology</strong>, set to
                        graduate in <strong>2025</strong>.
                      </p>
                    </div>
                  </Fade>
                </TabPanel>

                {/* Academics Tab */}
                <TabPanel>
                  <Fade bottom>
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-violet-600 mb-4">
                        Academic Achievements
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        I've consistently excelled in academics, showcasing a strong
                        passion for technology, programming, and web development. I
                        have successfully completed my <strong>6th semester</strong>{" "}
                        exams and am currently advancing through the{" "}
                        <strong>7th semester</strong>, focusing on hands-on projects
                        and practical knowledge.
                      </p>
                    </div>
                  </Fade>
                </TabPanel>

                {/* Expertise Tab */}
                <TabPanel>
                  <Fade bottom>
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-violet-600 mb-4">
                        My Expertise
                      </h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        As a <strong>MERN Stack Developer</strong>, I specialize in{" "}
                        <strong>React.js</strong>, creating responsive and user-friendly
                        web applications. My expertise extends to{" "}
                        <strong>Node.js</strong>, <strong>Express.js</strong>, and{" "}
                        <strong>MongoDB</strong>, enabling me to develop robust
                        full-stack solutions. I am deeply passionate about building
                        engaging and scalable applications, with{" "}
                        <strong>React.js</strong> being my preferred frontend
                        framework.
                      </p>
                    </div>
                  </Fade>
                </TabPanel>
              </Tabs>
            </div>
          </Fade>
        </section>
        {/* skills section */}
        <section id="skills" className="py-16 px-8 bg-gray-50">
          <div className="group text-center mb-12">
            <motion.h1
              className="text-4xl font-bold text-gray-800 relative inline-block"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              My Skills
              <motion.span
                className="absolute left-0 bottom-0 h-1 bg-violet-600 w-0"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              ></motion.span>
            </motion.h1>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Skills Description */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl text-gray-700 mb-8">
                I bring expertise in a variety of technologies and tools, ensuring the delivery of scalable and efficient web applications.
              </p>
              <ul className="text-lg text-gray-600 space-y-4">
                <li><strong>Front-End:</strong> HTML5, CSS3, JavaScript (ES6), React.js, Tailwind CSS, Bootstrap</li>
                <li><strong>Back-End:</strong> Node.js, Express.js</li>
                <li><strong>Databases:</strong> MongoDB</li>
                <li><strong>APIs:</strong> REST APIs</li>
                <li><strong>Version Control:</strong> Git & GitHub</li>
                <li><strong>Deployment:</strong> Vercel, Netlify, Firebase</li>
              </ul>
            </motion.div>

            {/* Right Side - Skills Icons */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">Technologies</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">
                {/* Icon Items */}
                {[
                  { name: "HTML5", icon: faHtml5 },
                  { name: "CSS3", icon: faCss3Alt },
                  { name: "JavaScript", icon: faJs },
                  { name: "React.js", icon: faReact },
                  { name: "Node.js", icon: faNodeJs },
                  { name: "MongoDB", icon: faDatabase },
                  { name: "Git", icon: faGitAlt },
                  { name: "GitHub", icon: faGithub },
                  { name: "Docker", icon: faDocker },
                  { name: "Bootstrap", icon: faBootstrap },
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-4xl mb-4 text-gray-500 hover:text-violet-600">
                      <FontAwesomeIcon icon={tech.icon} />
                    </div>
                    <p className="text-lg text-gray-700">{tech.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        {/* project section */}
        <Projects></Projects>
        {/* contact section */}
        <section id="contact" className="py-16 px-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <ScrollAnimation animateIn="fadeIn">
            <div className="flex items-center justify-center px-6 py-12">
              <div className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-8 w-full max-w-5xl transition-transform duration-300 hover:scale-105 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side - Contact Info */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Get in Touch</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    I’m here to help! Reach out to me for any queries, collaborations, or project discussions.
                  </p>

                  <div className="space-y-4">
                    {/* Phone */}
                    <div className="flex items-center space-x-4">
                      <FontAwesomeIcon icon={faPhone} className="text-blue-600 dark:text-blue-400 text-2xl" />
                      <span className="text-gray-800 dark:text-gray-200">+880 1756790052</span>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-4">
                      <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 dark:text-blue-400 text-2xl" />
                      <span className="text-gray-800 dark:text-gray-200">nadimmostafa334@email.com</span>
                    </div>

                    {/* Address */}
                    <div className="flex items-center space-x-4">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 dark:text-blue-400 text-2xl" />
                      <span className="text-gray-800 dark:text-gray-200">Rangpur City, Bangladesh</span>
                    </div>
                  </div>

                  {/* Social Media Icons */}
                  <div className="flex space-x-6 mt-6">
                    <a
                      href="https://github.com/Nadimmo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-2xl transition"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/md-nadim-mostofa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-2xl transition"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=100033618980505"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-2xl transition"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </div>

                  {/* View Resume Button */}
                  <a
                    href="https://docs.google.com/document/d/1ng98B1qSjpzntnVEmlDfk2oKD3jCX46dS89SuNcCjLc/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
                  >
                    View Resume
                  </a>
                </div>

                {/* Right Side - Contact Form */}
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Contact Us</h1>
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6 mt-6"
                    name="submit-to-google-sheet"
                  >
                    {/* First Name */}
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Enter your first name"
                        className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-3 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-3 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows="4"
                        placeholder="Enter your message"
                        className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-3 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
                        required
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-transform transform hover:scale-105"
                    >
                      Send Message
                    </button>
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
