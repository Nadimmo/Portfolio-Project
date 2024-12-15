import "./App.css";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



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
      <section className="dark:bg-gray-100 dark:text-gray-800">
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
              <br /><br />
      {/* about section */}
      <section id="about" className="dark:bg-gray-800 dark:text-gray-200 py-16 px-8 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-violet-600 mb-6">About Me</h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
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
              <p className="text-lg text-gray-800 dark:text-gray-300">
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
              <p className="text-lg text-gray-800 dark:text-gray-300">
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
              <p className="text-lg text-gray-800 dark:text-gray-300">
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
    </main>
  );
}

export default App;
