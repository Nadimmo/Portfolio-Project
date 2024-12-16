import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faNodeJs, faGitAlt, faGithub, faAws, faDocker, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { BiLogoMongodb } from "react-icons/bi";
import ScrollAnimation from "react-animate-on-scroll";



function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="bg-white">
      {/* navbar section */}
      <section className="transition-all fixed z-10 w-full">
        <div
          className={`navbar ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
            } transition-all shadow-md`}
        >
          {/* Left Side - Logo/Image */}
          <div className="navbar-start">
            <a href="/" className="flex items-center space-x-2">
              <img
                src="https://i.ibb.co.com/kxmnLsb/profile.jpg"
                alt="Logo"
                className="h-12 w-12 rounded-full border-2 border-purple-500 shadow-md"
              />

            </a>
          </div>

          {/* Center - Navigation Links */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-4 space-x-6 font-semibold">
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
          </div>


          {/* Right Side - Dark/Light Mode Toggle */}
          <div className="navbar-end">
            <button
              onClick={toggleDarkMode}
              className="btn btn-outline border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all"
            >
              {darkMode ? (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m8.66-7.66l-.7.7M4.34 4.34l-.7.7m16 12-.7.7m-14.34 0-.7-.7m6.68-15.66a9 9 0 110 18 9 9 0 010-18z"
                    />
                  </svg>{" "}
                  Light Mode
                </span>
              ) : (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m8.66-7.66l-.7.7M4.34 4.34l-.7.7m16 12-.7.7m-14.34 0-.7-.7m6.68-15.66a9 9 0 110 18 9 9 0 010-18z"
                    />
                  </svg>{" "}
                  Dark Mode
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* main section */}
      <main >
        {/* Banner Section */}
        <ScrollAnimation animateIn='fadeIn'
          animateOut='fadeOut' >
          <section className="dark:bg-gray-100 dark:text-gray-800 font-serif">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              {/* Text Section */}
              <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
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
                    className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50 hover:shadow-lg transition-all">
                    View My Work
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-white transition-all">
                    Contact Me
                  </a>
                </div>
              </div>

              {/* Image Section with Hover and Animation */}
              <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img
                  src="https://i.ibb.co.com/kxmnLsb/profile.jpg"
                  alt="Profile"
                  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-full border-4 border-violet-600 shadow-lg transition-transform duration-500 hover:scale-110 hover:rotate-3" />
              </div>
            </div>
          </section>
        </ScrollAnimation>
        <br /><br />
        {/* about section */}
        <section id="about" className="py-16 px-8 mt-10 text-black font-mono">
          <ScrollAnimation animateIn='bounceInLeft'
            animateOut='bounceOutRight'>
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-violet-600 mb-6">About Me</h2>
              <p className="text-xl  mb-8">
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
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-violet-500 mb-4">Education</h3>
                    <p className="text-lg ">
                      I completed my **SSC** at **Rangpur Technical School & College** in the session 2019-2020, specializing in **Civil Drafting with CAD**.
                      My GPA was **4.75**. Currently, I'm pursuing my **Diploma in Engineering** at **Kurigram Polytechnic Institute**, with a major in **Computer Science and Technology**.
                      I will complete my diploma in **2025** and am currently in my **6th semester**.
                    </p>
                  </div>
                </TabPanel>

                {/* Academics Tab */}
                <TabPanel>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-violet-500 mb-4">Academic Achievements</h3>
                    <p className="text-lg ">
                      Throughout my academic career, I have developed a strong interest in technology, especially in programming and web development.
                      I have successfully completed my 5th semester exams and am preparing for the 6th semester.
                      I'm always looking for ways to improve my skills and gain practical knowledge.
                    </p>
                  </div>
                </TabPanel>

                {/* Expertise Tab */}
                <TabPanel>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-violet-500 mb-4">Expertise</h3>
                    <p className="text-lg ">
                      I am an expert in **MERN Stack Web Development**, with a strong focus on **Frontend Development**.
                      I specialize in **React.js** to create dynamic, user-friendly, and responsive websites.
                      My skills also extend to **Node.js**, **Express.js**, and **MongoDB**, which enable me to build full-stack applications.
                      I am passionate about developing engaging and functional web applications, making React.js my go-to choice for frontend development.
                    </p>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </ScrollAnimation>
        </section>
        <br /><br />
        {/* skills section */}
        <section id="skills" className="py-16 px-8 font-serif">
          {/* My Skills */}
          <div className="group">
            <h1 className="text-4xl font-bold text-gray-800 relative inline-block hover:cursor-pointer">
              My Skills
              <span className="absolute left-0 bottom-0 h-1 bg-blue-600 w-0 transition-all duration-300 group-hover:w-full"></span>
            </h1>
          </div>
          <br /><br />
          <ScrollAnimation animateIn='bounceInRight'
            animateOut='bounceOutLeft'>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Left Side - Skills Description */}
              <div className="text-center lg:text-left">
                <p className="text-xl text-black dark:text-black mb-8">
                  I have experience in a wide range of technologies, tools, and techniques, from front-end development to back-end and project management.
                </p>

                <ul className="text-lg text-black dark:text-black space-y-4">
                  <li><strong>Front-End Development:</strong> HTML5, CSS, JavaScript, ES6, Tailwind CSS, Bootstrap</li>
                  <li><strong>Back-End Development:</strong> Node.js, Express.js</li>
                  <li><strong>Databases:</strong> MongoDB</li>
                  <li><strong>APIs:</strong> REST APIs</li>
                  <li><strong>Project Management:</strong> Proven ability to manage and deliver projects efficiently</li>
                  <li><strong>Networking:</strong> Good experience in networking</li>
                  <li><strong>Other's:</strong> Git and  GitHub Project Collaboration, AWS, Docker</li>
                </ul>
              </div>

              {/* Right Side - Icons */}
              <div className="text-center">
                <h3 className="text-3xl font-semibold text-black mb-6">Technologies</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-12">

                  {/* Front-End Icons */}
                  <div className="flex flex-col items-center">
                    <div className="text-4xl mb-4 text-gray-500 hover:cursor-pointer hover:text-violet-600 transition-transform transform hover:scale-125">
                      <FontAwesomeIcon icon={faHtml5} />
                    </div>
                    <p className="text-lg text-black">HTML5</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-4xl mb-4 text-gray-500 hover:cursor-pointer hover:text-violet-600 transition-transform transform hover:scale-125">
                      <FontAwesomeIcon icon={faCss3Alt} />
                    </div>
                    <p className="text-lg text-black">CSS3</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-4xl mb-4 text-gray-500 hover:cursor-pointer hover:text-violet-600 transition-transform transform hover:scale-125">
                      <FontAwesomeIcon icon={faJs} />
                    </div>
                    <p className="text-lg text-black">JavaScript</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-4xl mb-4 text-gray-500 hover:cursor-pointer hover:text-violet-600 transition-transform transform hover:scale-125">
                      <FontAwesomeIcon icon={faReact} />
                    </div>
                    <p className="text-lg text-black">React.js</p>
                  </div>

                  {/* Back-End Icons */}
                  <div className="flex flex-col items-center">
                    <div className="text-4xl mb-4 text-gray-500 hover:cursor-pointer hover:text-violet-600 transition-transform transform hover:scale-125">
                      <FontAwesomeIcon icon={faNodeJs} />
                    </div>
                    <p className="text-lg text-black">Node.js</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-4xl mb-4 text-gray-500 hover:cursor-pointer hover:text-violet-600 transition-transform transform hover:scale-125">
                      <BiLogoMongodb />
                    </div>
                    <p className="text-lg text-black">MongoDB</p>
                  </div>

                  {/* Version Control Icons */}
                  <div className="flex flex-col items-center">
                    <div className="text-4xl mb-4 text-gray-500 hover:cursor-pointer hover:text-violet-600 transition-transform transform hover:scale-125">
                      <FontAwesomeIcon icon={faGitAlt} />
                    </div>
                    <p className="text-lg text-black">Git</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-4xl mb-4 text-gray-500 hover:cursor-pointer hover:text-violet-600 transition-transform transform hover:scale-125">
                      <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <p className="text-lg text-black">GitHub</p>
                  </div>

                  {/* Other Skills */}
                  <div className="flex flex-col items-center">
                    <div className="text-4xl mb-4 text-gray-500 hover:cursor-pointer hover:text-violet-600 transition-transform transform hover:scale-125">
                      <FontAwesomeIcon icon={faAws} />
                    </div>
                    <p className="text-lg text-black">AWS</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-4xl mb-4 text-gray-500 hover:cursor-pointer hover:text-violet-600 transition-transform transform hover:scale-125">
                      <FontAwesomeIcon icon={faDocker} />
                    </div>
                    <p className="text-lg text-black">Docker</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-4xl mb-4 text-gray-500 hover:cursor-pointer hover:text-violet-600 transition-transform transform hover:scale-125">
                      <FontAwesomeIcon icon={faBootstrap} />
                    </div>
                    <p className="text-lg text-black">Bootstrap</p>
                  </div>
                </div>
              </div>

            </div>
          </ScrollAnimation>
        </section>
        {/* project section */}
        <section id="project" className="py-16 px-8 text-black font-serif">
          {/* Projects */}
          <div className="group">
            <h1 className="text-4xl font-bold text-gray-800 relative inline-block hover:cursor-pointer">
              My Projects
              <span className="absolute left-0 bottom-0 h-1 bg-blue-600 w-0 transition-all duration-300 group-hover:w-full"></span>
            </h1>
          </div>
          <br /><br />
          {/* first */}
          <ScrollAnimation animateIn='bounceInLeft'
            animateOut='bounceOutRight'>
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Project Image */}
                <div className="relative w-full h-64 md:h-80 flex justify-center items-center">
                  <div className="w-[90%] h-[80%] bg-black rounded-md relative shadow-lg overflow-hidden">
                    {/* Laptop Screen */}
                    <div className="absolute inset-0 top-[8%] bottom-[8%] left-[4%] right-[4%] bg-gray-300 rounded-md overflow-hidden">
                      <img
                        src="https://i.ibb.co.com/cFVrVMK/First.png"
                        alt="Project Screenshot"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Side - Project Title and Description */}
                <div className="space-y-4 text-center md:text-left">
                  <h2 className="text-2xl font-bold">
                    Survey Pro
                  </h2>
                  <p className="text-black">
                    At SurveyPro, we empower businesses and individuals to gather insights effortlessly. Whether you're conducting market research, gathering employee feedback, or exploring new trends, our tools are designed to make your surveys seamless and impactful.
                  </p>
                  <a
                    href="https://assignment-12-6f33b.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 text-violet-600 border border-violet-600 rounded-lg hover:bg-violet-600 hover:text-white transition-all"
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          {/* second */}
          <ScrollAnimation animateIn='bounceInRight'
            animateOut='bounceOutLeft'>
            {/* second */}
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Project Title and Description */}
                <div className="space-y-4 text-center md:text-left">
                  <h2 className="text-2xl font-bold">
                    Cyclist Club
                  </h2>
                  <p className="text-black">
                    Racing is still encouraged and remains an important part of the Team. Members are welcome to race if they choose to do so.


                  </p>
                  <a
                    href="https://cylist-club.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 text-violet-600 border border-violet-600 rounded-lg hover:bg-violet-600 hover:text-white transition-all"
                  >
                    Live Preview
                  </a>
                </div>
                {/* Right Side - Project Image */}
                <div className="relative w-full h-64 md:h-80 flex justify-center items-center">
                  <div className="w-[90%] h-[80%] bg-black rounded-md relative shadow-lg overflow-hidden">
                    {/* Laptop Screen */}
                    <div className="absolute inset-0 top-[8%] bottom-[8%] left-[4%] right-[4%] bg-gray-300 rounded-md overflow-hidden">
                      <img
                        src="https://i.ibb.co.com/cYmKjXp/Second.png"
                        alt="Project Screenshot"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          {/* third */}
          <ScrollAnimation animateIn='bounceInLeft'
            animateOut='bounceOutRight'>
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Project Image */}
                <div className="relative w-full h-64 md:h-80 flex justify-center items-center">
                  <div className="w-[90%] h-[80%] bg-black rounded-md relative shadow-lg overflow-hidden">
                    {/* Laptop Screen */}
                    <div className="absolute inset-0 top-[8%] bottom-[8%] left-[4%] right-[4%] bg-gray-300 rounded-md overflow-hidden">
                      <img
                        src="https://i.ibb.co.com/f9W3jWZ/Third.png"
                        alt="Project Screenshot"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Side - Project Title and Description */}
                <div className="space-y-4 text-center md:text-left">
                  <h2 className="text-2xl font-bold">
                    Doctor House
                  </h2>
                  <p className="text-black">
                    At Doctor House, we combine medical expertise, state-of-the-art facilities, and heartfelt compassion to ensure the best healthcare experience for you.
                  </p>
                  <a
                    href="https://doctorhouse-259ce.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 text-violet-600 border border-violet-600 rounded-lg hover:bg-violet-600 hover:text-white transition-all"
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          {/* four */}
          <ScrollAnimation animateIn='bounceInRight'
            animateOut='bounceOutLeft'>
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Project Title and Description */}
                <div className="space-y-4 text-center md:text-left">
                  <h2 className="text-2xl font-bold">
                    Tech job Fair
                  </h2>
                  <p className="text-black">
                    Join TechJobFair, the ultimate event for tech professionals and companies! Connect with top employers, explore cutting-edge technologies, and discover exciting career opportunities. Network with industry leaders and attend insightful workshops to advance your tech career. Don’t miss this chance to elevate your professional journey!
                  </p>
                  <a
                    href="https://assignment-11-7d11c.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 text-violet-600 border border-violet-600 rounded-lg hover:bg-violet-600 hover:text-white transition-all"
                  >
                    Live Preview
                  </a>
                </div>
                {/* Right Side - Project Image */}
                <div className="relative w-full h-64 md:h-80 flex justify-center items-center">
                  <div className="w-[90%] h-[80%] bg-black rounded-md relative shadow-lg overflow-hidden">
                    {/* Laptop Screen */}
                    <div className="absolute inset-0 top-[8%] bottom-[8%] left-[4%] right-[4%] bg-gray-300 rounded-md overflow-hidden">
                      <img
                        src="https://i.ibb.co.com/0YPXvr7/Four.png"
                        alt="Project Screenshot"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>
        {/* contact section */}
        <section id="contact" className="py-16 px-8 text-black font-serif">
          <ScrollAnimation animateIn='fadeIn'>
            <div className=" bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center px-6 py-12">
              <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-8 w-full max-w-3xl transition-transform duration-300 hover:scale-105">
                {/* Contact */}
                <div className="group">
                  <h1 className="text-3xl font-bold text-gray-800 relative inline-block hover:cursor-pointer">
                    Contact us
                    <span className="absolute left-0 bottom-0 h-1 bg-blue-600 w-0 transition-all duration-300 group-hover:w-full"></span>
                  </h1>
                </div>
                <br /><br />
                <form className="space-y-6">
                  {/* First Name Field */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Enter your first name"
                      className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 transition-all duration-200 ease-in-out hover:border-blue-500"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 transition-all duration-200 ease-in-out hover:border-blue-500"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="Enter your message"
                      className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 transition-all duration-200 ease-in-out hover:border-blue-500"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </ScrollAnimation>
        </section>
        {/* footer section */}
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
          </aside>
        </footer>

      </main>
    </div>
  );
}

export default App;
