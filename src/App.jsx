import "./App.css";
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
    <main className="bg-base-200">
      {/* navbar section */}
      <section className="transition-all">
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
                <a href="/" className="hover:text-purple-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-400">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-purple-400">
                  Skills
                </a>
              </li>
              <li>
                <a href="/project" className="hover:text-purple-400">
                  Project
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-purple-400">
                  Contact
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
                  href="#"
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
      <ScrollAnimation animateIn='bounceInLeft'
        animateOut='bounceOutRight'>
        <section id="about" className="py-16 px-8 mt-10 text-black font-mono">
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
        </section>
      </ScrollAnimation>
      <br /><br />
      {/* skills section */}
      <ScrollAnimation animateIn='bounceInRight'
        animateOut='bounceOutLeft'>
        <section className="py-16 px-8 font-serif">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left Side - Skills Description */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-black mb-6">My Skills</h2>
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
        </section>
      </ScrollAnimation>
      {/* project section */}
      <ScrollAnimation animateIn='fadeIn'
        animateOut='fadeOut'>
        <section className="py-16 px-8 text-black font-serif">
          {/* first */}
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Project Image */}
              <div className="relative w-full h-64 md:h-80 flex justify-center items-center">
                <div className="w-[90%] h-[80%] bg-black rounded-md relative shadow-lg overflow-hidden">
                  {/* Laptop Screen */}
                  <div className="absolute inset-0 top-[8%] bottom-[8%] left-[4%] right-[4%] bg-gray-300 rounded-md overflow-hidden">
                    <img
                      src="https://i.ibb.co.com/HGQ3QgC/44.jpg"
                      alt="Project Screenshot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Project Title and Description */}
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-2xl font-bold">
                  Project Title
                </h2>
                <p className="text-black">
                  A short description of the project goes here. Explain the purpose,
                  technologies used, and what makes it unique in just a few lines.
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 text-violet-600 border border-violet-600 rounded-lg hover:bg-violet-600 hover:text-white transition-all"
                >
                  Live Preview
                </a>
              </div>
            </div>
          </div>
          {/* second */}
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Project Title and Description */}
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-2xl font-bold">
                  Project Title
                </h2>
                <p className="text-black">
                  A short description of the project goes here. Explain the purpose,
                  technologies used, and what makes it unique in just a few lines.
                </p>
                <a
                  href="#"
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
                      src="https://i.ibb.co.com/HGQ3QgC/44.jpg"
                      alt="Project Screenshot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* third */}
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Project Image */}
              <div className="relative w-full h-64 md:h-80 flex justify-center items-center">
                <div className="w-[90%] h-[80%] bg-black rounded-md relative shadow-lg overflow-hidden">
                  {/* Laptop Screen */}
                  <div className="absolute inset-0 top-[8%] bottom-[8%] left-[4%] right-[4%] bg-gray-300 rounded-md overflow-hidden">
                    <img
                      src="https://i.ibb.co.com/HGQ3QgC/44.jpg"
                      alt="Project Screenshot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Project Title and Description */}
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-2xl font-bold">
                  Project Title
                </h2>
                <p className="text-black">
                  A short description of the project goes here. Explain the purpose,
                  technologies used, and what makes it unique in just a few lines.
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 text-violet-600 border border-violet-600 rounded-lg hover:bg-violet-600 hover:text-white transition-all"
                >
                  Live Preview
                </a>
              </div>
            </div>
          </div>
          {/* four */}
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Project Title and Description */}
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-2xl font-bold">
                  Project Title
                </h2>
                <p className="text-black">
                  A short description of the project goes here. Explain the purpose,
                  technologies used, and what makes it unique in just a few lines.
                </p>
                <a
                  href="#"
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
                      src="https://i.ibb.co.com/HGQ3QgC/44.jpg"
                      alt="Project Screenshot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* five */}
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Project Image */}
              <div className="relative w-full h-64 md:h-80 flex justify-center items-center">
                <div className="w-[90%] h-[80%] bg-black rounded-md relative shadow-lg overflow-hidden">
                  {/* Laptop Screen */}
                  <div className="absolute inset-0 top-[8%] bottom-[8%] left-[4%] right-[4%] bg-gray-300 rounded-md overflow-hidden">
                    <img
                      src="https://i.ibb.co.com/HGQ3QgC/44.jpg"
                      alt="Project Screenshot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Project Title and Description */}
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-2xl font-bold">
                  Project Title
                </h2>
                <p className="text-black">
                  A short description of the project goes here. Explain the purpose,
                  technologies used, and what makes it unique in just a few lines.
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 text-violet-600 border border-violet-600 rounded-lg hover:bg-violet-600 hover:text-white transition-all"
                >
                  Live Preview
                </a>
              </div>
            </div>
          </div>
          {/* six */}
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Project Title and Description */}
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-2xl font-bold">
                  Project Title
                </h2>
                <p className="text-black">
                  A short description of the project goes here. Explain the purpose,
                  technologies used, and what makes it unique in just a few lines.
                </p>
                <a
                  href="#"
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
                      src="https://i.ibb.co.com/HGQ3QgC/44.jpg"
                      alt="Project Screenshot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

    </main>
  );
}

export default App;
